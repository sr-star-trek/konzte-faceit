(() => {
  const st = () => (typeof S !== 'undefined' ? S : {});
  const LS = k => { try { return localStorage.getItem(k); } catch { return null; } };
  const isTest = () => /^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/.test(String(st().server || ''));
  const OPEN_AT = Date.parse('2026-12-01T00:00:00+02:00');
  const wanted = () => LS('kz-winter') === '1' || (LS('kz-winter') !== '0' && (isTest() || Date.now() >= OPEN_AT));
  const themed = () => [...document.body.classList].some(c => c.startsWith('th-'));
  const calm = () => document.body.classList.contains('calm') || !!st().cfg?.reduceMotion;
  const W = window.KZW = { on: false };

  function rnd(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  function frostSVG(w, h, cx, cy, a0, seed, stems, alpha, big = false) {
    const r = rnd(seed), bk = {};
    const line = (x, y, x2, y2, wd, op) => { const k = wd.toFixed(1) + '|' + (Math.round(op * 20) / 20).toFixed(2); (bk[k] ||= []).push(`M${x.toFixed(0)} ${y.toFixed(0)}L${x2.toFixed(0)} ${y2.toFixed(0)}`); };
    const fern = (x, y, ang, len, depth, op) => {
      const x2 = x + Math.cos(ang) * len, y2 = y + Math.sin(ang) * len;
      line(x, y, x2, y2, 0.35 + depth * 0.3, op);
      if (depth <= 0) return;
      const n = 4 + Math.floor(len / 9);
      for (let i = 1; i < n; i++) {
        const t = i / n, bx = x + (x2 - x) * t, by = y + (y2 - y) * t, bl = len * 0.34 * (1 - t) * (0.75 + r() * 0.5);
        if (bl < 1.5) continue;
        fern(bx, by, ang + Math.PI / 3 + (r() - 0.5) * 0.12, bl, depth - 1, op * 0.8);
        fern(bx, by, ang - Math.PI / 3 + (r() - 0.5) * 0.12, bl * (0.8 + r() * 0.3), depth - 1, op * 0.8);
      }
    };
    for (let i = 0; i < stems; i++) {
      const ang = a0 + (i / (stems - 1) - 0.5) * (Math.PI / 2) * 0.92 + (r() - 0.5) * 0.15;
      const len = big ? Math.min(w, h) * (0.08 + r() * r() * 0.5) : Math.min(w, h) * (0.32 + r() * 0.4) * (i % 2 ? 0.7 : 1);
      const ox = big ? Math.cos(ang) * Math.min(w, h) * r() * r() * 0.55 : 0, oy = big ? Math.sin(ang) * Math.min(w, h) * r() * r() * 0.55 : 0;
      fern(cx + ox + (r() - 0.5) * 6, cy + oy + (r() - 0.5) * 6, ang + (big ? (r() - 0.5) * 1.2 : 0), len, 2, alpha * (big ? 0.6 + r() * 0.4 : 1));
    }
    const haze = `<radialGradient id="g" cx="${cx / w}" cy="${cy / h}" r="0.9"><stop offset="0" stop-color="#eaf5ff" stop-opacity="${alpha * 0.5}"/><stop offset=".55" stop-color="#eaf5ff" stop-opacity="${alpha * 0.12}"/><stop offset="1" stop-color="#eaf5ff" stop-opacity="0"/></radialGradient>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs>${haze}</defs><rect width="${w}" height="${h}" fill="url(#g)"/><g fill="none" stroke="#f2f9ff" stroke-linecap="round">${Object.entries(bk).map(([k, d]) => { const [wd, op] = k.split('|'); return `<path d="${d.join('')}" stroke-width="${wd}" stroke-opacity="${op}"/>`; }).join('')}</g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
  function capSVG() {
    const r = rnd(7), pts = [];
    for (let x = 0; x <= 400; x += 10) pts.push([x, (2.2 + r() * 2.8).toFixed(1)]);
    const d = 'M0 0H400' + pts.reverse().map(([x, y]) => `L${x} ${y}`).join('') + 'Z';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 7" preserveAspectRatio="none"><path d="${d}" fill="#eaf4ff" fill-opacity=".16"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
  function vars() {
    if (W.vars) return;
    W.vars = 1;
    const s = document.documentElement.style;
    s.setProperty('--kzw-frost-tl', frostSVG(180, 140, 0, 0, Math.PI / 4, 11, 6, 0.42));
    s.setProperty('--kzw-frost-br', frostSVG(150, 110, 150, 110, Math.PI * 1.25, 23, 5, 0.3));
    const B = (cx, cy, a, sd) => frostSVG(640, 460, cx, cy, a, sd, 40, 0.5, true);
    s.setProperty('--kzw-big-tl', B(0, 0, Math.PI / 4, 101));
    s.setProperty('--kzw-big-tr', B(640, 0, Math.PI * 0.75, 103));
    s.setProperty('--kzw-big-bl', B(0, 460, -Math.PI / 4, 107));
    s.setProperty('--kzw-big-br', B(640, 460, Math.PI * 1.25, 109));
    s.setProperty('--kzw-cap', capSVG());
  }

  const P = { cv: null, c: null, ps: [], raf: 0, last: 0 };
  function cvInit() {
    if (P.cv) return;
    P.cv = document.createElement('canvas'); P.cv.id = 'kzw-snow'; document.body.appendChild(P.cv);
    P.c = P.cv.getContext('2d');
    const fit = () => { const d = Math.min(1.5, devicePixelRatio || 1); P.cv.width = innerWidth * d; P.cv.height = innerHeight * d; P.c.setTransform(d, 0, 0, d, 0, 0); };
    fit(); addEventListener('resize', fit);
  }
  function frame(ts) {
    P.raf = 0;
    const dt = Math.min(0.05, (ts - (P.last || ts)) / 1000), c = P.c;
    P.last = ts;
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = P.ps.length - 1; i >= 0; i--) {
      const p = P.ps[i];
      p.t += dt; p.vx *= 1 - dt * 1.3; p.vy = p.vy * (1 - dt * 1.3) + 40 * dt;
      p.x += (p.vx + Math.sin(p.t * 3 + p.ph) * 12) * dt; p.y += p.vy * dt;
      const life = 1 - p.t / p.life;
      if (life <= 0) { P.ps.splice(i, 1); continue; }
      c.globalAlpha = Math.min(1, life * 1.6) * p.a; c.fillStyle = p.col;
      if (p.shard) { c.save(); c.translate(p.x, p.y); c.rotate(p.t * p.vr); c.fillRect(-p.r * 1.6, -p.r * 0.35, p.r * 3.2, p.r * 0.7); c.restore(); }
      else { c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); }
    }
    c.globalAlpha = 1;
    P.cv.classList.toggle('on', P.ps.length > 0);
    if (P.ps.length) P.raf = requestAnimationFrame(frame);
  }
  function burst(x, y, n, cols, sp = 420, up = 0.4, shard = false) {
    if (!W.on || calm()) return;
    cvInit();
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, v = sp * (0.2 + Math.random() * 0.8);
      P.ps.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - sp * up, t: 0, life: 1.2 + Math.random() * 1.6, r: 0.8 + Math.random() * 2.2, a: 0.6 + Math.random() * 0.4,
        col: cols[i % cols.length], ph: Math.random() * 6.28, shard: shard && Math.random() < 0.6, vr: (Math.random() - 0.5) * 12 });
    }
    if (!P.raf) P.raf = requestAnimationFrame(frame);
  }
  W.burst = burst;

  const fxOk = () => W.on && !calm();
  const atBeat = (c, ms, fn) => (window.UIS?.at ? UIS.at(c, ms, fn) : setTimeout(fn, ms));
  function layer(cls, html = '') { const d = document.createElement('div'); d.className = 'kzw-fx ' + cls; d.innerHTML = html; document.body.appendChild(d); return d; }
  function cracks() {
    const w = innerWidth, h = innerHeight, cx = w / 2, cy = h * 0.45, out = [];
    const R = [60, 140, 260];
    for (const rr of R) for (let k = 0; k < 9; k++) {
      const a1 = Math.random() * 6.283, a2 = a1 + 0.25 + Math.random() * 0.5, q = rr * (0.85 + Math.random() * 0.3);
      out.push(`<path d="M${(cx + Math.cos(a1) * q).toFixed(0)} ${(cy + Math.sin(a1) * q).toFixed(0)}L${(cx + Math.cos((a1 + a2) / 2) * q * 1.05).toFixed(0)} ${(cy + Math.sin((a1 + a2) / 2) * q * 1.05).toFixed(0)}L${(cx + Math.cos(a2) * q).toFixed(0)} ${(cy + Math.sin(a2) * q).toFixed(0)}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" class="b"/>`);
    }
    for (let i = 0; i < 14; i++) {
      let a = (i / 14) * 6.283 + Math.random() * 0.35, x = cx, y = cy, d = `M${cx} ${cy}`;
      const len = Math.hypot(w, h) * (0.25 + Math.random() * 0.4);
      for (let s = 0; s < 7; s++) {
        a += (Math.random() - 0.5) * 0.55; const l = len / 7 * (0.6 + Math.random() * 0.8); x += Math.cos(a) * l; y += Math.sin(a) * l; d += `L${x.toFixed(0)} ${y.toFixed(0)}`;
        if (Math.random() < 0.35) { const b = a + (Math.random() < 0.5 ? 0.9 : -0.9), bl = l * 0.6; out.push(`<path d="M${x.toFixed(0)} ${y.toFixed(0)}l${(Math.cos(b) * bl).toFixed(0)} ${(Math.sin(b) * bl).toFixed(0)}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" class="b"/>`); }
      }
      out.push(`<path d="${d}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>`);
    }
    return `<svg viewBox="0 0 ${w} ${h}">${out.join('')}</svg>`;
  }
  const GOLD = ['#ffd56a', '#f4c542', '#fff1c2', '#ffffff'];
  const ICE = ['#eaf6ff', '#bfe0ff', '#ffffff'];
  const mid = () => [innerWidth / 2 + 40, innerHeight * 0.45];
  function onMatchFound(c) {
    if (!fxOk()) return;
    atBeat(c, 0, () => {
      const d = layer('kzw-ice', cracks());
      d.animate([{ opacity: 0 }, { opacity: 1, offset: 0.06 }, { opacity: 1, offset: 0.5 }, { opacity: 0, transform: 'scale(1.05)' }], { duration: 1500, easing: 'ease-out', fill: 'forwards' });
      d.querySelectorAll('path').forEach((p, i) => p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 150 + (i % 12) * 10 + (p.classList.contains('b') ? 80 : 0), easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'forwards' }));
      const [x, y] = mid();
      burst(x, y, 90, ICE, 760, 0.1, true);
      setTimeout(() => d.remove(), 1600);
    });
  }
  function vignette(c, ms, hold, dur, peak = 1) {
    if (!fxOk()) return;
    atBeat(c, ms, () => {
      const d = layer('kzw-vig');
      d.animate([{ opacity: 0 }, { opacity: peak, offset: hold[0] }, { opacity: peak, offset: hold[1] }, { opacity: 0 }], { duration: dur, easing: 'ease-out', fill: 'forwards' });
      setTimeout(() => d.remove(), dur + 50);
    });
  }
  function wire() {
    const U = window.UIS;
    if (!U || W.wired) return;
    W.wired = 1;
    U.on('match_found', onMatchFound);
    U.on('ban', c => vignette(c, 100, [0.05, 0.3], 1400, 0.9));
    U.on('map_reveal', c => fxOk() && atBeat(c, 680, () => { const [x, y] = mid(); burst(x, y, 130, ICE, 680, 0.55); }));
    U.on('victory', c => { if (!fxOk()) return; atBeat(c, 360, () => { const [x, y] = mid(); burst(x, y, 60, ICE, 520, 0.4); }); atBeat(c, 1560, () => { const [x, y] = mid(); burst(x, y, 160, GOLD, 640, 0.6); }); });
    U.on('defeat', c => vignette(c, 0, [0.45, 0.8], 5200, 1));
    U.on('draw', c => vignette(c, 0, [0.2, 0.6], 2600, 0.5));
    U.on('calibration', c => fxOk() && atBeat(c, 1600, () => { const [x, y] = mid(); burst(x, y, 130, ICE.concat(GOLD.slice(0, 2)), 780, 0.3, true); }));
    for (const id of ['reward', 'achievement', 'level_up', 'pass_level_up'])
      U.on(id, c => fxOk() && atBeat(c, U.T[id]?.hit ?? 0, () => { const [x] = mid(); burst(x, innerHeight * 0.3, 70, GOLD, 400, 0.7); }));
  }

  const steps = { el: null, on: false, x: 0, side: 0, last: -1, base: 0 };
  function stepTick() {
    const L = st().live || {};
    const q = W.on && !calm() && !document.hidden && ((!!L.myQueue && !L.ready && !L.match) || !!W.testSteps);
    if (q && !steps.on) {
      steps.on = true; steps.x = 0; steps.side = 0; steps.last = -1;
      steps.base = window.UIS?.fresh?.('queue_start', 60000)?.t0 ?? performance.now();
      if (!steps.el) { steps.el = document.createElement('div'); steps.el.id = 'kzw-steps'; document.body.appendChild(steps.el); }
    }
    if (!q) { steps.on = false; return; }
    const e = performance.now() - steps.base, bar = Math.floor(e / 2500), beat = bar * 2 + ((e % 2500) >= 240 ? 1 : 0);
    if (beat === steps.last) return;
    steps.last = beat;
    const i = document.createElement('i'), w = steps.el.clientWidth || innerWidth;
    steps.x = (steps.x + 30) % Math.max(200, w - 30);
    i.style.left = (steps.x + 10) + 'px'; i.style.top = (steps.side ? 8 : 24) + 'px';
    i.style.transform = `rotate(${steps.side ? 80 : 100}deg)`;
    steps.side ^= 1;
    steps.el.appendChild(i);
    setTimeout(() => i.remove(), 4600);
  }

  function apply() {
    if (!document.body) return;
    const on = wanted() && window.kzSeason?.() === 'winter' && !themed();
    if (on !== W.on) {
      W.on = on;
      document.body.classList.toggle('kzw', on);
      if (on) { vars(); wire(); }
      window.KA?.musicUpdate?.();
    }
    if (on) stepTick(); else if (steps.on) steps.on = false;
  }
  setInterval(apply, 100);
  document.addEventListener('visibilitychange', apply);
  W.apply = apply;
})();
