use once_cell::sync::Lazy;
use regex::Regex;
use serde_json::{json, Value};
use std::sync::Mutex;
use std::time::Duration;
use tauri::{AppHandle, Emitter};
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::sync::mpsc;

const PORT: u16 = 27870;

#[derive(Default)]
struct St {
    connected: bool,
    version: Value,
    me: Value,
    room: Value,
    room_blob: String,
    match_state: Value,
    last_result: Value,
}

static ST: Lazy<Mutex<St>> = Lazy::new(|| Mutex::new(St { match_state: json!(-1), ..Default::default() }));
static OUT: Lazy<Mutex<Option<mpsc::UnboundedSender<String>>>> = Lazy::new(Default::default);
static TAG: Lazy<Regex> = Lazy::new(|| Regex::new(r"<[^<>]{0,63}>").unwrap());
static INVIS: Lazy<Regex> = Lazy::new(|| Regex::new("[\\x00-\\x1f\\x7f\u{200b}-\u{200f}\u{feff}]").unwrap());
static SPACES: Lazy<Regex> = Lazy::new(|| Regex::new(r" +").unwrap());
static FRIEND_ID: Lazy<Regex> = Lazy::new(|| Regex::new(r"^[0-9A-F]{6,24}$").unwrap());

pub fn lz4(src: &[u8]) -> Vec<u8> {
    let mut out: Vec<u8> = Vec::new();
    let mut i = 0usize;
    let get = |i: usize| -> Option<u8> { src.get(i).copied() };
    'outer: while i < src.len() {
        let Some(t) = get(i) else { break };
        i += 1;
        let mut l = (t >> 4) as usize;
        if l == 15 {
            loop {
                let Some(b) = get(i) else { break 'outer };
                i += 1;
                l += b as usize;
                if b != 255 {
                    break;
                }
            }
        }
        for _ in 0..l {
            let Some(b) = get(i) else { break 'outer };
            i += 1;
            out.push(b);
        }
        if i + 1 >= src.len() {
            break;
        }
        let off = src[i] as usize | ((src[i + 1] as usize) << 8);
        i += 2;
        let mut m = (t & 15) as usize;
        if m == 15 {
            loop {
                let Some(b) = get(i) else { break 'outer };
                i += 1;
                m += b as usize;
                if b != 255 {
                    break;
                }
            }
        }
        m += 4;
        if off == 0 || off > out.len() {
            break;
        }
        let s = out.len() - off;
        for k in 0..m {
            let b = out[s + k];
            out.push(b);
        }
    }
    out
}

pub fn decode_room(blob: &str) -> Value {
    use base64::Engine;
    if blob.is_empty() {
        return Value::Null;
    }
    let raw = base64::engine::general_purpose::STANDARD
        .decode(blob.trim())
        .or_else(|_| base64::engine::general_purpose::STANDARD_NO_PAD.decode(blob.trim()))
        .unwrap_or_default();
    let bytes = lz4(&raw);
    let u: Vec<u16> = bytes.chunks_exact(2).map(|c| u16::from_le_bytes([c[0], c[1]])).collect();
    let txt = String::from_utf16_lossy(&u);
    let mut end = txt.rfind('}').map(|p| p + 1).unwrap_or(0);
    while end > 0 {
        if let Ok(v) = serde_json::from_str::<Value>(&txt[..end]) {
            return v;
        }
        if end < 2 {
            break;
        }
        end = txt[..end - 1].rfind('}').map(|p| p + 1).unwrap_or(0);
    }
    Value::Null
}

pub fn clean_nick(n: &Value) -> String {
    let s = match n {
        Value::String(s) => s.clone(),
        Value::Null => String::new(),
        Value::Bool(false) => String::new(),
        x => x.to_string(),
    };
    let s = TAG.replace_all(&s, "");
    let s = INVIS.replace_all(&s, "");
    SPACES.replace_all(&s, " ").trim().to_string()
}

fn truthy(v: &Value) -> bool {
    crate::settings::truthy(Some(v))
}
fn or(v: &Value, d: Value) -> Value {
    if truthy(v) { v.clone() } else { d }
}

fn room_view(r: &Value) -> Value {
    if r.is_null() {
        return Value::Null;
    }
    let players: Vec<Value> = r
        .get("_players")
        .and_then(|p| p.as_array())
        .map(|a| {
            a.iter()
                .map(|p| {
                    let pd = p.get("PlayerData").cloned().unwrap_or(Value::Null);
                    let g = |k: &str| pd.get(k).cloned().unwrap_or(Value::Null);
                    json!({ "id": g("PlayFabId"), "nick": clean_nick(&g("Nickname")), "level": g("Level"),
                            "team": p.get("TeamId").cloned().unwrap_or(Value::Null), "leader": truthy(p.get("LeaderTag").unwrap_or(&Value::Null)) })
                })
                .collect()
        })
        .unwrap_or_default();
    let g = |k: &str| r.get(k).cloned().unwrap_or(Value::Null);
    json!({
        "id": g("_roomId"), "version": g("_roomAppVersion"), "region": g("_roomRegion"), "mode": g("_selectedGameMode"),
        "map": g("_selectedMatchIndex"), "league": g("_matchLeague"), "state": or(&g("_gameRoomMatchState"), json!(0)),
        "session": or(&g("_matchSessionId"), json!("")), "players": players,
    })
}

fn state_of(st: &St) -> Value {
    json!({ "connected": st.connected, "version": st.version, "me": st.me, "room": st.room, "matchState": st.match_state, "lastResult": st.last_result })
}
pub fn state() -> Value {
    state_of(&ST.lock().unwrap())
}

fn now_ms() -> u64 {
    std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.as_millis() as u64).unwrap_or(0)
}

fn on_event(app: &AppHandle, ev: Value) {
    let kind = ev.get("ev").and_then(|v| v.as_str()).unwrap_or("").to_string();
    let (out_ev, snapshot) = {
        let mut st = ST.lock().unwrap();
        match kind.as_str() {
            "status" => {
                st.version = ev.get("version").cloned().unwrap_or(Value::Null);
                if let Some(me) = ev.get("me").filter(|v| truthy(v)) {
                    let nick = st.me.get("nick").filter(|v| truthy(v)).cloned().unwrap_or(json!(""));
                    st.me = json!({ "id": me, "nick": nick });
                }
            }
            "me" => {
                let n = clean_nick(ev.get("nick").unwrap_or(&Value::Null));
                let nick = if !n.is_empty() { json!(n) } else { st.me.get("nick").filter(|v| truthy(v)).cloned().unwrap_or(json!("")) };
                st.me = json!({ "id": ev.get("id").cloned().unwrap_or(Value::Null), "nick": nick });
            }
            "room" => {
                let blob = ev.get("room").and_then(|v| v.as_str()).unwrap_or("").to_string();
                st.room = room_view(&decode_room(&blob));
                st.room_blob = blob;
                let my_id = st.me.get("id").cloned();
                if let (Some(id), Some(players)) = (my_id, st.room.get("players").and_then(|p| p.as_array()).cloned()) {
                    if let Some(mine) = players.iter().find(|p| p.get("id") == Some(&id)) {
                        if mine.get("nick").map(truthy).unwrap_or(false) && st.me.is_object() {
                            st.me["nick"] = mine["nick"].clone();
                        }
                    }
                }
            }
            "match" => st.match_state = ev.get("state").cloned().unwrap_or(Value::Null),
            "result" => {
                if ev.get("why").and_then(|v| v.as_str()) != Some("live") {
                    let mut r = ev.clone();
                    r["at"] = json!(now_ms());
                    st.last_result = r;
                }
            }
            _ => {}
        }
        let out_ev = if kind == "room" { json!({ "ev": "room", "room": st.room }) } else { ev };
        (out_ev, state_of(&st))
    };
    let _ = app.emit("cm:event", out_ev);
    let _ = app.emit("cm:state", snapshot);
}

pub fn start(app: AppHandle) {
    tauri::async_runtime::spawn(async move {
        loop {
            if let Ok(Ok(sock)) = tokio::time::timeout(Duration::from_secs(3), tokio::net::TcpStream::connect(("127.0.0.1", PORT))).await {
                let (r, mut w) = sock.into_split();
                let (tx, mut rx) = mpsc::unbounded_channel::<String>();
                *OUT.lock().unwrap() = Some(tx);
                ST.lock().unwrap().connected = true;
                let _ = app.emit("cm:state", state());
                let writer = tauri::async_runtime::spawn(async move {
                    while let Some(line) = rx.recv().await {
                        if w.write_all(line.as_bytes()).await.is_err() {
                            break;
                        }
                    }
                });
                let mut lines = BufReader::new(r).lines();
                while let Ok(Some(line)) = lines.next_line().await {
                    if let Ok(v) = serde_json::from_str::<Value>(&line) {
                        on_event(&app, v);
                    }
                }
                writer.abort();
                *OUT.lock().unwrap() = None;
                let was = std::mem::replace(&mut ST.lock().unwrap().connected, false);
                if was {
                    let _ = app.emit("cm:state", state());
                }
            }
            tokio::time::sleep(Duration::from_secs(3)).await;
        }
    });
}

fn cmd(o: Value) -> Result<bool, String> {
    let tx = OUT.lock().unwrap().clone();
    match tx {
        Some(tx) if ST.lock().unwrap().connected => {
            tx.send(format!("{o}\n")).map_err(|e| e.to_string())?;
            Ok(true)
        }
        _ => Err("Мод CM не підключений — запусти гру з модом Konzte".into()),
    }
}

fn js_str(v: &Value) -> String {
    match v {
        Value::String(s) => s.clone(),
        Value::Null => String::new(),
        Value::Bool(false) => String::new(),
        Value::Number(n) if n.as_f64() == Some(0.0) => String::new(),
        x => x.to_string(),
    }
}
fn int32(v: &Value) -> i64 {
    let x = match v {
        Value::Number(n) => n.as_f64().unwrap_or(0.0),
        Value::String(s) => s.trim().parse().unwrap_or(0.0),
        Value::Bool(b) => *b as i64 as f64,
        _ => 0.0,
    };
    if x.is_finite() { (x.trunc() as i64) as i32 as i64 } else { 0 }
}

pub fn create(league: &Value) -> Result<bool, String> {
    cmd(json!({ "cmd": "create", "league": int32(league) }))
}
pub fn join(blob: &Value) -> Result<bool, String> {
    cmd(json!({ "cmd": "join", "room": js_str(blob) }))
}
pub fn leave() -> Result<bool, String> {
    cmd(json!({ "cmd": "leave" }))
}
pub fn invite(id: &Value) -> Result<bool, String> {
    cmd(json!({ "cmd": "invite", "id": js_str(id) }))
}
pub fn room_blob() -> String {
    ST.lock().unwrap().room_blob.clone()
}
pub fn result() -> Result<bool, String> {
    cmd(json!({ "cmd": "result" }))
}
pub fn expect_friends(ids: &Value) -> Result<bool, String> {
    let list: Vec<String> = ids
        .as_array()
        .map(|a| a.iter().map(|x| js_str(x).to_uppercase()).filter(|x| FRIEND_ID.is_match(x)).take(16).collect())
        .unwrap_or_default();
    cmd(json!({ "cmd": "expectFriends", "ids": list.join(",") }))
}
pub fn add_friend(id: &Value) -> Result<bool, String> {
    cmd(json!({ "cmd": "addFriend", "id": js_str(id) }))
}
pub fn friends() -> Result<bool, String> {
    cmd(json!({ "cmd": "friends" }))
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn nick() {
        assert_eq!(clean_nick(&json!("<color=#ff0>Pro</color>  \u{200b}Gamer ")), "Pro Gamer");
    }
    #[test]
    fn lz4_literal_only() {
        let src = [0x50u8, b'h', b'e', b'l', b'l', b'o'];
        assert_eq!(lz4(&src), b"hello");
        let src = [0x20u8, b'a', b'b', 2, 0, 0x00, b'!'];
        assert_eq!(&lz4(&src)[..6], b"ababab");
    }
    #[test]
    fn room_trailing_garbage() {
        use base64::Engine;
        let json = r#"{"_roomId":"r1","_players":[{"PlayerData":{"PlayFabId":"AB12","Nickname":"<b>X</b>"},"TeamId":2,"LeaderTag":1}]}junk}"#;
        let u: Vec<u8> = json.encode_utf16().flat_map(|c| c.to_le_bytes()).collect();
        let mut src = vec![0xF0u8];
        let mut l = u.len() - 15;
        while l >= 255 { src.push(255); l -= 255; }
        src.push(l as u8);
        src.extend_from_slice(&u);
        let blob = base64::engine::general_purpose::STANDARD.encode(&src);
        let v = room_view(&decode_room(&blob));
        assert_eq!(v["id"], "r1");
        assert_eq!(v["players"][0]["nick"], "X");
        assert_eq!(v["players"][0]["leader"], true);
        assert_eq!(v["state"], 0);
    }
}
