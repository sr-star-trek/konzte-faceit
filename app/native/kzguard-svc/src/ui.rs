use crate::tray::{action, game_value, svc_value, sys_value, t, Act, St, Tone};
use crate::win::VERSION;
use std::sync::atomic::{AtomicU8, Ordering};
use std::sync::Mutex;
use tiny_skia::*;
use windows_sys::Win32::Foundation::*;
use windows_sys::Win32::Graphics::Dwm::DwmSetWindowAttribute;
use windows_sys::Win32::Graphics::Gdi::*;
use windows_sys::Win32::System::LibraryLoader::GetModuleHandleW;
use windows_sys::Win32::UI::HiDpi::*;
use windows_sys::Win32::UI::Input::KeyboardAndMouse::*;
use windows_sys::Win32::UI::WindowsAndMessaging::*;

const W: f32 = 560.0;
static LAYOUT_H: std::sync::atomic::AtomicU32 = std::sync::atomic::AtomicU32::new(0x43D20000);
fn hh() -> f32 { f32::from_bits(LAYOUT_H.load(Ordering::SeqCst)) }
const HEADER: f32 = 100.0;
const WM_MOUSELEAVE: u32 = 0x02A3;

#[derive(Clone, Copy, PartialEq)]
#[repr(u8)]
pub enum Hit { None = 0, Main = 1, Hide = 2, Min = 3, Close = 4, Caption = 5 }
fn hit_from(v: u8) -> Hit { match v { 1 => Hit::Main, 2 => Hit::Hide, 3 => Hit::Min, 4 => Hit::Close, 5 => Hit::Caption, _ => Hit::None } }

static HOVER: AtomicU8 = AtomicU8::new(0);
static PRESSED: AtomicU8 = AtomicU8::new(0);
static FONTS: Mutex<Option<(u32, [isize; 6])>> = Mutex::new(None);

fn wz(s: &str) -> Vec<u16> { s.encode_utf16().collect() }
fn rgb(c: u32) -> u32 { ((c >> 16) & 0xff) | (c & 0xff00) | ((c & 0xff) << 16) }
fn col(c: u32, a: u8) -> Color { Color::from_rgba8((c >> 16) as u8, (c >> 8) as u8, c as u8, a) }

const GOLD: u32 = 0xF4C542;
const GOLD_HI: u32 = 0xFFE08A;
const GOLD_LO: u32 = 0xD9A22B;
const TEXT: u32 = 0xF2F2F5;
const MUTED: u32 = 0x8E8C99;
const DIM: u32 = 0x5E5C68;
const GREEN: u32 = 0x3DDC84;
const RED: u32 = 0xFF5A5F;
const AMBER: u32 = 0xF5A524;

fn tone_color(t: Tone) -> u32 { match t { Tone::Ok => GREEN, Tone::Warn => AMBER, Tone::Bad => RED, Tone::Off => DIM } }

pub fn init() {
    unsafe {
        SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);
        for f in [&include_bytes!("../res/RussoOne-Regular.ttf")[..]] {
            let mut n = 0u32;
            AddFontMemResourceEx(f.as_ptr() as _, f.len() as u32, std::ptr::null(), &mut n);
        }
    }
}

pub fn dpi(hwnd: HWND) -> f32 { let d = unsafe { GetDpiForWindow(hwnd) }; if d == 0 { 1.0 } else { d as f32 / 96.0 } }

pub fn create(cls: &[u16], inst: HINSTANCE) -> HWND {
    unsafe {
        let s = { let d = GetDpiForSystem(); if d == 0 { 1.0 } else { d as f32 / 96.0 } };
        let (w, h) = ((W * s) as i32, (hh() * s) as i32);
        let (sx, sy) = (GetSystemMetrics(SM_CXSCREEN), GetSystemMetrics(SM_CYSCREEN));
        let title: Vec<u16> = "KONZTE GUARD\0".encode_utf16().collect();
        let hwnd = CreateWindowExW(WS_EX_APPWINDOW, cls.as_ptr(), title.as_ptr(), WS_POPUP | WS_SYSMENU | WS_MINIMIZEBOX,
            (sx - w) / 2, (sy - h) / 2, w, h, std::ptr::null_mut(), std::ptr::null_mut(), inst, std::ptr::null());
        if !hwnd.is_null() {
            let round: u32 = 2;
            DwmSetWindowAttribute(hwnd, 33, &round as *const u32 as _, 4);
        }
        hwnd
    }
}

struct R { x: f32, y: f32, w: f32, h: f32 }
impl R {
    fn has(&self, px: f32, py: f32) -> bool { px >= self.x && px < self.x + self.w && py >= self.y && py < self.y + self.h }
    fn sc(&self, s: f32) -> RECT { RECT { left: (self.x * s) as i32, top: (self.y * s) as i32, right: ((self.x + self.w) * s) as i32, bottom: ((self.y + self.h) * s) as i32 } }
}
fn r_close() -> R { R { x: W - 50.0, y: 12.0, w: 36.0, h: 30.0 } }
fn r_min() -> R { R { x: W - 88.0, y: 12.0, w: 36.0, h: 30.0 } }
fn r_main() -> R { R { x: 24.0, y: hh() - 112.0, w: W - 48.0 - 148.0, h: 52.0 } }
fn r_hide() -> R { R { x: W - 24.0 - 136.0, y: hh() - 112.0, w: 136.0, h: 52.0 } }

pub fn hit_test(hwnd: HWND, x: i32, y: i32) -> Hit {
    let s = dpi(hwnd);
    let (px, py) = (x as f32 / s, y as f32 / s);
    if r_close().has(px, py) { Hit::Close } else if r_min().has(px, py) { Hit::Min }
    else if r_main().has(px, py) { Hit::Main } else if r_hide().has(px, py) { Hit::Hide }
    else if py < HEADER { Hit::Caption } else { Hit::None }
}

fn enabled(a: Act) -> bool { matches!(a, Act::Launch | Act::Start | Act::Close) }

fn rrect(x: f32, y: f32, w: f32, h: f32, r: f32) -> Option<Path> {
    let r = r.min(w / 2.0).min(h / 2.0);
    let k = 0.5523 * r;
    let mut pb = PathBuilder::new();
    pb.move_to(x + r, y);
    pb.line_to(x + w - r, y);
    pb.cubic_to(x + w - r + k, y, x + w, y + r - k, x + w, y + r);
    pb.line_to(x + w, y + h - r);
    pb.cubic_to(x + w, y + h - r + k, x + w - r + k, y + h, x + w - r, y + h);
    pb.line_to(x + r, y + h);
    pb.cubic_to(x + r - k, y + h, x, y + h - r + k, x, y + h - r);
    pb.line_to(x, y + r);
    pb.cubic_to(x, y + r - k, x + r - k, y, x + r, y);
    pb.close();
    pb.finish()
}

fn solid(c: u32, a: u8) -> Paint<'static> { let mut p = Paint::default(); p.anti_alias = true; p.set_color(col(c, a)); p }
fn vgrad(y0: f32, y1: f32, c0: Color, c1: Color) -> Paint<'static> {
    let mut p = Paint::default();
    p.anti_alias = true;
    if let Some(sh) = LinearGradient::new(Point::from_xy(0.0, y0), Point::from_xy(0.0, y1), vec![GradientStop::new(0.0, c0), GradientStop::new(1.0, c1)], SpreadMode::Pad, Transform::identity()) { p.shader = sh; }
    p
}

struct Fonts { title: HFONT, sub: HFONT, label: HFONT, value: HFONT, btn: HFONT, small: HFONT }
fn fonts(dpi_raw: u32, s: f32) -> Fonts {
    let mut g = FONTS.lock().unwrap_or_else(|e| e.into_inner());
    if g.as_ref().map(|(d, _)| *d) != Some(dpi_raw) {
        if let Some((_, old)) = g.take() { for f in old { unsafe { DeleteObject(f as _); } } }
        let mk = |px: f32, weight: i32, face: &str| -> isize {
            let f: Vec<u16> = format!("{face}\0").encode_utf16().collect();
            unsafe { CreateFontW(-(px * s).round() as i32, 0, 0, 0, weight, 0, 0, 0, 1, 0, 0, 5, 0, f.as_ptr()) as isize }
        };
        *g = Some((dpi_raw, [
            mk(34.0, 400, "Russo One"),
            mk(12.5, 400, "Russo One"),
            mk(11.5, 400, "Russo One"),
            mk(15.0, 600, "Segoe UI"),
            mk(17.0, 400, "Russo One"),
            mk(12.0, 400, "Segoe UI"),
        ]));
    }
    let f = g.as_ref().unwrap().1;
    Fonts { title: f[0] as _, sub: f[1] as _, label: f[2] as _, value: f[3] as _, btn: f[4] as _, small: f[5] as _ }
}

unsafe fn text(dc: HDC, s: &str, r: &mut RECT, font: HFONT, color: u32, flags: u32, spacing: i32) {
    SelectObject(dc, font as _);
    SetTextColor(dc, rgb(color));
    SetTextCharacterExtra(dc, spacing);
    let w = wz(s);
    DrawTextW(dc, w.as_ptr() as _, w.len() as i32, r, flags);
}
unsafe fn measure(dc: HDC, s: &str, width: i32, font: HFONT) -> i32 {
    SelectObject(dc, font as _);
    SetTextCharacterExtra(dc, 0);
    let w = wz(s);
    let mut r = RECT { left: 0, top: 0, right: width, bottom: 0 };
    DrawTextW(dc, w.as_ptr() as _, w.len() as i32, &mut r, DT_WORDBREAK | DT_CALCRECT | DT_NOPREFIX);
    r.bottom
}

pub fn paint(hwnd: HWND, st: Option<&St>) {
    unsafe {
        let mut ps: PAINTSTRUCT = std::mem::zeroed();
        let hdc = BeginPaint(hwnd, &mut ps);
        let mut cr: RECT = std::mem::zeroed();
        GetClientRect(hwnd, &mut cr);
        let (pw, ph) = ((cr.right - cr.left).max(1), (cr.bottom - cr.top).max(1));
        let dpi_raw = GetDpiForWindow(hwnd).max(96);
        let s = dpi_raw as f32 / 96.0;
        let f = fonts(dpi_raw, s);
        let a = action(st);
        let hover = hit_from(HOVER.load(Ordering::SeqCst));
        let pressed = hit_from(PRESSED.load(Ordering::SeqCst));

        let mut bmi: BITMAPINFO = std::mem::zeroed();
        bmi.bmiHeader.biSize = std::mem::size_of::<BITMAPINFOHEADER>() as u32;
        bmi.bmiHeader.biWidth = pw;
        bmi.bmiHeader.biHeight = -ph;
        bmi.bmiHeader.biPlanes = 1;
        bmi.bmiHeader.biBitCount = 32;
        let mut bits: *mut core::ffi::c_void = std::ptr::null_mut();
        let dib = CreateDIBSection(hdc, &bmi, DIB_RGB_COLORS, &mut bits, std::ptr::null_mut(), 0);
        let mdc = CreateCompatibleDC(hdc);
        let old_bmp = SelectObject(mdc, dib as _);
        SetBkMode(mdc, TRANSPARENT as i32);

        let rows: Vec<(&str, String, Tone)> = match st {
            Some(st) => vec![(t("l_svc"), svc_value(st).0.into(), svc_value(st).1), (t("l_sys"), sys_value(st).0, sys_value(st).1), (t("l_game"), game_value(st).0.into(), game_value(st).1)],
            None => vec![(t("l_svc"), "…".into(), Tone::Off), (t("l_sys"), "…".into(), Tone::Off), (t("l_game"), "…".into(), Tone::Off)],
        };
        let (cx, cw) = (24.0, W - 48.0);
        let val_w = ((cw - 64.0) * s) as i32;
        let heights: Vec<f32> = rows.iter().map(|(_, v, _)| { let hv = measure(mdc, v, val_w, f.value) as f32 / s; (30.0 + hv + 14.0).max(58.0) }).collect();
        let card_y = HEADER + 8.0;
        let card_h: f32 = heights.iter().sum::<f32>();
        let need = (card_y + card_h + 16.0 + 112.0).round();
        if (need - hh()).abs() > 0.5 {
            LAYOUT_H.store(need.to_bits(), Ordering::SeqCst);
            SetWindowPos(hwnd, std::ptr::null_mut(), 0, 0, (W * s) as i32, (need * s) as i32, SWP_NOMOVE | SWP_NOZORDER | SWP_NOACTIVATE);
            SelectObject(mdc, old_bmp);
            DeleteObject(dib as _);
            DeleteDC(mdc);
            InvalidateRect(hwnd, std::ptr::null(), 0);
            EndPaint(hwnd, &ps);
            return;
        }
        #[allow(non_snake_case)]
        let H = hh();

        if let Some(mut pm) = Pixmap::new(pw as u32, ph as u32) {
            let tf = Transform::from_scale(s, s);
            let full = Rect::from_xywh(0.0, 0.0, W, H).unwrap();
            pm.fill_rect(full, &vgrad(0.0, H, col(0x18161F, 255), col(0x09090C, 255)), tf, None);
            let mut glow = Paint::default();
            glow.anti_alias = true;
            if let Some(sh) = RadialGradient::new(Point::from_xy(58.0, 52.0), 0.0, Point::from_xy(58.0, 52.0), 230.0,
                vec![GradientStop::new(0.0, col(GOLD, 46)), GradientStop::new(1.0, col(GOLD, 0))], SpreadMode::Pad, Transform::identity()) { glow.shader = sh; }
            pm.fill_rect(full, &glow, tf, None);
            if let Some(p) = rrect(0.5, 0.5, W - 1.0, H - 1.0, 8.0) { pm.stroke_path(&p, &solid(GOLD, 70), &Stroke { width: 1.0, ..Default::default() }, tf, None); }
            for (r, hv, close) in [(r_min(), hover == Hit::Min, false), (r_close(), hover == Hit::Close, true)] {
                if hv { if let Some(p) = rrect(r.x, r.y, r.w, r.h, 6.0) { pm.fill_path(&p, &solid(if close { 0xE5484D } else { 0x2A2833 }, 255), FillRule::Winding, tf, None); } }
                let (mx, my) = (r.x + r.w / 2.0, r.y + r.h / 2.0);
                let mut pb = PathBuilder::new();
                if close { pb.move_to(mx - 5.5, my - 5.5); pb.line_to(mx + 5.5, my + 5.5); pb.move_to(mx + 5.5, my - 5.5); pb.line_to(mx - 5.5, my + 5.5); }
                else { pb.move_to(mx - 6.0, my); pb.line_to(mx + 6.0, my); }
                if let Some(p) = pb.finish() { pm.stroke_path(&p, &solid(if hv { 0xFFFFFF } else { MUTED }, 255), &Stroke { width: 1.4, line_cap: LineCap::Round, ..Default::default() }, tf, None); }
            }
            if let Some(p) = rrect(cx, card_y, cw, card_h, 12.0) {
                pm.fill_path(&p, &solid(0x15141B, 235), FillRule::Winding, tf, None);
                pm.stroke_path(&p, &solid(0x2C2A35, 255), &Stroke { width: 1.0, ..Default::default() }, tf, None);
            }
            let mut y = card_y;
            for (i, (_, _, tone)) in rows.iter().enumerate() {
                let c = tone_color(*tone);
                let (dx, dy) = (cx + 26.0, y + 22.0);
                if let Some(p) = PathBuilder::from_circle(dx, dy, 9.0) { pm.fill_path(&p, &solid(c, 40), FillRule::Winding, tf, None); }
                if let Some(p) = PathBuilder::from_circle(dx, dy, 4.5) { pm.fill_path(&p, &solid(c, 255), FillRule::Winding, tf, None); }
                y += heights[i];
                if i + 1 < rows.len() { pm.fill_rect(Rect::from_xywh(cx + 16.0, y - 0.5, cw - 32.0, 1.0).unwrap(), &solid(0x24222C, 255), tf, None); }
            }
            let m = r_main();
            let on = enabled(a);
            let (hov, prs) = (on && hover == Hit::Main, on && pressed == Hit::Main && hover == Hit::Main);
            if let Some(p) = rrect(m.x, m.y, m.w, m.h, 10.0) {
                match a {
                    Act::Launch | Act::Start => {
                        let (top, bot) = if prs { (GOLD_LO, GOLD_LO) } else if hov { (0xFFE9A8, GOLD) } else { (GOLD_HI, GOLD_LO) };
                        pm.fill_path(&p, &vgrad(m.y, m.y + m.h, col(top, 255), col(bot, 255)), FillRule::Winding, tf, None);
                    }
                    Act::Close => { let c = if prs { 0xB8292E } else if hov { 0xF0585D } else { 0xE5484D }; pm.fill_path(&p, &solid(c, 255), FillRule::Winding, tf, None); }
                    Act::Running => { pm.fill_path(&p, &solid(0x10251A, 255), FillRule::Winding, tf, None); pm.stroke_path(&p, &solid(GREEN, 150), &Stroke { width: 1.2, ..Default::default() }, tf, None); }
                    Act::Blocked => { pm.fill_path(&p, &solid(0x2A1517, 255), FillRule::Winding, tf, None); pm.stroke_path(&p, &solid(RED, 120), &Stroke { width: 1.2, ..Default::default() }, tf, None); }
                    Act::Wait => { pm.fill_path(&p, &solid(0x1D1C24, 255), FillRule::Winding, tf, None); }
                }
            }
            let hd = r_hide();
            if let Some(p) = rrect(hd.x, hd.y, hd.w, hd.h, 10.0) {
                if hover == Hit::Hide { pm.fill_path(&p, &solid(0x22212A, 255), FillRule::Winding, tf, None); }
                pm.stroke_path(&p, &solid(0x3A3844, 255), &Stroke { width: 1.0, ..Default::default() }, tf, None);
            }
            let dst = std::slice::from_raw_parts_mut(bits as *mut u8, (pw * ph * 4) as usize);
            for (d, sp) in dst.chunks_exact_mut(4).zip(pm.data().chunks_exact(4)) { d[0] = sp[2]; d[1] = sp[1]; d[2] = sp[0]; d[3] = 255; }
        }

        let inst = GetModuleHandleW(std::ptr::null());
        let isz = (62.0 * s) as i32;
        let ico = LoadImageW(inst, 1 as _, IMAGE_ICON, isz, isz, 0);
        if !ico.is_null() { DrawIconEx(mdc, (26.0 * s) as i32, (20.0 * s) as i32, ico as HICON, isz, isz, 0, std::ptr::null_mut(), DI_NORMAL); DestroyIcon(ico as HICON); }
        let mut r = R { x: 104.0, y: 18.0, w: 340.0, h: 44.0 }.sc(s);
        text(mdc, "KONZTE GUARD", &mut r, f.title, TEXT, DT_SINGLELINE | DT_NOPREFIX, 0);
        let mut r = R { x: 106.0, y: 62.0, w: 340.0, h: 20.0 }.sc(s);
        text(mdc, &format!("{} · v{VERSION}", t("sub")), &mut r, f.sub, GOLD, DT_SINGLELINE | DT_NOPREFIX, (2.0 * s) as i32);

        let mut y = card_y;
        for (i, (label, value, tone)) in rows.iter().enumerate() {
            let mut r = R { x: cx + 46.0, y: y + 13.0, w: cw - 64.0, h: 18.0 }.sc(s);
            text(mdc, &label.to_uppercase(), &mut r, f.label, MUTED, DT_SINGLELINE | DT_NOPREFIX, (1.2 * s) as i32);
            let mut r = R { x: cx + 46.0, y: y + 30.0, w: cw - 64.0, h: heights[i] - 34.0 }.sc(s);
            let vc = match tone { Tone::Bad => 0xFF8A8D, Tone::Warn => 0xFFD08A, _ => TEXT };
            text(mdc, value, &mut r, f.value, vc, DT_WORDBREAK | DT_NOPREFIX | DT_END_ELLIPSIS, 0);
            y += heights[i];
        }

        let (label, lc) = match a {
            Act::Launch => (t("b_launch"), 0x17140C), Act::Start => (t("b_start"), 0x17140C), Act::Close => (t("b_close"), 0xFFFFFF),
            Act::Running => (t("b_running"), GREEN), Act::Blocked => (t("b_blocked"), 0xFF8A8D), Act::Wait => ("…", MUTED),
        };
        let mut r = r_main().sc(s);
        text(mdc, &label.to_uppercase(), &mut r, f.btn, lc, DT_SINGLELINE | DT_CENTER | DT_VCENTER | DT_NOPREFIX, (0.8 * s) as i32);
        let mut r = r_hide().sc(s);
        text(mdc, &t("b_hide").to_uppercase(), &mut r, f.btn, if hover == Hit::Hide { TEXT } else { 0xC9C7D3 }, DT_SINGLELINE | DT_CENTER | DT_VCENTER | DT_NOPREFIX, (0.8 * s) as i32);
        let mut r = R { x: 24.0, y: H - 46.0, w: W - 48.0, h: 20.0 }.sc(s);
        text(mdc, t("foot"), &mut r, f.small, DIM, DT_SINGLELINE | DT_CENTER | DT_NOPREFIX, 0);

        BitBlt(hdc, 0, 0, pw, ph, mdc, 0, 0, SRCCOPY);
        SelectObject(mdc, old_bmp);
        DeleteObject(dib as _);
        DeleteDC(mdc);
        EndPaint(hwnd, &ps);
    }
}

pub fn handle(hwnd: HWND, msg: u32, wp: WPARAM, lp: LPARAM, st: Option<&St>, on_main: &dyn Fn()) -> Option<LRESULT> {
    let xy = || ((lp & 0xffff) as i16 as i32, ((lp >> 16) & 0xffff) as i16 as i32);
    unsafe {
        match msg {
            WM_PAINT => { paint(hwnd, st); Some(0) }
            WM_ERASEBKGND => Some(1),
            WM_NCHITTEST => {
                let (sx, sy) = xy();
                let mut p = POINT { x: sx, y: sy };
                ScreenToClient(hwnd, &mut p);
                Some(if hit_test(hwnd, p.x, p.y) == Hit::Caption { HTCAPTION as isize } else { HTCLIENT as isize })
            }
            WM_MOUSEMOVE => {
                let (x, y) = xy();
                let h = hit_test(hwnd, x, y) as u8;
                if HOVER.swap(h, Ordering::SeqCst) != h { InvalidateRect(hwnd, std::ptr::null(), 0); }
                let mut tme = TRACKMOUSEEVENT { cbSize: std::mem::size_of::<TRACKMOUSEEVENT>() as u32, dwFlags: TME_LEAVE, hwndTrack: hwnd, dwHoverTime: 0 };
                TrackMouseEvent(&mut tme);
                Some(0)
            }
            WM_MOUSELEAVE => { if HOVER.swap(0, Ordering::SeqCst) != 0 { InvalidateRect(hwnd, std::ptr::null(), 0); } Some(0) }
            WM_LBUTTONDOWN => {
                let (x, y) = xy();
                PRESSED.store(hit_test(hwnd, x, y) as u8, Ordering::SeqCst);
                SetCapture(hwnd);
                InvalidateRect(hwnd, std::ptr::null(), 0);
                Some(0)
            }
            WM_LBUTTONUP => {
                ReleaseCapture();
                let (x, y) = xy();
                let h = hit_test(hwnd, x, y);
                let p = hit_from(PRESSED.swap(0, Ordering::SeqCst));
                InvalidateRect(hwnd, std::ptr::null(), 0);
                if h == p {
                    match h {
                        Hit::Main => if enabled(action(st)) { on_main() },
                        Hit::Hide | Hit::Close => { ShowWindow(hwnd, SW_HIDE); }
                        Hit::Min => { ShowWindow(hwnd, SW_MINIMIZE); }
                        _ => {}
                    }
                }
                Some(0)
            }
            WM_SETCURSOR => {
                let h = hit_from(HOVER.load(Ordering::SeqCst));
                let hand = match h { Hit::Main => enabled(action(st)), Hit::Hide | Hit::Min | Hit::Close => true, _ => false };
                if hand && (lp & 0xffff) as u32 == HTCLIENT { SetCursor(LoadCursorW(std::ptr::null_mut(), IDC_HAND)); return Some(1); }
                None
            }
            WM_KEYDOWN => {
                match wp as u16 {
                    VK_RETURN => if enabled(action(st)) { on_main() },
                    VK_ESCAPE => { ShowWindow(hwnd, SW_HIDE); }
                    _ => {}
                }
                Some(0)
            }
            WM_DPICHANGED => {
                let r = &*(lp as *const RECT);
                SetWindowPos(hwnd, std::ptr::null_mut(), r.left, r.top, r.right - r.left, r.bottom - r.top, SWP_NOZORDER | SWP_NOACTIVATE);
                InvalidateRect(hwnd, std::ptr::null(), 0);
                Some(0)
            }
            _ => None,
        }
    }
}

