(() => {
  const K = window.konzte;
  if (!K?.presence) return;
  const SITE = 'https://konzte.online';
  const MODE = { '2v2': '2v2', '1v1': '1v1', '5v5': '5v5' };
  const MAP_TITLE = { TrainYard: 'Train Yard' };
  const MAP_IMG = new Set(['Caribbean', 'Drain', 'Egypt', 'Fuji', 'Highrise', 'Museum', 'Subway', 'TrainYard', 'Warehouse']);
  let appId = null, lastKey = '', liveSince = {}, menuSince = Date.now(), off = false;

  async function loadApp() {
    try {
      const r = await fetch(S.server + '/public/info').then(x => x.json());
      if (r?.discordApp && r.discordApp !== appId) { appId = r.discordApp; K.presenceClient(appId); lastKey = ''; }
    } catch {}
  }

  const enabled = () => S.cfg?.discordPresence !== false && !S.cfg?.streamer;
  const lvlImg = l => `${SITE}/assets/lvl/lvl${Math.max(0, Math.min(10, l | 0))}.png`;
  const mapImg = m => MAP_IMG.has(m) ? `${SITE}/assets/rpc/${m}.jpg` : `${SITE}/assets/rpc/logo.png`;
  const mapTitle = m => MAP_TITLE[m] || m;

  const clock = () => {
    if (!S.cfg?.presenceClock) return '';
    const d = new Date(), off = -d.getTimezoneOffset(), h = Math.trunc(Math.abs(off) / 60), m = Math.abs(off) % 60;
    const tz = 'UTC' + (off >= 0 ? '+' : '-') + h + (m ? ':' + String(m).padStart(2, '0') : '');
    return `${d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} local (${tz})`;
  };
  const withClock = s => { const c = clock(); return c ? (s ? `${s} · ${c}` : c).slice(0, 128) : s; };
  function rankLine(mode) {
    const r = S.me?.['r' + mode];
    if (!r) return '';
    if (isCal(r)) return `Calibration ${r.cal}/5`;
    return `Level ${levelOf(r.elo)} · ${r.elo} ELO`;
  }
  function small(mode) {
    const r = S.me?.['r' + mode];
    if (!r || isCal(r)) return { smallImage: `${SITE}/assets/rpc/logo.png`, smallText: 'Konzte Faceit' };
    return { smallImage: lvlImg(levelOf(r.elo)), smallText: rankLine(mode) };
  }
  const buttons = () => [
    { label: 'Join Konzte Discord', url: `${SITE}/discord` },
    ...(S.me?.id ? [{ label: 'View profile', url: `${SITE}/p/${encodeURIComponent(S.me.id)}` }] : []),
  ];

  function party(mode, m) {
    const max = { '1v1': 1, '2v2': 2, '5v5': 5 }[mode] || 2;
    if (m) return { partyId: 'konzte-m' + m.id + (m.me || ''), partySize: max, partyMax: max };
    const p = S.live?.party, n = p?.members?.length || 1;
    return { partyId: 'konzte-' + (p?.leader || S.me?.id || 'solo'), partySize: Math.min(n, max), partyMax: max };
  }
  function activity() {
    const st = S.live, m = st?.match, me = S.me;
    if (!me) return null;
    const base = { buttons: buttons(), largeText: 'Konzte Faceit — ranked Combat Master', ...party(m?.mode || st?.myQueue || S.mode || '2v2', m) };
    if (m || st?.myQueue || st?.ready) menuSince = null;
    if (m) {
      const mode = MODE[m.mode] || m.mode, side = m.me, team = side === 'A' ? 'Alfa' : side === 'B' ? 'Bravo' : null;
      const vs = m.clanWar?.A && m.clanWar?.B ? `[${m.clanWar.A.tag}] vs [${m.clanWar.B.tag}]` : 'Alfa vs Bravo';
      if (m.state === 'pick') return { ...base, details: `Ranked ${mode} · picking teams`, state: vs, largeImage: `${SITE}/assets/rpc/logo.png`, ...small(m.mode) };
      if (m.state === 'ban') return { ...base, details: `Ranked ${mode} · map veto`, state: `${m.mapsLeft?.length || '?'} maps left`, largeImage: `${SITE}/assets/rpc/logo.png`, ...small(m.mode) };
      const since = m.liveAt || (liveSince[m.id] ||= Date.now());
      if (m.state === 'live') return { ...base, details: `Ranked ${mode} · ${mapTitle(m.map || '')}`, state: team ? `Playing for ${team}` : 'In a match', start: since, largeImage: mapImg(m.map), largeText: mapTitle(m.map || ''), ...small(m.mode) };
      return { ...base, details: `Ranked ${mode} · ${mapTitle(m.map || '')}`, state: m.state === 'disputed' ? 'Result under review' : 'Submitting the result', largeImage: mapImg(m.map), largeText: mapTitle(m.map || ''), ...small(m.mode) };
    }
    const mode = st?.myQueue || S.mode || '2v2';
    if (st?.ready) return { ...base, details: `Ranked ${MODE[mode] || mode} · match found`, state: 'Accepting the match', largeImage: `${SITE}/assets/rpc/logo.png`, ...small(mode) };
    if (st?.myQueue) {
      const pTxt = st.party?.members?.length > 1 ? ` · party of ${st.party.members.length}` : '';
      return { ...base, details: `Searching ranked ${MODE[mode] || mode}${pTxt}`, state: rankLine(mode) || 'In queue', start: S.queuedAt || Date.now(), largeImage: `${SITE}/assets/rpc/logo.png`, ...small(mode) };
    }
    const lobby = st?.party?.members?.length > 1 ? `In a party (${st.party.members.length}/${mode === '1v1' ? 1 : 2})` : 'In the lobby';
    return { ...base, details: lobby, state: rankLine(mode) || 'Konzte Faceit', start: (menuSince ||= Date.now()), largeImage: `${SITE}/assets/rpc/logo.png`, ...small(mode) };
  }

  function update() {
    if (!appId) return;
    if (!enabled()) { if (!off) { off = true; lastKey = ''; K.presenceClear(); } return; }
    off = false;
    let a = null;
    try { a = activity(); } catch (e) { console.error('[presence]', e); return; }
    if (a && S.cfg?.presenceClock) a = { ...a, state: withClock(a.state) };
    const key = JSON.stringify(a);
    if (key === lastKey) return;
    lastKey = key;
    if (a) K.presence(a); else K.presenceClear();
  }

  loadApp();
  setInterval(loadApp, 30 * 60_000);
  setInterval(update, 3000);
  window.addEventListener('beforeunload', () => { try { K.presenceClear(); } catch {} });
})();
