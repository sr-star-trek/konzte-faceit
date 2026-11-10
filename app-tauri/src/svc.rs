use serde_json::{json, Value};

#[cfg(windows)]
mod imp {
    use super::*;
    use std::io::{Read, Write};
    use std::time::{Duration, Instant};
    use windows_sys::Win32::Foundation::*;
    use windows_sys::Win32::System::Services::*;

    const PIPE: &str = r"\\.\pipe\konzte-guard";
    const NAME: &str = "KonzteGuard";
    fn wz(s: &str) -> Vec<u16> { s.encode_utf16().chain(std::iter::once(0)).collect() }

    pub fn call(req: &Value, timeout: Duration) -> Result<Value, String> {
        let line = format!("{req}\n");
        let (tx, rx) = std::sync::mpsc::channel();
        std::thread::spawn(move || {
            let r = (|| -> Result<Value, String> {
                let t = Instant::now();
                let mut f = loop {
                    match std::fs::OpenOptions::new().read(true).write(true).open(PIPE) {
                        Ok(f) => break f,
                        Err(e) if e.raw_os_error() == Some(231) && t.elapsed() < Duration::from_secs(3) => std::thread::sleep(Duration::from_millis(100)),
                        Err(e) if e.kind() == std::io::ErrorKind::NotFound => return Err("nopipe".into()),
                        Err(e) => return Err(format!("pipe: {e}")),
                    }
                };
                f.write_all(line.as_bytes()).map_err(|e| format!("write: {e}"))?;
                let (mut out, mut b) = (Vec::new(), [0u8; 65536]);
                loop {
                    let n = f.read(&mut b).map_err(|e| format!("read: {e}"))?;
                    if n == 0 { break; }
                    out.extend_from_slice(&b[..n]);
                    if out.contains(&b'\n') || out.len() > (8 << 20) { break; }
                }
                serde_json::from_slice(out.split(|c| *c == b'\n').next().unwrap_or(&[])).map_err(|e| format!("json: {e}"))
            })();
            let _ = tx.send(r);
        });
        rx.recv_timeout(timeout).unwrap_or_else(|_| Err("timeout".into()))
    }

    pub fn scm_running() -> Option<bool> {
        unsafe {
            let m = OpenSCManagerW(std::ptr::null(), std::ptr::null(), SC_MANAGER_CONNECT);
            if m.is_null() { return None; }
            let s = OpenServiceW(m, wz(NAME).as_ptr(), SERVICE_QUERY_STATUS);
            let r = if s.is_null() { None } else {
                let mut st: SERVICE_STATUS = std::mem::zeroed();
                let ok = QueryServiceStatus(s, &mut st) != 0;
                CloseServiceHandle(s);
                Some(ok && st.dwCurrentState == SERVICE_RUNNING)
            };
            CloseServiceHandle(m);
            r
        }
    }

    pub fn start() -> bool {
        unsafe {
            let m = OpenSCManagerW(std::ptr::null(), std::ptr::null(), SC_MANAGER_CONNECT);
            if m.is_null() { return false; }
            let s = OpenServiceW(m, wz(NAME).as_ptr(), SERVICE_START | SERVICE_QUERY_STATUS);
            let ok = !s.is_null() && (StartServiceW(s, 0, std::ptr::null()) != 0 || GetLastError() == ERROR_SERVICE_ALREADY_RUNNING);
            if !s.is_null() { CloseServiceHandle(s); }
            CloseServiceHandle(m);
            ok
        }
    }

    pub fn exe() -> std::path::PathBuf {
        std::path::PathBuf::from(std::env::var("ProgramFiles").unwrap_or_else(|_| r"C:\Program Files".into())).join("Konzte Guard").join("KonzteGuard.exe")
    }
}

pub fn status() -> Value {
    #[cfg(windows)]
    {
        let scm = imp::scm_running();
        let mut v = json!({ "supported": true, "installed": scm.is_some() && imp::exe().exists(), "running": scm == Some(true) });
        if scm.is_some() {
            if let Ok(i) = imp::call(&json!({ "op": "info" }), std::time::Duration::from_secs(4)) {
                v["running"] = json!(true);
                for k in ["sv", "game", "pre", "since", "issues"] { v[k] = i[k].clone(); }
            }
        }
        v
    }
    #[cfg(not(windows))]
    json!({ "supported": false })
}

pub fn open_window() -> bool {
    #[cfg(windows)]
    {
        let e = imp::exe();
        if !e.exists() { return false; }
        ensure_running();
        return std::process::Command::new(e).arg("open").spawn().is_ok();
    }
    #[cfg(not(windows))]
    false
}

#[cfg_attr(not(windows), allow(dead_code))]
pub fn ensure_running() {
    #[cfg(windows)]
    if imp::scm_running() == Some(false) { imp::start(); }
}

pub struct Pending(#[allow(dead_code)] Option<std::thread::JoinHandle<Result<Value, String>>>);
pub fn begin(opts: &Value) -> Pending {
    #[cfg(windows)]
    {
        let nonce = opts.get("nonce").and_then(|v| v.as_str()).unwrap_or("").to_string();
        if nonce.is_empty() { return Pending(None); }
        let pick = |k: &str| opts.get(k).cloned().unwrap_or(json!([]));
        let req = json!({ "op": "scan", "opts": { "nonce": nonce, "names": pick("names"), "hashes": pick("hashes"), "driverHashes": pick("driverHashes") } });
        return Pending(Some(std::thread::spawn(move || {
            let r = imp::call(&req, std::time::Duration::from_secs(8));
            if matches!(&r, Err(e) if e == "nopipe") && imp::scm_running() == Some(false) { imp::start(); }
            r
        })));
    }
    #[cfg(not(windows))]
    { let _ = opts; Pending(None) }
}
pub fn finish(p: Pending, r: &mut Value) {
    let Some(h) = p.0 else { return };
    match h.join().unwrap_or_else(|_| Err("panic".into())) {
        Ok(v) if v["ok"].as_bool() == Some(true) && v["att"].is_object() => { r["svc"] = v["att"].clone(); }
        Ok(v) => { r["svcErr"] = json!(v["error"].as_str().unwrap_or("bad reply")); }
        Err(e) => { r["svcErr"] = json!(e.chars().take(80).collect::<String>()); }
    }
}
