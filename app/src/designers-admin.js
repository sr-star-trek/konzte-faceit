(() => {
  const L = {
    en: {
      da_list: 'Designers', da_active: 'Active designers', da_items: 'Items', da_inShop: 'in the store', da_sales: 'Paid sales', da_kfSales: 'KF sales', da_revenue: 'Revenue from their items',
      da_earned: 'Designers earned', da_none: 'No designers yet — accept an application or add a player below.', da_add: 'Add a designer',
      da_addHint: 'Find a registered player by nickname or Discord ID and make them a designer.', da_make: 'Make designer', da_back: 'All designers', da_since: 'Designer since {d}',
      da_itemsT: 'Their items', da_itemsHint: 'Each paid purchase of these items credits the designer with their share. KF purchases are only counted.',
      da_itemAdd: 'Attach', da_itemId: 'Item id', da_owners: 'Owners', da_notInShop: 'not on sale', da_taken: 'by {n}', da_unlink: 'Detach', da_unlinkQ: 'Detach {i} from {n}? Future sales will not be credited.',
      da_accept: 'Accept + make designer', da_makeAgain: 'Make designer', da_dkind: 'Draws', da_tool: 'Tools', da_dexp: 'Experience', da_portfolio: 'Portfolio', da_idea: 'Idea for Konzte', da_about: 'About',
      da_removeQ: 'Remove {n} from the designer program?', da_removeHint: 'Their items are detached (no more credits, the “by” label disappears), history moves to the archive. Players keep what they bought.',
      da_archive: 'Removed designers', da_rejected: 'Rejected payout requests', da_earnedOne: 'Earned', da_rev: 'Revenue', da_kfPrice: 'KF', da_usd: '$',
    },
    uk: {
      da_list: 'Дизайнери', da_active: 'Активних дизайнерів', da_items: 'Предметів', da_inShop: 'у магазині', da_sales: 'Продажів за $', da_kfSales: 'Продажів за KF', da_revenue: 'Дохід з їхніх предметів',
      da_earned: 'Заробили дизайнери', da_none: 'Дизайнерів поки немає — прийми анкету або додай гравця нижче.', da_add: 'Додати дизайнера',
      da_addHint: 'Знайди зареєстрованого гравця за ніком чи Discord ID і зроби його дизайнером.', da_make: 'Зробити дизайнером', da_back: 'Усі дизайнери', da_since: 'Дизайнер з {d}',
      da_itemsT: 'Його предмети', da_itemsHint: 'З кожної оплати цих предметів грошима дизайнеру нараховується його частка. Покупки за KF лише рахуються.',
      da_itemAdd: 'Прив’язати', da_itemId: 'id предмета', da_owners: 'Мають', da_notInShop: 'не в продажу', da_taken: 'автор {n}', da_unlink: 'Відв’язати', da_unlinkQ: 'Відв’язати {i} від {n}? Нові продажі не нараховуватимуться.',
      da_accept: 'Прийняти + зробити дизайнером', da_makeAgain: 'Зробити дизайнером', da_dkind: 'Малює', da_tool: 'Інструменти', da_dexp: 'Досвід', da_portfolio: 'Портфоліо', da_idea: 'Ідея для Konzte', da_about: 'Про себе',
      da_removeQ: 'Видалити {n} з програми дизайнерів?', da_removeHint: 'Предмети відв’язуються (нарахувань більше немає, підпис «автор» зникає), історія йде в архів. Куплене гравцями лишається.',
      da_archive: 'Видалені дизайнери', da_rejected: 'Відхилені запити на виплату', da_earnedOne: 'Заробив', da_rev: 'Дохід', da_kfPrice: 'KF', da_usd: '$',
    },
    ru: {
      da_list: 'Дизайнеры', da_active: 'Активных дизайнеров', da_items: 'Предметов', da_inShop: 'в магазине', da_sales: 'Продаж за $', da_kfSales: 'Продаж за KF', da_revenue: 'Доход с их предметов',
      da_earned: 'Заработали дизайнеры', da_none: 'Дизайнеров пока нет — прими анкету или добавь игрока ниже.', da_add: 'Добавить дизайнера',
      da_addHint: 'Найди зарегистрированного игрока по нику или Discord ID и сделай его дизайнером.', da_make: 'Сделать дизайнером', da_back: 'Все дизайнеры', da_since: 'Дизайнер с {d}',
      da_itemsT: 'Его предметы', da_itemsHint: 'С каждой оплаты этих предметов деньгами дизайнеру начисляется его доля. Покупки за KF только считаются.',
      da_itemAdd: 'Привязать', da_itemId: 'id предмета', da_owners: 'Есть у', da_notInShop: 'не в продаже', da_taken: 'автор {n}', da_unlink: 'Отвязать', da_unlinkQ: 'Отвязать {i} от {n}? Новые продажи не будут начисляться.',
      da_accept: 'Принять + сделать дизайнером', da_makeAgain: 'Сделать дизайнером', da_dkind: 'Рисует', da_tool: 'Инструменты', da_dexp: 'Опыт', da_portfolio: 'Портфолио', da_idea: 'Идея для Konzte', da_about: 'О себе',
      da_removeQ: 'Удалить {n} из программы дизайнеров?', da_removeHint: 'Предметы отвязываются (начислений больше нет, подпись «автор» исчезает), история уходит в архив. Купленное игроками остаётся.',
      da_archive: 'Удалённые дизайнеры', da_rejected: 'Отклонённые запросы на выплату', da_earnedOne: 'Заработал', da_rev: 'Доход', da_kfPrice: 'KF', da_usd: '$',
    },
  };
  for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]);

  const P = (S.pa ||= { open: null, data: null, one: null });
  const money = (v, c) => `${(+v || 0).toFixed(2)} ${c || ''}`.trim();
  const METHOD = { paypal: 'PayPal', card: 'Card', crypto: 'Crypto', other: 'Other' };
  const ava = (url, cls = '') => url ? `<img class="pa-av ${cls}" src="${esc(url)}" alt="">` : `<i class="pa-av ${cls}"></i>`;
  const box = () => $('#st-partners');
  const links = s => esc(s).replace(/(https?:\/\/[^\s<]+)/g, '<a href="#" data-ext="$1">$1</a>');

  window.renderDesignersAdmin = async function () {
    try {
      if (P.dopen) { P.done = await api('/api/admin/designers/one?uid=' + encodeURIComponent(P.dopen)); if (!P.shop) P.shop = await api('/api/admin/designers/shop'); if (box()) drawOne(); }
      else { P.dd = await api('/api/admin/designers'); if (box()) drawAll(); }
    } catch (e) { if (box()) box().innerHTML = `${P.SEG}<div class="card empty-note">${esc(e.message)}</div>`; P.segBar?.(); P.dopen = null; }
  };

  function bind(b) {
    P.segBar?.();
    b.querySelectorAll('[data-da-open]').forEach(a => a.onclick = e => { e.preventDefault(); P.dopen = a.dataset.daOpen; P.shop = null; renderDesignersAdmin(); });
    b.querySelectorAll('[data-ext]').forEach(a => a.onclick = e => { e.preventDefault(); K.open(a.dataset.ext); });
    b.querySelectorAll('[data-da-paid]').forEach(x => x.onclick = run(async () => {
      const c = P.dd?.currency || P.done?.currency || '', v = prompt(t('pa_paidQ', { c }), x.dataset.amt || ''); if (!v) return;
      const r = await api('/api/admin/designers/paid', { uid: x.dataset.daPaid, amount: +String(v).replace(',', '.') });
      if (P.dopen) { P.done = r; drawOne(); } else renderDesignersAdmin();
    }));
    b.querySelectorAll('[data-da-rej]').forEach(x => x.onclick = run(async () => {
      const r = prompt(t('pa_rejectQ')); if (r == null) return;
      const d = await api('/api/admin/designers/payout-reject', { uid: x.dataset.daRej, reason: r });
      if (P.dopen) { P.done = d; drawOne(); } else renderDesignersAdmin();
    }));
    b.querySelectorAll('[data-da-app]').forEach(x => x.onclick = run(async () => {
      const card = x.closest('.pa-app'), body = { id: x.dataset.daApp, quiet: card.querySelector('[data-da-quiet]')?.checked };
      if (x.dataset.act === 'rejected') { const r = prompt(t('pa_reasonQ')); if (r == null) return; body.state = 'rejected'; body.reason = r; }
      else { body.state = 'designer'; const sh = card.querySelector('[data-da-ashare]')?.value; if (sh) body.share = +sh; }
      P.dd = await api('/api/admin/designers/decide', body);
      if (P.dopen) renderDesignersAdmin(); else drawAll();
    }));
  }

  const appCard = a => `<div class="pa-app ${a.state}"><div class="pa-row">${ava(a.avatar)}<b class="grow"><a href="#" data-da-prof="${a.uid}">${esc(a.nick)}</a></b>
      <span class="tag ${a.state === 'new' ? 'gold' : a.state === 'rejected' ? 'red' : ''}">${t('pa_app' + a.state[0].toUpperCase() + a.state.slice(1))}</span><span class="mute">${fmtDT(a.at)}</span></div>
    <div class="pa-app-b"><span>${t('da_dkind')}: ${esc(a.dkind.join(', '))} · ${t('da_tool')}: ${esc(a.tool.join(', '))} · ${t('da_dexp')}: ${esc(a.dexp)}</span>
      ${a.portfolio ? `<div class="pa-links"><span class="mute">${t('da_portfolio')}:</span> ${links(a.portfolio)}</div>` : ''}
      ${a.idea ? `<p><span class="mute">${t('da_idea')}:</span> ${esc(a.idea)}</p>` : ''}${a.about ? `<p class="mute">${esc(a.about)}</p>` : ''}${a.contact ? `<div class="mute">${esc(a.contact)}</div>` : ''}${a.reason ? `<div class="mute">✕ ${esc(a.reason)}</div>` : ''}</div>
    ${a.state === 'new' || (a.state === 'accepted' && !a.designer) ? `<div class="row pa-acts"><input class="pa-in sm" data-da-ashare type="number" min="0" max="100" placeholder="${P.dd?.defaults.share ?? 20}%">
      <button class="btn green sm" data-da-app="${a.id}" data-act="designer">${a.state === 'new' ? t('da_accept') : t('da_makeAgain')}</button>${a.state === 'new' ? `<button class="btn ghost sm" data-da-app="${a.id}" data-act="rejected">${t('pa_reject')}</button>` : ''}
      <label class="mute pa-q"><input type="checkbox" data-da-quiet> ${t('pa_quiet')}</label></div>` : ''}</div>`;

  function drawAll() {
    const d = P.dd, c = d.currency, T = d.totals, b = box();
    const reqs = d.designers.filter(p => p.payoutReq);
    b.innerHTML = `${P.SEG}
      <div class="kpis">${kpi(t('da_active'), T.designers, T.paused ? `${t('pa_paused')}: ${T.paused}` : '')}${kpi(t('da_items'), T.items)}${kpi(t('da_sales'), T.sales, `${t('da_kfSales')}: ${T.kfSales}`)}
        ${kpi(t('da_revenue'), money(T.revenue, c))}${kpi(t('da_earned'), money(T.earned, c), `${t('pa_paid')}: ${money(T.paid, c)}`)}${kpi(t('pa_owed'), money(T.owed, c), '', T.owed > 0 ? 'warn' : '')}
        ${kpi(t('pa_reqs'), T.payoutReqs, '', T.payoutReqs ? 'warn' : '')}${kpi(t('pa_newApps'), T.newApps, '', T.newApps ? 'warn' : '')}</div>
      <div class="card"><h4>${t('pa_payouts')}</h4>${reqs.length ? reqs.map(p => `<div class="pa-row">${ava(p.avatar)}<b class="grow"><a href="#" data-da-open="${p.uid}">${esc(p.nick)}</a></b>
        <span>${money(p.payoutReq.amount, c)} · ${esc(METHOD[p.payoutReq.method] || p.payoutReq.method)}</span><code class="pa-det">${esc(p.payoutReq.details)}</code><span class="mute">${fmtDT(p.payoutReq.at)}</span>
        <button class="btn green sm" data-da-paid="${p.uid}" data-amt="${p.payoutReq.amount}">${t('pa_markPaid')}</button><button class="btn ghost sm" data-da-rej="${p.uid}">${t('pa_reject')}</button></div>`).join('') : `<div class="mute">${t('pa_reqNone')}</div>`}</div>
      <div class="card"><h4>${t('da_list')} · ${d.designers.length}</h4>${d.designers.length ? `<div class="pa-table d"><div class="pa-tr pa-th"><span>${t('pa_player')}</span><span>${t('pa_share')}</span><span>${t('da_items')}</span><span>${t('da_sales')}</span><span>${t('da_kfSales')}</span><span>${t('da_revenue')}</span><span>${t('da_earnedOne')}</span><span>${t('pa_owed')}</span><span></span></div>
        ${d.designers.map(p => `<div class="pa-tr${p.off ? ' off' : ''}"><span class="pa-who">${ava(p.avatar)}<a href="#" data-da-open="${p.uid}">${esc(p.nick)}</a>${p.off ? `<span class="tag">${t('pa_paused')}</span>` : ''}${p.payoutReq ? '<span class="tag gold">$</span>' : ''}</span>
          <span>${p.share}%</span><span>${p.items}<small class="mute"> · ${p.inShop} ${t('da_inShop')}</small></span><span>${p.sales}</span><span>${p.kfSales}</span>
          <span>${money(p.revenue, c)}</span><span>${money(p.earned, c)}</span><span class="${p.owed > 0 ? 'gold' : 'mute'}">${money(p.owed, c)}</span><span><button class="btn ghost sm" data-da-open="${p.uid}">${t('pa_open')}</button></span></div>`).join('')}</div>`
        : `<div class="empty-note">${t('da_none')}</div>`}</div>
      <div class="card"><h4>${t('da_add')}</h4><p class="mute" style="margin:0 0 8px">${t('da_addHint')}</p>
        <div class="row"><input id="da-q" class="grow" placeholder="Nick / Discord ID" autocomplete="off"><button class="btn" id="da-find">${t('pa_find')}</button></div><div id="da-res"></div></div>
      <div class="card"><h4>${t('pa_apps')} · ${d.apps.length}</h4>${d.apps.length ? d.apps.map(appCard).join('') : `<div class="mute">${t('pa_appsNone')}</div>`}</div>
      ${d.archive.length ? `<div class="card"><h4>${t('da_archive')}</h4>${d.archive.map(a => `<div class="pa-row"><b class="grow">${esc(a.nick)}</b><span class="mute">${t('da_items')}: ${a.items} · ${t('da_earnedOne')}: ${money(a.earned, c)} · ${t('pa_paid')}: ${money(a.paid, c)}</span><span class="mute">${fmtDT(a.removedAt)}</span>${a.reason ? `<span class="mute">«${esc(a.reason)}»</span>` : ''}</div>`).join('')}</div>` : ''}`;
    bind(b);
    b.querySelectorAll('[data-da-prof]').forEach(a => a.onclick = e => { e.preventDefault(); openDossier(a.dataset.daProf).catch(er => toast(er.message, true)); });
    const find = run(async () => {
      const q = $('#da-q').value.trim(); if (!q) return;
      const list = await api('/api/staff/search?q=' + encodeURIComponent(q));
      $('#da-res').innerHTML = list.length ? list.slice(0, 8).map(u => `<div class="pa-row">${ava(u.avatar)}<b class="grow">${esc(u.nick)} <span class="mute">· ${esc(u.name || '')} · ${esc(u.id)}</span></b>
        ${u.registered ? `<input class="pa-in sm" data-da-nshare="${u.id}" type="number" min="0" max="100" placeholder="${d.defaults.share}%"><button class="btn sm" data-da-new="${u.id}">${t('da_make')}</button>` : `<span class="tag">${t('notRegistered')}</span>`}</div>`).join('') : `<div class="empty-note">${t('nothingFound')}</div>`;
      $('#da-res').querySelectorAll('[data-da-new]').forEach(x => x.onclick = run(async () => {
        const id = x.dataset.daNew, share = $(`[data-da-nshare="${id}"]`).value;
        P.dd = await api('/api/admin/designers/add', { uid: id, ...(share !== '' ? { share: +share } : {}) }); drawAll();
      }));
    });
    $('#da-find').onclick = find; $('#da-q').onkeydown = e => { if (e.key === 'Enter') find(); };
  }

  function drawOne() {
    const p = P.done, c = p.currency, b = box();
    const mine = new Set(p.items.map(x => x.kind + ':' + x.id));
    const free = (P.shop || []).filter(x => !mine.has(x.kind + ':' + x.id) && !x.author);
    const kinds = [...new Set((P.shop || []).map(x => x.kind))];
    b.innerHTML = `${P.SEG}
      <div class="row" style="margin-bottom:12px"><button class="btn ghost sm" id="da-back">← ${t('da_back')}</button></div>
      <div class="card pa-head">${ava(p.avatar, 'lg')}<div class="grow"><h2 style="margin:0">${esc(p.nick)} ${p.off ? `<span class="tag">${t('pa_paused')}</span>` : `<span class="tag green">${t('pa_active')}</span>`}</h2>
        <div class="mute">${t('da_since', { d: fmtDate(p.since) })}${p.by ? ' · ' + t('pa_addedBy', { n: esc(p.by) }) : ''} · ${t('pa_seen')}: ${p.lastSeen ? fmtDT(p.lastSeen) : '—'}</div></div>
        <button class="btn ghost sm" id="da-dossier">${t('details')}</button></div>
      <div class="kpis">${kpi(t('da_items'), p.items.length, `${p.items.filter(x => x.inShop).length} ${t('da_inShop')}`)}${kpi(t('da_sales'), p.sales)}${kpi(t('da_kfSales'), p.kfSales)}
        ${kpi(t('da_revenue'), money(p.items.reduce((a, x) => a + x.revenue, 0), c))}${kpi(t('da_earnedOne'), money(p.earned, c), `${t('pa_month')}: ${money(p.earnedMonth, c)} · ${t('pa_30')}: ${money(p.earned30, c)}`)}
        ${kpi(t('pa_paid'), money(p.paid, c))}${kpi(t('pa_owed'), money(p.owed, c), p.payoutReq ? t('pa_req', { v: money(p.payoutReq.amount, c), m: METHOD[p.payoutReq.method] || p.payoutReq.method }) : '', p.owed > 0 ? 'warn' : '')}</div>
      ${p.payoutReq ? `<div class="card pa-reqcard"><b>${t('pa_req', { v: money(p.payoutReq.amount, c), m: esc(METHOD[p.payoutReq.method] || p.payoutReq.method) })}</b><code class="pa-det">${esc(p.payoutReq.details)}</code><span class="mute">${fmtDT(p.payoutReq.at)}</span>
        <span class="grow"></span><button class="btn green sm" data-da-paid="${p.uid}" data-amt="${p.payoutReq.amount}">${t('pa_markPaid')}</button><button class="btn ghost sm" data-da-rej="${p.uid}">${t('pa_reject')}</button></div>` : ''}
      <div class="card"><h4>${t('da_itemsT')} · ${p.items.length}</h4><p class="mute" style="margin:0 0 8px;font-size:12.5px">${t('da_itemsHint')}</p>
        ${p.items.length ? `<div class="pa-table di"><div class="pa-tr pa-th"><span>${t('da_itemId')}</span><span>${t('da_kfPrice')} / ${t('da_usd')}</span><span>${t('da_sales')}</span><span>${t('da_kfSales')}</span><span>${t('da_owners')}</span><span>${t('da_rev')}</span><span>${t('pa_cut')}</span><span></span></div>
          ${p.items.map(x => `<div class="pa-tr${x.inShop ? '' : ' off'}"><span><code>${esc(x.kind)}:${esc(x.id)}</code>${x.inShop ? '' : ` <span class="tag">${t('da_notInShop')}</span>`}</span><span>${x.kf ?? '—'} / ${x.usd != null ? '$' + x.usd : '—'}</span>
            <span>${x.paidSales}</span><span>${x.kfSales}</span><span>${x.owners}</span><span>${money(x.revenue, c)}</span><span class="gold">${money(x.cut, c)}</span>
            <span><button class="btn ghost sm" data-da-unlink="${esc(x.kind + ':' + x.id)}">${t('da_unlink')}</button></span></div>`).join('')}</div>` : `<div class="mute">${t('pa_empty')}</div>`}
        <div class="row" style="margin-top:10px"><select id="da-ikind">${kinds.map(k => `<option>${esc(k)}</option>`).join('')}</select>
          <input id="da-iid" class="grow" list="da-ilist" placeholder="${t('da_itemId')}" autocomplete="off"><datalist id="da-ilist"></datalist>
          <button class="btn sm" id="da-iadd">${t('da_itemAdd')}</button></div></div>
      <div class="card"><h4>${t('pa_settings')}</h4><div class="pa-form">
        <label>${t('pa_share')}, %<input id="da-share" type="number" min="0" max="100" value="${p.share}"></label>
        <label>${t('pa_minPayout', { c })}<input id="da-minp" type="number" min="0" step="0.01" value="${p.overrides.minPayout ?? ''}" placeholder="${t('pa_default', { v: p.defaults.minPayout })}"></label>
        <label class="wide">${t('pa_note')}<textarea id="da-note" rows="2" maxlength="1000">${esc(p.note)}</textarea></label></div>
        <div class="row"><button class="btn" id="da-save">${t('pa_save')}</button><span class="grow"></span>
          <button class="btn ghost sm" id="da-pause">${p.off ? t('pa_resume') : t('pa_pause')}</button><button class="btn ghost sm" data-da-paid="${p.uid}" data-amt="${p.owed || ''}">${t('pa_markPaid')}</button></div></div>
      <div class="grid2">
        <div class="card"><h4>${t('pa_ledger')} · ${p.sales}</h4>${p.ledger.length ? p.ledger.map(e => `<div class="pa-row"><span class="mute">${fmtDT(e.at)}</span><b class="grow">${esc(e.nick)}</b><code>${esc(e.kind)}:${esc(e.item)}</code>${e.gift ? `<span class="tag">gift</span>` : ''}<span>${money(e.amount, e.currency)}</span><span class="gold">+${money(e.cut, e.currency)}</span></div>`).join('') : `<div class="mute">${t('pa_empty')}</div>`}</div>
        <div class="card"><h4>${t('pa_history')}</h4>${p.payouts.length ? p.payouts.map(x => `<div class="pa-row"><span class="mute">${fmtDT(x.at)}</span><b class="grow">${money(x.amount, c)}</b><span class="mute">${esc(x.note || '')}</span></div>`).join('') : `<div class="mute">${t('pa_empty')}</div>`}
          ${p.rejected.length ? `<h4 style="margin-top:14px">${t('da_rejected')}</h4>${p.rejected.map(x => `<div class="pa-row"><span class="mute">${fmtDT(x.rejectedAt)}</span><b class="grow">${money(x.amount, c)}</b><span class="mute">${esc(x.reason || '')}</span></div>`).join('')}` : ''}</div>
      </div>
      ${p.apps?.length ? `<div class="card"><h4>${t('pa_appOf')}</h4>${p.apps.map(appCard).join('')}</div>` : ''}
      <div class="card pa-danger"><h4>${t('pa_remove')}</h4><p class="mute" style="margin:0 0 8px">${t('da_removeHint')}</p>
        <div class="row"><input id="da-rreason" class="grow" placeholder="${t('pa_removeReason')}" maxlength="400"><label class="mute pa-q"><input type="checkbox" id="da-rnotify"> ${t('pa_notify')}</label><button class="btn red sm" id="da-remove">${t('pa_remove')}</button></div></div>`;
    bind(b);
    b.querySelectorAll('[data-da-prof]').forEach(a => a.onclick = e => { e.preventDefault(); openDossier(a.dataset.daProf).catch(er => toast(er.message, true)); });
    const fillList = () => { const k = $('#da-ikind').value; $('#da-ilist').innerHTML = free.filter(x => x.kind === k).map(x => `<option value="${esc(x.id)}">${x.hidden ? t('da_notInShop') : (x.kf ? x.kf + ' KF' : '') + (x.usd ? ' · $' + x.usd : '')}</option>`).join(''); };
    $('#da-ikind').onchange = fillList; fillList();
    const setItems = async items => { P.done = await api('/api/admin/designers/items', { uid: p.uid, items }); P.shop = await api('/api/admin/designers/shop'); drawOne(); };
    $('#da-iadd').onclick = run(async () => {
      const kind = $('#da-ikind').value, id = $('#da-iid').value.trim(); if (!id) return;
      await setItems([...p.items.map(x => ({ kind: x.kind, id: x.id })), { kind, id }]);
    });
    $('#da-iid').onkeydown = e => { if (e.key === 'Enter') $('#da-iadd').click(); };
    b.querySelectorAll('[data-da-unlink]').forEach(x => x.onclick = run(async () => {
      if (!confirm(t('da_unlinkQ', { i: x.dataset.daUnlink, n: p.nick }))) return;
      await setItems(p.items.filter(i => i.kind + ':' + i.id !== x.dataset.daUnlink).map(i => ({ kind: i.kind, id: i.id })));
    }));
    $('#da-back').onclick = () => { P.dopen = null; P.done = null; renderDesignersAdmin(); };
    $('#da-dossier').onclick = () => openDossier(p.uid).catch(e => toast(e.message, true));
    $('#da-save').onclick = run(async () => {
      P.done = await api('/api/admin/designers/update', { uid: p.uid, share: $('#da-share').value, minPayout: $('#da-minp').value, note: $('#da-note').value });
      toast(t('pa_saved')); drawOne();
    });
    $('#da-pause').onclick = run(async () => { P.done = await api('/api/admin/designers/pause', { uid: p.uid, off: !p.off }); drawOne(); });
    $('#da-remove').onclick = run(async () => {
      if (!confirm(t('da_removeQ', { n: p.nick }))) return;
      const body = { uid: p.uid, reason: $('#da-rreason').value.trim(), notify: $('#da-rnotify').checked };
      if (p.owed > 0) { if (!confirm(t('pa_removeOwed', { n: p.nick, v: money(p.owed, c) }))) return; body.force = true; }
      P.dd = await api('/api/admin/designers/remove', body); P.dopen = null; P.done = null; toast(t('pa_removed')); drawAll();
    });
  }
})();
