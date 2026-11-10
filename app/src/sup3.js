(() => {
  const L = {
    en: { s3New: 'Create ticket', s3Open: 'Open', s3Wait: 'Waiting for your reply', s3Closed: 'Resolved', s3All: 'All tickets',
      s3Empty: 'You have no tickets yet', s3EmptyD: 'If something goes wrong — write to us, the whole conversation stays here.',
      s3Help: 'What do you need help with?', s3Reply: 'The reply comes here', s3ReplyD: 'We notify you about every reply — in the app and in Discord DM. Response time depends on the queue and the staff on duty.',
      s3Safe: 'Support never asks for your password, Discord token or codes.', s3Cat: 'Category', s3Back: 'Back', s3Upd: 'updated {d}',
      c_report: 'Report a player', c_reportD: 'Cheats, griefing, toxicity, leaving the match', c_match: 'Match problem', c_matchD: 'Wrong result, lobby, host, screenshot',
      c_pay: 'Purchase / payment', c_payD: 'Paid but the item or KF did not arrive', c_ban: 'I am banned', c_banD: 'Appeal a ban or mute',
      c_tech: 'Technical problem', c_techD: 'The app crashes, freezes or does not update', c_acc: 'Account and access', c_accD: 'Game ID, Discord login, 2FA, deleting the account',
      c_other: 'Other', c_otherD: 'Describe your question — we will find the right person' },
    uk: { s3New: 'Створити звернення', s3Open: 'Відкрито', s3Wait: 'Чекають на твою відповідь', s3Closed: 'Вирішено', s3All: 'Усі звернення',
      s3Empty: 'У тебе поки немає звернень', s3EmptyD: 'Якщо щось піде не так — напиши нам, і все листування збережеться тут.',
      s3Help: 'З чим потрібна допомога?', s3Reply: 'Відповідь прийде сюди', s3ReplyD: 'Про кожну відповідь повідомимо — у застосунку й в особистих Discord. Час відповіді залежить від черги й стаффу на зміні.',
      s3Safe: 'Підтримка ніколи не просить пароль, токен Discord чи коди.', s3Cat: 'Категорія', s3Back: 'Назад', s3Upd: 'оновлено {d}',
      c_report: 'Скарга на гравця', c_reportD: 'Чити, гриф, токсичність, вихід з матчу', c_match: 'Проблема з матчем', c_matchD: 'Неправильний результат, лобі, хост, скриншот',
      c_pay: 'Покупка / платіж', c_payD: 'Оплата пройшла, а предмет чи KF не прийшли', c_ban: 'Мене забанили', c_banD: 'Оскаржити бан або мут',
      c_tech: 'Технічні проблеми', c_techD: 'Застосунок вилітає, зависає чи не оновлюється', c_acc: 'Акаунт і доступ', c_accD: 'Game ID, вхід через Discord, 2FA, видалення акаунта',
      c_other: 'Інше', c_otherD: 'Опиши питання — підключимо потрібну людину' },
    ru: { s3New: 'Создать обращение', s3Open: 'Открыто', s3Wait: 'Ждут твоего ответа', s3Closed: 'Решено', s3All: 'Все обращения',
      s3Empty: 'У тебя пока нет обращений', s3EmptyD: 'Если что-то пойдёт не так — напиши нам, и вся переписка сохранится здесь.',
      s3Help: 'С чем нужна помощь?', s3Reply: 'Ответ придёт сюда', s3ReplyD: 'О каждом ответе сообщим — в приложении и в личке Discord. Время ответа зависит от очереди и стаффа на смене.',
      s3Safe: 'Поддержка никогда не просит пароль, токен Discord или коды.', s3Cat: 'Категория', s3Back: 'Назад', s3Upd: 'обновлено {d}',
      c_report: 'Жалоба на игрока', c_reportD: 'Читы, гриф, токсичность, выход из матча', c_match: 'Проблема с матчем', c_matchD: 'Неверный результат, лобби, хост, скриншот',
      c_pay: 'Покупка / платёж', c_payD: 'Оплата прошла, а предмет или KF не пришли', c_ban: 'Меня забанили', c_banD: 'Обжаловать бан или мут',
      c_tech: 'Технические проблемы', c_techD: 'Приложение вылетает, зависает или не обновляется', c_acc: 'Аккаунт и доступ', c_accD: 'Game ID, вход через Discord, 2FA, удаление аккаунта',
      c_other: 'Другое', c_otherD: 'Опиши вопрос — подключим нужного человека' },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = k => (I18N[LANG] || I18N.en)[k] ?? I18N.en[k];
  const sv = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const IC = {
    life: sv('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5"/>'),
    plus: sv('<path d="M12 5v14M5 12h14"/>'), chev: sv('<path d="M9 6l6 6-6 6"/>'), back: sv('<path d="M15 6l-6 6 6 6"/>'),
    bell: sv('<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0"/>'), lock: sv('<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'),
    report: sv('<path d="M5 21V4.5M5 5h11l-2 4 2 4H5"/>'), match: sv('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>'),
    pay: sv('<path d="M6 7.5h12l-1 12.5H7zM9 7.5V6a3 3 0 0 1 6 0v1.5"/>'), ban: sv('<path d="M12 3l7.5 3v5.5c0 4.7-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.8-7.5-9.5V6z"/><path d="M9 9l6 6M15 9l-6 6"/>'),
    tech: sv('<path d="M9 4.5h6M12 4.5v3M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0zM3 12h3M18 12h3M4 18l2.5-1.5M20 18l-2.5-1.5M4 6l2.5 1.5M20 6l-2.5 1.5"/>'),
    acc: sv('<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6"/>'), other: sv('<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>'),
  };
  const CATS = ['report', 'match', 'pay', 'ban', 'tech', 'acc', 'other'];
  const CI = { report: 'report', match: 'match', pay: 'pay', ban: 'ban', tech: 'tech', acc: 'acc', other: 'other' };
  const st = { form: false, cat: null, filter: 'all' };
  const waiting = x => x.open && x.last && x.last.uid !== S.me.id && x.last.src !== 'system' && x.last.staff;

  const _prev = renderSupport;
  renderSupport = function () {
    const d = S.sup;
    if (!window.KZ_V3?.() || !d || S.supOpen) return _prev.apply(this, arguments);
    const mine = d.mine || [];
    const nOpen = mine.filter(x => x.open && !waiting(x)).length, nWait = mine.filter(waiting).length, nDone = mine.filter(x => !x.open).length;
    const chip = (k, n, h) => `<button class="s3-chip ${st.filter === k ? 'on' : ''} ${k}" data-s3f="${k}"><b class="num">${n}</b>${h}</button>`;
    const list = mine.filter(x => st.filter === 'all' || (st.filter === 'open' ? x.open && !waiting(x) : st.filter === 'wait' ? waiting(x) : !x.open));
    const row = x => `<button class="s3-tk" data-tk="${x.id}"><span class="s3-st ${waiting(x) ? 'wait' : x.open ? 'open' : 'done'}"></span>
      <div class="grow"><b>${esc(x.subject)}</b><span class="mute">#${x.id} · ${x.last ? esc(x.last.text).slice(0, 80) : ''}</span></div>
      ${x.unread ? `<span class="tag gold">${x.unread}</span>` : ''}<span class="mute s3-when">${fmtDT(x.updated || x.created)}</span>
      <span class="tag ${waiting(x) ? 'gold' : x.open ? '' : 'red'}">${waiting(x) ? tr('s3Wait') : x.open ? t('tkOpen') : t('tkClosed')}</span>${IC.chev}</button>`;
    const form = `<div class="card s3-form"><div class="s3-fh"><button class="btn ghost sm" data-s3-back>${IC.back}${tr('s3Back')}</button><h3>${t('newTicket')}</h3></div>
      <span class="p3-h">${tr('s3Cat')}</span><div class="s3-cats">${CATS.map(c => `<button class="s3-cat ${st.cat === c ? 'on' : ''}" data-s3c="${c}">${IC[CI[c]]}${tr('c_' + c)}</button>`).join('')}</div>
      <input id="nt-subj" maxlength="80" placeholder="${esc(t('tkSubject'))}" value="${st.cat && st.cat !== 'other' ? esc(tr('c_' + st.cat)) + ': ' : ''}">
      <textarea id="nt-text" rows="7" maxlength="1500" placeholder="${esc(st.cat ? tr('c_' + st.cat + 'D') + '…' : t('whatHappened'))}"></textarea>
      <div class="row"><span class="mute" style="font-size:12px">${tr('s3Safe')}</span><span class="grow"></span><button class="btn" id="nt-send">${t('send')}</button></div></div>`;
    const main = st.form ? form : mine.length ? `<div class="card s3-list">${list.map(row).join('') || `<div class="empty-note">${t('noTickets')}</div>`}</div>`
      : `<div class="card s3-empty"><i class="s3-ic">${IC.life}</i><h3>${tr('s3Empty')}</h3><p class="mute">${tr('s3EmptyD')}</p>
        <button class="btn s3-cta" data-s3-new>${tr('s3New')}</button>
        <div class="s3-quick">${['match', 'pay', 'acc'].map(c => `<button data-s3c="${c}">${IC[CI[c]]}${tr('c_' + c)}</button>`).join('')}</div></div>`;
    render(`<div class="s3">
      <div class="s3-head"><div><h1>${t('support')}</h1><div class="mute">${t('supSub')}</div></div><span class="grow"></span>
        <button class="btn s3-new" data-s3-new>${IC.plus}${tr('s3New')}</button></div>
      <div class="s3-chips">${chip('all', mine.length, tr('s3All'))}${chip('open', nOpen, tr('s3Open'))}${chip('wait', nWait, tr('s3Wait'))}${chip('done', nDone, tr('s3Closed'))}</div>
      <div class="s3-lay"><div class="s3-main">${main}
        ${d.queue ? `<div class="card s3-list"><div class="s3-qh"><span class="p3-h">${t('tkQueue')} <b>${d.queue.filter(x => x.uid !== S.me.id).length}</b></span></div>${d.queue.filter(x => x.uid !== S.me.id).map(x => row(x).replace('<b>', `<b><span class="mute">${esc(x.nick)} · </span>`)).join('') || `<div class="empty-note">${t('noTickets')}</div>`}</div>` : ''}</div>
        <div class="s3-side"><div class="card"><span class="p3-h">${tr('s3Help')}</span>
          ${CATS.map(c => `<button class="s3-hc" data-s3c="${c}"><i>${IC[CI[c]]}</i><div class="grow"><b>${tr('c_' + c)}</b><span class="mute">${tr('c_' + c + 'D')}</span></div>${IC.chev}</button>`).join('')}</div>
          <div class="card s3-note"><span class="p3-h">${IC.bell}${tr('s3Reply')}</span><p class="mute">${tr('s3ReplyD')}</p><p class="mute s3-safe">${IC.lock}${tr('s3Safe')}</p></div></div>
      </div></div>`);
    const v = $('#view');
    v.querySelectorAll('[data-tk]').forEach(el => el.onclick = run(() => openTicket(el.dataset.tk)));
    v.querySelectorAll('[data-s3f]').forEach(b => b.onclick = () => { st.filter = b.dataset.s3f; st.form = false; refresh(); });
    v.querySelectorAll('[data-s3-new]').forEach(b => b.onclick = () => { st.form = true; st.cat = null; refresh(); setTimeout(() => $('#nt-subj')?.focus(), 30); });
    v.querySelectorAll('[data-s3c]').forEach(b => b.onclick = () => { st.form = true; st.cat = b.dataset.s3c; refresh(); setTimeout(() => $('#nt-text')?.focus(), 30); });
    const bk = v.querySelector('[data-s3-back]'); if (bk) bk.onclick = () => { st.form = false; refresh(); };
    const sn = $('#nt-send'); if (sn) sn.onclick = run(async () => {
      S.supOpen = await api('/api/support/new', { subject: $('#nt-subj').value, text: $('#nt-text').value });
      st.form = false; st.cat = null; loadSupport(); refresh();
    });
  };
})();
