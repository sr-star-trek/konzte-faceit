(() => {
  const L = {
    en: { sSeason: 'Seasonal colors', sSeasonH: 'Interface colors follow the time of year: winter, spring, summer, autumn. Replaces the accent color while on' },
    uk: { sSeason: 'Сезонні кольори', sSeasonH: 'Кольори інтерфейсу змінюються з порою року: зима, весна, літо, осінь. Поки увімкнено — замість кольору акценту' },
    ru: { sSeason: 'Сезонные цвета', sSeasonH: 'Цвета интерфейса меняются с временем года: зима, весна, лето, осень. Пока включено — вместо цвета акцента' },
  };
  if (typeof I18N !== 'undefined') for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);

  const KINDS = ['winter', 'spring', 'summer', 'autumn'];
  const byMonth = m => (m === 11 || m <= 1) ? 'winter' : m <= 4 ? 'spring' : m <= 7 ? 'summer' : 'autumn';
  window.kzSeason = () => {
    const c = (typeof S !== 'undefined' && S.cfg) || {};
    if (c.seasonal === false) return null;
    return KINDS.includes(c.seasonForce) ? c.seasonForce : byMonth(new Date().getMonth());
  };
  function apply() {
    const s = window.kzSeason();
    for (const k of KINDS) document.body.classList.toggle('ss-' + k, s === k);
  }
  if (typeof applyLook === 'function') { const _al = applyLook; applyLook = function () { const r = _al.apply(this, arguments); apply(); return r; }; }
  apply();
  setInterval(apply, 3600e3);
})();
