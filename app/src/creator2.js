(() => {
  const L = {
    en: {
      kitT: 'Stream kit', kitHint: 'Panels, stream screens and an overlay with your code, nickname and link already on them. For OBS and Twitch.', kitDl: 'Download', kit_code: 'Twitch panel · My code', kit_play: 'Twitch panel · Play with me', kit_about: 'Twitch panel · About Konzte', kit_starting: 'Screen · Starting soon', kit_brb: 'Screen · Be right back', kit_ending: 'Screen · Thanks for watching', kit_overlay: 'Overlay · Use my code (transparent)',
      chCode: 'Change', chCodeQ: 'New code (3–16 latin letters, digits, - or _). The old code stops working right away.', chCodeAfter: 'You can change your code after {d}', chCodeDone: 'Your code is now {c}',
      tab: 'Partner dashboard', title: 'Partner dashboard', share: '{p}% of every purchase', code: 'Your code', link: 'Your link', copy: 'Copy', copied: 'Copied',
      hint: 'New players who use your code get {kf} KF right away, and +{fg} KF each for your first game together. Any player can enter your code at any time — even if they already play — and from then on you get {p}% of everything they buy: Premium, KF, items, the season pass and gifts for friends. The link to you is permanent.',
      kMonth: 'Earned this month', k30: 'Last 30 days', kTotal: 'Earned all time', kOwed: 'Available', kPaid: 'Paid out', kRevenue: 'Your players spent', kPurch: '{n} purchases · avg {v}',
      chActs: 'Code activations and link clicks · 30 days', chEarn: 'Your earnings per day · 30 days', lActs: 'Activations', lClicks: 'Clicks', lEarn: 'Earnings',
      funnel: 'Funnel', fClicks: 'Link clicks (30 d)', fSignups: 'Used your code', fReg: 'Registered', fPlayed: 'Played a match', fPlayed5: '5+ matches', fPayers: 'Made a purchase',
      ledger: 'Latest earnings', lDate: 'Date', lPlayer: 'Player', lBuy: 'Purchase', lAmount: 'Paid', lCut: 'You get', gift: 'gift', noLedger: 'No purchases yet. As soon as one of your players buys something, {p}% appears here instantly.',
      players: 'Your players', pJoined: 'Joined', pVia: 'How', viaCreator: 'code', viaCode: 'ref code', viaDiscord: 'Discord invite', pMatches: 'Matches', pSpent: 'Spent', pCut: 'Your cut', pSeen: 'Last seen', noPlayers: 'Nobody has used your code yet. Share your link — the first players will appear here.',
      top: 'Top players by spend', payouts: 'Payouts', noPayouts: 'No payouts yet.',
      req: 'Request payout', reqMin: 'Payouts from {v}. You have {o} available.', method: 'Method', m_paypal: 'PayPal', m_card: 'Bank card', m_crypto: 'Crypto (USDT)', m_other: 'Other',
      details: 'Details (PayPal email, card number, wallet…)', send: 'Request {v}', pending: 'Payout of {v} requested on {d} ({m}). The team will send it and mark it here.', cancel: 'Cancel request', reqSent: 'Payout requested — the team has been notified.',
      tips: 'How to get more players', t1: 'Put the link {l} in your video description and pinned comment.', t2: 'Say the code {c} out loud and show it on screen — viewers get {kf} KF.', t3: 'Stream your Konzte matches and invite viewers to a party: the first game together gives you both {fg} KF.', t4: 'Remind viewers that gifts count too: if they gift Premium to a friend, you still get {p}%.',
      earnToast: '+{c} — {n} bought {w}', paidToast: 'Payout of {v} sent!', off: 'Your creator code is disabled. Contact the team.',
    },
    uk: {
      kitT: 'Набір для стріму', kitHint: 'Панелі, екрани для трансляції й оверлей уже з твоїм кодом, ніком і посиланням. Для OBS і Twitch.', kitDl: 'Завантажити', kit_code: 'Панель Twitch · Мій код', kit_play: 'Панель Twitch · Грай зі мною', kit_about: 'Панель Twitch · Про Konzte', kit_starting: 'Екран · Скоро почнемо', kit_brb: 'Екран · Зараз повернусь', kit_ending: 'Екран · Дякую за перегляд', kit_overlay: 'Оверлей · Мій код (прозорий)',
      chCode: 'Змінити', chCodeQ: 'Новий код (3–16 латинських літер, цифр, - або _). Старий код одразу перестане діяти.', chCodeAfter: 'Змінити код можна після {d}', chCodeDone: 'Твій код тепер {c}',
      tab: 'Кабінет партнера', title: 'Кабінет партнера', share: '{p}% з кожної покупки', code: 'Твій код', link: 'Твоє посилання', copy: 'Копіювати', copied: 'Скопійовано',
      hint: 'Новачок із твоїм кодом одразу отримує {kf} KF, а за першу спільну гру з тобою — ще по {fg} KF кожному. Ввести твій код може будь-який гравець у будь-який момент — навіть якщо вже грає, — і відтоді тобі {p}% з усього, що він купує: Premium, KF, предмети, сезонний пропуск і подарунки друзям. Прив’язка до тебе — назавжди.',
      kMonth: 'Зароблено цього місяця', k30: 'За 30 днів', kTotal: 'Зароблено за весь час', kOwed: 'Доступно', kPaid: 'Виплачено', kRevenue: 'Твої гравці витратили', kPurch: 'покупок: {n} · середній чек {v}',
      chActs: 'Активації коду й переходи за посиланням · 30 днів', chEarn: 'Твій заробіток по днях · 30 днів', lActs: 'Активації', lClicks: 'Переходи', lEarn: 'Заробіток',
      funnel: 'Воронка', fClicks: 'Переходи (30 дн.)', fSignups: 'Ввели твій код', fReg: 'Зареєструвалися', fPlayed: 'Зіграли матч', fPlayed5: '5+ матчів', fPayers: 'Зробили покупку',
      ledger: 'Останні нарахування', lDate: 'Дата', lPlayer: 'Гравець', lBuy: 'Покупка', lAmount: 'Оплата', lCut: 'Тобі', gift: 'подарунок', noLedger: 'Покупок поки немає. Щойно хтось із твоїх гравців щось купить, {p}% одразу з’явиться тут.',
      players: 'Твої гравці', pJoined: 'Прийшов', pVia: 'Як', viaCreator: 'код', viaCode: 'реф. код', viaDiscord: 'Discord-запрошення', pMatches: 'Матчі', pSpent: 'Витратив', pCut: 'Тобі', pSeen: 'Був онлайн', noPlayers: 'Твій код ще ніхто не ввів. Поділися посиланням — перші гравці з’являться тут.',
      top: 'Найбільше витратили', payouts: 'Виплати', noPayouts: 'Виплат поки не було.',
      req: 'Запросити виплату', reqMin: 'Виплата від {v}. Зараз доступно {o}.', method: 'Спосіб', m_paypal: 'PayPal', m_card: 'Банківська картка', m_crypto: 'Крипта (USDT)', m_other: 'Інше',
      details: 'Реквізити (email PayPal, номер картки, гаманець…)', send: 'Запросити {v}', pending: 'Запит на {v} від {d} ({m}). Команда переведе й позначить тут.', cancel: 'Скасувати запит', reqSent: 'Запит надіслано — команду сповіщено.',
      tips: 'Як залучити більше гравців', t1: 'Додай посилання {l} в опис відео й закріплений коментар.', t2: 'Назви код {c} вголос і покажи на екрані — глядачі отримають {kf} KF.', t3: 'Стрим матчів Konzte з глядачами в паті: перша спільна гра дає вам обом по {fg} KF.', t4: 'Нагадуй, що подарунки теж рахуються: подарують другові Premium — тобі все одно {p}%.',
      earnToast: '+{c} — {n} купив(ла) {w}', paidToast: 'Виплату {v} надіслано!', off: 'Твій код творця вимкнено. Звернись до команди.',
    },
    ru: {
      kitT: 'Набор для стрима', kitHint: 'Панели, экраны для трансляции и оверлей уже с твоим кодом, ником и ссылкой. Для OBS и Twitch.', kitDl: 'Скачать', kit_code: 'Панель Twitch · Мой код', kit_play: 'Панель Twitch · Играй со мной', kit_about: 'Панель Twitch · О Konzte', kit_starting: 'Экран · Скоро начнём', kit_brb: 'Экран · Сейчас вернусь', kit_ending: 'Экран · Спасибо за просмотр', kit_overlay: 'Оверлей · Мой код (прозрачный)',
      chCode: 'Изменить', chCodeQ: 'Новый код (3–16 латинских букв, цифр, - или _). Старый код сразу перестанет работать.', chCodeAfter: 'Изменить код можно после {d}', chCodeDone: 'Твой код теперь {c}',
      tab: 'Кабинет партнёра', title: 'Кабинет партнёра', share: '{p}% с каждой покупки', code: 'Твой код', link: 'Твоя ссылка', copy: 'Копировать', copied: 'Скопировано',
      hint: 'Новичок с твоим кодом сразу получает {kf} KF, а за первую совместную игру с тобой — ещё по {fg} KF каждому. Ввести твой код может любой игрок в любой момент — даже если уже играет, — и с этого момента тебе {p}% со всего, что он покупает: Premium, KF, предметы, сезонный пропуск и подарки друзьям. Привязка к тебе — навсегда.',
      kMonth: 'Заработано в этом месяце', k30: 'За 30 дней', kTotal: 'Заработано за всё время', kOwed: 'Доступно', kPaid: 'Выплачено', kRevenue: 'Твои игроки потратили', kPurch: 'покупок: {n} · средний чек {v}',
      chActs: 'Активации кода и переходы по ссылке · 30 дней', chEarn: 'Твой заработок по дням · 30 дней', lActs: 'Активации', lClicks: 'Переходы', lEarn: 'Заработок',
      funnel: 'Воронка', fClicks: 'Переходы (30 дн.)', fSignups: 'Ввели твой код', fReg: 'Зарегистрировались', fPlayed: 'Сыграли матч', fPlayed5: '5+ матчей', fPayers: 'Сделали покупку',
      ledger: 'Последние начисления', lDate: 'Дата', lPlayer: 'Игрок', lBuy: 'Покупка', lAmount: 'Оплата', lCut: 'Тебе', gift: 'подарок', noLedger: 'Покупок пока нет. Как только кто-то из твоих игроков что-то купит, {p}% сразу появится здесь.',
      players: 'Твои игроки', pJoined: 'Пришёл', pVia: 'Как', viaCreator: 'код', viaCode: 'реф. код', viaDiscord: 'Discord-приглашение', pMatches: 'Матчи', pSpent: 'Потратил', pCut: 'Тебе', pSeen: 'Был онлайн', noPlayers: 'Твой код ещё никто не ввёл. Поделись ссылкой — первые игроки появятся здесь.',
      top: 'Больше всего потратили', payouts: 'Выплаты', noPayouts: 'Выплат пока не было.',
      req: 'Запросить выплату', reqMin: 'Выплата от {v}. Сейчас доступно {o}.', method: 'Способ', m_paypal: 'PayPal', m_card: 'Банковская карта', m_crypto: 'Крипта (USDT)', m_other: 'Другое',
      details: 'Реквизиты (email PayPal, номер карты, кошелёк…)', send: 'Запросить {v}', pending: 'Запрос на {v} от {d} ({m}). Команда переведёт и отметит здесь.', cancel: 'Отменить запрос', reqSent: 'Запрос отправлен — команда уведомлена.',
      tips: 'Как привлечь больше игроков', t1: 'Добавь ссылку {l} в описание видео и закреплённый комментарий.', t2: 'Назови код {c} вслух и покажи на экране — зрители получат {kf} KF.', t3: 'Стрим матчей Konzte со зрителями в пати: первая совместная игра даёт вам обоим по {fg} KF.', t4: 'Напоминай, что подарки тоже считаются: подарят другу Premium — тебе всё равно {p}%.',
      earnToast: '+{c} — {n} купил(а) {w}', paidToast: 'Выплата {v} отправлена!', off: 'Твой код создателя отключён. Обратись к команде.',
    },
  };
  if (typeof SERVER_ERRORS !== 'undefined') {
    const E = { uk: { 'Payout already requested': 'Запит на виплату вже надіслано', 'Choose a payout method and fill in the details': 'Обери спосіб виплати й заповни реквізити', 'Creator program is disabled for you': 'Програму творця для тебе вимкнено' },
      ru: { 'Payout already requested': 'Запрос на выплату уже отправлен', 'Choose a payout method and fill in the details': 'Выбери способ выплаты и заполни реквизиты', 'Creator program is disabled for you': 'Программа создателя для тебя отключена' } };
    for (const l of ['uk', 'ru']) Object.assign(SERVER_ERRORS[l] ||= {}, E[l]);
  }
  const tc = (k, v = {}) => String(L[LANG]?.[k] ?? kzTm(L.en[k]) ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');
  const usd = (n, cur = 'USD') => (cur === 'USD' ? '$' : '') + Number(n || 0).toFixed(2) + (cur === 'USD' ? '' : ' ' + cur);
  const ago = ts => { if (!ts) return '—'; const m = (Date.now() - ts) / 60000; return m < 60 ? Math.max(1, Math.round(m)) + ' min' : m < 1440 ? Math.round(m / 60) + ' h' : Math.round(m / 1440) + ' d'; };
  const COPY = '<svg viewBox="0 0 24 24"><path d="M8 8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm2 0h4a2 2 0 0 1 2 2v4h3V5h-9zm-5 2v9h9v-9z"/></svg>';
  let st = { data: null, at: 0, draft: { method: 'paypal', details: '' } };

  function chart(days, bars, line) {
    const W = 600, H = 140, n = days.length, bw = W / n;
    const maxB = Math.max(1, ...days.map(d => bars.reduce((a, b) => Math.max(a, d[b.key] || 0), 0)));
    const maxL = line ? Math.max(0.01, ...days.map(d => d[line.key] || 0)) : 1;
    let svg = '';
    for (let i = 0; i <= 2; i++) { const y = 2 + (H - 4) * i / 2; svg += `<line x1="0" x2="${W}" y1="${y}" y2="${y}" class="cr2-grid" vector-effect="non-scaling-stroke"/>`; }
    days.forEach((d, i) => {
      const x = i * bw;
      bars.forEach((b, j) => { const v = d[b.key] || 0, h = (H - 4) * v / maxB, w = (bw - 3) / bars.length;
        if (v) svg += `<rect x="${(x + 1.5 + j * w).toFixed(1)}" y="${(H - h).toFixed(1)}" width="${Math.max(1, w - 1).toFixed(1)}" height="${h.toFixed(1)}" fill="${b.color}"><title>${new Date(d.t).toLocaleDateString(LOCALE[LANG])}: ${b.label} ${v}</title></rect>`; });
    });
    if (line) {
      const pts = days.map((d, i) => `${(i * bw + bw / 2).toFixed(1)},${(H - 2 - (H - 6) * (d[line.key] || 0) / maxL).toFixed(1)}`).join(' ');
      svg += `<polyline points="${pts}" fill="none" stroke="${line.color}" stroke-width="2.2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
    }
    const top = line && !bars.length ? (line.fmt ? line.fmt(maxL) : maxL) : maxB;
    const ticks = days.filter((d, i) => i % 7 === 0 || i === n - 1).map(d => `<span>${new Date(d.t).toLocaleDateString(LOCALE[LANG], { day: 'numeric', month: 'short' })}</span>`).join('');
    const legend = [...bars, ...(line ? [line] : [])].map(s => `<span><i style="background:${s.color}"></i>${s.label}</span>`).join('');
    return `<div class="cr2-cw"><b class="cr2-max">${top}</b><svg class="cr2-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${svg}</svg></div><div class="cr2-ticks">${ticks}</div><div class="cr2-leg">${legend}</div>`;
  }

  function html(s) {
    if (!s) return `<div class="cr2"><div class="mute">…</div></div>`;
    const v = { p: s.share, kf: s.bonus, fg: s.firstGame, c: esc(s.code), l: esc(s.link.replace(/^https?:\/\//, '')) };
    const kpi = (label, val, sub, cls = '') => `<div class="cr2-k ${cls}"><span>${label}</span><b>${val}</b>${sub ? `<i>${sub}</i>` : ''}</div>`;
    const f = s.funnel, steps = [['fClicks', s.clicks30], ['fSignups', f.signups], ['fReg', f.registered], ['fPlayed', f.played], ['fPlayed5', f.played5], ['fPayers', f.payers]];
    const fmax = Math.max(1, ...steps.map(x => x[1]));
    const via = x => tc(x === 'creator' ? 'viaCreator' : x === 'discord' ? 'viaDiscord' : 'viaCode');
    const canReq = !s.payoutReq && s.owed >= s.minPayout && s.owed > 0 && !s.off;
    return `<div class="cr2">
      <div class="cr2-hero">
        <img class="cr2-badge" src="assets/badge/creator.png" alt="">
        <div class="cr2-ht"><h3>${tc('title')}</h3><span class="tag gold">${tc('share', v)}</span></div>
        <div class="cr2-ids">
          <div class="cr2-id"><span>${tc('code')}</span><b>${esc(s.code)}</b><button class="btn ghost xs" data-crc="${esc(s.code)}" title="${tc('copy')}">${COPY}</button><button class="btn ghost xs" id="cr2-chcode" ${s.codeNext > Date.now() ? `disabled title="${tc('chCodeAfter', { d: fmtDate(s.codeNext) })}"` : ''}>${tc('chCode')}</button></div>
          <div class="cr2-id"><span>${tc('link')}</span><b class="lk">${v.l}</b><button class="btn ghost xs" data-crc="${esc(s.link)}" title="${tc('copy')}">${COPY}</button></div>
        </div>
      </div>
      ${s.off ? `<div class="cr2-off">${tc('off')}</div>` : ''}
      <p class="mute cr2-hint">${tc('hint', v)}</p>
      <div class="cr2-kpis">
        ${kpi(tc('kMonth'), usd(s.earnedMonth, s.currency), '', 'gold')}${kpi(tc('k30'), usd(s.earned30, s.currency))}${kpi(tc('kTotal'), usd(s.earned, s.currency))}
        ${kpi(tc('kOwed'), usd(s.owed, s.currency), '', 'win')}${kpi(tc('kPaid'), usd(s.paid, s.currency))}${kpi(tc('kRevenue'), usd(s.revenue, s.currency), tc('kPurch', { n: s.purchases, v: usd(s.avgCheck, s.currency) }))}
      </div>
      <div class="cr2-row">
        <div class="card cr2-box"><h4>${tc('chActs')}</h4>${chart(s.days, [{ key: 'clicks', color: 'rgba(150,157,249,.45)', label: tc('lClicks') }, { key: 'signups', color: '#969df9', label: tc('lActs') }])}</div>
        <div class="card cr2-box"><h4>${tc('chEarn')}</h4>${chart(s.days, [], { key: 'cut', color: '#f4c542', label: tc('lEarn'), fmt: x => usd(x, s.currency) })}</div>
      </div>
      <div class="cr2-row">
        <div class="card cr2-box"><h4>${tc('funnel')}</h4><div class="cr2-fun">${steps.map(([k, n], i) => {
          const prev = i ? steps[i - 1][1] : 0, pc = i && prev ? Math.round(n / prev * 100) + '%' : '';
          return `<div class="cr2-fs"><span>${tc(k)}</span><b>${n}</b><em>${pc}</em><div class="bar"><i style="width:${Math.max(n ? 2 : 0, n / fmax * 100)}%"></i></div></div>`; }).join('')}</div></div>
        <div class="card cr2-box"><h4>${tc('payouts')}</h4>
          ${s.payoutReq ? `<div class="cr2-pend">${tc('pending', { v: usd(s.payoutReq.amount, s.currency), d: fmtDate(s.payoutReq.at), m: tc('m_' + s.payoutReq.method) })}<button class="btn ghost xs" id="cr2-cancel">${tc('cancel')}</button></div>`
          : `<p class="mute">${tc('reqMin', { v: usd(s.minPayout, s.currency), o: usd(s.owed, s.currency) })}</p>
            <div class="cr2-req ${canReq ? '' : 'dis'}"><select id="cr2-m">${['paypal', 'card', 'crypto', 'other'].map(m => `<option value="${m}" ${st.draft.method === m ? 'selected' : ''}>${tc('m_' + m)}</option>`).join('')}</select>
              <input id="cr2-d" maxlength="200" placeholder="${esc(tc('details'))}" value="${esc(st.draft.details)}" ${canReq ? '' : 'disabled'}>
              <button class="btn gold" id="cr2-send" ${canReq ? '' : 'disabled'}>${tc('send', { v: usd(s.owed, s.currency) })}</button></div>`}
          ${s.payouts.length ? `<div class="cr2-pl">${s.payouts.map(x => `<div><span class="mute">${fmtDate(x.at)}</span><b>${usd(x.amount, s.currency)}</b>${x.note ? `<i>${esc(x.note)}</i>` : ''}</div>`).join('')}</div>` : `<p class="mute">${tc('noPayouts')}</p>`}
        </div>
      </div>
      <div class="card cr2-box"><h4>${tc('ledger')}</h4>
        ${s.ledger.length ? `<table class="lb cr2-t"><thead><tr><th>${tc('lDate')}</th><th>${tc('lPlayer')}</th><th>${tc('lBuy')}</th><th>${tc('lAmount')}</th><th>${tc('lCut')}</th></tr></thead><tbody>
          ${s.ledger.map(e => `<tr data-prof="${e.from}"><td class="mute">${fmtDate(e.at)}</td><td>${esc(e.nick)}</td><td>${esc(e.what)}${e.gift ? ` <span class="tag">${tc('gift')}</span>` : ''}</td><td>${usd(e.amount, e.currency)}</td><td class="gold-t"><b>+${usd(e.cut, e.currency)}</b></td></tr>`).join('')}</tbody></table>`
          : `<div class="mute">${tc('noLedger', v)}</div>`}</div>
      <div class="card cr2-box"><h4>${tc('players')} <span class="mute">· ${s.signups}</span></h4>
        ${s.list.length ? `<table class="lb cr2-t"><thead><tr><th>${tc('lPlayer')}</th><th>${tc('pJoined')}</th><th>${tc('pVia')}</th><th>${tc('pMatches')}</th><th>${tc('pSpent')}</th><th>${tc('pCut')}</th><th>${tc('pSeen')}</th></tr></thead><tbody>
          ${s.list.map(x => `<tr data-prof="${x.id}"><td>${esc(x.nick)}${x.registered ? '' : ' <span class="tag red">—ID</span>'}</td><td class="mute">${fmtDate(x.at)}</td><td><span class="tag">${via(x.via)}</span></td><td>${x.matches}</td><td>${x.spent ? usd(x.spent, s.currency) : '—'}</td><td class="${x.cut ? 'gold-t' : ''}">${x.cut ? '+' + usd(x.cut, s.currency) : '—'}</td><td class="mute">${ago(x.seen)}</td></tr>`).join('')}</tbody></table>`
          : `<div class="mute">${tc('noPlayers')}</div>`}</div>
      <div class="card cr2-box cr2-kit"><h4>${tc('kitT')}</h4><p class="mute" style="margin:0 0 12px">${tc('kitHint')}</p>
        <div class="kit-grid">${KIT.map(([id, k, sz]) => `<div class="kit-it"><div class="kit-pv ${id.split('-')[0]}"><img data-kit-pv="${id}" alt=""></div><div class="kit-meta"><b>${tc(k)}</b><span class="mute">${sz}</span></div><button class="btn sm" data-kit="${id}">${tc('kitDl')}</button></div>`).join('')}</div></div>
      <div class="card cr2-box cr2-tips"><h4>${tc('tips')}</h4><ul>${['t1', 't2', 't3', 't4'].map(k => `<li>${tc(k, v)}</li>`).join('')}</ul></div>
    </div>`;
  }

  const KIT = [['panel-code', 'kit_code', '640×320'], ['panel-play', 'kit_play', '640×320'], ['panel-about', 'kit_about', '640×320'], ['overlay-code', 'kit_overlay', '1100×230'],
    ['screen-starting', 'kit_starting', '1920×1080'], ['screen-brb', 'kit_brb', '1920×1080'], ['screen-ending', 'kit_ending', '1920×1080']];
  const kitBlob = {};
  async function kitGet(id) {
    const key = id + '|' + (st.data?.code || '');
    if (kitBlob[key]) return kitBlob[key];
    const r = await fetch(S.server + '/api/creator/kit?item=' + id, { headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '' } });
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || 'Error');
    const file = /filename="([^"]+)"/.exec(r.headers.get('Content-Disposition') || '')?.[1] || `konzte-${id}.png`;
    return (kitBlob[key] = { url: URL.createObjectURL(await r.blob()), file });
  }
  function bind(root) {
    root.querySelectorAll('[data-kit-pv]').forEach(im => kitGet(im.dataset.kitPv).then(x => { im.src = x.url; }).catch(() => {}));
    root.querySelectorAll('[data-kit]').forEach(b => b.onclick = run(async () => { const x = await kitGet(b.dataset.kit); const a = document.createElement('a'); a.href = x.url; a.download = x.file; a.click(); }));
    root.querySelectorAll('[data-crc]').forEach(b => b.onclick = () => { navigator.clipboard.writeText(b.dataset.crc); toast(tc('copied') + ': ' + b.dataset.crc); });
    root.querySelectorAll('.cr2-t tr[data-prof]').forEach(r => r.onclick = () => go('profile', r.dataset.prof));
    const m = root.querySelector('#cr2-m'), d = root.querySelector('#cr2-d');
    if (m) m.onchange = () => { st.draft.method = m.value; };
    if (d) d.oninput = () => { st.draft.details = d.value; };
    const send = root.querySelector('#cr2-send');
    if (send) send.onclick = run(async () => { send.disabled = true; try { st.data = await api('/api/creator/payout', st.draft); sfx('ok'); toast(tc('reqSent')); redraw(); } finally { send.disabled = false; } });
    const chc = root.querySelector('#cr2-chcode');
    if (chc) chc.onclick = run(async () => { const v = prompt(tc('chCodeQ'), st.data?.code || ''); if (!v || v.trim().toUpperCase() === st.data?.code) return; st.data = await api('/api/creator/code', { code: v.trim() }); S.me = await api('/api/me'); toast(tc('chCodeDone', { c: st.data.code })); redraw(); });
    const c = root.querySelector('#cr2-cancel');
    if (c) c.onclick = run(async () => { st.data = await api('/api/creator/payout-cancel', {}); redraw(); });
  }
  function load(force) {
    if (!force && Date.now() - st.at < 20_000) return;
    st.at = Date.now();
    api('/api/creator').then(x => { st.data = x; redraw(); }).catch(e => { if (/Not a creator/.test(e.message) || e.message === tErr('Not a creator')) api('/api/me').then(me => { S.me = me; renderMe(); if (S.page === 'settings') renderSettings(); }).catch(() => {}); });
  }
  function redraw() { const p = document.querySelector('#view .setpanel .cr2'); if (p) { p.outerHTML = html(st.data); bind(document.querySelector('#view .setpanel')); } }
  function mount(panel) { panel.innerHTML = html(st.data); bind(panel); load(); }

  addEventListener('kz:ws', e => {
    const m = e.detail || {};
    if (m.t === 'creatorEarn') { toast(tc('earnToast', { c: usd(m.cut, m.currency), n: m.nick, w: m.what })); try { sfx('coin'); } catch {} st.at = 0; if (document.querySelector('#view .cr2')) load(true); }
    if (m.t === 'creatorPaid') { toast(tc('paidToast', { v: usd(m.amount, m.currency) })); try { sfx('reward'); } catch {} st.at = 0; if (document.querySelector('#view .cr2')) load(true); }
  });
  window.KZCreator = { mount, tab: () => tc('tab'), open: () => { window.KZPartnerOpen?.(); } };
})();
