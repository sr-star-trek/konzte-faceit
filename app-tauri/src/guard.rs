use crate::{settings, sys};
use once_cell::sync::Lazy;
use regex::Regex;
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use std::collections::{HashMap, HashSet};
use std::io::{Read, Seek, SeekFrom};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Mutex;
use std::time::{Duration, Instant};

pub const GUARD_VERSION: &str = "2.0";

pub fn guard_version() -> &'static str { if cfg!(all(any(windows, target_os = "linux"), target_arch = "x86_64")) { "3.0" } else { GUARD_VERSION } }

#[cfg(all(any(windows, target_os = "linux"), target_arch = "x86_64"))]
fn scan_v3(opts: &Value) -> Result<Value, String> {
    let list = |k: &str| json!(str_list(opts.get(k)));
    let o = json!({
        "nonce": opts.get("nonce").and_then(|v| v.as_str()).unwrap_or(""), "ver": env!("CARGO_PKG_VERSION"),
        "names": list("names"), "hashes": list("hashes"), "driverHashes": list("driverHashes"),
        "files": settings::truthy(opts.get("files")), "filesFull": settings::truthy(opts.get("filesFull")),
        "modules": settings::truthy(opts.get("modules")), "deep": settings::truthy(opts.get("deep")),
        "report": settings::truthy(opts.get("report")),
    });
    let att: Value = serde_json::from_str(&kzguard::scan_signed(&o.to_string())).map_err(|e| format!("scan: {e}"))?;
    let d: Value = serde_json::from_str(att["d"].as_str().unwrap_or("")).map_err(|e| format!("scan: {e}"))?;
    if let Some(e) = d.get("err").and_then(|x| x.as_str()) { return Err(format!("scan: {e}")); }
    let files = if d["files"].is_object() { json!({ "digest": d["files"]["digest"], "n": d["files"]["n"] }) } else { Value::Null };
    Ok(json!({
        "v": 2, "gv": d["gv"], "platform": d["platform"], "ver": d["ver"], "found": d["found"].as_bool().unwrap_or(false),
        "proc": d["proc"], "hits": if d["hits"].is_array() { d["hits"].clone() } else { json!([]) }, "exe": d["exe"], "ga": d["ga"],
        "files": files, "scanned": d["scanned"], "ms": d["ms"], "att": att,
    }))
}
#[cfg(not(all(any(windows, target_os = "linux"), target_arch = "x86_64")))]
fn scan_v3(_: &Value) -> Result<Value, String> { Err("unsupported".into()) }
static GAME_RE: Lazy<Regex> = Lazy::new(|| Regex::new(r"(?i)^combatmaster(\.exe|\.x86_64)?$").unwrap());
static FULL_HASH_RE: Lazy<Regex> =
    Lazy::new(|| Regex::new(r"(?i)^CombatMaster_Data/StreamingAssets/Bundles/(src/weapons/|src/first_person$|ui/)").unwrap());
static SKIP_FILE_RE: Lazy<Regex> = Lazy::new(|| Regex::new(r"(?i)(\.log|\.tmp|\.dmp|\.bak|desktop\.ini|thumbs\.db)$").unwrap());
static ROOT_FILE_RE: Lazy<Regex> =
    Lazy::new(|| Regex::new(r"(?i)^(GameAssembly\.(dll|so)|CombatMaster(\.exe|\.x86_64)?|UnityPlayer\.(dll|so))$").unwrap());
static NORM_EXT: Lazy<Regex> = Lazy::new(|| Regex::new(r"(?i)\.(exe|x86_64|app|bin)$").unwrap());

#[derive(Clone, Debug, Default)]
pub struct Proc {
    pub name: String,
    pub pid: u32,
    pub argv0: String,
}

pub fn base_name(s: &str) -> String {
    s.rsplit(['\\', '/']).next().unwrap_or("").trim().to_string()
}
fn norm_proc(s: &str) -> String {
    NORM_EXT.replace(&base_name(s).to_lowercase(), "").into_owned()
}
fn sha_hex(b: &[u8]) -> String {
    hex::encode(Sha256::digest(b))
}
fn is_game(p: &Proc) -> bool {
    GAME_RE.is_match(&p.name) || GAME_RE.is_match(&base_name(&p.argv0))
}

#[cfg(target_os = "linux")]
pub fn list_procs() -> Vec<Proc> {
    let mut out = Vec::new();
    let Ok(rd) = std::fs::read_dir("/proc") else { return out };
    for e in rd.flatten() {
        let d = e.file_name().to_string_lossy().into_owned();
        let Ok(pid) = d.parse::<u32>() else { continue };
        let Ok(cmdline) = std::fs::read(format!("/proc/{d}/cmdline")) else { continue };
        let Ok(comm) = std::fs::read_to_string(format!("/proc/{d}/comm")) else { continue };
        let argv0 = String::from_utf8_lossy(cmdline.split(|b| *b == 0).find(|s| !s.is_empty()).unwrap_or(&[])).into_owned();
        let bn = base_name(&argv0);
        out.push(Proc { name: if bn.is_empty() { comm.trim().to_string() } else { bn }, pid, argv0 });
    }
    out
}

#[cfg(windows)]
pub fn list_procs() -> Vec<Proc> {
    use windows_sys::Win32::Foundation::{CloseHandle, INVALID_HANDLE_VALUE};
    use windows_sys::Win32::System::Diagnostics::ToolHelp::*;
    let mut out = Vec::new();
    unsafe {
        let snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
        if snap == INVALID_HANDLE_VALUE {
            return out;
        }
        let mut e: PROCESSENTRY32W = std::mem::zeroed();
        e.dwSize = std::mem::size_of::<PROCESSENTRY32W>() as u32;
        if Process32FirstW(snap, &mut e) != 0 {
            loop {
                let n = e.szExeFile.iter().position(|c| *c == 0).unwrap_or(e.szExeFile.len());
                out.push(Proc { name: String::from_utf16_lossy(&e.szExeFile[..n]), pid: e.th32ProcessID, argv0: String::new() });
                if Process32NextW(snap, &mut e) == 0 {
                    break;
                }
            }
        }
        CloseHandle(snap);
    }
    out
}

#[cfg(target_os = "macos")]
pub fn list_procs() -> Vec<Proc> {
    let re = Regex::new(r"^(\d+)\s+(.+)$").unwrap();
    let mut procs: Vec<Proc> = sys::run_out("ps", &["-axo", "pid=,comm="])
        .unwrap_or_default()
        .lines()
        .filter_map(|l| re.captures(l.trim()).map(|m| Proc { name: base_name(&m[2]), pid: m[1].parse().unwrap_or(0), argv0: String::new() }))
        .collect();
    let w = Regex::new(r"(?i)([a-z]:\\[^\x22]*?\.exe)").unwrap();
    let by: HashMap<u32, usize> = procs.iter().enumerate().map(|(i, p)| (p.pid, i)).collect();
    for l in sys::run_out("ps", &["-axww", "-o", "pid=,args="]).unwrap_or_default().lines() {
        let Some(m) = re.captures(l.trim()) else { continue };
        let pid: u32 = m[1].parse().unwrap_or(0);
        if let (Some(c), Some(&i)) = (w.captures(&m[2]), by.get(&pid)) {
            procs[i].argv0 = c[1].to_string();
            procs[i].name = base_name(&c[1].replace('\\', "/"));
        }
    }
    procs
}

pub fn game_running() -> bool {
    list_procs().iter().any(is_game)
}

fn steam_libs() -> Vec<PathBuf> {
    let mut libs: Vec<PathBuf> = Vec::new();
    let re = Regex::new(r#""path"\s+"([^"]+)""#).unwrap();
    for root in sys::steam_roots() {
        if !libs.contains(&root) {
            libs.push(root.clone());
        }
        if let Ok(vdf) = std::fs::read_to_string(root.join("steamapps").join("libraryfolders.vdf")) {
            for m in re.captures_iter(&vdf) {
                let mut p = m[1].replace("\\\\", "\\");
                let rs = root.to_string_lossy().into_owned();
                if let Some(dc) = rs.find("/drive_c/") {
                    if p.len() > 3 && p.as_bytes()[1] == b':' && p.as_bytes()[2] == b'\\' {
                        let mut pb = PathBuf::from(&rs[..dc]).join("drive_c");
                        for s in p[3..].split('\\') {
                            pb.push(s);
                        }
                        p = pb.to_string_lossy().into_owned();
                    }
                }
                let pb = PathBuf::from(p);
                if !libs.contains(&pb) {
                    libs.push(pb);
                }
            }
        }
    }
    libs
}

#[cfg(windows)]
fn win_image_path(pid: u32) -> Option<String> {
    use windows_sys::Win32::Foundation::CloseHandle;
    use windows_sys::Win32::System::Threading::{OpenProcess, QueryFullProcessImageNameW, PROCESS_QUERY_LIMITED_INFORMATION};
    unsafe {
        let h = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, 0, pid);
        if h.is_null() {
            return None;
        }
        let mut buf = vec![0u16; 1024];
        let mut n = buf.len() as u32;
        let ok = QueryFullProcessImageNameW(h, 0, buf.as_mut_ptr(), &mut n) != 0;
        CloseHandle(h);
        if ok {
            Some(String::from_utf16_lossy(&buf[..n as usize]))
        } else {
            None
        }
    }
}

pub fn game_exe_path(proc: Option<&Proc>) -> Option<PathBuf> {
    #[cfg(target_os = "linux")]
    if let Some(p) = proc {
        if let Ok(exe) = std::fs::read_link(format!("/proc/{}/exe", p.pid)) {
            if GAME_RE.is_match(&base_name(&exe.to_string_lossy())) {
                return Some(exe);
            }
        }
        let a = &p.argv0;
        if a.len() > 2 && a[..2].eq_ignore_ascii_case("z:") && a.as_bytes()[2] == b'\\' {
            let pb = PathBuf::from(a[2..].replace('\\', "/"));
            if pb.exists() {
                return Some(pb);
            }
        }
    }
    #[cfg(windows)]
    if let Some(p) = proc {
        if let Some(path) = win_image_path(p.pid) {
            let pb = PathBuf::from(path);
            if pb.exists() {
                return Some(pb);
            }
        }
    }
    #[cfg(target_os = "macos")]
    if let Some(p) = proc {
        if p.argv0.len() > 3 {
            for b in sys::mac_bottles() {
                let mut pb = b.join("drive_c");
                for s in p.argv0[3..].split('\\') {
                    pb.push(s);
                }
                if pb.exists() {
                    return Some(pb);
                }
            }
        }
    }
    let _ = proc;
    for lib in steam_libs() {
        for f in ["CombatMaster.exe", "CombatMaster.x86_64"] {
            let p = lib.join("steamapps").join("common").join("Combat Master").join(f);
            if p.exists() {
                return Some(p);
            }
        }
    }
    None
}

fn stat_key(m: &std::fs::Metadata) -> String {
    let mt = m.modified().ok().and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok()).map(|d| d.as_nanos()).unwrap_or(0);
    format!("{}:{}", m.len(), mt)
}
static HASH_CACHE: Lazy<Mutex<HashMap<PathBuf, (String, String)>>> = Lazy::new(Default::default);
static QUICK_CACHE: Lazy<Mutex<HashMap<PathBuf, (String, String)>>> = Lazy::new(Default::default);

pub fn file_hash(f: &Path) -> Option<(u64, String)> {
    let m = std::fs::metadata(f).ok()?;
    let key = stat_key(&m);
    if let Some((k, h)) = HASH_CACHE.lock().unwrap().get(f) {
        if *k == key {
            return Some((m.len(), h.clone()));
        }
    }
    let mut file = std::fs::File::open(f).ok()?;
    let mut h = Sha256::new();
    let mut buf = vec![0u8; 1 << 20];
    loop {
        let n = file.read(&mut buf).ok()?;
        if n == 0 {
            break;
        }
        h.update(&buf[..n]);
    }
    let hash = hex::encode(h.finalize());
    HASH_CACHE.lock().unwrap().insert(f.to_path_buf(), (key, hash.clone()));
    Some((m.len(), hash))
}

fn quick_hash(f: &Path, m: &std::fs::Metadata) -> Option<String> {
    let key = stat_key(m);
    if let Some((k, h)) = QUICK_CACHE.lock().unwrap().get(f) {
        if *k == key {
            return Some(h.clone());
        }
    }
    let size = m.len();
    let mut h = Sha256::new();
    h.update(size.to_string().as_bytes());
    let mut file = std::fs::File::open(f).ok()?;
    let n = size.min(1 << 20);
    let mut b = vec![0u8; n as usize];
    file.read_exact(&mut b).ok()?;
    h.update(&b);
    if size > n {
        let mm = (size - n).min(1 << 20);
        let mut e = vec![0u8; mm as usize];
        file.seek(SeekFrom::Start(size - mm)).ok()?;
        file.read_exact(&mut e).ok()?;
        h.update(&e);
    }
    let hash = hex::encode(h.finalize());
    QUICK_CACHE.lock().unwrap().insert(f.to_path_buf(), (key, hash.clone()));
    Some(hash)
}

fn game_modules(proc: &Proc) -> Option<Vec<String>> {
    let mut names: HashSet<String> = HashSet::new();
    #[cfg(windows)]
    unsafe {
        use windows_sys::Win32::Foundation::{CloseHandle, INVALID_HANDLE_VALUE};
        use windows_sys::Win32::System::Diagnostics::ToolHelp::*;
        let snap = CreateToolhelp32Snapshot(TH32CS_SNAPMODULE | TH32CS_SNAPMODULE32, proc.pid);
        if snap == INVALID_HANDLE_VALUE {
            return None;
        }
        let mut e: MODULEENTRY32W = std::mem::zeroed();
        e.dwSize = std::mem::size_of::<MODULEENTRY32W>() as u32;
        if Module32FirstW(snap, &mut e) != 0 {
            loop {
                let n = e.szModule.iter().position(|c| *c == 0).unwrap_or(e.szModule.len());
                let s = String::from_utf16_lossy(&e.szModule[..n]).trim().to_lowercase();
                if !s.is_empty() {
                    names.insert(s);
                }
                if Module32NextW(snap, &mut e) == 0 {
                    break;
                }
            }
        }
        CloseHandle(snap);
    }
    #[cfg(target_os = "macos")]
    {
        let out = sys::run_out("lsof", &["-p", &proc.pid.to_string(), "-Fn"]).unwrap_or_default();
        let re = Regex::new(r"(?i)\.(dll|dylib|so)$").unwrap();
        for l in out.lines() {
            if let Some(f) = l.strip_prefix('n') {
                if re.is_match(f) {
                    names.insert(base_name(f).to_lowercase());
                }
            }
        }
    }
    #[cfg(target_os = "linux")]
    {
        let re = Regex::new(r"(?i)\.(dll|so)(\.[\d.]+)?$").unwrap();
        let maps = std::fs::read_to_string(format!("/proc/{}/maps", proc.pid)).ok()?;
        for l in maps.lines() {
            let f = l.split_whitespace().skip(5).collect::<Vec<_>>().join(" ");
            if re.is_match(&f) {
                names.insert(base_name(&f.replace('\\', "/")).to_lowercase());
            }
        }
    }
    let _ = proc;
    let mut v: Vec<String> = names.into_iter().collect();
    v.sort();
    v.truncate(600);
    Some(v)
}

static FILES_SENT: Mutex<Option<String>> = Mutex::new(None);

fn game_files(root: &Path) -> Value {
    let mut out: Vec<(String, PathBuf)> = Vec::new();
    fn walk(d: &Path, rel: &str, out: &mut Vec<(String, PathBuf)>) {
        let Ok(rd) = std::fs::read_dir(d) else { return };
        for e in rd.flatten() {
            if out.len() >= 3000 {
                return;
            }
            let name = e.file_name().to_string_lossy().into_owned();
            let r = if rel.is_empty() { name.clone() } else { format!("{rel}/{name}") };
            let Ok(ft) = e.file_type() else { continue };
            if ft.is_dir() {
                if rel.is_empty() && name != "CombatMaster_Data" {
                    continue;
                }
                walk(&e.path(), &r, out);
            } else if ft.is_file() && !SKIP_FILE_RE.is_match(&name) && (!rel.is_empty() || ROOT_FILE_RE.is_match(&name)) {
                out.push((r, e.path()));
            }
        }
    }
    walk(root, "", &mut out);
    let mut list: Vec<(String, u64, String)> = Vec::new();
    for (r, f) in out {
        let Ok(m) = std::fs::metadata(&f) else { continue };
        let full = FULL_HASH_RE.is_match(&r);
        let h = if full { file_hash(&f).map(|x| x.1) } else { quick_hash(&f, &m) };
        if let Some(h) = h {
            list.push((r, m.len(), format!("{}{}", if full { "f:" } else { "q:" }, &h[..32])));
        }
    }
    list.sort_by(|a, b| a.0.encode_utf16().cmp(b.0.encode_utf16()));
    let digest = sha_hex(list.iter().map(|x| format!("{}|{}|{}", x.0, x.1, x.2)).collect::<Vec<_>>().join("\n").as_bytes());
    let mut sent = FILES_SENT.lock().unwrap();
    let mut res = json!({ "digest": digest, "n": list.len() });
    if sent.as_deref() != Some(digest.as_str()) {
        res["list"] = Value::Array(list.into_iter().map(|(r, s, h)| json!([r, s, h])).collect());
    }
    *sent = Some(digest);
    res
}

static DEEP_CACHE: Lazy<Mutex<Option<(Instant, u32, Value)>>> = Lazy::new(Default::default);

fn drv_hash(n: &str) -> String {
    sha_hex(format!("kzac:{}", n.strip_suffix(".sys").unwrap_or(n)).as_bytes())
}

fn deep_scan(game_pid: u32, driver_hashes: &[String]) -> Value {
    if let Some((at, pid, r)) = DEEP_CACHE.lock().unwrap().as_ref() {
        if at.elapsed() < Duration::from_millis(150_000) && *pid == game_pid {
            return r.clone();
        }
    }
    let mut r = deep_scan_platform(game_pid);
    if let Some(drv) = r.get("drivers").and_then(|v| v.as_array()).cloned() {
        let want: HashSet<&str> = driver_hashes.iter().map(|s| s.as_str()).filter(|h| is_sha(h)).collect();
        let mut seen = Vec::<String>::new();
        for n in drv.iter().filter_map(|v| v.as_str()).map(|s| s.to_lowercase()) {
            let h = drv_hash(&n);
            let tag = format!("h:{h}");
            if want.contains(h.as_str()) && !seen.contains(&tag) {
                seen.push(tag);
            }
        }
        r["drivers"] = json!(seen);
    }
    *DEEP_CACHE.lock().unwrap() = Some((Instant::now(), game_pid, r.clone()));
    r
}

#[cfg(windows)]
fn deep_scan_platform(game_pid: u32) -> Value {
    const CS: &str = include_str!("../../app/winscan.cs");
    let run = || -> Option<Value> {
        let tag = &sha_hex(CS.as_bytes())[..12];
        let dir = settings::user_data().join("guard");
        std::fs::create_dir_all(&dir).ok()?;
        let cs = dir.join("winscan.cs");
        let dll = dir.join(format!("kzscan-{tag}.dll"));
        let ps1 = dir.join("scan.ps1");
        std::fs::write(&cs, CS).ok()?;
        std::fs::write(&ps1, "param([int]$GamePid,[string]$Cs,[string]$Dll)\r\n$ErrorActionPreference='Stop'\r\nif (-not (Test-Path $Dll)) { Add-Type -TypeDefinition ([IO.File]::ReadAllText($Cs)) -Language CSharp -ReferencedAssemblies System.Core -OutputAssembly $Dll }\r\nAdd-Type -Path $Dll\r\n[KzScan]::Run($GamePid)").ok()?;
        let mut child = sys::cmd("powershell")
            .args(["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File"])
            .arg(&ps1)
            .args(["-GamePid", &game_pid.to_string(), "-Cs"])
            .arg(&cs)
            .arg("-Dll")
            .arg(&dll)
            .stdout(std::process::Stdio::piped())
            .stderr(std::process::Stdio::null())
            .spawn()
            .ok()?;
        let deadline = Instant::now() + Duration::from_secs(45);
        loop {
            match child.try_wait() {
                Ok(Some(_)) => break,
                Ok(None) if Instant::now() < deadline => std::thread::sleep(Duration::from_millis(100)),
                _ => {
                    let _ = child.kill();
                    return None;
                }
            }
        }
        let mut s = String::new();
        child.stdout.take()?.read_to_string(&mut s).ok()?;
        serde_json::from_str(s.trim().lines().last()?).ok()
    };
    run().unwrap_or(Value::Null)
}

#[cfg(target_os = "linux")]
fn deep_scan_platform(game_pid: u32) -> Value {
    if game_pid == 0 {
        return Value::Null;
    }
    let me = std::process::id();
    let mut handles: Vec<(u32, &str)> = Vec::new();
    if let Ok(st) = std::fs::read_to_string(format!("/proc/{game_pid}/status")) {
        if let Some(c) = Regex::new(r"TracerPid:\s*(\d+)").unwrap().captures(&st) {
            let tr: u32 = c[1].parse().unwrap_or(0);
            if tr > 0 {
                handles.push((tr, "ptrace"));
            }
        }
    }
    let target = PathBuf::from(format!("/proc/{game_pid}/mem"));
    if let Ok(rd) = std::fs::read_dir("/proc") {
        for e in rd.flatten() {
            let Ok(pid) = e.file_name().to_string_lossy().parse::<u32>() else { continue };
            if pid == game_pid || pid == me {
                continue;
            }
            let Ok(fds) = std::fs::read_dir(format!("/proc/{pid}/fd")) else { continue };
            for f in fds.flatten() {
                if std::fs::read_link(f.path()).map(|t| t == target).unwrap_or(false) {
                    handles.push((pid, "mem"));
                    break;
                }
            }
        }
    }
    let hs: Vec<Value> = handles
        .iter()
        .map(|(pid, how)| {
            let name = std::fs::read_to_string(format!("/proc/{pid}/comm")).map(|s| s.trim().to_string()).unwrap_or_default();
            json!({ "name": name, "company": "", "sys": false, "read": true, "write": *how == "mem", "how": how })
        })
        .collect();
    json!({ "v": 1, "handles": hs, "overlays": [], "drivers": [] })
}

#[cfg(target_os = "macos")]
fn deep_scan_platform(_game_pid: u32) -> Value {
    Value::Null
}

fn is_sha(h: &str) -> bool {
    h.len() == 64 && h.bytes().all(|c| c.is_ascii_digit() || (b'a'..=b'f').contains(&c))
}

fn str_list(v: Option<&Value>) -> Vec<String> {
    v.and_then(|x| x.as_array()).map(|a| a.iter().filter_map(|s| s.as_str().map(String::from)).collect()).unwrap_or_default()
}

pub fn scan(opts: &Value) -> Value {
    let pend = crate::svc::begin(opts);
    let guard_err = match scan_v3(opts) {
        Ok(mut v) => { crate::svc::finish(pend, &mut v); return v; }
        Err(e) if e == "unsupported" => None,
        Err(e) => Some(e.chars().take(110).collect::<String>()),
    };
    let mut r = scan_v2(opts);
    if let Some(e) = guard_err { r["guardErr"] = json!(e); }
    r
}

fn scan_v2(opts: &Value) -> Value {
    let t0 = Instant::now();
    let want: HashSet<String> =
        str_list(opts.get("names")).iter().map(|s| norm_proc(s)).filter(|s| !s.is_empty()).take(500).collect();
    let procs = list_procs();
    let game = procs.iter().find(|p| is_game(p)).cloned();
    let want_h: HashSet<String> = str_list(opts.get("hashes")).into_iter().filter(|h| is_sha(h)).take(2000).collect();
    let mut hits: Vec<String> = Vec::new();
    for p in &procs {
        let n = norm_proc(&p.name);
        if n.is_empty() {
            continue;
        }
        let hit = if want.contains(&n) {
            Some(n.clone())
        } else if !want_h.is_empty() {
            let h = sha_hex(format!("kzac:{n}").as_bytes());
            want_h.contains(&h).then(|| format!("h:{h}"))
        } else {
            None
        };
        if let Some(h) = hit {
            if !hits.contains(&h) {
                hits.push(h);
            }
        }
    }
    let exe_path = game_exe_path(game.as_ref());
    let (mut exe, mut ga) = (Value::Null, Value::Null);
    if let Some(ep) = &exe_path {
        if let Some((size, hash)) = file_hash(ep) {
            exe = json!({ "name": base_name(&ep.to_string_lossy()), "size": size, "hash": hash });
        }
        if let Some(dir) = ep.parent() {
            for g in ["GameAssembly.dll", "GameAssembly.so"] {
                let f = dir.join(g);
                if f.exists() {
                    if let Some((size, hash)) = file_hash(&f) {
                        ga = json!({ "size": size, "hash": hash });
                    }
                    break;
                }
            }
        }
    }
    if settings::truthy(opts.get("filesFull")) {
        *FILES_SENT.lock().unwrap() = None;
    }
    let files = match (&exe_path, settings::truthy(opts.get("files"))) {
        (Some(ep), true) => ep.parent().map(game_files).unwrap_or(Value::Null),
        _ => Value::Null,
    };
    let modules = match (&game, settings::truthy(opts.get("modules"))) {
        (Some(g), true) => game_modules(g).map(|v| json!(v)).unwrap_or(Value::Null),
        _ => Value::Null,
    };
    let deep = match (&game, settings::truthy(opts.get("deep"))) {
        (Some(g), true) => deep_scan(g.pid, &str_list(opts.get("driverHashes"))),
        _ => Value::Null,
    };
    json!({
        "v": 1, "gv": GUARD_VERSION, "platform": sys::platform(), "ver": env!("CARGO_PKG_VERSION"),
        "found": game.is_some(), "proc": game.as_ref().map(|g| base_name(&g.name)),
        "exe": exe, "ga": ga, "files": files, "modules": modules, "hits": hits, "deep": deep,
        "scanned": procs.len(), "ms": t0.elapsed().as_millis() as u64,
    })
}

static UPLOADING: AtomicBool = AtomicBool::new(false);

pub async fn upload(o: Value) -> Value {
    if UPLOADING.swap(true, Ordering::SeqCst) {
        return json!({ "ok": false, "error": "busy" });
    }
    let r = upload_inner(&o).await.unwrap_or_else(|e| json!({ "ok": false, "error": e }));
    UPLOADING.store(false, Ordering::SeqCst);
    r
}

async fn upload_inner(o: &Value) -> Result<Value, String> {
    let s = |k: &str| o.get(k).map(|v| match v { Value::String(s) => s.clone(), Value::Null => String::new(), x => x.to_string() }).unwrap_or_default();
    let pc = o.get("pc").and_then(|v| v.as_bool()).unwrap_or(false);
    let (full, size) = if pc {
        let masked = s("path");
        let Some(full) = tauri::async_runtime::spawn_blocking(move || kzguard::pc_file(&masked)).await.ok().flatten() else {
            return Ok(json!({ "ok": false, "error": "not in report" }));
        };
        let size = std::fs::metadata(&full).map_err(|e| e.to_string())?.len();
        if let Some(want) = o.get("size").and_then(|v| v.as_f64()).map(|x| x as u64) { if want != size { return Ok(json!({ "ok": false, "error": "size changed" })); } }
        (full, size)
    } else {
        let procs = list_procs();
        let game = procs.iter().find(|p| is_game(p)).cloned();
        let Some(exe) = game_exe_path(game.as_ref()) else { return Ok(json!({ "ok": false, "error": "game not found" })) };
        let root = exe.parent().map(|p| p.to_path_buf()).ok_or("game not found")?;
        let root = std::fs::canonicalize(&root).unwrap_or(root);
        let rel = s("path");
        let bad = rel.is_empty()
            || rel.split(['/', '\\']).any(|x| x == "..")
            || rel.starts_with('/')
            || rel.starts_with('\\')
            || (rel.len() > 1 && rel.as_bytes()[1] == b':');
        if bad {
            return Ok(json!({ "ok": false, "error": "bad path" }));
        }
        let mut full = root.clone();
        for seg in rel.split('/') {
            full.push(seg);
        }
        let meta = match std::fs::metadata(&full) {
            Ok(m) if m.is_file() && full.starts_with(&root) => m,
            _ => return Ok(json!({ "ok": false, "error": "no file" })),
        };
        let size = meta.len();
        if o.get("size").and_then(|v| v.as_f64()).map(|x| x as u64) != Some(size) {
            return Ok(json!({ "ok": false, "error": "size changed" }));
        }
        (full, size)
    };
    let base = { let b = s("server"); if b.is_empty() { settings::server_url() } else { b } }.trim_end_matches('/').to_string();
    let id: String = s("id").bytes().map(|b| if b.is_ascii_alphanumeric() || b"-_.!~*'()".contains(&b) { (b as char).to_string() } else { format!("%{b:02X}") }).collect();
    let c = crate::updater::client();
    let req = |url: String| {
        c.post(url)
            .header("Authorization", format!("Bearer {}", s("token")))
            .header("X-Konzte-Hwid", s("hwid"))
            .header("X-Konzte-Client", env!("CARGO_PKG_VERSION"))
            .header("Content-Type", "application/octet-stream")
    };
    let mut off: u64 = o.get("off").and_then(|v| v.as_f64()).map(|x| x as u64).unwrap_or(0);
    let mut f = std::fs::File::open(&full).map_err(|e| e.to_string())?;
    const CH: u64 = 8 << 20;
    while off < size {
        let n = CH.min(size - off) as usize;
        let mut buf = vec![0u8; n];
        f.seek(SeekFrom::Start(off)).map_err(|e| e.to_string())?;
        f.read_exact(&mut buf).map_err(|e| e.to_string())?;
        let r = req(format!("{base}/api/ac/upload?id={id}&off={off}&size={size}")).body(buf).send().await.map_err(|e| e.to_string())?;
        let st = r.status().as_u16();
        let j: Value = r.json().await.unwrap_or(json!({}));
        let got = j.get("got").and_then(|v| v.as_f64());
        if st == 409 && got.is_some() {
            off = got.unwrap() as u64;
            continue;
        }
        if !(200..300).contains(&st) {
            return Ok(json!({ "ok": false, "error": j.get("error").and_then(|v| v.as_str()).map(String::from).unwrap_or(format!("HTTP {st}")) }));
        }
        off = got.map(|g| g as u64).ok_or("bad server reply")?;
        tokio::time::sleep(Duration::from_millis(40)).await;
    }
    let r = req(format!("{base}/api/ac/upload?id={id}&off={off}&done=1")).send().await.map_err(|e| e.to_string())?;
    let st = r.status().as_u16();
    let j: Value = r.json().await.unwrap_or(json!({}));
    Ok(if (200..300).contains(&st) {
        json!({ "ok": true, "sha256": j.get("sha256").cloned().unwrap_or(Value::Null) })
    } else {
        json!({ "ok": false, "error": j.get("error").and_then(|v| v.as_str()).map(String::from).unwrap_or(format!("HTTP {st}")) })
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn names() {
        assert_eq!(norm_proc("C:\\Games\\CheatEngine.EXE"), "cheatengine");
        assert_eq!(norm_proc("/usr/bin/foo.x86_64"), "foo");
        assert!(GAME_RE.is_match("CombatMaster.exe"));
        assert!(GAME_RE.is_match("combatmaster"));
        assert!(!GAME_RE.is_match("CombatMasterLauncher.exe"));
        assert!(FULL_HASH_RE.is_match("CombatMaster_Data/StreamingAssets/Bundles/src/first_person"));
        assert!(!FULL_HASH_RE.is_match("CombatMaster_Data/StreamingAssets/Bundles/src/first_person2"));
    }
    #[test]
    fn quick_hash_matches_node() {
        let dir = std::env::temp_dir().join(format!("kzq-{}", std::process::id()));
        std::fs::create_dir_all(&dir).unwrap();
        let f = dir.join("x.bin");
        let data: Vec<u8> = (0..(3u32 << 20) / 2).map(|i| (i * 7 % 251) as u8).collect();
        std::fs::write(&f, &data).unwrap();
        let m = std::fs::metadata(&f).unwrap();
        let mut h = Sha256::new();
        h.update(data.len().to_string());
        h.update(&data[..1 << 20]);
        h.update(&data[data.len() - (data.len() - (1 << 20))..]);
        assert_eq!(quick_hash(&f, &m).unwrap(), hex::encode(h.finalize()));
        let _ = std::fs::remove_dir_all(dir);
    }
    #[test]
    fn scan_runs() {
        let r = scan(&json!({ "names": ["bash", "konzte"], "files": true, "modules": true, "deep": true }));
        assert_eq!(r["v"], 1);
        assert!(r["scanned"].as_u64().unwrap() > 0);
    }
}

#[cfg(test)]
mod v3_tests {
    #[test]
    fn signed_report() {
        let r = super::scan(&serde_json::json!({ "nonce": "test-nonce", "names": ["bash"], "files": true, "modules": true, "deep": true, "report": true }));
        std::fs::write(std::env::var("KZ_ATT_OUT").unwrap_or("/dev/null".into()), r.to_string()).unwrap();
        assert_eq!(r["gv"], "3.0", "{r}");
        assert!(r["att"]["s"].as_str().unwrap().len() == 64);
    }
}
