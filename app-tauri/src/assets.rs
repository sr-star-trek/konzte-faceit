use include_dir::{include_dir, Dir};
use std::borrow::Cow;
use std::path::{Path, PathBuf};
use std::sync::RwLock;
use tauri::http::{header, Request, Response, StatusCode};

pub static BUNDLED: Dir<'static> = include_dir!("$CARGO_MANIFEST_DIR/../app/src");
static SHELL: Dir<'static> = include_dir!("$CARGO_MANIFEST_DIR/shell");

#[derive(Clone, Debug)]
pub enum UiSource {
    Bundled,
    Disk(PathBuf),
}

static ACTIVE: RwLock<UiSource> = RwLock::new(UiSource::Bundled);

pub fn set_active(src: UiSource) {
    *ACTIVE.write().unwrap() = src;
}
pub fn active() -> UiSource {
    ACTIVE.read().unwrap().clone()
}

pub fn clean_rel(p: &str) -> Option<String> {
    let mut out = Vec::new();
    for seg in p.split(['/', '\\']) {
        match seg {
            "" | "." => continue,
            ".." => return None,
            s if s.contains(':') => return None,
            s => out.push(s),
        }
    }
    if out.is_empty() {
        None
    } else {
        Some(out.join("/"))
    }
}

pub fn ui_file(rel: &str) -> Option<Cow<'static, [u8]>> {
    let rel = clean_rel(rel)?;
    match active() {
        UiSource::Bundled => BUNDLED.get_file(&rel).map(|f| Cow::Borrowed(f.contents())),
        UiSource::Disk(dir) => std::fs::read(dir.join(&rel)).ok().map(Cow::Owned),
    }
}

pub fn shell_file(rel: &str) -> Option<&'static [u8]> {
    SHELL.get_file(clean_rel(rel)?).map(|f| f.contents())
}

pub fn bundled_file(rel: &str) -> Option<&'static [u8]> {
    BUNDLED.get_file(clean_rel(rel)?).map(|f| f.contents())
}

fn test_file(rel: &str) -> Option<Cow<'static, [u8]>> {
    if !cfg!(debug_assertions) {
        return None;
    }
    let dir = std::env::var_os("KONZTE_TEST_DIR")?;
    std::fs::read(Path::new(&dir).join(clean_rel(rel)?)).ok().map(Cow::Owned)
}

fn mime(path: &str) -> String {
    let ext = Path::new(path).extension().and_then(|e| e.to_str()).unwrap_or("").to_ascii_lowercase();
    match ext.as_str() {
        "html" | "htm" => "text/html; charset=utf-8".into(),
        "js" | "mjs" => "text/javascript; charset=utf-8".into(),
        "css" => "text/css; charset=utf-8".into(),
        "json" => "application/json; charset=utf-8".into(),
        "svg" => "image/svg+xml".into(),
        "ogg" | "oga" => "audio/ogg".into(),
        "wasm" => "application/wasm".into(),
        "traineddata" => "application/octet-stream".into(),
        _ => mime_guess::from_path(path).first_or_octet_stream().essence_str().to_string(),
    }
}

fn percent_decode(s: &str) -> String {
    let b = s.as_bytes();
    let mut out = Vec::with_capacity(b.len());
    let mut i = 0;
    while i < b.len() {
        if b[i] == b'%' && i + 2 < b.len() {
            if let Some(v) = std::str::from_utf8(&b[i + 1..i + 3]).ok().and_then(|h| u8::from_str_radix(h, 16).ok()) {
                out.push(v);
                i += 3;
                continue;
            }
        }
        out.push(b[i]);
        i += 1;
    }
    String::from_utf8_lossy(&out).into_owned()
}

pub fn handle(req: &Request<Vec<u8>>) -> Response<Cow<'static, [u8]>> {
    let path = percent_decode(req.uri().path());
    let path = if path == "/" || path.is_empty() { "/index.html".to_string() } else { path };
    let data: Option<Cow<'static, [u8]>> = if let Some(rest) = path.strip_prefix("/__shell/") {
        shell_file(rest).map(Cow::Borrowed)
    } else if let Some(rest) = path.strip_prefix("/__test/") {
        test_file(rest)
    } else {
        ui_file(&path)
    };
    let Some(data) = data else {
        return Response::builder()
            .status(StatusCode::NOT_FOUND)
            .header(header::CONTENT_TYPE, "text/plain")
            .body(Cow::Borrowed(&b"not found"[..]))
            .unwrap();
    };
    let ct = mime(&path);
    let total = data.len();
    if let Some(range) = req.headers().get(header::RANGE).and_then(|v| v.to_str().ok()) {
        if let Some((a, b)) = parse_range(range, total) {
            let body: Vec<u8> = data[a..=b].to_vec();
            return Response::builder()
                .status(StatusCode::PARTIAL_CONTENT)
                .header(header::CONTENT_TYPE, ct)
                .header(header::ACCEPT_RANGES, "bytes")
                .header(header::CONTENT_RANGE, format!("bytes {a}-{b}/{total}"))
                .header(header::CONTENT_LENGTH, body.len().to_string())
                .header(header::CACHE_CONTROL, "no-store")
                .body(Cow::Owned(body))
                .unwrap();
        }
    }
    Response::builder()
        .status(StatusCode::OK)
        .header(header::CONTENT_TYPE, ct)
        .header(header::ACCEPT_RANGES, "bytes")
        .header(header::CONTENT_LENGTH, total.to_string())
        .header(header::CACHE_CONTROL, "no-store")
        .body(data)
        .unwrap()
}

fn parse_range(h: &str, total: usize) -> Option<(usize, usize)> {
    if total == 0 {
        return None;
    }
    let r = h.trim().strip_prefix("bytes=")?.split(',').next()?.trim();
    let (a, b) = r.split_once('-')?;
    let (start, end) = if a.is_empty() {
        let n: usize = b.parse().ok()?;
        (total.saturating_sub(n), total - 1)
    } else {
        let s: usize = a.parse().ok()?;
        let e: usize = if b.is_empty() { total - 1 } else { b.parse::<usize>().ok()?.min(total - 1) };
        (s, e)
    };
    if start > end || start >= total {
        None
    } else {
        Some((start, end))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn rel_paths() {
        assert_eq!(clean_rel("assets/x.png").as_deref(), Some("assets/x.png"));
        assert_eq!(clean_rel("/a//b/./c").as_deref(), Some("a/b/c"));
        assert!(clean_rel("../etc/passwd").is_none());
        assert!(clean_rel("a/../../b").is_none());
        assert!(clean_rel("C:/x").is_none());
        assert!(clean_rel("").is_none());
    }
    #[test]
    fn ranges() {
        assert_eq!(parse_range("bytes=0-9", 100), Some((0, 9)));
        assert_eq!(parse_range("bytes=90-", 100), Some((90, 99)));
        assert_eq!(parse_range("bytes=-10", 100), Some((90, 99)));
        assert_eq!(parse_range("bytes=50-500", 100), Some((50, 99)));
        assert_eq!(parse_range("bytes=200-", 100), None);
    }
    #[test]
    fn decode() {
        assert_eq!(percent_decode("/a%20b.png"), "/a b.png");
        assert_eq!(percent_decode("/%D1%96.js"), "/і.js");
        assert_eq!(percent_decode("/x%"), "/x%");
    }
    #[test]
    fn bundled_has_index() {
        assert!(BUNDLED.get_file("index.html").is_some());
        assert!(BUNDLED.get_file("build.json").is_some());
        assert!(SHELL.get_file("ocr/worker.min.js").is_some());
    }
}
