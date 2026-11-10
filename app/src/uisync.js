(() => {
  const T = {
    click: { hit: 0, end: 75 }, tab: { hit: 0, hit2: 28, end: 100 },
    toggle_on: { click: 0, blip: 25, blipEnd: 115 }, toggle_off: { click: 0, blip: 25, blipEnd: 115 },
    modal_open: { whoosh: 0, latch: 170 }, modal_close: { whoosh: 0, latch: 120 },
    notify: { hit: 0, bell2: 105, peak: 110 }, msg: { hit: 0, blip2: 55, peak: 55 },
    error: { buzz1: 0, buzz2: 110, peak: 115 }, ok: { hit: 0, bell2: 80, peak: 85 },
    coin: { ring1: 0, ring2: 70, peak: 10 }, equip: { slide: 0, latch: 130, peak: 140 },
    level_up: { whoosh: 0, arp: [350, 420, 490, 560, 630], hit: 620 },
    pass_level_up: { whoosh: 0, ladder: [300, 360, 420, 480], hit: 480 },
    reward: { hit: 0, shower: [60, 95, 96, 102, 124, 142, 187, 193, 309, 377, 407, 453, 462, 537, 642, 667], bells: [80, 160, 240, 320], peak: 10 },
    achievement: { hit: 0, bells: [120, 220, 320, 420], peak: 5 },
    friend_online: { bell1: 0, bell2: 120, peak: 125 },
    party_invite: { chirp: 50, bells: [140, 260, 380], peak: 150 },
    party_join: { hit: 0, bell1: 40, bell2: 125, peak: 40 }, party_leave: { bell1: 0, latch: 100, peak: 100 },
    clan_invite: { gong: 0, bells: [200, 345], peak: 30 },
    queue_start: { whoosh: 0, lock: 330, lock2: 375, bells: [385, 465] },
    queue_cancel: { whoosh: 0, click: 65, bells: [105, 205] },
    search: { bpm: 96, beat: 625, bar: 2500, heart: [0, 240] },
    match_found: { impact: 0, pulses: [0, 140], brass: 290, bells: [300, 400, 500, 650] },
    accept: { lock: 0, lock2: 45 },
    all_ready: { arp: [0, 80, 160, 240], lock: 320 },
    ban: { whoosh: 0, stamp: 100 },
    map_reveal: { riser: 0, impact: 680 },
    deploy: { whoosh: 0, thud: 300, brass: 620, squelch: 1150 },
    result_submitted: { burst: [0, 32, 64, 96, 128, 160, 192], confirm: 250 },
    victory: { roll: [0, 55, 110, 165, 220, 275], hit: 360, motif: [360, 580, 800, 940, 1260], chord: 1560 },
    defeat: { hit: 0, notes: [400, 800, 1150, 1550] },
    draw: { hit: 0, bells: [100, 260, 420, 580] },
    elo_up: { hit: 0, bell2: 70 }, elo_down: { hit: 0, bell2: 90 },
    staff_alert: { hits: [0, 150, 320, 470, 640, 790] },
    fives_reminder: { hits: [0, 285, 565] },
  };
  const U = window.UIS = { T, cues: {}, subs: {}, decos: [], log: [] };
  const now = () => performance.now();
  const calm = () => document.body.classList.contains('calm');
  U.calm = calm;
  const $q = s => document.querySelector(s);
  const $all = s => [...document.querySelectorAll(s)];
  const spaced = (arr, gap) => arr.reduce((o, x) => (!o.length || x - o[o.length - 1] >= gap ? [...o, x] : o), []);
  const LOG_MAX = 400;
  const log = (...a) => { U.log.push(a); if (U.log.length > LOG_MAX) U.log.splice(0, 100); };

  U.latency = () => {
    const ac = window.KA?.ctx;
    const l = ac ? (ac.outputLatency || 0) + (ac.baseLatency || 0) : 0;
    return l > 0.001 && l < 0.3 ? l * 1000 : 30;
  };
  U.heardAt = ct => {
    const ac = window.KA?.ctx;
    if (!ac) return now();
    const naive = now() + (ct - ac.currentTime) * 1000;
    try {
      const ts = ac.getOutputTimestamp?.();
      if (ts && ts.performanceTime > 0 && ts.contextTime > 0) {
        const p = ts.performanceTime + (ct - ts.contextTime) * 1000;
        if (p > naive - 5 && p < naive + 300) return p;
      }
    } catch {}
    return naive + U.latency();
  };

  U.cue = (id, o = {}) => {
    const t = now();
    const c = { id, made: t, sound: !!o.sound, soft: !!o.soft, t0: t + (o.delay || 0) + (o.sound ? U.latency() : 0), anims: [], jobs: [] };
    if (id === 'victory' || id === 'defeat' || id === 'draw') c.mid = S.finishedMatch?.id;
    U.cues[id] = c;
    log('cue', id, Math.round(c.t0), c.sound ? 1 : 0, Math.round(t));
    for (const fn of U.subs[id] || []) try { fn(c); } catch (e) { console.warn(e); }
    U.redraw();
    return c;
  };
  U.played = (id, heard, o = {}, ct) => {
    const ac = window.KA?.ctx;
    log('play', id, +heard.toFixed(1), +(ct || 0).toFixed(4), +(ac?.currentTime || 0).toFixed(4), +now().toFixed(1), Math.round(((ac?.outputLatency || 0) + (ac?.baseLatency || 0)) * 1000));
    if (o.cue === false || id === 'hover') return;
    let c = U.cues[id];
    if (!c || now() - c.made > 1500 || c.fixed) {
      c = U.cues[id] = { id, made: now(), sound: true, t0: heard, anims: [], jobs: [], fixed: 1 };
      for (const fn of U.subs[id] || []) try { fn(c); } catch (e) { console.warn(e); }
      U.redraw();
      return;
    }
    c.fixed = 1;
    const dt = heard - c.t0;
    c.t0 = heard;
    log('heard', id, Math.round(heard), Math.round(dt));
    if (Math.abs(dt) < 1) return;
    for (const x of c.anims) if (x.a.playState !== 'finished') x.a.startTime = c.t0 + x.off;
    for (const j of c.jobs) if (!j.done) { clearTimeout(j.tm); arm(c, j); }
  };
  U.on = (id, fn) => { (U.subs[id] ||= []).push(fn); };
  U.fresh = (id, life = 4000) => { const c = U.cues[id]; return c && now() - c.t0 < life ? c : null; };
  function arm(c, j) { j.tm = setTimeout(() => { j.done = 1; try { j.fn(); } catch (e) { console.warn(e); } }, Math.max(0, c.t0 + j.beat - now())); }
  U.at = (c, beat, fn) => { const j = { beat, fn }; c.jobs.push(j); arm(c, j); return j; };
  U.when = (id, beat, fn, fallback = 0) => { const c = U.fresh(id, 3000); if (c) U.at(c, beat, fn); else setTimeout(fn, fallback); };

  const BACK = new Set(['in', 'pop', 'lock', 'stampTxt', 'stampDim', 'stampBy', 'reveal', 'name', 'slam', 'kf', 'land', 'back', 'pagein']);
  U.fx = (el, key, id, frames, o = {}) => {
    if (!el || calm()) return null;
    const c = typeof id === 'string' ? U.cues[id] : id;
    if (!c) return null;
    const a0 = frames[0][0], a1 = frames[frames.length - 1][0], dur = Math.max(1, a1 - a0);
    const start = c.t0 + a0;
    if (!o.iter && now() > start + dur + 20) return null;
    el.__sy ||= {};
    const prev = el.__sy[key];
    if (prev && prev.c === c && prev.a.playState !== 'idle') return prev.a;
    prev?.a.cancel();
    let last = 0;
    const kf = frames.map(([ms, p]) => { const off = Math.max(last, (ms - a0) / dur); if (off !== (ms - a0) / dur) console.warn('uisync: кадри не по зростанню', key, ms); last = off; return { ...p, offset: off }; });
    const a = el.animate(kf, { duration: dur, fill: o.fill || (BACK.has(key) ? 'backwards' : 'none'), iterations: o.iter || 1, pseudoElement: o.pseudo });
    a.startTime = start;
    el.__sy[key] = { a, c };
    c.anims = c.anims.filter(x => x.a.effect?.target?.isConnected);
    c.anims.push({ a, off: a0 });
    a.__syKey = key; a.__syId = c.id; a.__syBeats = frames.map(f => f[0]);
    return a;
  };
  U.loop = (el, key, anchor, period, frames, o = {}) => {
    if (!el || calm()) return null;
    el.__sy ||= {};
    const prev = el.__sy[key];
    if (prev && prev.anchor === anchor) return prev.a;
    if (prev) { prev.a.startTime = anchor; prev.anchor = anchor; return prev.a; }
    const kf = frames.map(([ms, p]) => ({ ...p, offset: ms / period }));
    const a = el.animate(kf, { duration: period, iterations: Infinity, pseudoElement: o.pseudo });
    a.startTime = anchor;
    el.__sy[key] = { a, anchor };
    return a;
  };

  U.deco = fn => U.decos.push(fn);
  let queued = false;
  U.redraw = () => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => { queued = false; if (calm()) return; for (const fn of U.decos) try { fn(); } catch (e) { console.warn('uisync', e); } });
  };
  const after = (name, fn) => {
    const orig = window[name];
    if (typeof orig !== 'function') return;
    window[name] = function () { const r = orig.apply(this, arguments); try { fn(r, arguments); } catch (e) { console.warn('uisync', e); } return r; };
  };
  for (const n of ['render', 'renderReady', 'renderInvites']) after(n, () => U.redraw());

  U.eloPlan = (id, d) => {
    const at = id === 'victory' ? 2600 : 2300, up = d > 0, ticks = [];
    if (!d) return { ticks, settle: null, post: at, up, d: 0 };
    const n = Math.min(Math.abs(d), 14);
    let t = 0;
    for (let i = 0; i < n; i++) {
      ticks.push({ t: at + t, rate: up ? 1 + i * 0.012 : 1 - i * 0.008, v: Math.round(d * (i + 1) / n) });
      t += Math.max(35, 90 * (1 - i / 18));
    }
    return { ticks, settle: at + t + 50, post: at + t + 1100, up, d };
  };

  let down = null;
  window.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    const el = e.target.closest?.('button, .nav-btn, [data-go], .switch, .seg button, .map.can, .lc-swb, a[href]');
    down = { el, x: e.clientX, y: e.clientY, t: now() };
  }, true);
  const pressed = (ms = 400) => down && now() - down.t < ms && down.el?.isConnected ? down.el : null;
  const press = (c, el, depth = 0.94, end = 75) => {
    if (!el || el.matches('.switch, #acc')) return;
    U.fx(el, 'press', c, [[0, { transform: `scale(${depth})`, easing: 'cubic-bezier(.2,.8,.3,1)' }], [end, { transform: 'none' }]]);
  };
  U.on('click', c => press(c, pressed(150)));
  U.on('tab', c => {
    const el = pressed(150);
    if (!el) return;
    const ic = el.querySelector('svg, .sic') || el;
    U.fx(ic, 'press', c, [[0, { transform: 'scale(.86)', easing: 'ease-out' }], [T.tab.hit2, { transform: 'scale(1.08)', easing: 'cubic-bezier(.2,.8,.3,1)' }], [T.tab.end, { transform: 'none' }]]);
  });
  const knob = on => on
    ? [[0, { left: '3px', easing: 'cubic-bezier(.5,0,.6,1)' }], [T.toggle_on.blip, { left: '6px', easing: 'cubic-bezier(.3,.9,.4,1.25)' }], [T.toggle_on.blipEnd - 15, { left: '23px' }]]
    : [[0, { left: '23px', easing: 'cubic-bezier(.5,0,.6,1)' }], [T.toggle_off.blip, { left: '20px', easing: 'cubic-bezier(.3,.9,.4,1.25)' }], [T.toggle_off.blipEnd - 15, { left: '3px' }]];
  let knobLast = null;
  for (const id of ['toggle_on', 'toggle_off']) U.on(id, c => {
    const sw = pressed(200);
    if (!sw?.matches('.switch')) return;
    const attrs = [...sw.attributes].filter(a => a.name.startsWith('data-'));
    knobLast = { c, on: id === 'toggle_on', sel: attrs.length ? '.switch' + attrs.map(a => `[${a.name}="${CSS.escape(a.value)}"]`).join('') : null };
    U.fx(sw, 'knob', c, knob(knobLast.on), { pseudo: '::after', fill: 'forwards' });
  });
  U.deco(() => {
    if (!knobLast?.sel || now() - knobLast.c.t0 > 200) return;
    const sw = $q(knobLast.sel);
    if (sw && sw.classList.contains('on') === knobLast.on) U.fx(sw, 'knob', knobLast.c, knob(knobLast.on), { pseudo: '::after', fill: 'forwards' });
  });
  after('go', () => {
    const c = U.fresh('tab', 250) || U.fresh('click', 250);
    const pg = $q('#view .page');
    if (c && pg) U.fx(pg, 'pagein', c, [[0, { opacity: 0.35, transform: 'translateY(6px)', easing: 'cubic-bezier(.2,.7,.3,1)' }], [T.tab.end, { opacity: 1, transform: 'none' }]]);
  });

  const glow = (k, col = '150,157,249') => `0 0 ${Math.round(4 + 26 * k)}px rgba(${col},${Math.min(1, 0.95 * k).toFixed(2)})`;
  const ring = (k, col = '150,157,249') => `0 0 0 ${Math.round(1 + 2 * k)}px rgba(${col},${Math.min(1, 0.95 * k).toFixed(2)}), 0 0 ${Math.round(10 + 80 * k)}px rgba(${col},${Math.min(1, 0.7 * k).toFixed(2)})`;
  U.deco(() => {
    const f = $q('#modal[data-kind="ready"] .found');
    if (!f) return;
    const M = T.match_found, c = U.fresh('match_found', 3000);
    if (c) {
      U.fx(f.parentElement, 'in', c, [[-70, { opacity: 0 }], [M.pulses[0], { opacity: 1 }]]);
      U.fx(f, 'pop', c, [[-70, { transform: 'scale(.8)', opacity: 0, easing: 'cubic-bezier(.3,.6,.4,1)' }], [M.pulses[0], { transform: 'scale(1.03)', opacity: 1, easing: 'ease-out' }],
        [M.pulses[1] - 2, { transform: 'scale(1)' }], [M.pulses[1], { transform: 'scale(1.035)', easing: 'ease-out' }], [M.brass - 2, { transform: 'scale(.995)' }],
        [M.brass, { transform: 'scale(1.07)', easing: 'cubic-bezier(.2,.7,.3,1)' }], [M.brass + 450, { transform: 'none' }]]);
      U.fx(f, 'flash', c, [[M.brass - 1, { boxShadow: ring(0) }], [M.brass, { boxShadow: ring(1) }], [M.brass + 900, { boxShadow: ring(0) }]]);
      U.fx(f.querySelector('h1'), 'glow', c, [[M.pulses[0], { textShadow: glow(1), easing: 'ease-out' }], [M.pulses[1] - 2, { textShadow: glow(0.1) }], [M.pulses[1], { textShadow: glow(1), easing: 'ease-out' }],
        [M.brass - 2, { textShadow: glow(0.15) }], [M.brass, { textShadow: glow(1.3), color: '#fff', easing: 'ease-out' }], [M.brass + 700, { textShadow: glow(0) }]]);
      const rg = f.querySelector('.ring');
      if (rg) U.fx(rg, 'bells', c, M.bells.flatMap((b, i) => [[b - (i ? 2 : 0), { filter: 'brightness(1)' }], [b + (i ? 0 : 1), { filter: 'brightness(1.9) drop-shadow(0 0 8px rgba(150,157,249,.9))', easing: 'ease-out' }]]).concat([[M.bells[3] + 260, { filter: 'brightness(1)' }]]));
    }
    const a = U.fresh('accept', 1500), A = T.accept;
    if (a && S.live?.ready?.iAccepted) {
      U.fx(f.querySelector('h3.win'), 'lock', a, [[-50, { opacity: 0, transform: 'scale(1.6)', easing: 'cubic-bezier(.6,0,1,.5)' }], [A.lock, { opacity: 1, transform: 'scale(.92)', easing: 'ease-out' }],
        [A.lock2, { transform: 'scale(1.06)', textShadow: glow(1, '126,224,138'), easing: 'cubic-bezier(.2,.7,.3,1)' }], [A.lock2 + 300, { transform: 'none', textShadow: glow(0, '126,224,138') }]]);
      const dots = f.querySelectorAll('.dots i.ok');
      U.fx(dots[dots.length - 1], 'lock', a, [[A.lock, { transform: 'scale(.4)' }], [A.lock2, { transform: 'scale(1.6)', easing: 'cubic-bezier(.2,.7,.3,1)' }], [A.lock2 + 220, { transform: 'none' }]]);
    }
  });
  U.on('click', c => { const el = pressed(150); if (el?.id === 'acc') U.fx(el, 'press', c, [[0, { transform: 'scale(.9)', filter: 'brightness(1.4)' }], [T.click.end + 60, { transform: 'none', filter: 'none' }]]); });

  U.deco(() => {
    const m = S.live?.match;
    if (!m || !$q('#view .mbar')) return;
    const r = U.fresh('all_ready', 2500);
    if (r) {
      $all('#view .stepper > div').slice(0, 4).forEach((d, i) => U.fx(d, 'arp', r, [[T.all_ready.arp[i] - 1, { boxShadow: ring(0), filter: 'brightness(1)' }],
        [T.all_ready.arp[i], { boxShadow: ring(0.8), filter: 'brightness(1.6)', easing: 'ease-out' }], [T.all_ready.arp[i] + 500, { boxShadow: ring(0), filter: 'brightness(1)' }]]));
      U.fx($q('#view .mbar'), 'lock', r, [[T.all_ready.lock - 1, { transform: 'none', boxShadow: ring(0) }], [T.all_ready.lock, { transform: 'scale(1.02)', boxShadow: ring(0.9), easing: 'cubic-bezier(.2,.7,.3,1)' }],
        [T.all_ready.lock + 600, { transform: 'none', boxShadow: ring(0) }]]);
    }
    const b = U.fresh('ban', 1500);
    if (b && m.bans?.length && typeof MAPS !== 'undefined') {
      const last = m.bans[m.bans.length - 1], card = $all('#view .maps > .map')[(typeof matchMaps === 'function' ? matchMaps(m) : MAPS).indexOf(last.map)], S0 = T.ban.stamp;
      if (card?.classList.contains('banned')) {
        U.fx(card, 'stamp', b, [[0, { transform: 'none', filter: 'none', easing: 'cubic-bezier(.4,0,.9,.5)' }], [S0 - 8, { transform: 'scale(1.07)', filter: 'brightness(1.25)' }],
          [S0, { transform: 'scale(.93)', filter: 'brightness(1.7)' }], [S0 + 30, { transform: 'scale(.95) translate(-5px, 1px)' }], [S0 + 60, { transform: 'scale(.97) translate(4px, -1px)' }],
          [S0 + 90, { transform: 'scale(.98) translate(-3px, 0)' }], [S0 + 120, { transform: 'scale(.99) translate(2px, 0)' }], [S0 + 260, { transform: 'none', filter: 'none' }]]);
        U.fx(card, 'stampTxt', b, [[0, { opacity: 0, transform: 'scale(2.6) rotate(-9deg)', easing: 'cubic-bezier(.6,0,1,.4)' }], [S0, { opacity: 1, transform: 'scale(.94) rotate(-4deg)', easing: 'ease-out' }],
          [S0 + 140, { transform: 'scale(1.04) rotate(-4deg)' }], [S0 + 300, { transform: 'rotate(0deg)' }]], { pseudo: '::after' });
        U.fx(card, 'stampDim', b, [[S0 - 1, { opacity: 0 }], [S0, { opacity: 1 }]], { pseudo: '::before' });
        U.fx(card.querySelector('.by'), 'stampBy', b, [[S0 - 1, { opacity: 0 }], [S0 + 120, { opacity: 1 }]]);
      }
    }
    const bm = $q('#view .bigmap');
    const mr = U.fresh('map_reveal', 3000), I = T.map_reveal.impact;
    if (bm && mr && m.state === 'live') {
      U.fx(bm, 'reveal', mr, [[0, { filter: 'brightness(.25) saturate(0) blur(3px)', transform: 'scale(1.03)', easing: 'cubic-bezier(.5,0,.9,.5)' }],
        [I - 2, { filter: 'brightness(.85) saturate(.6) blur(0px)', transform: 'scale(1)' }], [I, { filter: 'brightness(1.9) saturate(1.3) blur(0px)', transform: 'scale(1.045)', easing: 'cubic-bezier(.2,.7,.3,1)' }],
        [I + 650, { filter: 'brightness(1) saturate(1) blur(0px)', transform: 'none' }]]);
      U.fx(bm.querySelector('span'), 'name', mr, [[I - 90, { opacity: 0, transform: 'translateY(16px) scale(1.4)', easing: 'cubic-bezier(.6,0,1,.6)' }], [I, { opacity: 1, transform: 'none' }]]);
    }
    const dp = U.fresh('deploy', 3000), D = T.deploy;
    if (bm && dp && m.state === 'live' && !calm() && now() < dp.t0 + 2800) {
      let bn = bm.querySelector('.sy-live');
      if (!bn) { bn = document.createElement('div'); bn.className = 'sy-live'; bn.textContent = (typeof t === 'function' ? t('stepLive') : 'LIVE'); bm.append(bn); }
      U.fx(bn, 'sweep', dp, [[D.thud - 160, { transform: 'translateX(-120%) skewX(-14deg)', opacity: 0, easing: 'cubic-bezier(.6,0,1,.6)' }],
        [D.thud, { transform: 'translateX(0) skewX(-14deg)', opacity: 1, filter: 'brightness(1.6)', easing: 'cubic-bezier(.2,.8,.3,1)' }], [D.thud + 120, { transform: 'translateX(1.5%) skewX(-14deg)', filter: 'brightness(1)' }],
        [D.brass - 1, { transform: 'translateX(0) skewX(-14deg)', filter: 'brightness(1)' }], [D.brass, { filter: 'brightness(1.9)', easing: 'ease-out' }], [D.brass + 380, { filter: 'brightness(1)' }],
        [D.squelch, { opacity: 1, transform: 'translateX(0) skewX(-14deg)', easing: 'ease-in' }], [D.squelch + 1400, { opacity: 0, transform: 'translateX(8%) skewX(-14deg)' }]], { fill: 'both' });
      U.fx($q('#view .mbar .vs'), 'thud', dp, [[D.thud - 1, { transform: 'none' }], [D.thud, { transform: 'scale(1.45)', color: '#fff', easing: 'cubic-bezier(.2,.7,.3,1)' }], [D.thud + 400, { transform: 'none' }]]);
      U.fx($q('#view .stepper .cur'), 'live', dp, [[D.thud - 1, { boxShadow: ring(0) }], [D.thud, { boxShadow: ring(1), easing: 'ease-out' }], [D.thud + 700, { boxShadow: ring(0) }]]);
    }
    const rs = U.fresh('result_submitted', 1500);
    if (rs && m.state === 'submitted') {
      const card = $all('#view .center-col > .card.accent').pop();
      const R = T.result_submitted;
      U.fx(card, 'sub', rs, R.burst.flatMap(x => [[x, { filter: 'brightness(1.35)', easing: 'steps(1)' }], [x + 16, { filter: 'brightness(1)' }]])
        .concat([[R.confirm - 1, { transform: 'none', boxShadow: ring(0) }], [R.confirm, { transform: 'scale(1.015)', boxShadow: ring(0.8), easing: 'ease-out' }], [R.confirm + 450, { transform: 'none', boxShadow: ring(0) }]]));
    }
    const sa = U.fresh('staff_alert', 1500);
    if (sa && m.state === 'disputed') alarm($q('#view .center-col h3.lose')?.closest('.card'), sa);
  });
  const alarm = (el, c, col = '240,122,122') => U.fx(el, 'alarm', c, T.staff_alert.hits.flatMap((h, i) => [[h - (i ? 2 : 0), { boxShadow: ring(0, col) }], [h + (i ? 0 : 1), { boxShadow: ring(1, col), easing: 'ease-out' }]])
    .concat([[T.staff_alert.hits[5] + 300, { boxShadow: ring(0, col) }]]));

  const HIT = { victory: T.victory.hit, defeat: T.defeat.hit, draw: T.draw.hit };
  let elo = null;
  U.deco(() => {
    const fin = $q('#view .card.final'), m = S.finishedMatch;
    if (!fin || !m) return;
    const id = m.draw ? 'draw' : m.state === 'done' && m.me ? (m.result.winner === m.me ? 'victory' : 'defeat') : null;
    const c = id && U.fresh(id, 9000);
    if (!c || c.mid !== m.id) return;
    const h = HIT[id], h1 = fin.querySelector('h1');
    U.fx(h1, 'slam', c, [[h - 110, { opacity: 0, transform: 'scale(1.7)', filter: 'blur(6px)', easing: 'cubic-bezier(.6,0,1,.5)' }], [h, { opacity: 1, transform: 'scale(.95)', filter: 'blur(0px)', easing: 'cubic-bezier(.2,.7,.3,1)' }],
      [h + 130, { transform: 'scale(1.03)' }], [h + 420, { transform: 'none', filter: 'blur(0px)' }]]);
    if (id === 'victory') {
      const V = T.victory;
      U.fx(fin, 'roll', c, V.roll.flatMap((x, i) => [[x, { transform: `translateY(${(1 + i * 0.4).toFixed(1)}px)`, easing: 'ease-out' }], [x + 27, { transform: 'none' }]]).concat([[V.roll[5] + 55, { transform: 'none' }]]));
      U.fx(fin, 'chord', c, [[V.chord - 1, { boxShadow: ring(0, '244,197,66') }], [V.chord, { boxShadow: ring(1, '244,197,66'), easing: 'ease-out' }], [V.chord + 1400, { boxShadow: ring(0, '244,197,66') }]]);
      U.fx(h1, 'motif', c, V.motif.flatMap((x, i) => [[x + (i ? 0 : 1), { textShadow: glow(0.9, '126,224,138'), easing: 'ease-out' }], [x + 130, { textShadow: glow(0.15, '126,224,138') }]])
        .concat([[V.chord, { textShadow: glow(1.3, '244,197,66'), easing: 'ease-out' }], [V.chord + 1200, { textShadow: glow(0, '244,197,66') }]]));
    } else if (id === 'defeat') {
      U.fx(h1, 'sink', c, [[T.defeat.hit + 1, { textShadow: glow(1, '240,122,122'), easing: 'ease-out' }], ...T.defeat.notes.map((x, i) => [x, { textShadow: glow(0.5 - i * 0.1, '240,122,122') }]), [T.defeat.notes[3] + 900, { textShadow: glow(0, '240,122,122') }]]);
    } else {
      U.fx(h1, 'bells', c, T.draw.bells.flatMap((x, i) => [[x - (i ? 0 : 0), { textShadow: glow(0.8) , easing: 'ease-out' }], [x + 120, { textShadow: glow(0.1) }]]));
    }
    const d = m.eloDelta?.[S.me.id], h2 = fin.querySelector('h2');
    if (d == null || !h2 || calm()) return;
    const plan = U.eloPlan(id, d);
    if (!plan.ticks.length) return;
    if (!elo || elo.c !== c) { elo = { c, plan }; requestAnimationFrame(eloFrame); }
    if (!h2.querySelector('.sy-elo')) {
      const tn = [...h2.childNodes].find(n => n.nodeType === 3 && /ELO/.test(n.textContent));
      if (tn) { const sp = document.createElement('span'); sp.className = 'sy-elo'; const v0 = now() - c.t0 < plan.settle ? eloValue(plan, now() - c.t0) : d; sp.textContent = typeof sign === 'function' ? sign(v0) : v0; tn.textContent = tn.textContent.replace(/^\s*[+−-]?\d+/, ''); h2.prepend(sp); }
    }
    const t0 = plan.ticks[0].t, st = plan.settle;
    U.fx(h2, 'in', c, [[t0 - 160, { opacity: 0, transform: 'translateY(8px)', easing: 'ease-out' }], [t0, { opacity: 1, transform: 'none' }]]);
    U.fx(h2.querySelector('.sy-elo'), 'ticks', c, plan.ticks.flatMap(k => [[k.t, { transform: 'scale(1.12)', easing: 'ease-out' }], [k.t + 30, { transform: 'scale(1)' }]])
      .concat([[st - 1, { transform: 'scale(1)' }], [st, { transform: 'scale(1.3)', textShadow: glow(1, d > 0 ? '126,224,138' : '240,122,122'), easing: 'cubic-bezier(.2,.7,.3,1)' }],
        [st + T[d > 0 ? 'elo_up' : 'elo_down'].bell2, { transform: 'scale(1.18)' }], [st + 600, { transform: 'none', textShadow: glow(0, d > 0 ? '126,224,138' : '240,122,122') }]]));
    U.fx(h2.querySelector('.kf'), 'kf', c, [[st - 1, { opacity: 0, transform: 'translateX(-6px)' }], [st + T.elo_up.bell2, { opacity: 1, transform: 'none', easing: 'ease-out' }]]);
  });
  const mkLead = () => { let last = 0, lead = 8; return ts => { if (last && ts > last) lead = Math.min(16, Math.max(4, (ts - last) / 2)); last = ts; return lead; }; };
  const leadE = mkLead(), leadK = mkLead();
  const eloValue = (plan, tt) => { let v = 0; for (const k of plan.ticks) if (tt >= k.t) v = k.v; return v; };
  function eloFrame(ts) {
    if (!elo) return;
    const { c, plan } = elo, tt = now() - c.t0 + leadE(ts);
    const el = $q('#view .card.final .sy-elo');
    const v = eloValue(plan, tt);
    if (el) { const s = typeof sign === 'function' ? sign(v) : String(v); if (el.textContent !== s) { el.textContent = s; log('eloTick', v, Math.round(now())); } }
    if (tt < plan.settle + 50 && el?.isConnected !== false) requestAnimationFrame(eloFrame);
    else { if (el) el.textContent = typeof sign === 'function' ? sign(plan.d) : plan.d; elo = null; }
  }

  U.on('level_up', c => {
    const L = T.level_up;
    U.fx($q('#tb-user .lvl'), 'lvl', c, [[0, { transform: 'none', filter: 'brightness(1)', easing: 'ease-in' }], ...L.arp.slice(0, 4).map((x, i) => [x, { transform: `scale(${1 + 0.05 * (i + 1)})`, filter: `brightness(${1.2 + 0.15 * i})` }]),
      [L.hit, { transform: 'scale(1.7)', filter: 'brightness(2.2) drop-shadow(0 0 12px #f4c542)', easing: 'cubic-bezier(.2,.7,.3,1)' }], [L.hit + 700, { transform: 'none', filter: 'brightness(1)' }]]);
  });
  U.on('pass_level_up', c => {
    const P = T.pass_level_up;
    const fr = (big) => [[0, { transform: 'none', filter: 'brightness(1)' }], ...P.ladder.slice(0, 3).map((x, i) => [x, { transform: `translateY(${-2 - i}px)`, filter: `brightness(${1.15 + i * 0.1})`, easing: 'ease-out' }]),
      [P.hit, { transform: `scale(${big})`, filter: 'brightness(2) drop-shadow(0 0 12px #f4c542)', easing: 'cubic-bezier(.2,.7,.3,1)' }], [P.hit + 650, { transform: 'none', filter: 'brightness(1)' }]];
    U.fx($q('#view .lc-lvbig b'), 'plvl', c, fr(1.5));
    U.fx($q('#nav [data-go="pass"] svg'), 'plvl', c, fr(1.35));
  });
  U.on('equip', c => {
    const el = pressed(3000)?.closest('.lc-swb, .inv, .card, button') || pressed(3000);
    U.fx(el, 'equip', c, [[0, { transform: 'none', easing: 'ease-in' }], [T.equip.latch - 5, { transform: 'translateY(-3px) scale(1.02)' }], [T.equip.latch, { transform: 'scale(.96)', boxShadow: ring(0.8, '244,197,66'), easing: 'cubic-bezier(.2,.7,.3,1)' }], [T.equip.latch + 300, { transform: 'none', boxShadow: ring(0, '244,197,66') }]]);
  });
  let kf = { shown: null, from: null, to: null, at: 0 }, kfAnim = null;
  after('renderMe', () => {
    const v = S.me?.coins ?? 0;
    if (kf.shown != null && v !== kf.shown) { kf.from = kfAnim ? kfAnim.cur : kf.shown; kf.to = v; kf.at = now(); tryKf(); }
    kf.shown = v;
    U.redraw();
  });
  function tryKf(c) {
    if (kf.to == null || now() - kf.at > 1500) return;
    c ||= ['reward', 'coin'].map(id => U.fresh(id, 1200)).filter(x => x && Math.abs(x.made - kf.at) < 1500).sort((a, b) => b.made - a.made)[0];
    if (!c) return;
    const steps = c.id === 'reward' ? T.reward.shower : [T.coin.ring1, T.coin.ring2];
    kfAnim = { c, from: kf.from, to: kf.to, steps, cur: kf.from };
    kf.to = null;
    if (c.id === 'reward' && !calm()) coinShower(c);
    requestAnimationFrame(kfFrame);
  }
  ['coin', 'reward'].forEach(id => U.on(id, c => tryKf(c)));
  function kfFrame(ts) {
    const k = kfAnim;
    if (!k) return;
    const tt = now() - k.c.t0 + leadK(ts);
    let n = 0;
    for (const s of k.steps) if (tt >= s) n++;
    k.cur = Math.round(k.from + (k.to - k.from) * n / k.steps.length);
    const el = $q('#tb-user .kf');
    if (el) el.textContent = `${k.cur} KF`;
    if (n < k.steps.length) requestAnimationFrame(kfFrame); else kfAnim = null;
  }
  U.deco(() => {
    const el = $q('#tb-user .kf');
    if (!el) return;
    if (kfAnim && el.textContent !== `${kfAnim.cur} KF`) el.textContent = `${kfAnim.cur} KF`;
    const co = U.fresh('coin', 1200);
    if (co) U.fx(el, 'coin', co, [[T.coin.ring1, { transform: 'scale(1.35)', textShadow: glow(1, '244,197,66'), easing: 'ease-out' }], [T.coin.ring2 - 2, { transform: 'scale(1.08)' }],
      [T.coin.ring2, { transform: 'scale(1.25)', textShadow: glow(0.8, '244,197,66'), easing: 'ease-out' }], [T.coin.ring2 + 330, { transform: 'none', textShadow: glow(0, '244,197,66') }]]);
    const rw = U.fresh('reward', 1500);
    if (rw) U.fx(el, 'coin', rw, [[0, { transform: 'none' }], ...spaced(T.reward.shower, 22).flatMap(x => [[x, { transform: 'scale(1.22)', textShadow: glow(0.9, '244,197,66'), easing: 'ease-out' }], [x + 18, { transform: 'scale(1.1)' }]]),
      [T.reward.shower.at(-1) + 400, { transform: 'none', textShadow: glow(0, '244,197,66') }]]);
  });
  function coinShower(c) {
    const dst = $q('#tb-user .kf')?.getBoundingClientRect();
    if (!dst) return;
    const src = down && now() - down.t < 4000 ? { x: down.x, y: down.y } : { x: innerWidth / 2, y: innerHeight / 2 };
    const tx = dst.left + dst.width / 2, ty = dst.top + dst.height / 2;
    T.reward.shower.forEach((arr, i) => {
      const el = document.createElement('i');
      el.className = 'sy-coin';
      el.style.left = src.x + 'px'; el.style.top = src.y + 'px';
      document.body.append(el);
      const dx = tx - src.x, dy = ty - src.y, bow = -60 - (i % 5) * 18, side = ((i * 37) % 60) - 30;
      const a = U.fx(el, 'fly', c, [[0, { transform: 'translate(-50%,-50%) scale(.4)', opacity: 0 }], [Math.min(40, arr / 3), { opacity: 1, transform: `translate(calc(-50% + ${side * 0.3}px), calc(-50% + ${bow * 0.3}px)) scale(1)` }],
        [arr * 0.55, { transform: `translate(calc(-50% + ${dx * 0.5 + side}px), calc(-50% + ${dy * 0.5 + bow}px)) scale(1)`, easing: 'cubic-bezier(.5,0,.9,.6)' }],
        [arr, { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.7)`, opacity: 1 }], [arr + 60, { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.6)`, opacity: 0 }]], { fill: 'both' });
      if (a) a.finished.then(() => el.remove(), () => el.remove()); else el.remove();
      setTimeout(() => el.remove(), 3000);
    });
  }

  const PEAK = { notify: T.notify.peak, ok: T.ok.peak, error: T.error.peak, achievement: T.achievement.peak, reward: T.reward.peak, coin: T.coin.peak, friend_online: T.friend_online.peak,
    clan_invite: T.clan_invite.peak, party_join: T.party_join.peak, party_leave: T.party_leave.peak, msg: T.msg.peak, fives_reminder: 0, equip: T.equip.peak, level_up: T.level_up.hit, pass_level_up: T.pass_level_up.hit };
  const SLIDE = 140;
  function land(el, made) {
    if (!el || calm()) return;
    const tmp = { id: 'toast', made, t0: made + 75, anims: [], jobs: [] };
    const fr = peak => [[peak - SLIDE, { opacity: 0, transform: 'translateY(16px) scale(.96)', easing: 'cubic-bezier(.2,.75,.3,1.15)' }], [peak, { opacity: 1, transform: 'none' }]];
    U.fx(el, 'land', tmp, fr(0), { fill: 'backwards' });
    queueMicrotask(() => {
      const c = Object.keys(PEAK).map(id => U.cues[id]).filter(x => x && x.made >= made - 30 && x.made <= now() + 1).sort((a, b) => (a.soft - b.soft) || (b.made - a.made))[0];
      if (!c) return;
      el.__sy?.land?.a.cancel(); if (el.__sy) delete el.__sy.land;
      U.fx(el, 'land', c, fr(PEAK[c.id]), { fill: 'backwards' });
      if (c.id === 'achievement') U.fx(el, 'medal', c, T.achievement.bells.flatMap(b => [[b, { boxShadow: ring(0.9, '244,197,66'), easing: 'ease-out' }], [b + 90, { boxShadow: ring(0.1, '244,197,66') }]]).concat([[T.achievement.bells[3] + 400, { boxShadow: ring(0, '244,197,66') }]]));
      if (c.id === 'clan_invite') U.fx(el, 'bells', c, T.clan_invite.bells.flatMap(b => [[b, { boxShadow: ring(0.8), easing: 'ease-out' }], [b + 120, { boxShadow: ring(0.1) }]]).concat([[T.clan_invite.bells[1] + 400, { boxShadow: ring(0) }]]));
      if (c.id === 'friend_online') U.fx(el, 'bells', c, [[T.friend_online.bell2 - 1, { boxShadow: ring(0, '126,224,138') }], [T.friend_online.bell2, { boxShadow: ring(0.8, '126,224,138'), easing: 'ease-out' }], [T.friend_online.bell2 + 500, { boxShadow: ring(0, '126,224,138') }]]);
    });
  }
  for (const n of ['toast', 'actionToast']) {
    const orig = window[n];
    if (typeof orig !== 'function') continue;
    window[n] = function () {
      const made = now(), r = orig.apply(this, arguments);
      try { land($q('#toast')?.lastElementChild, made); } catch (e) { console.warn('uisync', e); }
      return r;
    };
  }
  let invN = 0;
  U.deco(() => {
    const list = $all('#invites .invite');
    if (list.length > invN && !U.fresh('party_invite', 400)) U.cue('party_invite');
    invN = list.length;
    const c = U.fresh('party_invite', 2000), P = T.party_invite;
    if (!c || !list.length) return;
    const el = list[list.length - 1];
    U.fx(el, 'in', c, [[P.chirp, { opacity: 0, transform: 'translateX(60px)', easing: 'cubic-bezier(.3,.8,.4,1.2)' }], [P.bells[0], { opacity: 1, transform: 'none' }]]);
    U.fx(el, 'bells', c, P.bells.flatMap((b, i) => [[b + (i ? 0 : 1), { boxShadow: ring(0.85, '126,224,138'), easing: 'ease-out' }], [b + 100, { boxShadow: ring(0.1, '126,224,138') }]]).concat([[P.bells[2] + 500, { boxShadow: ring(0, '126,224,138') }]]));
  });
  U.on('fives_reminder', c => queueMicrotask(() => {
    const el = $q('.la-note[data-note="fives"]');
    U.fx(el, 'horn', c, T.fives_reminder.hits.flatMap((h, i) => [[h + (i ? 0 : 1), { boxShadow: ring(1, '244,197,66'), transform: `scale(${1.02 + i * 0.01})`, easing: 'ease-out' }], [h + 200, { boxShadow: ring(0.15, '244,197,66'), transform: 'none' }]])
      .concat([[T.fives_reminder.hits[2] + 900, { boxShadow: ring(0, '244,197,66') }]]));
  }));
  U.on('staff_alert', c => queueMicrotask(() => { const n = $all('.la-note[data-note^="sla"]'); alarm(n[0], c); }));

  after('modal', () => {
    const ov = $q('#modal .overlay'), made = now();
    if (!ov || calm()) return;
    const card = ov.firstElementChild, Mo = T.modal_open;
    const fr = [[0, { opacity: 0, transform: 'translateY(22px) scale(.96)', easing: 'cubic-bezier(.3,.7,.4,1)' }], [Mo.latch, { opacity: 1, transform: 'scale(1.012)', easing: 'ease-out' }], [Mo.latch + 110, { transform: 'none' }]];
    const tmp = { id: 'modal_open', made, t0: made + U.latency(), anims: [], jobs: [] };
    U.fx(ov, 'in', tmp, [[0, { opacity: 0 }], [Mo.latch, { opacity: 1 }]]);
    U.fx(card, 'in', tmp, fr);
    queueMicrotask(() => {
      const c = U.fresh('modal_open', 300);
      if (!c || c.made < made - 5) { ov.__sy?.in?.a.cancel(); card?.__sy?.in?.a.cancel(); return; }
      if (ov.__sy?.in) ov.__sy.in.a.startTime = c.t0;
      if (card?.__sy?.in) card.__sy.in.a.startTime = c.t0;
      c.anims.push({ a: ov.__sy.in.a, off: 0 }); if (card?.__sy?.in) c.anims.push({ a: card.__sy.in.a, off: 0 });
    });
  });
  const _close = window.closeModal;
  if (typeof _close === 'function') window.closeModal = function () {
    const box = $q('#modal'), ov = box?.querySelector('.overlay');
    const g = ov && box.dataset.kind !== 'ready' && !calm() ? ov.cloneNode(true) : null, made = now();
    const r = _close.apply(this, arguments);
    if (g) {
      g.classList.add('sy-ghost');
      g.querySelectorAll('[id]').forEach(e => e.removeAttribute('id'));
      document.body.append(g);
      const Mc = T.modal_close, tmp = { id: 'modal_close', made, t0: made + U.latency(), anims: [], jobs: [] };
      const fa = U.fx(g, 'out', tmp, [[0, { opacity: 1 }], [Mc.latch + 60, { opacity: 0 }]], { fill: 'forwards' });
      const fb = U.fx(g.firstElementChild, 'out', tmp, [[0, { opacity: 1, transform: 'none', easing: 'cubic-bezier(.5,0,.9,.5)' }], [Mc.latch, { opacity: 0, transform: 'translateY(14px) scale(.95)' }]], { fill: 'forwards' });
      queueMicrotask(() => { const c = U.fresh('modal_close', 300); if (c && c.made >= made - 5) for (const a of [fa, fb]) if (a) { a.startTime = c.t0; c.anims.push({ a, off: 0 }); } });
      setTimeout(() => g.remove(), 400);
    }
    return r;
  };

  U.beatAnchor = () => {
    const A = window.KA;
    if (A?.music?.cur === 'queue' && A.music.heard) return A.music.heard;
    if (A?.loopNode?.heard) return A.loopNode.heard;
    const q = U.cues.queue_start;
    return q ? q.t0 + T.queue_start.lock : null;
  };
  U.deco(() => {
    const s = $q('#view .searching');
    const pulse = s?.querySelector('.pulse');
    if (s && pulse) {
      const q = U.fresh('queue_start', 1500), Q = T.queue_start;
      if (q) {
        U.fx(s, 'in', q, [[0, { opacity: 0, transform: 'translateX(-28px) scaleX(.94)', easing: 'cubic-bezier(.5,0,.9,.6)' }], [Q.lock, { opacity: 1, transform: 'scale(1.03)', easing: 'ease-out' }],
          [Q.lock2, { transform: 'scale(.985)', easing: 'ease-out' }], [Q.lock2 + 160, { transform: 'none' }]]);
        U.fx(s, 'glow', q, [[Q.bells[0] - 1, { boxShadow: ring(0) }], [Q.bells[0], { boxShadow: ring(0.8), easing: 'ease-out' }], [Q.bells[1], { boxShadow: ring(0.5) }], [Q.bells[1] + 500, { boxShadow: ring(0) }]]);
      }
      const an = U.beatAnchor();
      if (an != null && !calm()) {
        const B = T.search;
        pulse.style.animation = 'none';
        U.loop(pulse, 'heart', an, B.bar, [[0, { transform: 'scale(1.6)', easing: 'ease-out' }], [110, { transform: 'scale(1)' }], [B.heart[1], { transform: 'scale(1.35)', easing: 'ease-out' }], [B.heart[1] + 160, { transform: 'scale(1)' }], [B.bar, { transform: 'scale(1)' }]]);
        U.loop(pulse, 'ring', an, B.beat, [[0, { boxShadow: '0 0 0 0 rgba(150,157,249,.75)', easing: 'ease-out' }], [B.beat, { boxShadow: '0 0 0 14px rgba(150,157,249,0)' }]]);
      }
    }
    const qc = U.fresh('queue_cancel', 1000), btn = $q('#view [data-act="queue"]');
    if (qc && btn) U.fx(btn, 'back', qc, [[0, { opacity: 0.3, transform: 'translateY(-10px) scale(.97)', easing: 'cubic-bezier(.6,0,1,.6)' }], [T.queue_cancel.click, { opacity: 1, transform: 'translateY(2px)', easing: 'ease-out' }], [T.queue_cancel.click + 140, { transform: 'none' }]]);
  });
})();
