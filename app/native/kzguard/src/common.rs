use sha2::{Digest, Sha256};
use std::collections::{HashMap, HashSet};
use std::fs;
use std::io::{Read, Seek, SeekFrom};
use std::path::Path;
use std::sync::Mutex;
use std::time::UNIX_EPOCH;

pub fn hex(b: &[u8]) -> String {
    const H: &[u8; 16] = b"0123456789abcdef";
    let mut s = String::with_capacity(b.len() * 2);
    for x in b { s.push(H[(x >> 4) as usize] as char); s.push(H[(x & 15) as usize] as char); }
    s
}
pub fn sha_hex(b: &[u8]) -> String { hex(&Sha256::digest(b)) }

pub fn base_name(s: &str) -> String { s.rsplit(|c| c == '/' || c == '\\').next().unwrap_or("").trim().to_string() }
pub fn norm_proc(s: &str) -> String {
    let b = base_name(s).to_lowercase();
    for ext in [".exe", ".x86_64", ".app", ".bin"] { if let Some(x) = b.strip_suffix(ext) { return x.to_string(); } }
    b
}
pub fn name_hash(n: &str) -> String { sha_hex(format!("kzac:{n}").as_bytes()) }
pub fn is_game_name(n: &str) -> bool {
    let l = base_name(n).to_lowercase();
    l == "combatmaster" || l == "combatmaster.exe" || l == "combatmaster.x86_64"
}

#[derive(Clone)]
pub struct Proc { pub pid: u32, pub name: String, pub argv0: String }

fn mtime(m: &fs::Metadata) -> u128 { m.modified().ok().and_then(|t| t.duration_since(UNIX_EPOCH).ok()).map(|d| d.as_nanos()).unwrap_or(0) }

static FULL: Mutex<Option<HashMap<String, (u64, u128, String)>>> = Mutex::new(None);
static QUICK: Mutex<Option<HashMap<String, (u64, u128, String)>>> = Mutex::new(None);

pub fn full_hash(p: &Path) -> Option<(u64, String)> {
    let m = fs::metadata(p).ok()?;
    let key = p.to_string_lossy().to_string();
    let (sz, mt) = (m.len(), mtime(&m));
    if let Some((s, t, h)) = FULL.lock().ok()?.get_or_insert_with(HashMap::new).get(&key) { if *s == sz && *t == mt { return Some((sz, h.clone())); } }
    let mut f = fs::File::open(p).ok()?;
    let mut h = Sha256::new();
    let mut buf = vec![0u8; 1 << 20];
    loop { let n = f.read(&mut buf).ok()?; if n == 0 { break; } h.update(&buf[..n]); }
    let r = hex(&h.finalize());
    FULL.lock().ok()?.get_or_insert_with(HashMap::new).insert(key, (sz, mt, r.clone()));
    Some((sz, r))
}
pub fn quick_hash(p: &Path) -> Option<(u64, String)> {
    let m = fs::metadata(p).ok()?;
    let key = p.to_string_lossy().to_string();
    let (sz, mt) = (m.len(), mtime(&m));
    if let Some((s, t, h)) = QUICK.lock().ok()?.get_or_insert_with(HashMap::new).get(&key) { if *s == sz && *t == mt { return Some((sz, h.clone())); } }
    let mut f = fs::File::open(p).ok()?;
    let mut h = Sha256::new();
    h.update(sz.to_string().as_bytes());
    let n = sz.min(1 << 20) as usize;
    let mut b = vec![0u8; n]; f.read_exact(&mut b).ok()?; h.update(&b);
    if sz > n as u64 {
        let k = (sz - n as u64).min(1 << 20) as usize;
        f.seek(SeekFrom::Start(sz - k as u64)).ok()?;
        let mut e = vec![0u8; k]; f.read_exact(&mut e).ok()?; h.update(&e);
    }
    let r = hex(&h.finalize());
    QUICK.lock().ok()?.get_or_insert_with(HashMap::new).insert(key, (sz, mt, r.clone()));
    Some((sz, r))
}

fn ends_ci(s: &str, suf: &str) -> bool { s.len() >= suf.len() && s.is_char_boundary(s.len() - suf.len()) && s[s.len() - suf.len()..].eq_ignore_ascii_case(suf) }
fn skip_file(n: &str) -> bool { [".log", ".tmp", ".dmp", ".bak", "desktop.ini", "thumbs.db"].iter().any(|x| ends_ci(n, x)) }
fn top_file(n: &str) -> bool {
    let l = n.to_lowercase();
    matches!(l.as_str(), "gameassembly.dll" | "gameassembly.so" | "combatmaster" | "combatmaster.exe" | "combatmaster.x86_64" | "unityplayer.dll" | "unityplayer.so")
}
fn full_hash_path(r: &str) -> bool {
    let l = r.to_lowercase();
    let p = "combatmaster_data/streamingassets/bundles/";
    if let Some(rest) = l.strip_prefix(p) { rest.starts_with("src/weapons/") || rest == "src/first_person" || rest.starts_with("ui/") } else { false }
}

static FILES_SENT: Mutex<Option<String>> = Mutex::new(None);

pub fn game_files(root: &Path, full: bool) -> serde_json::Value {
    if full { if let Ok(mut s) = FILES_SENT.lock() { *s = None; } }
    let mut out: Vec<(String, std::path::PathBuf)> = Vec::new();
    fn walk(d: &Path, rel: &str, out: &mut Vec<(String, std::path::PathBuf)>) {
        let Ok(rd) = fs::read_dir(d) else { return };
        for e in rd.flatten() {
            if out.len() >= 3000 { return; }
            let name = e.file_name().to_string_lossy().to_string();
            let r = if rel.is_empty() { name.clone() } else { format!("{rel}/{name}") };
            let Ok(ft) = e.file_type() else { continue };
            if ft.is_dir() { if rel.is_empty() && name != "CombatMaster_Data" { continue; } walk(&e.path(), &r, out); }
            else if ft.is_file() && !skip_file(&name) && (!rel.is_empty() || top_file(&name)) { out.push((r, e.path())); }
        }
    }
    walk(root, "", &mut out);
    let mut list: Vec<(String, u64, String)> = Vec::new();
    for (r, f) in out {
        let fh = full_hash_path(&r);
        let h = if fh { full_hash(&f) } else { quick_hash(&f) };
        if let Some((sz, h)) = h { list.push((r, sz, format!("{}{}", if fh { "f:" } else { "q:" }, &h[..32]))); }
    }
    list.sort_by(|a, b| a.0.encode_utf16().cmp(b.0.encode_utf16()));
    let joined = list.iter().map(|(p, s, h)| format!("{p}|{s}|{h}")).collect::<Vec<_>>().join("\n");
    let digest = sha_hex(joined.as_bytes());
    let mut sent = FILES_SENT.lock().unwrap_or_else(|e| e.into_inner());
    let mut v = serde_json::json!({ "digest": digest, "n": list.len() });
    if sent.as_deref() != Some(digest.as_str()) {
        v["list"] = serde_json::Value::Array(list.iter().map(|(p, s, h)| serde_json::json!([p, s, h])).collect());
    }
    *sent = Some(digest);
    v
}

pub fn shell_integrity(module_path: &Path) -> serde_json::Value {
    let modh = full_hash(module_path).map(|x| x.1).unwrap_or_default();
    let native = module_path.parent().unwrap_or(Path::new("."));
    let app = native.parent().unwrap_or(Path::new("."));
    let an = app.file_name().map(|x| x.to_string_lossy().to_string()).unwrap_or_default();
    if an.eq_ignore_ascii_case("app.asar.unpacked") {
        let asar = app.with_file_name("app.asar");
        let h = full_hash(&asar).map(|x| x.1).unwrap_or_default();
        return serde_json::json!({ "mod": modh, "kind": "asar", "shell": h });
    }
    let mut names: Vec<String> = fs::read_dir(app).map(|rd| rd.flatten().filter(|e| e.file_type().map(|t| t.is_file()).unwrap_or(false))
        .map(|e| e.file_name().to_string_lossy().to_string()).filter(|n| n.ends_with(".js") || n == "package.json").collect()).unwrap_or_default();
    names.sort();
    let mut h = Sha256::new();
    for n in &names { h.update(n.as_bytes()); h.update(b"\0"); if let Some((_, fh)) = full_hash(&app.join(n)) { h.update(fh.as_bytes()); } h.update(b"\n"); }
    serde_json::json!({ "mod": modh, "kind": "dir", "shell": hex(&h.finalize()), "files": names.len() })
}

pub fn exe_integrity(exe: &Path) -> serde_json::Value {
    let h = full_hash(exe).map(|x| x.1).unwrap_or_default();
    serde_json::json!({ "mod": h, "kind": "exe", "shell": h })
}

pub fn cpu_brand() -> String {
    #[cfg(target_arch = "x86_64")]
    {
        use std::arch::x86_64::__cpuid;
        #[allow(unused_unsafe)]
        let max = unsafe { __cpuid(0x8000_0000) }.eax;
        if max < 0x8000_0004 { return String::new(); }
        let mut b = Vec::new();
        for l in 0x8000_0002u32..=0x8000_0004 { #[allow(unused_unsafe)] let r = unsafe { __cpuid(l) }; for x in [r.eax, r.ebx, r.ecx, r.edx] { b.extend_from_slice(&x.to_le_bytes()); } }
        String::from_utf8_lossy(&b).trim_matches(char::from(0)).trim().to_string()
    }
    #[cfg(not(target_arch = "x86_64"))]
    String::new()
}

pub fn group_by_name(items: Vec<serde_json::Value>, cap: usize) -> serde_json::Value {
    let mut order: Vec<String> = Vec::new();
    let mut map: HashMap<String, serde_json::Value> = HashMap::new();
    for v in items {
        let k = v["name"].as_str().unwrap_or("").to_lowercase();
        if k.is_empty() { continue; }
        if let Some(e) = map.get_mut(&k) { e["n"] = serde_json::json!(e["n"].as_u64().unwrap_or(1) + 1); continue; }
        let mut v = v; v["n"] = serde_json::json!(1);
        order.push(k.clone()); map.insert(k, v);
        if order.len() >= cap { break; }
    }
    let mut out: Vec<serde_json::Value> = order.into_iter().filter_map(|k| map.remove(&k)).collect();
    out.sort_by(|a, b| a["name"].as_str().unwrap_or("").to_lowercase().cmp(&b["name"].as_str().unwrap_or("").to_lowercase()));
    serde_json::Value::Array(out)
}

pub fn hypervisor() -> serde_json::Value {
    #[cfg(target_arch = "x86_64")]
    {
        use std::arch::x86_64::__cpuid;
        #[allow(unused_unsafe)]
        let (l1, r) = unsafe { (__cpuid(1), __cpuid(0x4000_0000)) };
        if l1.ecx & (1 << 31) == 0 { return serde_json::json!(null); }
        let mut b = Vec::new();
        for x in [r.ebx, r.ecx, r.edx] { b.extend_from_slice(&x.to_le_bytes()); }
        let s: String = String::from_utf8_lossy(&b).chars().filter(|c| c.is_ascii_graphic() || *c == ' ').collect();
        serde_json::json!(s.trim())
    }
    #[cfg(not(target_arch = "x86_64"))]
    serde_json::json!(null)
}

static ALLOWED: std::sync::Mutex<Option<HashSet<String>>> = std::sync::Mutex::new(None);
fn home_tag() -> (String, &'static str) {
    if cfg!(windows) { (std::env::var("USERPROFILE").unwrap_or_default(), "%USERPROFILE%") } else { (std::env::var("HOME").unwrap_or_default(), "~") }
}
fn strip_prefix_ci<'a>(p: &'a str, pre: &str) -> Option<&'a str> {
    if pre.len() < 3 { return None; }
    let head = p.get(..pre.len())?;
    let rest = &p[pre.len()..];
    (head.eq_ignore_ascii_case(pre) && (rest.is_empty() || rest.starts_with('\\') || rest.starts_with('/'))).then_some(rest)
}
pub fn mask_path(p: &str) -> String {
    let (home, tag) = home_tag();
    let p = p.trim_start_matches("\\\\?\\");
    if let Some(rest) = strip_prefix_ci(p, home.trim_end_matches(['\\', '/'])) { return format!("{tag}{rest}"); }
    if cfg!(windows) { if let Ok(w) = std::env::var("SystemRoot") { if let Some(rest) = strip_prefix_ci(p, w.trim_end_matches('\\')) { return format!("%WINDIR%{rest}"); } } }
    p.chars().take(300).collect()
}
pub fn unmask_path(p: &str) -> String {
    let (home, tag) = home_tag();
    if let Some(rest) = p.strip_prefix(tag) { return format!("{}{rest}", home.trim_end_matches(['\\', '/'])); }
    if let Some(rest) = p.strip_prefix("%WINDIR%") { return format!("{}{rest}", std::env::var("SystemRoot").unwrap_or_else(|_| "C:\\Windows".into()).trim_end_matches('\\')); }
    p.to_string()
}
fn path_key(p: &str) -> String { p.trim_start_matches("\\\\?\\").replace('/', if cfg!(windows) { "\\" } else { "/" }).to_lowercase() }
pub fn allow_path(p: &str) { if p.is_empty() { return; } if let Ok(mut a) = ALLOWED.lock() { a.get_or_insert_with(HashSet::new).insert(path_key(p)); } }
pub fn reset_allowed() { if let Ok(mut a) = ALLOWED.lock() { *a = Some(HashSet::new()); } }
pub fn is_allowed(p: &str) -> bool {
    let l = path_key(p);
    let ext_ok = [".exe", ".dll", ".sys", ".asi", ".drv", ".ocx", ".so", ".ko"].iter().any(|e| l.ends_with(e)) || l.contains(".so.");
    ext_ok && ALLOWED.lock().ok().and_then(|a| a.as_ref().map(|s| s.contains(&l))).unwrap_or(false)
}

#[cfg(test)]
mod pc_tests {
    use super::*;
    #[test]
    fn mask_roundtrip_and_allow() {
        let (home, tag) = home_tag();
        let real = format!("{home}/Downloads/x/loader.so");
        let m = mask_path(&real);
        assert!(m.starts_with(tag) && !m.contains(&home), "{m}");
        assert_eq!(unmask_path(&m), real);
        reset_allowed();
        assert!(!is_allowed(&real));
        allow_path(&real);
        assert!(is_allowed(&real));
        let doc = format!("{home}/Documents/passwords.txt");
        allow_path(&doc);
        assert!(!is_allowed(&doc), "лише виконувані файли");
        assert_eq!(mask_path(&format!("{home}x/a.dll")), format!("{home}x/a.dll"), "префікс лише цілою текою");
    }
}
