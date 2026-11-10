
#![cfg_attr(windows, windows_subsystem = "windows")]

#[cfg(windows)]
mod tray;
#[cfg(windows)]
mod ui;
#[cfg(windows)]
mod update;

#[cfg(not(windows))]
fn main() {
    eprintln!("kzguard-svc: лише для Windows");
    std::process::exit(1);
}

#[cfg(windows)]
fn main() { win::main() }

#[cfg(windows)]
mod win {
    use serde_json::{json, Value};
    use std::collections::BTreeMap;
    use std::ffi::OsString;
    use std::io::{Read, Write};
    use std::os::windows::io::FromRawHandle;
    use std::path::PathBuf;
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::{mpsc, Mutex};
    use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
    use windows_service::service::*;
    use windows_service::service_control_handler::{self, ServiceControlHandlerResult};
    use windows_service::service_manager::{ServiceManager, ServiceManagerAccess};
    use windows_service::{define_windows_service, service_dispatcher};
    use windows_sys::Win32::Foundation::*;
    use windows_sys::Win32::Security::Authorization::*;
    use windows_sys::Win32::Security::SECURITY_ATTRIBUTES;
    use windows_sys::Win32::Storage::FileSystem::*;
    use windows_sys::Win32::System::Pipes::*;

    pub const NAME: &str = "KonzteGuard";
    const DISPLAY: &str = "KONZTE GUARD";
    const DESC: &str = "Konzte Faceit anti-cheat: watches who accesses Combat Master memory while the game is running. Reads system tables only, changes nothing.";
    pub const PIPE: &str = r"\\.\pipe\konzte-guard";
    pub const VERSION: &str = env!("CARGO_PKG_VERSION");
    const POLL: Duration = Duration::from_secs(2);
    const HANDLES_EVERY: Duration = Duration::from_secs(3);
    const INJECT_EVERY: Duration = Duration::from_secs(20);
    const SYS_EVERY: Duration = Duration::from_secs(30);
    const PROCS_EVERY: Duration = Duration::from_secs(5);
    const DRV_EVERY: Duration = Duration::from_secs(10);
    const OVL_STALE: Duration = Duration::from_secs(25);
    const GAP: Duration = Duration::from_secs(15);

    fn now_ms() -> u64 { SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_millis() as u64).unwrap_or(0) }
    fn wz(s: &str) -> Vec<u16> { s.encode_utf16().chain(std::iter::once(0)).collect() }

    struct Sess { pid: u32, seen: u64, pre: bool, polls: u64, gaps: u32, max_gap: u64, last_poll: Instant, hchecks: u32, herr: u32, last_h: Option<Instant>, handles: BTreeMap<String, Value>,
                 ichecks: u32, ierr: u32, last_i: Option<Instant>, mz: u64, foreign: u64, rx_kb: u64, mods: BTreeMap<String, Value>, sig: std::collections::BTreeSet<String>,
                 pchecks: u32, procs: BTreeMap<String, u64>, ovl_n: u32, last_ovl: Option<Instant>, ovl: BTreeMap<String, Value>, started_at: Instant,
                 drv_base: Option<std::collections::BTreeSet<String>>, drv_new: BTreeMap<String, u64>, last_d: Option<Instant>, dbg: u32, dchecks: u32 }
    struct Watch { since: u64, started: Instant, saw_no_game: bool, cur: Option<Sess>, prev: Option<Value>, sys: Value, sys_at: Option<Instant>,
                   names: Vec<String>, hashes: Vec<String>, procs_at: Option<Instant>, pre_hits: BTreeMap<String, u64> }
    static W: Mutex<Option<Watch>> = Mutex::new(None);
    static STOP: AtomicBool = AtomicBool::new(false);
    static EXIT_TX: Mutex<Option<mpsc::Sender<()>>> = Mutex::new(None);

    fn summary(s: &Sess, ended: Option<u64>) -> Value {
        json!({ "pid": s.pid, "seen": s.seen, "pre": s.pre, "polls": s.polls, "gaps": s.gaps, "maxGap": s.max_gap,
                "hchecks": s.hchecks, "herr": s.herr, "handles": s.handles.values().cloned().collect::<Vec<_>>(),
                "ichecks": s.ichecks, "ierr": s.ierr,
                "pchecks": s.pchecks, "procs": s.procs.iter().map(|(k, t)| json!({ "h": k, "at": t })).collect::<Vec<_>>(),
                "ovlN": s.ovl_n, "ovlAge": s.last_ovl.map(|t| t.elapsed().as_secs()), "ovl": s.ovl.values().cloned().collect::<Vec<_>>(),
                "age": s.started_at.elapsed().as_secs(),
                "drvNew": s.drv_new.iter().map(|(k, t)| json!({ "name": k, "at": t })).collect::<Vec<_>>(), "dbg": s.dbg, "dchecks": s.dchecks, "inject": { "mz": s.mz, "foreign": s.foreign, "rxKb": s.rx_kb, "mods": s.mods.values().cloned().collect::<Vec<_>>(), "sig": s.sig.iter().cloned().collect::<Vec<_>>() },
                "ended": ended })
    }

    pub fn state() -> Value {
        let g = W.lock().unwrap_or_else(|e| e.into_inner());
        let Some(w) = g.as_ref() else { return json!({ "v": 1, "sv": VERSION, "err": "init" }) };
        json!({ "v": 1, "sv": VERSION, "since": w.since, "up": w.started.elapsed().as_secs(),
                "game": w.cur.as_ref().map(|s| summary(s, None)), "prev": w.prev, "sys": w.sys, "list": w.names.len() + w.hashes.len(),
                "preHits": w.pre_hits.iter().map(|(k, t)| json!({ "h": k, "at": t })).collect::<Vec<_>>() })
    }

    fn tick() {
        let pid = kzguard::find_game();
        let (mut need_h, mut need_i, mut need_sys): (Option<u32>, Option<u32>, bool) = (None, None, false);
        let mut need_p: Option<(Vec<String>, Vec<String>)> = None;
        let mut need_d: Option<u32> = None;
        {
            let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
            let Some(w) = g.as_mut() else { return };
            if w.sys_at.map(|t| t.elapsed() >= SYS_EVERY).unwrap_or(true) { w.sys_at = Some(Instant::now()); need_sys = true; }
            if (!w.names.is_empty() || !w.hashes.is_empty()) && w.procs_at.map(|t| t.elapsed() >= PROCS_EVERY).unwrap_or(true) {
                w.procs_at = Some(Instant::now()); need_p = Some((w.names.clone(), w.hashes.clone()));
            }
            match pid {
                None => {
                    if let Some(s) = w.cur.take() { w.prev = Some(summary(&s, Some(now_ms()))); }
                    w.saw_no_game = true;
                }
                Some(p) => {
                    if w.cur.as_ref().map(|s| s.pid) != Some(p) {
                        if let Some(s) = w.cur.take() { w.prev = Some(summary(&s, Some(now_ms()))); }
                        w.cur = Some(Sess { pid: p, seen: now_ms(), pre: w.saw_no_game, polls: 0, gaps: 0, max_gap: 0, last_poll: Instant::now(), hchecks: 0, herr: 0, last_h: None, handles: BTreeMap::new(),
                                           ichecks: 0, ierr: 0, last_i: None, mz: 0, foreign: 0, rx_kb: 0, mods: BTreeMap::new(), sig: Default::default(),
                                           pchecks: 0, procs: BTreeMap::new(), ovl_n: 0, last_ovl: None, ovl: BTreeMap::new(), started_at: Instant::now(),
                                           drv_base: None, drv_new: BTreeMap::new(), last_d: None, dbg: 0, dchecks: 0 });
                    }
                    let s = w.cur.as_mut().unwrap();
                    let gap = s.last_poll.elapsed();
                    if s.polls > 0 { if gap > GAP { s.gaps += 1; } s.max_gap = s.max_gap.max(gap.as_millis() as u64); }
                    s.polls += 1; s.last_poll = Instant::now();
                    if s.last_h.map(|t| t.elapsed() >= HANDLES_EVERY).unwrap_or(true) { s.last_h = Some(Instant::now()); need_h = Some(p); }
                    if s.last_i.map(|t| t.elapsed() >= INJECT_EVERY).unwrap_or(true) { s.last_i = Some(Instant::now()); need_i = Some(p); }
                    if s.last_d.map(|t| t.elapsed() >= DRV_EVERY).unwrap_or(true) { s.last_d = Some(Instant::now()); need_d = Some(p); }
                }
            }
        }
        if let Some((n, h)) = need_p {
            let hits = kzguard::proc_hits(&n, &h);
            let t = now_ms();
            let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
            if let Some(w) = g.as_mut() {
                w.pre_hits.retain(|_, at| t.saturating_sub(*at) < 600_000);
                match w.cur.as_mut() {
                    Some(s) => { s.pchecks += 1; for x in hits { if s.procs.len() < 40 { s.procs.entry(x).or_insert(t); } } }
                    None => for x in hits { w.pre_hits.insert(x, t); },
                }
            }
        }
        if let Some(p) = need_d {
            let dbg = kzguard::game_debugged(p);
            let drv = kzguard::driver_names();
            let t = now_ms();
            let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
            if let Some(s) = g.as_mut().and_then(|w| w.cur.as_mut()).filter(|s| s.pid == p) {
                s.dchecks += 1;
                if dbg == Some(true) { s.dbg += 1; }
                if !drv.is_empty() {
                    match &s.drv_base {
                        None => s.drv_base = Some(drv.into_iter().collect()),
                        Some(base) => {
                            let fresh: Vec<String> = drv.into_iter().filter(|d| !base.contains(d)).collect();
                            for d in fresh { if s.drv_new.len() < 30 { s.drv_new.entry(d).or_insert(t); } }
                        }
                    }
                }
            }
        }
        if need_sys {
            let v = kzguard::sys_state();
            if let Some(w) = W.lock().unwrap_or_else(|e| e.into_inner()).as_mut() { w.sys = v; }
        }
        if let Some(p) = need_i {
            let x = kzguard::game_inject(p);
            let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
            if let Some(s) = g.as_mut().and_then(|w| w.cur.as_mut()).filter(|s| s.pid == p) {
                s.ichecks += 1;
                if x.get("err").is_some() { s.ierr += 1; } else {
                    s.mz = s.mz.max(x["mem"]["mz"].as_u64().unwrap_or(0));
                    s.rx_kb = s.rx_kb.max(x["mem"]["rxKb"].as_u64().unwrap_or(0));
                    s.foreign = s.foreign.max(x["threads"]["foreign"].as_u64().unwrap_or(0));
                    for id in x["sig"].as_array().into_iter().flatten().filter_map(|v| v.as_str()) { if s.sig.len() < 16 { s.sig.insert(id.to_string()); } }
                    for m in x["mods"].as_array().into_iter().flatten() {
                        let k = m["name"].as_str().unwrap_or("").to_lowercase();
                        if !k.is_empty() && s.mods.len() < 30 { s.mods.entry(k).or_insert_with(|| m.clone()); }
                    }
                }
            }
        }
        if let Some(p) = need_h {
            let h = kzguard::game_handles(p);
            let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
            let Some(s) = g.as_mut().and_then(|w| w.cur.as_mut()).filter(|s| s.pid == p) else { return };
            s.hchecks += 1;
            let Some(arr) = h.as_array() else { s.herr += 1; return };
            let t = now_ms();
            for v in arr {
                let name = v["name"].as_str().unwrap_or("").to_lowercase();
                let key = if name.is_empty() { format!("?{}", v["path"].as_str().unwrap_or("")) } else { name };
                if let Some(e) = s.handles.get_mut(&key) {
                    e["n"] = json!(e["n"].as_u64().unwrap_or(1) + 1);
                    e["last"] = json!(t);
                    if v["write"].as_bool() == Some(true) { e["write"] = json!(true); }
                    if v["read"].as_bool() == Some(true) { e["read"] = json!(true); }
                } else if s.handles.len() < 40 {
                    let mut e = v.clone();
                    e["first"] = json!(t); e["last"] = json!(t); e["n"] = json!(1);
                    s.handles.insert(key, e);
                }
            }
        }
    }

    fn watch_loop() {
        while !STOP.load(Ordering::SeqCst) {
            let _ = std::panic::catch_unwind(tick);
            std::thread::sleep(POLL);
        }
    }

    pub fn issues(st: &Value) -> Vec<&'static str> {
        let (mut v, sys, g) = (Vec::new(), &st["sys"], &st["game"]);
        if sys["testsign"].as_bool() == Some(true) { v.push("testsign"); }
        if sys["dse"].as_bool() == Some(false) { v.push("dse"); }
        if sys["kdbg"].as_bool() == Some(true) || sys["debugmode"].as_bool() == Some(true) { v.push("kdbg"); }
        if g.is_object() {
            if g["pre"].as_bool() != Some(true) { v.push("late"); }
            if g["gaps"].as_u64().unwrap_or(0) > 0 { v.push("gaps"); }
            let inj = &g["inject"];
            let sig_hard = inj["sig"].as_array().map(|a| a.iter().any(|x| x.as_str().map(|s| s != "imgui").unwrap_or(false))).unwrap_or(false);
            if inj["mz"].as_u64().unwrap_or(0) > 0 || inj["foreign"].as_u64().unwrap_or(0) > 0 || sig_hard { v.push("inject"); }
            if g["procs"].as_array().map(|a| !a.is_empty()).unwrap_or(false) { v.push("procs"); }
            if g["dbg"].as_u64().unwrap_or(0) > 0 { v.push("debugger"); }
            if g["age"].as_u64().unwrap_or(0) > OVL_STALE.as_secs() && g["ovlAge"].as_u64().map(|a| a > OVL_STALE.as_secs()).unwrap_or(true) { v.push("notray"); }
        }
        v
    }

    static SCAN: Mutex<()> = Mutex::new(());

    fn list_file() -> PathBuf {
        PathBuf::from(std::env::var("ProgramData").unwrap_or_else(|_| r"C:\ProgramData".into())).join("Konzte Guard").join("list.json")
    }
    fn set_list(o: &Value) {
        let pick = |k: &str| o[k].as_array().map(|a| a.iter().filter_map(|x| x.as_str().map(String::from)).take(2000).collect::<Vec<_>>()).unwrap_or_default();
        let (n, h) = (pick("names"), pick("hashes"));
        if n.is_empty() && h.is_empty() { return; }
        if let Some(w) = W.lock().unwrap_or_else(|e| e.into_inner()).as_mut() { w.names = n; w.hashes = h; }
    }

    fn client_is_guard(pid: u32) -> bool {
        use windows_sys::Win32::System::Threading::*;
        unsafe {
            let h = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, 0, pid);
            if h.is_null() { return false; }
            let mut buf = vec![0u16; 1024];
            let mut n = buf.len() as u32;
            let ok = QueryFullProcessImageNameW(h, 0, buf.as_mut_ptr(), &mut n) != 0;
            CloseHandle(h);
            ok && String::from_utf16_lossy(&buf[..n as usize]).to_lowercase() == install_dir().join("KonzteGuard.exe").to_string_lossy().to_lowercase()
        }
    }

    fn handle(req: &Value, client: u32) -> Value {
        match req["op"].as_str().unwrap_or("") {
            "uninstall" => {
                std::thread::spawn(|| {
                    std::thread::sleep(Duration::from_millis(1500));
                    let _ = uninstall(false);
                    std::thread::sleep(Duration::from_millis(500));
                    std::process::exit(0);
                });
                json!({ "ok": true })
            }
            "stop" => {
                if !client_is_guard(client) { return json!({ "ok": false, "error": "caller" }); }
                if state()["game"].is_object() { return json!({ "ok": false, "error": "ingame" }); }
                std::thread::spawn(|| {
                    std::thread::sleep(Duration::from_millis(800));
                    if let Some(tx) = EXIT_TX.lock().unwrap_or_else(|e| e.into_inner()).as_ref() { let _ = tx.send(()); }
                });
                json!({ "ok": true })
            }
            "overlay" => {
                if !client_is_guard(client) { return json!({ "ok": false, "error": "caller" }); }
                let pid = req["pid"].as_u64().unwrap_or(0) as u32;
                let mut g = W.lock().unwrap_or_else(|e| e.into_inner());
                let Some(s) = g.as_mut().and_then(|w| w.cur.as_mut()).filter(|s| s.pid == pid) else { return json!({ "ok": false, "error": "nogame" }) };
                s.ovl_n += 1; s.last_ovl = Some(Instant::now());
                let t = now_ms();
                for o in req["list"].as_array().into_iter().flatten().take(40) {
                    let k = o["name"].as_str().unwrap_or("").to_lowercase();
                    if k.is_empty() { continue; }
                    if let Some(e) = s.ovl.get_mut(&k) { e["n"] = json!(e["n"].as_u64().unwrap_or(1) + 1); e["last"] = json!(t); if o["hidden"].as_bool() == Some(true) { e["hidden"] = json!(true); } }
                    else if s.ovl.len() < 40 { let mut e = o.clone(); e["first"] = json!(t); e["last"] = json!(t); e["n"] = json!(1); s.ovl.insert(k, e); }
                }
                json!({ "ok": true })
            }
            "info" => {
                let st = state();
                json!({ "ok": true, "sv": VERSION, "guard": serde_json::from_str::<Value>(&kzguard::info_json()).unwrap_or(Value::Null),
                        "since": st["since"], "game": st["game"].is_object(), "pre": st["game"]["pre"], "pid": st["game"]["pid"],
                        "sys": st["sys"], "issues": issues(&st), "upd": UPD.lock().unwrap_or_else(|e| e.into_inner()).clone() })
            }
            "scan" => {
                let _one = SCAN.lock().unwrap_or_else(|e| e.into_inner());
                let mut opts = req["opts"].clone();
                if !opts.is_object() { opts = json!({}); }
                set_list(&opts);
                if opts["names"].as_array().map(|a| !a.is_empty()).unwrap_or(false) || opts["hashes"].as_array().map(|a| !a.is_empty()).unwrap_or(false) {
                    let f = list_file();
                    if let Some(d) = f.parent() { let _ = std::fs::create_dir_all(d); }
                    let _ = std::fs::write(&f, json!({ "names": opts["names"], "hashes": opts["hashes"] }).to_string());
                }
                opts["ver"] = json!(format!("svc-{VERSION}"));
                let att: Value = serde_json::from_str(&kzguard::scan_svc(&opts.to_string(), state())).unwrap_or(Value::Null);
                json!({ "ok": att.is_object(), "att": att })
            }
            _ => json!({ "ok": false, "error": "op" }),
        }
    }

    fn serve(h: HANDLE) {
        let mut client = 0u32;
        unsafe { GetNamedPipeClientProcessId(h, &mut client); }
        let mut f = unsafe { std::fs::File::from_raw_handle(h as _) };
        let mut buf: Vec<u8> = Vec::new();
        let mut chunk = [0u8; 65536];
        loop {
            match f.read(&mut chunk) {
                Ok(0) => break,
                Ok(n) => { buf.extend_from_slice(&chunk[..n]); if buf.contains(&b'\n') || buf.len() > (1 << 20) { break; } }
                Err(_) => break,
            }
        }
        let line = buf.split(|b| *b == b'\n').next().unwrap_or(&[]);
        let out = match serde_json::from_slice::<Value>(line) {
            Ok(req) => std::panic::catch_unwind(|| handle(&req, client)).unwrap_or_else(|_| json!({ "ok": false, "error": "panic" })),
            Err(_) => json!({ "ok": false, "error": "json" }),
        };
        let mut s = out.to_string(); s.push('\n');
        let _ = f.write_all(s.as_bytes());
        unsafe { FlushFileBuffers(h); }
        let t = Instant::now();
        while t.elapsed() < Duration::from_secs(10) { match f.read(&mut chunk) { Ok(0) | Err(_) => break, Ok(_) => {} } }
        unsafe { DisconnectNamedPipe(h); }
        drop(f);
    }

    fn pipe_loop() {
        let sddl = wz("D:P(A;;GA;;;SY)(A;;GA;;;BA)(A;;GRGW;;;AU)");
        let mut psd: *mut core::ffi::c_void = std::ptr::null_mut();
        unsafe { ConvertStringSecurityDescriptorToSecurityDescriptorW(sddl.as_ptr(), SDDL_REVISION_1, &mut psd as *mut _ as _, std::ptr::null_mut()); }
        let sa = SECURITY_ATTRIBUTES { nLength: std::mem::size_of::<SECURITY_ATTRIBUTES>() as u32, lpSecurityDescriptor: psd, bInheritHandle: 0 };
        let name = wz(PIPE);
        let mut first = true;
        while !STOP.load(Ordering::SeqCst) {
            let flags = PIPE_ACCESS_DUPLEX | if first { FILE_FLAG_FIRST_PIPE_INSTANCE } else { 0 };
            let h = unsafe {
                CreateNamedPipeW(name.as_ptr(), flags, PIPE_TYPE_BYTE | PIPE_READMODE_BYTE | PIPE_WAIT | PIPE_REJECT_REMOTE_CLIENTS,
                    PIPE_UNLIMITED_INSTANCES, 1 << 16, 1 << 16, 0, &sa)
            };
            if h == INVALID_HANDLE_VALUE {
                std::thread::sleep(Duration::from_secs(5));
                continue;
            }
            first = false;
            let ok = unsafe { ConnectNamedPipe(h, std::ptr::null_mut()) } != 0 || unsafe { GetLastError() } == ERROR_PIPE_CONNECTED;
            if !ok { unsafe { CloseHandle(h); } continue; }
            let hv = h as usize;
            std::thread::spawn(move || serve(hv as HANDLE));
        }
    }

    fn start_workers() {
        *W.lock().unwrap_or_else(|e| e.into_inner()) = Some(Watch { since: now_ms(), started: Instant::now(), saw_no_game: false, cur: None, prev: None, sys: Value::Null, sys_at: None,
                                                                    names: Vec::new(), hashes: Vec::new(), procs_at: None, pre_hits: BTreeMap::new() });
        if let Ok(v) = std::fs::read_to_string(list_file()).map(|s| serde_json::from_str::<Value>(&s).unwrap_or(Value::Null)) { set_list(&v); }
        std::thread::spawn(watch_loop);
        std::thread::spawn(pipe_loop);
    }

    static UPD: Mutex<String> = Mutex::new(String::new());

    fn update_loop() {
        if let Ok(me) = std::env::current_exe() { if let Some(d) = me.parent() { let _ = std::fs::remove_file(d.join("KonzteGuard.old")); } }
        let set = |v: &str| *UPD.lock().unwrap_or_else(|e| e.into_inner()) = v.to_string();
        set("wait");
        std::thread::sleep(Duration::from_secs(120));
        loop {
            let in_game = W.lock().unwrap_or_else(|e| e.into_inner()).as_ref().map(|w| w.cur.is_some()).unwrap_or(false);
            if in_game { set("game"); std::thread::sleep(Duration::from_secs(300)); continue; }
            set("check");
            let r = std::env::current_exe().map_err(|e| e.to_string()).and_then(|me| crate::update::check_and_apply(&me));
            *UPD.lock().unwrap_or_else(|e| e.into_inner()) = match &r { Ok(Some(v)) => format!("updated {v}"), Ok(None) => "ok".into(), Err(e) => e.clone() };
            if let Ok(Some(_)) = r {
                std::thread::sleep(Duration::from_secs(1));
                std::process::exit(1);
            }
            std::thread::sleep(Duration::from_secs(6 * 3600));
        }
    }

    pub fn pipe_call(req: &Value, timeout: Duration) -> Result<Value, String> {
        let line = format!("{req}\n");
        let (tx, rx) = mpsc::channel();
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
                f.write_all(line.as_bytes()).map_err(|e| e.to_string())?;
                let (mut s, mut b) = (Vec::new(), [0u8; 65536]);
                loop { let n = f.read(&mut b).map_err(|e| e.to_string())?; if n == 0 { break; } s.extend_from_slice(&b[..n]); if s.contains(&b'\n') { break; } }
                serde_json::from_slice(s.split(|c| *c == b'\n').next().unwrap_or(&[])).map_err(|e| format!("json: {e}"))
            })();
            let _ = tx.send(r);
        });
        rx.recv_timeout(timeout).unwrap_or_else(|_| Err("timeout".into()))
    }

    define_windows_service!(ffi_service_main, service_main);

    fn service_main(_args: Vec<OsString>) { let _ = run_service(); }

    fn run_service() -> windows_service::Result<()> {
        let (tx, rx) = mpsc::channel();
        *EXIT_TX.lock().unwrap_or_else(|e| e.into_inner()) = Some(tx.clone());
        let h = service_control_handler::register(NAME, move |c| match c {
            ServiceControl::Stop | ServiceControl::Shutdown => { let _ = tx.send(()); ServiceControlHandlerResult::NoError }
            ServiceControl::Interrogate => ServiceControlHandlerResult::NoError,
            _ => ServiceControlHandlerResult::NotImplemented,
        })?;
        let status = |state, accept| ServiceStatus {
            service_type: ServiceType::OWN_PROCESS, current_state: state, controls_accepted: accept,
            exit_code: ServiceExitCode::Win32(0), checkpoint: 0, wait_hint: Duration::from_secs(5), process_id: None,
        };
        start_workers();
        std::thread::spawn(update_loop);
        h.set_service_status(status(ServiceState::Running, ServiceControlAccept::STOP | ServiceControlAccept::SHUTDOWN))?;
        let _ = rx.recv();
        STOP.store(true, Ordering::SeqCst);
        h.set_service_status(status(ServiceState::Stopped, ServiceControlAccept::empty()))?;
        Ok(())
    }

    fn install_dir() -> PathBuf {
        PathBuf::from(std::env::var("ProgramFiles").unwrap_or_else(|_| r"C:\Program Files".into())).join("Konzte Guard")
    }

    fn kill_trays() {
        use windows_sys::Win32::System::Diagnostics::ToolHelp::*;
        use windows_sys::Win32::System::Threading::{OpenProcess, TerminateProcess, WaitForSingleObject, PROCESS_TERMINATE, PROCESS_SYNCHRONIZE};
        let me = std::process::id();
        unsafe {
            let snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
            if snap == INVALID_HANDLE_VALUE { return; }
            let mut e: PROCESSENTRY32W = std::mem::zeroed();
            e.dwSize = std::mem::size_of::<PROCESSENTRY32W>() as u32;
            let mut ok = Process32FirstW(snap, &mut e) != 0;
            while ok {
                let n = e.szExeFile.iter().position(|c| *c == 0).unwrap_or(e.szExeFile.len());
                let name = String::from_utf16_lossy(&e.szExeFile[..n]).to_lowercase();
                if e.th32ProcessID != me && (name == "konzteguard.exe" || name == "konzteguard.old") {
                    let h = OpenProcess(PROCESS_TERMINATE | PROCESS_SYNCHRONIZE, 0, e.th32ProcessID);
                    if !h.is_null() { TerminateProcess(h, 0); WaitForSingleObject(h, 3000); CloseHandle(h); }
                }
                ok = Process32NextW(snap, &mut e) != 0;
            }
            CloseHandle(snap);
        }
    }

    fn wait_state(svc: &windows_service::service::Service, want: ServiceState, secs: u64) -> bool {
        let t = Instant::now();
        while t.elapsed() < Duration::from_secs(secs) {
            if svc.query_status().map(|s| s.current_state == want).unwrap_or(false) { return true; }
            std::thread::sleep(Duration::from_millis(250));
        }
        false
    }

    fn install() -> Result<Value, String> {
        let m = ServiceManager::local_computer(None::<&str>, ServiceManagerAccess::CONNECT | ServiceManagerAccess::CREATE_SERVICE).map_err(|e| format!("scm: {e} (потрібні права адміністратора)"))?;
        let access = ServiceAccess::QUERY_STATUS | ServiceAccess::START | ServiceAccess::STOP | ServiceAccess::CHANGE_CONFIG | ServiceAccess::DELETE;
        let existing = m.open_service(NAME, access).ok();
        if let Some(s) = &existing {
            if s.query_status().map(|x| x.current_state != ServiceState::Stopped).unwrap_or(false) { let _ = s.stop(); wait_state(s, ServiceState::Stopped, 15); }
        }
        let dir = install_dir();
        if std::env::current_exe().map(|p| p != dir.join("KonzteGuard.exe")).unwrap_or(true) { kill_trays(); }
        std::fs::create_dir_all(&dir).map_err(|e| format!("mkdir: {e}"))?;
        let dest = dir.join("KonzteGuard.exe");
        let me = std::env::current_exe().map_err(|e| e.to_string())?;
        let installed = if dest.exists() && me != dest {
            std::process::Command::new(&dest).arg("version").output().ok().map(|o| String::from_utf8_lossy(&o.stdout).trim().to_string()).unwrap_or_default()
        } else { String::new() };
        if me != dest && !crate::update::newer(&installed, VERSION) {
            let mut ok = false;
            for i in 0..20 {
                if std::fs::copy(&me, &dest).is_ok() { ok = true; break; }
                if i == 3 { let old = dir.join("KonzteGuard.old"); let _ = std::fs::remove_file(&old); let _ = std::fs::rename(&dest, &old); }
                std::thread::sleep(Duration::from_millis(500));
            }
            if !ok { return Err("copy: file busy".into()); }
        }
        let _ = std::fs::remove_file(dir.join("kzguard-svc.exe"));
        let info = ServiceInfo {
            name: NAME.into(), display_name: DISPLAY.into(), service_type: ServiceType::OWN_PROCESS,
            start_type: ServiceStartType::AutoStart, error_control: ServiceErrorControl::Normal,
            executable_path: dest.clone(), launch_arguments: vec!["service".into()], dependencies: vec![],
            account_name: None, account_password: None,
        };
        let svc = match existing { Some(s) => { s.change_config(&info).map_err(|e| format!("config: {e}"))?; s }, None => m.create_service(&info, access).map_err(|e| format!("create: {e}"))? };
        let _ = svc.set_description(DESC);
        let _ = svc.update_failure_actions(ServiceFailureActions {
            reset_period: ServiceFailureResetPeriod::After(Duration::from_secs(86400)), reboot_msg: None, command: None,
            actions: Some(vec![ServiceAction { action_type: ServiceActionType::Restart, delay: Duration::from_secs(3) }; 3]),
        });
        let sd = "D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWRPLOCRRC;;;AU)";
        let _ = std::process::Command::new("sc.exe").args(["sdset", NAME, sd]).output();
        svc.start::<&str>(&[]).map_err(|e| format!("start: {e}"))?;
        let running = wait_state(&svc, ServiceState::Running, 15);
        Ok(json!({ "ok": running, "sv": VERSION, "path": dest.to_string_lossy() }))
    }

    fn remove_later(dir: &std::path::Path) {
        use std::os::windows::process::CommandExt;
        let exe = wz(&dir.join("KonzteGuard.exe").to_string_lossy());
        let d = wz(&dir.to_string_lossy());
        unsafe {
            MoveFileExW(exe.as_ptr(), std::ptr::null(), MOVEFILE_DELAY_UNTIL_REBOOT);
            MoveFileExW(d.as_ptr(), std::ptr::null(), MOVEFILE_DELAY_UNTIL_REBOOT);
        }
        let cmd = format!("ping -n 6 127.0.0.1 >nul & rmdir /s /q \"{}\"", dir.display());
        let _ = std::process::Command::new("cmd.exe").args(["/c", &cmd]).creation_flags(0x08000000  | 0x00000008 ).spawn();
    }

    fn uninstall(keep: bool) -> Result<Value, String> {
        kill_trays();
        let dir = install_dir();
        let in_dir = std::env::current_exe().map(|p| p.starts_with(&dir)).unwrap_or(false);
        let m = ServiceManager::local_computer(None::<&str>, ServiceManagerAccess::CONNECT).map_err(|e| format!("scm: {e}"))?;
        let svc = m.open_service(NAME, ServiceAccess::QUERY_STATUS | ServiceAccess::STOP | ServiceAccess::DELETE).ok();
        if let Some(s) = &svc { s.delete().map_err(|e| format!("delete: {e}"))?; }
        if !keep && in_dir { remove_later(&dir); }
        if let Some(s) = &svc {
            if s.query_status().map(|x| x.current_state != ServiceState::Stopped).unwrap_or(false) { let _ = s.stop(); wait_state(s, ServiceState::Stopped, 15); }
        }
        if !keep && !in_dir {
            for _ in 0..20 { if std::fs::remove_dir_all(&dir).is_ok() || !dir.exists() { break; } std::thread::sleep(Duration::from_millis(500)); }
        }
        Ok(json!({ "ok": true }))
    }

    pub fn main() {
        let arg = std::env::args().nth(1).unwrap_or_default();
        if arg.is_empty() || arg == "tray" || arg == "open" { return crate::tray::run(); }
        if arg == "service" {
            if service_dispatcher::start(NAME, ffi_service_main).is_err() { std::process::exit(2); }
            return;
        }
        unsafe { windows_sys::Win32::System::Console::AttachConsole(windows_sys::Win32::System::Console::ATTACH_PARENT_PROCESS); }
        let out = |r: Result<Value, String>| -> ! {
            let (v, code) = match r { Ok(v) => { let c = if v["ok"].as_bool() == Some(true) { 0 } else { 1 }; (v, c) } Err(e) => (json!({ "ok": false, "error": e }), 1) };
            println!("{v}");
            std::process::exit(code)
        };
        match arg.as_str() {
            "install" => out(install()),
            "uninstall" => out(uninstall(std::env::args().nth(2).as_deref() == Some("keep"))),
            "version" => println!("{VERSION}"),
            "call" => {
                let req = std::env::args().nth(2).unwrap_or_else(|| r#"{"op":"info"}"#.into());
                let req: Value = if req.trim_start().starts_with('{') { serde_json::from_str(&req).unwrap_or_else(|_| json!({ "op": "info" })) } else { json!({ "op": req.trim() }) };
                match pipe_call(&req, Duration::from_secs(30)) { Ok(v) => println!("{v}"), Err(e) => { eprintln!("{e}"); std::process::exit(1) } }
            }
            "update" => {
                match std::env::current_exe().map_err(|e| e.to_string()).and_then(|me| crate::update::check_and_apply(&me)) {
                    Ok(Some(v)) => { println!("{{\"ok\":true,\"updated\":\"{v}\"}}"); }
                    Ok(None) => { println!("{{\"ok\":true,\"latest\":true}}"); }
                    Err(e) => { println!("{{\"ok\":false,\"error\":{}}}", json!(e)); std::process::exit(1) }
                }
            }
            "console" => {
                start_workers();
                eprintln!("KONZTE GUARD {VERSION}: канал {PIPE}, Ctrl+C — вихід");
                loop { std::thread::sleep(Duration::from_secs(5)); eprintln!("{}", state()); }
            }
            _ => { eprintln!("KONZTE GUARD {VERSION}\nКоманди: install | uninstall [keep] | console | call | version"); std::process::exit(2) }
        }
    }
}
