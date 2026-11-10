use crate::updater::{client, cmp_ver, verify_sig};
use futures_util::StreamExt;
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use std::io::Write;
use std::path::PathBuf;
use std::sync::atomic::{AtomicBool, Ordering};
use std::time::{Duration, Instant};

pub const VERSION: &str = env!("CARGO_PKG_VERSION");

fn mac_arch() -> &'static str {
    if cfg!(target_arch = "aarch64") {
        return "arm64";
    }
    if crate::sys::run_out("sysctl", &["-in", "hw.optional.arm64"]).map(|s| s.trim() == "1").unwrap_or(false) {
        "arm64"
    } else {
        "x64"
    }
}

fn plat() -> String {
    if cfg!(windows) {
        "tauri-windows".into()
    } else if cfg!(target_os = "macos") {
        format!("tauri-mac-{}", mac_arch())
    } else {
        "tauri-linux".into()
    }
}

fn site_of(server: &str) -> String {
    let s = if server.is_empty() { "https://konzte.online/konzte" } else { server };
    let s = s.trim_end_matches('/');
    s.strip_suffix("/konzte").unwrap_or(s).trim_end_matches('/').to_string()
}

fn exe() -> Option<PathBuf> {
    std::env::current_exe().ok()
}
fn appimage() -> Option<PathBuf> {
    std::env::var("APPIMAGE").ok().filter(|s| !s.is_empty()).map(PathBuf::from)
}
fn mac_bundle() -> Option<PathBuf> {
    let e = exe()?;
    let s = e.to_string_lossy();
    let i = s.find(".app/Contents/MacOS/")?;
    Some(PathBuf::from(&s[..i + 4]))
}
fn writable(dir: &std::path::Path) -> bool {
    let t = dir.join(format!(".kz-w-{}", std::process::id()));
    let ok = std::fs::write(&t, b"").is_ok();
    let _ = std::fs::remove_file(&t);
    ok
}
fn linux_bin() -> Option<PathBuf> {
    if !cfg!(target_os = "linux") || appimage().is_some() {
        return None;
    }
    let e = exe()?;
    writable(e.parent()?).then_some(e)
}

fn can_install() -> bool {
    if cfg!(windows) {
        return exe().map(|e| e.extension().map(|x| x.eq_ignore_ascii_case("exe")).unwrap_or(false)).unwrap_or(false);
    }
    if cfg!(target_os = "linux") {
        return appimage().is_some() || linux_bin().is_some();
    }
    if cfg!(target_os = "macos") {
        return mac_bundle().and_then(|b| b.parent().map(writable)).unwrap_or(false);
    }
    false
}

pub async fn info(server: &str) -> Result<Value, String> {
    let site = site_of(server);
    let c = client();
    let q = format!("?t={}", std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_millis());
    let (u1, u2) = (format!("{site}/assets/shell.json{q}"), format!("{site}/assets/shell.sig{q}"));
    let (raw, sig) = tokio::join!(crate::updater::fetch(&c, &u1, 8000), crate::updater::fetch(&c, &u2, 8000));
    let (raw, sig) = (raw?, sig?);
    if !verify_sig(&raw, &String::from_utf8_lossy(&sig)) {
        return Err("bad shell signature".into());
    }
    let j: Value = serde_json::from_slice(&raw).map_err(|e| e.to_string())?;
    let latest = j.get("app").and_then(|v| v.as_str()).unwrap_or("0").to_string();
    let f = j.get("files").and_then(|x| x.get(plat())).cloned().unwrap_or(Value::Null);
    let has_sha = f.get("sha256").and_then(|v| v.as_str()).map(|s| !s.is_empty()).unwrap_or(false);
    let newer = has_sha && cmp_ver(f.get("version").and_then(|v| v.as_str()).unwrap_or(&latest), VERSION) > 0;
    let lat = f.get("version").and_then(|v| v.as_str()).map(String::from).unwrap_or(latest);
    Ok(json!({ "site": site, "latest": lat, "current": VERSION, "newer": newer, "can": can_install() && has_sha, "file": f }))
}

static BUSY: AtomicBool = AtomicBool::new(false);

pub async fn install(server: &str, on_progress: impl Fn(Value)) -> Result<Value, String> {
    if BUSY.swap(true, Ordering::SeqCst) {
        return Err("Update is already running".into());
    }
    let r = install_inner(server, on_progress).await;
    BUSY.store(false, Ordering::SeqCst);
    r
}

async fn install_inner(server: &str, on_progress: impl Fn(Value)) -> Result<Value, String> {
    let i = info(server).await?;
    if !i["newer"].as_bool().unwrap_or(false) {
        return Ok(json!({ "ok": false, "reason": "latest" }));
    }
    if !i["can"].as_bool().unwrap_or(false) {
        return Ok(json!({ "ok": false, "reason": "manual" }));
    }
    let site = i["site"].as_str().unwrap_or("").to_string();
    let latest = i["latest"].as_str().unwrap_or("").to_string();
    let furl = i["file"]["url"].as_str().unwrap_or("").to_string();
    let url = if furl.starts_with("https://") { furl } else { format!("{site}{furl}") };
    if !url.starts_with(&format!("{site}/")) {
        return Err("bad update url".into());
    }
    let want_sha = i["file"]["sha256"].as_str().unwrap_or("").to_string();
    let ext = if cfg!(windows) { ".exe" } else if cfg!(target_os = "macos") { ".zip" } else { ".AppImage" };
    let tmp = std::env::temp_dir().join(format!("konzte-update-{latest}-{}{ext}", std::process::id()));
    let sep = if url.contains('?') { '&' } else { '?' };
    let r = client().get(format!("{url}{sep}v={latest}")).send().await.map_err(|e| e.to_string())?;
    if !r.status().is_success() {
        return Err(format!("Download failed (HTTP {})", r.status().as_u16()));
    }
    let total = r.content_length().or_else(|| i["file"]["size"].as_u64()).unwrap_or(0);
    let mut h = Sha256::new();
    let mut out = std::fs::File::create(&tmp).map_err(|e| e.to_string())?;
    let (mut got, mut last) = (0u64, Instant::now() - Duration::from_secs(1));
    let mut stream = r.bytes_stream();
    while let Some(chunk) = stream.next().await {
        let chunk = chunk.map_err(|e| e.to_string())?;
        h.update(&chunk);
        out.write_all(&chunk).map_err(|e| e.to_string())?;
        got += chunk.len() as u64;
        if last.elapsed() > Duration::from_millis(250) {
            last = Instant::now();
            on_progress(json!({ "got": got, "total": total }));
        }
    }
    out.flush().map_err(|e| e.to_string())?;
    drop(out);
    on_progress(json!({ "got": got, "total": total, "done": true }));
    if hex::encode(h.finalize()) != want_sha {
        let _ = std::fs::remove_file(&tmp);
        return Err("Downloaded file is damaged — try again".into());
    }
    apply(&tmp)?;
    Ok(json!({ "ok": true, "restarting": true }))
}

#[cfg(unix)]
fn relaunch_later(exe: &std::path::Path) {
    let args: Vec<String> = std::env::args().skip(1).filter(|a| a != "--updated").collect();
    let _ = std::process::Command::new("/bin/sh")
        .arg("-c")
        .arg("sleep 1.5; exec \"$0\" \"$@\"")
        .arg(exe)
        .args(args)
        .stdin(std::process::Stdio::null())
        .stdout(std::process::Stdio::null())
        .stderr(std::process::Stdio::null())
        .spawn();
}

fn exit_soon() {
    std::thread::spawn(|| {
        std::thread::sleep(Duration::from_millis(400));
        crate::before_exit();
        std::process::exit(0);
    });
}

fn apply(tmp: &std::path::Path) -> Result<(), String> {
    #[cfg(windows)]
    {
        let exe = exe().ok_or("no exe")?;
        let line = format!("start \"\" /wait \"{}\" /S & start \"\" \"{}\"", tmp.display(), exe.display());
        use std::os::windows::process::CommandExt;
        crate::sys::cmd("cmd").arg("/C").raw_arg(&line).spawn().map_err(|e| e.to_string())?;
        exit_soon();
        return Ok(());
    }
    #[cfg(target_os = "macos")]
    {
        let bundle = mac_bundle().ok_or("no bundle")?;
        let dir = bundle.parent().ok_or("no dir")?.to_path_buf();
        let x = std::env::temp_dir().join(format!("konzte-update-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&x);
        std::fs::create_dir_all(&x).map_err(|e| e.to_string())?;
        let st = std::process::Command::new("ditto").args(["-x", "-k"]).arg(tmp).arg(&x).status().map_err(|e| e.to_string())?;
        if !st.success() {
            return Err("Update archive is damaged".into());
        }
        let fresh = std::fs::read_dir(&x).map_err(|e| e.to_string())?.flatten().find(|e| e.file_name().to_string_lossy().ends_with(".app")).ok_or("Update archive is damaged")?.path();
        let old = dir.join(format!(".konzte-old-{}.app", std::process::id()));
        std::fs::rename(&bundle, &old).map_err(|e| e.to_string())?;
        if let Err(e) = std::fs::rename(&fresh, &bundle) {
            let _ = std::fs::rename(&old, &bundle);
            return Err(e.to_string());
        }
        let _ = std::fs::remove_dir_all(&old);
        let _ = std::fs::remove_file(tmp);
        relaunch_later(&bundle.join("Contents/MacOS").join(exe().and_then(|e| e.file_name().map(|n| n.to_owned())).ok_or("no exe")?));
        exit_soon();
        return Ok(());
    }
    #[cfg(target_os = "linux")]
    {
        use std::os::unix::fs::PermissionsExt;
        if let Some(target) = appimage() {
            let next = PathBuf::from(format!("{}.new", target.display()));
            std::fs::copy(tmp, &next).map_err(|e| e.to_string())?;
            std::fs::set_permissions(&next, std::fs::Permissions::from_mode(0o755)).map_err(|e| e.to_string())?;
            std::fs::rename(&next, &target).map_err(|e| e.to_string())?;
            let _ = std::fs::remove_file(tmp);
            relaunch_later(&target);
            exit_soon();
            return Ok(());
        }
        let bin = linux_bin().ok_or("manual")?;
        let parent = bin.parent().unwrap().to_path_buf();
        let work = parent.join(format!(".konzte-update-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&work);
        std::fs::create_dir_all(&work).map_err(|e| e.to_string())?;
        let img = work.join("Konzte.AppImage");
        std::fs::copy(tmp, &img).map_err(|e| e.to_string())?;
        std::fs::set_permissions(&img, std::fs::Permissions::from_mode(0o755)).map_err(|e| e.to_string())?;
        let st = std::process::Command::new(&img)
            .arg("--appimage-extract")
            .current_dir(&work)
            .stdout(std::process::Stdio::null())
            .stderr(std::process::Stdio::null())
            .status()
            .map_err(|e| e.to_string())?;
        let fresh = work.join("squashfs-root/usr/bin/konzte");
        if !st.success() || !fresh.exists() {
            let _ = std::fs::remove_dir_all(&work);
            return Err("Update archive is damaged".into());
        }
        let next = parent.join(".konzte.new");
        std::fs::copy(&fresh, &next).map_err(|e| e.to_string())?;
        std::fs::set_permissions(&next, std::fs::Permissions::from_mode(0o755)).map_err(|e| e.to_string())?;
        std::fs::rename(&next, &bin).map_err(|e| e.to_string())?;
        let _ = std::fs::remove_dir_all(&work);
        let _ = std::fs::remove_file(tmp);
        relaunch_later(&bin);
        exit_soon();
        return Ok(());
    }
    #[allow(unreachable_code)]
    {
        let _ = tmp;
        Err("manual".into())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn site() {
        assert_eq!(site_of("https://konzte.online/konzte"), "https://konzte.online");
        assert_eq!(site_of("https://konzte.online/konzte/"), "https://konzte.online");
        assert_eq!(site_of(""), "https://konzte.online");
        assert_eq!(site_of("http://127.0.0.1:2276"), "http://127.0.0.1:2276");
    }
}
