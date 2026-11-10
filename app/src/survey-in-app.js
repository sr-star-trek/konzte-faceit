(() => {
const WAVE = 2;
const Q = [
  { id: 'played', type: 'one', opts: ['daily', 'weekly', 'few', 'stopped', 'not_yet'] },
  { id: 'source', type: 'one', opts: ['cm_discord', 'friend', 'konzte_discord', 'youtube', 'tiktok', 'search', 'other'] },
  { id: 'client', type: 'one', opts: ['win', 'linux', 'mac', 'none'] },
  { id: 'nps', type: 'scale' },
  { id: 'rates', type: 'rates', opts: ['queue', 'balance', 'result', 'app', 'guard', 'staff', 'shop', 'pass', 'clans'] },
  { id: 'guard', type: 'one', opts: ['fine', 'minor', 'blocked', 'no_install', 'unknown'] },
  { id: 'blockers', type: 'many', opts: ['queue_long', 'few_players', 'cheaters', 'toxic', 'bugs', 'result_hard', 'guard_issue', 'time', 'no_friends', 'nothing'] },
  { id: 'wait', type: 'one', opts: ['w2', 'w5', 'w10', 'w15'] },
  { id: 'modes', type: 'many', opts: ['5v5', '2v2', '1v1', '3v3', 'tournaments', 'clanwars'] },
  { id: 'motivate', type: 'many', max: 3, opts: ['cash', 'rank', 'cosmetics', 'pass', 'friends', 'clanwars', 'tournaments', 'fair'] },
  { id: 'features', type: 'many', max: 3, opts: ['tournaments', 'clanwars', 'web_mobile', 'replays', 'stats', 'achievements', 'voice', 'lfg', 'coaching', 'overlay', 'events'] },
  { id: 'spent', type: 'many', opts: ['premium', 'kf', 'items', 'theme', 'pass_paid', 'nothing_paid'] },
  { id: 'team', type: 'many', opts: ['j_staff', 'j_designer', 'j_partner', 'j_tester', 'j_no'] },
  { id: 'liked', type: 'text' },
  { id: 'bugs', type: 'text' },
  { id: 'change', type: 'text' },
  { id: 'contact', type: 'line' },
];
const T = {
  en: {
    tag: 'Survey #2 · before Season 1', title: 'How is Konzte now?', lead: 'A lot changed since the first survey: 2×2, the new store, clans, the Pass, KONZTE GUARD and a new client. Before Season 1 starts we want to know what works for you and what still gets in the way.',
    meta: '4–5 minutes · all questions are optional · anonymous', send: 'Send answers', anon: 'Your nickname is only needed if you want us to reply.',
    thx: 'Thank you!', thx2: 'Your answers were sent. We will post the results and what we change because of them in our Discord news.', back: 'Back to the site',
    prog: '{a} of {b} answered', err0: 'Please answer at least a few questions.', errNet: 'Could not send — check your connection and try again.', pick: 'pick up to {n}', many: 'you can pick several',
    q: {
      played: ['How often do you play on Konzte now?'], source: ['How did you hear about Konzte?'],
      client: ['Which Konzte client do you use?'],
      nps: ['How likely are you to recommend Konzte to a friend?', '0 — not at all, 10 — definitely'],
      rates: ['Rate each part from 1 (bad) to 5 (great)', 'Skip what you haven\'t tried'],
      guard: ['KONZTE GUARD (anticheat) — how is it for you?'],
      blockers: ['What stops you from playing more?'],
      wait: ['How long are you ready to wait in the queue?'],
      modes: ['Which modes do you want to play?'],
      motivate: ['What will make you play Season 1?'],
      features: ['What should we add next?'],
      spent: ['Have you bought anything on Konzte?', 'Helps us understand what is worth making'],
      team: ['Would you like to help Konzte?', 'Applications are open at konzte.online/team'],
      liked: ['What do you like most about Konzte?'],
      bugs: ['Did you run into any bugs?', 'What happened, where, and on which system'],
      change: ['What would you change, add or remove?'],
      contact: ['Discord or Konzte nickname (optional)', 'Only if you want us to contact you about your answers'],
    },
    o: {
      daily: 'Almost every day', weekly: 'A few times a week', few: 'Sometimes', stopped: 'I stopped playing', not_yet: 'Haven\'t played yet',
      cm_discord: 'Combat Master Discord', friend: 'A friend', konzte_discord: 'Konzte Discord', youtube: 'YouTube', tiktok: 'TikTok', search: 'Google / search', other: 'Other',
      win: 'Windows', linux: 'Linux', mac: 'macOS', none: 'Not installed',
      queue: 'Queue speed', balance: 'Team balance', result: 'Sending results', app: 'App stability & speed', guard: 'KONZTE GUARD', staff: 'Staff & support', shop: 'Store & cosmetics', pass: 'Konzte Pass', clans: 'Clans',
      fine: 'Works, no problems', minor: 'Small problems', blocked: 'It stops me from playing', no_install: 'Haven\'t installed it', unknown: 'Don\'t know what it is',
      queue_long: 'Queue takes too long', few_players: 'Too few players', cheaters: 'Cheaters', toxic: 'Toxic players', bugs: 'Bugs', result_hard: 'Sending results is a hassle', guard_issue: 'KONZTE GUARD problems', time: 'No time', no_friends: 'No friends to play with', nothing: 'Nothing, I play a lot',
      w2: 'Up to 2 min', w5: 'Up to 5 min', w10: 'Up to 10 min', w15: '15 min and more',
      '5v5': '5×5', '2v2': '2×2', '1v1': '1×1 (bring it back)', '3v3': '3×3', tournaments: 'Tournaments', clanwars: 'Clan wars',
      cash: 'Cash prizes', rank: 'Rank & ELO', cosmetics: 'Season cosmetics', friends: 'Playing with friends', fair: 'Fair games without cheaters',
      web_mobile: 'Web / mobile version', replays: 'Clips & highlights', stats: 'Deeper stats', achievements: 'More achievements', voice: 'Voice chat in the app', lfg: 'Better team search', coaching: 'Guides / coaching', overlay: 'Stream overlay', events: 'Weekly events',
      premium: 'Premium', kf: 'KF coins', items: 'Store items', theme: 'App style', pass_paid: 'Pass', nothing_paid: 'Nothing',
      j_staff: 'Join the staff', j_designer: 'Draw cosmetics (designer)', j_partner: 'Stream / make videos (partner)', j_tester: 'Test new versions', j_no: 'Not now',
    },
  },
  uk: {
    tag: 'Опитування №2 · перед Сезоном 1', title: 'Як тобі Konzte зараз?', lead: 'Після першого опитування багато що змінилося: 2×2, новий магазин, клани, Пропуск, KONZTE GUARD і новий клієнт. Перед стартом Сезону 1 хочемо знати, що для тебе працює, а що досі заважає.',
    meta: '4–5 хвилин · усі питання необов’язкові · анонімно', send: 'Надіслати відповіді', anon: 'Нік потрібен, лише якщо хочеш, щоб ми відповіли.',
    thx: 'Дякуємо!', thx2: 'Відповіді надіслано. Результати й те, що ми через них змінимо, покажемо в новинах нашого Discord.', back: 'На сайт',
    prog: 'відповідей: {a} з {b}', err0: 'Дай відповідь хоча б на кілька питань.', errNet: 'Не вдалося надіслати — перевір з’єднання й спробуй ще раз.', pick: 'до {n} варіантів', many: 'можна кілька',
    q: {
      played: ['Як часто ти зараз граєш на Konzte?'], source: ['Звідки ти дізнався про Konzte?'],
      client: ['Яким клієнтом Konzte користуєшся?'],
      nps: ['Наскільки ймовірно, що ти порадиш Konzte другу?', '0 — точно ні, 10 — точно так'],
      rates: ['Оціни кожну частину від 1 (погано) до 5 (чудово)', 'Пропусти те, чого не пробував'],
      guard: ['KONZTE GUARD (античит) — як він у тебе?'],
      blockers: ['Що заважає грати більше?'],
      wait: ['Скільки ти готовий чекати в черзі?'],
      modes: ['У які режими хочеш грати?'],
      motivate: ['Що змусить тебе грати в Сезоні 1?'],
      features: ['Що додати наступним?'],
      spent: ['Ти щось купував на Konzte?', 'Допомагає зрозуміти, що варто робити'],
      team: ['Хочеш допомогти Konzte?', 'Заявки відкриті на konzte.online/team'],
      liked: ['Що тобі найбільше подобається в Konzte?'],
      bugs: ['Натрапляв на баги?', 'Що сталося, де і на якій системі'],
      change: ['Що б ти змінив, додав або прибрав?'],
      contact: ['Нік у Discord або Konzte (необов’язково)', 'Лише якщо хочеш, щоб ми з тобою зв’язалися'],
    },
    o: {
      daily: 'Майже щодня', weekly: 'Кілька разів на тиждень', few: 'Іноді', stopped: 'Перестав грати', not_yet: 'Ще не грав',
      cm_discord: 'Discord Combat Master', friend: 'Від друга', konzte_discord: 'Discord Konzte', youtube: 'YouTube', tiktok: 'TikTok', search: 'Google / пошук', other: 'Інше',
      win: 'Windows', linux: 'Linux', mac: 'macOS', none: 'Не встановлював',
      queue: 'Швидкість черги', balance: 'Баланс команд', result: 'Надсилання результату', app: 'Стабільність і швидкість застосунку', guard: 'KONZTE GUARD', staff: 'Стафф і підтримка', shop: 'Магазин і косметика', pass: 'Пропуск Konzte', clans: 'Клани',
      fine: 'Працює, проблем немає', minor: 'Дрібні проблеми', blocked: 'Заважає грати', no_install: 'Не встановлював', unknown: 'Не знаю, що це',
      queue_long: 'Довга черга', few_players: 'Мало гравців', cheaters: 'Читери', toxic: 'Токсичні гравці', bugs: 'Баги', result_hard: 'Незручно надсилати результат', guard_issue: 'Проблеми з KONZTE GUARD', time: 'Немає часу', no_friends: 'Нема з ким грати', nothing: 'Нічого, граю багато',
      w2: 'До 2 хв', w5: 'До 5 хв', w10: 'До 10 хв', w15: '15 хв і більше',
      '5v5': '5×5', '2v2': '2×2', '1v1': '1×1 (поверніть)', '3v3': '3×3', tournaments: 'Турніри', clanwars: 'Клан-вари',
      cash: 'Грошові призи', rank: 'Ранг і ELO', cosmetics: 'Сезонна косметика', friends: 'Гра з друзями', fair: 'Чесні ігри без читерів',
      web_mobile: 'Веб / мобільна версія', replays: 'Кліпи й хайлайти', stats: 'Детальніша статистика', achievements: 'Більше досягнень', voice: 'Голосовий чат у застосунку', lfg: 'Кращий пошук команди', coaching: 'Гайди / навчання', overlay: 'Оверлей для стріму', events: 'Щотижневі івенти',
      premium: 'Premium', kf: 'Монети KF', items: 'Предмети з магазину', theme: 'Стиль застосунку', pass_paid: 'Пропуск', nothing_paid: 'Нічого',
      j_staff: 'Увійти в стафф', j_designer: 'Малювати косметику (дизайнер)', j_partner: 'Стрімити / робити відео (партнер)', j_tester: 'Тестувати нові версії', j_no: 'Поки ні',
    },
  },
  ru: {
    tag: 'Опрос №2 · перед Сезоном 1', title: 'Как тебе Konzte сейчас?', lead: 'После первого опроса многое изменилось: 2×2, новый магазин, кланы, Пропуск, KONZTE GUARD и новый клиент. Перед стартом Сезона 1 хотим знать, что у тебя работает, а что до сих пор мешает.',
    meta: '4–5 минут · все вопросы необязательные · анонимно', send: 'Отправить ответы', anon: 'Ник нужен, только если хочешь, чтобы мы ответили.',
    thx: 'Спасибо!', thx2: 'Ответы отправлены. Результаты и то, что мы из-за них изменим, покажем в новостях нашего Discord.', back: 'На сайт',
    prog: 'ответов: {a} из {b}', err0: 'Ответь хотя бы на несколько вопросов.', errNet: 'Не удалось отправить — проверь соединение и попробуй ещё раз.', pick: 'до {n} вариантов', many: 'можно несколько',
    q: {
      played: ['Как часто ты сейчас играешь на Konzte?'], source: ['Откуда ты узнал о Konzte?'],
      client: ['Каким клиентом Konzte пользуешься?'],
      nps: ['Насколько вероятно, что ты посоветуешь Konzte другу?', '0 — точно нет, 10 — точно да'],
      rates: ['Оцени каждую часть от 1 (плохо) до 5 (отлично)', 'Пропусти то, что не пробовал'],
      guard: ['KONZTE GUARD (античит) — как он у тебя?'],
      blockers: ['Что мешает играть больше?'],
      wait: ['Сколько ты готов ждать в очереди?'],
      modes: ['В какие режимы хочешь играть?'],
      motivate: ['Что заставит тебя играть в Сезоне 1?'],
      features: ['Что добавить следующим?'],
      spent: ['Ты что-то покупал на Konzte?', 'Помогает понять, что стоит делать'],
      team: ['Хочешь помочь Konzte?', 'Заявки открыты на konzte.online/team'],
      liked: ['Что тебе больше всего нравится в Konzte?'],
      bugs: ['Натыкался на баги?', 'Что случилось, где и на какой системе'],
      change: ['Что бы ты изменил, добавил или убрал?'],
      contact: ['Ник в Discord или Konzte (необязательно)', 'Только если хочешь, чтобы мы с тобой связались'],
    },
    o: {
      daily: 'Почти каждый день', weekly: 'Несколько раз в неделю', few: 'Иногда', stopped: 'Перестал играть', not_yet: 'Ещё не играл',
      cm_discord: 'Discord Combat Master', friend: 'От друга', konzte_discord: 'Discord Konzte', youtube: 'YouTube', tiktok: 'TikTok', search: 'Google / поиск', other: 'Другое',
      win: 'Windows', linux: 'Linux', mac: 'macOS', none: 'Не устанавливал',
      queue: 'Скорость очереди', balance: 'Баланс команд', result: 'Отправка результата', app: 'Стабильность и скорость приложения', guard: 'KONZTE GUARD', staff: 'Стафф и поддержка', shop: 'Магазин и косметика', pass: 'Пропуск Konzte', clans: 'Кланы',
      fine: 'Работает, проблем нет', minor: 'Мелкие проблемы', blocked: 'Мешает играть', no_install: 'Не устанавливал', unknown: 'Не знаю, что это',
      queue_long: 'Долгая очередь', few_players: 'Мало игроков', cheaters: 'Читеры', toxic: 'Токсичные игроки', bugs: 'Баги', result_hard: 'Неудобно отправлять результат', guard_issue: 'Проблемы с KONZTE GUARD', time: 'Нет времени', no_friends: 'Не с кем играть', nothing: 'Ничего, играю много',
      w2: 'До 2 мин', w5: 'До 5 мин', w10: 'До 10 мин', w15: '15 мин и больше',
      '5v5': '5×5', '2v2': '2×2', '1v1': '1×1 (верните)', '3v3': '3×3', tournaments: 'Турниры', clanwars: 'Клан-вары',
      cash: 'Денежные призы', rank: 'Ранг и ELO', cosmetics: 'Сезонная косметика', friends: 'Игра с друзьями', fair: 'Честные игры без читеров',
      web_mobile: 'Веб / мобильная версия', replays: 'Клипы и хайлайты', stats: 'Подробнее статистика', achievements: 'Больше достижений', voice: 'Голосовой чат в приложении', lfg: 'Лучше поиск команды', coaching: 'Гайды / обучение', overlay: 'Оверлей для стрима', events: 'Еженедельные ивенты',
      premium: 'Premium', kf: 'Монеты KF', items: 'Предметы из магазина', theme: 'Стиль приложения', pass_paid: 'Пропуск', nothing_paid: 'Ничего',
      j_staff: 'Войти в стафф', j_designer: 'Рисовать косметику (дизайнер)', j_partner: 'Стримить / делать видео (партнёр)', j_tester: 'Тестировать новые версии', j_no: 'Пока нет',
    },
  },
};
  const LATER = 3 * 864e5;
  const B = {
    en: { b: 'Survey #2 before Season 1', b2: '4–5 minutes — tell us what works and what to fix.', go: 'Take the survey', later: 'Later', cancel: 'Close' },
    uk: { b: 'Опитування №2 перед Сезоном 1', b2: '4–5 хвилин — розкажи, що працює і що виправити.', go: 'Пройти опитування', later: 'Пізніше', cancel: 'Закрити' },
    ru: { b: 'Опрос №2 перед Сезоном 1', b2: '4–5 минут — расскажи, что работает и что исправить.', go: 'Пройти опрос', later: 'Позже', cancel: 'Закрыть' },
  };
  const tx = () => T[LANG] || T.en, bx = () => B[LANG] || B.en;
  const f = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
  const ans = {};
  let lastHit = null;
  const visible = () => { const v = S.cfg?.survey2; return v !== 'done' && !(typeof v === 'number' && Date.now() - v < LATER); };

  const banner = () => `<div class="card sv2-ban"><svg viewBox="0 0 24 24"><path d="M9 4h6v3H9zM7 6H5v15h14V6h-2M8 12h8M8 16h5"/></svg>
    <div class="grow"><b>${esc(bx().b)}</b><span class="mute">${esc(bx().b2)}</span></div>
    <button class="btn" data-sv2="open">${esc(bx().go)}</button><button class="btn ghost sm" data-sv2="later">${esc(bx().later)}</button></div>`;

  const _rp = renderPlay;
  renderPlay = function () {
    const r = _rp.apply(this, arguments);
    try {
      const pl = $('#view .pl2');
      if (pl && visible() && !pl.querySelector('.sv2-ban')) {
        const strip = pl.firstElementChild;
        (strip ? strip : pl).insertAdjacentHTML(strip ? 'afterend' : 'afterbegin', banner());
        pl.querySelector('[data-sv2="open"]').onclick = () => openSurvey();
        pl.querySelector('[data-sv2="later"]').onclick = async () => { await setCfg({ survey2: Date.now() }); renderReady(); };
      }
    } catch (e) { console.log('[survey2]', e.message); }
    return r;
  };

  function body(q) {
    const L = tx(), o = x => esc(L.o[x] || x);
    if (q.type === 'one' || q.type === 'many') return `<div class="sv2-opts">${q.opts.map(x => `<label><input type="${q.type === 'one' ? 'radio' : 'checkbox'}" name="sv2_${q.id}" value="${x}" ${q.type === 'one' ? (ans[q.id] === x ? 'checked' : '') : ((ans[q.id] || []).includes(x) ? 'checked' : '')}><span>${o(x)}</span></label>`).join('')}</div>`;
    if (q.type === 'scale') return `<div class="sv2-opts sv2-scale">${Array.from({ length: 11 }, (_, n) => `<label><input type="radio" name="sv2_${q.id}" value="${n}" ${ans[q.id] === n ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div>`;
    if (q.type === 'rates') return `<div class="sv2-rates">${q.opts.map(a => `<div class="sv2-rate"><span>${o(a)}</span><div class="sv2-opts">${[1, 2, 3, 4, 5].map(n => `<label><input type="radio" name="sv2_r_${a}" value="${n}" ${(ans.rates || {})[a] === n ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div></div>`).join('')}</div>`;
    if (q.type === 'text') return `<textarea name="sv2_${q.id}" rows="3" maxlength="1500">${esc(ans[q.id] || '')}</textarea>`;
    return `<input type="text" name="sv2_${q.id}" maxlength="60" value="${esc(ans[q.id] || '')}">`;
  }

  function sync(box) {
    for (const q of Q) {
      const el = box.querySelector(`[data-q="${q.id}"]`); if (!el) continue;
      if (q.type === 'one') { const c = el.querySelector('input:checked'); if (c) ans[q.id] = c.value; else delete ans[q.id]; }
      if (q.type === 'scale') { const c = el.querySelector('input:checked'); if (c) ans[q.id] = +c.value; else delete ans[q.id]; }
      if (q.type === 'many') {
        const on = [...el.querySelectorAll('input:checked')];
        if (q.max && on.length > q.max) { const x = on.includes(lastHit) ? lastHit : on.at(-1); x.checked = false; on.splice(on.indexOf(x), 1); }
        const v = on.map(i => i.value);
        if (v.length) ans[q.id] = v; else delete ans[q.id];
      }
      if (q.type === 'rates') { const r = {}; for (const a of q.opts) { const c = el.querySelector(`input[name="sv2_r_${a}"]:checked`); if (c) r[a] = +c.value; } if (Object.keys(r).length) ans.rates = r; else delete ans.rates; }
      if (q.type === 'text' || q.type === 'line') { const v = el.querySelector('textarea,input').value.trim(); if (v) ans[q.id] = v; else delete ans[q.id]; }
      el.classList.toggle('done', ans[q.id] != null);
    }
    const n = Object.keys(ans).length;
    box.querySelector('.sv2-prog u').style.width = n / Q.length * 100 + '%';
    box.querySelector('.sv2-prog span').textContent = f(tx().prog, { a: n, b: Q.length });
  }

  function openSurvey() {
    const L = tx();
    modal(`<div class="card accent col sv2-m"><div class="sv2-head"><span class="sv2-tag">${esc(L.tag)}</span><h2>${esc(L.title)}</h2><p class="mute">${esc(L.lead)}</p><p class="mute sm">${esc(L.meta)}</p>
        <div class="sv2-prog"><div><u></u></div><span></span></div></div>
      <div class="sv2-qs">${Q.map((q, i) => { const [h, hint] = L.q[q.id]; const extra = q.type === 'many' ? (q.max ? f(L.pick, { n: q.max }) : L.many) : '';
        return `<div class="sv2-q" data-q="${q.id}"><h4><span class="gold">${i + 1}</span> ${esc(h)}</h4>${hint || extra ? `<p class="mute sm">${esc([hint, extra].filter(Boolean).join(' · '))}</p>` : ''}${body(q)}</div>`; }).join('')}</div>
      <div class="row sv2-foot"><button class="btn" id="sv2-send">${esc(L.send)}</button><span class="mute sm grow">${esc(L.anon)}</span><span class="lose sm" id="sv2-err"></span><button class="btn ghost" data-close>${esc(bx().cancel)}</button></div></div>`, box => {
      const m = box.querySelector('.sv2-m');
      m.addEventListener('change', e => { lastHit = e.target; sync(m); }); m.addEventListener('input', e => { if (e.target.matches('textarea,input[type=text]')) sync(m); });
      sync(m);
      m.querySelector('#sv2-send').onclick = run(async () => {
        sync(m); const err = m.querySelector('#sv2-err'); err.textContent = '';
        if (Object.keys(ans).filter(k => k !== 'contact').length < 3) { err.textContent = L.err0; return; }
        const btn = m.querySelector('#sv2-send'); btn.disabled = true;
        try { await api('/public/survey', { answers: ans, lang: LANG, wave: WAVE }); }
        catch (e) { btn.disabled = false; err.textContent = e.message || L.errNet; return; }
        await setCfg({ survey2: 'done' });
        m.innerHTML = `<div class="sv2-thx"><h2>${esc(L.thx)}</h2><p class="mute">${esc(L.thx2)}</p><button class="btn" data-close>OK</button></div>`;
        m.querySelector('[data-close]').onclick = closeModal;
      });
    });
  }
  window.openSurvey2 = openSurvey;
})();
