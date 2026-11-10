use once_cell::sync::Lazy;
use regex::Regex;
use serde_json::{json, Map, Value};
use std::time::Duration;
use tokio::io::{AsyncRead, AsyncReadExt, AsyncWrite, AsyncWriteExt};
use tokio::sync::mpsc;
use tokio::time::Instant;

const MAX_PIPES: usize = 10;
const RETRY: Duration = Duration::from_secs(30);
const MIN_GAP: Duration = Duration::from_secs(15);
static SITE: Lazy<Regex> = Lazy::new(|| Regex::new(r"^https://(?:www\.)?konzte\.online/").unwrap());
static CLIENT_ID: Lazy<Regex> = Lazy::new(|| Regex::new(r"^\d{15,22}$").unwrap());
static PARTY_ID: Lazy<Regex> = Lazy::new(|| Regex::new(r"^[\w-]{1,64}$").unwrap());

pub enum Cmd {
    Client(Option<String>),
    Set(Value),
    Clear,
    Stop(tokio::sync::oneshot::Sender<()>),
}

static TX: Lazy<mpsc::UnboundedSender<Cmd>> = Lazy::new(|| {
    let (tx, rx) = mpsc::unbounded_channel();
    tauri::async_runtime::spawn(actor(rx));
    tx
});

pub fn set_client(id: &Value) {
    let s = match id {
        Value::String(s) => s.clone(),
        Value::Number(n) => n.to_string(),
        _ => String::new(),
    };
    let _ = TX.send(Cmd::Client(CLIENT_ID.is_match(&s).then_some(s)));
}
pub fn set(a: &Value) {
    let _ = TX.send(Cmd::Set(clean(a)));
}
pub fn clear() {
    let _ = TX.send(Cmd::Clear);
}
pub fn stop_blocking() {
    let (tx, rx) = tokio::sync::oneshot::channel();
    if TX.send(Cmd::Stop(tx)).is_ok() {
        let _ = tauri::async_runtime::block_on(async { tokio::time::timeout(Duration::from_millis(500), rx).await });
    }
}

fn s(v: Option<&Value>, max: usize) -> Option<String> {
    let t: String = v?.as_str()?.chars().map(|c| if (c as u32) < 0x20 { ' ' } else { c }).collect();
    let t = t.trim();
    if t.encode_utf16().count() < 2 {
        return None;
    }
    let u: Vec<u16> = t.encode_utf16().take(max).collect();
    Some(String::from_utf16_lossy(&u))
}
fn img(v: Option<&Value>) -> Option<String> {
    let x = v?.as_str()?;
    (SITE.is_match(x) && x.len() < 256).then(|| x.to_string())
}
fn num(v: Option<&Value>) -> f64 {
    match v {
        Some(Value::Number(n)) => n.as_f64().unwrap_or(f64::NAN),
        Some(Value::String(s)) => s.trim().parse().unwrap_or(f64::NAN),
        _ => f64::NAN,
    }
}
fn int32(v: Option<&Value>) -> i64 {
    let x = num(v);
    if x.is_finite() { (x.trunc() as i64) as i32 as i64 } else { 0 }
}
fn now_ms() -> f64 {
    std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.as_millis() as f64).unwrap_or(0.0)
}

pub fn clean(a: &Value) -> Value {
    let Some(a) = a.as_object() else { return Value::Null };
    let mut out = Map::new();
    out.insert("type".into(), json!(0));
    let details = s(a.get("details"), 128);
    let state = s(a.get("state"), 128);
    if let Some(d) = &details {
        out.insert("details".into(), json!(d));
    }
    if let Some(st) = &state {
        out.insert("state".into(), json!(st));
    }
    let (start, end) = (num(a.get("start")), num(a.get("end")));
    let mut ts = Map::new();
    if start.is_finite() && start > 0.0 {
        ts.insert("start".into(), json!(start.floor() as i64));
    }
    if end.is_finite() && end > now_ms() {
        ts.insert("end".into(), json!(end.floor() as i64));
    }
    if !ts.is_empty() {
        out.insert("timestamps".into(), Value::Object(ts));
    }
    let mut assets = Map::new();
    if let Some(x) = img(a.get("largeImage")) {
        assets.insert("large_image".into(), json!(x));
    }
    if let Some(x) = s(a.get("largeText"), 128) {
        assets.insert("large_text".into(), json!(x));
    }
    if let Some(x) = img(a.get("smallImage")) {
        assets.insert("small_image".into(), json!(x));
    }
    if let Some(x) = s(a.get("smallText"), 128) {
        assets.insert("small_text".into(), json!(x));
    }
    if !assets.is_empty() {
        out.insert("assets".into(), Value::Object(assets));
    }
    let (ps, pm) = (int32(a.get("partySize")), int32(a.get("partyMax")));
    if let Some(pid) = a.get("partyId").and_then(|v| v.as_str()).filter(|p| PARTY_ID.is_match(p)) {
        if ps >= 1 && pm >= ps && pm <= 10 {
            out.insert("party".into(), json!({ "id": pid, "size": [ps, pm] }));
        }
    }
    let buttons: Vec<Value> = a
        .get("buttons")
        .and_then(|v| v.as_array())
        .map(|b| {
            b.iter()
                .take(2)
                .filter_map(|b| {
                    let label = s(b.get("label"), 32)?;
                    let url = b.get("url")?.as_str().filter(|u| SITE.is_match(u) && u.len() < 512)?;
                    Some(json!({ "label": label, "url": url }))
                })
                .collect()
        })
        .unwrap_or_default();
    if !buttons.is_empty() {
        out.insert("buttons".into(), Value::Array(buttons));
    }
    if details.is_some() || state.is_some() {
        Value::Object(out)
    } else {
        Value::Null
    }
}

fn frame(op: u32, obj: &Value) -> Vec<u8> {
    let body = serde_json::to_vec(obj).unwrap_or_default();
    let mut v = Vec::with_capacity(8 + body.len());
    v.extend_from_slice(&op.to_le_bytes());
    v.extend_from_slice(&(body.len() as u32).to_le_bytes());
    v.extend_from_slice(&body);
    v
}

type Reader = Box<dyn AsyncRead + Unpin + Send>;
type Writer = Box<dyn AsyncWrite + Unpin + Send>;

fn pipe_paths() -> Vec<std::path::PathBuf> {
    #[cfg(windows)]
    {
        (0..MAX_PIPES).map(|i| format!(r"\\?\pipe\discord-ipc-{i}").into()).collect()
    }
    #[cfg(not(windows))]
    {
        let mut bases: Vec<String> = ["XDG_RUNTIME_DIR", "TMPDIR", "TMP", "TEMP"].iter().filter_map(|k| std::env::var(k).ok()).filter(|s| !s.is_empty()).collect();
        bases.push("/tmp".into());
        let mut dirs: Vec<std::path::PathBuf> = Vec::new();
        for b in &bases {
            let b = std::path::PathBuf::from(b);
            for d in [
                b.clone(),
                b.join("app/com.discordapp.Discord"),
                b.join("app/com.discordapp.DiscordCanary"),
                b.join("snap.discord"),
                b.join(".flatpak/dev.vencord.Vesktop/xdg-run"),
            ] {
                if !dirs.contains(&d) {
                    dirs.push(d);
                }
            }
        }
        dirs.iter().flat_map(|d| (0..MAX_PIPES).map(move |i| d.join(format!("discord-ipc-{i}")))).collect()
    }
}

async fn open_pipe() -> Option<(Reader, Writer)> {
    for p in pipe_paths() {
        #[cfg(windows)]
        {
            if let Ok(c) = tokio::net::windows::named_pipe::ClientOptions::new().open(&p) {
                let (r, w) = tokio::io::split(c);
                return Some((Box::new(r), Box::new(w)));
            }
        }
        #[cfg(not(windows))]
        {
            if !p.exists() {
                continue;
            }
            if let Ok(Ok(c)) = tokio::time::timeout(Duration::from_secs(2), tokio::net::UnixStream::connect(&p)).await {
                let (r, w) = c.into_split();
                return Some((Box::new(r), Box::new(w)));
            }
        }
    }
    None
}

enum In {
    Ready,
    Ping(Value),
    Closed,
}

async fn reader(mut r: Reader, tx: mpsc::UnboundedSender<In>) {
    let mut head = [0u8; 8];
    loop {
        if r.read_exact(&mut head).await.is_err() {
            break;
        }
        let op = u32::from_le_bytes(head[0..4].try_into().unwrap());
        let len = u32::from_le_bytes(head[4..8].try_into().unwrap()) as usize;
        if len > 1 << 20 {
            break;
        }
        let mut body = vec![0u8; len];
        if r.read_exact(&mut body).await.is_err() {
            break;
        }
        let msg: Value = serde_json::from_slice(&body).unwrap_or(Value::Null);
        match op {
            3 => {
                let _ = tx.send(In::Ping(if msg.is_null() { json!({}) } else { msg }));
            }
            2 => break,
            _ => {
                if msg.get("evt").and_then(|v| v.as_str()) == Some("READY") {
                    let _ = tx.send(In::Ready);
                }
            }
        }
    }
    let _ = tx.send(In::Closed);
}

fn nonce() -> String {
    format!("{}{:06x}", now_ms() as u64, rand::random::<u32>() & 0xffffff)
}

async fn actor(mut rx: mpsc::UnboundedReceiver<Cmd>) {
    let mut client: Option<String> = None;
    let mut wanted = Value::Null;
    let mut sent: Option<String> = None;
    let mut last_sent: Option<Instant> = None;
    let mut conn: Option<(Writer, mpsc::UnboundedReceiver<In>)> = None;
    let mut ready = false;
    let mut retry_at: Option<Instant> = None;
    let mut send_at: Option<Instant> = None;

    loop {
        if conn.is_none() && client.is_some() && retry_at.map(|t| Instant::now() >= t).unwrap_or(true) {
            match open_pipe().await {
                Some((r, mut w)) => {
                    let hs = frame(0, &json!({ "v": 1, "client_id": client.clone().unwrap() }));
                    if w.write_all(&hs).await.is_ok() {
                        let (itx, irx) = mpsc::unbounded_channel();
                        tauri::async_runtime::spawn(reader(r, itx));
                        conn = Some((w, irx));
                        ready = false;
                        retry_at = None;
                    } else {
                        retry_at = Some(Instant::now() + RETRY);
                    }
                }
                None => retry_at = Some(Instant::now() + RETRY),
            }
        }
        let wake = [send_at.filter(|_| ready), retry_at.filter(|_| conn.is_none() && client.is_some())]
            .into_iter()
            .flatten()
            .min()
            .unwrap_or_else(|| Instant::now() + Duration::from_secs(3600));

        let mut drop_conn = false;
        let mut connect_now = false;
        tokio::select! {
            c = rx.recv() => match c {
                None => return,
                Some(Cmd::Client(id)) => {
                    if id != client {
                        client = id;
                        drop_conn = true;
                        connect_now = true;
                    }
                }
                Some(Cmd::Set(a)) => { wanted = a; connect_now = conn.is_none(); schedule(&mut send_at, last_sent, false); }
                Some(Cmd::Clear) => { wanted = Value::Null; schedule(&mut send_at, last_sent, false); }
                Some(Cmd::Stop(done)) => {
                    client = None;
                    if let Some((w, _)) = conn.as_mut() {
                        let _ = tokio::time::timeout(Duration::from_millis(300), w.write_all(&frame(1, &json!({ "cmd": "SET_ACTIVITY", "args": { "pid": std::process::id() }, "nonce": "bye" })))).await;
                    }
                    conn = None; ready = false; sent = None;
                    let _ = done.send(());
                    continue;
                }
            },
            m = async { match conn.as_mut() { Some((_, r)) => r.recv().await, None => std::future::pending().await } } => match m {
                Some(In::Ready) => { ready = true; schedule(&mut send_at, last_sent, true); }
                Some(In::Ping(p)) => { if let Some((w, _)) = conn.as_mut() { let _ = w.write_all(&frame(4, &p)).await; } }
                Some(In::Closed) | None => drop_conn = true,
            },
            _ = tokio::time::sleep_until(wake) => {
                if ready && send_at.map(|t| Instant::now() >= t).unwrap_or(false) {
                    send_at = None;
                    let js = wanted.to_string();
                    if sent.as_deref() != Some(js.as_str()) {
                        let mut args = json!({ "pid": std::process::id() });
                        if !wanted.is_null() { args["activity"] = wanted.clone(); }
                        let f = frame(1, &json!({ "cmd": "SET_ACTIVITY", "args": args, "nonce": nonce() }));
                        let ok = match conn.as_mut() { Some((w, _)) => w.write_all(&f).await.is_ok(), None => false };
                        if ok { sent = Some(js); last_sent = Some(Instant::now()); } else { drop_conn = true; }
                    }
                }
            }
        }
        if drop_conn {
            conn = None;
            ready = false;
            sent = None;
            if client.is_some() && retry_at.is_none() {
                retry_at = Some(Instant::now() + RETRY);
            }
        }
        if connect_now {
            retry_at = None;
        }
    }
}

fn schedule(send_at: &mut Option<Instant>, last: Option<Instant>, now: bool) {
    if send_at.is_some() {
        return;
    }
    let t = if now { Instant::now() } else { last.map(|l| (l + MIN_GAP).max(Instant::now())).unwrap_or_else(Instant::now) };
    *send_at = Some(t);
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn clean_like_js() {
        assert_eq!(clean(&json!({ "state": "x" })), Value::Null);
        let a = clean(&json!({
            "details": "In queue\u{0001}", "state": "2v2", "start": 1700000000000.7, "largeImage": "https://konzte.online/a.png",
            "smallImage": "https://evil.com/x.png", "partyId": "p-1", "partySize": 2, "partyMax": 4,
            "buttons": [{ "label": "Join", "url": "https://konzte.online/j" }, { "label": "Bad", "url": "https://x.com" }]
        }));
        assert_eq!(a["details"], "In queue");
        assert_eq!(a["timestamps"]["start"], 1700000000000i64);
        assert_eq!(a["assets"]["large_image"], "https://konzte.online/a.png");
        assert!(a["assets"].get("small_image").is_none());
        assert_eq!(a["party"]["size"], json!([2, 4]));
        assert_eq!(a["buttons"].as_array().unwrap().len(), 1);
    }
}
