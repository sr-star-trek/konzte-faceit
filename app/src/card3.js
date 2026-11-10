(() => {
  const L = {
    en: { kc3_avg: 'AVG', kc3_kd: 'K/D', kc3_m: 'Matches', kc3_wr: 'WR', kc3_dT: 'ELO over the last 7 days', kc3_lvl: 'Level {n}' },
    uk: { kc3_avg: 'AVG', kc3_kd: 'K/D', kc3_m: 'Матчі', kc3_wr: 'WR', kc3_dT: 'ELO за останні 7 днів', kc3_lvl: 'Рівень {n}' },
    ru: { kc3_avg: 'AVG', kc3_kd: 'K/D', kc3_m: 'Матчи', kc3_wr: 'WR', kc3_dT: 'ELO за последние 7 дней', kc3_lvl: 'Уровень {n}' },
  };
  if (typeof I18N !== 'undefined') for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);

  const hash = s => { let h = 2166136261; for (const c of String(s || 'konzte')) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
  const cache = new Map();
  function topo(seed) {
    if (cache.has(seed)) return cache.get(seed);
    const R = rng(hash(seed)), W = 240, H = 320, paths = [];
    const peaks = 2 + (R() < 0.5 ? 1 : 0);
    for (let p = 0; p < peaks; p++) {
      const cx = W * (0.1 + R() * 0.8), cy = H * (0.08 + R() * 0.84);
      const harm = [2, 3, 5].map(j => ({ j, a: 0.06 + R() * 0.12, f: R() * Math.PI * 2 }));
      const rings = 9 + Math.floor(R() * 7), step = 9 + R() * 7, skew = 0.75 + R() * 0.5;
      for (let i = 1; i <= rings; i++) {
        const r0 = i * step, pts = [];
        const wob = 1 + i * 0.05;
        for (let k = 0; k <= 64; k++) {
          const a = k / 64 * Math.PI * 2;
          let r = r0;
          for (const h of harm) r += r0 * h.a * wob * Math.sin(h.j * a + h.f + i * 0.13);
          pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r * skew).toFixed(1)}`);
        }
        paths.push(`<path class="${i % 5 === 0 ? 'm' : ''}" d="M${pts.join('L')}Z"/>`);
      }
    }
    const n = 4 + Math.floor(R() * 4);
    for (let i = 0; i < n; i++) {
      const y0 = H * R(), a1 = 6 + R() * 16, f1 = R() * 6, a2 = 3 + R() * 6, f2 = R() * 6, pts = [];
      for (let x = -10; x <= W + 10; x += 6) pts.push(`${x},${(y0 + Math.sin(x / 38 + f1) * a1 + Math.sin(x / 13 + f2) * a2).toFixed(1)}`);
      paths.push(`<path d="M${pts.join('L')}"/>`);
    }
    const svg = `<svg class="kc3-topo" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${paths.join('')}</svg>`;
    if (cache.size > 200) cache.clear();
    cache.set(seed, svg);
    return svg;
  }

  const pickMode = p => {
    if (typeof bestProfMode === 'function') try { return bestProfMode(p); } catch {}
    return ['2v2', '1v1', '5v5'].reduce((a, m) => ((p['r' + m]?.w || 0) + (p['r' + m]?.l || 0) > (p['r' + a]?.w || 0) + (p['r' + a]?.l || 0) ? m : a), '2v2');
  };
  const num = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  function deltaOf(p, mode) {
    const ms = p.matches || (p.id && p.id === S.me?.id ? S.myProfile?.matches : null);
    if (!Array.isArray(ms)) return null;
    const since = Date.now() - 7 * 86400e3;
    const xs = ms.filter(h => h.mode === mode && typeof h.delta === 'number' && (!h.at || +new Date(h.at) >= since));
    return xs.length ? xs.reduce((a, h) => a + h.delta, 0) : null;
  }
  function bgLayer(p, bg) {
    if (bg === 'topo') return '';
    const b = bg && typeof bg === 'object' ? bg : null;
    if (b?.url) return `<div class="kc3-bgimg" style="background-image:url('${esc(b.url)}')"></div>`;
    const pbArt = id => /^b[45]_/.test(id) ? `<div class="kc3-bgimg" style="background-image:url('assets/pbg/${id}.jpg');background-position:84% center"></div>` : bannerHtml(id, 'kc3-bgart');
    if (b?.banner) return pbArt(b.banner);
    if (b) return '';
    const pb = p.pbg;
    if (pb?.type === 'banner' && pb.banner) return pbArt(pb.banner);
    if (pb?.type === 'image' && pb.url) return `<div class="kc3-bgimg" style="background-image:url('${esc((S.server || '') + pb.url)}')"></div>`;
    return '';
  }

  window.kzCard3 = function (p, opts = {}) {
    if (!p) return '';
    const mode = opts.mode || pickMode(p);
    const r = p['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0 };
    const cal = isCal(r);
    const lvl = levelOf(r.elo ?? 1000);
    const games = (r.w || 0) + (r.l || 0);
    const d = opts.delta !== undefined ? opts.delta : cal ? null : deltaOf(p, mode);
    const img = bgLayer(p, opts.bg);
    const stat = (k, v) => `<div class="kc3-s"><span>${t(k)}</span><b class="num">${v}</b></div>`;
    const nick = nickHtml({ ...p, badges: [], prem: { ...(p.prem || {}), tier: '' } });
    return `<div class="kc3 ${img ? 'has-img' : 'topo'} ${opts.cls || ''}">
      <div class="kc3-bg">${img || topo(p.id || p.nick)}</div>
      <div class="kc3-top"><span class="kc3-chip" title="${esc(t('kc3_lvl', { n: lvl }))}"><img src="${lvlIc(r, lvl)}" alt="">${cal ? '' : `<b class="num">${lvl}</b>`}</span>
        <span class="kc3-chip">${esc(modeX(mode))}</span></div>
      <div class="kc3-av">${avaF(p, 'lg')}</div>
      <div class="kc3-nk">${nick}</div>
      <div class="kc3-elo">${cal ? `<b class="kc3-cal">${t('la_calShort', { n: r.cal })}</b>` : `<b class="num">${num(r.elo ?? 1000)}</b><span>ELO</span>`}
        ${d != null && d !== 0 ? `<em class="${d > 0 ? 'up' : 'dn'}" title="${esc(t('kc3_dT'))}">${d > 0 ? '+' : '−'}${num(Math.abs(d))}</em>` : ''}</div>
      ${opts.noStats ? '' : `<div class="kc3-st">${stat('kc3_avg', games ? ((r.k || 0) / games).toFixed(1) : '—')}${stat('kc3_kd', games ? ((r.k || 0) / Math.max(1, r.d || 0)).toFixed(2) : '—')}
        ${stat('kc3_m', num(games))}${stat('kc3_wr', games ? Math.round((r.w || 0) / games * 1000) / 10 + '%' : '—')}</div>`}</div>`;
  };
  window.kzCard3.topo = seed => topo(seed);
  window.kzCard3.bg = p => bgLayer(p) || `<div class="kc3-bg">${topo(p?.id || 'x')}</div>`;
})();
