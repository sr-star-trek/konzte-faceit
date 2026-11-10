fn main() {
    let a: Vec<String> = std::env::args().collect();
    let mode = a.get(1).map(|s| s.as_str()).unwrap_or("none");
    #[cfg(windows)]
    unsafe {
        use windows_sys::Win32::System::Memory::*;
        use windows_sys::Win32::System::LibraryLoader::*;
        if mode == "map" {
            let b = std::fs::read(&a[2]).unwrap();
            let p = VirtualAlloc(std::ptr::null(), b.len(), MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE) as *mut u8;
            std::ptr::copy_nonoverlapping(b.as_ptr(), p, b.len());
        }
        if mode == "image" {
            let w: Vec<u16> = a[2].encode_utf16().chain(std::iter::once(0)).collect();
            let h = LoadLibraryExW(w.as_ptr(), std::ptr::null_mut(), DONT_RESOLVE_DLL_REFERENCES);
            eprintln!("loaded: {}", !h.is_null());
        }
    }
    let r = kzguard::game_inject(std::process::id());
    println!("{} sig={} mz={} mods={}", mode, r["sig"], r["mem"]["mz"], r["mods"]);
}
