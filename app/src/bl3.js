(() => {
  const L = {
    en: {
      bl3T: 'Blacklist', bl3D: 'Players on this list cannot invite you to a party, send you friend requests, invite you to a clan or message you — even if they were your friends. They are not told they are blocked.',
      bl3MM: 'Matchmaking is not affected: you can still end up in the same match.',
      bl3Lim: 'Slots: no Premium — {a}, Premium — {b}, Premium+ — {c}.', bl3More: 'More slots with Premium', bl3Find: 'Find a player by nickname',
      bl3Empty: 'The list is empty. Players you block will appear here.', bl3Add: 'Block', bl3Rm: 'Unblock', bl3In: 'Blocked',
      bl3Full: 'The list is full', bl3NoHits: 'No players found', bl3Q: 'Block {n}? They will be removed from your friends.',
      bl3Done: '{n} is blocked', bl3Undone: '{n} is unblocked', bl3PB: 'Block player', bl3PU: 'Unblock player',
    },
    uk: {
      bl3T: 'Чорний список', bl3D: 'Гравці зі списку не зможуть кликати тебе в паті, надсилати запити в друзі, запрошувати в клан і писати тобі — навіть якщо вони були в друзях. Вони не дізнаються, що їх заблоковано.',
      bl3MM: 'На матчмейкінг це не впливає: ви все одно можете потрапити в один матч.',
      bl3Lim: 'Місць: без Premium — {a}, Premium — {b}, Premium+ — {c}.', bl3More: 'Більше місць із Premium', bl3Find: 'Знайти гравця за ніком',
      bl3Empty: 'Список порожній. Тут зʼявляться гравці, яких ти заблокуєш.', bl3Add: 'Заблокувати', bl3Rm: 'Розблокувати', bl3In: 'Заблоковано',
      bl3Full: 'Список заповнено', bl3NoHits: 'Гравців не знайдено', bl3Q: 'Заблокувати {n}? Гравця буде видалено з друзів.',
      bl3Done: '{n} заблоковано', bl3Undone: '{n} розблоковано', bl3PB: 'Заблокувати гравця', bl3PU: 'Розблокувати гравця',
    },
    ru: {
      bl3T: 'Чёрный список', bl3D: 'Игроки из списка не смогут звать тебя в пати, отправлять запросы в друзья, приглашать в клан и писать тебе — даже если они были в друзьях. Они не узнают, что заблокированы.',
      bl3MM: 'На матчмейкинг это не влияет: вы всё равно можете попасть в один матч.',
      bl3Lim: 'Мест: без Premium — {a}, Premium — {b}, Premium+ — {c}.', bl3More: 'Больше мест с Premium', bl3Find: 'Найти игрока по нику',
      bl3Empty: 'Список пуст. Здесь появятся игроки, которых ты заблокируешь.', bl3Add: 'Заблокировать', bl3Rm: 'Разблокировать', bl3In: 'Заблокирован',
      bl3Full: 'Список заполнен', bl3NoHits: 'Игроки не найдены', bl3Q: 'Заблокировать {n}? Игрок будет удалён из друзей.',
      bl3Done: '{n} заблокирован', bl3Undone: '{n} разблокирован', bl3PB: 'Заблокировать игрока', bl3PU: 'Разблокировать игрока',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);
  const E = {
    uk: { 'Blacklist is full': 'Чорний список заповнено', 'Unblock this player first': 'Спершу розблокуй цього гравця', 'Too many changes, try again later': 'Забагато змін, спробуй пізніше', 'This player does not accept clan invites': 'Гравець не приймає запрошення в клан' },
    ru: { 'Blacklist is full': 'Чёрный список заполнен', 'Unblock this player first': 'Сначала разблокируй этого игрока', 'Too many changes, try again later': 'Слишком много изменений, попробуй позже', 'This player does not accept clan invites': 'Игрок не принимает приглашения в клан' },
  };
  try { for (const [l, m] of Object.entries(E)) Object.assign(SERVER_ERRORS[l] ||= {}, m); } catch {}
  const tr = (k, v) => { let s = (I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k; if (v) s = s.replace(/\{(\w+)\}/g, (m, x) => v[x] ?? m); return s; };
  const ON = () => !!window.KZ_V3?.();
  const sv = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const IC = {
    ban: sv('<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>'), search: sv('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
    crown: sv('<path d="M4 17.5h16M5 15l-1.5-8 5 4 3.5-6 3.5 6 5-4L19 15z"/>'), info: sv('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.5v.5"/>'),
  };

  const B = { data: null, loading: null, q: '', res: null, seq: 0 };
  const ids = () => new Set((B.data?.list || []).map(p => p.id));
  function load() {
    return B.loading ||= api('/api/blacklist').then(d => { B.data = d; return d; }).finally(() => { B.loading = null; });
  }
  async function setBlocked(p, on) {
    const d = await api('/api/blacklist/' + (on ? 'add' : 'remove'), { uid: p.id });
    B.data = d; toast(tr(on ? 'bl3Done' : 'bl3Undone', { n: p.nick || '' })); try { sfx('ok'); } catch {}
    return d;
  }
  const busy = fn => async function (...a) { if (this?.disabled) return; if (this) this.disabled = true; try { await fn.apply(this, a); } catch (e) { toast(e.message, true); } finally { if (this?.isConnected) this.disabled = false; } };

  const row = (p, act) => `<div class="bl3-row">${avaF(p, 'sm')}<div class="bl3-who"><div class="nkl">${nickHtml(p)}</div><span class="mute">ID ${esc(p.gameId || '')}</span></div>${act}</div>`;
  function resHtml() {
    if (B.q.length < 2) return '';
    if (!B.res) return `<div class="bl3-res"><div class="mute bl3-pad">${t('loading')}</div></div>`;
    const mine = ids(), full = (B.data?.list.length || 0) >= (B.data?.limit || 0);
    const list = B.res.filter(p => p.id !== S.me.id);
    if (!list.length) return `<div class="bl3-res"><div class="mute bl3-pad">${tr('bl3NoHits')}</div></div>`;
    return `<div class="bl3-res">${list.map(p => row(p, mine.has(p.id) ? `<span class="tag bl3-tag">${tr('bl3In')}</span>`
      : `<button class="btn red sm" data-bl3add="${esc(p.id)}" ${full ? `disabled title="${tr('bl3Full')}"` : ''}>${IC.ban}${tr('bl3Add')}</button>`)).join('')}</div>`;
  }
  function cardHtml() {
    const d = B.data, n = d?.list.length || 0, lim = d?.limit ?? 0, tier = d?.tier;
    const Lm = d?.limits || { none: 1, premium: 3, plus: 10 };
    const badge = tier ? `<span class="bl3-badge ${tier}">${IC.crown}${tier === 'plus' ? 'Premium+' : 'Premium'}</span>` : '';
    return `<div class="so3-gh"><span class="p3-h">${tr('bl3T')}</span><span class="bl3-hr">${badge}<b class="num bl3-cnt ${d && n >= lim ? 'full' : ''}">${d ? `${n}/${lim}` : ''}</b></span></div>
      <p class="mute so3-gp">${tr('bl3D')}</p>
      <div class="bl3-mm">${IC.info}<span>${tr('bl3MM')}</span></div>
      ${tier === 'plus' ? '' : `<div class="bl3-up">${IC.crown}<span>${tr('bl3Lim', { a: Lm.none, b: Lm.premium, c: Lm.plus })}</span><button class="btn ghost sm" data-bl3prem>${tr('bl3More')}</button></div>`}
      <div class="bl3-sb">${IC.search}<input id="bl3-q" placeholder="${tr('bl3Find')}" autocomplete="off" value="${esc(B.q)}"></div>
      <div class="bl3-rs">${resHtml()}</div>
      <div class="bl3-list">${!d ? `<div class="mute bl3-pad">${t('loading')}</div>` : n ? d.list.map(p => row(p, `<button class="btn ghost sm" data-bl3rm="${esc(p.id)}">${tr('bl3Rm')}</button>`)).join('')
        : `<div class="bl3-empty">${IC.ban}<span>${tr('bl3Empty')}</span></div>`}</div>`;
  }
  function bindRes(card) {
    card.querySelectorAll('[data-bl3add]').forEach(b => b.onclick = busy(async () => {
      const p = B.res?.find(x => x.id === b.dataset.bl3add); if (!p) return;
      if (!confirm(tr('bl3Q', { n: p.nick }))) return;
      await setBlocked(p, true); paint(card);
    }).bind(b));
  }
  function paint(card) {
    const focus = document.activeElement?.id === 'bl3-q', pos = focus ? document.activeElement.selectionStart : 0;
    card.innerHTML = cardHtml();
    const q = card.querySelector('#bl3-q');
    if (focus) { q.focus(); try { q.setSelectionRange(pos, pos); } catch {} }
    let tm;
    q.oninput = () => {
      B.q = q.value.trim(); B.res = null; clearTimeout(tm);
      const rs = card.querySelector('.bl3-rs'); rs.innerHTML = resHtml(); bindRes(card);
      if (B.q.length < 2) return;
      const my = ++B.seq, text = B.q;
      tm = setTimeout(() => api('/api/players/search?q=' + encodeURIComponent(text)).catch(() => []).then(l => {
        if (my !== B.seq || !card.isConnected) return;
        B.res = l || []; rs.innerHTML = resHtml(); bindRes(card);
      }), 220);
    };
    q.onkeydown = e => { if (e.key === 'Escape') { q.value = ''; q.oninput(); } };
    bindRes(card);
    card.querySelectorAll('[data-bl3rm]').forEach(b => b.onclick = busy(async function () {
      const p = B.data?.list.find(x => x.id === b.dataset.bl3rm); if (!p) return;
      await setBlocked(p, false); paint(card);
    }).bind(b));
    card.querySelector('[data-bl3prem]')?.addEventListener('click', () => go('premium'));
  }
  function mountCard() {
    if (!ON() || S.page !== 'settings' || !document.querySelector('#view [data-so3i].on')) return;
    const groups = document.querySelector('#view .so3-panel .so3-groups');
    if (!groups || groups.querySelector('.bl3')) return;
    const card = document.createElement('div'); card.className = 'so3-grp bl3';
    groups.append(card); paint(card);
    if (!B.data) load().then(() => { if (card.isConnected) paint(card); }).catch(e => toast(e.message, true));
  }
  const _rs = renderSettings;
  renderSettings = async function () {
    const r = await _rs.apply(this, arguments);
    try { mountCard(); } catch (e) { console.warn('[bl3]', e); }
    return r;
  };

  function ensureMenu(pact) {
    let menu = document.getElementById('p-menu');
    if (menu) return menu;
    pact.insertAdjacentHTML('beforeend', `<button class="btn ghost sm pmore" id="p-more" title="${t('more')}"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg></button><div class="pmenu" id="p-menu" hidden></div>`);
    const btn = document.getElementById('p-more'); menu = document.getElementById('p-menu');
    const close = () => { menu.hidden = true; document.removeEventListener('mousedown', outside, true); window.removeEventListener('resize', close); document.getElementById('view')?.removeEventListener('scroll', close); };
    const outside = e => { if (!menu.contains(e.target) && !btn.contains(e.target)) close(); };
    btn.onclick = () => {
      if (!menu.hidden) return close();
      menu.hidden = false;
      const rb = btn.getBoundingClientRect();
      menu.style.left = Math.max(8, Math.min(innerWidth - menu.offsetWidth - 8, rb.left)) + 'px';
      menu.style.top = (rb.bottom + menu.offsetHeight + 6 > innerHeight ? rb.top - menu.offsetHeight - 6 : rb.bottom + 6) + 'px';
      document.addEventListener('mousedown', outside, true); window.addEventListener('resize', close); document.getElementById('view')?.addEventListener('scroll', close);
    };
    return menu;
  }
  async function mountProfile() {
    if (!ON() || S.page !== 'profile') return;
    const id = S.profileId, p = S.profCache;
    if (!p || p.id !== id || !S.me || p.id === S.me.id || p.bot) return;
    const pact = document.querySelector('#view .pf3-pact'); if (!pact) return;
    if (!B.data) { try { await load(); } catch { return; } }
    if (S.page !== 'profile' || S.profileId !== id || !pact.isConnected) return;
    const menu = ensureMenu(pact);
    menu.querySelector('#bl3-p')?.remove();
    const on = ids().has(p.id);
    const b = document.createElement('button');
    b.id = 'bl3-p'; b.className = 'btn sm ' + (on ? 'ghost' : 'red'); b.innerHTML = `${IC.ban}${tr(on ? 'bl3PU' : 'bl3PB')}`;
    b.onclick = busy(async function () {
      if (!on && !confirm(tr('bl3Q', { n: p.nick }))) return;
      menu.hidden = true;
      await setBlocked(p, !on);
      mountProfile();
    }).bind(b);
    menu.append(b);
  }
  const _rp = renderProfile;
  renderProfile = async function () {
    const r = await _rp.apply(this, arguments);
    try { await mountProfile(); } catch (e) { console.warn('[bl3]', e); }
    return r;
  };

  window.KZBlacklist = { load, has: id => ids().has(id), get: () => B.data };
})();
