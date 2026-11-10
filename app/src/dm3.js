(() => {
  const V3 = () => !!window.KZ_V3?.();
  const L = {
    en: {
      dms: 'Messages', n2_d_dms: 'Private messages with players', dm3Title: 'Messages', dm3Search: 'Search conversations', dm3All: 'All', dm3Unread: 'Unread',
      dm3NoneH: 'No conversations', dm3NoneP: 'Message a friend from your friends list — the conversation will appear here.', dm3ToFriends: 'To friends',
      dm3PickH: 'Pick a conversation', dm3PickP: 'On the left — everyone you have already talked to.', dm3NoHits: 'Nothing found', dm3Friends: 'Friends',
      dm3Typing: '{n} is typing', dm3Tr: 'Translate', dm3TrOrig: 'Show original', dm3TrShow: 'Show translation', dm3TrLoad: 'Translating…', dm3TrBar: '{n} uses the app in {l}', dm3TrAuto: 'Auto-translate', dm3TrGuess: '{n} seems to write in another language', dm3TrFrom: 'Translated from {l}', dm3Ph: 'Write a message…', dm3Send: 'Send', dm3Read: 'Read', dm3Sent: 'Sent', dm3Sending: 'Sending…', dm3Failed: 'Not sent — click to retry',
      dm3Today: 'Today', dm3Yday: 'Yesterday', dm3Older: 'Load earlier messages', dm3Online: 'online', dm3Offline: 'offline', dm3Profile: 'Profile',
      dm3Hide: 'Delete conversation', dm3HideQ: 'Delete this conversation for you? The other player keeps their copy.', dm3You: 'You: ',
      dm3Write: 'Message', dm3New: 'New message from {n}', dm3Open: 'Open', dm3StartH: 'Start the conversation', dm3StartP: 'Say hi to {n}. Links are clickable, up to 1000 characters.',
      dm3Who: 'Who can message me', dm3Who_all: 'Any player can send you a private message.', dm3Who_friends: 'Only your friends can send you private messages.', dm3Who_none: 'Nobody can send you private messages (staff still can).',
      dm3NUnread: 'Unread messages', dm3NFrom: '{n} new', dm3Hint: 'Enter — send · Shift+Enter — new line', dm3Staff: 'Konzte staff',
    },
    uk: {
      dms: 'Повідомлення', n2_d_dms: 'Особисті повідомлення з гравцями', dm3Title: 'Повідомлення', dm3Search: 'Пошук переписок', dm3All: 'Усі', dm3Unread: 'Непрочитані',
      dm3NoneH: 'Переписок немає', dm3NoneP: 'Напиши другу зі списку друзів — переписка з’явиться тут.', dm3ToFriends: 'До друзів',
      dm3PickH: 'Обери переписку', dm3PickP: 'Ліворуч — список тих, з ким ти вже спілкувався.', dm3NoHits: 'Нічого не знайдено', dm3Friends: 'Друзі',
      dm3Typing: '{n} друкує', dm3Tr: 'Перекласти', dm3TrOrig: 'Показати оригінал', dm3TrShow: 'Показати переклад', dm3TrLoad: 'Перекладаємо…', dm3TrBar: '{n} користується застосунком мовою: {l}', dm3TrAuto: 'Автопереклад', dm3TrGuess: '{n}, схоже, пише іншою мовою', dm3TrFrom: 'Перекладено з: {l}', dm3Ph: 'Напиши повідомлення…', dm3Send: 'Надіслати', dm3Read: 'Прочитано', dm3Sent: 'Надіслано', dm3Sending: 'Надсилання…', dm3Failed: 'Не надіслано — натисни, щоб повторити',
      dm3Today: 'Сьогодні', dm3Yday: 'Вчора', dm3Older: 'Завантажити попередні', dm3Online: 'у мережі', dm3Offline: 'не в мережі', dm3Profile: 'Профіль',
      dm3Hide: 'Видалити переписку', dm3HideQ: 'Видалити цю переписку для себе? У співрозмовника вона залишиться.', dm3You: 'Ти: ',
      dm3Write: 'Написати', dm3New: 'Нове повідомлення від {n}', dm3Open: 'Відкрити', dm3StartH: 'Почни розмову', dm3StartP: 'Привітайся з {n}. Посилання клікабельні, до 1000 символів.',
      dm3Who: 'Хто може писати мені', dm3Who_all: 'Будь-який гравець може надіслати тобі особисте повідомлення.', dm3Who_friends: 'Писати тобі можуть лише друзі.', dm3Who_none: 'Ніхто не може писати тобі (крім стаффу).',
      dm3NUnread: 'Непрочитані повідомлення', dm3NFrom: 'нових: {n}', dm3Hint: 'Enter — надіслати · Shift+Enter — новий рядок', dm3Staff: 'Стафф Konzte',
    },
    ru: {
      dms: 'Сообщения', n2_d_dms: 'Личные сообщения с игроками', dm3Title: 'Сообщения', dm3Search: 'Поиск переписок', dm3All: 'Все', dm3Unread: 'Непрочитанные',
      dm3NoneH: 'Переписок нет', dm3NoneP: 'Напиши другу из списка друзей — переписка появится здесь.', dm3ToFriends: 'К друзьям',
      dm3PickH: 'Выбери переписку', dm3PickP: 'Слева — список тех, с кем ты уже общался.', dm3NoHits: 'Ничего не найдено', dm3Friends: 'Друзья',
      dm3Typing: '{n} печатает', dm3Tr: 'Перевести', dm3TrOrig: 'Показать оригинал', dm3TrShow: 'Показать перевод', dm3TrLoad: 'Переводим…', dm3TrBar: '{n} пользуется приложением на языке: {l}', dm3TrAuto: 'Автоперевод', dm3TrGuess: '{n}, похоже, пишет на другом языке', dm3TrFrom: 'Переведено с: {l}', dm3Ph: 'Напиши сообщение…', dm3Send: 'Отправить', dm3Read: 'Прочитано', dm3Sent: 'Отправлено', dm3Sending: 'Отправка…', dm3Failed: 'Не отправлено — нажми, чтобы повторить',
      dm3Today: 'Сегодня', dm3Yday: 'Вчера', dm3Older: 'Загрузить предыдущие', dm3Online: 'в сети', dm3Offline: 'не в сети', dm3Profile: 'Профиль',
      dm3Hide: 'Удалить переписку', dm3HideQ: 'Удалить эту переписку для себя? У собеседника она останется.', dm3You: 'Ты: ',
      dm3Write: 'Написать', dm3New: 'Новое сообщение от {n}', dm3Open: 'Открыть', dm3StartH: 'Начни разговор', dm3StartP: 'Поздоровайся с {n}. Ссылки кликабельны, до 1000 символов.',
      dm3Who: 'Кто может писать мне', dm3Who_all: 'Любой игрок может отправить тебе личное сообщение.', dm3Who_friends: 'Писать тебе могут только друзья.', dm3Who_none: 'Никто не может писать тебе (кроме стаффа).',
      dm3NUnread: 'Непрочитанные сообщения', dm3NFrom: 'новых: {n}', dm3Hint: 'Enter — отправить · Shift+Enter — новая строка', dm3Staff: 'Стафф Konzte',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);
  const E = {
    uk: { 'Banned players cannot send messages': 'Заблоковані гравці не можуть надсилати повідомлення', 'You cannot message this player': 'Ти не можеш написати цьому гравцю', 'This player does not accept messages': 'Цей гравець не приймає повідомлень', 'This player accepts messages only from friends': 'Цей гравець приймає повідомлення лише від друзів', 'Message is empty': 'Порожнє повідомлення', 'Too many messages — wait a minute': 'Забагато повідомлень — зачекай хвилину', 'Too many new conversations — try later': 'Забагато нових розмов — спробуй пізніше', 'Bad value': 'Неприпустиме значення' },
    ru: { 'Banned players cannot send messages': 'Заблокированные игроки не могут отправлять сообщения', 'You cannot message this player': 'Ты не можешь написать этому игроку', 'This player does not accept messages': 'Этот игрок не принимает сообщения', 'This player accepts messages only from friends': 'Этот игрок принимает сообщения только от друзей', 'Message is empty': 'Пустое сообщение', 'Too many messages — wait a minute': 'Слишком много сообщений — подожди минуту', 'Too many new conversations — try later': 'Слишком много новых разговоров — попробуй позже', 'Bad value': 'Недопустимое значение' },
  };
  if (typeof SERVER_ERRORS !== 'undefined') for (const l of Object.keys(E)) Object.assign(SERVER_ERRORS[l] ||= {}, E[l]);
  if (typeof SERVER_ERRORS_RE !== 'undefined') {
    (SERVER_ERRORS_RE.uk ||= []).push([/^Message is too long \(max (\d+)\)$/, 'Повідомлення задовге (макс. $1)']);
    (SERVER_ERRORS_RE.ru ||= []).push([/^Message is too long \(max (\d+)\)$/, 'Сообщение слишком длинное (макс. $1)']);
  }
  const tr = (k, v = {}) => String((I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');

  const sv = h => `<svg viewBox="0 0 24 24">${h}</svg>`;
  const IC = {
    chat: sv('<path d="M5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7v6.5a2.5 2.5 0 0 1-2.5 2.5H9z"/>'),
    bubble: sv('<path d="M12 4.5c4.4 0 8 3 8 6.8s-3.6 6.7-8 6.7c-1 0-2-.1-2.9-.4L5 19.5l1.2-3.4C4.8 14.9 4 13.2 4 11.3c0-3.8 3.6-6.8 8-6.8z"/>'),
    search: sv('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
    send: sv('<path d="M4.5 12L20 4.5 15.5 20l-3.2-6.3z"/><path d="M12.3 13.7L20 4.5"/>'),
    check: sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    check2: sv('<path d="M2.5 12.5l4.5 4.5L16.5 7.5"/><path d="M11 16l1 1 9.5-9.5"/>'),
    clock: sv('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 1.5"/>'),
    warn: sv('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.2v.3"/>'),
    user: sv('<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.8 3.6-5.6 7-5.6s6.2 1.8 7 5.6"/>'),
    trash: sv('<path d="M5 7h14M9.5 7V4.5h5V7M7 7l1 13h8l1-13"/>'),
    friends: sv('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6-.3 4.8 1.2 5.5 4.3"/>'),
    lock: sv('<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>'),
    back: sv('<path d="M15 5l-7 7 7 7"/>'),
  };

  const D = { list: null, unread: 0, peer: null, convs: {}, q: '', f: 'all', loading: false, tmp: 0 };
  window.KZDM = D;
  const conv = uid => D.convs[uid];

  function loadList() {
    if (!S.token || !S.me?.gameId || D.loading) return Promise.resolve();
    D.loading = true;
    return api('/api/dm/list').then(r => { D.list = r.list || []; D.unread = r.unread || 0; badge(); if (S.page === 'dms' && V3()) paint(); else if (S.page === 'notifs') notifsPatch(); })
      .catch(() => {}).finally(() => { D.loading = false; });
  }
  async function openConv(uid, older) {
    const c = conv(uid);
    const before = older && c?.msgs?.length ? c.msgs.find(m => !m.tmp)?.id : '';
    const r = await api(`/api/dm/conv?uid=${encodeURIComponent(uid)}${before ? '&before=' + before : ''}`);
    if (older && c) { const have = new Set(c.msgs.map(m => m.id)); c.msgs = [...r.msgs.filter(m => !have.has(m.id)), ...c.msgs]; c.more = r.more; }
    else D.convs[uid] = { ...r, msgs: [...r.msgs, ...(c?.msgs || []).filter(m => m.tmp)] };
    Object.assign(conv(uid), { peer: r.peer, peerRead: r.peerRead, can: r.can, why: r.why, staffPeer: r.staffPeer });
    if (!older) conv(uid).more = r.more;
    markRead(uid);
  }
  function markRead(uid) {
    const it = D.list?.find(x => x.peer.id === uid);
    if (!(S.page === 'dms' && D.peer === uid && document.hasFocus())) return;
    if (it && it.unread) { D.unread = Math.max(0, D.unread - it.unread); it.unread = 0; badge(); }
    api('/api/dm/read', { uid }).catch(() => {});
  }

  async function send(text, retry) {
    const uid = D.peer; if (!uid) return;
    text = String(text || '').trim(); if (!text) return;
    const c = conv(uid) || (D.convs[uid] = { msgs: [], peer: { id: uid, nick: '…' }, can: true });
    let m = retry;
    if (m) { m.failed = false; } else { m = { id: 'tmp' + (++D.tmp), tmp: true, from: S.me.id, text, at: Date.now() }; c.msgs.push(m); }
    paint();
    try {
      const r = await api('/api/dm/send', { uid, text });
      const i = c.msgs.indexOf(m);
      if (c.msgs.some(x => x.id === r.msg.id)) { if (i >= 0) c.msgs.splice(i, 1); }
      else if (i >= 0) c.msgs[i] = r.msg; else c.msgs.push(r.msg);
      upsertList(c.peer, r.msg, true);
    } catch (e) { m.failed = true; m.err = e.message; toast(e.message, true); }
    paint();
  }

  function upsertList(peer, msg, mine) {
    if (!D.list) D.list = [];
    let it = D.list.find(x => x.peer.id === peer.id);
    if (!it) { it = { peer, unread: 0, peerRead: 0 }; D.list.unshift(it); }
    if (peer.nick && peer.nick !== '…') it.peer = { ...it.peer, ...peer };
    if (!it.last || it.last.id < msg.id || it.last.at <= msg.at) it.last = { id: msg.id, from: msg.from, text: String(msg.text).slice(0, 140), at: msg.at };
    if (!mine) { it.unread++; D.unread++; }
    D.list.sort((a, b) => (b.last?.at || 0) - (a.last?.at || 0));
    badge();
  }

  const typingOn = uid => (D.typing?.[uid] || 0) > Date.now();
  function typingPaint() {
    const el = document.getElementById('dm3-typing');
    if (el) { const on = typingOn(D.peer); el.hidden = !on; if (on) { const lg = el.parentElement; if (lg && lg.scrollHeight - lg.scrollTop - lg.clientHeight < 120) lg.scrollTop = lg.scrollHeight; } }
    document.querySelectorAll('[data-dm3peer]').forEach(b => b.classList.toggle('dm3-istyping', typingOn(b.dataset.dm3peer)));
  }
  let typingSent = 0;
  function sendTyping() {
    if (!D.peer || Date.now() - typingSent < 3000) return;
    typingSent = Date.now(); api('/api/dm/typing', { uid: D.peer }).catch(() => {});
  }
  function onDm(m) {
    if (m.t !== 'dm') return;
    if (m.ev === 'msg') {
      const mine = m.mine || m.msg.from === S.me?.id, uid = m.peer.id;
      if (!mine && D.typing) delete D.typing[uid];
      const c = conv(uid);
      if (c && !c.msgs.some(x => x.id === m.msg.id)) {
        const tmp = mine && c.msgs.find(x => x.tmp && !x.failed && x.text === m.msg.text);
        if (tmp) c.msgs[c.msgs.indexOf(tmp)] = m.msg; else c.msgs.push(m.msg);
        if (c.peer && m.peer.nick) c.peer = { ...c.peer, ...m.peer };
      }
      const it = D.list?.find(x => x.peer.id === uid);
      if (!it || !it.last || it.last.id !== m.msg.id) upsertList(m.peer, m.msg, mine);
      if (!mine) {
        const here = S.page === 'dms' && D.peer === uid;
        if (here && document.hasFocus()) markRead(uid);
        else {
          if (S.sound !== false) sfx('msg');
          if (!document.hasFocus()) K.attention?.(`${m.peer.nick}: ${String(m.msg.text).slice(0, 90)}`);
          if (!here && V3() && typeof actionToast === 'function') {
            document.querySelectorAll(`#toast .toast[data-dm3t="${CSS.escape(uid)}"]`).forEach(x => x.remove());
            actionToast(tr('dm3New', { n: m.peer.nick }), [[tr('dm3Open'), () => go('dms', uid)]]);
            const last = document.querySelector('#toast')?.lastElementChild; if (last) last.dataset.dm3t = uid;
          }
        }
      }
      if (S.page === 'dms' && V3()) paint(); else if (S.page === 'notifs') notifsPatch();
    } else if (m.ev === 'typing') {
      (D.typing ||= {})[m.peer] = Date.now() + 6000; typingPaint();
      clearTimeout(D.typingT); D.typingT = setTimeout(typingPaint, 6100);
    } else if (m.ev === 'read') {
      const c = conv(m.peer); if (c) c.peerRead = Math.max(c.peerRead || 0, m.upTo);
      const it = D.list?.find(x => x.peer.id === m.peer); if (it) it.peerRead = m.upTo;
      if (S.page === 'dms' && D.peer === m.peer) paint();
    } else if (m.ev === 'readme') {
      const it = D.list?.find(x => x.peer.id === m.peer);
      if (it?.unread) { D.unread = Math.max(0, D.unread - it.unread); it.unread = 0; badge(); if (S.page === 'dms') paint(); }
    } else if (m.ev === 'hide') {
      delete D.convs[m.peer]; if (D.peer === m.peer) D.peer = null; loadList();
    }
  }
  const _connect = connect;
  connect = function () {
    const r = _connect.apply(this, arguments);
    const ws = S.ws;
    if (ws && !ws._dm3) {
      ws._dm3 = true;
      ws.addEventListener('message', e => { let m; try { m = JSON.parse(e.data); } catch { return; } if (m?.t === 'dm') try { onDm(m); } catch (err) { console.warn('[dm3]', err); } });
      ws.addEventListener('open', () => { loadList(); if (D.peer && S.page === 'dms') openConv(D.peer).then(paint).catch(() => {}); });
    }
    return r;
  };
  window.addEventListener('focus', () => { if (S.page === 'dms' && D.peer) { const it = D.list?.find(x => x.peer.id === D.peer); if (it?.unread) markRead(D.peer); } });

  const nav = document.getElementById('nav');
  let navBtn = nav?.querySelector('.nav-btn[data-go="dms"]');
  if (nav && !navBtn) {
    navBtn = document.createElement('button');
    navBtn.className = 'nav-btn'; navBtn.dataset.go = 'dms'; navBtn.hidden = true;
    navBtn.innerHTML = `${IC.bubble}<span>${esc(tr('dms'))}</span><i class="n2-cnt" hidden></i>`;
    navBtn.onclick = () => go('dms');
    const after = nav.querySelector('.nav-btn[data-go="friends"]');
    if (after) after.after(navBtn); else nav.appendChild(navBtn);
  }
  function badge() {
    if (!navBtn) return;
    const c = navBtn.querySelector('.n2-cnt'); if (!c) return;
    const n = V3() ? D.unread : 0;
    c.hidden = !n; c.textContent = n > 99 ? '99+' : n || ''; c.className = 'n2-cnt';
  }
  const syncNav = () => { if (!navBtn) return; const on = V3() && !!S.me?.gameId; if (navBtn.hidden === on) navBtn.hidden = !on; const s = navBtn.querySelector('span'); if (s && s.textContent !== tr('dms')) s.textContent = tr('dms'); badge(); };
  syncNav(); setInterval(syncNav, 2000);

  const day = ts => { const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const dayLabel = ts => { const t0 = day(Date.now()), d = day(ts); return d === t0 ? tr('dm3Today') : d === t0 - 864e5 ? tr('dm3Yday') : new Date(ts).toLocaleDateString(LOCALE[LANG] || 'en-GB', { day: 'numeric', month: 'long', year: new Date(ts).getFullYear() === new Date().getFullYear() ? undefined : 'numeric' }); };
  const hm = ts => new Date(ts).toLocaleTimeString(LOCALE[LANG] || 'en-GB', { hour: '2-digit', minute: '2-digit' });
  const whenShort = ts => day(ts) === day(Date.now()) ? hm(ts) : day(ts) === day(Date.now()) - 864e5 ? tr('dm3Yday') : new Date(ts).toLocaleDateString(LOCALE[LANG] || 'en-GB', { day: '2-digit', month: '2-digit' });
  const URL_RE = /https?:\/\/[^\s<>"'`]+/g;
  function linkify(text) {
    const s = String(text || ''); let out = '', last = 0;
    for (const mt of s.matchAll(URL_RE)) {
      let u = mt[0]; const trail = (u.match(/[.,!?;:)\]]+$/) || [''])[0]; if (trail) u = u.slice(0, -trail.length);
      out += esc(s.slice(last, mt.index)) + `<a class="dm3-a" href="#" data-dm3url="${esc(u)}" title="${esc(u)}">${esc(u.length > 80 ? u.slice(0, 77) + '…' : u)}</a>`;
      last = mt.index + u.length;
    }
    return out + esc(s.slice(last));
  }
  const isOn = p => { const f = S.live?.friends?.list?.find(x => x.id === p.id); return f ? f.status !== 'offline' : !!p.on; };

  function listHtml() {
    const q = D.q.trim().toLowerCase();
    const all = D.list || [];
    let rows = all.filter(x => (D.f !== 'unread' || x.unread) && (!q || String(x.peer.nick || '').toLowerCase().includes(q)));
    const item = x => {
      const l = x.last || {}, mine = l.from === S.me.id;
      return `<button class="dm3-it ${D.peer === x.peer.id ? 'on' : ''} ${x.unread ? 'new' : ''}" data-dm3peer="${esc(x.peer.id)}">
        <span class="dm3-av">${avaF(x.peer)}${isOn(x.peer) ? '<i class="dm3-on"></i>' : ''}</span>
        <span class="dm3-im"><span class="dm3-ir"><b class="nkl">${nickHtml(x.peer)}</b><small class="dm3-w">${l.at ? esc(whenShort(l.at)) : ''}</small></span>
          <span class="dm3-ir"><span class="dm3-lt">${mine ? `<i class="dm3-me">${x.peerRead >= l.id ? IC.check2 : IC.check}</i>` : ''}${esc(String(l.text || '').replace(/\s+/g, ' '))}</span>${x.unread ? `<i class="dm3-u num">${x.unread > 99 ? '99+' : x.unread}</i>` : ''}</span></span></button>`;
    };
    let html = rows.map(item).join('');
    if (q) {
      const have = new Set(all.map(x => x.peer.id));
      const fr = (S.live?.friends?.list || []).filter(f => !have.has(f.id) && String(f.nick || '').toLowerCase().includes(q)).slice(0, 8);
      if (fr.length) html += `<div class="dm3-sub">${tr('dm3Friends')}</div>` + fr.map(f => `<button class="dm3-it" data-dm3peer="${esc(f.id)}"><span class="dm3-av">${avaF(f)}${f.status !== 'offline' ? '<i class="dm3-on"></i>' : ''}</span><span class="dm3-im"><b class="nkl">${nickHtml(f)}</b><span class="dm3-lt mute">${tr('dm3Write')}</span></span></button>`).join('');
    }
    if (!html) {
      if (!all.length && !q) return `<div class="dm3-empty sm"><div class="dm3-ic">${IC.bubble}</div><h3>${tr('dm3NoneH')}</h3><p class="mute">${tr('dm3NoneP')}</p><button class="btn ghost sm" data-dm3go="friends">${tr('dm3ToFriends')}</button></div>`;
      return `<div class="dm3-empty sm"><p class="mute">${D.list ? tr('dm3NoHits') : t('loading')}</p></div>`;
    }
    return html;
  }

  Object.assign(SERVER_ERRORS.uk ||= {}, { 'Translation is unavailable — try later': 'Переклад зараз недоступний — спробуй пізніше', 'Too many translations — wait a minute': 'Забагато перекладів — зачекай хвилину', 'Message not found': 'Повідомлення не знайдено' });
  Object.assign(SERVER_ERRORS.ru ||= {}, { 'Translation is unavailable — try later': 'Перевод сейчас недоступен — попробуй позже', 'Too many translations — wait a minute': 'Слишком много переводов — подожди минуту', 'Message not found': 'Сообщение не найдено' });
  const TRIC = '<svg viewBox="0 0 24 24"><path d="M4 5h9M8.5 3v2M6 5c.6 3.2 2.6 5.7 5.5 7M11 5c-.8 3.6-3.3 6.6-7 8.5M13 21l4-9 4 9M14.4 18h5.2"/></svg>';
  const LNAME = { en: 'English', uk: 'Українська', ru: 'Русский', es: 'Español', pt: 'Português', de: 'Deutsch', fr: 'Français', pl: 'Polski', tr: 'Türkçe' };
  const lsg = k => { try { return localStorage.getItem(k); } catch { return null; } }, lss = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const autoOn = uid => lsg('kz-dm3-auto-' + uid) === '1';
  const trOf = (uid, id) => D.tr?.[uid]?.[id];
  const CYR = ['uk', 'ru'];
  function peerLang(p, c) {
    if (p?.lang) return p.lang;
    const theirs = (c?.msgs || []).filter(m => m.from !== S.me?.id).slice(-6).map(m => m.text).join(' ');
    const cyr = (theirs.match(/[а-яіїєґё]/gi) || []).length, lat = (theirs.match(/[a-z]/gi) || []).length;
    if (cyr + lat < 6) return null;
    return cyr > lat ? (/[іїєґ]/i.test(theirs) ? 'uk' : 'ru') : 'en';
  }
  const showBar = (p, c) => p?.lang ? p.lang !== LANG : (g => !!g && CYR.includes(g) !== CYR.includes(LANG))(peerLang(p, c));
  setInterval(() => langReport(), 30_000); setTimeout(() => langReport(), 3000);
  function langReport() { if (S.token && S.me && D.langSent !== LANG) { D.langSent = LANG; api('/api/dm/lang', { lang: LANG }).catch(() => { D.langSent = null; }); } }
  async function translate(uid, id) {
    const box = ((D.tr ||= {})[uid] ||= {});
    if (box[id]?.text || box[id]?.busy) { if (box[id]?.text) { box[id].show = !box[id].show; paintChat(); } return; }
    box[id] = { busy: true, show: true }; paintChat();
    try { const r = await api('/api/dm/translate', { uid, id, to: LANG }); box[id] = { text: r.text, src: r.src, show: true }; }
    catch (e) { box[id] = { err: tErr(e.message) }; }
    if (D.peer === uid) paintChat();
  }
  function autoTranslate() {
    const uid = D.peer, c = uid && conv(uid);
    if (!c || !autoOn(uid)) return;
    const todo = (c.msgs || []).filter(m => m.from !== S.me.id && !m.tmp && !trOf(uid, m.id)).slice(-30);
    (async () => { for (const m of todo) { if (D.peer !== uid || !autoOn(uid)) break; await translate(uid, m.id); } })();
  }
  const trHtml = (uid, m) => {
    const x = trOf(uid, m.id); if (!x) return '';
    if (x.busy) return `<div class="dm3-trx mute">${tr('dm3TrLoad')}</div>`;
    if (x.err) return `<div class="dm3-trx lose">${esc(x.err)}</div>`;
    if (!x.show) return '';
    return `<div class="dm3-trx"><span>${linkify(x.text)}</span><small class="mute">${x.src && LNAME[x.src] ? esc(tr('dm3TrFrom', { l: LNAME[x.src] })) + ' · ' : ''}<button class="dm3-trl" data-dm3tr="${esc(m.id)}">${tr('dm3TrOrig')}</button></small></div>`;
  };
  function chatHtml() {
    if (!D.peer) return `<div class="dm3-empty"><div class="dm3-ic">${IC.bubble}</div><h3>${tr('dm3PickH')}</h3><p class="mute">${tr('dm3PickP')}</p></div>`;
    const c = conv(D.peer);
    if (!c) return `<div class="dm3-empty"><p class="mute">${t('loading')}</p></div>`;
    const p = c.peer || { id: D.peer, nick: '…' }, on = isOn(p);
    const msgs = c.msgs || [];
    const lastMine = [...msgs].reverse().find(m => m.from === S.me.id && !m.tmp);
    let body = '', prevDay = 0, prevFrom = null, prevAt = 0;
    for (const m of msgs) {
      const d = day(m.at);
      if (d !== prevDay) { body += `<div class="dm3-day"><span>${esc(dayLabel(m.at))}</span></div>`; prevDay = d; prevFrom = null; }
      const mine = m.from === S.me.id, cont = prevFrom === m.from && m.at - prevAt < 5 * 60e3;
      const st = !mine ? '' : m.failed ? `<i class="dm3-st bad" title="${esc(tr('dm3Failed'))}">${IC.warn}</i>` : m.tmp ? `<i class="dm3-st" title="${esc(tr('dm3Sending'))}">${IC.clock}</i>` : `<i class="dm3-st ${c.peerRead >= m.id ? 'rd' : ''}" title="${esc(tr(c.peerRead >= m.id ? 'dm3Read' : 'dm3Sent'))}">${c.peerRead >= m.id ? IC.check2 : IC.check}</i>`;
      body += `<div class="dm3-m ${mine ? 'me' : 'them'} ${cont ? 'cont' : ''} ${m.tmp ? 'tmp' : ''} ${m.failed ? 'fail' : ''}" ${m.failed ? `data-dm3retry="${esc(m.id)}"` : ''}>
        <div class="dm3-b">${!mine && trOf(D.peer, m.id)?.show && trOf(D.peer, m.id)?.text ? trHtml(D.peer, m) : `<span class="dm3-tx">${linkify(m.text)}</span>${!mine ? trHtml(D.peer, m) : ''}`}<span class="dm3-mt">${!mine && !m.tmp ? `<button class="dm3-trb ${trOf(D.peer, m.id)?.text ? 'on' : ''}" data-dm3tr="${esc(m.id)}" title="${esc(trOf(D.peer, m.id)?.show ? tr('dm3TrOrig') : tr('dm3Tr'))}">${TRIC}</button>` : ''}${esc(hm(m.at))}${st}</span></div></div>`;
      if (mine && lastMine && m.id === lastMine.id && c.peerRead >= m.id) body += `<div class="dm3-seen">${IC.check2}${tr('dm3Read')}</div>`;
      prevFrom = m.from; prevAt = m.at;
    }
    if (!msgs.length) body = `<div class="dm3-empty in"><div class="dm3-ic">${IC.chat}</div><h3>${tr('dm3StartH')}</h3><p class="mute">${esc(tr('dm3StartP', { n: p.nick }))}</p></div>`;
    body += `<div class="dm3-typing" id="dm3-typing" ${typingOn(D.peer) ? '' : 'hidden'}><span class="dm3-dots"><i></i><i></i><i></i></span>${esc(tr('dm3Typing', { n: p.nick }))}</div>`;
    const comp = c.can === false
      ? `<div class="dm3-cant">${IC.lock}<span>${esc(tErr(c.why || 'You cannot message this player'))}</span></div>`
      : `<div class="dm3-comp"><textarea id="dm3-in" rows="1" maxlength="1000" placeholder="${esc(tr('dm3Ph'))}"></textarea>
          <button class="btn dm3-send" id="dm3-send" title="${esc(tr('dm3Send'))}">${IC.send}</button></div>
        <div class="dm3-hint mute"><span>${tr('dm3Hint')}</span><span id="dm3-cnt" class="num"></span></div>`;
    return `<div class="dm3-ch"><button class="btn ghost sm dm3-backb" data-dm3back title="${esc(tr('dm3Title'))}">${IC.back}</button>
        <span class="dm3-av" data-dm3prof="${esc(p.id)}">${avaF(p)}${on ? '<i class="dm3-on"></i>' : ''}</span>
        <div class="dm3-chm" data-dm3prof="${esc(p.id)}"><b class="nkl">${nickHtml(p)}</b><small class="${on ? 'win' : 'mute'}">${c.staffPeer ? tr('dm3Staff') + ' · ' : ''}${on ? tr('dm3Online') : tr('dm3Offline')}</small></div>
        <span class="grow"></span>
        <button class="btn ghost sm" data-dm3prof="${esc(p.id)}">${IC.user}${tr('dm3Profile')}</button>
        ${msgs.length ? `<button class="btn ghost sm dm3-ib" data-dm3hide title="${esc(tr('dm3Hide'))}">${IC.trash}</button>` : ''}</div>
      ${showBar(p, c) ? `<div class="dm3-trbar">${TRIC}<span>${esc(p.lang ? tr('dm3TrBar', { n: p.nick, l: LNAME[p.lang] || p.lang }) : tr('dm3TrGuess', { n: p.nick }))}</span><span class="grow"></span><label class="dm3-sw"><span>${tr('dm3TrAuto')}</span><input type="checkbox" data-dm3auto ${autoOn(p.id) ? 'checked' : ''}><i></i></label></div>` : ''}
      <div class="dm3-msgs" data-scroll="dm3m">${c.more ? `<button class="btn ghost sm dm3-more" data-dm3more>${tr('dm3Older')}</button>` : ''}${body}</div>
      ${comp}`;
  }

  function paint() {
    if (S.page !== 'dms' || !V3()) return;
    const have = document.querySelector('#view .dm3');
    if (!have || have.dataset.lang !== LANG) {
      render(`<div class="dm3 ${D.peer ? 'has-peer' : ''}" data-lang="${esc(LANG)}">
        <aside class="card dm3-side"><div class="dm3-sh"><h2>${tr('dm3Title')}</h2>${D.unread ? `<i class="dm3-u num" id="dm3-tot">${D.unread}</i>` : '<i class="dm3-u num" id="dm3-tot" hidden></i>'}</div>
          <div class="dm3-search">${IC.search}<input id="dm3-q" placeholder="${esc(tr('dm3Search'))}" autocomplete="off"></div>
          <div class="dm3-chips" id="dm3-chips"></div>
          <div class="dm3-list" id="dm3-list"></div></aside>
        <section class="card dm3-chat" id="dm3-chat"></section></div>`);
      const q = document.getElementById('dm3-q'); q.value = D.q;
      q.oninput = () => { D.q = q.value; paintList(); };
      bindOnce();
    }
    document.querySelector('#view .dm3')?.classList.toggle('has-peer', !!D.peer);
    paintList();
    paintChat();
  }
  function paintList() {
    const tot = document.getElementById('dm3-tot'); if (tot) { tot.hidden = !D.unread; tot.textContent = D.unread; }
    const ch = document.getElementById('dm3-chips');
    if (ch) ch.innerHTML = `<button class="s3-chip ${D.f === 'all' ? 'on' : ''}" data-dm3f="all">${tr('dm3All')}</button><button class="s3-chip ${D.f === 'unread' ? 'on' : ''}" data-dm3f="unread">${D.unread ? `<b class="num">${D.unread}</b>` : ''}${tr('dm3Unread')}</button>`;
    const l = document.getElementById('dm3-list'); if (l) { const s = l.scrollTop; l.innerHTML = listHtml(); l.scrollTop = s; }
  }
  function paintChat() {
    const box = document.getElementById('dm3-chat'); if (!box) return;
    const old = box.querySelector('.dm3-msgs');
    const atBottom = !old || old.scrollTop + old.clientHeight >= old.scrollHeight - 30, prevTop = old?.scrollTop, prevH = old?.scrollHeight;
    const inp = document.getElementById('dm3-in'), val = inp?.value ?? (D.draft?.[D.peer] || ''), focused = document.activeElement === inp, sel = inp?.selectionStart;
    const samePeer = box.dataset.peer === String(D.peer || '');
    box.innerHTML = chatHtml(); box.dataset.peer = D.peer || '';
    langReport(); if (!samePeer || !D.trAutoBusy) setTimeout(autoTranslate, 0);
    const nm = box.querySelector('.dm3-msgs');
    if (nm) nm.scrollTop = samePeer && !atBottom ? (D.keepTop ? nm.scrollHeight - prevH + prevTop : prevTop) : nm.scrollHeight;
    D.keepTop = false;
    const ni = document.getElementById('dm3-in');
    if (ni) {
      ni.value = samePeer ? val : (D.draft?.[D.peer] || '');
      grow(ni); count(ni);
      if (focused || !samePeer) { ni.focus(); try { if (samePeer && sel != null) ni.setSelectionRange(sel, sel); } catch {} }
    }
  }
  const grow = el => { el.style.height = 'auto'; el.style.height = Math.min(160, el.scrollHeight) + 'px'; el.style.overflowY = el.scrollHeight > 160 ? 'auto' : 'hidden'; };
  const count = el => { const c = document.getElementById('dm3-cnt'); if (c) { const n = el.value.length; c.textContent = n > 800 ? `${n} / 1000` : ''; c.classList.toggle('lose', n >= 1000); } };

  function bindOnce() {
    const root = document.querySelector('#view .dm3'); if (!root || root._dm3) return; root._dm3 = true;
    root.addEventListener('change', e => { const a = e.target.closest?.('[data-dm3auto]'); if (a && D.peer) { lss('kz-dm3-auto-' + D.peer, a.checked ? '1' : '0'); if (a.checked) autoTranslate(); } });
    root.addEventListener('click', e => {
      const a = e.target.closest('[data-dm3url]'); if (a) { e.preventDefault(); const u = a.dataset.dm3url; if (/^https?:\/\//i.test(u)) K.open(u); return; }
      const pe = e.target.closest('[data-dm3peer]'); if (pe) return selectPeer(pe.dataset.dm3peer);
      const f = e.target.closest('[data-dm3f]'); if (f) { D.f = f.dataset.dm3f; return paintList(); }
      const g = e.target.closest('[data-dm3go]'); if (g) return go(g.dataset.dm3go);
      const pr = e.target.closest('[data-dm3prof]'); if (pr) return go('profile', pr.dataset.dm3prof);
      if (e.target.closest('[data-dm3back]')) { D.peer = null; return paint(); }
      if (e.target.closest('[data-dm3more]')) { D.keepTop = true; return openConv(D.peer, true).then(paintChat).catch(err => toast(err.message, true)); }
      if (e.target.closest('[data-dm3hide]')) {
        if (!confirm(tr('dm3HideQ'))) return;
        const uid = D.peer;
        return api('/api/dm/delete', { uid }).then(() => { delete D.convs[uid]; D.list = (D.list || []).filter(x => x.peer.id !== uid); D.peer = null; loadList(); paint(); }).catch(err => toast(err.message, true));
      }
      const tb = e.target.closest('[data-dm3tr]'); if (tb && D.peer) { e.stopPropagation(); translate(D.peer, Number(tb.dataset.dm3tr)); return; }
      const rt = e.target.closest('[data-dm3retry]'); if (rt) { const m = conv(D.peer)?.msgs.find(x => String(x.id) === rt.dataset.dm3retry); if (m) send(m.text, m); return; }
      if (e.target.closest('#dm3-send')) return submit();
    });
    root.addEventListener('keydown', e => {
      if (e.target.id !== 'dm3-in') return;
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); submit(); }
    });
    root.addEventListener('input', e => { if (e.target.id === 'dm3-in') { grow(e.target); count(e.target); if (e.target.value.trim()) sendTyping(); (D.draft ||= {})[D.peer] = e.target.value; } });
  }
  function submit() {
    const i = document.getElementById('dm3-in'); if (!i) return;
    const v = i.value.trim(); if (!v) return;
    if (v.length > 1000) return toast(tErr('Message is too long (max 1000)'), true);
    i.value = ''; if (D.draft) D.draft[D.peer] = ''; grow(i); count(i);
    send(v);
  }
  function selectPeer(uid) {
    if (!uid || uid === S.me?.id) return;
    D.peer = uid;
    paint();
    openConv(uid).then(() => { if (D.peer === uid) paint(); }).catch(e => { toast(e.message, true); if (D.peer === uid && !conv(uid)) { D.peer = null; paint(); } });
  }

  const _go = go;
  go = function (page, arg) {
    if (page === 'dms') {
      if (!V3()) return;
      if (arg) D.peer = String(arg);
      if (S.page === 'dms' && $('#view .dm3')) { if (arg) selectPeer(String(arg)); return; }
      const r = _go.apply(this, arguments);
      if (D.peer) selectPeer(D.peer);
      loadList();
      return r;
    }
    return _go.apply(this, arguments);
  };
  const _refresh = refresh;
  refresh = function () {
    syncNav();
    if (S.page === 'dms' && S.me?.gameId) {
      if (V3()) return paint();
      S.page = 'play'; markNav();
    }
    const r = _refresh.apply(this, arguments);
    if (V3() && S.me?.gameId) {
      if (S.page === 'friends') setTimeout(friendsPatch, 0);
      if (S.page === 'notifs') setTimeout(notifsPatch, 0);
    }
    return r;
  };
  window.KZOpenDM = uid => go('dms', uid);

  if (typeof renderProfile === 'function') {
    const _rp = renderProfile;
    renderProfile = async function () {
      const r = await _rp.apply(this, arguments);
      try { profilePatch(); } catch (e) { console.warn('[dm3]', e); }
      return r;
    };
  }
  function profilePatch() {
    if (!V3() || S.page !== 'profile' || !S.profileId || S.profileId === S.me?.id) return;
    const acts = document.querySelector('#view .pf3-acts'); if (!acts || acts.querySelector('[data-dm3w]')) return;
    const b = document.createElement('button');
    b.className = 'btn ghost sm'; b.dataset.dm3w = S.profileId;
    b.innerHTML = `${IC.bubble}${esc(tr('dm3Write'))}`;
    b.onclick = () => go('dms', b.dataset.dm3w);
    const inv = acts.querySelector('[data-invite]');
    if (inv) inv.after(b); else acts.prepend(b);
  }

  function friendsPatch() {
    if (S.page !== 'friends') return;
    document.querySelectorAll('#view .so3-fc').forEach(card => {
      const id = card.querySelector('[data-so3prof]')?.dataset.so3prof, bx = card.querySelector('.so3-fcb');
      if (!id || !bx || bx.querySelector('[data-dm3w]')) return;
      const b = document.createElement('button');
      b.className = 'btn ghost sm so3-ib dm3-fb'; b.dataset.dm3w = id; b.title = tr('dm3Write');
      const it = D.list?.find(x => x.peer.id === id);
      b.innerHTML = IC.bubble + (it?.unread ? `<i class="dm3-u num">${it.unread}</i>` : '');
      b.onclick = e => { e.stopPropagation(); go('dms', id); };
      const rm = bx.querySelector('[data-fr-rm]'); rm ? rm.before(b) : bx.append(b);
    });
  }

  function notifsPatch() {
    if (S.page !== 'notifs' || !V3()) return;
    const main = document.querySelector('#view .so3-n .s3-main'); if (!main) return;
    main.querySelector('.dm3-nc')?.remove();
    const un = (D.list || []).filter(x => x.unread);
    if (!un.length) return;
    const card = document.createElement('div');
    card.className = 'card so3-nl dm3-nc';
    card.innerHTML = `<div class="dm3-nch"><span class="p3-h">${tr('dm3NUnread')}</span><b class="num">${D.unread}</b></div>` + un.slice(0, 8).map(x => `<div class="so3-ni new click" data-dm3n="${esc(x.peer.id)}">
      <i class="so3-nic dm3-nic">${IC.bubble}</i>${avaF(x.peer, 'sm')}
      <div class="grow so3-nim"><div><b class="nkl">${nickHtml(x.peer)}</b> <span class="mute">${esc(String(x.last?.text || '').replace(/\s+/g, ' ').slice(0, 90))}</span></div>
        <span class="so3-nt">${tr('dms')} · ${esc(tr('dm3NFrom', { n: x.unread }))} · ${esc(fmtDT(x.last?.at || Date.now()))}</span></div>
      <button class="btn sm">${tr('dm3Open')}</button><i class="so3-ndot"></i></div>`).join('');
    card.querySelectorAll('[data-dm3n]').forEach(r => r.onclick = () => go('dms', r.dataset.dm3n));
    const bar = main.querySelector('.so3-nbar'); bar ? bar.after(card) : main.prepend(card);
  }

  if (typeof renderSettings === 'function') {
    const _rs = renderSettings;
    renderSettings = async function () {
      const r = await _rs.apply(this, arguments);
      try { settingsPatch(); } catch (e) { console.warn('[dm3]', e); }
      return r;
    };
  }
  function settingsPatch() {
    if (!V3() || S.page !== 'settings') return;
    const view = document.getElementById('view');
    if (view.querySelector('.dm3-pref')) return;
    const grp = view.querySelector('[data-so3pref="invites"]')?.closest('.so3-grp');
    const privOn = view.querySelector('.setnav [data-stt="privacy"].on');
    const host = grp || (privOn ? (view.querySelector('.setpanel .so3-groups .so3-grp:last-child') || view.querySelector('.setpanel')) : null);
    if (!host) return;
    const v = S.me?.prefs?.dm || 'all';
    const row = document.createElement('div');
    row.className = 'srow dm3-pref';
    row.innerHTML = `<div><b>${tr('dm3Who')}</b><span>${tr('dm3Who_' + v)}</span></div><div><div class="seg sm">${[['all', 'so3IvAll'], ['friends', 'so3IvFriends'], ['none', 'so3IvNone']].map(([k, l]) => `<button data-dm3pref="${k}" class="${v === k ? 'on' : ''}">${esc(tr(l) !== l ? tr(l) : k)}</button>`).join('')}</div></div>`;
    host.appendChild(row);
    row.querySelectorAll('[data-dm3pref]').forEach(b => b.onclick = run(async () => {
      S.me = await api('/api/dm/prefs', { dm: b.dataset.dm3pref }); sfx('ok');
      row.querySelectorAll('[data-dm3pref]').forEach(x => x.classList.toggle('on', x === b));
      row.querySelector('span').textContent = tr('dm3Who_' + b.dataset.dm3pref);
    }));
  }

  if (S.ws && !S.ws._dm3) { const ws = S.ws; ws._dm3 = true; ws.addEventListener('message', e => { let m; try { m = JSON.parse(e.data); } catch { return; } if (m?.t === 'dm') onDm(m); }); loadList(); }
})();
