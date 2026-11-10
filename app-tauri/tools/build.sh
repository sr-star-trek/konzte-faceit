#!/bin/sh
set -e
cd "$(dirname "$0")/.."
export PATH="$HOME/.local/share/kz-xwin/bin:$HOME/.cargo/bin:$PATH"
VER=$(sed -n 's/^version = "\(.*\)"/\1/p' Cargo.toml | head -1)
OUT="$HOME/Downloads/Konzte_build/tauri-$VER"
mkdir -p "$OUT"
./prepare.sh
what=${1:-all}
if [ "$what" = all ] || [ "$what" = linux ]; then
  APPIMAGE_EXTRACT_AND_RUN=1 cargo tauri build --bundles appimage
  cp "target/release/bundle/appimage/Konzte Faceit_${VER}_amd64.AppImage" "$OUT/Konzte-Tauri.AppImage"
  cp target/release/konzte "$OUT/konzte-linux-x64"
fi
if [ "$what" = all ] || [ "$what" = win ]; then
  (cd ../app/native/kzguard-svc && cargo xwin build --release --target x86_64-pc-windows-msvc)
  cp ../app/native/kzguard-svc/target/x86_64-pc-windows-msvc/release/KonzteGuard.exe guard/KonzteGuard.exe
  WAYLAND_DISPLAY= DISPLAY= cargo tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc --bundles nsis
  cp "target/x86_64-pc-windows-msvc/release/bundle/nsis/Konzte Faceit_${VER}_x64-setup.exe" "$OUT/Konzte-Tauri-Setup.exe"
fi
node ../app/tools/guard-ref.js tauri
cd "$OUT" && sha256sum Konzte-Tauri* konzte-linux-x64 2>/dev/null > SHA256SUMS.txt; ls -la "$OUT"
