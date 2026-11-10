use crate::common::*;
use serde_json::{json, Value};
use std::fs;
use std::path::PathBuf;

pub fn list_procs() -> Vec<Proc> {
    let mut out = Vec::new();
    let Ok(rd) = fs::read_dir("/proc") else { return out };
    for e in rd.flatten() {
        let n = e.file_name().to_string_lossy().to_string();
        let Ok(pid) = n.parse::<u32>() else { continue };
        let argv = fs::read(format!("/proc/{pid}/cmdline")).unwrap_or_default();
        let argv0 = String::from_utf8_lossy(argv.split(|b| *b == 0).next().unwrap_or(&[])).to_string();
        let comm = fs::read_to_string(format!("/proc/{pid}/comm")).unwrap_or_default().trim().to_string();
        if argv0.is_empty() && comm.is_empty() { continue; }
        let name = { let b = base_name(&argv0); if b.is_empty() { comm.clone() } else { b } };
        out.push(Proc { pid, name, argv0 });
    }
    out
}

pub fn game_exe(p: &Proc) -> Option<PathBuf> {
    if let Ok(x) = fs::read_link(format!("/proc/{}/exe", p.pid)) { if is_game_name(&x.to_string_lossy()) { return Some(x); } }
    let a = &p.argv0;
    if a.len() > 2 && (a.starts_with("Z:") || a.starts_with("z:")) {
        let f = PathBuf::from(a[2..].replace('\\', "/"));
        if f.exists() { return Some(f); }
    }
    None
}

pub fn modules(p: &Proc, _game_dir: Option<&std::path::Path>) -> (Vec<String>, Value) {
    let maps = fs::read_to_string(format!("/proc/{}/maps", p.pid)).unwrap_or_default();
    let mut names = std::collections::BTreeSet::new();
    let (mut rx, mut rx_bytes) = (0u64, 0u64);
    for l in maps.lines() {
        let cols: Vec<&str> = l.split_whitespace().collect();
        if cols.len() < 5 { continue; }
        let file = if cols.len() > 5 { cols[5..].join(" ") } else { String::new() };
        let lf = file.to_lowercase();
        let is_lib = lf.ends_with(".dll") || lf.ends_with(".so") || lf.contains(".so.");
        if is_lib { names.insert(base_name(&file.replace('\\', "/")).to_lowercase()); }
        if cols[1].contains('x') && file.is_empty() {
            let (a, b) = cols[0].split_once('-').unwrap_or(("0", "0"));
            let sz = u64::from_str_radix(b, 16).unwrap_or(0).saturating_sub(u64::from_str_radix(a, 16).unwrap_or(0));
            rx += 1; rx_bytes += sz;
        }
    }
    (names.into_iter().take(600).collect(), json!({ "mods": [], "mem": { "rx": rx, "rxKb": rx_bytes / 1024, "mz": 0 }, "threads": null }))
}

pub fn deep(game_pid: u32) -> Value {
    let me = std::process::id();
    let mut handles = Vec::new();
    if let Ok(s) = fs::read_to_string(format!("/proc/{game_pid}/status")) {
        if let Some(t) = s.lines().find_map(|l| l.strip_prefix("TracerPid:")).and_then(|x| x.trim().parse::<u32>().ok()) { if t > 0 { handles.push((t, "ptrace")); } }
    }
    let target = format!("/proc/{game_pid}/mem");
    if let Ok(rd) = fs::read_dir("/proc") {
        for e in rd.flatten() {
            let Ok(pid) = e.file_name().to_string_lossy().parse::<u32>() else { continue };
            if pid == game_pid || pid == me { continue; }
            let Ok(fds) = fs::read_dir(format!("/proc/{pid}/fd")) else { continue };
            if fds.flatten().any(|f| fs::read_link(f.path()).map(|t| t.to_string_lossy() == target).unwrap_or(false)) { handles.push((pid, "mem")); }
        }
    }
    let hs: Vec<Value> = handles.iter().map(|(pid, how)| {
        let name = fs::read_to_string(format!("/proc/{pid}/comm")).unwrap_or_default().trim().to_string();
        json!({ "name": name, "company": "", "sys": false, "signed": null, "read": true, "write": *how == "mem", "how": how })
    }).collect();
    let drivers: Vec<String> = fs::read_to_string("/proc/modules").unwrap_or_default().lines().filter_map(|l| l.split_whitespace().next().map(|s| s.to_lowercase())).collect();
    json!({ "v": 2, "handles": hs, "overlays": [], "drivers": drivers })
}

pub fn sys() -> Value {
    let tainted = fs::read_to_string("/proc/sys/kernel/tainted").ok().and_then(|s| s.trim().parse::<u64>().ok()).unwrap_or(0);
    json!({ "os": "linux", "tainted": tainted, "hv": hypervisor() })
}

pub fn self_check() -> Value {
    let tracer = fs::read_to_string("/proc/self/status").ok().and_then(|s| s.lines().find_map(|l| l.strip_prefix("TracerPid:").map(|x| x.trim().parse::<u32>().unwrap_or(0)))).unwrap_or(0);
    let cmd = String::from_utf8_lossy(&fs::read("/proc/self/cmdline").unwrap_or_default()).replace('\0', " ");
    let preload = std::env::var("LD_PRELOAD").map(|s| !s.trim().is_empty()).unwrap_or(false);
    json!({ "dbg": tracer > 0, "inspect": cmd.contains("--inspect") || cmd.contains("--remote-debugging"), "sbx": false, "preload": preload })
}

pub fn module_path() -> Option<PathBuf> {
    let addr = module_path as usize;
    let maps = fs::read_to_string("/proc/self/maps").ok()?;
    for l in maps.lines() {
        let cols: Vec<&str> = l.split_whitespace().collect();
        if cols.len() < 6 { continue; }
        let (a, b) = cols[0].split_once('-')?;
        let (a, b) = (usize::from_str_radix(a, 16).ok()?, usize::from_str_radix(b, 16).ok()?);
        if addr >= a && addr < b { return Some(PathBuf::from(cols[5..].join(" "))); }
    }
    None
}

fn loc_unix(p: &str) -> &'static str {
    let l = p.to_lowercase();
    if l.is_empty() { "?" }
    else if l.contains("/steamapps/common/combat master") || l.contains("/combat master/") { "game" }
    else if l.contains("/wine") || l.contains("/proton") || l.contains("/pfx/") || l.contains("drive_c") { "wine" }
    else if l.starts_with("/usr/") || l.starts_with("/bin/") || l.starts_with("/sbin/") || l.starts_with("/lib") { "sys" }
    else if l.starts_with("/opt/") || l.contains("/.local/share/steam/") || l.contains("/.steam/") || l.contains("/flatpak/") || l.starts_with("/snap/") { "pf" }
    else if l.starts_with("/tmp/") || l.starts_with("/dev/shm/") || l.contains("/.cache/") { "temp" }
    else if l.contains("/downloads/") || l.contains("/desktop/") || l.contains("/завантаження/") || l.contains("/загрузки/") { "user" }
    else if l.starts_with("/home/") || l.starts_with("/root/") { "appdata" }
    else { "other" }
}

pub fn report(game: Option<&Proc>, _game_dir: Option<&std::path::Path>) -> Value {
    let me = std::process::id();
    reset_allowed();
    let mut items = Vec::new();
    for p in list_procs() {
        if p.pid == me { continue; }
        let exe = fs::read_link(format!("/proc/{}/exe", p.pid)).map(|x| x.to_string_lossy().to_string()).unwrap_or_default();
        let wine = p.argv0.contains('\\') || p.argv0.to_lowercase().ends_with(".exe");
        let loc = if wine { let a = p.argv0.to_lowercase(); if a.contains("\\windows\\") { "sys" } else if a.contains("combat master") { "game" } else { loc_unix(&a.replace('\\', "/")) } } else { loc_unix(&exe) };
        let name = if wine { base_name(&p.argv0) } else { p.name.clone() };
        let shown = if wine { p.argv0.chars().take(300).collect() } else { allow_path(&exe); mask_path(&exe) };
        items.push(json!({ "name": name, "company": "", "signed": null, "loc": loc, "wine": wine, "path": shown }));
    }
    let procs = group_by_name(items, 600);
    let mut mods = Vec::new();
    if let Some(g) = game {
        let maps = fs::read_to_string(format!("/proc/{}/maps", g.pid)).unwrap_or_default();
        let mut seen = std::collections::HashSet::new();
        for l in maps.lines() {
            let cols: Vec<&str> = l.split_whitespace().collect();
            if cols.len() < 6 { continue; }
            let file = cols[5..].join(" ");
            let lf = file.to_lowercase();
            if !(lf.ends_with(".dll") || lf.ends_with(".so") || lf.contains(".so.") || lf.ends_with(".exe")) { continue; }
            let name = base_name(&file.replace('\\', "/"));
            if !seen.insert(name.to_lowercase()) { continue; }
            let loc = if lf.contains("/windows/system32/") || lf.contains("/windows/syswow64/") { "sys" } else { loc_unix(&file) };
            allow_path(&file);
            mods.push(json!({ "name": name, "loc": loc, "signed": null, "company": "", "path": mask_path(&file) }));
            if mods.len() >= 400 { break; }
        }
    }
    let drivers: Vec<String> = fs::read_to_string("/proc/modules").unwrap_or_default().lines().filter_map(|l| l.split_whitespace().next().map(|s| s.to_lowercase())).take(500).collect();
    let os = fs::read_to_string("/etc/os-release").ok().and_then(|s| s.lines().find_map(|l| l.strip_prefix("PRETTY_NAME=").map(|x| x.trim_matches('"').to_string()))).unwrap_or_default();
    let kernel = fs::read_to_string("/proc/sys/kernel/osrelease").unwrap_or_default().trim().to_string();
    let ram = fs::read_to_string("/proc/meminfo").ok().and_then(|s| s.lines().find_map(|l| l.strip_prefix("MemTotal:").and_then(|x| x.trim().trim_end_matches("kB").trim().parse::<u64>().ok()))).unwrap_or(0);
    let up = fs::read_to_string("/proc/uptime").ok().and_then(|s| s.split_whitespace().next().and_then(|x| x.parse::<f64>().ok())).unwrap_or(0.0);
    json!({ "v": 1, "procs": procs, "windows": [], "mods": mods, "drivers": drivers,
            "sys": { "os": format!("{os} · {kernel}"), "cpu": cpu_brand(), "ramMb": ram / 1024, "upMin": (up / 60.0) as u64 } })
}
