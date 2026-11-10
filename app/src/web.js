(() => {
  if (window.konzte) return;
  const ORIGIN = location.origin;
  const LS = 'kz-web-settings';
  const read = () => { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch { return {}; } };
  const write = s => { try { localStorage.setItem(LS, JSON.stringify(s)); } catch {} };
  let hwid = ''; try { hwid = localStorage.getItem('kz-web-id') || ''; } catch {}
  if (!hwid) { hwid = 'web-' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36)); try { localStorage.setItem('kz-web-id', hwid); } catch {} }

  document.documentElement.classList.add('web');
  if (!document.querySelector('meta[name="viewport"]')) { const vm = document.createElement('meta'); vm.name = 'viewport'; vm.content = 'width=device-width, initial-scale=1, viewport-fit=cover'; document.head.appendChild(vm); }
  const st = document.createElement('style');
  st.textContent = `html.web [data-win], html.web .titlebar .winbtns { display: none !important; }
    .web-pop { position: fixed; inset: 0; z-index: 99999; display: grid; place-items: center; background: rgba(5,5,8,.7); backdrop-filter: blur(4px); }
    .web-pop > div { background: #16151b; border: 1px solid #2f2f39; border-radius: 12px; padding: 22px 24px; max-width: 420px; text-align: center; color: #eee; font: 15px system-ui, sans-serif; }
    .web-pop a { display: inline-block; margin-top: 14px; padding: 11px 20px; border-radius: 8px; background: #969df9; color: #111; text-decoration: none; font-weight: 700; }
    .web-pop button { margin-top: 10px; display: block; width: 100%; background: none; border: 0; color: #8d8b99; cursor: pointer; }`;
  document.head.appendChild(st);

  const T = {
    en: { open: 'Your browser blocked the new tab.', go: 'Open', close: 'Close' },
    uk: { open: 'Браузер заблокував нову вкладку.', go: 'Відкрити', close: 'Закрити' },
    ru: { open: 'Браузер заблокировал новую вкладку.', go: 'Открыть', close: 'Закрыть' },
  };
  const tw = k => { const l = (read().lang && read().lang !== 'system' ? read().lang : (navigator.language || 'en').slice(0, 2)); return T[l]?.[k] ?? (typeof kzTm === 'function' ? kzTm(T.en[k]) : T.en[k]); };

  function open(url) {
    const w = window.open(url, '_blank');
    if (w) return Promise.resolve(true);
    const pop = document.createElement('div');
    pop.className = 'web-pop';
    pop.innerHTML = `<div><div>${tw('open')}</div><a href="${String(url).replace(/"/g, '&quot;')}" target="_blank" rel="noopener">${tw('go')}</a><button>${tw('close')}</button></div>`;
    pop.querySelector('a').onclick = () => setTimeout(() => pop.remove(), 50);
    pop.querySelector('button').onclick = () => pop.remove();
    document.body.appendChild(pop);
    return Promise.resolve(false);
  }

  let flash = null;
  function attention(text, opts = {}) {
    if (!document.hasFocus()) {
      try { if ('Notification' in window && Notification.permission === 'granted') { const n = new Notification('Konzte', { body: text, icon: 'assets/logo.png' }); n.onclick = () => { window.focus(); n.close(); }; } } catch {}
      if (!flash) { const t0 = document.title; let on = false; flash = setInterval(() => { document.title = (on = !on) ? '● ' + text : t0; }, 900);
        const stop = () => { clearInterval(flash); flash = null; document.title = t0; removeEventListener('focus', stop); }; addEventListener('focus', stop); }
    }
    if (opts.raise) try { window.focus(); } catch {}
  }
  addEventListener('pointerdown', () => { try { if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission(); } catch {} }, { once: true });

  let tessP = null, ocrW = null, digW = null;
  const loadTess = () => tessP || (tessP = new Promise((res, rej) => { const s = document.createElement('script'); s.src = '/game-ocr/tesseract.min.js'; s.onload = () => res(window.Tesseract); s.onerror = () => rej(new Error('OCR failed to load')); document.head.appendChild(s); }));
  const wopts = { langPath: ORIGIN + '/game-ocr/lang', corePath: ORIGIN + '/game-ocr/core', workerPath: ORIGIN + '/game-ocr/worker.min.js', workerBlobURL: false, gzip: false, cacheMethod: 'write' };
  async function getOcr() { if (!ocrW) { const T = await loadTess(); ocrW = await T.createWorker(['eng', 'rus', 'ukr'], 1, wopts); } return ocrW; }
  async function getDigits() { if (!digW) { const T = await loadTess(); digW = await T.createWorker('eng', 1, wopts); await digW.setParameters({ tessedit_char_whitelist: '0123456789./', tessedit_pageseg_mode: '7' }); } return digW; }
  async function ocr(dataUrl) {
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
  }
  async function ocrDigits(dataUrl, rects) {
    const w = await getDigits(), out = [];
    for (const r of rects) out.push((await w.recognize(dataUrl, { rectangle: r })).data.text.trim());
    return out;
  }

  let infoP = null;
  const info = () => infoP || (infoP = Promise.all([
    fetch('/assets/release.json', { cache: 'no-store' }).then(r => r.json()).catch(() => ({})),
    fetch('version.json', { cache: 'no-store' }).then(r => r.json()).catch(() => ({})),
    fetch('/konzte/update/manifest.json', { cache: 'no-store' }).then(r => r.json()).catch(() => ({})),
  ]).then(([rel, v, man]) => ({ version: rel.app || v.ver || '1.0.5', ui: UI_LOADED || man.ui || 0, uiUpdated: false, needShell: null, platform: 'web', web: true, data: '', electron: '' })));

  const UI_LOADED = +((document.currentScript?.src || '').match(/[?&]u=(\d+)/)?.[1] || 0);

  let sleeping = null;
  const note = () => { if (sleeping === null && window.KA) sleeping = !KA.ctx || KA.ctx.state !== 'running'; };
  const wake = () => {
    note();
    const A = window.KA; if (!A || sleeping === null) return;
    for (const ev of ['pointerdown', 'keydown', 'touchend']) removeEventListener(ev, wake, true);
    if (!sleeping) return;
    const restart = () => { if (A.music) { A.music.want = null; A.musicUpdate?.(); } };
    (A.ctx ? A.ctx.resume() : Promise.resolve()).then(restart).catch(() => {});
  };
  for (const ev of ['pointerdown', 'keydown', 'touchend']) addEventListener(ev, wake, true);

  const applyZoom = z => { document.documentElement.style.zoom = z && z !== 1 ? String(z) : ''; };
  applyZoom(read().zoom);

  window.konzte = {
    web: true,
    settings: async () => ({ devUi: false, sysLangs: [...(navigator.languages || [navigator.language])].filter(Boolean), ...read(), server: ORIGIN + '/konzte' }),
    saveSettings: async patch => { const s = { ...read(), ...patch }; delete s.server; write(s); if ('zoom' in patch) applyZoom(s.zoom); return { devUi: false, ...s, server: ORIGIN + '/konzte' }; },
    open, win: () => {}, attention,
    hwid: async () => hwid,
    info,
    relaunch: async () => location.reload(),
    quit: () => { location.href = '/'; },
    clearCache: async () => { try { for (const k of await caches.keys()) await caches.delete(k); } catch {} },
    asset: async rel => rel,
    ocr, ocrDigits,
    latestShot: async () => null,
  };
})();
