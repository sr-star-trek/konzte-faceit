(() => {
  const L = {
    en: { cx_prof: 'Open profile', cx_dm: 'Message', cx_inv: 'Invite to party', cx_add: 'Add friend', cx_rm: 'Remove friend', cx_block: 'Block', cx_unblock: 'Unblock', cx_copy: 'Copy ID', cx_copied: 'ID copied', cx_rmQ: 'Remove {n} from friends?', cx_blockQ: 'Block {n}? They will be removed from your friends.', cx_more: 'Actions (right click)' },
    uk: { cx_prof: 'Відкрити профіль', cx_dm: 'Написати', cx_inv: 'Запросити в паті', cx_add: 'Додати в друзі', cx_rm: 'Видалити з друзів', cx_block: 'Заблокувати', cx_unblock: 'Розблокувати', cx_copy: 'Скопіювати ID', cx_copied: 'ID скопійовано', cx_rmQ: 'Видалити {n} з друзів?', cx_blockQ: 'Заблокувати {n}? Гравця буде видалено з друзів.', cx_more: 'Дії (права кнопка миші)' },
    ru: { cx_prof: 'Открыть профиль', cx_dm: 'Написать', cx_inv: 'Пригласить в пати', cx_add: 'Добавить в друзья', cx_rm: 'Удалить из друзей', cx_block: 'Заблокировать', cx_unblock: 'Разблокировать', cx_copy: 'Скопировать ID', cx_copied: 'ID скопирован', cx_rmQ: 'Удалить {n} из друзей?', cx_blockQ: 'Заблокировать {n}? Игрок будет удалён из друзей.', cx_more: 'Действия (правая кнопка мыши)' },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const sv = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const IC = {
    prof: sv('<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6"/>'),
    dm: sv('<path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4.5 3.5v-3.5h0a2 2 0 0 1-1-1.7z"/>'),
    inv: sv('<circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M18.5 8v6M15.5 11h6"/>'),
    add: sv('<circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M18.5 8v6M15.5 11h6"/>'),
    rm: sv('<circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M15.5 11h6"/>'),
    block: sv('<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>'),
    copy: sv('<rect x="8" y="8" width="11.5" height="11.5" rx="2"/><path d="M15.5 8V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2"/>'),
  };
  let box = null;
  const close = () => { box?.remove(); box = null; };
  window.kzCtx = (x, y, items) => {
    close();
    box = document.createElement('div');
    box.className = 'cx3';
    box.innerHTML = items.map((it, i) => it.sep ? '<i class="cx3-sep"></i>' : it.head ? `<div class="cx3-head">${it.head}</div>`
      : `<button class="cx3-it ${it.danger ? 'danger' : ''}" data-i="${i}">${it.icon ? IC[it.icon] || it.icon : ''}<span>${esc(it.label)}</span></button>`).join('');
    document.body.append(box);
    const r = box.getBoundingClientRect(), W = innerWidth, H = innerHeight;
    box.style.left = Math.max(6, Math.min(x, W - r.width - 6)) + 'px';
    box.style.top = Math.max(6, Math.min(y, H - r.height - 6)) + 'px';
    box.querySelectorAll('[data-i]').forEach(b => b.onclick = e => { e.stopPropagation(); const it = items[+b.dataset.i]; close(); try { it.act?.(); } catch (er) { console.warn(er); } });
  };
  addEventListener('mousedown', e => { if (box && !box.contains(e.target)) close(); }, true);
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  addEventListener('blur', close); addEventListener('resize', close);
  document.addEventListener('scroll', close, true);

  const nickOf = id => {
    const f = S.live?.friends?.list?.find(x => x.id === id);
    if (f) return f;
    const el = document.querySelector(`[data-uid="${CSS.escape(id)}"] .nk-t, [data-so3prof="${CSS.escape(id)}"] .nk-t, [data-dm3peer="${CSS.escape(id)}"] .nk-t`);
    return { id, nick: el?.textContent || '' };
  };
  function playerMenu(id) {
    if (!id || !S.me) return null;
    const p = nickOf(id), me = id === S.me.id;
    const fr = S.live?.friends?.list?.find(x => x.id === id);
    const st = S.live || {}, inParty = st.party?.members?.some(m => m.id === id);
    const canInv = !me && !inParty && (!st.party || st.party.leader === S.me.id) && (!fr || fr.status !== 'match');
    const items = [{ head: `<b class="nkl">${typeof nickHtml === 'function' && p.nick ? nickHtml(p) : esc(p.nick || id)}</b>` },
      { label: t('cx_prof'), icon: 'prof', act: () => go('profile', id) }];
    if (!me) items.push({ label: t('cx_dm'), icon: 'dm', act: () => go('dms', id) });
    if (canInv) items.push({ label: t('cx_inv'), icon: 'inv', act: () => { wsSend({ t: 'party-invite', uid: id }); toast(t('inviteSent')); } });
    if (!me) {
      items.push({ sep: 1 });
      if (fr) items.push({ label: t('cx_rm'), icon: 'rm', act: run(async () => { if (confirm(t('cx_rmQ', { n: p.nick || id }))) { await api('/api/friends/remove', { uid: id }); } }) });
      else items.push({ label: t('cx_add'), icon: 'add', act: run(async () => { await api('/api/friends/request', { uid: id }); toast(t('friendSent')); }) });
      items.push({ label: t('cx_block'), icon: 'block', danger: 1, act: run(async () => { if (confirm(t('cx_blockQ', { n: p.nick || id }))) { await api('/api/blacklist/add', { uid: id }); toast(t('cx_block') + ' ✓'); } }) });
    }
    items.push({ sep: 1 }, { label: t('cx_copy'), icon: 'copy', act: () => { navigator.clipboard.writeText(id); toast(t('cx_copied')); } });
    return items;
  }
  const SEL = '[data-ctxuid], [data-uid], [data-so3prof], [data-dm3peer], .so3-fc';
  document.addEventListener('contextmenu', e => {
    const el = e.target.closest?.(SEL);
    if (!el || e.target.closest('input, textarea')) return;
    const id = el.dataset.ctxuid || el.dataset.uid || el.dataset.so3prof || el.dataset.dm3peer || el.querySelector?.('[data-so3prof]')?.dataset.so3prof;
    const items = playerMenu(id);
    if (!items) return;
    e.preventDefault(); e.stopPropagation();
    kzCtx(e.clientX, e.clientY, items);
  }, true);
  document.addEventListener('click', e => {
    const b = e.target.closest?.('[data-ctxmore]'); if (!b) return;
    e.stopPropagation(); const r = b.getBoundingClientRect(); const items = playerMenu(b.dataset.ctxmore); if (items) kzCtx(r.left, r.bottom + 4, items);
  }, true);
  new MutationObserver(() => {
    if (S.page !== 'friends') return;
    document.querySelectorAll('#view .so3-fc .so3-fcb:not([data-cx])').forEach(bx => {
      bx.dataset.cx = 1;
      const id = bx.closest('.so3-fc')?.querySelector('[data-so3prof]')?.dataset.so3prof; if (!id) return;
      const m = document.createElement('button'); m.className = 'btn ghost sm so3-ib cx3-more'; m.dataset.ctxmore = id; m.title = t('cx_more');
      m.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/></svg>';
      bx.append(m);
    });
  }).observe(document.getElementById('view') || document.body, { childList: true, subtree: true });
})();
