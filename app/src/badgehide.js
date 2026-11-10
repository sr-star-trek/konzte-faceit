(() => {
  const L = {
    en: { h: 'My badges', hint: 'Hide badges next to your nickname from other players. Verified can’t be hidden.', premium: 'Premium crown', owner: 'Owner badge', dev: 'Developer badge', creator: 'Content creator badge', hidden: 'Hidden', shown: 'Shown' },
    uk: { h: 'Мої значки', hint: 'Сховай значки біля свого ніку від інших гравців. «Верифікований» сховати не можна.', premium: 'Корона Premium', owner: 'Значок «Власник»', dev: 'Значок «Розробник»', creator: 'Значок «Контент-мейкер»', hidden: 'Сховано', shown: 'Показано' },
    ru: { h: 'Мои значки', hint: 'Спрячь значки рядом со своим ником от других игроков. «Верифицированный» спрятать нельзя.', premium: 'Корона Premium', owner: 'Значок «Владелец»', dev: 'Значок «Разработчик»', creator: 'Значок «Контент-мейкер»', hidden: 'Скрыто', shown: 'Показано' },
  };
  const tb = k => L[LANG]?.[k] || kzTm(L.en[k]);
  const ICON = k => k === 'premium' ? `<img src="assets/crown-${S.me.premium?.tier === 'plus' ? 'plus' : 'premium'}.png" alt="" onerror="this.remove()">` : (typeof badgeIcon === 'function' ? badgeIcon(k) : '');
  function mine() {
    const all = S.me?.badgesAll || [], out = [];
    if (S.me?.premium) out.push('premium');
    for (const k of ['owner', 'dev', 'creator']) if (all.includes(k)) out.push(k);
    return out;
  }
  const _rs = renderSettings;
  renderSettings = async function () {
    const r = await _rs.apply(this, arguments);
    const panel = document.querySelector('#view .setpanel');
    if (S.page !== 'settings' || S.setTab !== 'look' || !panel || panel.querySelector('.cr2, .pp-hero, .bh-sec')) return r;
    const list = mine();
    if (!list.length) return r;
    const hid = S.me.hideBadges || {};
    panel.insertAdjacentHTML('beforeend', `<div class="bh-sec"><h4>${tb('h')}</h4><p class="mute">${tb('hint')}</p>
      ${list.map(k => `<div class="srow bh-row"><div><b><i class="bdg bdg-${k}">${ICON(k)}</i>${tb(k)}</b><span>${hid[k] ? tb('hidden') : tb('shown')}</span></div>
        <div><button class="switch ${hid[k] ? '' : 'on'}" data-bh="${k}"></button></div></div>`).join('')}</div>`);
    panel.querySelectorAll('[data-bh]').forEach(el => el.onclick = run(async () => {
      const show = !el.classList.contains('on');
      el.disabled = true;
      try { S.me = await api('/api/me/badges', { [el.dataset.bh]: !show }); sfx(show ? 'toggle_on' : 'toggle_off'); renderSettings(); }
      finally { el.disabled = false; }
    }));
    return r;
  };
})();
