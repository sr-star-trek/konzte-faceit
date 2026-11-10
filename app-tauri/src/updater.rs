use crate::assets::{self, UiSource};
use base64::Engine;
use ed25519_dalek::{pkcs8::DecodePublicKey, Signature, Verifier, VerifyingKey};
use serde_json::{json, Map, Value};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};

pub const PUBLIC_KEY: &str = "-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEA5o2Uvz6O39Y5c+fwKLDlhiWi6Xxgb6to50FL8h7Ozeo=
-----END PUBLIC KEY-----";

pub fn sha256_hex(b: &[u8]) -> String {
    hex::encode(Sha256::digest(b))
}

pub fn verify_sig(raw: &[u8], sig_b64: &str) -> bool {
    let Ok(key) = VerifyingKey::from_public_key_pem(PUBLIC_KEY) else { return false };
    let Ok(sig) = base64::engine::general_purpose::STANDARD.decode(sig_b64.trim()) else { return false };
    let Ok(sig) = Signature::from_slice(&sig) else { return false };
    key.verify(raw, &sig).is_ok()
}

pub fn cmp_ver(a: &str, b: &str) -> i64 {
    let p = |s: &str| -> Vec<i64> { s.split('.').map(|x| x.trim().parse::<i64>().unwrap_or(0)).collect() };
    let (x, y) = (p(a), p(b));
    for i in 0..3 {
        let (u, v) = (x.get(i).copied().unwrap_or(0), y.get(i).copied().unwrap_or(0));
        if u != v {
            return u - v;
        }
    }
    0
}

pub fn client() -> reqwest::Client {
    reqwest::Client::builder()
        .user_agent(concat!("Konzte/", env!("CARGO_PKG_VERSION"), " (tauri)"))
        .connect_timeout(Duration::from_secs(10))
        .build()
        .expect("http client")
}

pub async fn fetch(c: &reqwest::Client, url: &str, ms: u64) -> Result<Vec<u8>, String> {
    let r = c.get(url).timeout(Duration::from_millis(ms)).send().await.map_err(|e| format!("{url}: {e}"))?;
    if !r.status().is_success() {
        return Err(format!("{url}: HTTP {}", r.status().as_u16()));
    }
    r.bytes().await.map(|b| b.to_vec()).map_err(|e| format!("{url}: {e}"))
}

fn now_ms() -> u128 {
    std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.as_millis()).unwrap_or(0)
}

#[derive(Clone, Debug, Default)]
pub struct Current {
    pub src: Option<PathBuf>,
    pub ui: f64,
    pub files: Map<String, Value>,
    pub slot: Option<String>,
}

fn ui_num(v: Option<&Value>) -> f64 {
    v.and_then(|x| x.as_f64()).unwrap_or(0.0)
}

pub fn current(ui_root: &Path) -> Current {
    let bundled: Value = assets::bundled_file("build.json")
        .and_then(|b| serde_json::from_slice(b).ok())
        .unwrap_or_else(|| json!({ "ui": 0, "files": {} }));
    let b_ui = ui_num(bundled.get("ui"));
    let st: Option<Value> = std::fs::read(ui_root.join("state.json")).ok().and_then(|b| serde_json::from_slice(&b).ok());
    if let Some(st) = st {
        let active = st.get("active").and_then(|v| v.as_str()).unwrap_or("");
        let s_ui = ui_num(st.get("ui"));
        if (active == "a" || active == "b") && s_ui > b_ui && ui_root.join(active).join("index.html").exists() {
            return Current {
                src: Some(ui_root.join(active)),
                ui: s_ui,
                files: st.get("files").and_then(|v| v.as_object()).cloned().unwrap_or_default(),
                slot: Some(active.to_string()),
            };
        }
    }
    Current { src: None, ui: b_ui, files: bundled.get("files").and_then(|v| v.as_object()).cloned().unwrap_or_default(), slot: None }
}

#[derive(Clone, Debug, Default)]
pub struct Prepared {
    pub source: Option<PathBuf>,
    pub ui: f64,
    pub updated: bool,
    pub need_shell: Option<String>,
    pub error: Option<String>,
}

impl Prepared {
    pub fn ui_source(&self) -> UiSource {
        match &self.source {
            Some(p) => UiSource::Disk(p.clone()),
            None => UiSource::Bundled,
        }
    }
}

fn safe_path(p: &str) -> bool {
    !p.contains("..") && !p.is_empty() && p.chars().all(|c| c.is_ascii_alphanumeric() || "_-. /".contains(c))
}
fn is_sha(h: &str) -> bool {
    h.len() == 64 && h.chars().all(|c| matches!(c, '0'..='9' | 'a'..='f'))
}

fn read_have(cur: &Current, rel: &str) -> Option<Vec<u8>> {
    match &cur.src {
        None => assets::bundled_file(rel).map(|b| b.to_vec()),
        Some(dir) => std::fs::read(dir.join(rel)).ok(),
    }
}

pub async fn prepare(
    server: &str,
    user_data: &Path,
    shell_version: &str,
    on_start: impl Fn(usize) + Send + Sync,
    on_progress: Arc<dyn Fn(usize, usize) + Send + Sync>,
) -> Prepared {
    let ui_root = user_data.join("ui");
    let cur = current(&ui_root);
    let mut res = Prepared { source: cur.src.clone(), ui: cur.ui, ..Default::default() };
    match run(server, &ui_root, shell_version, &cur, on_start, on_progress).await {
        Ok(Some(p)) => p,
        Ok(None) => res,
        Err(Need(v)) if v.starts_with("shell:") => {
            res.need_shell = Some(v[6..].to_string());
            res
        }
        Err(Need(e)) => {
            res.error = Some(e);
            res
        }
    }
}

struct Need(String);
impl From<String> for Need {
    fn from(s: String) -> Self {
        Need(s)
    }
}

async fn run(
    server: &str,
    ui_root: &Path,
    shell_version: &str,
    cur: &Current,
    on_start: impl Fn(usize),
    on_progress: Arc<dyn Fn(usize, usize) + Send + Sync>,
) -> Result<Option<Prepared>, Need> {
    let c = client();
    let base = format!("{}/update", server.trim_end_matches('/'));
    let t = now_ms();
    let (u1, u2) = (format!("{base}/manifest.json?t={t}"), format!("{base}/manifest.sig?t={t}"));
    let (raw, sig) = tokio::join!(fetch(&c, &u1, 5000), fetch(&c, &u2, 5000));
    let (raw, sig) = (raw?, sig?);
    if !verify_sig(&raw, &String::from_utf8_lossy(&sig)) {
        return Err(Need("bad manifest signature".into()));
    }
    let man: Value = serde_json::from_slice(&raw).map_err(|e| Need(format!("bad manifest: {e}")))?;
    let m_ui = ui_num(man.get("ui"));
    if !(m_ui > cur.ui) {
        return Ok(None);
    }
    if let Some(ms) = man.get("minShell").and_then(|v| v.as_str()).filter(|s| !s.is_empty()) {
        if cmp_ver(shell_version, ms) < 0 {
            return Err(Need(format!("shell:{ms}")));
        }
    }
    let files = man.get("files").and_then(|v| v.as_object()).cloned().unwrap_or_default();
    let entries: Vec<(String, String)> =
        files.iter().map(|(p, h)| (p.clone(), h.as_str().unwrap_or("").to_string())).collect();
    if entries.is_empty() || !entries.iter().all(|(p, h)| safe_path(p) && is_sha(h)) {
        return Err(Need("bad manifest".into()));
    }

    let mut have: HashMap<String, String> = HashMap::new();
    for (p, h) in &cur.files {
        if let Some(h) = h.as_str() {
            have.insert(h.to_string(), p.clone());
        }
    }
    let local_ok = |h: &String| have.get(h).and_then(|src| read_have(cur, src)).is_some_and(|b| sha256_hex(&b) == *h);
    let todo: Vec<(String, String)> = entries.iter().filter(|(_, h)| !local_ok(h)).cloned().collect();
    on_start(todo.len());
    let slot = if cur.slot.as_deref() == Some("a") { "b" } else { "a" };
    let dir = ui_root.join(slot);
    let _ = std::fs::remove_dir_all(&dir);
    std::fs::create_dir_all(&dir).map_err(|e| Need(e.to_string()))?;
    let deadline = Instant::now() + Duration::from_secs(90);
    let total = todo.len();
    let done = Arc::new(AtomicUsize::new(0));
    let queue = Arc::new(Mutex::new(todo.into_iter().collect::<std::collections::VecDeque<_>>()));

    let mut workers = Vec::new();
    for _ in 0..6 {
        let (q, c, base, dir, done, prog) = (queue.clone(), c.clone(), base.clone(), dir.clone(), done.clone(), on_progress.clone());
        workers.push(tokio::spawn(async move {
            loop {
                let Some((p, h)) = q.lock().unwrap().pop_front() else { return Ok::<(), String>(()) };
                if Instant::now() > deadline {
                    return Err("update timeout".into());
                }
                let buf = fetch(&c, &format!("{base}/f/{h}"), 30_000).await?;
                if sha256_hex(&buf) != h {
                    return Err(format!("hash mismatch: {p}"));
                }
                let out = dir.join(&p);
                if let Some(par) = out.parent() {
                    std::fs::create_dir_all(par).map_err(|e| e.to_string())?;
                }
                std::fs::write(&out, &buf).map_err(|e| e.to_string())?;
                let n = done.fetch_add(1, Ordering::SeqCst) + 1;
                prog(n, total);
            }
        }));
    }
    for w in workers {
        match w.await {
            Ok(Ok(())) => {}
            Ok(Err(e)) => return Err(Need(e)),
            Err(e) => return Err(Need(e.to_string())),
        }
    }
    for (p, h) in &entries {
        let out = dir.join(p);
        if out.exists() {
            continue;
        }
        let src = have.get(h).ok_or_else(|| Need(format!("missing {p}")))?;
        let buf = read_have(cur, src).filter(|b| sha256_hex(b) == *h).ok_or_else(|| Need(format!("missing {src}")))?;
        if let Some(par) = out.parent() {
            std::fs::create_dir_all(par).map_err(|e| Need(e.to_string()))?;
        }
        std::fs::write(&out, buf).map_err(|e| Need(e.to_string()))?;
    }
    let ui_val = man.get("ui").cloned().unwrap_or(json!(0));
    std::fs::write(dir.join("build.json"), serde_json::to_vec(&json!({ "ui": ui_val, "files": files })).unwrap())
        .map_err(|e| Need(e.to_string()))?;
    let tmp = ui_root.join("state.json.tmp");
    std::fs::write(&tmp, serde_json::to_vec(&json!({ "active": slot, "ui": ui_val, "files": files, "at": now_ms() as u64 })).unwrap())
        .map_err(|e| Need(e.to_string()))?;
    std::fs::rename(&tmp, ui_root.join("state.json")).map_err(|e| Need(e.to_string()))?;
    Ok(Some(Prepared { source: Some(dir), ui: m_ui, updated: true, need_shell: None, error: None }))
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn versions() {
        assert!(cmp_ver("1.1.0", "1.0.13") > 0);
        assert!(cmp_ver("1.0.9", "1.0.13") < 0);
        assert_eq!(cmp_ver("1.0", "1.0.0"), 0);
    }
    #[test]
    fn paths() {
        assert!(safe_path("assets/a-b_c.png"));
        assert!(safe_path("l10n/es.js"));
        assert!(!safe_path("../x"));
        assert!(!safe_path("a/../../x"));
        assert!(!safe_path("а.js"));
    }
    #[test]
    fn key_parses() {
        assert!(VerifyingKey::from_public_key_pem(PUBLIC_KEY).is_ok());
        assert!(!verify_sig(b"x", "AAAA"));
    }
}
