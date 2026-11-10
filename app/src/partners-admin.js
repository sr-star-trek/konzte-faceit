(() => {
  const L = {
    en: {
      st_partners: 'Partners & designers', pa_partners: 'Active partners', pa_paused: 'Paused', pa_signups: 'Sign-ups', pa_payers: 'Paying players', pa_clicks: 'Link clicks',
      pa_revenue: 'Revenue from referrals', pa_earned: 'Partners earned', pa_paid: 'Paid out', pa_owed: 'Owed now', pa_reqs: 'Payout requests', pa_newApps: 'New applications',
      pa_list: 'Partners', pa_none: 'No partners yet — accept an application or add a player below.', pa_code: 'Code', pa_share: 'Share', pa_seen: 'Seen',
      pa_open: 'Open', pa_back: 'All partners', pa_add: 'Add a partner', pa_addHint: 'Find a registered player by nickname or Discord ID and make them a partner.',
      pa_find: 'Find', pa_make: 'Make partner', pa_payouts: 'Payout requests', pa_markPaid: 'Mark paid', pa_reject: 'Reject', pa_rejectQ: 'Reason (the partner will not see it automatically)',
      pa_paidQ: 'Amount paid, {c}', pa_apps: 'Applications', pa_appsNone: 'No applications', pa_appNew: 'new', pa_appAccepted: 'accepted', pa_appRejected: 'rejected', pa_appRemoved: 'removed',
      pa_accept: 'Accept', pa_makeCreator: 'Accept + make partner', pa_quiet: 'Don’t DM the player', pa_reasonQ: 'Reason for rejection (sent to the player)',
      pa_archive: 'Removed partners', pa_settings: 'Settings', pa_bonus: 'Bonus for new players, KF', pa_minPayout: 'Minimum payout, {c}', pa_note: 'Private note',
      pa_default: 'default {v}', pa_save: 'Save', pa_saved: 'Saved', pa_pause: 'Pause', pa_resume: 'Resume', pa_pauseHint: 'Paused: the code stops working, new purchases are not credited, the badge is hidden. History stays.',
      pa_remove: 'Remove from the program', pa_removeHint: 'The code stops working for good, the Creator badge disappears, history moves to the archive. Players they invited keep everything.',
      pa_removeQ: 'Remove {n} from the partner program?', pa_removeOwed: '{n} still has {v} unpaid. Remove anyway?', pa_removeReason: 'Reason (optional)', pa_notify: 'Send the player a DM',
      pa_removed: 'Removed from the program', pa_funnel: 'Funnel', pa_fClicks: 'Clicks', pa_fSign: 'Signed up', pa_fReg: 'Registered', pa_fPlayed: 'Played', pa_fPlayed5: '5+ matches', pa_fPay: 'Paid',
      pa_chart: 'Last 30 days', pa_chSign: 'Sign-ups', pa_chCut: 'Earned', pa_refs: 'Invited players', pa_ledger: 'Credited purchases', pa_history: 'Payouts', pa_avg: 'Average check',
      pa_month: 'This month', pa_30: '30 days', pa_since: 'Partner since {d}', pa_addedBy: 'added by {n}', pa_status: 'Status', pa_active: 'active', pa_req: 'Requested {v} · {m}',
      pa_via: 'via', pa_viaCreator: 'code', pa_viaCode: 'referral', pa_matches: 'Matches', pa_spent: 'Spent', pa_cut: 'Cut', pa_what: 'Purchase', pa_player: 'Player', pa_date: 'Date', pa_amount: 'Amount',
      pa_empty: 'Nothing yet', pa_appOf: 'Application', pa_reqNone: 'No open requests', pa_ownerOnly: 'Owner only',
    },
    uk: {
      st_partners: 'Партнери й дизайнери', pa_partners: 'Активних партнерів', pa_paused: 'На паузі', pa_signups: 'Реєстрацій', pa_payers: 'Платили', pa_clicks: 'Переходів за посиланням',
      pa_revenue: 'Дохід від запрошених', pa_earned: 'Заробили партнери', pa_paid: 'Виплачено', pa_owed: 'Борг зараз', pa_reqs: 'Запитів на виплату', pa_newApps: 'Нових заявок',
      pa_list: 'Партнери', pa_none: 'Партнерів поки немає — прийми заявку або додай гравця нижче.', pa_code: 'Код', pa_share: 'Частка', pa_seen: 'Був',
      pa_open: 'Відкрити', pa_back: 'Усі партнери', pa_add: 'Додати партнера', pa_addHint: 'Знайди зареєстрованого гравця за ніком чи Discord ID і зроби його партнером.',
      pa_find: 'Знайти', pa_make: 'Зробити партнером', pa_payouts: 'Запити на виплату', pa_markPaid: 'Позначити виплату', pa_reject: 'Відхилити', pa_rejectQ: 'Причина (партнер її сам не побачить)',
      pa_paidQ: 'Скільки виплачено, {c}', pa_apps: 'Заявки', pa_appsNone: 'Заявок немає', pa_appNew: 'нова', pa_appAccepted: 'прийнята', pa_appRejected: 'відхилена', pa_appRemoved: 'видалений',
      pa_accept: 'Прийняти', pa_makeCreator: 'Прийняти + зробити партнером', pa_quiet: 'Не писати гравцю в ЛС', pa_reasonQ: 'Причина відмови (надішлемо гравцю)',
      pa_archive: 'Видалені партнери', pa_settings: 'Налаштування', pa_bonus: 'Бонус новачкам, KF', pa_minPayout: 'Мінімальна виплата, {c}', pa_note: 'Нотатка (бачиш лише ти)',
      pa_default: 'типово {v}', pa_save: 'Зберегти', pa_saved: 'Збережено', pa_pause: 'Пауза', pa_resume: 'Відновити', pa_pauseHint: 'На паузі код не діє, нові покупки не нараховуються, значок схований. Історія лишається.',
      pa_remove: 'Видалити з програми', pa_removeHint: 'Код перестає діяти назавжди, значок Creator зникає, історія йде в архів. Запрошені гравці нічого не втрачають.',
      pa_removeQ: 'Видалити {n} з партнерської програми?', pa_removeOwed: '{n} ще не виплачено {v}. Видалити все одно?', pa_removeReason: 'Причина (необов’язково)', pa_notify: 'Написати гравцю в ЛС',
      pa_removed: 'Видалено з програми', pa_funnel: 'Воронка', pa_fClicks: 'Переходи', pa_fSign: 'Прив’язались', pa_fReg: 'Зареєструвались', pa_fPlayed: 'Грали', pa_fPlayed5: '5+ матчів', pa_fPay: 'Платили',
      pa_chart: 'Останні 30 днів', pa_chSign: 'Реєстрації', pa_chCut: 'Заробіток', pa_refs: 'Запрошені гравці', pa_ledger: 'Нараховані покупки', pa_history: 'Виплати', pa_avg: 'Середній чек',
      pa_month: 'Цей місяць', pa_30: '30 днів', pa_since: 'Партнер з {d}', pa_addedBy: 'додав {n}', pa_status: 'Статус', pa_active: 'активний', pa_req: 'Запит {v} · {m}',
      pa_via: 'через', pa_viaCreator: 'код', pa_viaCode: 'реферал', pa_matches: 'Матчів', pa_spent: 'Витратив', pa_cut: 'Частка', pa_what: 'Покупка', pa_player: 'Гравець', pa_date: 'Дата', pa_amount: 'Сума',
      pa_empty: 'Поки нічого', pa_appOf: 'Заявка', pa_reqNone: 'Відкритих запитів немає', pa_ownerOnly: 'Лише власнику',
    },
    ru: {
      st_partners: 'Партнёры и дизайнеры', pa_partners: 'Активных партнёров', pa_paused: 'На паузе', pa_signups: 'Регистраций', pa_payers: 'Платили', pa_clicks: 'Переходов по ссылке',
      pa_revenue: 'Доход от приглашённых', pa_earned: 'Заработали партнёры', pa_paid: 'Выплачено', pa_owed: 'Долг сейчас', pa_reqs: 'Запросов на выплату', pa_newApps: 'Новых заявок',
      pa_list: 'Партнёры', pa_none: 'Партнёров пока нет — прими заявку или добавь игрока ниже.', pa_code: 'Код', pa_share: 'Доля', pa_seen: 'Был',
      pa_open: 'Открыть', pa_back: 'Все партнёры', pa_add: 'Добавить партнёра', pa_addHint: 'Найди зарегистрированного игрока по нику или Discord ID и сделай его партнёром.',
      pa_find: 'Найти', pa_make: 'Сделать партнёром', pa_payouts: 'Запросы на выплату', pa_markPaid: 'Отметить выплату', pa_reject: 'Отклонить', pa_rejectQ: 'Причина (партнёр её сам не увидит)',
      pa_paidQ: 'Сколько выплачено, {c}', pa_apps: 'Заявки', pa_appsNone: 'Заявок нет', pa_appNew: 'новая', pa_appAccepted: 'принята', pa_appRejected: 'отклонена', pa_appRemoved: 'удалён',
      pa_accept: 'Принять', pa_makeCreator: 'Принять + сделать партнёром', pa_quiet: 'Не писать игроку в ЛС', pa_reasonQ: 'Причина отказа (отправим игроку)',
      pa_archive: 'Удалённые партнёры', pa_settings: 'Настройки', pa_bonus: 'Бонус новичкам, KF', pa_minPayout: 'Минимальная выплата, {c}', pa_note: 'Заметка (видишь только ты)',
      pa_default: 'по умолчанию {v}', pa_save: 'Сохранить', pa_saved: 'Сохранено', pa_pause: 'Пауза', pa_resume: 'Возобновить', pa_pauseHint: 'На паузе код не работает, новые покупки не начисляются, значок скрыт. История остаётся.',
      pa_remove: 'Удалить из программы', pa_removeHint: 'Код перестаёт работать навсегда, значок Creator исчезает, история уходит в архив. Приглашённые игроки ничего не теряют.',
      pa_removeQ: 'Удалить {n} из партнёрской программы?', pa_removeOwed: '{n} ещё не выплачено {v}. Удалить всё равно?', pa_removeReason: 'Причина (необязательно)', pa_notify: 'Написать игроку в ЛС',
      pa_removed: 'Удалён из программы', pa_funnel: 'Воронка', pa_fClicks: 'Переходы', pa_fSign: 'Привязались', pa_fReg: 'Зарегистрировались', pa_fPlayed: 'Играли', pa_fPlayed5: '5+ матчей', pa_fPay: 'Платили',
      pa_chart: 'Последние 30 дней', pa_chSign: 'Регистрации', pa_chCut: 'Заработок', pa_refs: 'Приглашённые игроки', pa_ledger: 'Начисленные покупки', pa_history: 'Выплаты', pa_avg: 'Средний чек',
      pa_month: 'Этот месяц', pa_30: '30 дней', pa_since: 'Партнёр с {d}', pa_addedBy: 'добавил {n}', pa_status: 'Статус', pa_active: 'активен', pa_req: 'Запрос {v} · {m}',
      pa_via: 'через', pa_viaCreator: 'код', pa_viaCode: 'реферал', pa_matches: 'Матчей', pa_spent: 'Потратил', pa_cut: 'Доля', pa_what: 'Покупка', pa_player: 'Игрок', pa_date: 'Дата', pa_amount: 'Сумма',
      pa_empty: 'Пока ничего', pa_appOf: 'Заявка', pa_reqNone: 'Открытых запросов нет', pa_ownerOnly: 'Только владельцу',
    },
  };
  for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]);

  const money = (v, c) => `${(+v || 0).toFixed(2)} ${c || ''}`.trim();
  const METHOD = { paypal: 'PayPal', card: 'Card', crypto: 'Crypto', other: 'Other' };
  const ava = (url, cls = '') => url ? `<img class="pa-av ${cls}" src="${esc(url)}" alt="">` : `<i class="pa-av ${cls}"></i>`;
  const P = (S.pa ||= { open: null, data: null, one: null });

  window.partnersAdminCount = () => (P.data ? P.data.totals.newApps + P.data.totals.payoutReqs : 0) + (P.dd ? P.dd.totals.newApps + P.dd.totals.payoutReqs : 0) || null;

  window.renderPartnersAdmin = async function renderPartnersAdmin() {
    const box = $('#st-partners'); if (!box) return;
    if (!S.me?.admin) { box.innerHTML = `<div class="card empty-note">${t('pa_ownerOnly')}</div>`; return; }
    if (P.mode === 'designers') return window.renderDesignersAdmin();
    api('/api/admin/designers').then(x => { P.dd = x; segBar(); }).catch(() => {});
    try {
      if (P.open) { P.one = await api('/api/admin/partners/one?uid=' + encodeURIComponent(P.open)); if ($('#st-partners')) drawOne(); }
      else { P.data = await api('/api/admin/partners'); if ($('#st-partners')) drawAll(); }
    } catch (e) { box.innerHTML = `<div class="card empty-note">${esc(e.message)}</div>`; if (P.open) { P.open = null; } }
  };

  const SEG = '<div class="pa-seg-wrap"><div class="seg" id="pa-seg"></div></div>';
  function segBar() {
    const el = $('#pa-seg'); if (!el) return;
    const n = d => d ? d.totals.newApps + d.totals.payoutReqs : 0;
    const cnt = v => v ? `<span class="cnt">${v}</span>` : '';
    el.innerHTML = `<button data-pam="partners" class="${P.mode !== 'designers' ? 'on' : ''}">${t('pa_list')}${cnt(n(P.data))}</button><button data-pam="designers" class="${P.mode === 'designers' ? 'on' : ''}">${t('da_list')}${cnt(n(P.dd))}</button>`;
    el.querySelectorAll('[data-pam]').forEach(b => b.onclick = () => { if ((P.mode || 'partners') === b.dataset.pam) return; P.mode = b.dataset.pam; renderPartnersAdmin(); });
  }
  P.segBar = segBar; P.SEG = SEG; P.bindCommon = bindCommon;

  function drawAll() {
    const d = P.data, c = d.currency, T = d.totals, box = $('#st-partners');
    const reqs = d.partners.filter(p => p.payoutReq);
    box.innerHTML = `${SEG}
      <div class="kpis">${kpi(t('pa_partners'), T.partners, T.paused ? `${t('pa_paused')}: ${T.paused}` : '')}${kpi(t('pa_signups'), T.signups, `${t('pa_payers')}: ${T.payers}`)}${kpi(t('pa_clicks'), T.clicks)}
        ${kpi(t('pa_revenue'), money(T.revenue, c))}${kpi(t('pa_earned'), money(T.earned, c), `${t('pa_paid')}: ${money(T.paid, c)}`)}${kpi(t('pa_owed'), money(T.owed, c), '', T.owed > 0 ? 'warn' : '')}
        ${kpi(t('pa_reqs'), T.payoutReqs, '', T.payoutReqs ? 'warn' : '')}${kpi(t('pa_newApps'), T.newApps, '', T.newApps ? 'warn' : '')}</div>
      <div class="card"><h4>${t('pa_payouts')}</h4>${reqs.length ? reqs.map(p => `<div class="pa-row">${ava(p.avatar)}<b class="grow"><a href="#" data-pa-open="${p.uid}">${esc(p.nick)}</a></b>
        <span>${money(p.payoutReq.amount, c)} · ${esc(METHOD[p.payoutReq.method] || p.payoutReq.method)}</span><code class="pa-det">${esc(p.payoutReq.details)}</code><span class="mute">${fmtDT(p.payoutReq.at)}</span>
        <button class="btn green sm" data-pa-paid="${p.uid}" data-amt="${p.payoutReq.amount}">${t('pa_markPaid')}</button><button class="btn ghost sm" data-pa-rej="${p.uid}">${t('pa_reject')}</button></div>`).join('') : `<div class="mute">${t('pa_reqNone')}</div>`}</div>
      <div class="card"><h4>${t('pa_list')} · ${d.partners.length}</h4>${d.partners.length ? `<div class="pa-table"><div class="pa-tr pa-th"><span>${t('pa_player')}</span><span>${t('pa_code')}</span><span>${t('pa_share')}</span><span>${t('pa_signups')}</span><span>${t('pa_payers')}</span><span>${t('pa_clicks')}</span><span>${t('pa_revenue')}</span><span>${t('pa_earned')}</span><span>${t('pa_owed')}</span><span></span></div>
        ${d.partners.map(p => `<div class="pa-tr${p.off ? ' off' : ''}"><span class="pa-who">${ava(p.avatar)}<a href="#" data-pa-open="${p.uid}">${esc(p.nick)}</a>${p.off ? `<span class="tag">${t('pa_paused')}</span>` : ''}${p.payoutReq ? '<span class="tag gold">$</span>' : ''}</span>
          <span><code>${esc(p.code)}</code></span><span>${p.share}%</span><span>${p.signups}<small class="mute"> / ${p.registered}</small></span><span>${p.payers}</span><span>${p.clicks}<small class="mute"> · ${p.clicks30}</small></span>
          <span>${money(p.revenue, c)}</span><span>${money(p.earned, c)}</span><span class="${p.owed > 0 ? 'gold' : 'mute'}">${money(p.owed, c)}</span><span><button class="btn ghost sm" data-pa-open="${p.uid}">${t('pa_open')}</button></span></div>`).join('')}</div>`
        : `<div class="empty-note">${t('pa_none')}</div>`}</div>
      <div class="card"><h4>${t('pa_add')}</h4><p class="mute" style="margin:0 0 8px">${t('pa_addHint')}</p>
        <div class="row"><input id="pa-q" class="grow" placeholder="Nick / Discord ID" autocomplete="off"><button class="btn" id="pa-find">${t('pa_find')}</button></div><div id="pa-res"></div></div>
      <div class="card"><h4>${t('pa_apps')} · ${d.apps.length}</h4>${d.apps.length ? d.apps.map(appCard).join('') : `<div class="mute">${t('pa_appsNone')}</div>`}</div>
      ${d.archive.length ? `<div class="card"><h4>${t('pa_archive')}</h4>${d.archive.map(a => `<div class="pa-row"><b class="grow">${esc(a.nick)}</b><code>${esc(a.code)}</code><span class="mute">${t('pa_earned')}: ${money(a.earned, c)} · ${t('pa_paid')}: ${money(a.paid, c)}</span><span class="mute">${fmtDT(a.removedAt)}</span>${a.reason ? `<span class="mute">«${esc(a.reason)}»</span>` : ''}</div>`).join('')}</div>` : ''}`;
    bindCommon(box); segBar();
    box.querySelectorAll('[data-pa-app]').forEach(b => b.onclick = run(async () => {
      const id = b.dataset.paApp, act = b.dataset.act, card = b.closest('.pa-app'), quiet = card.querySelector('[data-pa-quiet]')?.checked;
      const body = { id, quiet };
      if (act === 'rejected') { const r = prompt(t('pa_reasonQ')); if (r == null) return; body.state = 'rejected'; body.reason = r; }
      else if (act === 'creator') { body.state = 'creator'; const code = card.querySelector('[data-pa-acode]').value.trim(); const share = card.querySelector('[data-pa-ashare]').value; if (code) body.code = code; if (share !== '') body.share = +share; }
      else body.state = 'accepted';
      P.data = await api('/api/admin/partners/decide', body); drawAll();
    }));
    const find = run(async () => {
      const q = $('#pa-q').value.trim(); if (!q) return;
      const list = await api('/api/staff/search?q=' + encodeURIComponent(q));
      $('#pa-res').innerHTML = list.length ? list.slice(0, 8).map(u => `<div class="pa-row">${ava(u.avatar)}<b class="grow">${esc(u.nick)} <span class="mute">· ${esc(u.name || '')} · ${esc(u.id)}</span></b>
        ${u.registered ? `<input class="pa-in" data-pa-ncode="${u.id}" placeholder="${t('pa_code')}" maxlength="16"><input class="pa-in sm" data-pa-nshare="${u.id}" type="number" min="0" max="100" placeholder="${d.defaults.share}%"><button class="btn sm" data-pa-new="${u.id}">${t('pa_make')}</button>` : `<span class="tag">${t('notRegistered')}</span>`}</div>`).join('') : `<div class="empty-note">${t('nothingFound')}</div>`;
      $('#pa-res').querySelectorAll('[data-pa-new]').forEach(b => b.onclick = run(async () => {
        const id = b.dataset.paNew, code = $(`[data-pa-ncode="${id}"]`).value.trim(), share = $(`[data-pa-nshare="${id}"]`).value;
        P.data = await api('/api/admin/partners/add', { uid: id, ...(code ? { code } : {}), ...(share !== '' ? { share: +share } : {}) }); drawAll();
      }));
    });
    $('#pa-find').onclick = find; $('#pa-q').onkeydown = e => { if (e.key === 'Enter') find(); };
  }

  const appCard = a => `<div class="pa-app ${a.state}"><div class="pa-row">${ava(a.avatar)}<b class="grow">${esc(a.nick)} <span class="mute">· ${esc(a.name)}</span></b>
      <span class="tag ${a.state === 'new' ? 'gold' : a.state === 'rejected' ? 'red' : ''}">${t('pa_app' + a.state[0].toUpperCase() + a.state.slice(1))}</span><span class="mute">${fmtDT(a.at)}</span></div>
    <div class="pa-app-b"><span>${esc(a.type)} · ${esc(a.platform)} · ${esc(a.audience)} · ${esc(a.region)} · ${esc(a.freq)}${a.lang ? ' · ' + esc(a.lang) : ''}</span>
      ${a.links ? `<div class="pa-links">${esc(a.links).replace(/(https?:\/\/[^\s<]+)/g, '<a href="#" data-ext="$1">$1</a>')}</div>` : ''}
      ${a.offer ? `<p>${esc(a.offer)}</p>` : ''}${a.why ? `<p class="mute">${esc(a.why)}</p>` : ''}${a.contact ? `<div class="mute">${esc(a.contact)}</div>` : ''}${a.reason ? `<div class="mute">✕ ${esc(a.reason)}</div>` : ''}</div>
    ${a.state === 'new' || (a.state === 'accepted' && !a.creator) ? `<div class="row pa-acts"><input class="pa-in" data-pa-acode placeholder="${t('pa_code')}" maxlength="16"><input class="pa-in sm" data-pa-ashare type="number" min="0" max="100" placeholder="${P.data?.defaults.share ?? 20}%">
      <button class="btn green sm" data-pa-app="${a.id}" data-act="creator">${t('pa_makeCreator')}</button>${a.state === 'new' ? `<button class="btn sm" data-pa-app="${a.id}" data-act="accepted">${t('pa_accept')}</button><button class="btn ghost sm" data-pa-app="${a.id}" data-act="rejected">${t('pa_reject')}</button>` : ''}
      <label class="mute pa-q"><input type="checkbox" data-pa-quiet> ${t('pa_quiet')}</label></div>` : ''}</div>`;

  function bindCommon(box) {
    box.querySelectorAll('[data-pa-open]').forEach(a => a.onclick = e => { e.preventDefault(); P.open = a.dataset.paOpen; renderPartnersAdmin(); });
    box.querySelectorAll('[data-ext]').forEach(a => a.onclick = e => { e.preventDefault(); K.open(a.dataset.ext); });
    box.querySelectorAll('[data-pa-paid]').forEach(b => b.onclick = run(async () => {
      const c = P.data?.currency || P.one?.currency || '', v = prompt(t('pa_paidQ', { c }), b.dataset.amt || ''); if (!v) return;
      const r = await api('/api/admin/partners/paid', { uid: b.dataset.paPaid, amount: +String(v).replace(',', '.') });
      if (P.open) { P.one = r; drawOne(); } else renderPartnersAdmin();
    }));
    box.querySelectorAll('[data-pa-rej]').forEach(b => b.onclick = run(async () => {
      const r = prompt(t('pa_rejectQ')); if (r == null) return;
      const x = await api('/api/admin/partners/payout-reject', { uid: b.dataset.paRej, reason: r });
      if (P.open) { P.one = x; drawOne(); } else renderPartnersAdmin();
    }));
  }

  function drawOne() {
    const p = P.one, c = p.currency, box = $('#st-partners'), F = p.funnel || {};
    const keys = p.days.map(x => new Date(x.t).toISOString().slice(0, 10));
    const fun = [[t('pa_fClicks'), p.clicks30], [t('pa_fSign'), F.signups], [t('pa_fReg'), F.registered], [t('pa_fPlayed'), F.played], [t('pa_fPlayed5'), F.played5], [t('pa_fPay'), F.payers]];
    box.innerHTML = `${SEG}
      <div class="row" style="margin-bottom:12px"><button class="btn ghost sm" id="pa-back">← ${t('pa_back')}</button></div>
      <div class="card pa-head">${ava(p.avatar, 'lg')}<div class="grow"><h2 style="margin:0">${esc(p.nick)} <code>${esc(p.code)}</code> ${p.off ? `<span class="tag">${t('pa_paused')}</span>` : `<span class="tag green">${t('pa_active')}</span>`}</h2>
        <div class="mute">${t('pa_since', { d: fmtDate(p.since) })}${p.by ? ' · ' + t('pa_addedBy', { n: esc(p.by) }) : ''} · ${t('pa_seen')}: ${p.lastSeen ? fmtDT(p.lastSeen) : '—'} · <a href="#" data-ext="${esc(p.link)}">${esc(p.link)}</a></div></div>
        <button class="btn ghost sm" id="pa-dossier">${t('details')}</button></div>
      <div class="kpis">${kpi(t('pa_clicks'), p.clicks, `${t('pa_30')}: ${p.clicks30}`)}${kpi(t('pa_signups'), p.signups, `${t('pa_fReg')}: ${p.registered}`)}${kpi(t('pa_fPlayed'), p.active, `${t('pa_matches')}: ${p.matches}`)}
        ${kpi(t('pa_payers'), p.payers, `${t('pa_avg')}: ${money(p.avgCheck, c)}`)}${kpi(t('pa_revenue'), money(p.revenue, c), `${p.purchases}×`)}${kpi(t('pa_earned'), money(p.earned, c), `${t('pa_month')}: ${money(p.earnedMonth, c)}`)}
        ${kpi(t('pa_paid'), money(p.paid, c))}${kpi(t('pa_owed'), money(p.owed, c), p.payoutReq ? t('pa_req', { v: money(p.payoutReq.amount, c), m: METHOD[p.payoutReq.method] || p.payoutReq.method }) : '', p.owed > 0 ? 'warn' : '')}</div>
      ${p.payoutReq ? `<div class="card pa-reqcard"><b>${t('pa_req', { v: money(p.payoutReq.amount, c), m: esc(METHOD[p.payoutReq.method] || p.payoutReq.method) })}</b><code class="pa-det">${esc(p.payoutReq.details)}</code><span class="mute">${fmtDT(p.payoutReq.at)}</span>
        <span class="grow"></span><button class="btn green sm" data-pa-paid="${p.uid}" data-amt="${p.payoutReq.amount}">${t('pa_markPaid')}</button><button class="btn ghost sm" data-pa-rej="${p.uid}">${t('pa_reject')}</button></div>` : ''}
      <div class="grid2">
        <div class="card"><h4>${t('pa_chart')}</h4>${vBars(keys, [{ key: 's', label: t('pa_chSign'), color: VZ.one, data: p.days.map(x => x.signups) }])}${vBars(keys, [{ key: 'c', label: t('pa_chCut') + ', ' + c, color: VZ['2v2'], data: p.days.map(x => x.cut) }], { h: 110, fmt: v => (+v).toFixed(2) })}</div>
        <div class="card"><h4>${t('pa_funnel')}</h4>${hBars(fun.map(([label, v]) => ({ label, v: v || 0 })))}</div>
      </div>
      <div class="card"><h4>${t('pa_settings')}</h4><div class="pa-form">
        <label>${t('pa_code')}<input id="pa-code" value="${esc(p.code)}" maxlength="16"></label>
        <label>${t('pa_share')}, %<input id="pa-share" type="number" min="0" max="100" value="${p.share}"></label>
        <label>${t('pa_bonus')}<input id="pa-bonus" type="number" min="0" value="${p.overrides.bonus ?? ''}" placeholder="${t('pa_default', { v: p.defaults.bonus })}"></label>
        <label>${t('pa_minPayout', { c })}<input id="pa-minp" type="number" min="0" step="0.01" value="${p.overrides.minPayout ?? ''}" placeholder="${t('pa_default', { v: p.defaults.minPayout })}"></label>
        <label class="wide">${t('pa_note')}<textarea id="pa-note" rows="2" maxlength="1000">${esc(p.note)}</textarea></label></div>
        <div class="row"><button class="btn" id="pa-save">${t('pa_save')}</button><span class="grow"></span>
          <button class="btn ghost sm" id="pa-pause">${p.off ? t('pa_resume') : t('pa_pause')}</button><button class="btn ghost sm" data-pa-paid="${p.uid}" data-amt="${p.owed || ''}">${t('pa_markPaid')}</button></div>
        <p class="mute" style="margin:8px 0 0;font-size:12.5px">${t('pa_pauseHint')}</p></div>
      <div class="card"><h4>${t('pa_refs')} · ${p.list.length}</h4>${p.list.length ? `<div class="pa-table r"><div class="pa-tr pa-th"><span>${t('pa_player')}</span><span>${t('pa_date')}</span><span>${t('pa_via')}</span><span>${t('pa_matches')}</span><span>${t('pa_spent')}</span><span>${t('pa_cut')}</span><span>${t('pa_seen')}</span></div>
        ${p.list.map(x => `<div class="pa-tr"><span class="pa-who">${ava(x.avatar)}<a href="#" data-pa-prof="${x.id}">${esc(x.nick)}</a>${x.registered ? '' : `<span class="tag">${t('notRegistered')}</span>`}</span><span>${fmtDate(x.at)}</span><span>${t(x.via === 'creator' ? 'pa_viaCreator' : 'pa_viaCode')}</span><span>${x.matches}</span><span>${money(x.spent, c)}</span><span>${money(x.cut, c)}</span><span class="mute">${x.seen ? fmtDT(x.seen) : '—'}</span></div>`).join('')}</div>` : `<div class="mute">${t('pa_empty')}</div>`}</div>
      <div class="grid2">
        <div class="card"><h4>${t('pa_ledger')} · ${p.purchases}</h4>${p.ledger.length ? p.ledger.map(e => `<div class="pa-row"><span class="mute">${fmtDT(e.at)}</span><b class="grow">${esc(e.nick)}</b><span>${esc(e.what)}${e.gift ? ' 🎁' : ''}</span><span>${money(e.amount, e.currency)}</span><span class="gold">+${money(e.cut, e.currency)}</span></div>`).join('') : `<div class="mute">${t('pa_empty')}</div>`}</div>
        <div class="card"><h4>${t('pa_history')}</h4>${p.payouts.length ? p.payouts.map(x => `<div class="pa-row"><span class="mute">${fmtDT(x.at)}</span><b class="grow">${money(x.amount, c)}</b><span class="mute">${esc(x.note || '')}</span></div>`).join('') : `<div class="mute">${t('pa_empty')}</div>`}</div>
      </div>
      ${p.apps?.length ? `<div class="card"><h4>${t('pa_appOf')}</h4>${p.apps.map(appCard).join('')}</div>` : ''}
      <div class="card pa-danger"><h4>${t('pa_remove')}</h4><p class="mute" style="margin:0 0 8px">${t('pa_removeHint')}</p>
        <div class="row"><input id="pa-rreason" class="grow" placeholder="${t('pa_removeReason')}" maxlength="400"><label class="mute pa-q"><input type="checkbox" id="pa-rnotify"> ${t('pa_notify')}</label><button class="btn red sm" id="pa-remove">${t('pa_remove')}</button></div></div>`;
    vizTips(box);
    bindCommon(box); segBar();
    $('#pa-back').onclick = () => { P.open = null; P.one = null; renderPartnersAdmin(); };
    $('#pa-dossier').onclick = () => openDossier(p.uid).catch(e => toast(e.message, true));
    box.querySelectorAll('[data-pa-prof]').forEach(a => a.onclick = e => { e.preventDefault(); openDossier(a.dataset.paProf).catch(er => toast(er.message, true)); });
    $('#pa-save').onclick = run(async () => {
      P.one = await api('/api/admin/partners/update', { uid: p.uid, code: $('#pa-code').value.trim(), share: +$('#pa-share').value, bonus: $('#pa-bonus').value, minPayout: $('#pa-minp').value, note: $('#pa-note').value });
      toast(t('pa_saved')); drawOne();
    });
    $('#pa-pause').onclick = run(async () => { P.one = await api('/api/admin/partners/pause', { uid: p.uid, off: !p.off }); drawOne(); });
    $('#pa-remove').onclick = run(async () => {
      if (!confirm(t('pa_removeQ', { n: p.nick }))) return;
      const body = { uid: p.uid, reason: $('#pa-rreason').value.trim(), notify: $('#pa-rnotify').checked };
      if (p.owed > 0) { if (!confirm(t('pa_removeOwed', { n: p.nick, v: money(p.owed, c) }))) return; body.force = true; }
      P.data = await api('/api/admin/partners/remove', body); P.open = null; P.one = null; toast(t('pa_removed')); drawAll();
    });
  }
})();
