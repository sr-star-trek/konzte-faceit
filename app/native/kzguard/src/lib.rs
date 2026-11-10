mod common;
#[cfg(windows)] mod sigs;
#[cfg(target_os = "linux")] mod linux;
#[cfg(target_os = "linux")] use linux as os;
#[cfg(windows)] mod win;
#[cfg(windows)] use win as os;

use common::*;
use hmac::{Hmac, Mac};
use serde::Deserialize;
use serde_json::{json, Value};
use sha2::Sha256;
use std::collections::HashSet;
use std::time::Instant;

include!(concat!(env!("OUT_DIR"), "/key.rs"));
pub const GUARD: &str = "3.0";

#[derive(Deserialize, Default)]
#[serde(default, rename_all = "camelCase")]
struct Opts {
    nonce: String,
    ver: String,
    names: Vec<String>,
    hashes: Vec<String>,
    driver_hashes: Vec<String>,
    files: bool,
    files_full: bool,
    modules: bool,
    deep: bool,
    report: bool,
}

fn list_digest(v: &[String]) -> String {
    let mut s: Vec<&str> = v.iter().map(|x| x.as_str()).filter(|x| x.len() == 64 && x.bytes().all(|c| c.is_ascii_hexdigit())).collect();
    s.sort(); s.dedup();
    sha_hex(s.join("\n").as_bytes())
}

fn sign(d: &str) -> String {
    let key: Vec<u8> = KA.iter().zip(KB.iter()).map(|(a, b)| a ^ b).collect();
    let mut m = <Hmac<Sha256> as Mac>::new_from_slice(&key).expect("key");
    m.update(d.as_bytes());
    hex(&m.finalize().into_bytes())
}

fn match_procs(procs: &[Proc], want: &HashSet<String>, want_h: &HashSet<&str>) -> Vec<String> {
    let mut hits: Vec<String> = Vec::new();
    for p in procs {
        let n = norm_proc(&p.name);
        if n.is_empty() { continue; }
        let h = if want.contains(&n) { n.clone() } else { let x = name_hash(&n); if want_h.contains(x.as_str()) { format!("h:{x}") } else { continue } };
        if !hits.contains(&h) { hits.push(h); }
    }
    hits
}

fn run(o: Opts) -> Value {
    let t0 = Instant::now();
    let procs = os::list_procs();
    let game = procs.iter().find(|p| is_game_name(&p.name) || is_game_name(&p.argv0)).cloned();
    let want: HashSet<String> = o.names.iter().map(|n| norm_proc(n)).filter(|n| !n.is_empty()).take(500).collect();
    let want_h: HashSet<&str> = o.hashes.iter().map(|s| s.as_str()).filter(|s| s.len() == 64).take(2000).collect();
    let hits = match_procs(&procs, &want, &want_h);
    let exe_path = game.as_ref().and_then(os::game_exe);
    let (mut exe, mut ga, mut files) = (Value::Null, Value::Null, Value::Null);
    if let Some(ep) = &exe_path {
        if let Some((sz, h)) = full_hash(ep) { exe = json!({ "name": base_name(&ep.to_string_lossy()), "size": sz, "hash": h }); }
        let dir = ep.parent().unwrap_or(std::path::Path::new("."));
        for g in ["GameAssembly.dll", "GameAssembly.so"] { let f = dir.join(g); if f.exists() { if let Some((sz, h)) = full_hash(&f) { ga = json!({ "size": sz, "hash": h }); } break; } }
        if o.files { files = game_files(dir, o.files_full); }
    }
    let game_dir = exe_path.as_ref().and_then(|p| p.parent().map(|x| x.to_path_buf()));
    let (mut modules, mut inject) = (Value::Null, Value::Null);
    if let (true, Some(g)) = (o.modules || o.deep, &game) {
        let (names, x) = os::modules(g, game_dir.as_deref());
        if o.modules { modules = json!(names); }
        if o.deep { inject = x; }
    }
    let mut deep = Value::Null;
    if let (true, Some(g)) = (o.deep, &game) {
        deep = os::deep(g.pid);
        let want_d: HashSet<&str> = o.driver_hashes.iter().map(|s| s.as_str()).collect();
        let drv: Vec<String> = deep["drivers"].as_array().cloned().unwrap_or_default().iter().filter_map(|x| x.as_str())
            .map(|n| name_hash(n.trim_end_matches(".sys").trim_end_matches(".ko"))).filter(|h| want_d.contains(h.as_str())).map(|h| format!("h:{h}"))
            .collect::<std::collections::BTreeSet<_>>().into_iter().collect();
        deep["drivers"] = json!(drv);
        deep["inject"] = inject;
    }
    let rep = if o.report { std::panic::catch_unwind(|| os::report(game.as_ref(), game_dir.as_deref())).unwrap_or_else(|_| json!({ "err": "panic" })) } else { Value::Null };
    let self_info = os::module_path().map(|p| if cfg!(feature = "node") { shell_integrity(&p) } else { exe_integrity(&p) }).unwrap_or(json!({ "err": "path" }));
    let mut selfv = os::self_check();
    if let (Some(a), Some(b)) = (selfv.as_object_mut(), self_info.as_object()) { for (k, v) in b { a.insert(k.clone(), v.clone()); } }
    json!({
        "v": 2, "gv": GUARD, "kid": KID, "nonce": o.nonce, "ts": std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.as_millis() as u64).unwrap_or(0),
        "platform": if cfg!(windows) { "win32" } else { "linux" }, "ver": o.ver,
        "found": game.is_some(), "proc": game.as_ref().map(|g| base_name(&g.name)), "exe": exe, "ga": ga, "files": files, "modules": modules,
        "hits": hits, "deep": deep, "sys": if o.deep { os::sys() } else { Value::Null }, "self": selfv,
        "lh": list_digest(&o.hashes), "dh": list_digest(&o.driver_hashes), "req": { "files": o.files, "modules": o.modules, "deep": o.deep, "report": o.report }, "rep": rep,
        "scanned": procs.len(), "ms": t0.elapsed().as_millis() as u64,
    })
}

pub fn scan_signed(opts: &str) -> String {
    let o: Opts = serde_json::from_str(opts).unwrap_or_default();
    let doc = std::panic::catch_unwind(move || run(o)).unwrap_or_else(|_| json!({ "v": 2, "gv": GUARD, "kid": KID, "err": "panic" }));
    let d = doc.to_string();
    let s = sign(&d);
    json!({ "d": d, "s": s, "kid": KID }).to_string()
}

pub fn pc_file(masked: &str) -> Option<std::path::PathBuf> {
    let real = unmask_path(masked);
    if !is_allowed(&real) {
        let procs = os::list_procs();
        let game = procs.iter().find(|p| is_game_name(&p.name) || is_game_name(&p.argv0)).cloned();
        let gd = game.as_ref().and_then(os::game_exe).and_then(|p| p.parent().map(|x| x.to_path_buf()));
        let _ = std::panic::catch_unwind(|| os::report(game.as_ref(), gd.as_deref()));
        if !is_allowed(&real) { return None; }
    }
    let p = std::path::PathBuf::from(&real);
    p.is_file().then_some(p)
}

pub fn find_game() -> Option<u32> {
    os::list_procs().into_iter().find(|p| is_game_name(&p.name) || is_game_name(&p.argv0)).map(|p| p.pid)
}

#[cfg(windows)]
pub fn game_handles(pid: u32) -> Value { std::panic::catch_unwind(|| win::handles(pid)).unwrap_or_else(|_| json!({ "err": "panic" })) }

pub fn proc_hits(names: &[String], hashes: &[String]) -> Vec<String> {
    let want: HashSet<String> = names.iter().map(|n| norm_proc(n)).filter(|n| !n.is_empty()).take(500).collect();
    let want_h: HashSet<&str> = hashes.iter().map(|s| s.as_str()).filter(|s| s.len() == 64).take(2000).collect();
    if want.is_empty() && want_h.is_empty() { return Vec::new(); }
    match_procs(&os::list_procs(), &want, &want_h)
}

#[cfg(windows)]
pub fn game_overlays(pid: u32) -> Value { std::panic::catch_unwind(|| win::overlays(pid)).unwrap_or_else(|_| json!({ "err": "panic" })) }

#[cfg(windows)]
pub fn game_debugged(pid: u32) -> Option<bool> { std::panic::catch_unwind(|| win::debugged(pid)).ok().flatten() }

#[cfg(windows)]
pub fn driver_names() -> Vec<String> { std::panic::catch_unwind(win::drivers).unwrap_or_default() }

pub fn sys_state() -> Value { std::panic::catch_unwind(os::sys).unwrap_or_else(|_| json!({ "err": "panic" })) }

pub fn game_inject(pid: u32) -> Value {
    std::panic::catch_unwind(|| {
        let procs = os::list_procs();
        let Some(g) = procs.iter().find(|p| p.pid == pid) else { return json!({ "err": "gone" }) };
        let gd = os::game_exe(g).and_then(|p| p.parent().map(|x| x.to_path_buf()));
        os::modules(g, gd.as_deref()).1
    }).unwrap_or_else(|_| json!({ "err": "panic" }))
}

pub fn scan_svc(opts: &str, svc: Value) -> String {
    let mut o: Opts = serde_json::from_str(opts).unwrap_or_default();
    o.nonce = format!("svc:{}", o.nonce);
    o.files = false; o.files_full = false; o.report = false; o.modules = true; o.deep = true;
    let mut doc = std::panic::catch_unwind(move || run(o)).unwrap_or_else(|_| json!({ "v": 2, "gv": GUARD, "kid": KID, "err": "panic" }));
    if let Some(s) = doc.get_mut("self").and_then(|x| x.as_object_mut()) { s.insert("kind".into(), json!("svc")); }
    doc["svc"] = svc;
    let d = doc.to_string();
    let s = sign(&d);
    json!({ "d": d, "s": s, "kid": KID }).to_string()
}

pub fn info_json() -> String { json!({ "gv": GUARD, "kid": KID, "platform": if cfg!(windows) { "win32" } else { "linux" } }).to_string() }

#[cfg(feature = "node")]
mod node {
    use napi::{bindgen_prelude::AsyncTask, Env, Task};
    use napi_derive::napi;

    pub struct Scan(String);
    impl Task for Scan {
        type Output = String;
        type JsValue = String;
        fn compute(&mut self) -> napi::Result<String> { Ok(super::scan_signed(&self.0)) }
        fn resolve(&mut self, _: Env, out: String) -> napi::Result<String> { Ok(out) }
    }

    #[napi]
    pub fn scan(opts: String) -> AsyncTask<Scan> { AsyncTask::new(Scan(opts)) }

    #[napi]
    pub fn info() -> String { super::info_json() }
}
