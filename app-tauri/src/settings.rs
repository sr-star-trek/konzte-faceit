use serde_json::{Map, Value};
use std::path::PathBuf;
use std::sync::Mutex;

pub const DEFAULT_SERVER: &str = "https://konzte.online/konzte";
static LOCK: Mutex<()> = Mutex::new(());

pub fn user_data() -> PathBuf {
    if let Some(d) = std::env::var_os("KONZTE_USER_DATA").filter(|d| !d.is_empty()) {
        return PathBuf::from(d);
    }
    let base = dirs::config_dir().unwrap_or_else(|| PathBuf::from("."));
    base.join("Konzte Faceit")
}

fn file() -> PathBuf {
    user_data().join("settings.json")
}

pub fn read() -> Map<String, Value> {
    let _g = LOCK.lock().unwrap();
    std::fs::read_to_string(file())
        .ok()
        .and_then(|s| serde_json::from_str::<Value>(&s).ok())
        .and_then(|v| v.as_object().cloned())
        .unwrap_or_default()
}

pub fn write(s: &Map<String, Value>) {
    let _g = LOCK.lock().unwrap();
    let _ = std::fs::create_dir_all(user_data());
    let f = file();
    let tmp = f.with_extension("json.tmp");
    if std::fs::write(&tmp, serde_json::to_string(s).unwrap_or_default()).is_ok() {
        let _ = std::fs::rename(&tmp, &f);
    }
}

pub fn dev() -> bool {
    std::env::var("KONZTE_DEV").ok().as_deref() == Some("1")
}

pub fn server_url() -> String {
    if let Ok(s) = std::env::var("KONZTE_SERVER") {
        if !s.is_empty() {
            return s;
        }
    }
    read()
        .get("server")
        .and_then(|v| v.as_str())
        .filter(|s| !s.is_empty())
        .map(String::from)
        .unwrap_or_else(|| DEFAULT_SERVER.to_string())
}

pub fn truthy(v: Option<&Value>) -> bool {
    match v {
        None | Some(Value::Null) => false,
        Some(Value::Bool(b)) => *b,
        Some(Value::Number(n)) => n.as_f64().map(|x| x != 0.0 && !x.is_nan()).unwrap_or(false),
        Some(Value::String(s)) => !s.is_empty(),
        Some(_) => true,
    }
}

pub fn is_false(v: Option<&Value>) -> bool {
    matches!(v, Some(Value::Bool(false)))
}
