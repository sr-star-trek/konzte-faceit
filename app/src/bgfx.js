(() => {
  const L = {
    en: { sAnimBg: 'Animated background', sAnimBgH: 'Season-themed: embers and smoke (Relic), aurora and stars (Polaris). Pauses during matches' },
    uk: { sAnimBg: 'Анімований фон', sAnimBgH: 'У темі сезону: жаринки й дим (Relic), сяйво й зірки (Polaris). На паузі під час матчу' },
    ru: { sAnimBg: 'Анимированный фон', sAnimBgH: 'В теме сезона: угольки и дым (Relic), сияние и звёзды (Polaris). На паузе во время матча' },
  };
  if (typeof I18N !== 'undefined') for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);

  const cv = document.createElement('canvas');
  cv.id = 'bgfx';
  document.body.prepend(cv);
  const g = cv.getContext('2d', { alpha: true });
  const SCALE = 0.5;
  let W = 0, H = 0, raf = 0, last = 0, t0 = performance.now(), parts = [], stars = [];

  const theme = () => window.kzSeason?.() || ((S.season?.n === 2 || S.cfg?.bgTheme === 'polaris') ? 'polaris' : 'relic');
  const want = () => {
    const c = S.cfg || {};
    if (c.animBg === false || c.bgGlow === false || c.reduceMotion) return false;
    if (document.hidden) return false;
    const st = S.live?.match?.state;
    if (st === 'live' || st === 'submitted' || st === 'disputed') return false;
    return true;
  };

  function resize() {
    W = Math.max(2, Math.round(innerWidth * SCALE)); H = Math.max(2, Math.round(innerHeight * SCALE));
    cv.width = W; cv.height = H;
    seed();
  }
  function seed() {
    const n = Math.round(W * H / 9000);
    parts = Array.from({ length: Math.min(70, Math.max(24, n)) }, () => ember(true));
    stars = Array.from({ length: Math.min(140, Math.max(50, n * 2)) }, () => ({ x: Math.random() * W, y: Math.random() * H * .8, r: Math.random() * .9 + .3, p: Math.random() * 6.28, s: .5 + Math.random() * 1.6 }));
  }
  function ember(anywhere) {
    return { x: Math.random() * W, y: anywhere ? Math.random() * H : H + 6, vy: -(6 + Math.random() * 14), vx: (Math.random() - .5) * 4,
      r: .6 + Math.random() * 1.6, life: 0, max: 6 + Math.random() * 10, w: Math.random() * 6.28, hue: Math.random() < .8 ? 38 : 18 };
  }
  function glow(x, y, rad, col, a) {
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, `rgba(${col},${a})`); gr.addColorStop(1, `rgba(${col},0)`);
    g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }

  function drawRelic(t, dt) {
    glow(W * (.08 + .06 * Math.sin(t * .05)), H * (.95 + .05 * Math.cos(t * .07)), W * .55, '18,120,104', .20);
    glow(W * (.92 + .05 * Math.cos(t * .045)), H * (.05 + .06 * Math.sin(t * .06)), W * .55, '150,28,40', .22);
    glow(W * (.55 + .2 * Math.sin(t * .03)), H * (.75 + .12 * Math.sin(t * .041)), W * .35, '244,170,60', .07 + .02 * Math.sin(t * .5));
    g.globalCompositeOperation = 'lighter';
    for (const p of parts) {
      p.life += dt; p.w += dt * 1.3;
      p.x += (p.vx + Math.sin(p.w) * 3) * dt; p.y += p.vy * dt;
      const k = p.life / p.max, a = Math.max(0, Math.sin(Math.PI * Math.min(1, k))) * .85;
      if (k >= 1 || p.y < -6) Object.assign(p, ember(false));
      g.fillStyle = `hsla(${p.hue}, 95%, ${60 + 15 * Math.sin(p.w * 3)}%, ${a})`;
      g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.283); g.fill();
      g.fillStyle = `hsla(${p.hue}, 95%, 55%, ${a * .18})`;
      g.beginPath(); g.arc(p.x, p.y, p.r * 4, 0, 6.283); g.fill();
    }
    g.globalCompositeOperation = 'source-over';
  }

  function drawPolaris(t) {
    glow(W * .15, H * 1.0, W * .55, '18,90,140', .22);
    glow(W * .95, H * .0, W * .5, '60,50,140', .2);
    g.globalCompositeOperation = 'lighter';
    for (let b = 0; b < 3; b++) {
      const base = H * (.18 + b * .09), amp = H * .06, col = ['80,230,200', '90,180,255', '150,120,255'][b];
      for (let x = 0; x <= W; x += 3) {
        const y = base + Math.sin(x * .012 + t * (.25 + b * .07) + b) * amp + Math.sin(x * .031 - t * .4) * amp * .35;
        const a = (.05 + .04 * Math.sin(x * .02 + t * .6 + b * 2)) * (1 - b * .2);
        const gr = g.createLinearGradient(0, y - H * .12, 0, y + 6);
        gr.addColorStop(0, `rgba(${col},0)`); gr.addColorStop(1, `rgba(${col},${a})`);
        g.fillStyle = gr; g.fillRect(x, y - H * .12, 3, H * .12 + 6);
      }
    }
    for (const s of stars) {
      const a = .25 + .45 * (.5 + .5 * Math.sin(t * s.s + s.p));
      g.fillStyle = `rgba(220,235,255,${a})`; g.fillRect(s.x, s.y, s.r, s.r);
    }
    g.globalCompositeOperation = 'source-over';
  }

  const SEASON = {
    winter: { g1: '80,170,255', g2: '150,120,255', cols: ['235,245,255', '200,230,255'], fall: true, leaf: false },
    spring: { g1: '166,227,90', g2: '255,216,77', cols: ['166,227,90', '198,239,126', '143,209,74'], fall: true, leaf: true, pollen: '255,230,128' },
    summer: { g1: '63,212,230', g2: '255,170,60', cols: ['255,214,120', '255,190,90'], fall: false, leaf: false },
    autumn: { g1: '232,176,74', g2: '224,96,58', cols: ['224,122,46', '200,85,61', '217,164,65'], fall: true, leaf: true },
  };
  let flakes = [], flakesKind = '';
  function flake(kind, anywhere) {
    const c = SEASON[kind], up = !c.fall;
    return { x: Math.random() * W, y: anywhere ? Math.random() * H : (up ? H + 6 : -6),
      vy: up ? -(4 + Math.random() * 8) : (c.leaf ? 7 + Math.random() * 10 : 5 + Math.random() * 9), vx: (Math.random() - .5) * 5,
      r: c.leaf ? 2.2 + Math.random() * 2 : .6 + Math.random() * 1.4, rot: Math.random() * 6.28, vr: (Math.random() - .5) * 1.6,
      w: Math.random() * 6.28, col: c.cols[(Math.random() * c.cols.length) | 0], a: c.leaf ? .55 + Math.random() * .3 : .5 + Math.random() * .4,
      pollen: c.pollen && Math.random() < .25 };
  }
  function drawSeason(t, dt, kind) {
    const c = SEASON[kind];
    if (flakesKind !== kind) { flakesKind = kind; flakes = Array.from({ length: Math.min(60, Math.max(22, Math.round(W * H / 11000))) }, () => flake(kind, true)); }
    glow(W * (.08 + .06 * Math.sin(t * .05)), H * (.95 + .05 * Math.cos(t * .07)), W * .55, c.g1, .2);
    glow(W * (.92 + .05 * Math.cos(t * .045)), H * (.05 + .06 * Math.sin(t * .06)), W * .55, c.g2, .22);
    if (kind === 'summer') {
      glow(W * .96, -H * .05, W * .38, '255,214,120', .18 + .03 * Math.sin(t * .4));
      g.save(); g.translate(W * .96, -H * .05); g.rotate(t * .02);
      for (let i = 0; i < 14; i++) { g.rotate(6.283 / 14); g.fillStyle = 'rgba(255,210,120,.035)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(W * .9, -W * .03); g.lineTo(W * .9, W * .03); g.fill(); }
      g.restore();
    }
    g.globalCompositeOperation = kind === 'summer' || kind === 'winter' ? 'lighter' : 'source-over';
    for (const p of flakes) {
      p.w += dt; p.rot += p.vr * dt;
      p.x += (p.vx + Math.sin(p.w * 1.3) * (c.leaf ? 9 : 4)) * dt; p.y += p.vy * dt;
      if (p.y > H + 8 || p.y < -8 || p.x < -10 || p.x > W + 10) Object.assign(p, flake(kind, false));
      if (p.pollen) { g.fillStyle = `rgba(${c.pollen},${p.a * .8})`; g.beginPath(); g.arc(p.x, p.y, .8, 0, 6.283); g.fill(); continue; }
      g.fillStyle = `rgba(${p.col},${p.a})`;
      if (c.leaf) { g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.beginPath(); g.ellipse(0, 0, p.r, p.r * .5, 0, 0, 6.283); g.fill(); g.restore(); }
      else { g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.283); g.fill(); if (kind === 'summer') { g.fillStyle = `rgba(${p.col},${p.a * .15})`; g.beginPath(); g.arc(p.x, p.y, p.r * 4, 0, 6.283); g.fill(); } }
    }
    g.globalCompositeOperation = 'source-over';
  }

  function frame(now) {
    raf = 0;
    if (!want()) { stop(); return; }
    raf = requestAnimationFrame(frame);
    if (now - last < 33) return;
    const dt = Math.min(.1, (now - last) / 1000); last = now;
    const t = (now - t0) / 1000;
    g.clearRect(0, 0, W, H);
    const th = theme();
    SEASON[th] ? drawSeason(t, dt, th) : th === 'polaris' ? drawPolaris(t) : drawRelic(t, dt);
  }
  function start() {
    if (!want()) { stop(); return; }
    document.body.classList.add('animbg');
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf); raf = 0;
    const on = (S.cfg?.animBg !== false && S.cfg?.bgGlow !== false && !S.cfg?.reduceMotion);
    if (!on) { document.body.classList.remove('animbg'); g.clearRect(0, 0, W, H); }
  }

  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', start);
  resize();
  setInterval(start, 1500);
  if (typeof applyLook === 'function') { const _al = applyLook; applyLook = function () { const r = _al.apply(this, arguments); start(); return r; }; }
  window.kzBgfx = { start, stop };
})();
