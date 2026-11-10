use base64::Engine;
use ed25519_dalek::{Signature, VerifyingKey};
use serde_json::Value;
use sha2::{Digest, Sha256};
use std::path::Path;
use windows_sys::Win32::Networking::WinHttp::*;

const HOST: &str = "konzte.online";
const MANIFEST: &str = "/assets/guard/guard.json";
const SIG: &str = "/assets/guard/guard.sig";
const PUBKEY: [u8; 32] = hex32("e68d94bf3e8edfd63973e7f028b0e58625a2e97c606fab68e7414bf21ececdea");

const fn hexd(c: u8) -> u8 { if c >= b'a' { c - b'a' + 10 } else { c - b'0' } }

const fn hex32(s: &str) -> [u8; 32] {
    let b = s.as_bytes();
    let mut out = [0u8; 32];
    let mut i = 0;
    while i < 32 {
        out[i] = hexd(b[2 * i]) << 4 | hexd(b[2 * i + 1]);
        i += 1;
    }
    out
}

fn wz(s: &str) -> Vec<u16> { s.encode_utf16().chain(std::iter::once(0)).collect() }

pub fn get(path: &str, max: usize) -> Result<Vec<u8>, String> {
    unsafe {
        let ua = wz(&format!("KonzteGuard/{}", crate::win::VERSION));
        let s = WinHttpOpen(ua.as_ptr(), WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, std::ptr::null(), std::ptr::null(), 0);
        if s.is_null() { return Err("open".into()); }
        let close = |h: *mut core::ffi::c_void| { if !h.is_null() { WinHttpCloseHandle(h); } };
        WinHttpSetTimeouts(s, 10_000, 10_000, 20_000, 60_000);
        let host = wz(HOST);
        let c = WinHttpConnect(s, host.as_ptr(), 443, 0);
        if c.is_null() { close(s); return Err("connect".into()); }
        let (verb, p) = (wz("GET"), wz(path));
        let r = WinHttpOpenRequest(c, verb.as_ptr(), p.as_ptr(), std::ptr::null(), std::ptr::null(), std::ptr::null(), WINHTTP_FLAG_SECURE);
        let res = (|| {
            if r.is_null() { return Err("request".to_string()); }
            if WinHttpSendRequest(r, std::ptr::null(), 0, std::ptr::null(), 0, 0, 0) == 0 { return Err("send".into()); }
            if WinHttpReceiveResponse(r, std::ptr::null_mut()) == 0 { return Err("receive".into()); }
            let mut code: u32 = 0;
            let mut len = 4u32;
            WinHttpQueryHeaders(r, WINHTTP_QUERY_STATUS_CODE | WINHTTP_QUERY_FLAG_NUMBER, std::ptr::null(), &mut code as *mut u32 as _, &mut len, std::ptr::null_mut());
            if code != 200 { return Err(format!("http {code}")); }
            let mut out = Vec::new();
            let mut buf = vec![0u8; 65536];
            loop {
                let mut n = 0u32;
                if WinHttpReadData(r, buf.as_mut_ptr() as _, buf.len() as u32, &mut n) == 0 { return Err("read".into()); }
                if n == 0 { break; }
                out.extend_from_slice(&buf[..n as usize]);
                if out.len() > max { return Err("too big".into()); }
            }
            Ok(out)
        })();
        close(r); close(c); close(s);
        res
    }
}

pub fn newer(a: &str, b: &str) -> bool {
    let p = |v: &str| v.split('.').map(|x| x.parse::<u64>().unwrap_or(0)).collect::<Vec<_>>();
    let (a, b) = (p(a), p(b));
    for i in 0..3 { let (x, y) = (a.get(i).copied().unwrap_or(0), b.get(i).copied().unwrap_or(0)); if x != y { return x > y; } }
    false
}

pub fn manifest() -> Result<Value, String> {
    let raw = get(MANIFEST, 64 << 10)?;
    let sig = get(SIG, 4 << 10)?;
    let sig = base64::engine::general_purpose::STANDARD.decode(String::from_utf8_lossy(&sig).trim()).map_err(|_| "sig b64")?;
    let sig = Signature::from_slice(&sig).map_err(|_| "sig len")?;
    let key = VerifyingKey::from_bytes(&PUBKEY).map_err(|_| "key")?;
    key.verify_strict(&raw, &sig).map_err(|_| "bad signature")?;
    serde_json::from_slice(&raw).map_err(|e| format!("json: {e}"))
}

pub fn check_and_apply(exe: &Path) -> Result<Option<String>, String> {
    let m = manifest()?;
    let ver = m["version"].as_str().unwrap_or("").to_string();
    if !newer(&ver, crate::win::VERSION) { return Ok(None); }
    let file = m["file"].as_str().unwrap_or("");
    if file.is_empty() || file.contains('/') || file.contains('\\') || file.contains("..") { return Err("file".into()); }
    let want = m["sha256"].as_str().unwrap_or("").to_lowercase();
    let size = m["size"].as_u64().unwrap_or(0) as usize;
    let data = get(&format!("/assets/guard/{file}"), 64 << 20)?;
    if data.len() != size { return Err(format!("size {} != {size}", data.len())); }
    let got: String = Sha256::digest(&data).iter().map(|b| format!("{b:02x}")).collect();
    if got != want { return Err("sha256 mismatch".into()); }
    let dir = exe.parent().ok_or("dir")?;
    let (newf, oldf) = (dir.join("KonzteGuard.new"), dir.join("KonzteGuard.old"));
    std::fs::write(&newf, &data).map_err(|e| format!("write: {e}"))?;
    let _ = std::fs::remove_file(&oldf);
    std::fs::rename(exe, &oldf).map_err(|e| format!("rename old: {e}"))?;
    if let Err(e) = std::fs::rename(&newf, exe) { let _ = std::fs::rename(&oldf, exe); return Err(format!("rename new: {e}")); }
    Ok(Some(ver))
}
