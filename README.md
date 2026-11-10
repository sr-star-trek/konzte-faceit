# Konzte Faceit: client and KONZTE GUARD

Source code of the Konzte Faceit desktop client and the KONZTE GUARD anti-cheat for Combat Master.
Konzte is shutting down on December 2, 2026. The code is published so anyone can check what the installer actually did.

## What's here

| Path | What it is |
|---|---|
| `app-tauri/` | Desktop shell (Rust, Tauri): window, tray, UI updater, Discord Rich Presence, Steam/screenshot helpers |
| `app-tauri/src/guard.rs` | KONZTE GUARD inside the client: scan reports and file uploads for staff review |
| `app-tauri/guard/installer-hooks.nsh` | Installer hooks: installs the GUARD service and removes it when Konzte is uninstalled |
| `app/native/kzguard/` | GUARD core library (process/module/driver checks, cheat signatures in `sigs.rs`) |
| `app/native/kzguard-svc/` | `KonzteGuard.exe`: Windows service + tray window |
| `app/winscan.cs` | Windows deep scan run through PowerShell |
| `app/src/` | The interface (HTML/CSS/JS) |

Images, sounds and other art are not included. The server is not included either.

## What KONZTE GUARD does

The GUARD service runs in the background and waits for Combat Master to start. It sends these results to the Konzte server:

- system settings that kernel cheats rely on: test signing, driver signature enforcement, kernel debugging;
- running processes and the modules loaded into the game, compared against known cheat signatures (CM Internal, MelonLoader/BepInEx, unlockers, Process Hacker during a match);
- injected code in the game process: executable private memory of Combat Master is scanned for cheat signatures;
- hashes of files in the game folder, to detect modified game files;
- a full report of programs, libraries and drivers loaded on the system (paths outside the game folder are masked);
- a hardware ID hash, used to tie bans to a device.

When staff review a suspicious player, they can request a copy of a file. Only two kinds of files can be sent:
- a file inside the Combat Master folder;
- an executable, library or driver that appeared in that player's own GUARD report.

Paths with `..`, absolute paths and anything else are rejected (`upload_inner` in `app-tauri/src/guard.rs`).

GUARD does not read documents, browser data, passwords or messages, and it has no keylogger or screen capture. The client only reads the Combat Master screenshots folder in Steam, so players can pick a scoreboard to submit. The service updates itself only with builds verified against the Konzte ed25519 key (`app/native/kzguard-svc/src/update.rs`).

## Why antivirus sandboxes flag it

The installer sets up a Windows service with administrator rights, enumerates processes and loaded drivers, reads the game's memory, talks to a server and updates itself. Behavioural sandboxes score exactly these actions as suspicious, and the binaries are not code-signed with a paid certificate. Every anti-cheat behaves the same way.

## Removing it

Windows Settings → Apps → Konzte → Uninstall. The installer hook stops and deletes the KONZTE GUARD service as part of the uninstall.
