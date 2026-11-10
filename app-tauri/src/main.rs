#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod assets;
mod cmlink;
mod guard;
mod presence;
mod settings;
mod shellupdate;
mod svc;
mod sys;
mod updater;

use base64::Engine;
use once_cell::sync::Lazy;
use serde_json::{json, Map, Value};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use tauri::image::Image;
use tauri::menu::{Menu, MenuItem, PredefinedMenuItem};
use tauri::tray::{MouseButton, MouseButtonState, TrayIcon, TrayIconBuilder, TrayIconEvent};
use tauri::webview::NewWindowResponse;
use tauri::window::Color;
use tauri::{AppHandle, Emitter, Manager, RunEvent, Url, UserAttentionType, WebviewUrl, WebviewWindow, WebviewWindowBuilder, WindowEvent};
use tauri_plugin_notification::NotificationExt;

const BRIDGE: &str = include_str!("../shell/bridge.js");
static QUITTING: AtomicBool = AtomicBool::new(false);
static TRAY: Mutex<Option<TrayIcon>> = Mutex::new(None);
static UI: Lazy<Mutex<updater::Prepared>> = Lazy::new(Default::default);

fn ui_url(path: &str) -> Url {
    let base = if cfg!(windows) { "https://kz.localhost/" } else { "kz://localhost/" };
    Url::parse(&format!("{base}{path}")).unwrap()
}
fn is_ui_url(u: &Url) -> bool {
    (u.scheme() == "kz") || (matches!(u.scheme(), "http" | "https") && u.host_str() == Some("kz.localhost")) || u.as_str() == "about:blank"
}
fn open_external(url: &str) {
    if url.starts_with("http://") || url.starts_with("https://") || url.starts_with("HTTP") {
        let _ = open::that_detached(url);
    }
}

fn main_window(app: &AppHandle) -> Option<WebviewWindow> {
    app.get_webview_window("main")
}
fn show(app: &AppHandle) {
    if let Some(w) = main_window(app) {
        let _ = w.unminimize();
        let _ = w.show();
        let _ = w.set_focus();
    }
}

pub fn before_exit() {
    QUITTING.store(true, Ordering::SeqCst);
    presence::stop_blocking();
}

fn ensure_tray(app: &AppHandle) {
    let mut t = TRAY.lock().unwrap();
    if t.is_some() {
        return;
    }
    let build = || -> tauri::Result<TrayIcon> {
        let open = MenuItem::with_id(app, "open", "Open Konzte", true, None::<&str>)?;
        let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
        let menu = Menu::with_items(app, &[&open, &PredefinedMenuItem::separator(app)?, &quit])?;
        TrayIconBuilder::with_id("konzte")
            .icon(Image::from_bytes(include_bytes!("../icons/64x64.png"))?)
            .tooltip("Konzte Faceit")
            .menu(&menu)
            .show_menu_on_left_click(false)
            .on_menu_event(|app, e| match e.id().as_ref() {
                "open" => show(app),
                "quit" => {
                    before_exit();
                    app.exit(0);
                }
                _ => {}
            })
            .on_tray_icon_event(|tray, e| {
                if let TrayIconEvent::Click { button: MouseButton::Left, button_state: MouseButtonState::Up, .. } = e {
                    let app = tray.app_handle();
                    if let Some(w) = main_window(app) {
                        if w.is_visible().unwrap_or(false) && w.is_focused().unwrap_or(false) {
                            let _ = w.hide();
                        } else {
                            show(app);
                        }
                    }
                }
            })
            .build(app)
    };
    match build() {
        Ok(tray) => *t = Some(tray),
        Err(e) => eprintln!("[tray] {e}"),
    }
}
fn remove_tray(app: &AppHandle) {
    if let Some(t) = TRAY.lock().unwrap().take() {
        let _ = app.remove_tray_by_id(t.id());
    }
}

fn apply_zoom(app: &AppHandle) {
    let z = settings::read().get("zoom").and_then(|v| v.as_f64()).filter(|z| *z > 0.2 && *z < 5.0).unwrap_or(1.0);
    if let Some(w) = main_window(app) {
        let _ = w.set_zoom(z);
    }
}

#[tauri::command]
fn settings_get() -> Value {
    let mut m = Map::new();
    m.insert("server".into(), json!(settings::DEFAULT_SERVER));
    m.insert("devUi".into(), json!(settings::dev()));
    m.insert("sysLangs".into(), json!(sys::sys_langs()));
    for (k, v) in settings::read() {
        m.insert(k, v);
    }
    if let Ok(s) = std::env::var("KONZTE_SERVER") {
        if !s.is_empty() {
            m.insert("server".into(), json!(s));
        }
    }
    Value::Object(m)
}

#[tauri::command]
fn settings_set(app: AppHandle, patch: Value) -> Value {
    let mut patch = patch.as_object().cloned().unwrap_or_default();
    if patch.contains_key("server") && !settings::dev() {
        let ok = patch.get("server").and_then(|v| v.as_str()).map(|s| regex::Regex::new(r"^https://konzte\.online(/|$)").unwrap().is_match(s)).unwrap_or(false);
        if !ok {
            patch.remove("server");
        }
    }
    let mut s = settings::read();
    for (k, v) in patch.iter() {
        s.insert(k.clone(), v.clone());
    }
    settings::write(&s);
    if patch.contains_key("zoom") {
        apply_zoom(&app);
    }
    if patch.contains_key("autostart") || patch.contains_key("startHidden") {
        sys::set_autostart(settings::truthy(s.get("autostart")), settings::truthy(s.get("startHidden")));
    }
    if patch.contains_key("tray") || patch.contains_key("closeToTray") {
        let close_to_tray = settings::truthy(s.get("closeToTray"));
        if settings::is_false(s.get("tray")) && !close_to_tray {
            remove_tray(&app);
        } else {
            ensure_tray(&app);
        }
    }
    Value::Object(s)
}

#[tauri::command]
fn open_url(url: String) {
    open_external(&url);
}

#[tauri::command]
fn win_cmd(window: WebviewWindow, cmd: String) {
    match cmd.as_str() {
        "min" => {
            let _ = window.minimize();
        }
        "max" => {
            if window.is_maximized().unwrap_or(false) {
                let _ = window.unmaximize();
            } else {
                let _ = window.maximize();
            }
        }
        "close" => {
            let _ = window.close();
        }
        "drag" => {
            let _ = window.start_dragging();
        }
        _ => {}
    }
}

#[tauri::command]
fn attention(app: AppHandle, window: WebviewWindow, text: String, opts: Value) {
    let st = settings::read();
    if !window.is_focused().unwrap_or(false) {
        if !settings::is_false(st.get("flash")) {
            let _ = window.request_user_attention(Some(UserAttentionType::Informational));
        }
        if !settings::is_false(st.get("notify")) {
            let _ = app.notification().builder().title("Konzte").body(text).show();
        }
    }
    if settings::truthy(opts.get("raise")) && !settings::is_false(st.get("raise")) {
        let _ = window.unminimize();
        let _ = window.show();
    }
}

#[tauri::command]
async fn hwid() -> String {
    tauri::async_runtime::spawn_blocking(sys::hwid).await.unwrap_or_default()
}

#[tauri::command]
fn app_info() -> Value {
    let ui = UI.lock().unwrap().clone();
    json!({
        "version": shellupdate::VERSION, "ui": ui.ui, "uiUpdated": ui.updated, "needShell": ui.need_shell,
        "platform": sys::platform(), "guard": guard::guard_version(), "osVer": sys::os_version(), "arch": sys::arch(),
        "data": settings::user_data().to_string_lossy(), "electron": "", "tauri": tauri::VERSION, "shell": "tauri",
    })
}

#[tauri::command]
fn relaunch(app: AppHandle) {
    before_exit();
    app.restart();
}

#[tauri::command]
fn clear_cache(window: WebviewWindow) -> bool {
    window.clear_all_browsing_data().is_ok()
}

#[tauri::command]
fn asset(rel: String) -> Result<String, String> {
    let rel = assets::clean_rel(&rel).ok_or("bad path")?;
    let b = assets::ui_file(&format!("assets/{rel}")).ok_or("not found")?;
    Ok(String::from_utf8_lossy(&b).into_owned())
}

#[tauri::command]
async fn latest_shot() -> Value {
    tauri::async_runtime::spawn_blocking(sys::latest_shot).await.unwrap_or(Value::Null)
}

#[tauri::command]
async fn ac_scan(opts: Value) -> Value {
    tauri::async_runtime::spawn_blocking(move || guard::scan(&opts)).await.unwrap_or(Value::Null)
}

#[tauri::command]
async fn ac_upload(o: Value) -> Value {
    guard::upload(o).await
}

#[tauri::command]
async fn game_running() -> bool {
    tauri::async_runtime::spawn_blocking(guard::game_running).await.unwrap_or(false)
}

#[tauri::command]
async fn shell_info() -> Value {
    shellupdate::info(&settings::server_url()).await.unwrap_or_else(|e| json!({ "error": e }))
}

#[tauri::command]
async fn shell_install(app: AppHandle) -> Value {
    let a = app.clone();
    shellupdate::install(&settings::server_url(), move |p| {
        let _ = a.emit("shell:progress", p);
    })
    .await
    .unwrap_or_else(|e| json!({ "ok": false, "error": e }))
}

#[tauri::command]
fn launch_game() -> bool {
    if svc::open_window() { return true; }
    let _ = open::that_detached(format!("steam://rungameid/{}", sys::CM_APPID));
    true
}

#[tauri::command]
async fn guard_svc_status() -> Value {
    tauri::async_runtime::spawn_blocking(svc::status).await.unwrap_or(Value::Null)
}

#[tauri::command]
fn guard_open() -> bool {
    svc::open_window()
}

#[tauri::command]
fn cm_state() -> Value {
    cmlink::state()
}
#[tauri::command]
fn cm_create(v: Value) -> Result<bool, String> {
    cmlink::create(&v)
}
#[tauri::command]
fn cm_join(v: Value) -> Result<bool, String> {
    cmlink::join(&v)
}
#[tauri::command]
fn cm_leave() -> Result<bool, String> {
    cmlink::leave()
}
#[tauri::command]
fn cm_invite(v: Value) -> Result<bool, String> {
    cmlink::invite(&v)
}
#[tauri::command]
fn cm_room_blob() -> String {
    cmlink::room_blob()
}
#[tauri::command]
fn cm_result() -> Result<bool, String> {
    cmlink::result()
}
#[tauri::command]
fn cm_expect_friends(v: Value) -> Result<bool, String> {
    cmlink::expect_friends(&v)
}
#[tauri::command]
fn cm_add_friend(v: Value) -> Result<bool, String> {
    cmlink::add_friend(&v)
}
#[tauri::command]
fn cm_friends() -> Result<bool, String> {
    cmlink::friends()
}

#[tauri::command]
fn presence_client(id: Value) {
    presence::set_client(&id);
}
#[tauri::command]
fn presence_set(a: Value) {
    presence::set(&a);
}
#[tauri::command]
fn presence_clear() {
    presence::clear();
}

#[tauri::command]
fn dbg_log(msg: String) {
    if cfg!(debug_assertions) && std::env::var_os("KONZTE_TEST_JS").is_some() {
        println!("[test] {msg}");
    }
}

#[tauri::command]
async fn clip_read() -> Value {
    tauri::async_runtime::spawn_blocking(|| {
        let mut g = CLIP.lock().unwrap();
        if g.is_none() {
            *g = arboard::Clipboard::new().ok();
        }
        let Some(cb) = g.as_mut() else { return Value::Null };
        if let Ok(img) = cb.get_image() {
            if let Some(buf) = image::RgbaImage::from_raw(img.width as u32, img.height as u32, img.bytes.into_owned()) {
                let mut png = Vec::new();
                if image::DynamicImage::ImageRgba8(buf).write_to(&mut std::io::Cursor::new(&mut png), image::ImageFormat::Png).is_ok() {
                    return json!({ "png": base64::engine::general_purpose::STANDARD.encode(png) });
                }
            }
        }
        match cb.get_text() {
            Ok(t) => json!({ "text": t }),
            Err(_) => Value::Null,
        }
    })
    .await
    .unwrap_or(Value::Null)
}

static CLIP: Mutex<Option<arboard::Clipboard>> = Mutex::new(None);

#[tauri::command]
async fn clip_write(text: String) -> bool {
    tauri::async_runtime::spawn_blocking(move || {
        let mut g = CLIP.lock().unwrap();
        if g.is_none() {
            *g = arboard::Clipboard::new().ok();
        }
        g.as_mut().map(|c| c.set_text(text).is_ok()).unwrap_or(false)
    })
    .await
    .unwrap_or(false)
}

fn splash_set(w: &WebviewWindow, pct: u32, text: &str) {
    let _ = w.eval(format!(
        "(()=>{{const b=document.getElementById('b'),t=document.getElementById('t');if(b)b.style.width='{pct}%';if(t)t.textContent={}}})()",
        serde_json::to_string(text).unwrap()
    ));
}

fn create_window(app: &AppHandle) -> tauri::Result<WebviewWindow> {
    let st = settings::read();
    let hidden = std::env::args().any(|a| a == "--hidden");
    #[allow(unused_mut)]
    let mut b = WebviewWindowBuilder::new(app, "main", WebviewUrl::CustomProtocol(ui_url("__shell/splash.html")))
        .title("Konzte Faceit")
        .inner_size(1280.0, 800.0)
        .min_inner_size(1100.0, 680.0)
        .decorations(false)
        .center()
        .visible(!hidden)
        .background_color(Color(15, 15, 19, 255))
        .initialization_script(BRIDGE)
        .zoom_hotkeys_enabled(false)
        .data_directory(settings::user_data().join("webview"))
        .on_navigation(|u| {
            if is_ui_url(u) {
                return true;
            }
            open_external(u.as_str());
            false
        })
        .on_new_window(|u, _| {
            open_external(u.as_str());
            NewWindowResponse::Deny
        });
    if cfg!(debug_assertions) {
        if let Some(js) = std::env::var_os("KONZTE_TEST_JS").and_then(|f| std::fs::read_to_string(f).ok()) {
            b = b.initialization_script(format!("if(location.pathname==='/index.html')addEventListener('load',()=>setTimeout(async()=>{{const log=m=>__TAURI_INTERNALS__.invoke('dbg_log',{{msg:String(m)}});try{{{js}\n}}catch(e){{log('FAIL exception '+(e&&e.stack||e))}}}},1500));"));
        }
    }
    #[cfg(windows)]
    {
        b = b.use_https_scheme(true);
        let mut args = String::from("--disable-features=msWebOOUI,msPdfOOUI,msSmartScreenProtection");
        if settings::is_false(st.get("hwAccel")) {
            args.push_str(" --disable-gpu");
        }
        b = b.additional_browser_args(&args);
    }
    let w = b.build()?;
    if !settings::is_false(st.get("tray")) {
        ensure_tray(app);
    }
    Ok(w)
}

fn main() {
    if std::env::args().any(|a| a == "--kz-selftest") {
        let shot = sys::latest_shot();
        println!("{}", json!({
            "hwid": sys::hwid(), "platform": sys::platform(), "arch": sys::arch(), "osVer": sys::os_version(), "sysLangs": sys::sys_langs(),
            "userData": settings::user_data(), "steamRoots": sys::steam_roots(), "latestShot": shot.get("name"),
            "gameRunning": guard::game_running(), "settingsKeys": settings::read().keys().cloned().collect::<Vec<_>>(),
        }));
        return;
    }
    #[cfg(target_os = "linux")]
    {
        let st = settings::read();
        if settings::is_false(st.get("hwAccel")) {
            std::env::set_var("WEBKIT_DISABLE_COMPOSITING_MODE", "1");
            std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
        }
        if std::env::var_os("DBUS_SYSTEM_BUS_ADDRESS").is_none() && std::env::var_os("KONZTE_KEEP_LOWPOWER").is_none() {
            std::env::set_var("DBUS_SYSTEM_BUS_ADDRESS", "unix:path=/nonexistent/konzte-no-system-bus");
        }
    }

    let app = tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| show(app)))
        .plugin(tauri_plugin_notification::init())
        .register_asynchronous_uri_scheme_protocol("kz", |_ctx, req, responder| {
            std::thread::spawn(move || responder.respond(assets::handle(&req)));
        })
        .invoke_handler(tauri::generate_handler![
            settings_get, settings_set, open_url, win_cmd, attention, hwid, app_info, relaunch, clear_cache, asset,
            latest_shot, ac_scan, ac_upload, game_running, shell_info, shell_install, launch_game, guard_svc_status, guard_open,
            cm_state, cm_create, cm_join, cm_leave, cm_invite, cm_room_blob, cm_result, cm_expect_friends, cm_add_friend, cm_friends,
            presence_client, presence_set, presence_clear, clip_read, clip_write, dbg_log
        ])
        .setup(|app| {
            let handle = app.handle().clone();
            let w = create_window(&handle)?;
            apply_zoom(&handle);
            tauri::async_runtime::spawn(async move {
                let (w1, w2) = (w.clone(), w.clone());
                let prep = updater::prepare(
                    &settings::server_url(),
                    &settings::user_data(),
                    shellupdate::VERSION,
                    move |n| {
                        if n > 0 {
                            splash_set(&w1, 15, &format!("Downloading update… 0/{n}"));
                        }
                    },
                    Arc::new(move |d, n| splash_set(&w2, 15 + (80 * d / n.max(1)) as u32, &format!("Downloading update… {d}/{n}"))),
                )
                .await;
                if let Some(e) = &prep.error {
                    eprintln!("[update] {e}");
                }
                splash_set(&w, 100, "Starting…");
                assets::set_active(prep.ui_source());
                *UI.lock().unwrap() = prep;
                let _ = w.navigate(ui_url("index.html"));
                cmlink::start(handle);
            });
            Ok(())
        })
        .on_window_event(|window, e| {
            if let WindowEvent::CloseRequested { api, .. } = e {
                if !QUITTING.load(Ordering::SeqCst) && settings::truthy(settings::read().get("closeToTray")) {
                    api.prevent_close();
                    ensure_tray(window.app_handle());
                    let _ = window.hide();
                }
            }
        })
        .build(tauri::generate_context!())
        .expect("error while building Konzte");

    app.run(|_app, e| {
        if let RunEvent::Exit = e {
            if !QUITTING.load(Ordering::SeqCst) {
                before_exit();
            }
        }
    });
}
