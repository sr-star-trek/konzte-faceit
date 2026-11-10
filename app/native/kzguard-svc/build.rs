fn main() {
    if std::env::var("CARGO_CFG_TARGET_OS").as_deref() != Ok("windows") { return; }
    let dir = std::path::PathBuf::from(std::env::var("CARGO_MANIFEST_DIR").unwrap()).join("res");
    let out_dir = std::path::PathBuf::from(std::env::var("OUT_DIR").unwrap());
    let v = std::env::var("CARGO_PKG_VERSION").unwrap();
    let n: Vec<&str> = v.split('.').collect();
    let comma = format!("{},{},{},0", n[0], n.get(1).unwrap_or(&"0"), n.get(2).unwrap_or(&"0"));
    let rc = format!(r#"1 ICON "{ico}"
1 VERSIONINFO
FILEVERSION {comma}
PRODUCTVERSION {comma}
FILEOS 0x40004
FILETYPE 0x1
BEGIN
  BLOCK "StringFileInfo"
  BEGIN
    BLOCK "040904b0"
    BEGIN
      VALUE "CompanyName", "Konzte"
      VALUE "FileDescription", "KONZTE GUARD"
      VALUE "ProductName", "KONZTE GUARD"
      VALUE "FileVersion", "{v}"
      VALUE "ProductVersion", "{v}"
      VALUE "OriginalFilename", "KonzteGuard.exe"
    END
  END
  BLOCK "VarFileInfo"
  BEGIN
    VALUE "Translation", 0x409, 1200
  END
END
"#, ico = dir.join("guard.ico").display().to_string().replace('\\', "/"));
    let rc_path = out_dir.join("guard.rc");
    std::fs::write(&rc_path, rc).unwrap();
    let out = out_dir.join("guard.res");
    println!("cargo:rerun-if-changed=res/guard.ico");
    println!("cargo:rerun-if-changed=Cargo.toml");
    let ok = std::process::Command::new("llvm-rc").args(["/nologo", "/fo"]).arg(&out).arg(&rc_path)
        .status().map(|s| s.success()).unwrap_or(false);
    if ok { println!("cargo:rustc-link-arg-bins={}", out.display()); } else { println!("cargo:warning=llvm-rc не спрацював — exe без значка"); }
}
