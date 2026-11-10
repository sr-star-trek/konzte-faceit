(() => {
  const st = () => (typeof S !== 'undefined' ? S : {});
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const calm = () => document.body.classList.contains('calm') || !!st().cfg?.reduceMotion;

  const L = {
    en: {
      mini: 'Christmas tree', title: 'Christmas Tree', kick: 'Konzte · Winter event',
      sub: 'Finish tasks one by one — each one hangs an ornament on the tree. The star on top is the exclusive Snow Rig kit.',
      rule: 'Only the active task counts. The next one opens as soon as the current one is done.', ends: 'The tree is here until January 4 — {d} left',
      play: ['Play {n} match', 'Play {n} matches'], play2v2: ['Play {n} match in 2×2', 'Play {n} matches in 2×2'], play1v1: ['Play {n} match in 1×1', 'Play {n} matches in 1×1'],
      win: ['Win {n} match', 'Win {n} matches'], kills: ['Get {n} kill', 'Get {n} kills'],
      friend: ['Play {n} match with a party friend on your team', 'Play {n} matches with a party friend on your team'], maps: ['Play on {n} different map', 'Play on {n} different maps'],
      claim: 'Claim', claimed: 'On the tree', locked: 'Opens after the previous one', active: 'In progress', ornament: 'Ornament {n}',
      star: 'Star on top', starSub: 'Exclusive Snow Rig kit — only from the tree, never in the shop', starBtn: 'Claim the kit', starLock: 'Decorate the whole tree first',
      starGot: 'The kit is yours — wear it in Inventory', inv: 'Inventory',
      kitBanner: 'Animated banner', kitFrame: 'Frame', kitAvatar: 'Avatar', kitPbg: 'Profile background',
      got: 'Ornament on the tree: +{kf} KF', gotXp: 'Ornament on the tree: +{kf} KF, +{xp} pass XP', gotKit: 'Snow Rig kit received', ready: 'Tree: an ornament is ready to hang',
      progress: '{a} of {b} ornaments', close: 'Close',
      cos_a3_snow_rig: 'Snow Rig', cos_kx_snowrig: 'Snow Rig', cos_av_snowrig: 'Snow Rig',
    },
    uk: {
      mini: 'Ялинка', title: 'Ялинка', kick: 'Konzte · Зимова подія',
      sub: 'Виконуй завдання по черзі — кожне вішає іграшку на ялинку. Зірка на верхівці — ексклюзивний комплект Snow Rig.',
      rule: 'Рахується лише активне завдання. Наступне відкривається, щойно виконано поточне.', ends: 'Ялинка стоїть до 4 січня — лишилось {d}',
      play: ['Зіграй {n} матч', 'Зіграй {n} матчі', 'Зіграй {n} матчів'], play2v2: ['Зіграй {n} матч у 2×2', 'Зіграй {n} матчі у 2×2', 'Зіграй {n} матчів у 2×2'], play1v1: ['Зіграй {n} матч у 1×1', 'Зіграй {n} матчі у 1×1', 'Зіграй {n} матчів у 1×1'],
      win: ['Виграй {n} матч', 'Виграй {n} матчі', 'Виграй {n} матчів'], kills: ['Набий {n} вбивство', 'Набий {n} вбивства', 'Набий {n} вбивств'],
      friend: ['Зіграй {n} матч з другом з паті в команді', 'Зіграй {n} матчі з другом з паті в команді', 'Зіграй {n} матчів з другом з паті в команді'], maps: ['Зіграй на {n} різній карті', 'Зіграй на {n} різних картах', 'Зіграй на {n} різних картах'],
      claim: 'Забрати', claimed: 'На ялинці', locked: 'Відкриється після попереднього', active: 'Виконується', ornament: 'Іграшка {n}',
      star: 'Зірка на верхівці', starSub: 'Ексклюзивний комплект Snow Rig — лише з ялинки, в магазині його немає', starBtn: 'Забрати комплект', starLock: 'Спершу прикрась усю ялинку',
      starGot: 'Комплект твій — вдягни в Інвентарі', inv: 'Інвентар',
      kitBanner: 'Анімований банер', kitFrame: 'Рамка', kitAvatar: 'Аватар', kitPbg: 'Фон профілю',
      got: 'Іграшка на ялинці: +{kf} KF', gotXp: 'Іграшка на ялинці: +{kf} KF, +{xp} XP пропуска', gotKit: 'Комплект Snow Rig отримано', ready: 'Ялинка: іграшка готова, повісь її',
      progress: '{a} з {b} іграшок', close: 'Закрити',
      cos_a3_snow_rig: 'Snow Rig', cos_kx_snowrig: 'Snow Rig', cos_av_snowrig: 'Snow Rig',
    },
    ru: {
      mini: 'Ёлка', title: 'Ёлка', kick: 'Konzte · Зимнее событие',
      sub: 'Выполняй задания по очереди — каждое вешает игрушку на ёлку. Звезда на верхушке — эксклюзивный комплект Snow Rig.',
      rule: 'Считается только активное задание. Следующее открывается, как только выполнено текущее.', ends: 'Ёлка стоит до 4 января — осталось {d}',
      play: ['Сыграй {n} матч', 'Сыграй {n} матча', 'Сыграй {n} матчей'], play2v2: ['Сыграй {n} матч в 2×2', 'Сыграй {n} матча в 2×2', 'Сыграй {n} матчей в 2×2'], play1v1: ['Сыграй {n} матч в 1×1', 'Сыграй {n} матча в 1×1', 'Сыграй {n} матчей в 1×1'],
      win: ['Выиграй {n} матч', 'Выиграй {n} матча', 'Выиграй {n} матчей'], kills: ['Набей {n} убийство', 'Набей {n} убийства', 'Набей {n} убийств'],
      friend: ['Сыграй {n} матч с другом из пати в команде', 'Сыграй {n} матча с другом из пати в команде', 'Сыграй {n} матчей с другом из пати в команде'], maps: ['Сыграй на {n} разной карте', 'Сыграй на {n} разных картах', 'Сыграй на {n} разных картах'],
      claim: 'Забрать', claimed: 'На ёлке', locked: 'Откроется после предыдущего', active: 'Выполняется', ornament: 'Игрушка {n}',
      star: 'Звезда на верхушке', starSub: 'Эксклюзивный комплект Snow Rig — только с ёлки, в магазине его нет', starBtn: 'Забрать комплект', starLock: 'Сначала укрась всю ёлку',
      starGot: 'Комплект твой — надень в Инвентаре', inv: 'Инвентарь',
      kitBanner: 'Анимированный баннер', kitFrame: 'Рамка', kitAvatar: 'Аватар', kitPbg: 'Фон профиля',
      got: 'Игрушка на ёлке: +{kf} KF', gotXp: 'Игрушка на ёлке: +{kf} KF, +{xp} XP пропуска', gotKit: 'Комплект Snow Rig получен', ready: 'Ёлка: игрушка готова, повесь её',
      progress: '{a} из {b} игрушек', close: 'Закрыть',
      cos_a3_snow_rig: 'Snow Rig', cos_kx_snowrig: 'Snow Rig', cos_av_snowrig: 'Snow Rig',
    },
  };
  const lang = () => (typeof LANG !== 'undefined' ? LANG : 'en');
  const raw = k => { const o = { en: L.en[k], uk: L.uk[k], ru: L.ru[k] }; return typeof kzPick === 'function' ? kzPick(o) : (o[lang()] ?? o.en); };
  const fill = (s, v = {}) => String(s ?? '').replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
  const T = (k, v) => fill(raw(k), v);
  const plural = (forms, n) => {
    if (!Array.isArray(forms)) return forms;
    if (forms.length === 2) return forms[n === 1 ? 0 : 1];
    const a = n % 10, b = n % 100;
    return forms[a === 1 && b !== 11 ? 0 : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 1 : 2];
  };
  try { for (const l of ['en', 'uk', 'ru']) if (typeof I18N !== 'undefined' && I18N[l]) for (const k of Object.keys(L[l])) if (k.startsWith('cos_')) I18N[l][k] ??= L[l][k]; } catch {}

  const taskText = s => {
    const key = s.type === 'play' && s.mode ? 'play' + s.mode : s.type;
    return fill(plural(raw(key) || raw('play'), s.n), { n: s.n });
  };

  const IC = {
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9" width="17" height="11.5" rx="1.5"/><path d="M2.5 9h19M12 9v11.5M12 9c-1.5-3.5-6-4.5-6-1.5 0 1.5 3 1.5 6 1.5zM12 9c1.5-3.5 6-4.5 6-1.5 0 1.5-3 1.5-6 1.5z"/></svg>',
    flake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 5.5l-2-2M12 5.5l2-2M12 18.5l-2 2M12 18.5l2 2"/></svg>',
    inv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 2.8l8.5 4.6v9.2L12 21.2l-8.5-4.6V7.4z"/><path d="M3.5 7.4L12 12l8.5-4.6M12 12v9.2"/></svg>',
  };

  const CX = 200;
  const TIERS = [
    { a: 74, b: 176, w: 74 }, { a: 118, b: 262, w: 114 }, { a: 182, b: 350, w: 150 }, { a: 252, b: 444, w: 184 },
  ];
  const SLOTS = [
    [96, 424, 'b'], [204, 432, 'd'], [306, 414, 'b'],
    [140, 334, 'r'], [262, 326, 'b'],
    [128, 246, 'b'], [216, 236, 'd'], [288, 254, 'r'],
    [172, 166, 'b'], [218, 134, 'd'],
  ];
  const COLORS = ['#f4c542', '#7fd6ff', '#ff5a6e', '#969df9', '#6fe3b4', '#f4c542', '#ff5a6e', '#7fd6ff', '#c79bff', '#f4c542'];
  const tierPath = ({ a, b, w }) => {
    const k = 5, seg = (2 * w) / k; let d = `M${CX} ${a} Q${CX + w * .38} ${a + (b - a) * .62} ${CX + w} ${b}`;
    for (let i = 0; i < k; i++) { const x0 = CX + w - seg * i, x1 = x0 - seg; d += ` Q${(x0 + x1) / 2} ${b + 15} ${x1} ${b}`; }
    return d + ` Q${CX - w * .38} ${a + (b - a) * .62} ${CX} ${a}Z`;
  };
  const snowEdge = ({ b, w }) => {
    const k = 5, seg = (2 * w) / k; let d = `M${CX + w} ${b}`;
    for (let i = 0; i < k; i++) { const x0 = CX + w - seg * i, x1 = x0 - seg; d += ` Q${(x0 + x1) / 2} ${b + 15} ${x1} ${b}`; }
    return d;
  };
  const starPath = (cx, cy, R, r) => { let d = ''; for (let i = 0; i < 10; i++) { const ang = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R; d += (i ? 'L' : 'M') + (cx + Math.cos(ang) * rr).toFixed(1) + ' ' + (cy + Math.sin(ang) * rr).toFixed(1); } return d + 'Z'; };
  const ornShape = (kind, c, id) => kind === 'd'
    ? `<path d="M0 -12 C9 -3 11 6 0 15 C-11 6 -9 -3 0 -12Z" fill="url(#${id})"/><path d="M-4 -2 C-3 -6 -1 -8 0 -9" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/>`
    : kind === 'r'
      ? `<path d="M0 -13 L9 1 L0 17 L-9 1Z" fill="url(#${id})"/><path d="M0 -13 L0 17 M-9 1 L9 1" stroke="#fff" stroke-opacity=".25" stroke-width="1"/><path d="M-3 -4 L-1 -8" stroke="#fff" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/>`
      : `<circle r="12.5" fill="url(#${id})"/><path d="M-12 1 Q0 6 12 1" stroke="#fff" stroke-opacity=".28" stroke-width="1.6" fill="none"/><ellipse cx="-4.5" cy="-5" rx="3.6" ry="2.4" fill="#fff" fill-opacity=".75" transform="rotate(-30 -4.5 -5)"/>`;

  function treeSVG(d, opts = {}) {
    const mini = !!opts.mini, steps = d?.steps || [], uid = mini ? 'xm' : 'xb';
    let defs = `<defs>
      <linearGradient id="${uid}-fir" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f5a52"/><stop offset=".55" stop-color="#123b36"/><stop offset="1" stop-color="#0a2420"/></linearGradient>
      <linearGradient id="${uid}-side" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9fe6ff" stop-opacity=".16"/><stop offset=".45" stop-color="#9fe6ff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".32"/></linearGradient>
      <linearGradient id="${uid}-trunk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a3424"/><stop offset="1" stop-color="#22160e"/></linearGradient>
      <radialGradient id="${uid}-halo" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7fd6ff" stop-opacity=".16"/><stop offset=".6" stop-color="#7fd6ff" stop-opacity=".05"/><stop offset="1" stop-color="#7fd6ff" stop-opacity="0"/></radialGradient>
      <radialGradient id="${uid}-drift" cx=".5" cy=".3" r=".7"><stop offset="0" stop-color="#eaf7ff"/><stop offset="1" stop-color="#8fb4cc"/></radialGradient>
      <linearGradient id="${uid}-star" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".45" stop-color="#f4c542"/><stop offset="1" stop-color="#c58a12"/></linearGradient>
      <filter id="${uid}-glow" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="6"/></filter>
      <filter id="${uid}-soft" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="2.2"/></filter>`;
    SLOTS.forEach((s, i) => { defs += `<radialGradient id="${uid}-o${i}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".22" stop-color="${COLORS[i]}"/><stop offset="1" stop-color="${COLORS[i]}" stop-opacity=".55"/></radialGradient>`; });
    defs += '</defs>';

    let g = '';
    if (!mini) g += `<ellipse cx="${CX}" cy="290" rx="210" ry="260" fill="url(#${uid}-halo)"/>`;
    g += `<rect x="${CX - 17}" y="436" width="34" height="46" rx="4" fill="url(#${uid}-trunk)"/>`;
    g += `<path d="M18 500 Q90 462 170 474 Q210 468 250 476 Q330 460 384 500 Z" fill="url(#${uid}-drift)"/>`;
    if (!mini) for (const [x, y, w, h, c, r] of [[112, 456, 44, 34, '#7fd6ff', '#e6f6ff'], [246, 450, 52, 40, '#f4c542', '#fff3c4'], [296, 466, 34, 26, '#ff5a6e', '#f4c542'], [72, 472, 30, 22, '#969df9', '#e6f6ff']]) {
      g += `<g opacity=".95"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c}" fill-opacity=".85"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="url(#${uid}-side)"/>
        <rect x="${x + w / 2 - 3}" y="${y}" width="6" height="${h}" fill="${r}" fill-opacity=".85"/><rect x="${x}" y="${y + h * .32}" width="${w}" height="5" fill="${r}" fill-opacity=".7"/>
        <path d="M${x + w / 2} ${y} c-10 -12 -16 -2 -4 1 M${x + w / 2} ${y} c10 -12 16 -2 4 1" fill="none" stroke="${r}" stroke-width="2.4" stroke-linecap="round"/></g>`;
    }
    for (const t of [...TIERS].reverse()) {
      g += `<path d="${tierPath(t)}" fill="url(#${uid}-fir)"/><path d="${tierPath(t)}" fill="url(#${uid}-side)"/>`;
      g += `<path d="${snowEdge(t)}" fill="none" stroke="#e6f6ff" stroke-width="${mini ? 7 : 5}" stroke-linecap="round" opacity=".9"/>`;
      if (!mini) g += `<path d="${snowEdge(t)}" fill="none" stroke="#9fd8f5" stroke-width="2" stroke-linecap="round" opacity=".6" transform="translate(0 4)"/>`;
      if (!mini) for (let i = 1; i < 6; i++) { const y = t.a + (t.b - t.a) * (i / 6), hw = t.w * (i / 6) * .9; g += `<path d="M${CX - hw * .55} ${y} l10 -7 M${CX + hw * .55} ${y} l-10 -7 M${CX - hw * .1} ${y + 8} l6 -6" stroke="#2f7a6e" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round"/>`; }
    }
    const garl = [[134, 196, 270, 186, 18], [100, 288, 304, 276, 24], [62, 382, 340, 370, 28]];
    garl.forEach(([x1, y1, x2, y2, sag], gi) => {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + sag;
      g += `<path d="M${x1} ${y1} Q${mx} ${my + sag} ${x2} ${y2}" fill="none" stroke="#f4c542" stroke-opacity=".45" stroke-width="${mini ? 3 : 1.6}"/>`;
      const n = mini ? 4 : 7 + gi * 2;
      for (let i = 1; i < n; i++) {
        const tt = i / n, x = (1 - tt) ** 2 * x1 + 2 * (1 - tt) * tt * mx + tt * tt * x2, y = (1 - tt) ** 2 * y1 + 2 * (1 - tt) * tt * (my + sag) + tt * tt * y2;
        const c = ['#ffe28a', '#9fe6ff', '#ff9aa8'][(i + gi) % 3];
        g += `<circle class="xt-bulb" style="--dl:${((i * 0.37 + gi * 0.21) % 1.6).toFixed(2)}s" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${mini ? 5 : 3}" fill="${c}"/>`;
      }
    });
    SLOTS.forEach(([x, y, kind], i) => {
      const s = steps[i] || { state: 'locked', p: 0, n: 1 }, id = s.id || 'x' + (i + 1);
      if (mini) {
        if (s.claimed) g += `<g transform="translate(${x} ${y}) scale(1.35)"><circle r="18" fill="${COLORS[i]}" opacity=".45" filter="url(#${uid}-soft)"/>${ornShape(kind, COLORS[i], `${uid}-o${i}`)}</g>`;
        return;
      }
      const hook = `<path d="M0 -24 L0 -13" stroke="#cfd8e3" stroke-opacity=".55" stroke-width="1.2"/><rect x="-3.5" y="-15" width="7" height="4.5" rx="1" fill="#c9b37a"/>`;
      if (s.claimed) {
        g += `<g class="xt-orn on" data-xt="${id}" transform="translate(${x} ${y})"><g class="xt-sw" style="--dl:-${(i * .53).toFixed(2)}s"><circle r="22" fill="${COLORS[i]}" opacity=".4" filter="url(#${uid}-glow)"/>${hook}${ornShape(kind, COLORS[i], `${uid}-o${i}`)}</g></g>`;
      } else if (s.done) {
        g += `<g class="xt-orn ready" data-xt="${id}" transform="translate(${x} ${y})"><circle class="xt-ring" r="19" fill="none" stroke="#f4c542" stroke-width="2"/><g opacity=".75">${hook}${ornShape(kind, COLORS[i], `${uid}-o${i}`)}</g></g>`;
      } else if (s.state === 'active') {
        const C = 2 * Math.PI * 16, f = Math.min(1, s.p / s.n);
        g += `<g class="xt-orn act" data-xt="${id}" transform="translate(${x} ${y})"><circle r="16" fill="rgba(127,214,255,.08)" stroke="#7fd6ff" stroke-opacity=".35" stroke-width="2" stroke-dasharray="3 4"/>
          <circle r="16" fill="none" stroke="#7fd6ff" stroke-width="3" stroke-linecap="round" stroke-dasharray="${(C * f).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90)"/><text y="4.5" text-anchor="middle" class="xt-num">${i + 1}</text></g>`;
      } else {
        g += `<g class="xt-orn off" data-xt="${id}" transform="translate(${x} ${y})"><circle r="13" fill="rgba(0,0,0,.25)" stroke="#cfe6ff" stroke-opacity=".22" stroke-width="1.5" stroke-dasharray="2.5 3.5"/><text y="4" text-anchor="middle" class="xt-num dim">${i + 1}</text></g>`;
      }
    });
    const star = d?.star || {}, sp = starPath(CX, 46, mini ? 36 : 31, mini ? 15 : 13);
    if (star.claimed) {
      let rays = ''; for (let i = 0; i < 12; i++) rays += `<path d="M${CX} 46 L${CX - 4} -6 L${CX + 4} -6Z" fill="#ffe7a0" opacity=".22" transform="rotate(${i * 30} ${CX} 46)"/>`;
      g += `<g class="xt-star got" data-xt="star">${mini ? '' : `<g class="xt-rays">${rays}</g>`}<path d="${sp}" fill="#f4c542" opacity=".7" filter="url(#${uid}-glow)"/><path d="${sp}" fill="url(#${uid}-star)" stroke="#fff6d0" stroke-width="1.5"/></g>`;
    } else if (star.ready) {
      g += `<g class="xt-star ready" data-xt="star"><path class="xt-ring" d="${sp}" fill="#f4c542" opacity=".5" filter="url(#${uid}-soft)"/><path d="${sp}" fill="url(#${uid}-star)" opacity=".85" stroke="#fff6d0" stroke-width="1.5"/></g>`;
    } else {
      g += `<g class="xt-star off" data-xt="star"><path d="${sp}" fill="rgba(244,197,66,.06)" stroke="#f4c542" stroke-opacity="${mini ? .8 : .45}" stroke-width="${mini ? 3 : 1.6}" stroke-dasharray="${mini ? '' : '4 4'}"/></g>`;
    }
    return `<svg class="xt-svg" viewBox="0 ${mini ? 0 : -10} 400 ${mini ? 510 : 520}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${defs}${g}</svg>`;
  }

  const X = { data: null, tok: '', ws: null, busy: false, last: null };
  const api2 = (p, b) => (typeof api === 'function' ? api(p, b) : Promise.reject(new Error('no api')));
  async function load() {
    const s = st();
    if (!s.token || !s.me) { X.data = null; render(); return; }
    try { X.data = await api2('/api/xmas'); } catch { X.data = null; }
    render();
  }
  function xtLeft(t) { const ms = Math.max(0, t - Date.now()), d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, lg = lang();
    const u = { en: ['d', 'h'], uk: ['дн.', 'год'], ru: ['дн.', 'ч'] }[lg] || ['d', 'h']; return d ? `${d} ${u[0]} ${h} ${u[1]}` : `${h} ${u[1]}`; }
  const on = () => !!(X.data && X.data.active && st().token && st().me);

  function renderMini() {
    let el = document.getElementById('xt-mini');
    if (!on()) { el?.remove(); return; }
    if (!el) {
      el = document.createElement('button');
      el.id = 'xt-mini'; el.type = 'button'; el.className = 'xt-mini';
      el.addEventListener('click', () => open());
      document.body.append(el);
    }
    const d = X.data, done = d.steps.filter(s => s.claimed).length;
    el.setAttribute('aria-label', T('mini'));
    el.classList.toggle('has', d.claimable > 0);
    el.classList.toggle('calm', calm());
    el.innerHTML = `<span class="xt-mtree">${treeSVG(d, { mini: true })}</span><span class="xt-mlbl"><b>${esc(T('mini'))}</b><i>${done}/10</i></span>${d.claimable ? `<i class="xt-dot">${d.claimable}</i>` : ''}`;
  }

  function open() {
    if (!on()) return;
    let ov = document.getElementById('xt-ov');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'xt-ov'; ov.className = 'xt-ov';
      ov.addEventListener('mousedown', e => { if (e.target === ov) close(); });
      ov.addEventListener('click', onClick);
      document.body.append(ov);
      document.addEventListener('keydown', onKey);
    }
    ov.classList.toggle('calm', calm());
    renderWin();
    if (typeof sfx === 'function') sfx('nav');
    load();
  }
  function close() {
    document.getElementById('xt-ov')?.remove();
    document.removeEventListener('keydown', onKey);
  }
  const onKey = e => { if (e.key === 'Escape') close(); };

  let snowHtml = '';
  const snow = () => snowHtml || (snowHtml = Array.from({ length: 46 }, (_, i) => {
    const r = n => ((Math.sin(i * 91.7 + n * 13.3) + 1) / 2);
    return `<i style="left:${(r(1) * 100).toFixed(1)}%;--s:${(2 + r(2) * 4).toFixed(1)}px;--d:${(7 + r(3) * 9).toFixed(1)}s;--dl:-${(r(4) * 16).toFixed(1)}s;--x:${(r(5) * 60 - 30).toFixed(0)}px;opacity:${(.35 + r(6) * .6).toFixed(2)}"></i>`;
  }).join(''));

  function rowHtml(s, i) {
    const cls = s.claimed ? 'got' : s.done ? 'ready' : s.state;
    const pct = Math.round(Math.min(1, s.p / s.n) * 100);
    const rw = `+${s.kf} KF${s.xp ? ` · +${s.xp} XP` : ''}`;
    const right = s.claimed ? `<span class="xt-st ok">${IC.check}${esc(T('claimed'))}</span>`
      : s.done ? `<button class="xt-btn gold" data-xtc="${s.id}">${IC.gift}${esc(T('claim'))}</button>`
        : s.state === 'active' ? `<span class="xt-st act">${esc(T('active'))}</span>`
          : `<span class="xt-st lk">${IC.lock}</span>`;
    const sw = `<svg viewBox="-20 -20 40 40"><defs><radialGradient id="xr-o${i}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".22" stop-color="${COLORS[i]}"/><stop offset="1" stop-color="${COLORS[i]}" stop-opacity=".55"/></radialGradient></defs>${ornShape(SLOTS[i][2], COLORS[i], 'xr-o' + i)}</svg>`;
    return `<div class="xt-row ${cls}" data-xtr="${s.id}">
      <span class="xt-ic">${s.state === 'locked' && !s.done ? `<b>${i + 1}</b>` : sw}</span>
      <div class="xt-rt"><div class="xt-rh"><b>${esc(taskText(s))}</b><span class="xt-rw">${rw}</span></div>
        ${s.state === 'locked' && !s.done ? `<span class="xt-hint">${esc(T('locked'))}</span>` : `<div class="xt-pb"><i style="width:${pct}%"></i></div><span class="xt-pt">${Math.min(s.p, s.n)} / ${s.n}</span>`}</div>
      <div class="xt-rr">${right}</div></div>`;
  }
  function kitHtml(d) {
    const ban = typeof bannerHtml === 'function' ? bannerHtml('a3_snow_rig', 'xt-kban') : '';
    const st0 = d.star;
    const btn = st0.claimed ? `<button class="xt-btn" data-xtinv="1">${IC.inv}${esc(T('inv'))}</button>`
      : st0.ready ? `<button class="xt-btn gold big" data-xtc="star">${IC.gift}${esc(T('starBtn'))}</button>`
        : `<span class="xt-st lk">${IC.lock}${esc(T('starLock'))}</span>`;
    return `<div class="xt-kit ${st0.claimed ? 'got' : st0.ready ? 'ready' : ''}">
      <div class="xt-kart"><div class="xt-kbanph">${IC.flake}</div>${ban}
        <span class="xt-kava"><span class="xt-kavaph">${IC.flake}</span><img class="xt-kimg" data-xtimg src="assets/avatar/av_snowrig.jpg" alt=""><img class="xt-kfr" data-xtimg src="assets/frame/kx_snowrig.png" alt=""></span></div>
      <div class="xt-kbody"><span class="xt-kick">${esc(T('star'))}</span><h3>Snow Rig</h3><p>${esc(st0.claimed ? T('starGot') : T('starSub'))}</p>
        <div class="xt-kparts">${['kitBanner', 'kitFrame', 'kitAvatar', 'kitPbg'].map(k => `<span>${esc(T(k))}</span>`).join('')}</div></div>
      <div class="xt-kbtn">${btn}</div></div>`;
  }
  function renderWin(hung) {
    const ov = document.getElementById('xt-ov');
    if (!ov) return;
    if (!on()) { close(); return; }
    const d = X.data, got = d.steps.filter(s => s.claimed).length;
    const keep = ov.querySelector('.xt-list')?.scrollTop || 0;
    ov.innerHTML = `<div class="xt-win" role="dialog" aria-label="${esc(T('title'))}">
      <div class="xt-sky">${calm() ? '' : snow()}</div>
      <button class="xt-x" data-xtx="1" title="${esc(T('close'))}">${IC.x}</button>
      <div class="xt-left"><div class="xt-tree">${treeSVG(d)}</div>
        <div class="xt-cnt" title="${esc(T('progress', { a: got, b: 10 }))}"><b>${got}</b><span>/ 10</span></div></div>
      <div class="xt-right">
        <div class="xt-head"><span class="xt-kick">${esc(T('kick'))}</span><h2>${esc(T('title'))}</h2><p>${esc(T('sub'))}</p>
          <div class="xt-tot"><i style="width:${got * 10}%"></i></div><span class="xt-rule">${IC.flake}${esc(T('rule'))}</span>${X.data.endsAt ? `<span class="xt-rule xt-ends">${esc(T('ends', { d: xtLeft(X.data.endsAt) }))}</span>` : ''}</div>
        <div class="xt-list">${d.steps.map(rowHtml).join('')}</div>
        ${kitHtml(d)}
      </div></div>`;
    ov.querySelector('.xt-list').scrollTop = keep;
    ov.querySelectorAll('[data-xtimg]').forEach(img => img.addEventListener('error', () => img.remove()));
    if (hung) ov.querySelector(`[data-xt="${hung}"]`)?.classList.add('hung');
    if (!hung) { const a = ov.querySelector('.xt-row.ready, .xt-row.active'); if (a && !keep) a.scrollIntoView({ block: 'nearest' }); }
  }

  async function claim(id, btn) {
    if (X.busy) return;
    X.busy = true; if (btn) btn.disabled = true;
    try {
      const r = await api2('/api/xmas/claim', { id });
      X.data = r.state;
      if (typeof toast === 'function') toast(id === 'star' ? T('gotKit') : r.got.xp ? T('gotXp', r.got) : T('got', r.got));
      if (typeof sfx === 'function') sfx(id === 'star' ? 'ach' : 'coin');
      renderMini(); renderWin(id);
      if (id === 'star') burst();
      api2('/api/me').then(me => { const s = st(); s.me = me; if (typeof renderMe === 'function') renderMe(); }).catch(() => {});
    } catch (e) {
      if (typeof toast === 'function') toast(e.message, true);
      if (btn) btn.disabled = false;
    } finally { X.busy = false; }
  }
  function burst() {
    const tree = document.querySelector('#xt-ov .xt-tree');
    if (!tree || calm()) return;
    const b = document.createElement('div'); b.className = 'xt-burst';
    b.innerHTML = Array.from({ length: 24 }, (_, i) => `<i style="--a:${i * 15}deg;--r:${90 + (i % 3) * 40}px;--dl:${(i % 4) * .05}s"></i>`).join('');
    tree.append(b); setTimeout(() => b.remove(), 1600);
  }
  function onClick(e) {
    const c = e.target.closest('[data-xtc]'); if (c) return claim(c.dataset.xtc, c);
    if (e.target.closest('[data-xtx]')) return close();
    if (e.target.closest('[data-xtinv]')) { close(); if (typeof go === 'function') go('inventory'); return; }
    const o = e.target.closest('[data-xt]');
    if (o) {
      const id = o.dataset.xt, s = X.data?.steps.find(z => z.id === id);
      if (id === 'star') { document.querySelector('#xt-ov .xt-kit')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      if (s?.done && !s.claimed) return claim(id);
      const row = document.querySelector(`#xt-ov [data-xtr="${id}"]`);
      if (row) { row.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); row.classList.remove('flash'); void row.offsetWidth; row.classList.add('flash'); }
    }
  }

  function render() { renderMini(); if (document.getElementById('xt-ov')) renderWin(); }

  function onWs(e) {
    let m; try { m = JSON.parse(e.data); } catch { return; }
    if (m.t !== 'xmas') return;
    clearTimeout(X.pingT);
    X.pingT = setTimeout(async () => { await load(); if (m.done && typeof toast === 'function') toast(T('ready')); }, 500);
  }
  setInterval(() => {
    const s = st(), tok = s.me && s.token ? s.token : '';
    if (tok !== X.tok) { X.tok = tok; load(); }
    if (s.ws && s.ws !== X.ws) { X.ws = s.ws; s.ws.addEventListener('message', onWs); }
    if (on() && !document.getElementById('xt-mini')) renderMini();
    if (X.lang !== lang()) { X.lang = lang(); render(); }
  }, 1500);
  setInterval(() => { if (X.tok) load(); }, 5 * 60e3);

  window.KZXmas = { open, close, load, state: () => X.data };
})();
