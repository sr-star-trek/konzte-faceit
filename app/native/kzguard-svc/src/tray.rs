use crate::win::{pipe_call, NAME, VERSION};
use serde_json::json;
use std::sync::atomic::{AtomicIsize, Ordering};
use std::sync::Mutex;
use std::time::{Duration, Instant};
use windows_service::service::{ServiceAccess, ServiceState};
use windows_service::service_manager::{ServiceManager, ServiceManagerAccess};
use windows_sys::Win32::Foundation::*;
use windows_sys::Win32::Graphics::Gdi::*;
use windows_sys::Win32::System::Threading::{OpenProcess, TerminateProcess, PROCESS_TERMINATE};
use windows_sys::Win32::Globalization::GetUserDefaultUILanguage;
use windows_sys::Win32::System::LibraryLoader::GetModuleHandleW;
use windows_sys::Win32::System::Threading::CreateMutexW;
use windows_sys::Win32::UI::Shell::*;
use windows_sys::Win32::UI::WindowsAndMessaging::*;

const CM_APPID: &str = "2281730";
const WM_TRAY: u32 = WM_APP + 1;
const WM_STATE: u32 = WM_APP + 2;
const WM_SHOWWIN: u32 = WM_APP + 3;
const ID_LAUNCH: usize = 10;
const ID_OPEN: usize = 11;
const ID_HIDE: usize = 20;
const ID_EXIT: usize = 21;
const CLASS: &str = "KonzteGuardWindow";

#[derive(Clone, Copy, PartialEq)]
pub enum Svc { Missing, Stopped, Running, NoPipe }
#[derive(Clone, PartialEq)]
pub struct St { pub svc: Svc, pub sv: String, pub game: bool, pub pre: Option<bool>, pub pid: u32, pub issues: Vec<String> }
#[derive(Clone, Copy, PartialEq)]
pub enum Tone { Ok, Warn, Bad, Off }

static ST: Mutex<Option<St>> = Mutex::new(None);
static HWND_: AtomicIsize = AtomicIsize::new(0);
static TASKBAR_CREATED: AtomicIsize = AtomicIsize::new(0);
static MUTEX: AtomicIsize = AtomicIsize::new(0);

fn wz(s: &str) -> Vec<u16> { s.encode_utf16().chain(std::iter::once(0)).collect() }
fn fill(dst: &mut [u16], s: &str) {
    let v: Vec<u16> = s.encode_utf16().take(dst.len() - 1).collect();
    dst[..v.len()].copy_from_slice(&v);
    dst[v.len()] = 0;
}

fn lang() -> usize { match unsafe { GetUserDefaultUILanguage() } & 0x3ff { 0x22 => 1, 0x19 => 2, _ => 0 } }
pub fn t(k: &str) -> &'static str {
    let [en, uk, ru]: [&'static str; 3] = match k {
        "running" => ["Protection is on", "Захист увімкнено", "Защита включена"],
        "stopped" => ["Service is stopped — starting…", "Службу зупинено — запускаю…", "Служба остановлена — запускаю…"],
        "missing" => ["Service is not installed — reinstall KONZTE GUARD", "Службу не встановлено — перевстановіть KONZTE GUARD", "Служба не установлена — переустановите KONZTE GUARD"],
        "nopipe" => ["Service is not responding", "Служба не відповідає", "Служба не отвечает"],
        "g_none" => ["Combat Master: not running", "Combat Master: не запущено", "Combat Master: не запущен"],
        "g_pre" => ["Combat Master: protected since launch", "Combat Master: під захистом від запуску", "Combat Master: под защитой с запуска"],
        "g_late" => ["Combat Master started before GUARD — restart the game", "Combat Master запущено раніше за GUARD — перезапустіть гру", "Combat Master запущен раньше GUARD — перезапустите игру"],
        "launch" => ["Launch Combat Master", "Запустити Combat Master", "Запустить Combat Master"],
        "hide" => ["Close icon (service keeps running)", "Закрити значок (служба працює далі)", "Закрыть значок (служба продолжит работать)"],
        "exit" => ["Exit KONZTE GUARD (stops protection)", "Вийти з KONZTE GUARD (зупинити захист)", "Выйти из KONZTE GUARD (остановить защиту)"],
        "n_on" => ["Combat Master is protected by KONZTE GUARD", "Combat Master під захистом KONZTE GUARD", "Combat Master под защитой KONZTE GUARD"],
        "open" => ["Open KONZTE GUARD", "Відкрити KONZTE GUARD", "Открыть KONZTE GUARD"],
        "sys_ok" => ["System check: passed", "Перевірка системи: пройдено", "Проверка системы: пройдена"],
        "sys_wait" => ["System check: in progress…", "Перевірка системи: триває…", "Проверка системы: идёт…"],
        "i_testsign" => ["Driver test-signing mode is on — run «bcdedit /set testsigning off» and reboot", "Увімкнено тестовий режим драйверів — «bcdedit /set testsigning off» і перезавантаження", "Включён тестовый режим драйверов — «bcdedit /set testsigning off» и перезагрузка"],
        "i_dse" => ["Driver signature enforcement is off — reboot normally", "Вимкнено перевірку підпису драйверів — перезавантажте ПК звичайно", "Отключена проверка подписи драйверов — перезагрузите ПК обычно"],
        "i_kdbg" => ["Kernel debugging is on — run «bcdedit /debug off» and reboot", "Увімкнено налагодження ядра — «bcdedit /debug off» і перезавантаження", "Включена отладка ядра — «bcdedit /debug off» и перезагрузка"],
        "i_gaps" => ["Protection was interrupted during the game — restart the game", "Захист переривався під час гри — перезапустіть гру", "Защита прерывалась во время игры — перезапустите игру"],
        "i_procs" => ["A forbidden program was running during the game", "Під час гри працювала заборонена програма", "Во время игры работала запрещённая программа"],
        "i_notray" => ["KONZTE GUARD window was closed during the game — restart the game", "Програму KONZTE GUARD закривали під час гри — перезапустіть гру", "Программу KONZTE GUARD закрывали во время игры — перезапустите игру"],
        "i_debugger" => ["A debugger was attached to the game", "До гри підключали налагоджувач", "К игре подключали отладчик"],
        "i_inject" => ["Foreign code detected in the game — matchmaking is locked", "У грі виявлено сторонній код — пошук матчів заблоковано", "В игре обнаружен посторонний код — поиск матчей заблокирован"],
        "b_launch" => ["Launch Combat Master", "Запустити Combat Master", "Запустить Combat Master"],
        "b_close" => ["Close Combat Master", "Закрити Combat Master", "Закрыть Combat Master"],
        "b_start" => ["Turn protection on", "Увімкнути захист", "Включить защиту"],
        "b_blocked" => ["Launch blocked", "Запуск заблоковано", "Запуск заблокирован"],
        "b_running" => ["Game is protected", "Гра під захистом", "Игра под защитой"],
        "b_hide" => ["Hide", "Сховати", "Скрыть"],
        "late_long" => ["Combat Master was started before KONZTE GUARD. Close the game and launch it from here.", "Combat Master запущено раніше за KONZTE GUARD. Закрийте гру й запустіть її звідси.", "Combat Master запущен раньше KONZTE GUARD. Закройте игру и запустите её отсюда."],
        "l_svc" => ["Service", "Служба", "Служба"],
        "l_sys" => ["System check", "Перевірка системи", "Проверка системы"],
        "l_game" => ["Combat Master", "Combat Master", "Combat Master"],
        "sub" => ["ANTI-CHEAT", "АНТИЧИТ", "АНТИЧИТ"],
        "foot" => ["The service keeps working even when this window is hidden · konzte.online", "Служба працює, навіть коли вікно сховане · konzte.online", "Служба работает, даже когда окно скрыто · konzte.online"],
        "v_sys_ok" => ["Passed — nothing suspicious found", "Пройдено — нічого підозрілого", "Пройдена — ничего подозрительного"],
        "v_sys_wait" => ["Checking…", "Перевіряємо…", "Проверяем…"],
        "v_sys_off" => ["Waiting for the service", "Чекаємо на службу", "Ждём службу"],
        "v_g_none" => ["Not running", "Не запущено", "Не запущена"],
        "v_g_pre" => ["Protected since launch", "Під захистом від запуску", "Под защитой с запуска"],
        "inst_q" => ["KONZTE GUARD is not installed on this PC yet.\n\nInstall it now? Windows will ask for administrator rights once.", "KONZTE GUARD ще не встановлено на цьому ПК.\n\nВстановити зараз? Windows один раз попросить права адміністратора.", "KONZTE GUARD ещё не установлен на этом ПК.\n\nУстановить сейчас? Windows один раз попросит права администратора."],
        "n_off" => ["KONZTE GUARD is not running — your matches may be flagged", "KONZTE GUARD не працює — матчі можуть позначити", "KONZTE GUARD не работает — матчи могут пометить"],
        _ => ["", "", ""],
    };
    [en, uk, ru][lang()]
}

fn query(last_start: &mut Option<Instant>) -> St {
    if let Ok(p) = std::env::var("KZG_PREVIEW") {
        let mut st = St { svc: Svc::Running, sv: VERSION.into(), game: false, pre: None, pid: 0, issues: Vec::new() };
        match p.as_str() {
            "late" => { st.game = true; st.pre = Some(false); st.pid = 1; }
            "play" => { st.game = true; st.pre = Some(true); st.pid = 1; }
            "blocked" => st.issues = vec!["testsign".into(), "kdbg".into()],
            "stopped" => st.svc = Svc::Stopped,
            "missing" => st.svc = Svc::Missing,
            "wait" => st.issues = vec!["syswait".into()],
            _ => {}
        }
        return st;
    }
    let mut st = St { svc: Svc::Missing, sv: String::new(), game: false, pre: None, pid: 0, issues: Vec::new() };
    let Ok(m) = ServiceManager::local_computer(None::<&str>, ServiceManagerAccess::CONNECT) else { return st };
    let Ok(s) = m.open_service(NAME, ServiceAccess::QUERY_STATUS | ServiceAccess::START) else { return st };
    match s.query_status().map(|x| x.current_state) {
        Ok(ServiceState::Running) => match pipe_call(&json!({ "op": "info" }), Duration::from_secs(4)) {
            Ok(i) => {
                st.svc = Svc::Running;
                st.sv = i["sv"].as_str().unwrap_or("").into();
                st.game = i["game"].as_bool() == Some(true);
                st.pre = i["pre"].as_bool();
                st.pid = i["pid"].as_u64().unwrap_or(0) as u32;
                st.issues = i["issues"].as_array().into_iter().flatten().filter_map(|x| x.as_str().map(String::from)).collect();
                if i["sys"].is_null() { st.issues.push("syswait".into()); }
            }
            Err(_) => st.svc = Svc::NoPipe,
        },
        Ok(ServiceState::StartPending) => st.svc = Svc::NoPipe,
        _ => {
            st.svc = Svc::Stopped;
            if last_start.map(|t| t.elapsed() > Duration::from_secs(30)).unwrap_or(true) {
                *last_start = Some(Instant::now());
                let _ = s.start::<&str>(&[]);
            }
        }
    }
    st
}

fn poll_loop() {
    let mut last_start = None;
    let mut last_ovl: Option<Instant> = None;
    loop {
        let st = query(&mut last_start);
        if st.svc == Svc::Running && crate::update::newer(&st.sv, VERSION) { relaunch(); }
        if st.svc == Svc::Running && st.game && st.pid != 0 && last_ovl.map(|t| t.elapsed() >= Duration::from_secs(5)).unwrap_or(true) {
            last_ovl = Some(Instant::now());
            let list = kzguard::game_overlays(st.pid);
            let list = if list.is_array() { list } else { json!([]) };
            let _ = pipe_call(&json!({ "op": "overlay", "pid": st.pid, "list": list }), Duration::from_secs(4));
        }
        let changed = { let mut g = ST.lock().unwrap_or_else(|e| e.into_inner()); let c = g.as_ref() != Some(&st); if c { *g = Some(st); } c };
        let h = HWND_.load(Ordering::SeqCst);
        if changed && h != 0 { unsafe { PostMessageW(h as HWND, WM_STATE, 0, 0); } }
        std::thread::sleep(Duration::from_secs(3));
    }
}

fn svc_line(st: &St) -> &'static str {
    match st.svc { Svc::Running => t("running"), Svc::Stopped => t("stopped"), Svc::Missing => t("missing"), Svc::NoPipe => t("nopipe") }
}
fn game_line(st: &St) -> &'static str {
    if !st.game { t("g_none") } else if st.pre == Some(true) { t("g_pre") } else { t("g_late") }
}

pub fn svc_value(st: &St) -> (&'static str, Tone) {
    match st.svc { Svc::Running => (t("running"), Tone::Ok), Svc::Stopped | Svc::NoPipe => (svc_line(st), Tone::Warn), Svc::Missing => (t("missing"), Tone::Bad) }
}
pub fn sys_value(st: &St) -> (String, Tone) {
    if st.svc != Svc::Running { return (t("v_sys_off").into(), Tone::Off); }
    if st.issues.iter().any(|x| x == "syswait") { return (t("v_sys_wait").into(), Tone::Warn); }
    let mut v: Vec<&str> = Vec::new();
    for (k, m) in [("testsign", "i_testsign"), ("dse", "i_dse"), ("kdbg", "i_kdbg"), ("gaps", "i_gaps"), ("inject", "i_inject"), ("procs", "i_procs"), ("notray", "i_notray"), ("debugger", "i_debugger")] {
        if st.issues.iter().any(|x| x == k) { v.push(t(m)); }
    }
    if v.is_empty() { (t("v_sys_ok").into(), Tone::Ok) } else { (v.into_iter().take(3).collect::<Vec<_>>().join("\n"), Tone::Bad) }
}
pub fn game_value(st: &St) -> (&'static str, Tone) {
    if !st.game { (t("v_g_none"), Tone::Off) } else if st.pre == Some(true) { (t("v_g_pre"), Tone::Ok) } else { (t("late_long"), Tone::Bad) }
}

fn icon() -> HICON {
    unsafe {
        let (cx, cy) = (GetSystemMetrics(SM_CXSMICON), GetSystemMetrics(SM_CYSMICON));
        let h = LoadImageW(GetModuleHandleW(std::ptr::null()), 1 as _, IMAGE_ICON, cx, cy, 0);
        if h.is_null() { LoadIconW(std::ptr::null_mut(), IDI_SHIELD) } else { h as HICON }
    }
}

fn nid(hwnd: HWND) -> NOTIFYICONDATAW {
    let mut n: NOTIFYICONDATAW = unsafe { std::mem::zeroed() };
    n.cbSize = std::mem::size_of::<NOTIFYICONDATAW>() as u32;
    n.hWnd = hwnd;
    n.uID = 1;
    n
}

fn tip_text() -> String {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    match st { Some(st) => format!("KONZTE GUARD\n{}\n{}", svc_line(&st), game_line(&st)), None => "KONZTE GUARD".into() }
}

fn add_icon(hwnd: HWND) {
    let mut n = nid(hwnd);
    n.uFlags = NIF_ICON | NIF_MESSAGE | NIF_TIP;
    n.uCallbackMessage = WM_TRAY;
    n.hIcon = icon();
    fill(&mut n.szTip, &tip_text());
    unsafe { Shell_NotifyIconW(NIM_ADD, &n); }
}

fn update_tip(hwnd: HWND) {
    let mut n = nid(hwnd);
    n.uFlags = NIF_TIP;
    fill(&mut n.szTip, &tip_text());
    unsafe { Shell_NotifyIconW(NIM_MODIFY, &n); }
}

fn balloon(hwnd: HWND, text: &str, warn: bool) {
    let mut n = nid(hwnd);
    n.uFlags = NIF_INFO;
    fill(&mut n.szInfoTitle, "KONZTE GUARD");
    fill(&mut n.szInfo, text);
    n.dwInfoFlags = if warn { NIIF_WARNING } else { NIIF_INFO };
    unsafe { Shell_NotifyIconW(NIM_MODIFY, &n); }
}

fn open(url: &str) {
    let (verb, file) = (wz("open"), wz(url));
    unsafe { ShellExecuteW(std::ptr::null_mut(), verb.as_ptr(), file.as_ptr(), std::ptr::null(), std::ptr::null(), SW_SHOWNORMAL); }
}

fn launch(hwnd: HWND) {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    if let Some(st) = &st {
        if st.game && st.pre != Some(true) { balloon(hwnd, t("g_late"), true); return; }
        if let Some(i) = blocking(st) { balloon(hwnd, t(i), true); return; }
        if st.svc != Svc::Running {
            if let Ok(m) = ServiceManager::local_computer(None::<&str>, ServiceManagerAccess::CONNECT) {
                if let Ok(s) = m.open_service(NAME, ServiceAccess::START | ServiceAccess::QUERY_STATUS) {
                    let _ = s.start::<&str>(&[]);
                    let t0 = Instant::now();
                    while t0.elapsed() < Duration::from_secs(8) && s.query_status().map(|x| x.current_state != ServiceState::Running).unwrap_or(true) {
                        std::thread::sleep(Duration::from_millis(250));
                    }
                }
            }
        }
    }
    open(&format!("steam://rungameid/{CM_APPID}"));
}

fn menu(hwnd: HWND) {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    unsafe {
        let m = CreatePopupMenu();
        let head = wz(&format!("KONZTE GUARD {VERSION}"));
        AppendMenuW(m, MF_STRING | MF_GRAYED, 1, head.as_ptr());
        AppendMenuW(m, MF_SEPARATOR, 0, std::ptr::null());
        let (a, b) = st.as_ref().map(|s| (svc_line(s), game_line(s))).unwrap_or(("…", ""));
        let (a, b) = (wz(a), wz(b));
        AppendMenuW(m, MF_STRING | MF_GRAYED, 2, a.as_ptr());
        if st.is_some() { AppendMenuW(m, MF_STRING | MF_GRAYED, 3, b.as_ptr()); }
        AppendMenuW(m, MF_SEPARATOR, 0, std::ptr::null());
        let o = wz(t("open"));
        AppendMenuW(m, MF_STRING, ID_OPEN, o.as_ptr());
        let l = wz(t("launch"));
        AppendMenuW(m, MF_STRING, ID_LAUNCH, l.as_ptr());
        let h = wz(t("hide"));
        let in_game = st.as_ref().map(|s| s.game).unwrap_or(false);
        AppendMenuW(m, MF_STRING | if in_game { MF_GRAYED } else { 0 }, ID_HIDE, h.as_ptr());
        let x = wz(t("exit"));
        AppendMenuW(m, MF_STRING | if in_game { MF_GRAYED } else { 0 }, ID_EXIT, x.as_ptr());
        let mut p = POINT { x: 0, y: 0 };
        GetCursorPos(&mut p);
        SetForegroundWindow(hwnd);
        let cmd = TrackPopupMenu(m, TPM_RIGHTBUTTON | TPM_RETURNCMD | TPM_NONOTIFY, p.x, p.y, 0, hwnd, std::ptr::null());
        PostMessageW(hwnd, WM_NULL, 0, 0);
        DestroyMenu(m);
        match cmd as usize {
            ID_LAUNCH => { let hv = hwnd as isize; std::thread::spawn(move || launch(hv as HWND)); }
            ID_OPEN => show(hwnd),
            ID_HIDE => { DestroyWindow(hwnd); }
            ID_EXIT => {
                let r = pipe_call(&json!({ "op": "stop" }), Duration::from_secs(4));
                if r.map(|v| v["ok"].as_bool() == Some(true)).unwrap_or(true) { DestroyWindow(hwnd); }
            }
            _ => {}
        }
    }
}

static PREV: Mutex<Option<St>> = Mutex::new(None);

unsafe extern "system" fn wndproc(hwnd: HWND, msg: u32, wp: WPARAM, lp: LPARAM) -> LRESULT {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    let hv = hwnd as isize;
    if let Some(r) = crate::ui::handle(hwnd, msg, wp, lp, st.as_ref(), &move || main_action(hv as HWND)) { return r; }
    match msg {
        WM_TRAY => {
            match lp as u32 { WM_LBUTTONUP | WM_LBUTTONDBLCLK => show(hwnd), WM_RBUTTONUP | WM_CONTEXTMENU => menu(hwnd), _ => {} }
            0
        }
        WM_SHOWWIN => { show(hwnd); 0 }
        WM_CLOSE => { ShowWindow(hwnd, SW_HIDE); 0 }
        WM_STATE => {
            update_tip(hwnd);
            refresh(hwnd);
            let cur = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
            let mut prev = PREV.lock().unwrap_or_else(|e| e.into_inner());
            if let Some(c) = &cur {
                let was_late = prev.as_ref().map(|p| p.game && p.pre != Some(true)).unwrap_or(false);
                if c.svc == Svc::Running && c.game && c.pre != Some(true) && !was_late { show(hwnd); }
            }
            if let (Some(c), Some(p)) = (&cur, prev.as_ref()) {
                if c.game && !p.game {
                    if c.svc == Svc::Running && c.pre == Some(true) { balloon(hwnd, t("n_on"), false); } else if c.svc == Svc::Running { balloon(hwnd, t("g_late"), true); }
                }
                if p.svc == Svc::Running && c.svc != Svc::Running { balloon(hwnd, t("n_off"), true); }
            }
            *prev = cur;
            0
        }
        WM_DESTROY => {
            let n = nid(hwnd);
            Shell_NotifyIconW(NIM_DELETE, &n);
            PostQuitMessage(0);
            0
        }
        _ => {
            let tb = TASKBAR_CREATED.load(Ordering::SeqCst);
            if tb != 0 && msg == tb as u32 { add_icon(hwnd); return 0; }
            DefWindowProcW(hwnd, msg, wp, lp)
        }
    }
}

pub fn run() {
    unsafe {
        let open_win = std::env::args().nth(1).as_deref() == Some("open");
        crate::ui::init();
        if std::env::var_os("KZG_PREVIEW").is_none() && !installed_copy() && offer_install() { return; }
        let mx = wz("Local\\KonzteGuardTray");
        let m = CreateMutexW(std::ptr::null(), 0, mx.as_ptr());
        MUTEX.store(m as isize, Ordering::SeqCst);
        if GetLastError() == ERROR_ALREADY_EXISTS {
            if open_win {
                let c = wz(CLASS);
                let w = FindWindowW(c.as_ptr(), std::ptr::null());
                if !w.is_null() { PostMessageW(w, WM_SHOWWIN, 0, 0); }
            }
            return;
        }

        let tb = wz("TaskbarCreated");
        TASKBAR_CREATED.store(RegisterWindowMessageW(tb.as_ptr()) as isize, Ordering::SeqCst);
        let inst = GetModuleHandleW(std::ptr::null());
        let cls = wz(CLASS);
        let mut wc: WNDCLASSW = std::mem::zeroed();
        wc.lpfnWndProc = Some(wndproc);
        wc.hInstance = inst;
        wc.lpszClassName = cls.as_ptr();
        wc.style = CS_DROPSHADOW;
        wc.hCursor = LoadCursorW(std::ptr::null_mut(), IDC_ARROW);
        wc.hIcon = LoadIconW(inst, 1 as _);
        RegisterClassW(&wc);
        let hwnd = crate::ui::create(&cls, inst);
        if hwnd.is_null() { return; }
        HWND_.store(hwnd as isize, Ordering::SeqCst);
        add_icon(hwnd);
        std::thread::spawn(poll_loop);
        if open_win { show(hwnd); }
        let mut msg: MSG = std::mem::zeroed();
        while GetMessageW(&mut msg, std::ptr::null_mut(), 0, 0) > 0 {
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }
    }
}

fn blocking(st: &St) -> Option<&'static str> {
    for (k, m) in [("testsign", "i_testsign"), ("dse", "i_dse"), ("kdbg", "i_kdbg")] { if st.issues.iter().any(|x| x == k) { return Some(m); } }
    None
}

#[derive(Clone, Copy, PartialEq)]
pub enum Act { Start, Close, Launch, Blocked, Running, Wait }
pub fn action(st: Option<&St>) -> Act {
    let Some(st) = st else { return Act::Wait };
    if st.svc != Svc::Running { return if st.svc == Svc::Missing { Act::Blocked } else { Act::Start } }
    if st.game { return if st.pre == Some(true) { Act::Running } else { Act::Close } }
    if blocking(st).is_some() { return Act::Blocked }
    if st.issues.iter().any(|x| x == "syswait") { return Act::Wait }
    Act::Launch
}

fn refresh(hwnd: HWND) {
    unsafe { InvalidateRect(hwnd, std::ptr::null(), 0); }
}

fn show(hwnd: HWND) {
    refresh(hwnd);
    unsafe { ShowWindow(hwnd, SW_SHOWNORMAL); SetForegroundWindow(hwnd); }
}

fn main_action(hwnd: HWND) {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    match action(st.as_ref()) {
        Act::Close => {
            let pid = st.map(|s| s.pid).unwrap_or(0);
            if pid != 0 { unsafe { let h = OpenProcess(PROCESS_TERMINATE, 0, pid); if !h.is_null() { TerminateProcess(h, 0); CloseHandle(h); } } }
        }
        Act::Start | Act::Launch => { let hv = hwnd as isize; std::thread::spawn(move || launch_or_start(hv as HWND)); }
        _ => {}
    }
}

fn launch_or_start(hwnd: HWND) {
    let st = ST.lock().unwrap_or_else(|e| e.into_inner()).clone();
    if st.as_ref().map(|s| s.svc != Svc::Running).unwrap_or(true) {
        if let Ok(m) = ServiceManager::local_computer(None::<&str>, ServiceManagerAccess::CONNECT) {
            if let Ok(s) = m.open_service(NAME, ServiceAccess::START) { let _ = s.start::<&str>(&[]); }
        }
        return;
    }
    launch(hwnd);
}

fn pf_exe() -> std::path::PathBuf {
    std::path::PathBuf::from(std::env::var("ProgramFiles").unwrap_or_else(|_| r"C:\Program Files".into())).join("Konzte Guard").join("KonzteGuard.exe")
}
fn installed_copy() -> bool {
    std::env::current_exe().ok().and_then(|p| p.parent().map(|d| d.to_path_buf())).map(|d| Some(d.as_path()) == pf_exe().parent()).unwrap_or(false)
}
fn offer_install() -> bool {
    unsafe {
        let (q, title) = (wz(t("inst_q")), wz("KONZTE GUARD"));
        if MessageBoxW(std::ptr::null_mut(), q.as_ptr(), title.as_ptr(), MB_YESNO | MB_ICONQUESTION) != IDYES { return true; }
        let me = wz(&std::env::current_exe().map(|p| p.to_string_lossy().into_owned()).unwrap_or_default());
        let (verb, args) = (wz("runas"), wz("install"));
        let mut si: SHELLEXECUTEINFOW = std::mem::zeroed();
        si.cbSize = std::mem::size_of::<SHELLEXECUTEINFOW>() as u32;
        si.fMask = SEE_MASK_NOCLOSEPROCESS | SEE_MASK_NOASYNC;
        si.lpVerb = verb.as_ptr(); si.lpFile = me.as_ptr(); si.lpParameters = args.as_ptr(); si.nShow = SW_HIDE;
        if ShellExecuteExW(&mut si) == 0 || si.hProcess.is_null() { return true; }
        windows_sys::Win32::System::Threading::WaitForSingleObject(si.hProcess, 120_000);
        CloseHandle(si.hProcess);
        let pf = pf_exe();
        if pf.exists() {
            let _ = std::process::Command::new("reg.exe").args(["add", r"HKCU\Software\Microsoft\Windows\CurrentVersion\Run", "/v", "KonzteGuard", "/t", "REG_SZ", "/d", &format!("\"{}\"", pf.display()), "/f"]).output();
            let _ = std::process::Command::new(&pf).arg("open").spawn();
        }
        true
    }
}
fn relaunch() {
    let pf = pf_exe();
    if !pf.exists() { return; }
    unsafe { let m = MUTEX.swap(0, Ordering::SeqCst); if m != 0 { CloseHandle(m as HANDLE); } }
    let h = HWND_.load(Ordering::SeqCst);
    if h != 0 { let n = nid(h as HWND); unsafe { Shell_NotifyIconW(NIM_DELETE, &n); } }
    let _ = std::process::Command::new(&pf).spawn();
    std::process::exit(0);
}
