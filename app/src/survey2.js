(() => {
  const L = {
    en: { svWave: 'Survey #{n}', svWave1: 'open beta, Nov 1', svWave2: 'before Season 1',
      sv_client: 'Client', sv_guard: 'KONZTE GUARD', sv_wait: 'Ready to wait in queue', sv_motivate: 'What makes them play Season 1', sv_spent: 'Bought on Konzte', sv_team: 'Want to help', sv_liked: 'What they like', sv_change2: 'Change / add / remove' },
    uk: { svWave: 'Опитування №{n}', svWave1: 'ОБТ, 1 листопада', svWave2: 'перед Сезоном 1',
      sv_client: 'Клієнт', sv_guard: 'KONZTE GUARD', sv_wait: 'Готові чекати в черзі', sv_motivate: 'Що змусить грати в Сезоні 1', sv_spent: 'Що купували', sv_team: 'Хочуть допомогти', sv_liked: 'Що подобається', sv_change2: 'Змінити / додати / прибрати' },
    ru: { svWave: 'Опрос №{n}', svWave1: 'ОБТ, 1 ноября', svWave2: 'перед Сезоном 1',
      sv_client: 'Клиент', sv_guard: 'KONZTE GUARD', sv_wait: 'Готовы ждать в очереди', sv_motivate: 'Что заставит играть в Сезоне 1', sv_spent: 'Что покупали', sv_team: 'Хотят помочь', sv_liked: 'Что нравится', sv_change2: 'Изменить / добавить / убрать' },
  };
  for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]);

  const W2 = {
    order: ['played', 'source', 'client', 'nps', 'rates', 'guard', 'blockers', 'wait', 'modes', 'motivate', 'features', 'spent', 'team'],
    texts: ['liked', 'bugs', 'change', 'contact'],
    label: { change: 'sv_change2' },
    opt: { daily: 'Almost daily', weekly: 'Few times a week', few: 'Sometimes', stopped: 'Stopped playing', not_yet: 'Not yet',
      cm_discord: 'CM Discord', friend: 'Friend', konzte_discord: 'Konzte Discord', youtube: 'YouTube', tiktok: 'TikTok', search: 'Search', other: 'Other',
      win: 'Windows', linux: 'Linux', mac: 'macOS', none: 'Not installed',
      queue: 'Queue speed', balance: 'Team balance', result: 'Sending results', app: 'App stability', guard: 'KONZTE GUARD', staff: 'Staff & support', shop: 'Store', pass: 'Pass', clans: 'Clans',
      fine: 'No problems', minor: 'Small problems', blocked: 'Stops them playing', no_install: 'Not installed', unknown: 'Don’t know it',
      queue_long: 'Long queue', few_players: 'Few players', cheaters: 'Cheaters', toxic: 'Toxic players', bugs: 'Bugs', result_hard: 'Results hassle', guard_issue: 'GUARD problems', time: 'No time', no_friends: 'No friends', nothing: 'Nothing',
      w2: '≤ 2 min', w5: '≤ 5 min', w10: '≤ 10 min', w15: '15+ min',
      '5v5': '5×5', '2v2': '2×2', '1v1': '1×1', '3v3': '3×3', tournaments: 'Tournaments', clanwars: 'Clan wars',
      cash: 'Cash prizes', rank: 'Rank & ELO', cosmetics: 'Season cosmetics', friends: 'Friends', fair: 'No cheaters',
      web_mobile: 'Web / mobile', replays: 'Clips', stats: 'Deeper stats', achievements: 'Achievements', voice: 'Voice in app', lfg: 'Team search', coaching: 'Coaching', overlay: 'Stream overlay', events: 'Weekly events',
      premium: 'Premium', kf: 'KF', items: 'Store items', theme: 'App style', pass_paid: 'Pass', nothing_paid: 'Nothing',
      j_staff: 'Staff', j_designer: 'Designer', j_partner: 'Partner', j_tester: 'Tester', j_no: 'Not now' },
  };
  const conf = w => w === 1
    ? { order: SV_ORDER.filter(k => !['bugs', 'add', 'change', 'contact'].includes(k)), texts: ['bugs', 'add', 'change', 'contact'], opt: SV_OPT, label: {} }
    : W2;

  window.renderSurvey = async function renderSurvey() {
    const box = $('#st-survey'); if (!box) return;
    const want = S.svWave || 0;
    const s = await api('/api/admin/survey' + (want ? '?w=' + want : '')).catch(e => (toast(e.message, true), null));
    if (!s || !$('#st-survey')) return;
    const C = conf(s.wave), Q = s.questions, nps = Q.nps, OPT = C.opt;
    const block = k => {
      const q = Q[k]; if (!q) return '';
      const head = `<h4>${t(C.label[k] || 'sv_' + k)} <span class="mute" style="font-weight:normal">· ${q.n}</span></h4>`;
      if (k === 'nps') return `<div class="card">${head}<div class="kpis k3">${kpi('NPS', q.nps ?? '—', t('svNpsHint'), q.nps < 0 ? 'bad' : '')}${kpi(t('svAvg'), q.avg ?? '—')}${kpi(t('svAnswers'), q.n)}</div>
        ${hBars(q.dist.map((v, i) => ({ label: String(i), v, color: i >= 9 ? '#23a090' : i <= 6 ? '#7d84ec' : '#8e8c9a' })).reverse())}</div>`;
      if (k === 'rates') return `<div class="card">${head}${hBars(Object.entries(q.rates).sort((a, b) => b[1].avg - a[1].avg).map(([a, r]) => ({ label: OPT[a] || a, v: r.avg, tip: `${OPT[a] || a}: ${r.avg} / 5 · ${r.n}` })), { fmt: v => (+v).toFixed(2) })}</div>`;
      if (q.texts.length) return `<div class="card">${head}<div class="svtexts">${q.texts.map(x => `<div class="svt"><span class="mute">${fmtDT(x.at)} · ${x.lang.toUpperCase()}</span><p>${esc(x.t)}</p></div>`).join('')}</div></div>`;
      const rows = Object.entries(q.counts).sort((a, b) => b[1] - a[1]).map(([o, v]) => ({ label: OPT[o] || o, v }));
      return rows.length ? `<div class="card">${head}${hBars(rows, { extra: r => `<span class="mute pc">${Math.round(r.v / q.n * 100)}%</span>` })}</div>` : '';
    };
    const days = Object.keys(s.days).sort();
    const waves = (s.waves || [{ w: 1, n: s.total }]).slice().reverse();
    box.innerHTML = `<div class="row" style="margin-bottom:12px;flex-wrap:wrap;gap:10px"><div class="seg">${waves.map(x => `<button data-svw="${x.w}" class="${x.w === s.wave ? 'on' : ''}">${t('svWave', { n: x.w })} <small class="mute">· ${t('svWave' + x.w) || ''} · ${x.n}</small></button>`).join('')}</div>
        <span class="grow"></span><button class="btn ghost sm" id="sv-copy">${t('svCopy')}</button><button class="btn ghost sm" id="sv-csv">CSV</button><button class="btn ghost sm" id="sv-re">${t('stRefresh')}</button></div>
      <p class="mute" style="margin:0 0 12px">${t('svHint')}</p>
      <div class="kpis">${kpi(t('svTotal'), s.total, s.last ? t('svLast', { d: fmtDT(s.last) }) : '')}${kpi('NPS', nps?.nps ?? '—', t('svNpsHint'))}${Object.entries(s.langs).map(([l, n]) => kpi(l.toUpperCase(), n)).join('')}</div>
      ${days.length > 1 ? `<div class="card"><h4>${t('svPerDay')}</h4>${vBars(days, [{ label: t('svAnswers'), color: VZ.one, data: days.map(d => s.days[d]) }])}</div>` : ''}
      ${s.total ? `<div class="grid2 svgrid">${C.order.map(block).join('')}</div>${C.texts.map(block).join('')}` : `<div class="card empty-note">${t('svEmpty')}</div>`}`;
    box.querySelectorAll('[data-svw]').forEach(b => b.onclick = () => { S.svWave = +b.dataset.svw; renderSurvey(); });
    $('#sv-re').onclick = () => renderSurvey();
    $('#sv-copy').onclick = () => { navigator.clipboard.writeText('https://konzte.online/survey'); toast(t('copied')); };
    $('#sv-csv').onclick = run(async () => {
      const r = await fetch(S.server + '/api/admin/survey.csv?w=' + s.wave, { headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '' } });
      if (!r.ok) throw new Error('CSV: ' + r.status);
      const a = document.createElement('a'); a.href = URL.createObjectURL(await r.blob()); a.download = `konzte-survey${s.wave}-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    });
    vizTips(box);
  };
})();
