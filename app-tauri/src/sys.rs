use crate::settings;
use base64::Engine;
use rand::RngCore;
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use std::path::{Path, PathBuf};
use std::process::Command;

pub const CM_APPID: &str = "2281730";

pub fn platform() -> &'static str {
    if cfg!(windows) {
        "win32"
    } else if cfg!(target_os = "macos") {
        "darwin"
    } else {
        "linux"
    }
}
pub fn arch() -> &'static str {
    match std::env::consts::ARCH {
        "x86_64" => "x64",
        "aarch64" => "arm64",
        "x86" => "ia32",
        a => a,
    }
}

pub fn cmd(prog: &str) -> Command {
    #[allow(unused_mut)]
    let mut c = Command::new(prog);
    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        c.creation_flags(0x0800_0000);
    }
    c
}

pub fn run_out(prog: &str, args: &[&str]) -> Option<String> {
    let o = cmd(prog).args(args).output().ok()?;
    if !o.status.success() && o.stdout.is_empty() {
        return None;
    }
    Some(String::from_utf8_lossy(&o.stdout).into_owned())
}

fn machine_id() -> String {
    #[cfg(windows)]
    {
        use winreg::enums::*;
        if let Ok(k) = winreg::RegKey::predef(HKEY_LOCAL_MACHINE)
            .open_subkey_with_flags("SOFTWARE\\Microsoft\\Cryptography", KEY_READ | KEY_WOW64_64KEY)
        {
            if let Ok(v) = k.get_value::<String, _>("MachineGuid") {
                if !v.is_empty() {
                    return v;
                }
            }
        }
    }
    #[cfg(target_os = "macos")]
    {
        if let Some(o) = run_out("ioreg", &["-rd1", "-c", "IOPlatformExpertDevice"]) {
            if let Some(c) = regex::Regex::new(r#""IOPlatformUUID" = "([^"]+)""#).unwrap().captures(&o) {
                return c[1].to_string();
            }
        }
    }
    #[cfg(target_os = "linux")]
    {
        for f in ["/etc/machine-id", "/var/lib/dbus/machine-id"] {
            if let Ok(s) = std::fs::read_to_string(f) {
                return s.trim().to_string();
            }
        }
    }
    let mut s = settings::read();
    if let Some(id) = s.get("fallbackId").and_then(|v| v.as_str()) {
        return id.to_string();
    }
    let mut b = [0u8; 16];
    rand::rng().fill_bytes(&mut b);
    let id = hex::encode(b);
    s.insert("fallbackId".into(), json!(id));
    settings::write(&s);
    id
}

fn cpu_model() -> String {
    #[cfg(target_os = "linux")]
    {
        if let Ok(s) = std::fs::read_to_string("/proc/cpuinfo") {
            for l in s.lines() {
                if let Some(r) = l.strip_prefix("model name") {
                    if let Some((_, v)) = r.split_once(": ") {
                        return v.to_string();
                    }
                }
            }
        }
        return String::new();
    }
    #[cfg(windows)]
    {
        use winreg::enums::*;
        return winreg::RegKey::predef(HKEY_LOCAL_MACHINE)
            .open_subkey("HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0")
            .and_then(|k| k.get_value::<String, _>("ProcessorNameString"))
            .unwrap_or_default();
    }
    #[cfg(target_os = "macos")]
    {
        return run_out("sysctl", &["-n", "machdep.cpu.brand_string"]).map(|s| s.trim().to_string()).unwrap_or_default();
    }
    #[allow(unreachable_code)]
    String::new()
}

fn total_mem() -> f64 {
    #[cfg(target_os = "linux")]
    {
        if let Ok(s) = std::fs::read_to_string("/proc/meminfo") {
            for l in s.lines() {
                if let Some(r) = l.strip_prefix("MemTotal:") {
                    let kb: f64 = r.trim().trim_end_matches("kB").trim().parse().unwrap_or(0.0);
                    return kb * 1024.0;
                }
            }
        }
        return 0.0;
    }
    #[cfg(windows)]
    unsafe {
        use windows_sys::Win32::System::SystemInformation::{GlobalMemoryStatusEx, MEMORYSTATUSEX};
        let mut m: MEMORYSTATUSEX = std::mem::zeroed();
        m.dwLength = std::mem::size_of::<MEMORYSTATUSEX>() as u32;
        if GlobalMemoryStatusEx(&mut m) != 0 {
            return m.ullTotalPhys as f64;
        }
        return 0.0;
    }
    #[cfg(target_os = "macos")]
    {
        return run_out("sysctl", &["-n", "hw.memsize"]).and_then(|s| s.trim().parse().ok()).unwrap_or(0.0);
    }
    #[allow(unreachable_code)]
    0.0
}

pub fn hwid() -> String {
    static CACHE: once_cell::sync::OnceCell<String> = once_cell::sync::OnceCell::new();
    CACHE
        .get_or_init(|| {
            let gb = (total_mem() / (1u64 << 30) as f64 + 0.5).floor() as i64;
            let raw = format!("konzte-hw|{}|{}|{}|{}", platform(), machine_id(), cpu_model(), gb);
            hex::encode(Sha256::digest(raw.as_bytes()))
        })
        .clone()
}

pub fn os_version() -> String {
    #[cfg(windows)]
    {
        use winreg::enums::*;
        if let Ok(k) = winreg::RegKey::predef(HKEY_LOCAL_MACHINE).open_subkey("SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion") {
            let ma: u32 = k.get_value("CurrentMajorVersionNumber").unwrap_or(10);
            let mi: u32 = k.get_value("CurrentMinorVersionNumber").unwrap_or(0);
            let b: String = k.get_value("CurrentBuildNumber").unwrap_or_default();
            return format!("{ma}.{mi}.{b}");
        }
        return String::new();
    }
    #[cfg(target_os = "macos")]
    {
        return run_out("sw_vers", &["-productVersion"]).map(|s| s.trim().to_string()).unwrap_or_default();
    }
    #[cfg(target_os = "linux")]
    {
        return std::fs::read_to_string("/proc/sys/kernel/osrelease").map(|s| s.trim().to_string()).unwrap_or_default();
    }
    #[allow(unreachable_code)]
    String::new()
}

pub fn sys_langs() -> Vec<String> {
    let v: Vec<String> = sys_locale::get_locales().map(|l| l.replace('_', "-")).filter(|l| !l.is_empty() && l != "C" && l != "POSIX").collect();
    if v.is_empty() {
        vec!["en-US".into()]
    } else {
        v
    }
}

pub fn home() -> PathBuf {
    dirs::home_dir().unwrap_or_else(|| PathBuf::from("."))
}

#[cfg_attr(not(target_os = "macos"), allow(dead_code))]
pub fn mac_bottles() -> Vec<PathBuf> {
    let h = home();
    let mut out = vec![h.join(".wine")];
    for d in [h.join("Library/Application Support/CrossOver/Bottles"), h.join("Library/Containers/com.isaacmarovitz.Whisky/Bottles")] {
        if let Ok(rd) = std::fs::read_dir(&d) {
            for e in rd.flatten() {
                out.push(e.path());
            }
        }
    }
    out.into_iter().filter(|d| d.join("drive_c").exists()).collect()
}

pub fn steam_roots() -> Vec<PathBuf> {
    let h = home();
    let mut out: Vec<PathBuf> = Vec::new();
    #[cfg(windows)]
    {
        use winreg::enums::*;
        if let Ok(k) = winreg::RegKey::predef(HKEY_CURRENT_USER).open_subkey("Software\\Valve\\Steam") {
            if let Ok(p) = k.get_value::<String, _>("SteamPath") {
                out.push(PathBuf::from(p.trim().replace('/', "\\")));
            }
        }
        out.push(PathBuf::from("C:\\Program Files (x86)\\Steam"));
        out.push(PathBuf::from("C:\\Program Files\\Steam"));
    }
    #[cfg(target_os = "macos")]
    {
        out.push(h.join("Library/Application Support/Steam"));
        for c in mac_bottles() {
            for pf in ["Program Files (x86)", "Program Files"] {
                out.push(c.join("drive_c").join(pf).join("Steam"));
            }
        }
    }
    #[cfg(target_os = "linux")]
    {
        out.push(h.join(".local/share/Steam"));
        out.push(h.join(".steam/steam"));
        out.push(h.join(".var/app/com.valvesoftware.Steam/.local/share/Steam"));
    }
    let _ = &h;
    let mut seen = std::collections::HashSet::new();
    out.into_iter().filter(|d| seen.insert(d.clone()) && d.join("userdata").exists()).collect()
}

fn mtime_ms(p: &Path) -> Option<f64> {
    let m = std::fs::metadata(p).ok()?.modified().ok()?;
    Some(m.duration_since(std::time::UNIX_EPOCH).ok()?.as_secs_f64() * 1000.0)
}

pub fn latest_shot() -> Value {
    let mut best: Option<(PathBuf, f64)> = None;
    for root in steam_roots() {
        let Ok(users) = std::fs::read_dir(root.join("userdata")) else { continue };
        for u in users.flatten() {
            let dir = u.path().join("760").join("remote").join(CM_APPID).join("screenshots");
            let Ok(files) = std::fs::read_dir(&dir) else { continue };
            for f in files.flatten() {
                let name = f.file_name().to_string_lossy().to_lowercase();
                if !(name.ends_with(".jpg") || name.ends_with(".jpeg") || name.ends_with(".png")) {
                    continue;
                }
                let p = f.path();
                if let Some(m) = mtime_ms(&p) {
                    if best.as_ref().map(|b| m > b.1).unwrap_or(true) {
                        best = Some((p, m));
                    }
                }
            }
        }
    }
    let Some((file, mtime)) = best else { return Value::Null };
    let Ok(buf) = std::fs::read(&file) else { return Value::Null };
    let png = file.to_string_lossy().to_lowercase().ends_with("png");
    json!({
        "dataUrl": format!("data:image/{};base64,{}", if png { "png" } else { "jpeg" }, base64::engine::general_purpose::STANDARD.encode(buf)),
        "mtime": mtime,
        "name": file.file_name().map(|n| n.to_string_lossy().into_owned()).unwrap_or_default(),
    })
}

fn launch_path() -> String {
    std::env::var("APPIMAGE").ok().filter(|s| !s.is_empty()).unwrap_or_else(|| {
        std::env::current_exe().map(|p| p.to_string_lossy().into_owned()).unwrap_or_default()
    })
}

pub fn set_autostart(on: bool, hidden: bool) {
    #[cfg(target_os = "linux")]
    {
        let dir = home().join(".config").join("autostart");
        let f = dir.join("konzte.desktop");
        if !on {
            let _ = std::fs::remove_file(&f);
            return;
        }
        let _ = std::fs::create_dir_all(&dir);
        let _ = std::fs::write(
            &f,
            format!(
                "[Desktop Entry]\nType=Application\nName=Konzte Faceit\nExec=\"{}\"{}\nX-GNOME-Autostart-enabled=true\n",
                launch_path(),
                if hidden { " --hidden" } else { "" }
            ),
        );
    }
    #[cfg(windows)]
    {
        use winreg::enums::*;
        if let Ok((k, _)) = winreg::RegKey::predef(HKEY_CURRENT_USER).create_subkey("Software\\Microsoft\\Windows\\CurrentVersion\\Run") {
            if on {
                let _ = k.set_value("Konzte Faceit", &format!("\"{}\"{}", launch_path(), if hidden { " --hidden" } else { "" }));
            } else {
                let _ = k.delete_value("Konzte Faceit");
            }
        }
    }
    #[cfg(target_os = "macos")]
    {
        let f = home().join("Library/LaunchAgents/com.konzte.app.plist");
        if !on {
            let _ = std::fs::remove_file(&f);
            return;
        }
        let _ = std::fs::create_dir_all(f.parent().unwrap());
        let args = if hidden { "<string>--hidden</string>" } else { "" };
        let _ = std::fs::write(&f, format!(r#"<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>Label</key><string>com.konzte.app</string>
<key>ProgramArguments</key><array><string>{}</string>{}</array><key>RunAtLoad</key><true/></dict></plist>
"#, launch_path(), args));
    }
    let _ = (on, hidden);
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn hwid_stable() {
        let a = hwid();
        assert_eq!(a.len(), 64);
        assert_eq!(a, hwid());
    }
}
