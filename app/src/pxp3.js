(() => {
  const L = {
    en: { px3L0: 'Steel', px3L1: 'Bronze', px3L2: 'Gold', px3L3: 'Violet', px3L4: 'Obsidian', px3L5: 'Relic', px3BadgeT: 'Premium level: {l}' },
    uk: { px3L0: 'Сталь', px3L1: 'Бронза', px3L2: 'Золото', px3L3: 'Фіолет', px3L4: 'Обсидіан', px3L5: 'Реліквія', px3BadgeT: 'Рівень Premium: {l}' },
    ru: { px3L0: 'Сталь', px3L1: 'Бронза', px3L2: 'Золото', px3L3: 'Фиолет', px3L4: 'Обсидиан', px3L5: 'Реликвия', px3BadgeT: 'Уровень Premium: {l}' },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = (k, v) => { let s = (I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k; if (v) for (const [a, b] of Object.entries(v)) s = s.replaceAll('{' + a + '}', b); return s; };
  const name = i => tr('px3L' + Math.max(0, Math.min(5, i | 0)));
  const STAR = 'M12 4.2l2.3 4.9 5.3.6-3.9 3.6 1.1 5.3L12 15.9l-4.8 2.7 1.1-5.3-3.9-3.6 5.3-.6z';
  const medal = (i, cls = '') => `<span class="px3-med px3-crown px3-c${Math.max(0, Math.min(5, i | 0))} ${cls}"><img src="assets/crown-px${Math.max(0, Math.min(5, i | 0))}.png" alt=""></span>`;
  const badge = px => px && px.lvl > 0 ? `<span class="px3-badge px3-c${px.lvl | 0}" title="${esc(tr('px3BadgeT', { l: name(px.lvl) }))}">${medal(px.lvl, 'sm')}</span>` : '';
  window.PXP3 = { name, medal, badge, tr };

  if (typeof renderProfile === 'function') {
    const _prev = renderProfile;
    renderProfile = async function () {
      const r = await _prev.apply(this, arguments);
      try {
        if (window.KZ_V3?.() && S.page === 'profile') {
          const p = S.profCache, h = document.querySelector('.pf3-who h1');
          const cr = h && h.querySelector('img.crown');
          if (p?.id === S.profileId && p.pxp && cr && !cr.dataset.px) { const l = Math.max(0, Math.min(5, p.pxp.lvl | 0)); cr.dataset.px = l; cr.src = `assets/crown-px${l}.png`; cr.title = tr('px3BadgeT', { l: name(l) }); cr.classList.add('px3-pcrown', 'px3-c' + l); }
        }
      } catch {}
      return r;
    };
  }
})();
