(() => {
  if (window.konzte || !window.__TAURI_INTERNALS__) return;
  const T = window.__TAURI_INTERNALS__;
  const call = (cmd, args) => T.invoke(cmd, args || {}).catch(e => { throw e instanceof Error ? e : new Error(String(e)); });
  const on = (event, fn) => call('plugin:event|listen', { event, target: { kind: 'Any' }, handler: T.transformCallback(e => fn(e.payload)) });
  const PLATFORM = navigator.userAgent.includes('Windows') ? 'win32' : navigator.userAgent.includes('Mac OS') ? 'darwin' : 'linux';

  const NO_DRAG = 'button, a, input, select, textarea, [data-win], .tb-user, .tb-btns, .n2-search, .n2-bellw, [contenteditable]';
  addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    const t = e.target instanceof Element ? e.target : null;
    if (!t || !t.closest('.titlebar') || t.closest(NO_DRAG)) return;
    if (e.detail === 2) { call('win_cmd', { cmd: 'max' }); return; }
    call('win_cmd', { cmd: 'drag' });
  }, true);

  window.open = url => { if (/^https?:\/\//i.test(String(url))) call('open_url', { url: String(url) }); return null; };
  addEventListener('click', e => {
    const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
    if (!a || e.defaultPrevented) return;
    const href = a.getAttribute('href') || '';
    if (/^https?:\/\//i.test(href) && !href.startsWith(location.origin)) { e.preventDefault(); call('open_url', { url: href }); }
  });

  const b64ToBlob = (b64, type) => { const s = atob(b64), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return new Blob([u], { type }); };
  async function nativeClip() {
    const r = await call('clip_read').catch(() => null);
    if (r && r.png) return { type: 'image', blob: b64ToBlob(r.png, 'image/png') };
    if (r && typeof r.text === 'string' && r.text) return { type: 'text', text: r.text };
    return null;
  }
  try {
    const cb = navigator.clipboard || {};
    const origRead = cb.read?.bind(cb), origWrite = cb.writeText?.bind(cb);
    const read = async () => {
      if (PLATFORM === 'win32' && origRead) { try { return await origRead(); } catch {} }
      const c = await nativeClip();
      if (!c) return [];
      if (c.type === 'image') return [{ types: ['image/png'], getType: async () => c.blob }];
      return [{ types: ['text/plain'], getType: async () => new Blob([c.text], { type: 'text/plain' }) }];
    };
    const writeText = async s => { try { if (origWrite) return await origWrite(s); } catch {} return call('clip_write', { text: String(s) }); };
    if (navigator.clipboard) {
      Object.defineProperty(navigator.clipboard, 'read', { value: read, configurable: true });
      Object.defineProperty(navigator.clipboard, 'writeText', { value: writeText, configurable: true });
    } else Object.defineProperty(navigator, 'clipboard', { value: { read, writeText }, configurable: true });
  } catch {}
  if (PLATFORM !== 'win32') addEventListener('keydown', async e => {
    if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey || (e.key !== 'v' && e.key !== 'V' && e.code !== 'KeyV')) return;
    const t = document.activeElement;
    if (t && (t.matches?.('input, textarea, select, [contenteditable], [contenteditable] *'))) return;
    e.preventDefault();
    const c = await nativeClip();
    const dt = new DataTransfer();
    if (c?.type === 'image') dt.items.add(new File([c.blob], 'clipboard.png', { type: 'image/png' }));
    else if (c?.type === 'text') dt.setData('text/plain', c.text);
    let ev;
    try { ev = new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }); } catch { ev = null; }
    if (!ev || ev.clipboardData !== dt) { ev = new Event('paste', { bubbles: true, cancelable: true }); Object.defineProperty(ev, 'clipboardData', { value: dt }); }
    (t && t !== document.body ? t : document).dispatchEvent(ev);
  }, true);

  const OCR = new URL('/__shell/ocr/', location.href).href;
  let tessP = null, ocrW = null, digW = null;
  const loadTess = () => tessP || (tessP = new Promise((res, rej) => { const s = document.createElement('script'); s.src = OCR + 'tesseract.min.js'; s.onload = () => res(window.Tesseract); s.onerror = () => { tessP = null; rej(new Error('OCR failed to load')); }; document.head.appendChild(s); }));
  const wopts = { langPath: OCR + 'lang', corePath: OCR + 'core', workerPath: OCR + 'worker.min.js', workerBlobURL: false, gzip: false, cacheMethod: 'none' };
  async function getOcr() { if (!ocrW) { const Ts = await loadTess(); ocrW = await Ts.createWorker(['eng', 'rus', 'ukr'], 1, wopts); } return ocrW; }
  async function getDigits() { if (!digW) { const Ts = await loadTess(); digW = await Ts.createWorker('eng', 1, wopts); await digW.setParameters({ tessedit_char_whitelist: '0123456789./', tessedit_pageseg_mode: '7' }); } return digW; }
  let q = Promise.resolve();
  const serial = fn => (q = q.then(fn, fn));
  async function ocr(dataUrl) {
    return serial(async () => {
      const w = await getOcr();
      await w.setParameters({ tessedit_pageseg_mode: '6' });
      const { data } = await w.recognize(dataUrl, {}, { text: true, blocks: true });
      await w.setParameters({ tessedit_pageseg_mode: '11' });
      const sparse = (await w.recognize(dataUrl, {}, { text: true })).data.text;
      const lines = [];
      for (const b of data.blocks || []) for (const p of b.paragraphs || []) for (const l of p.lines || []) {
        lines.push({ text: l.text.trim(), y0: l.bbox.y0, y1: l.bbox.y1,
          words: l.words.map(w => ({ text: w.text, x0: w.bbox.x0, x1: w.bbox.x1, y0: w.bbox.y0, y1: w.bbox.y1, conf: w.confidence })) });
      }
      return { text: data.text + '\n' + sparse, lines };
    });
  }
  async function ocrDigits(dataUrl, rects) {
    return serial(async () => {
      const w = await getDigits(), out = [];
      for (const r of rects) out.push((await w.recognize(dataUrl, { rectangle: r })).data.text.trim());
      return out;
    });
  }

  window.konzte = {
    shell: 'tauri',
    settings: () => call('settings_get'),
    saveSettings: patch => call('settings_set', { patch: patch || {} }),
    open: url => call('open_url', { url: String(url || '') }),
    win: cmd => { call('win_cmd', { cmd: String(cmd) }); },
    attention: (text, opts) => { call('attention', { text: String(text ?? ''), opts: opts || {} }); },
    hwid: () => call('hwid'),
    info: () => call('app_info'),
    relaunch: () => call('relaunch'),
    clearCache: () => call('clear_cache'),
    asset: rel => call('asset', { rel: String(rel) }),
    ocr, ocrDigits,
    latestShot: () => call('latest_shot'),
    acScan: opts => call('ac_scan', { opts: opts || {} }),
    acUpload: o => call('ac_upload', { o: o || {} }),
    gameRunning: () => call('game_running'),
    shellInfo: () => call('shell_info'),
    shellInstall: () => call('shell_install'),
    onShellProgress: fn => { on('shell:progress', fn); },
    launchGame: () => call('launch_game'),
    guardSvc: () => call('guard_svc_status'),
    guardOpen: () => call('guard_open'),
    cm: {
      state: () => call('cm_state'),
      create: league => call('cm_create', { v: league ?? null }),
      join: blob => call('cm_join', { v: blob ?? null }),
      leave: () => call('cm_leave'),
      invite: id => call('cm_invite', { v: id ?? null }),
      roomBlob: () => call('cm_room_blob'),
      result: () => call('cm_result'),
      expectFriends: ids => call('cm_expect_friends', { v: ids ?? null }),
      addFriend: id => call('cm_add_friend', { v: id ?? null }),
      friends: () => call('cm_friends'),
      onState: fn => { on('cm:state', fn); },
      onEvent: fn => { on('cm:event', fn); },
    },
    presenceClient: id => call('presence_client', { id: id ?? null }),
    presence: a => call('presence_set', { a: a ?? null }),
    presenceClear: () => call('presence_clear'),
  };
})();
