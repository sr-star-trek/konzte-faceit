#![allow(non_snake_case)]
use crate::common::*;
use serde_json::{json, Value};
use std::collections::{BTreeSet, HashMap, HashSet};
use std::ffi::c_void;
use std::path::{Path, PathBuf};
use std::ptr::{null, null_mut};
use windows_sys::Win32::Foundation::*;
use windows_sys::core::BOOL;
use windows_sys::Win32::Security::WinTrust::*;
use windows_sys::Win32::Storage::FileSystem::*;
use windows_sys::Win32::System::Diagnostics::Debug::*;
use windows_sys::Win32::System::Diagnostics::ToolHelp::*;
use windows_sys::Win32::System::Environment::GetCommandLineW;
use windows_sys::Win32::System::LibraryLoader::*;
use windows_sys::Win32::System::Memory::*;
use windows_sys::Win32::System::ProcessStatus::*;
use windows_sys::Win32::System::Threading::*;
use windows_sys::Win32::UI::WindowsAndMessaging::*;

#[link(name = "ntdll")]
extern "system" {
    fn NtQuerySystemInformation(class: i32, info: *mut c_void, len: u32, ret: *mut u32) -> i32;
    fn NtQueryInformationThread(h: HANDLE, class: i32, info: *mut c_void, len: u32, ret: *mut u32) -> i32;
    fn NtQueryInformationProcess(h: HANDLE, class: i32, info: *mut c_void, len: u32, ret: *mut u32) -> i32;
}

pub fn debugged(pid: u32) -> Option<bool> {
    let h = open(pid, PROCESS_QUERY_INFORMATION)?;
    let mut port: usize = 0;
    let st = unsafe { NtQueryInformationProcess(h.0, 7, &mut port as *mut usize as *mut c_void, std::mem::size_of::<usize>() as u32, null_mut()) };
    if st != 0 { return None; }
    Some(port != 0)
}

fn wstr(b: &[u16]) -> String { let n = b.iter().position(|c| *c == 0).unwrap_or(b.len()); String::from_utf16_lossy(&b[..n]) }
fn wz(s: &str) -> Vec<u16> { s.encode_utf16().chain(std::iter::once(0)).collect() }

struct H(HANDLE);
impl Drop for H { fn drop(&mut self) { if !self.0.is_null() && self.0 != INVALID_HANDLE_VALUE { unsafe { CloseHandle(self.0); } } } }
fn open(pid: u32, access: u32) -> Option<H> { let h = unsafe { OpenProcess(access, 0, pid) }; if h.is_null() { None } else { Some(H(h)) } }

pub fn list_procs() -> Vec<Proc> {
    let mut out = Vec::new();
    unsafe {
        let snap = H(CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0));
        if snap.0 == INVALID_HANDLE_VALUE { return out; }
        let mut e: PROCESSENTRY32W = std::mem::zeroed();
        e.dwSize = std::mem::size_of::<PROCESSENTRY32W>() as u32;
        if Process32FirstW(snap.0, &mut e) == 0 { return out; }
        loop {
            out.push(Proc { pid: e.th32ProcessID, name: wstr(&e.szExeFile), argv0: String::new() });
            if Process32NextW(snap.0, &mut e) == 0 { break; }
        }
    }
    out
}

fn image_path(pid: u32) -> Option<PathBuf> {
    let h = open(pid, PROCESS_QUERY_LIMITED_INFORMATION)?;
    let mut buf = vec![0u16; 1024];
    let mut n = buf.len() as u32;
    if unsafe { QueryFullProcessImageNameW(h.0, 0, buf.as_mut_ptr(), &mut n) } == 0 { return None; }
    Some(PathBuf::from(String::from_utf16_lossy(&buf[..n as usize])))
}
pub fn game_exe(p: &Proc) -> Option<PathBuf> { image_path(p.pid).filter(|x| x.exists()) }

fn is_sys_path(lp: &str) -> bool { lp.contains("\\windows\\") }
fn loc_of(lp: &str, game_dir: Option<&str>) -> &'static str {
    if let Some(g) = game_dir { if lp.starts_with(g) { return "game"; } }
    if lp.contains("\\windows\\") { "sys" }
    else if lp.contains("\\program files") || lp.contains("\\programdata\\") { "pf" }
    else if lp.contains("\\temp\\") || lp.contains("\\tmp\\") { "temp" }
    else if lp.contains("\\downloads\\") || lp.contains("\\desktop\\") || lp.contains("\\documents\\") { "user" }
    else if lp.contains("\\appdata\\") { "appdata" }
    else { "other" }
}
static SIGNED: std::sync::Mutex<Option<HashMap<String, (u64, bool)>>> = std::sync::Mutex::new(None);
fn signed(path: &Path) -> bool {
    let key = path.to_string_lossy().to_lowercase();
    let size = std::fs::metadata(path).map(|m| m.len()).unwrap_or(0);
    if let Ok(mut c) = SIGNED.lock() { if let Some((s, v)) = c.get_or_insert_with(HashMap::new).get(&key) { if *s == size { return *v; } } }
    let w = wz(&path.to_string_lossy());
    let ok = unsafe {
        let mut fi: WINTRUST_FILE_INFO = std::mem::zeroed();
        fi.cbStruct = std::mem::size_of::<WINTRUST_FILE_INFO>() as u32;
        fi.pcwszFilePath = w.as_ptr();
        let mut d: WINTRUST_DATA = std::mem::zeroed();
        d.cbStruct = std::mem::size_of::<WINTRUST_DATA>() as u32;
        d.dwUIChoice = WTD_UI_NONE;
        d.fdwRevocationChecks = WTD_REVOKE_NONE;
        d.dwUnionChoice = WTD_CHOICE_FILE;
        d.Anonymous.pFile = &mut fi;
        d.dwStateAction = WTD_STATEACTION_VERIFY;
        d.dwProvFlags = WTD_CACHE_ONLY_URL_RETRIEVAL;
        let mut g = WINTRUST_ACTION_GENERIC_VERIFY_V2;
        let r = WinVerifyTrust(null_mut(), &mut g, &mut d as *mut _ as *mut c_void);
        d.dwStateAction = WTD_STATEACTION_CLOSE;
        WinVerifyTrust(null_mut(), &mut g, &mut d as *mut _ as *mut c_void);
        r == 0
    };
    if let Ok(mut c) = SIGNED.lock() { c.get_or_insert_with(HashMap::new).insert(key, (size, ok)); }
    ok
}
fn company(path: &Path) -> String {
    unsafe {
        let w = wz(&path.to_string_lossy());
        let mut z = 0u32;
        let n = GetFileVersionInfoSizeW(w.as_ptr(), &mut z);
        if n == 0 { return String::new(); }
        let mut buf = vec![0u8; n as usize];
        if GetFileVersionInfoW(w.as_ptr(), 0, n, buf.as_mut_ptr() as *mut c_void) == 0 { return String::new(); }
        let mut p: *mut c_void = null_mut(); let mut len = 0u32;
        let mut tr = (0x0409u16, 0x04B0u16);
        if VerQueryValueW(buf.as_ptr() as *const c_void, wz("\\VarFileInfo\\Translation").as_ptr(), &mut p, &mut len) != 0 && len >= 4 {
            let a = p as *const u16; tr = (*a, *a.add(1));
        }
        let q = wz(&format!("\\StringFileInfo\\{:04x}{:04x}\\CompanyName", tr.0, tr.1));
        if VerQueryValueW(buf.as_ptr() as *const c_void, q.as_ptr(), &mut p, &mut len) == 0 || len == 0 { return String::new(); }
        let s = std::slice::from_raw_parts(p as *const u16, len as usize);
        wstr(s).chars().take(80).collect()
    }
}
fn proc_info(pid: u32) -> Value {
    let path = image_path(pid);
    let name = path.as_ref().map(|p| base_name(&p.to_string_lossy())).unwrap_or_default();
    let lp = path.as_ref().map(|p| p.to_string_lossy().to_lowercase()).unwrap_or_default();
    let (comp, sig) = match &path { Some(p) if p.exists() => (company(p), Some(is_sys_path(&lp) || signed(p))), _ => (String::new(), None) };
    let shown = path.as_ref().map(|p| { let s = p.to_string_lossy(); allow_path(&s); mask_path(&s) }).unwrap_or_default();
    json!({ "name": name, "company": comp, "sys": lp.contains("\\program files") || lp.contains("\\windows\\"), "signed": sig, "loc": if lp.is_empty() { "?" } else { loc_of(&lp, None) }, "path": shown })
}

pub fn modules(p: &Proc, game_dir: Option<&Path>) -> (Vec<String>, Value) {
    let gd = game_dir.map(|g| format!("{}\\", g.to_string_lossy().to_lowercase()));
    let Some(h) = open(p.pid, PROCESS_QUERY_INFORMATION | PROCESS_VM_READ) else { return (Vec::new(), json!({ "err": "open" })) };
    let mut mods: Vec<HMODULE> = vec![null_mut(); 1024];
    let mut need = 0u32;
    unsafe {
        if EnumProcessModulesEx(h.0, mods.as_mut_ptr(), (mods.len() * 8) as u32, &mut need, LIST_MODULES_ALL) == 0 { return (Vec::new(), json!({ "err": "enum" })); }
        if need as usize > mods.len() * 8 { mods = vec![null_mut(); need as usize / 8 + 16]; EnumProcessModulesEx(h.0, mods.as_mut_ptr(), (mods.len() * 8) as u32, &mut need, LIST_MODULES_ALL); }
    }
    mods.truncate((need as usize / 8).min(mods.len()));
    let mut names = BTreeSet::new();
    let mut ranges: Vec<(usize, usize)> = Vec::new();
    let mut odd = Vec::new();
    let mut scan_mods: Vec<(usize, usize)> = Vec::new();
    for m in &mods {
        let mut buf = vec![0u16; 1024];
        let n = unsafe { GetModuleFileNameExW(h.0, *m, buf.as_mut_ptr(), buf.len() as u32) };
        let mut mi: MODULEINFO = unsafe { std::mem::zeroed() };
        if unsafe { GetModuleInformation(h.0, *m, &mut mi, std::mem::size_of::<MODULEINFO>() as u32) } != 0 { ranges.push((mi.lpBaseOfDll as usize, mi.lpBaseOfDll as usize + mi.SizeOfImage as usize)); }
        if n == 0 { continue; }
        let path = PathBuf::from(String::from_utf16_lossy(&buf[..n as usize]));
        let lp = path.to_string_lossy().to_lowercase();
        let name = base_name(&lp);
        names.insert(name.clone());
        let loc = loc_of(&lp, gd.as_deref());
        if loc == "sys" { continue; }
        if loc == "game" {
            if (mi.SizeOfImage as usize) <= SIG_PER_ALLOC && mi.SizeOfImage > 0 && !signed(&path) { scan_mods.push((mi.lpBaseOfDll as usize, mi.SizeOfImage as usize)); }
            continue;
        }
        if !signed(&path) {
            if odd.len() < 40 { odd.push(json!({ "name": name, "loc": loc, "signed": false })); }
            if mi.SizeOfImage > 0 { scan_mods.push((mi.lpBaseOfDll as usize, mi.SizeOfImage as usize)); }
        }
    }
    ranges.sort();
    let in_mod = |a: usize| ranges.iter().any(|(s, e)| a >= *s && a < *e);
    let (mut rx, mut rx_bytes, mut mz) = (0u64, 0u64, 0u64);
    let mut exec_alloc: HashSet<usize> = HashSet::new();
    let mut addr = 0usize;
    unsafe {
        loop {
            let mut mbi: MEMORY_BASIC_INFORMATION = std::mem::zeroed();
            if VirtualQueryEx(h.0, addr as *const c_void, &mut mbi, std::mem::size_of::<MEMORY_BASIC_INFORMATION>()) == 0 { break; }
            let exec = mbi.Protect & (PAGE_EXECUTE | PAGE_EXECUTE_READ | PAGE_EXECUTE_READWRITE | PAGE_EXECUTE_WRITECOPY) != 0;
            if mbi.State == MEM_COMMIT && mbi.Type == MEM_PRIVATE && exec {
                rx += 1; rx_bytes += mbi.RegionSize as u64;
                exec_alloc.insert(mbi.AllocationBase as usize);
                if mbi.BaseAddress == mbi.AllocationBase {
                    let mut b = [0u8; 2]; let mut got = 0usize;
                    if ReadProcessMemory(h.0, mbi.BaseAddress, b.as_mut_ptr() as *mut c_void, 2, &mut got) != 0 && got == 2 && &b == b"MZ" { mz += 1; }
                }
            }
            let next = (mbi.BaseAddress as usize).wrapping_add(mbi.RegionSize);
            if next <= addr || rx > 100_000 { break; }
            addr = next;
        }
    }
    let (mut threads, mut foreign) = (0u32, 0u32);
    unsafe {
        let snap = H(CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD, 0));
        if snap.0 != INVALID_HANDLE_VALUE {
            let mut te: THREADENTRY32 = std::mem::zeroed();
            te.dwSize = std::mem::size_of::<THREADENTRY32>() as u32;
            if Thread32First(snap.0, &mut te) != 0 {
                loop {
                    if te.th32OwnerProcessID == p.pid {
                        threads += 1;
                        let th = OpenThread(THREAD_QUERY_INFORMATION, 0, te.th32ThreadID);
                        if !th.is_null() {
                            let th = H(th);
                            let mut start: usize = 0;
                            if NtQueryInformationThread(th.0, 9, &mut start as *mut _ as *mut c_void, 8, null_mut()) == 0 && start != 0 && !in_mod(start) { foreign += 1; }
                        }
                    }
                    if Thread32Next(snap.0, &mut te) == 0 { break; }
                }
            }
        }
    }
    let sig = std::panic::catch_unwind(std::panic::AssertUnwindSafe(|| sig_scan(h.0, &scan_mods, &exec_alloc))).unwrap_or_default();
    (names.into_iter().take(600).collect(), json!({ "mods": odd, "mem": { "rx": rx, "rxKb": rx_bytes / 1024, "mz": mz }, "threads": { "n": threads, "foreign": foreign }, "sig": sig }))
}

const SIG_PER_ALLOC: usize = 48 << 20;
const SIG_TOTAL: usize = 192 << 20;
const SIG_CHUNK: usize = 1 << 20;
fn readable(p: u32) -> bool { p & (PAGE_NOACCESS | PAGE_GUARD) == 0 && p != 0 }
fn sig_scan(h: HANDLE, mods: &[(usize, usize)], exec_alloc: &HashSet<usize>) -> Vec<String> {
    let dec = crate::sigs::decoded();
    let mut seen: Vec<Vec<bool>> = dec.iter().map(|(_, _, n)| vec![false; n.len()]).collect();
    let mut spans: Vec<(usize, usize)> = mods.iter().filter(|(_, n)| *n <= SIG_PER_ALLOC).map(|(b, n)| (*b, b + n)).collect();
    let mut per: HashMap<usize, usize> = HashMap::new();
    let mut addr = 0usize;
    unsafe {
        loop {
            let mut mbi: MEMORY_BASIC_INFORMATION = std::mem::zeroed();
            if VirtualQueryEx(h, addr as *const c_void, &mut mbi, std::mem::size_of::<MEMORY_BASIC_INFORMATION>()) == 0 { break; }
            let ab = mbi.AllocationBase as usize;
            if mbi.State == MEM_COMMIT && mbi.Type == MEM_PRIVATE && readable(mbi.Protect) && exec_alloc.contains(&ab) {
                let used = per.entry(ab).or_insert(0);
                if *used + mbi.RegionSize <= SIG_PER_ALLOC { *used += mbi.RegionSize; spans.push((mbi.BaseAddress as usize, mbi.BaseAddress as usize + mbi.RegionSize)); }
            }
            let next = (mbi.BaseAddress as usize).wrapping_add(mbi.RegionSize);
            if next <= addr { break; }
            addr = next;
        }
    }
    let mut total = 0usize;
    let mut buf = vec![0u8; SIG_CHUNK + crate::sigs::MAX_NEEDLE];
    'outer: for (s, e) in spans {
        let mut a = s;
        while a < e {
            if total >= SIG_TOTAL { break 'outer; }
            let want = (e - a).min(SIG_CHUNK + crate::sigs::MAX_NEEDLE);
            let mut got = 0usize;
            if unsafe { ReadProcessMemory(h, a as *const c_void, buf.as_mut_ptr() as *mut c_void, want, &mut got) } != 0 && got > 0 {
                crate::sigs::mark(&buf[..got], &dec, &mut seen);
            } else {
                let mut p = a;
                while p < a + want {
                    let n = (4096 - (p & 4095)).min(a + want - p);
                    let mut g = 0usize;
                    if unsafe { ReadProcessMemory(h, p as *const c_void, buf.as_mut_ptr() as *mut c_void, n, &mut g) } != 0 && g > 0 { crate::sigs::mark(&buf[..g], &dec, &mut seen); }
                    p += n;
                }
            }
            total += want;
            if a + want >= e { break; }
            a += SIG_CHUNK;
        }
    }
    crate::sigs::hits(&dec, &seen)
}

#[repr(C)]
struct HandleEx { object: *mut c_void, pid: usize, handle: usize, access: u32, backtrace: u16, typ: u16, attrs: u32, reserved: u32 }

pub fn handles(game: u32) -> Value {
    const VM: u32 = 0x8 | 0x10 | 0x20;
    let me = std::process::id();
    unsafe {
        let self_h = match open(me, PROCESS_QUERY_LIMITED_INFORMATION) { Some(h) => h, None => return json!({ "err": "self" }) };
        let game_h = open(game, PROCESS_QUERY_LIMITED_INFORMATION);
        let mut len: u32 = 1 << 20;
        let mut buf: Vec<u8>;
        let mut st;
        let mut tries = 0;
        loop {
            buf = vec![0u8; len as usize];
            let mut ret = 0u32;
            st = NtQuerySystemInformation(64, buf.as_mut_ptr() as *mut c_void, len, &mut ret);
            if st as u32 == 0xC0000004 && tries < 8 { tries += 1; len = (len * 2).max(ret + (1 << 16)); continue; }
            break;
        }
        if st != 0 { return json!({ "err": format!("ntq {:X}", st as u32) }); }
        let count = *(buf.as_ptr() as *const usize);
        let base = buf.as_ptr().add(16) as *const HandleEx;
        let max = (buf.len() - 16) / std::mem::size_of::<HandleEx>();
        let n = count.min(max);
        let (mut proc_type, mut game_obj): (i32, *mut c_void) = (-1, null_mut());
        for i in 0..n {
            let e = &*base.add(i);
            if e.pid as u32 != me { continue; }
            if e.handle == self_h.0 as usize { proc_type = e.typ as i32; }
            if let Some(g) = &game_h { if e.handle == g.0 as usize { game_obj = e.object; } }
        }
        if proc_type < 0 { return json!({ "err": "type" }); }
        let by_obj = !game_obj.is_null();
        let mut owners: HashMap<u32, u32> = HashMap::new();
        let mut opened: HashMap<u32, Option<H>> = HashMap::new();
        for i in 0..n {
            let e = &*base.add(i);
            let pid = e.pid as u32;
            if e.typ as i32 != proc_type || pid == game || pid == me || pid <= 4 || e.access & VM == 0 { continue; }
            if by_obj { if e.object == game_obj { *owners.entry(pid).or_default() |= e.access; } continue; }
            let owner = opened.entry(pid).or_insert_with(|| open(pid, PROCESS_DUP_HANDLE));
            let Some(o) = owner else { continue };
            let mut dup: HANDLE = null_mut();
            if DuplicateHandle(o.0, e.handle as HANDLE, GetCurrentProcess(), &mut dup, PROCESS_QUERY_LIMITED_INFORMATION, 0, 0) == 0 { continue; }
            let d = H(dup);
            if GetProcessId(d.0) == game { *owners.entry(pid).or_default() |= e.access; }
        }
        Value::Array(owners.iter().map(|(pid, a)| { let mut v = proc_info(*pid); v["read"] = json!(a & 0x10 != 0); v["write"] = json!(a & 0x20 != 0); v }).collect())
    }
}

unsafe extern "system" fn collect(h: HWND, l: LPARAM) -> BOOL { (*(l as *mut Vec<HWND>)).push(h); 1 }
pub fn overlays(game: u32) -> Value {
    let mut wins: Vec<HWND> = Vec::new();
    unsafe { EnumWindows(Some(collect), &mut wins as *mut _ as LPARAM); }
    let mut g = RECT { left: 0, top: 0, right: 0, bottom: 0 }; let mut area = 0i64;
    for &h in &wins {
        let mut pid = 0u32; unsafe { GetWindowThreadProcessId(h, &mut pid); }
        if pid != game || unsafe { IsWindowVisible(h) } == 0 { continue; }
        let mut r: RECT = unsafe { std::mem::zeroed() };
        if unsafe { GetWindowRect(h, &mut r) } == 0 { continue; }
        let a = (r.right - r.left) as i64 * (r.bottom - r.top) as i64;
        if a > area { area = a; g = r; }
    }
    if area <= 0 { return json!([]); }
    let mut out = Vec::new(); let mut seen = HashSet::new();
    for &h in &wins {
        let mut pid = 0u32; unsafe { GetWindowThreadProcessId(h, &mut pid); }
        if pid == game || pid == std::process::id() || unsafe { IsWindowVisible(h) } == 0 { continue; }
        let ex = unsafe { GetWindowLongW(h, GWL_EXSTYLE) } as u32;
        let (top, layered, transparent) = (ex & WS_EX_TOPMOST != 0, ex & WS_EX_LAYERED != 0, ex & WS_EX_TRANSPARENT != 0);
        let mut aff = 0u32; unsafe { GetWindowDisplayAffinity(h, &mut aff); }
        let hidden = aff == 0x11;
        if !hidden && !(top && (layered || transparent)) { continue; }
        let mut r: RECT = unsafe { std::mem::zeroed() };
        if unsafe { GetWindowRect(h, &mut r) } == 0 { continue; }
        let ix = 0i64.max((r.right.min(g.right) - r.left.max(g.left)) as i64);
        let iy = 0i64.max((r.bottom.min(g.bottom) - r.top.max(g.top)) as i64);
        let cover = (100 * ix * iy / area) as i32;
        if cover < if hidden { 10 } else { 30 } { continue; }
        let mut cls = [0u16; 256]; unsafe { GetClassNameW(h, cls.as_mut_ptr(), 256); }
        let cls = wstr(&cls);
        if !seen.insert(format!("{pid}|{cls}")) { continue; }
        let mut v = proc_info(pid);
        v["cls"] = json!(cls); v["cover"] = json!(cover); v["clickThrough"] = json!(transparent); v["hidden"] = json!(hidden);
        out.push(v);
    }
    Value::Array(out)
}

pub fn drivers() -> Vec<String> {
    let mut need = 0u32;
    unsafe {
        let mut probe = [null_mut::<c_void>(); 1];
        EnumDeviceDrivers(probe.as_mut_ptr(), 8, &mut need);
        let mut bases = vec![null_mut::<c_void>(); (need as usize / 8).max(1)];
        if EnumDeviceDrivers(bases.as_mut_ptr(), (bases.len() * 8) as u32, &mut need) == 0 { return Vec::new(); }
        bases.iter().filter_map(|b| { let mut n = [0u16; 260]; if GetDeviceDriverBaseNameW(*b, n.as_mut_ptr(), 260) == 0 { None } else { Some(wstr(&n).to_lowercase()) } }).collect()
    }
}

fn drivers_full() -> Vec<Value> {
    let mut need = 0u32;
    let root = std::env::var("SystemRoot").unwrap_or_else(|_| "C:\\Windows".into());
    let drive = std::env::var("SystemDrive").unwrap_or_else(|_| "C:".into());
    unsafe {
        let mut probe = [null_mut::<c_void>(); 1];
        EnumDeviceDrivers(probe.as_mut_ptr(), 8, &mut need);
        let mut bases = vec![null_mut::<c_void>(); (need as usize / 8).max(1)];
        if EnumDeviceDrivers(bases.as_mut_ptr(), (bases.len() * 8) as u32, &mut need) == 0 { return Vec::new(); }
        let mut seen = HashSet::new();
        bases.iter().filter_map(|b| {
            let mut n = [0u16; 260];
            if GetDeviceDriverBaseNameW(*b, n.as_mut_ptr(), 260) == 0 { return None; }
            let name = wstr(&n).to_lowercase();
            if !seen.insert(name.clone()) { return None; }
            let mut f = [0u16; 520];
            let raw = if GetDeviceDriverFileNameW(*b, f.as_mut_ptr(), 520) == 0 { String::new() } else { wstr(&f) };
            let lr = raw.to_lowercase();
            let real = if lr.starts_with("\\systemroot\\") { format!("{root}{}", &raw[11..]) }
                else if lr.starts_with("\\??\\") { raw[4..].to_string() }
                else if lr.starts_with("\\windows\\") { format!("{drive}{raw}") }
                else if raw.is_empty() { String::new() }
                else { format!("{root}\\System32\\drivers\\{name}") };
            if !real.is_empty() { allow_path(&real); }
            Some(json!({ "name": name, "path": if real.is_empty() { String::new() } else { mask_path(&real) } }))
        }).take(500).collect()
    }
}

pub fn deep(game: u32) -> Value {
    let h = std::panic::catch_unwind(|| handles(game)).unwrap_or_else(|_| json!({ "err": "panic" }));
    let o = std::panic::catch_unwind(|| overlays(game)).unwrap_or_else(|_| json!({ "err": "panic" }));
    json!({ "v": 2, "handles": h, "overlays": o, "drivers": drivers() })
}

pub fn sys() -> Value {
    unsafe {
        let mut ci = [8u32, 0u32];
        let ci_ok = NtQuerySystemInformation(103, ci.as_mut_ptr() as *mut c_void, 8, null_mut()) == 0;
        let mut kd = [0u8; 2];
        let kd_ok = NtQuerySystemInformation(35, kd.as_mut_ptr() as *mut c_void, 2, null_mut()) == 0;
        let f = ci[1];
        json!({ "os": "win", "ci": if ci_ok { json!(f) } else { json!(null) }, "testsign": ci_ok && f & 0x2 != 0, "dse": if ci_ok { json!(f & 0x1 != 0) } else { json!(null) },
                "debugmode": ci_ok && f & 0x80 != 0, "kdbg": kd_ok && kd[0] != 0 && kd[1] == 0, "hv": hypervisor() })
    }
}

pub fn self_check() -> Value {
    unsafe {
        let mut remote: BOOL = 0;
        CheckRemoteDebuggerPresent(GetCurrentProcess(), &mut remote);
        let cl = GetCommandLineW();
        let mut n = 0; while *cl.add(n) != 0 && n < 32768 { n += 1; }
        let cmd = String::from_utf16_lossy(std::slice::from_raw_parts(cl, n));
        let sbx = !GetModuleHandleW(wz("SbieDll.dll").as_ptr()).is_null();
        json!({ "dbg": IsDebuggerPresent() != 0 || remote != 0, "inspect": cmd.contains("--inspect") || cmd.contains("--remote-debugging"), "sbx": sbx, "preload": false })
    }
}

pub fn module_path() -> Option<PathBuf> {
    unsafe {
        let mut m: HMODULE = null_mut();
        if GetModuleHandleExW(GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS | GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT, module_path as *const () as *const u16, &mut m) == 0 { return None; }
        let mut buf = vec![0u16; 1024];
        let n = GetModuleFileNameW(m, buf.as_mut_ptr(), buf.len() as u32);
        if n == 0 { None } else { Some(PathBuf::from(String::from_utf16_lossy(&buf[..n as usize]))) }
    }
}
#[repr(C)]
struct OsVer { size: u32, major: u32, minor: u32, build: u32, platform: u32, sp: [u16; 128] }
#[link(name = "ntdll")]
extern "system" { fn RtlGetVersion(v: *mut OsVer) -> i32; }

fn windows_report(game: Option<u32>) -> Value {
    let mut wins: Vec<HWND> = Vec::new();
    unsafe { EnumWindows(Some(collect), &mut wins as *mut _ as LPARAM); }
    let mut g = RECT { left: 0, top: 0, right: 0, bottom: 0 }; let mut area = 0i64;
    if let Some(gp) = game {
        for &h in &wins {
            let mut pid = 0u32; unsafe { GetWindowThreadProcessId(h, &mut pid); }
            if pid != gp || unsafe { IsWindowVisible(h) } == 0 { continue; }
            let mut r: RECT = unsafe { std::mem::zeroed() };
            if unsafe { GetWindowRect(h, &mut r) } == 0 { continue; }
            let a = (r.right - r.left) as i64 * (r.bottom - r.top) as i64;
            if a > area { area = a; g = r; }
        }
    }
    let mut out = Vec::new(); let mut seen = HashSet::new(); let mut info: HashMap<u32, Value> = HashMap::new();
    for &h in &wins {
        let mut pid = 0u32; unsafe { GetWindowThreadProcessId(h, &mut pid); }
        if Some(pid) == game || pid == std::process::id() || unsafe { IsWindowVisible(h) } == 0 { continue; }
        let mut r: RECT = unsafe { std::mem::zeroed() };
        if unsafe { GetWindowRect(h, &mut r) } == 0 || r.right - r.left < 8 || r.bottom - r.top < 8 { continue; }
        let ex = unsafe { GetWindowLongW(h, GWL_EXSTYLE) } as u32;
        let (top, layered, transparent) = (ex & WS_EX_TOPMOST != 0, ex & WS_EX_LAYERED != 0, ex & WS_EX_TRANSPARENT != 0);
        let mut aff = 0u32; unsafe { GetWindowDisplayAffinity(h, &mut aff); }
        let hidden = aff == 0x11;
        let cover = if area > 0 {
            let ix = 0i64.max((r.right.min(g.right) - r.left.max(g.left)) as i64);
            let iy = 0i64.max((r.bottom.min(g.bottom) - r.top.max(g.top)) as i64);
            (100 * ix * iy / area) as i32
        } else { 0 };
        if area > 0 { if cover < 1 && !hidden { continue; } } else if !top && !hidden { continue; }
        let mut cls = [0u16; 256]; unsafe { GetClassNameW(h, cls.as_mut_ptr(), 256); }
        let cls = wstr(&cls);
        if !seen.insert(format!("{pid}|{cls}")) { continue; }
        let mut v = info.entry(pid).or_insert_with(|| proc_info(pid)).clone();
        v["cls"] = json!(cls); v["cover"] = json!(cover); v["top"] = json!(top); v["layered"] = json!(layered); v["clickThrough"] = json!(transparent); v["hidden"] = json!(hidden);
        out.push(v);
        if out.len() >= 80 { break; }
    }
    Value::Array(out)
}

fn modules_report(p: &Proc, game_dir: Option<&Path>) -> Value {
    let gd = game_dir.map(|g| format!("{}\\", g.to_string_lossy().to_lowercase()));
    let Some(h) = open(p.pid, PROCESS_QUERY_INFORMATION | PROCESS_VM_READ) else { return json!([]) };
    let mut mods: Vec<HMODULE> = vec![null_mut(); 2048];
    let mut need = 0u32;
    unsafe { if EnumProcessModulesEx(h.0, mods.as_mut_ptr(), (mods.len() * 8) as u32, &mut need, LIST_MODULES_ALL) == 0 { return json!([]); } }
    mods.truncate((need as usize / 8).min(mods.len()));
    let mut out = Vec::new();
    for m in &mods {
        let mut buf = vec![0u16; 1024];
        let n = unsafe { GetModuleFileNameExW(h.0, *m, buf.as_mut_ptr(), buf.len() as u32) };
        if n == 0 { continue; }
        let path = PathBuf::from(String::from_utf16_lossy(&buf[..n as usize]));
        let lp = path.to_string_lossy().to_lowercase();
        let loc = loc_of(&lp, gd.as_deref());
        let (sig, comp) = if loc == "sys" { (json!(null), String::new()) } else { (json!(signed(&path)), company(&path)) };
        allow_path(&path.to_string_lossy());
        out.push(json!({ "name": base_name(&path.to_string_lossy()), "loc": loc, "signed": sig, "company": comp, "path": mask_path(&path.to_string_lossy()) }));
        if out.len() >= 400 { break; }
    }
    Value::Array(out)
}

pub fn report(game: Option<&Proc>, game_dir: Option<&Path>) -> Value {
    let me = std::process::id();
    reset_allowed();
    let mut items = Vec::new();
    for p in list_procs() {
        if p.pid <= 4 || p.pid == me { continue; }
        let mut v = proc_info(p.pid);
        if v["name"].as_str().unwrap_or("").is_empty() { v["name"] = json!(base_name(&p.name)); v["loc"] = json!("?"); }
        items.push(v);
    }
    let procs = group_by_name(items, 600);
    let mods = game.map(|g| modules_report(g, game_dir)).unwrap_or(json!([]));
    let (ver, ram, up) = unsafe {
        let mut v: OsVer = std::mem::zeroed(); v.size = std::mem::size_of::<OsVer>() as u32;
        let ver = if RtlGetVersion(&mut v) == 0 { format!("Windows {}.{}.{}", v.major, v.minor, v.build) } else { String::new() };
        let mut ms: windows_sys::Win32::System::SystemInformation::MEMORYSTATUSEX = std::mem::zeroed();
        ms.dwLength = std::mem::size_of::<windows_sys::Win32::System::SystemInformation::MEMORYSTATUSEX>() as u32;
        let ram = if windows_sys::Win32::System::SystemInformation::GlobalMemoryStatusEx(&mut ms) != 0 { ms.ullTotalPhys / (1 << 20) } else { 0 };
        (ver, ram, windows_sys::Win32::System::SystemInformation::GetTickCount64() / 60000)
    };
    let mut drv = drivers_full(); drv.sort_by(|a, b| a["name"].as_str().cmp(&b["name"].as_str()));
    json!({ "v": 1, "procs": procs, "windows": windows_report(game.map(|g| g.pid)), "mods": mods, "drivers": drv,
            "sys": { "os": ver, "cpu": cpu_brand(), "ramMb": ram, "upMin": up } })
}

#[allow(dead_code)]
fn _unused() { let _ = null::<u8>(); }
