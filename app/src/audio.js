(() => {
  const L = {
    en: {
      snd_tab: 'Sound', snd_master: 'Master volume', snd_sfx: 'Effects', snd_music: 'Music', snd_musicOn: 'Music in the app',
      snd_musicOnH: 'Ambient themes in the menu, queue and match lobby. Pauses while you are in a game or the window is hidden.',
      snd_ui: 'Interface sounds', snd_uiH: 'Clicks, notifications, match flow, rewards', snd_hover: 'Hover sounds', snd_hoverH: 'A very quiet tick when the cursor moves over buttons',
      snd_force: 'Match found — always', snd_forceH: 'Play the match-found alert even when sounds are muted', snd_test: 'Test', snd_testFx: 'Effects',
      snd_testFound: 'Match found', snd_testWin: 'Victory', snd_testMusic: 'Themes', snd_th_menu: 'Menu', snd_th_queue: 'Search', snd_th_lobby: 'Lobby',
      snd_th_s1: 'Season 1', snd_th_s2: 'Polaris', snd_pack: 'Sound style', snd_packH: 'All interface sounds and music', snd_pk_: 'Konzte', snd_pk_anime: 'Swordsman', snd_pk_dark: 'Dark fantasy', snd_pk_winter: 'Winter', snd_packBuy: 'Buy in the shop → Music', snd_stop: 'Stop', snd_note: 'All sounds and music are original — synthesized for Konzte.',
      snd_notifH: 'Volume and music settings are in the Sound tab',
    },
    uk: {
      snd_tab: 'Звук', snd_master: 'Загальна гучність', snd_sfx: 'Ефекти', snd_music: 'Музика', snd_musicOn: 'Музика в застосунку',
      snd_musicOnH: 'Фонові теми в меню, черзі й лобі матчу. Стає на паузу, коли ти в грі або вікно сховане.',
      snd_ui: 'Звуки інтерфейсу', snd_uiH: 'Кліки, сповіщення, етапи матчу, нагороди', snd_hover: 'Звук наведення', snd_hoverH: 'Дуже тихий клік, коли курсор проходить над кнопками',
      snd_force: 'Матч знайдено — завжди', snd_forceH: 'Звук знайденого матчу лунає, навіть якщо звуки вимкнено', snd_test: 'Перевірити', snd_testFx: 'Ефекти',
      snd_testFound: 'Матч знайдено', snd_testWin: 'Перемога', snd_testMusic: 'Теми', snd_th_menu: 'Меню', snd_th_queue: 'Пошук', snd_th_lobby: 'Лобі',
      snd_th_s1: 'Сезон 1', snd_th_s2: 'Полярна зірка', snd_pack: 'Стиль звуку', snd_packH: 'Усі звуки інтерфейсу й музика', snd_pk_: 'Konzte', snd_pk_anime: 'Мечник', snd_pk_dark: 'Темне фентезі', snd_pk_winter: 'Зима', snd_packBuy: 'Купити в магазині → Музика', snd_stop: 'Стоп', snd_note: 'Усі звуки й музика оригінальні — синтезовані для Konzte.',
      snd_notifH: 'Гучність і музика — у вкладці «Звук»',
    },
    ru: {
      snd_tab: 'Звук', snd_master: 'Общая громкость', snd_sfx: 'Эффекты', snd_music: 'Музыка', snd_musicOn: 'Музыка в приложении',
      snd_musicOnH: 'Фоновые темы в меню, очереди и лобби матча. Ставится на паузу, когда ты в игре или окно скрыто.',
      snd_ui: 'Звуки интерфейса', snd_uiH: 'Клики, уведомления, этапы матча, награды', snd_hover: 'Звук наведения', snd_hoverH: 'Очень тихий щелчок, когда курсор проходит над кнопками',
      snd_force: 'Матч найден — всегда', snd_forceH: 'Звук найденного матча играет, даже если звуки выключены', snd_test: 'Проверить', snd_testFx: 'Эффекты',
      snd_testFound: 'Матч найден', snd_testWin: 'Победа', snd_testMusic: 'Темы', snd_th_menu: 'Меню', snd_th_queue: 'Поиск', snd_th_lobby: 'Лобби',
      snd_th_s1: 'Сезон 1', snd_th_s2: 'Полярная звезда', snd_pack: 'Стиль звука', snd_packH: 'Все звуки интерфейса и музыка', snd_pk_: 'Konzte', snd_pk_anime: 'Мечник', snd_pk_dark: 'Тёмное фэнтези', snd_pk_winter: 'Зима', snd_packBuy: 'Купить в магазине → Музыка', snd_stop: 'Стоп', snd_note: 'Все звуки и музыка оригинальные — синтезированы для Konzte.',
      snd_notifH: 'Громкость и музыка — во вкладке «Звук»',
    },
  };
  for (const l of Object.keys(L)) if (typeof I18N !== 'undefined' && I18N[l]) Object.assign(I18N[l], L[l]);

  const C = {
    hover: { f: ['hover'], v: 0.6, j: 0.03 },
    click: { f: ['click_1', 'click_2', 'click_3'], v: 0.8, j: 0.025 },
    tab: { f: ['tab'], v: 0.8, j: 0.02 },
    toggle_on: { f: ['toggle_on'], v: 0.8 }, toggle_off: { f: ['toggle_off'], v: 0.8 },
    modal_open: { f: ['modal_open'], v: 0.7 }, modal_close: { f: ['modal_close'], v: 0.6 },
    notify: { f: ['notify'], v: 0.8 }, msg: { f: ['msg_1', 'msg_2', 'msg_3'], v: 0.8, j: 0.02 },
    error: { f: ['error'], v: 0.8 }, ok: { f: ['ok'], v: 0.8 },
    coin: { f: ['coin_1', 'coin_2', 'coin_3'], v: 0.85, j: 0.02 }, equip: { f: ['equip'], v: 0.85 },
    level_up: { f: ['level_up'], v: 0.9, duck: 1 }, pass_level_up: { f: ['pass_level_up'], v: 0.9, duck: 1 },
    reward: { f: ['reward'], v: 0.9, duck: 1 }, achievement: { f: ['achievement'], v: 0.9, duck: 1 },
    friend_online: { f: ['friend_online'], v: 0.8 }, party_invite: { f: ['party_invite'], v: 0.9 },
    party_join: { f: ['party_join'], v: 0.85 }, party_leave: { f: ['party_leave'], v: 0.8 }, clan_invite: { f: ['clan_invite'], v: 0.9 },
    login: { f: ['login'], v: 0.8 },
    queue_start: { f: ['queue_start'], v: 0.9 }, queue_cancel: { f: ['queue_cancel'], v: 0.85 },
    search_loop: { f: ['search_loop'], v: 0.5, loop: 1 },
    match_found: { f: ['match_found'], v: 1.0, duck: 1 }, accept: { f: ['accept'], v: 0.9 }, all_ready: { f: ['all_ready'], v: 0.9, duck: 1 },
    ban: { f: ['ban_1', 'ban_2'], v: 0.85, duck: 1, j: 0.015 }, map_reveal: { f: ['map_reveal'], v: 0.9, duck: 1 },
    deploy: { f: ['deploy'], v: 0.9, duck: 1 }, result_submitted: { f: ['result_submitted'], v: 0.85 },
    victory: { f: ['victory'], v: 1.0, duck: 1 }, defeat: { f: ['defeat'], v: 0.95, duck: 1 }, draw: { f: ['draw'], v: 0.95, duck: 1 },
    elo_tick_up: { f: ['elo_tick_up'], v: 0.6 }, elo_tick_down: { f: ['elo_tick_down'], v: 0.6 },
    elo_up: { f: ['elo_up'], v: 0.8 }, elo_down: { f: ['elo_down'], v: 0.8 },
    calibration: { f: ['calibration'], v: 1.0, duck: 1 }, staff_alert: { f: ['staff_alert'], v: 0.9, duck: 1 }, fives_reminder: { f: ['fives_reminder'], v: 0.9, duck: 1 },
  };
  const ALIAS = { tick: 'click', nav: 'tab', queue: 'queue_start', cancel: 'queue_cancel', start: 'deploy', join: 'party_join', ach: 'achievement',
    win: 'victory', lose: 'defeat', leave: 'party_leave', friend: 'friend_online', clan_challenge: 'fives_reminder', staff: 'staff_alert' };
  const MUSIC = { menu: 'music_menu', queue: 'music_queue', lobby: 'music_lobby', s1: 'music_s1', s2: 'music_s2' };
  const BASE = 'audio/';
  const PACKS = ['', 'anime', 'dark'];
  const packOk = p => PACKS.includes(p) && (typeof kzMusOk !== 'function' || kzMusOk(p));
  let packCache = null;
  const packOwned = p => !p || !!(S.myProfile?.available?.musics || []).includes(p) || !!(S.shop?.owned?.musics || []).includes(p);
  const packWorn = () => {
    const pr = S.token ? S.myProfile : null;
    let p = '';
    if (pr?.cosmetics) { p = pr.cosmetics.music || ''; if (p && pr.available?.musics && !pr.available.musics.includes(p)) p = ''; if (p !== packCache) { packCache = p; try { localStorage.setItem('kz-music', p); } catch {} } }
    else if (S.token) { if (packCache == null) { try { packCache = localStorage.getItem('kz-music') || ''; } catch { packCache = ''; } } p = packCache; }
    return packOk(p) ? p : '';
  };
  const pack = () => { const p = A.prevPack; if (p != null && packOk(p)) return p; const w = packWorn(); return !w && window.KZW?.on ? 'winter' : w; };
  const musicFile = w => pack() && (w === 's1' || w === 's2') ? 'music_menu' : MUSIC[w];

  const A = window.KA = {
    ctx: null, bufs: {}, pending: {}, voices: [], last: {}, lastAny: 0, lastVar: {}, override: null, clickKind: null, beepAs: null,
    music: { want: null, cur: null, src: null, gain: null }, post: [], tab: false, preview: null, loopNode: null, prevPack: null,
  };
  A.PACKS = PACKS; A.pack = pack; A.packWorn = packWorn; A.packOwned = packOwned;
  A.packPreview = (id, track = 'menu') => {
    if (id == null) { A.prevPack = null; if (A.preview && A.previewBy === 'pack') A.preview = null; A.previewBy = null; }
    else { A.prevPack = id; A.preview = track; A.previewBy = 'pack'; }
    applyVol(); musicUpdate(); warm(true);
    document.dispatchEvent(new CustomEvent('kz:packpreview'));
  };
  A.packPlaying = () => A.prevPack != null && A.previewBy === 'pack' ? { id: A.prevPack, track: A.preview } : null;
  const cfg = () => S.cfg || {};
  const musicOn = () => (cfg().sndMusicOn ?? (cfg().uiSounds !== false)) !== false;
  const pct = (k, d) => { const v = cfg()[k]; return (v == null ? d : +v) / 100; };

  function ctx() {
    if (A.ctx) return A.ctx;
    const ac = A.ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
    A.master = ac.createGain();
    A.comp = ac.createDynamicsCompressor();
    A.comp.threshold.value = -6; A.comp.knee.value = 6; A.comp.ratio.value = 8; A.comp.attack.value = 0.002; A.comp.release.value = 0.15;
    A.sfxBus = ac.createGain(); A.musicBus = ac.createGain(); A.duck = ac.createGain(); A.forceBus = ac.createGain();
    A.sfxBus.connect(A.master); A.musicBus.connect(A.duck).connect(A.master); A.master.connect(A.comp).connect(ac.destination);
    A.forceBus.connect(A.comp);
    applyVol();
    return ac;
  }
  function applyVol() {
    if (!A.ctx) return;
    const now = A.ctx.currentTime, c = cfg();
    const set = (p, v) => { p.cancelScheduledValues(now); p.setTargetAtTime(v, now, 0.05); };
    set(A.master.gain, pct('sndMaster', 80) ** 1.6);
    set(A.sfxBus.gain, pct('sndSfx', 80) ** 1.6);
    const lis = A.previewBy === 'pack' && A.prevPack != null;
    set(A.musicBus.gain, musicOn() || lis ? (Math.max(pct('sndMusic', 50), lis ? 0.4 : 0) ** 1.6) * 0.8 : 0);
    set(A.forceBus.gain, Math.max(0.35, pct('sndMaster', 80) ** 1.6) * Math.max(0.5, pct('sndSfx', 80) ** 1.6));
  }
  A.applyVol = applyVol;

  function load(name) {
    const pk = pack(), key = pk ? pk + '/' + name : name;
    if (A.bufs[key]) return Promise.resolve(A.bufs[key]);
    return A.pending[key] ||= new Promise((res, rej) => {
      const x = new XMLHttpRequest();
      x.open('GET', BASE + key + '.ogg'); x.responseType = 'arraybuffer';
      x.onload = () => x.status && x.status !== 200 && x.status !== 0 ? rej(new Error('audio ' + x.status)) : ctx().decodeAudioData(x.response).then(b => { A.bufs[key] = b; res(b); }, rej);
      x.onerror = () => rej(new Error('audio load ' + key));
      x.send();
    }).catch(e => { delete A.pending[key]; console.warn(e); return null; });
  }
  A.load = load;

  function pick(id) {
    const f = C[id].f;
    if (f.length < 2) return f[0];
    let i = Math.floor(Math.random() * f.length);
    if (i === A.lastVar[id]) i = (i + 1) % f.length;
    A.lastVar[id] = i;
    return f[i];
  }
  function duck(secs) {
    const ac = A.ctx, now = ac.currentTime, g = A.duck.gain, low = 0.4;
    g.cancelScheduledValues(now); g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(low, now + 0.06);
    g.setValueAtTime(low, now + Math.max(0.3, secs * 0.7));
    g.linearRampToValueAtTime(1, now + Math.max(0.3, secs * 0.7) + 1.4);
  }
  async function play(id, o = {}) {
    if (!C[id]) return;
    const ac = ctx();
    if (ac.state === 'suspended') ac.resume().catch(() => {});
    const file = pick(id), b = await load(file);
    if (!b) return;
    const now = o.when != null ? Math.max(ac.currentTime, o.when) : ac.currentTime + (o.at || 0);
    const src = ac.createBufferSource(), g = ac.createGain();
    src.buffer = b;
    const j = C[id].j || 0;
    src.playbackRate.value = (o.rate || 1) * (1 + (j ? (Math.random() * 2 - 1) * j : 0));
    const vol = (C[id].v ?? 1) * (o.vol ?? 1);
    g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(vol, now + 0.003);
    src.connect(g).connect(o.force ? A.forceBus : A.sfxBus);
    if (C[id].loop) src.loop = true;
    src.start(now);
    const v = { src, g, id, t: now };
    if (window.UIS) { v.heard = UIS.heardAt(now); UIS.played(id, v.heard, o, now); }
    A.voices.push(v);
    src.onended = () => { A.voices = A.voices.filter(x => x !== v); };
    const live = A.voices.filter(x => !C[x.id].loop);
    if (live.length > 10) { const o2 = live[0]; try { o2.g.gain.setTargetAtTime(0, ac.currentTime, 0.015); o2.src.stop(ac.currentTime + 0.08); } catch {} A.voices = A.voices.filter(x => x !== o2); }
    if (C[id].duck && A.music.src) duck(b.duration);
    return v;
  }
  A.play = play;

  const allowed = force => force || cfg().uiSounds !== false;
  function sfxNew(name, soft, opts = {}) {
    let id = ALIAS[name] || name;
    if (id === 'click' && A.clickKind) { id = A.clickKind; A.clickKind = null; }
    if (A.override && A.override.until > performance.now() && A.override.from === id) { id = A.override.to; A.override = null; }
    if (!C[id]) return;
    const force = !!opts.force;
    const now = performance.now();
    if (!allowed(force)) { if (id !== 'hover' && now - (A.lastCue?.[id] || 0) >= 40) { (A.lastCue ||= {})[id] = now; window.UIS?.cue(id, { delay: (opts.at || 0) * 1000 }); } return; }
    if (now - (A.last[id] || 0) < 40) return;
    if (id === 'click' || id === 'tab' || id === 'hover') { if (now - A.lastAny < (id === 'hover' ? 60 : 110)) return; }
    if (soft) {
      if (now - A.lastAny < 350) return;
      const at = now, sid = id === 'ok' ? 'notify' : id;
      window.UIS?.cue(sid, { sound: true, delay: 45, soft: true });
      setTimeout(() => { if (A.lastAny > at) return; A.last[id] = performance.now(); A.play(sid, opts); }, 45);
      return;
    }
    A.last[id] = now;
    if (id !== 'hover') { A.lastAny = now; window.UIS?.cue(id, { sound: true, delay: (opts.at || 0) * 1000 }); }
    const p = A.play(id, opts);
    if (id === 'victory' || id === 'defeat' || id === 'draw') p.then(v => afterResult(id, v));
  }
  sfx = sfxNew;
  window.sfx = sfxNew;

  const TONE = { classic: 'notify', soft: 'friend_online', alert: 'party_invite' };
  beep = function (kind) {
    if (kind === 'match') return;
    const id = A.beepAs || TONE[cfg().tone] || 'notify';
    A.beepAs = null;
    const vol = Math.min(1.4, (cfg().volume ?? 70) / 70);
    if (cfg().uiSounds === false && S.sound) { A.play(id, { force: true, vol: vol * 0.8 }); return; }
    sfxNew(id, false, { vol });
  };

  function afterResult(id, v) {
    const m = S.finishedMatch, d = m?.eloDelta?.[S.me?.id];
    const plan = UIS.eloPlan(id, d);
    const base = v ? v.t : A.ctx.currentTime;
    for (const k of plan.ticks) A.play(plan.up ? 'elo_tick_up' : 'elo_tick_down', { when: base + k.t / 1000, rate: k.rate, cue: false });
    if (plan.settle != null) A.play(plan.up ? 'elo_up' : 'elo_down', { when: base + plan.settle / 1000, cue: false });
    const at = Math.max(0, plan.post / 1000 - (A.ctx.currentTime - base));
    const post = A.post.splice(0);
    post.forEach((p, i) => setTimeout(() => firePost(p), (at + i * 2.8) * 1000));
    clearTimeout(A.postT);
  }
  function firePost(id) {
    if (id === 'calibration' && A.calData) { const d = A.calData; A.calData = null; dispatchEvent(new CustomEvent('kz:calibrated', { detail: d })); }
    sfxNew(id);
  }
  function queuePost(id) {
    A.post.push(id);
    clearTimeout(A.postT);
    A.postT = setTimeout(() => { const p = A.post.splice(0); p.forEach((x, i) => setTimeout(() => firePost(x), i * 2800)); }, 4000);
  }

  const rk = (me, m) => me?.['r' + m];
  stateSfx = function (prev, st) {
    if (!prev) return;
    const force = cfg().sndMatchAlways !== false;
    if (st.ready && !prev.ready) {
      if (cfg().uiSounds !== false) sfxNew('match_found'); else if (S.sound || force) sfxNew('match_found', false, { force: true });
    }
    if (st.myQueue && !prev.myQueue) sfxNew('queue_start');
    else if (!st.myQueue && prev.myQueue && !st.ready && !st.match) sfxNew('queue_cancel');
    if (st.ready?.iAccepted && !prev.ready?.iAccepted) sfxNew('accept');
    const pr = prev.ready, rr = st.ready;
    if (pr && pr.accepted < pr.total && ((rr && rr.accepted >= rr.total) || (!rr && st.match && !prev.match))) sfxNew('all_ready', false, { at: 0.12 });
    const m = st.match, pm = prev.match;
    if (m && pm && m.id === pm.id) {
      if ((m.bans?.length || 0) > (pm.bans?.length || 0)) sfxNew('ban');
      if (m.state === 'live' && pm.state !== 'live') { sfxNew('map_reveal'); sfxNew('deploy', false, { at: 1.7 }); }
      if (m.state === 'submitted' && pm.state === 'live') sfxNew('result_submitted');
      if (m.state === 'disputed' && pm.state !== 'disputed') sfxNew('staff_alert');
      const last = m.chat?.[m.chat.length - 1];
      if ((m.chat?.length || 0) > (pm.chat?.length || 0) && last && last.uid !== S.me?.id) sfxNew('msg');
    }
    if (st.party && !prev.party) sfxNew('party_join');
    else if (!st.party && prev.party) sfxNew('party_leave');
    else if (st.party && prev.party) {
      if (st.party.members.length > prev.party.members.length) sfxNew('party_join');
      else if (st.party.members.length < prev.party.members.length) sfxNew('party_leave');
    }
    const a = A.meSnap, b = st.me;
    if (a && b) for (const md of ['2v2', '1v1', '5v5']) {
      const ra = rk(a, md), rb = rk(b, md);
      if (!ra || !rb) continue;
      if (ra.cal != null && rb.cal == null) { A.calData = { mode: md, elo: rb.elo, w: rb.w, l: rb.l }; queuePost('calibration'); }
      else if (rb.cal == null && typeof levelOf === 'function' && levelOf(rb.elo) > levelOf(ra.elo)) queuePost('level_up');
    }
  };

  const _onState = onState;
  onState = function (st) {
    const prev = S.live;
    A.meSnap = st.me && S.me ? JSON.parse(JSON.stringify({ r5v5: S.me.r5v5, r2v2: S.me.r2v2, r1v1: S.me.r1v1 })) : null;
    if ((st.invites?.length || 0) > (prev?.invites?.length || 0)) A.beepAs = 'party_invite';
    else if ((st.friends?.requests?.length || 0) > (prev?.friends?.requests?.length || 0)) A.beepAs = 'notify';
    const r = _onState.apply(this, arguments);
    A.beepAs = null;
    musicUpdate();
    searchLoop();
    return r;
  };

  const _api = api;
  api = async function (path, body) {
    const r = await _api.apply(this, arguments);
    try {
      if (body && /^\/api\/lc\/claim/.test(path)) A.override = { from: 'coin', to: 'reward', until: performance.now() + 1500 };
      else if (body && /^\/api\/(premium|lc)\/cosmetics/.test(path)) sfxNew('equip');
    } catch {}
    return r;
  };

  if (typeof lcLoad === 'function') {
    const _lc = lcLoad;
    lcLoad = async function () {
      const before = LC.st?.pass?.level;
      const r = await _lc.apply(this, arguments);
      const after = LC.st?.pass?.level;
      if (before != null && after > before) sfxNew('pass_level_up');
      musicUpdate();
      return r;
    };
  }

  window.addEventListener('pointerdown', e => {
    const sw = e.target.closest?.('.switch');
    A.clickKind = sw ? (sw.classList.contains('on') ? 'toggle_off' : 'toggle_on') : null;
    if (A.ctx?.state === 'suspended') A.ctx.resume().catch(() => {});
  }, true);
  let hoverEl = null;
  document.addEventListener('pointerover', e => {
    if (!cfg().sndHover) return;
    const el = e.target.closest?.('button, .nav-btn, [data-go], .switch');
    if (!el || el === hoverEl || el.disabled) return;
    hoverEl = el; sfxNew('hover');
  });

  const mbox = document.getElementById('modal');
  if (mbox) {
    let had = false, lastKind = '';
    new MutationObserver(() => {
      const has = mbox.childElementCount > 0, kind = mbox.dataset.kind || '';
      if (has && !had && kind !== 'ready') sfxNew('modal_open');
      else if (!has && had && lastKind !== 'ready') sfxNew('modal_close');
      had = has; if (has) lastKind = kind;
    }).observe(mbox, { childList: true });
  }

  function wantTrack() {
    const c = cfg();
    if (A.preview) return A.preview;
    if (!musicOn() || pct('sndMusic', 50) <= 0 || pct('sndMaster', 80) <= 0) return null;
    if (document.hidden) return null;
    const st = S.live, m = st?.match;
    if (m && ['live', 'submitted', 'disputed'].includes(m.state)) return null;
    if (m || st?.ready) return 'lobby';
    if (st?.myQueue) return 'queue';
    if (['pass', 'shop', 'inventory'].includes(S.page)) return /^S2/.test(typeof LC !== 'undefined' && LC.st?.pass?.sid || '') ? 's2' : 's1';
    return 'menu';
  }
  async function musicUpdate() {
    if (!S.cfg) return;
    const w0 = wantTrack(), want = w0 && pack() + ':' + w0, mu = A.music;
    if (want === mu.want) return;
    mu.want = want;
    const ac = ctx(), now = ac.currentTime;
    if (mu.src) {
      const { src, gain } = mu;
      gain.gain.cancelScheduledValues(now); gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + (want ? 2.5 : 1.5));
      try { src.stop(now + 2.6); } catch {}
      mu.src = mu.gain = null; mu.cur = null;
    }
    if (!want) return;
    const b = await load(musicFile(w0));
    if (!b || mu.want !== want || mu.src) return;
    const src = ac.createBufferSource(), g = ac.createGain(), t0 = ac.currentTime;
    src.buffer = b; src.loop = true;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(1, t0 + (mu.cur === null ? 3 : 2.5));
    src.connect(g).connect(A.musicBus);
    src.start(t0);
    Object.assign(mu, { src, gain: g, cur: want, heard: window.UIS ? UIS.heardAt(t0) : performance.now() });
    window.UIS?.redraw();
  }
  A.musicUpdate = musicUpdate;
  document.addEventListener('visibilitychange', () => musicUpdate());
  const _go = go;
  go = function () { const r = _go.apply(this, arguments); setTimeout(musicUpdate, 0); return r; };

  function searchLoop() {
    const on = !!S.live?.myQueue && !S.live?.ready && !S.live?.match && cfg().uiSounds !== false && !A.music.src && !A.preview;
    if (on && !A.loopNode && !A.loopStarting) {
      A.loopStarting = true;
      A.play('search_loop', { vol: 0.8, cue: false }).then(v => { A.loopStarting = false; if (v) { A.loopNode = v; window.UIS?.redraw(); if (!(S.live?.myQueue && !S.live?.ready)) searchLoop(); } });
    } else if (!on && A.loopNode) {
      const v = A.loopNode; A.loopNode = null;
      try { v.g.gain.setTargetAtTime(0, A.ctx.currentTime, 0.2); v.src.stop(A.ctx.currentTime + 1); } catch {}
    }
  }

  const IC = '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  function panelHtml() {
    const c = cfg();
    const sw = (k, on) => `<button class="switch ${on ? 'on' : ''}" data-ksw="${k}"></button>`;
    const row = (label, hint, ctl) => `<div class="srow"><div><b>${label}</b>${hint ? `<span>${hint}</span>` : ''}</div><div>${ctl}</div></div>`;
    const sl = (k, d) => `<div class="row"><input type="range" min="0" max="100" value="${c[k] ?? d}" data-ksl="${k}"><span class="mute num" style="width:34px;text-align:right" data-kslv="${k}">${c[k] ?? d}</span></div>`;
    const th = pack() ? ['menu', 'queue', 'lobby'] : ['menu', 'queue', 'lobby', 's1', 's2'];
    return `<h3><i class="sic">${IC}</i>${t('snd_tab')}</h3>
      ${row(t('snd_pack'), t('snd_packH'), `<div class="seg sm">${PACKS.filter(packOk).map(k => `<button data-kpack="${k}" class="${packWorn() === k ? 'on' : ''}" ${packOwned(k) ? '' : `title="${t('snd_packBuy')}"`}>${packOwned(k) ? '' : '🔒 '}${t('snd_pk_' + k)}</button>`).join('')}</div>`)}
      ${row(t('snd_master'), '', sl('sndMaster', 80))}
      ${row(t('snd_sfx'), '', sl('sndSfx', 80))}
      ${row(t('snd_ui'), t('snd_uiH'), sw('uiSounds', c.uiSounds !== false))}
      ${row(t('snd_force'), t('snd_forceH'), sw('sndMatchAlways', c.sndMatchAlways !== false))}
      ${row(t('snd_hover'), t('snd_hoverH'), sw('sndHover', !!c.sndHover))}
      ${row(t('snd_musicOn'), t('snd_musicOnH'), sw('sndMusicOn', musicOn()))}
      ${row(t('snd_music'), '', sl('sndMusic', 50))}
      ${row(t('snd_test'), '', `<div class="row" style="flex-wrap:wrap;justify-content:flex-end"><button class="btn ghost sm" data-ktest="fx">${t('snd_testFx')}</button><button class="btn ghost sm" data-ktest="match_found">${t('snd_testFound')}</button><button class="btn ghost sm" data-ktest="victory">${t('snd_testWin')}</button></div>`)}
      ${row(t('snd_testMusic'), '', `<div class="seg sm">${th.map(k => `<button data-kth="${k}" class="${A.preview === k ? 'on' : ''}">${t('snd_th_' + k)}</button>`).join('')}</div>${A.preview ? ` <button class="btn ghost sm" data-kth="">${t('snd_stop')}</button>` : ''}`)}
      <p class="mute" style="margin:14px 0 0;font-size:12.5px">${t('snd_note')}</p>`;
  }
  function bindPanel(panel) {
    panel.querySelectorAll('[data-ksl]').forEach(i => {
      i.oninput = () => { S.cfg = { ...S.cfg, [i.dataset.ksl]: +i.value }; panel.querySelector(`[data-kslv="${i.dataset.ksl}"]`).textContent = i.value; applyVol(); };
      i.onchange = run(async () => { await setCfg({ [i.dataset.ksl]: +i.value }); applyVol(); musicUpdate(); if (i.dataset.ksl !== 'sndMusic') sfxNew('ok'); });
    });
    panel.querySelectorAll('[data-ksw]').forEach(b => b.onclick = run(async () => {
      const k = b.dataset.ksw, on = !b.classList.contains('on');
      await setCfg({ [k]: on }); applyVol(); musicUpdate();
      if (k === 'uiSounds' && on) sfxNew('ok');
      renderSettings();
    }));
    panel.querySelectorAll('[data-ktest]').forEach(b => b.onclick = () => {
      const k = b.dataset.ktest;
      if (k === 'fx') { A.play('click'); setTimeout(() => A.play('ok'), 250); setTimeout(() => A.play('coin'), 800); }
      else A.play(k, { force: k === 'match_found' && cfg().sndMatchAlways !== false });
    });
    panel.querySelectorAll('[data-kpack]').forEach(b => b.onclick = run(async () => {
      const k = b.dataset.kpack;
      if (!packOwned(k)) { S.sh3 = { ...(S.sh3 || {}), tab: 'music', q: '' }; return go('shop'); }
      if (k === packWorn()) return;
      applyMe(await api('/api/premium/cosmetics', { music: k }));
      if (A.preview === 's1' || A.preview === 's2') A.preview = k ? 'menu' : A.preview;
      musicUpdate(); warm(true); A.play('equip');
      renderSettings();
    }));
    panel.querySelectorAll('[data-kth]').forEach(b => b.onclick = () => { A.preview = b.dataset.kth || null; musicUpdate(); renderSettings(); });
  }
  const _renderSettings = renderSettings;
  renderSettings = async function () {
    const r = await _renderSettings.apply(this, arguments);
    if (S.page !== 'settings') return r;
    const nav = document.querySelector('#view .setnav'), panel = document.querySelector('#view .setpanel');
    if (!nav || !panel || nav.querySelector('[data-ksnd]')) return r;
    const btn = document.createElement('button');
    btn.dataset.ksnd = '1'; btn.innerHTML = `<i class="sic">${IC}</i>${t('snd_tab')}`;
    const notif = nav.querySelector('[data-stt="notif"]');
    notif ? notif.after(btn) : nav.append(btn);
    nav.querySelectorAll('[data-stt]').forEach(b => b.addEventListener('click', () => { A.tab = false; }, true));
    btn.onclick = () => { A.tab = true; renderSettings(); };
    if (A.tab) {
      nav.querySelectorAll('[data-stt]').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      panel.innerHTML = panelHtml();
      bindPanel(panel);
    } else if (S.setTab === 'notif') {
      panel.querySelector('h3')?.insertAdjacentHTML('afterend', `<p class="mute" style="margin:-4px 0 10px;font-size:12.5px">${t('snd_notifH')}</p>`);
    }
    return r;
  };
  const _go2 = go;
  go = function (page) { if (page !== S.page && A.prevPack != null) { A.prevPack = null; A.previewBy = null; A.preview = null; applyVol(); } if (page !== 'settings' && A.preview) { A.preview = null; } if (page !== 'settings') A.tab = false; return _go2.apply(this, arguments); };

  function warm(again) {
    if (!S.cfg) return setTimeout(warm, 500);
    ctx();
    ['click_1', 'tab', 'ok', 'notify', 'queue_start', 'match_found', 'accept', 'toggle_on', 'toggle_off'].forEach(n => load(n));
    musicUpdate();
    const pk = pack(), rest = [...new Set(Object.values(C).flatMap(c => c.f))].filter(n => !A.bufs[pk ? pk + '/' + n : n]);
    const next = () => { const n = rest.shift(); if (n) load(n).then(() => setTimeout(next, 30)); };
    setTimeout(next, again ? 300 : 1500);
  }
  setTimeout(warm, 800);
  const _afterLogin = afterLogin;
  afterLogin = function () { const r = _afterLogin.apply(this, arguments); setTimeout(musicUpdate, 300); return r; };
})();

(() => { let last = null; setInterval(() => { const p = KA.pack(); if (p !== last) { const first = last === null; last = p; if (!first || p) { KA.musicUpdate(); } } }, 700); })();
