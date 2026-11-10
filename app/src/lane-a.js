(() => {
  const IC = {
    cal: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    call: '<svg viewBox="0 0 24 24"><path d="M4 10v4h3l5 4V6L7 10z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.4"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M7 11v9H4v-9zM7 11l4-7c1.6 0 2.6 1.2 2.2 2.8L12.6 10H18a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 16.8 20H7"/></svg>',
    down: '<svg viewBox="0 0 24 24"><path d="M7 13V4H4v9zM7 13l4 7c1.6 0 2.6-1.2 2.2-2.8L12.6 14H18a2 2 0 0 0 2-2.3l-1.2-6A2 2 0 0 0 16.8 4H7"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    hand: '<svg viewBox="0 0 24 24"><path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v8c0 4-2.5 6.5-6 6.5-2.6 0-4.2-1.3-5.6-3.6L4 13.6a1.5 1.5 0 0 1 2.6-1.5L8 14"/></svg>',
  };
  const TAGS = ['balance', 'toxicity', 'bugs', 'lag', 'great'];
  const L = () => S.live?.lane || null;
  const modeName = m => String(m || '').replace('v', '×');
  const fmtLeft = ms => { const s = Math.max(0, Math.round(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return h ? t('la_hm', { h, m }) : m ? t('la_min', { m }) : t('la_sec', { s }); };
  const fmtWhen = ts => new Date(ts).toLocaleString(LOCALE[LANG], { weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  const safe = fn => function (...a) { try { return fn.apply(this, a); } catch (e) { console.error('[lane-a]', e); } };
  const stars = (n, cls = '') => `<span class="la-stars ${cls}">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? 'on' : ''}">${IC.star}</i>`).join('')}</span>`;

  setInterval(() => {
    document.querySelectorAll('[data-la-cd]').forEach(el => { el.textContent = fmtLeft(+el.dataset.laCd - Date.now()); });
    document.querySelectorAll('[data-la-el]').forEach(el => { el.textContent = fmtLeft(Date.now() - +el.dataset.laEl); });
  }, 1000);
  const tickNow = () => document.querySelectorAll('[data-la-cd],[data-la-el]').forEach(el => { el.textContent = el.dataset.laCd ? fmtLeft(+el.dataset.laCd - Date.now()) : fmtLeft(Date.now() - +el.dataset.laEl); });

  function etaLine(mode) {
    const e = L()?.eta?.[mode];
    if (!e || e.ms == null) return t('la_etaNone');
    return e.ms < 60_000 ? t('la_etaFast') : t('la_eta', { n: Math.max(1, Math.round(e.ms / 60_000)) });
  }
  const decoratePlay = safe(() => {
    const st = S.live, lane = L();
    if (!st || !lane || st.match || S.finishedMatch || S.page !== 'play') return;
    const q = document.querySelector('.queue');
    if (!q || document.querySelector('.la-qinfo')) return;
    const mode = S.mode, size = { '1v1': 2, '2v2': 4 }[mode] || 10;
    const inQ = st.myQueue === mode;
    const cd = lane.callCd > Date.now() ? lane.callCd : 0;
    let html = `<div class="la-qinfo">
      <div class="la-qi">${IC.clock}<span>${etaLine(mode)}</span></div>
      <div class="la-qi">${IC.hand}<span>${t('la_inQueueN', { n: `<b>${st.queues[mode] ?? 0}</b>`, m: size, mode: modeName(mode) })}</span></div>
      <span class="grow"></span>
      ${inQ ? `<button class="btn ghost sm la-call" data-la="call" ${cd ? 'disabled' : ''}>${IC.call}${cd ? t('la_callCd', { n: Math.ceil((cd - Date.now()) / 60_000) }) : t('la_call')}</button>` : ''}
    </div>`;
    q.insertAdjacentHTML('afterend', html);
    const r = S.me?.['r' + mode];
    if (r?.cal != null) {
      const top = document.querySelector('.myrank .top');
      if (top) {
        top.insertAdjacentHTML('afterend', calBar(r.cal));
      }
    }
    bindLa(document.querySelector('#view'));
  });
  const calBar = (n, big) => `<div class="la-calbar ${big ? 'big' : ''}" title="${esc(t('la_calHint'))}"><span class="tag la-cal">${t('la_cal', { n })}</span>
    <span class="la-dots">${[0, 1, 2, 3, 4].map(i => `<i class="${i < n ? 'on' : ''}"></i>`).join('')}</span>${big ? `<span class="mute">${t('la_calHint')}</span>` : ''}</div>`;

  function balanceStrip(m) {
    const b = m.balance;
    if (!b) return '';
    return `<div class="la-bal" data-la-tip="1">${IC.info}<span>${t('la_bal')}</span><span class="mute">· ${t('la_balDiff', { n: b.diff })}${b.parties ? ' · ' + t('la_balParties', { n: b.parties }) : ''}</span>
      <div class="la-tipbox">${t('la_balText')}<div class="la-tiprow"><span class="alfa">Alfa ${t('la_balAvg', { n: b.A })} · ${t('la_balWin', { n: b.pA })}</span><span class="bravo">Bravo ${t('la_balAvg', { n: b.B })} · ${t('la_balWin', { n: 100 - b.pA })}</span></div></div></div>`;
  }
  function slaCard(m) {
    const s = m.sla;
    if (!s) return '';
    const st = s.status;
    const head = st === 'resolved' ? (s.byNick ? t('la_slaResolved', { n: esc(s.byNick) }) : t('la_slaResolvedAnon')) : st === 'taken' ? t('la_slaTaken', { n: esc(s.claimedNick || '?') }) : t('la_slaWaiting');
    const steps = ['waiting', 'taken', 'resolved'], ci = steps.indexOf(st);
    const late = st !== 'resolved' && Date.now() > s.target;
    const sub = st === 'resolved' ? `${t('la_slaTook', { t: fmtLeft(s.doneAt - s.at) })}${s.outcome ? ' · ' + t('la_outcome_' + s.outcome) : ''}`
      : `${t('la_slaElapsed', { t: `<b data-la-el="${s.at}">${fmtLeft(Date.now() - s.at)}</b>` })} · ${t('la_slaTarget', { n: s.targetMin })}`;
    const rate = s.canRate ? (s.myRate != null ? `<span class="la-rated">${s.myRate > 0 ? IC.up : s.myRate < 0 ? IC.down : ''}${t('la_rateThanks')}</span>`
      : `<div class="la-thumbs"><span class="mute">${t('la_rateDecision')}</span><button class="la-th up" data-la="dec" data-id="${m.id}" data-v="1" title="+">${IC.up}</button><button class="la-th down" data-la="dec" data-id="${m.id}" data-v="-1" title="-">${IC.down}</button></div>`) : '';
    return `<div class="card la-sla ${st} ${late ? 'late' : ''}"><div class="la-slah">${IC.shield}<div class="grow"><b>${head}</b><div class="mute">${sub}</div></div>
      <div class="la-steps">${steps.map((x, i) => `<i class="${i <= ci ? 'on' : ''}"></i>`).join('')}</div></div>${rate}</div>`;
  }
  function matchRateInline(m) {
    if (!m.me || m.state !== 'done') return '';
    if (m.test && !m.myRating && L()?.fb?.match?.id !== m.id) return '';
    if (m.myRating) return m.myRating.s ? `<div class="la-myrate mute">${t('la_myRating', { n: m.myRating.s })} ${stars(m.myRating.s, 'sm')}</div>` : '';
    if (Date.now() - (m.finishedAt || 0) > 7 * 864e5) return '';
    return `<div class="card la-rate inline" data-rate-id="${m.id}">${rateBody(m.id)}</div>`;
  }
  const rateBody = id => {
    const sel = (LA.sel[id] ||= { s: 0, tags: [] });
    return `<div class="la-rh"><b>${t('la_rateMatch', { id })}</b></div>
      <div class="la-starsel">${[1, 2, 3, 4, 5].map(i => `<button class="${i <= sel.s ? 'on' : ''}" data-la="star" data-id="${id}" data-s="${i}" title="${i}">${IC.star}</button>`).join('')}</div>
      <div class="la-tags"><span class="mute">${t('la_tagsQ')}</span>${TAGS.map(x => `<button class="la-tg ${sel.tags.includes(x) ? 'on' : ''}" data-la="tag" data-id="${id}" data-tag="${x}">${t('la_tag_' + x)}</button>`).join('')}</div>
      <div class="row la-ract"><button class="btn sm" data-la="rate-send" data-id="${id}" ${sel.s ? '' : 'disabled'}>${t('la_rateSend')}</button><button class="btn ghost sm" data-la="rate-skip" data-id="${id}">${t('la_rateSkip')}</button></div>`;
  };
  function finishedBalance(m) {
    const b = m.balance;
    if (!b) return '';
    return `<div class="card la-balcard"><div class="card-h"><h4 style="margin:0">${t('la_bal')}</h4><span class="grow"></span><span class="mute">${t('la_balDiff', { n: b.diff })}</span></div>
      <div class="la-balrow"><span class="alfa">Alfa · ${t('la_balAvg', { n: b.A })} · ${t('la_balWin', { n: b.pA })}</span><span class="bravo">${t('la_balWin', { n: 100 - b.pA })} · ${t('la_balAvg', { n: b.B })} · Bravo</span></div>
      <div class="la-prob"><i style="width:${b.pA}%"></i><i style="width:${100 - b.pA}%"></i></div>
      <p class="mute" style="margin:8px 0 0;font-size:12.5px">${t('la_balText')}${b.parties ? ' ' + t('la_balParties', { n: b.parties }) + '.' : ''}</p></div>`;
  }

  const LA = window.LA = { sel: {}, notes: [], fbKey: '' };
  function dock() {
    let d = document.getElementById('la-dock');
    if (!d) { d = document.createElement('div'); d.id = 'la-dock'; document.body.append(d); }
    return d;
  }
  const renderDock = safe(() => {
    const lane = L(), d = dock();
    const fb = lane?.fb || {};
    const shownId = S.page === 'play' && S.finishedMatch ? S.finishedMatch.id : null;
    let key = '', html = '';
    const busy = !!S.live?.match || S.live?.ready || S.page === 'staff';
    if (busy) {  } else if (fb.decision && fb.decision.id !== shownId) {
      key = 'd' + fb.decision.id;
      html = `<div class="card la-rate dock"><div class="la-rh"><b>${t('la_rateDecision')}</b><button class="uinote-x" data-la="dec" data-id="${fb.decision.id}" data-v="0" title="${t('close')}">${IC.x}</button></div>
        <div class="mute">${t('la_rateDecisionSub', { id: fb.decision.id, by: esc(fb.decision.by || '') })}${fb.decision.outcome ? ' · ' + t('la_outcome_' + fb.decision.outcome) : ''}</div>
        <div class="la-thumbs"><button class="la-th up" data-la="dec" data-id="${fb.decision.id}" data-v="1">${IC.up}</button><button class="la-th down" data-la="dec" data-id="${fb.decision.id}" data-v="-1">${IC.down}</button></div></div>`;
    } else if (fb.match && fb.match.id !== shownId) {
      key = 'm' + fb.match.id;
      html = `<div class="card la-rate dock" data-rate-id="${fb.match.id}"><div class="la-sub mute">${esc(mapName(fb.match.map || ''))} · ${modeName(fb.match.mode)}</div>${rateBody(fb.match.id)}</div>`;
    }
    let fbEl = d.querySelector('.la-fb');
    if (!fbEl) { fbEl = document.createElement('div'); fbEl.className = 'la-fb'; d.append(fbEl); }
    if (key !== LA.fbKey) { LA.fbKey = key; fbEl.innerHTML = html; bindLa(fbEl); }
  });
  function note(html, { ttl = 25_000, id } = {}) {
    const d = dock();
    if (id) d.querySelector(`[data-note="${id}"]`)?.remove();
    const el = document.createElement('div');
    el.className = 'card la-note';
    if (id) el.dataset.note = id;
    el.innerHTML = html + `<button class="uinote-x la-nx" title="${t('close')}">${IC.x}</button>`;
    el.querySelector('.la-nx').onclick = () => el.remove();
    d.prepend(el);
    bindLa(el);
    if (ttl) setTimeout(() => el.remove(), ttl);
    return el;
  }

  function onLaneMsg(m) {
    if (m.k === 'call') {
      note(`${IC.call}<div class="grow"><b>${t('la_callTitle', { n: esc(m.from.nick), mode: modeName(m.mode) })}</b><div class="mute">${t('la_callText', { q: m.n, m: m.need })}</div></div>
        <button class="btn sm" data-la="go-play" data-mode="${m.mode}">${t('la_callJoin')}</button>`, { id: 'call' + m.from.id });
      K.attention?.(t('la_callTitle', { n: m.from.nick, mode: modeName(m.mode) }));
      if (S.sound) beep();
    } else if (m.k === 'fivesSoon' || m.k === 'fivesOpen' || m.k === 'fivesClosed') {
    }
    else if (m.k === 'sla') {
      note(`${IC.shield}<div class="grow"><b>${t(m.level === 2 ? 'la_slaPing2' : 'la_slaPing1', { id: m.id, n: m.mins })}</b></div><button class="btn sm" data-la="open-review" data-id="${m.id}">${t('la_open')}</button>`, { ttl: 5 * 60_000, id: 'sla' + m.id });
      K.attention?.(t(m.level === 2 ? 'la_slaPing2' : 'la_slaPing1', { id: m.id, n: m.mins })); sfx('staff_alert');
    } else if (m.k === 'resolved' || m.k === 'claimed') {
      toast(t(m.k === 'resolved' ? 'la_resolvedToast' : 'la_claimedToast', { id: m.id }));
      if (S.finishedMatch?.id === m.id) api('/api/match?id=' + m.id).then(x => { if (S.finishedMatch?.id === m.id) { S.finishedMatch = x; if (S.page === 'play') refresh(); } }).catch(() => {});
    }
  }
  const hookWs = ws => { if (!ws || ws.__la) return; ws.__la = true; ws.addEventListener('message', e => { try { const m = JSON.parse(e.data); if (m.t === 'laneA') onLaneMsg(m); } catch {} }); };

  async function refreshFinished(id) {
    if (S.finishedMatch?.id == id) { S.finishedMatch = await api('/api/match?id=' + id); if (S.page === 'play') refresh(); }
  }
  function bindLa(root) {
    if (!root) return;
    root.querySelectorAll('[data-la]').forEach(b => b.onclick = run(async e => {
      e.stopPropagation(); e.preventDefault?.();
      const a = b.dataset.la, id = b.dataset.id;
      if (a === 'rsvp') { await api('/api/fives/rsvp', { on: b.dataset.on === '1' }); }
      else if (a === 'fives-open') { await api('/api/staff/fives', { open: true, minutes: +(document.getElementById('la-fmin')?.value) || 60 }); toast(t('la_fivesOpened')); if (S.page === 'staff') renderStaff(); }
      else if (a === 'fives-close') { await api('/api/staff/fives', { open: false }); if (S.page === 'staff') renderStaff(); }
      else if (a === 'call') {
        const r = await api('/api/queue/call', {});
        toast(t('la_callSent', { f: r.friends, d: r.discord ? t('la_callDiscord') : '' }));
        if (S.live?.lane) S.live.lane.callCd = r.cd;
        refresh();
      } else if (a === 'go-play') { S.mode = b.dataset.mode || S.mode; b.closest('.la-note')?.remove(); go('play'); }
      else if (a === 'star') { (LA.sel[id] ||= { s: 0, tags: [] }).s = +b.dataset.s; redrawRate(id); }
      else if (a === 'tag') { const s = (LA.sel[id] ||= { s: 0, tags: [] }); s.tags = s.tags.includes(b.dataset.tag) ? s.tags.filter(x => x !== b.dataset.tag) : [...s.tags, b.dataset.tag]; redrawRate(id); }
      else if (a === 'rate-send' || a === 'rate-skip') {
        const s = LA.sel[id] || { s: 0, tags: [] };
        try { await api('/api/match/rate', { id: +id, s: a === 'rate-skip' ? 0 : s.s, tags: a === 'rate-skip' ? [] : s.tags }); }
        catch (err) { if (![tErr('Already rated'), tErr('Nothing to rate')].includes(err?.message)) throw err; }
        if (a === 'rate-send') toast(t('la_rateThanks'));
        delete LA.sel[id]; LA.fbKey = null;
        b.closest('.la-rate.dock')?.remove();
        await refreshFinished(id);
      } else if (a === 'dec') {
        await api('/api/match/rate-decision', { id: +id, v: +b.dataset.v });
        if (+b.dataset.v) toast(t('la_rateThanks'));
        LA.fbKey = null;
        b.closest('.la-rate.dock')?.remove();
        await refreshFinished(id);
      } else if (a === 'open-review') {
        b.closest('.la-note')?.remove();
        S.staffTab = 'matches'; S.staffMatch = await api('/api/staff/match?id=' + id).catch(() => null);
        if (S.page === 'staff') renderStaff(); else go('staff');
      } else if (a === 'claim' || a === 'unclaim') { await api('/api/staff/claim', { id: +id, off: a === 'unclaim' }); renderStaff(); }
      else if (a === 'duty') { await api('/api/staff/duty', { on: b.dataset.on === '1' }); renderStaff(); }
      else if (a === 'sched-add') { LA.sched = [...(LA.sched || []), { d: 5, from: '18:00', to: '22:00', uid: S.me.id }]; drawSched(); }
      else if (a === 'sched-rm') { LA.sched.splice(+b.dataset.i, 1); drawSched(); }
      else if (a === 'sched-save') { readSched(); LA.sched = await api('/api/staff/duty-schedule', { list: LA.sched }); toast(t('la_schedSaved')); drawSched(); }
      else if (a === 'qdays') { LA.qDays = +b.dataset.d; renderDutyTab(); }
    }));
  }
  function redrawRate(id) {
    document.querySelectorAll(`[data-rate-id="${id}"]`).forEach(el => {
      const sub = el.querySelector('.la-sub')?.outerHTML || '';
      el.innerHTML = sub + rateBody(+id);
      bindLa(el);
    });
  }

  const dayName = d => t('la_d' + d);
  function ratingsSection(r, days) {
    if (!r || !r.n) return `<div class="card la-sec"><h3 style="margin:0 0 6px">${t('la_ratings', { n: days })}</h3><div class="empty-note">${t('la_noRatings')}</div></div>`;
    const rows = (o, lab = k => k) => Object.entries(o).sort((a, b) => a[1].avg - b[1].avg).map(([k, v]) => ({ label: lab(k), v: v.avg, tip: `${lab(k)}: ${v.avg} / 5 · ${t('la_ratingsN')}: ${v.n}` }));
    const days7 = Object.entries(r.byDay).sort((a, b) => a[0] < b[0] ? -1 : 1).slice(-14);
    const one = x => (Math.round(x * 10) / 10).toFixed(1);
    return `<div class="card la-sec"><h3 style="margin:0 0 10px">${t('la_ratings', { n: days })}</h3>
      <div class="kpis">${kpi(t('la_ratingsAvg'), `${one(r.avg)} <small style="font-size:13px">/ 5</small>`)}${kpi(t('la_ratingsN'), r.n)}${kpi(t('la_ratingsSkipped'), r.skipped)}</div>
      <div class="grid2"><div><h4>${t('la_byMode')}</h4>${hBars(rows(r.byMode, modeName), { fmt: one })}<h4 style="margin-top:12px">${t('la_byMap')}</h4>${hBars(rows(r.byMap, mapName), { fmt: one })}</div>
      <div><h4>${t('la_tagsTop')}</h4>${hBars(TAGS.map(x => ({ label: t('la_tag_' + x), v: r.tags[x] || 0 })).sort((a, b) => b.v - a.v))}
        <h4 style="margin-top:12px">${t('la_byDay')}</h4>${hBars(days7.map(([k, v]) => ({ label: shortDay(k), v: v.avg, tip: `${shortDay(k)}: ${v.avg} / 5 · ${t('la_ratingsN')}: ${v.n}` })), { fmt: one })}</div></div>
      <h4 style="margin-top:14px">${t('la_worst')}</h4>
      <div class="la-worst">${r.worst.map(w => `<div class="la-wr" data-la-match="${w.id}"><b>#${w.id}</b><span class="tag">${modeName(w.mode)}</span><span>${esc(mapName(w.map || ''))}</span>${stars(Math.round(w.avg), 'sm')}<b class="num">${one(w.avg)}</b><span class="mute">· ${w.n}</span>
        <span class="grow"></span>${Object.entries(w.tags || {}).map(([k, n]) => `<span class="tag ${k === 'great' ? '' : 'red'}">${t('la_tag_' + k)}${n > 1 ? ' ×' + n : ''}</span>`).join('')}<span class="mute">${fmtDT(w.at)}</span></div>`).join('')}</div></div>`;
  }
  const bindWorst = root => root?.querySelectorAll('[data-la-match]').forEach(el => el.onclick = run(async () => { S.staffTab = 'matches'; S.staffMatch = await api('/api/staff/match?id=' + el.dataset.laMatch); renderStaff(); }));

  async function renderDutyTab() {
    const box = document.getElementById('st-duty');
    if (!box) return;
    const days = LA.qDays || 30;
    const [d, q] = await Promise.all([api('/api/staff/duty'), api('/api/staff/quality?days=' + days)]).catch(e => (toast(e.message, true), [null, null]));
    if (!d || !q || !document.getElementById('st-duty')) return;
    LA.duty = d; LA.sched = d.schedule.map(x => ({ ...x }));
    const me = d.staff.find(x => x.id === S.me.id);
    const f = L()?.fives || { always: true };
    const one = x => x == null ? '—' : (Math.round(x * 10) / 10).toFixed(1);
    box.innerHTML = `<div class="la-top">
      <div class="card la-me ${me?.on ? 'on' : ''}"><h4>${t('la_dutyMe')}</h4><div class="row">${IC.shield}<b class="grow">${me?.on ? t('la_dutyUntil', { d: fmtDT(me.until) }) : t('la_dutyOffNow')}</b>
        <button class="btn ${me?.on ? 'ghost' : 'gold'} sm" data-la="duty" data-on="${me?.on ? 0 : 1}">${me?.on ? t('la_dutyOff') : t('la_dutyOn')}</button></div>
        <p class="mute" style="margin:10px 0 0;font-size:12.5px">${t('la_dutyHint', { a: q.sla.dutyMin, b: q.sla.targetMin, h: d.hours || 6 })}</p></div>
      <div class="card"><h4>${t('la_dutyTitle')} · ${d.onDuty.length}</h4><div class="la-duty-list">${d.staff.map(x => `<span class="la-st ${d.onDuty.includes(x.id) ? 'on' : ''}"><i class="dot ${x.online ? 'on' : ''}"></i>${esc(x.nick)}</span>`).join('') || `<span class="mute">—</span>`}</div></div>
      <div class="card"><h4>${t('la_fivesStaff')}</h4>${f.always ? `<p class="mute" style="margin:0">${t('la_fivesAlways')}</p>`
        : `<div class="row">${IC.cal}<b class="grow">${f.open ? `${t('la_fivesLive')}${f.end ? ` · <span data-la-cd="${f.end}"></span>` : ''}` : f.next ? t('la_fivesNext', { d: esc(fmtWhen(f.next.start)) }) : t('la_fivesNone')}</b></div>
          <div class="row" style="margin-top:10px">${f.open && f.manual ? `<button class="btn ghost sm" data-la="fives-close">${t('la_fivesCloseNow')}</button>` : `<label class="mute">${t('la_fivesMins')}</label><input id="la-fmin" type="number" min="15" max="240" step="15" value="60" style="width:80px"><button class="btn sm" data-la="fives-open">${t('la_fivesOpenNow')}</button>`}</div>
          <p class="mute" style="margin:8px 0 0;font-size:12px">${t('la_fivesSched', { s: esc(f.schedule || '') })} · ${t('la_fivesSigned', { n: f.rsvp ?? 0 })}</p>`}</div></div>
      <div class="row" style="margin:18px 0 10px"><h2 style="margin:0" class="grow">${t('la_slaStats', { n: days })}</h2><div class="seg sm">${[7, 30, 90].map(n => `<button data-la="qdays" data-d="${n}" class="${n === days ? 'on' : ''}">${n}</button>`).join('')}</div></div>
      <div class="kpis">${kpi(t('la_slaResolvedN'), q.sla.resolved)}${kpi(t('la_slaAvg'), q.sla.avgMin == null ? '—' : t('la_min', { m: one(q.sla.avgMin) }))}${kpi(t('la_slaMed'), q.sla.medMin == null ? '—' : t('la_min', { m: one(q.sla.medMin) }))}${kpi(t('la_slaWithin', { n: q.sla.targetMin }), q.sla.within == null ? '—' : q.sla.within + '%', '', q.sla.within != null && q.sla.within < 80 ? 'bad' : '')}</div>
      <div class="card la-sec"><h4>${t('la_slaOpen', { n: q.sla.open.length })}</h4>${q.sla.open.map(o => `<div class="la-open ${Date.now() - o.at > q.sla.targetMin * 60e3 ? 'late' : ''}"><b>#${o.id}</b><span class="tag">${modeName(o.mode)}</span>${o.disputed ? `<span class="tag red">${t('dispute')}</span>` : ''}
          <span class="mute">${t('la_slaElapsed', { t: `<b data-la-el="${o.at}"></b>` })}</span><span class="grow"></span>
          <span>${o.claimedBy ? t('la_claimedBy', { n: esc(o.claimedNick || '?') }) : `<span class="mute">${t('la_unclaimed')}</span>`}</span>
          ${o.claimedBy === S.me.id ? `<button class="btn ghost sm" data-la="unclaim" data-id="${o.id}">${t('la_unclaim')}</button>` : o.claimedBy ? '' : `<button class="btn sm" data-la="claim" data-id="${o.id}">${t('la_claim')}</button>`}
          <button class="btn ghost sm" data-la="open-review" data-id="${o.id}">${t('la_open')}</button></div>`).join('') || `<div class="empty-note">${t('la_slaNone')}</div>`}</div>
      <div class="card la-sec"><h4>${t('la_dutyStaff')}</h4><table class="la-tbl"><thead><tr><th></th><th>${t('la_colResolved')}</th><th>${t('la_colAvg')}</th><th>${t('la_colClaim')}</th><th>${t('la_colRating')}</th></tr></thead><tbody>
        ${q.staff.map(x => `<tr><td><span class="la-st ${x.onDuty ? 'on' : ''}">${esc(x.nick || x.id)}</span></td><td class="num">${x.resolved}</td><td class="num">${one(x.avgMin)}</td><td class="num">${one(x.claimMin)}</td>
          <td><span class="la-ud up">${IC.up}${x.up}</span><span class="la-ud down">${IC.down}${x.down}</span></td></tr>`).join('')}</tbody></table></div>
      <div class="card la-sec"><div class="row"><h4 class="grow" style="margin:0">${t('la_sched')}</h4>${S.me.auditor ? `<button class="btn ghost sm" data-la="sched-add">+ ${t('la_schedAdd')}</button><button class="btn sm" data-la="sched-save">${t('la_schedSave')}</button>` : ''}</div>
        <p class="mute" style="margin:6px 0 10px;font-size:12.5px">${t('la_schedHint')}</p><div id="la-sched"></div></div>
      ${ratingsSection(q.ratings, days)}`;
    drawSched();
    bindLa(box); bindWorst(box); vizTips(box); tickNow();
    const open = q.sla.open.filter(o => !o.claimedBy).length;
    if ((S.laneDutyOpen || 0) !== open) { S.laneDutyOpen = open; const c = document.querySelector('[data-stab="duty"]'); if (c) c.innerHTML = `${t('st_duty')}${open ? `<span class="cnt">${open}</span>` : ''}`; }
  }
  function drawSched() {
    const box = document.getElementById('la-sched'); if (!box) return;
    const list = LA.sched || [], edit = !!S.me.auditor, staff = LA.duty?.staff || [];
    const nick = id => staff.find(x => x.id === id)?.nick || id;
    if (!list.length) { box.innerHTML = `<div class="empty-note">${t('la_schedEmpty')}</div>`; return; }
    box.innerHTML = edit ? list.map((s, i) => `<div class="la-srow" data-i="${i}">
        <select data-k="d">${[1, 2, 3, 4, 5, 6, 0].map(d => `<option value="${d}" ${d === s.d ? 'selected' : ''}>${dayName(d)}</option>`).join('')}</select>
        <input data-k="from" value="${esc(s.from)}" maxlength="5" style="width:70px"><span class="mute">–</span><input data-k="to" value="${esc(s.to)}" maxlength="5" style="width:70px">
        <select data-k="uid" class="grow">${staff.map(x => `<option value="${x.id}" ${x.id === s.uid ? 'selected' : ''}>${esc(x.nick)}</option>`).join('')}</select>
        <button class="btn ghost sm" data-la="sched-rm" data-i="${i}">${IC.x}</button></div>`).join('')
      : `<div class="la-week">${[1, 2, 3, 4, 5, 6, 0].map(d => `<div><b>${dayName(d)}</b>${list.filter(s => s.d === d).sort((a, b) => a.from < b.from ? -1 : 1).map(s => `<span class="tag">${esc(s.from)}–${esc(s.to)} · ${esc(nick(s.uid))}</span>`).join('') || '<span class="mute">—</span>'}</div>`).join('')}</div>`;
    bindLa(box);
  }
  function readSched() {
    document.querySelectorAll('#la-sched .la-srow').forEach(r => {
      const s = LA.sched[+r.dataset.i]; if (!s) return;
      r.querySelectorAll('[data-k]').forEach(i => { s[i.dataset.k] = i.dataset.k === 'd' ? +i.value : i.value.trim(); });
    });
  }
  async function decorateReviews() {
    const cards = document.querySelectorAll('[data-rv],[data-rvl]');
    if (!cards.length) return;
    const q = await api('/api/staff/quality?days=7').catch(() => null);
    if (!q) return;
    const open = Object.fromEntries(q.sla.open.map(o => [String(o.id), o]));
    S.laneDutyOpen = q.sla.open.filter(o => !o.claimedBy).length;
    document.querySelectorAll('[data-rv],[data-rvl]').forEach(c => {
      const o = open[c.dataset.rv || c.dataset.rvl];
      if (!o || c.querySelector('.la-claim')) return;
      const late = Date.now() - o.at > q.sla.targetMin * 60e3;
      c.insertAdjacentHTML('afterbegin', `<div class="la-claim ${late ? 'late' : ''} ${o.claimedBy ? 'taken' : ''}">${IC.shield}
        <span>${o.claimedBy ? t('la_claimedBy', { n: esc(o.claimedNick || '?') }) : t('la_unclaimed')}</span><span class="mute">· ${t('la_slaElapsed', { t: `<b data-la-el="${o.at}"></b>` })}</span><span class="grow"></span>
        ${o.claimedBy === S.me.id ? `<button class="btn ghost sm" data-la="unclaim" data-id="${o.id}">${t('la_unclaim')}</button>` : o.claimedBy && !S.me.auditor ? '' : `<button class="btn sm" data-la="claim" data-id="${o.id}">${t('la_claim')}</button>`}</div>`);
      bindLa(c.querySelector('.la-claim'));
    });
    tickNow();
  }

  const renderDutyChip = safe(() => {
    const lane = L(); if (!lane) return;
    let el = document.getElementById('la-duty');
    if (!el) {
      const sup = document.querySelector('.side [data-go="support"]'); if (!sup) return;
      el = document.createElement('div'); el.id = 'la-duty'; el.className = 'la-duty';
      el.onclick = () => go('support');
      sup.before(el);
    }
    const n = lane.duty || 0;
    el.classList.toggle('on', n > 0);
    el.title = n ? t('la_dutySupport', { n }) : t('la_dutyNone');
    el.innerHTML = `${IC.shield}<b>${n}</b><span>${t('la_dutyN', { n: '' }).replace(/[:\s]+$/, '').replace(/^[:\s]+/, '')}</span>`;
  });

  const wrap = (name, after) => {
    const orig = window[name];
    if (typeof orig !== 'function') return console.warn('[lane-a] немає функції', name);
    window[name] = function (...a) {
      const r = orig.apply(this, a);
      if (r && typeof r.then === 'function') return r.then(v => { safe(after).call(this, a, v); return v; });
      safe(after).call(this, a, r);
      return r;
    };
  };
  { const o = window.matchBar; if (o) window.matchBar = function (m) { return o.apply(this, arguments) + safe(balanceStrip)(m); }; }
  { const o = window.playerRow; if (o) window.playerRow = function (p) {
    const h = o.apply(this, arguments);
    return p?.cal != null ? h.replace('<div class="sub">', `<div class="sub"><span class="tag la-cal sm" title="${esc(t('la_calHint'))}">${t('la_calShort', { n: p.cal })}</span> `) : h;
  }; }
  wrap('renderPlay', () => decoratePlay());
  wrap('renderMatch', ([m]) => {
    if (m?.state === 'disputed' && m.sla) { const c = document.querySelector('.center-col'); if (c && !c.querySelector('.la-sla')) { c.insertAdjacentHTML('afterbegin', slaCard(m)); bindLa(c); tickNow(); } }
  });
  wrap('renderFinished', ([m]) => {
    const fin = document.querySelector('.card.final'); if (!fin || !m) return;
    fin.insertAdjacentHTML('afterend', `${slaCard(m)}${matchRateInline(m)}${finishedBalance(m)}`);
    bindLa(document.querySelector('#view')); tickNow();
    LA.fbKey = null; renderDock();
  });
  wrap('drawLeaderboard', () => {
    const rows = S.lbRows || []; let any = false;
    for (const r of rows) {
      if (r.cal == null) continue;
      const el = document.querySelector(`.lbr[data-uid="${CSS.escape(r.id)}"]`); if (!el) continue;
      any = true; el.classList.add('la-uncal');
      el.querySelector('.lb-nick')?.insertAdjacentHTML('beforeend', `<span class="tag la-cal sm" title="${esc(t('la_calHint'))}">${t('la_calShort', { n: r.cal })}</span>`);
    }
    if (any && !document.querySelector('.la-legend')) document.querySelector('.lbt')?.insertAdjacentHTML('afterend', `<p class="mute la-legend">${t('la_calLegend')}</p>`);
  });
  wrap('renderProfile', () => {
    const p = S.profCache; if (!p || S.page !== 'profile') return;
    const r = p['r' + S.profMode]; if (r?.cal == null || document.querySelector('.la-calbar')) return;
    const lv = document.querySelector('.plevel');
    document.querySelector('.phead .tags')?.insertAdjacentHTML('beforeend', calBar(r.cal));
  });
  wrap('renderStaff', () => {
    if (S.page !== 'staff') return;
    if (S.staffTab === 'duty') renderDutyTab(); else if (S.staffTab === 'matches') decorateReviews();
  });
  wrap('renderStaffStats', () => {
    const box = document.getElementById('st-stats'); if (!box || box.querySelector('.la-sec')) return;
    api('/api/staff/quality?days=30').then(q => { const b = document.getElementById('st-stats'); if (!b || b.querySelector('.la-sec')) return; b.insertAdjacentHTML('beforeend', ratingsSection(q.ratings, 30)); bindWorst(b); vizTips(b); }).catch(() => {});
  });
  wrap('renderSupport', () => {
    const n = L()?.duty; if (n == null || S.page !== 'support' || document.querySelector('.la-supduty')) return;
    document.querySelector('#view .page')?.insertAdjacentHTML('afterbegin', `<div class="la-supduty ${n ? 'on' : ''}">${IC.shield}<span>${n ? t('la_dutySupport', { n }) : t('la_dutyNone')}</span></div>`);
  });
  wrap('onState', () => { renderDutyChip(); renderDock(); hookWs(S.ws); });
  wrap('connect', () => hookWs(S.ws));
  const sync = () => { hookWs(S.ws); renderDutyChip(); renderDock(); };
  sync(); setInterval(sync, 3000);
})();
