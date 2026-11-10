use std::{env, fs, path::Path};

fn main() {
    #[cfg(feature = "node")]
    napi_build::setup();
    println!("cargo:rerun-if-changed=keys/key.hex");
    println!("cargo:rerun-if-changed=keys/kid");
    let hex = fs::read_to_string("keys/key.hex").expect("keys/key.hex");
    let kid = fs::read_to_string("keys/kid").expect("keys/kid").trim().to_string();
    let key: Vec<u8> = (0..hex.trim().len() / 2).map(|i| u8::from_str_radix(&hex.trim()[i * 2..i * 2 + 2], 16).unwrap()).collect();
    let mut seed: u64 = std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_nanos() as u64 ^ 0x9E3779B97F4A7C15;
    let mask: Vec<u8> = (0..key.len()).map(|_| { seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17; (seed >> 24) as u8 }).collect();
    let enc: Vec<u8> = key.iter().zip(&mask).map(|(k, m)| k ^ m).collect();
    let out = Path::new(&env::var("OUT_DIR").unwrap()).join("key.rs");
    fs::write(out, format!("pub const KID: &str = {:?};\npub static KA: [u8; {}] = {:?};\npub static KB: [u8; {}] = {:?};\n", kid, enc.len(), enc, mask.len(), mask)).unwrap();
}
