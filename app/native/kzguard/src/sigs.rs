const K: u8 = 0x5A;
const fn x<const N: usize>(s: &[u8; N]) -> [u8; N] { let mut o = [0u8; N]; let mut i = 0; while i < N { o[i] = s[i] ^ K; i += 1; } o }

pub struct Sig { pub id: &'static str, pub needles: &'static [&'static [u8]], pub min: usize }

static CMI: [&[u8]; 9] = [
    &x(b"o_ResourcesStore_TrySpend"), &x(b"bHostGodModeAll"), &x(b"[CMI] Attempting to Kick PlayFabID"), &x(b"Combat-Master-Internal"),
    &x(b"CM  INTERNAL"), &x(b"bHostSpoofKills"), &x(b"o_GameClient_get_ProfileApi"), &x(b"bTriggerbotVisCheck"), &x(b"bHostKillAllEnemies"),
];
static MELON: [&[u8]; 3] = [&x(b"MelonLoader"), &x(b"--melonloader."), &x(b"melonloader")];
static BEPINEX: [&[u8]; 3] = [&x(b"doorstop_config.ini"), &x(b"BepInEx"), &x(b"UnityDoorstop")];
static CMU: [&[u8]; 2] = [&x(b"CombatMasterHack_Joelmatic"), &x(b"CombatMasterHack-Joelmatic")];
static IMGUI: [&[u8]; 3] = [&x(b"(Main menu bar)"), &x(b"*Missing Text*"), &x(b"NewFrame(): ClearActiveID")];

pub static SIGS: &[Sig] = &[
    Sig { id: "cmi", needles: &CMI, min: 2 },
    Sig { id: "melon", needles: &MELON, min: 1 },
    Sig { id: "bepinex", needles: &BEPINEX, min: 1 },
    Sig { id: "cmu", needles: &CMU, min: 1 },
    Sig { id: "imgui", needles: &IMGUI, min: 2 },
];

pub const MAX_NEEDLE: usize = 64;

pub fn decoded() -> Vec<(&'static str, usize, Vec<Vec<u8>>)> {
    SIGS.iter().map(|s| (s.id, s.min, s.needles.iter().map(|n| n.iter().map(|b| b ^ K).collect()).collect())).collect()
}

pub fn mark(buf: &[u8], dec: &[(&'static str, usize, Vec<Vec<u8>>)], seen: &mut [Vec<bool>]) {
    for (i, (_, _, needles)) in dec.iter().enumerate() {
        for (j, n) in needles.iter().enumerate() {
            if seen[i][j] || n.is_empty() || buf.len() < n.len() { continue; }
            let first = n[0];
            let mut k = 0;
            while k + n.len() <= buf.len() {
                match buf[k..buf.len() - n.len() + 1].iter().position(|b| *b == first) {
                    None => break,
                    Some(p) => { let at = k + p; if &buf[at..at + n.len()] == n.as_slice() { seen[i][j] = true; break; } k = at + 1; }
                }
            }
        }
    }
}

pub fn hits(dec: &[(&'static str, usize, Vec<Vec<u8>>)], seen: &[Vec<bool>]) -> Vec<String> {
    dec.iter().zip(seen).filter(|((_, min, _), s)| s.iter().filter(|b| **b).count() >= *min).map(|((id, _, _), _)| id.to_string()).collect()
}
