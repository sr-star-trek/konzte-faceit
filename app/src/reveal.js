(() => {
  const L = {
    en: { title: 'Calibration complete', sub: 'Your rank is unlocked', lvl: 'Level {n}', rec: '{w} W · {l} L in placement', go: 'Continue', board: 'You are now on the leaderboard', ctitle: 'Clan calibrated', csub: 'Clan level unlocked', crec: '{w} W · {l} L in placement clan wars', cboard: 'Your clan is now on the clan war ladder' },
    uk: { title: 'Калібрування завершено', sub: 'Твій ранг відкрито', lvl: 'Рівень {n}', rec: '{w} перемог · {l} поразок у калібруванні', go: 'Продовжити', board: 'Тепер ти в таблиці лідерів', ctitle: 'Клан відкалібровано', csub: 'Рівень клану відкрито', crec: '{w} перемог · {l} поразок у калібрувальних клан-варах', cboard: 'Тепер клан у таблиці клан-варів' },
    ru: { title: 'Калибровка завершена', sub: 'Твой ранг открыт', lvl: 'Уровень {n}', rec: '{w} побед · {l} поражений в калибровке', go: 'Продолжить', board: 'Теперь ты в таблице лидеров', ctitle: 'Клан откалиброван', csub: 'Уровень клана открыт', crec: '{w} побед · {l} поражений в калибровочных клан-варах', cboard: 'Теперь клан в таблице клан-варов' },
  };
  const tr = (k, v = {}) => (L[S.cfg?.lang]?.[k] || L[typeof LANG !== 'undefined' ? LANG : 'en']?.[k] || (typeof kzTm === 'function' ? kzTm(L.en[k]) : L.en[k])).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');
  const MODE = { '5v5': '5×5', '2v2': '2×2', '1v1': '1×1' };

  function show({ mode, elo, w = 0, l = 0, clan = null }) {
    document.querySelector('.rv-ov')?.remove();
    const lvl = clan ? clan.lvl : typeof levelOf === 'function' ? levelOf(elo) : 1;
    const k = x => clan ? 'c' + x : x;
    const calm = document.body.classList.contains('calm');
    const ov = document.createElement('div');
    ov.className = 'rv-ov' + (calm ? ' calm' : '');
    ov.innerHTML = `<div class="rv-box">
      <div class="rv-tag">${clan ? `[${esc(clan.tag)}] ${esc(clan.name || '')}` : esc(MODE[mode] || mode)} · ${esc(tr(k('title')))}</div>
      <div class="rv-stage">
        <div class="rv-rays"></div><div class="rv-ring"></div>
        <img class="rv-q" src="assets/lvl/cal.svg" alt="">
        ${clan ? `<div class="rv-lvl rv-clan">${clan.icon || ''}</div>` : `<img class="rv-lvl" src="assets/lvl/lvl${lvl}.png" alt="">`}
        <div class="rv-scan"></div>
      </div>
      <div class="rv-segs">${[0, 1, 2, 3, 4].map(i => `<i style="--i:${i}"></i>`).join('')}</div>
      <div class="rv-elo"><b>0</b><span>ELO</span></div>
      <div class="rv-name">${esc(tr('lvl', { n: lvl }))}</div>
      <div class="rv-sub">${esc(tr(k('sub')))} · ${esc(tr(k('rec'), { w, l }))}</div>
      <div class="rv-sub2">${esc(tr(k('board')))}</div>
      <button class="btn gold rv-go">${esc(tr('go'))}</button>
    </div>`;
    document.body.appendChild(ov);
    const close = () => { ov.classList.add('out'); setTimeout(() => ov.remove(), 350); removeEventListener('keydown', key); };
    const key = e => { if (e.key === 'Escape' || e.key === 'Enter') close(); };
    ov.querySelector('.rv-go').onclick = close;
    addEventListener('keydown', key);
    const b = ov.querySelector('.rv-elo b'), t0 = performance.now() + (calm ? 0 : 1050), dur = calm ? 1 : 550;
    const tick = now => {
      const k = Math.max(0, Math.min(1, (now - t0) / dur));
      b.textContent = Math.round(elo * (1 - Math.pow(1 - k, 3)));
      if (k < 1 && ov.isConnected) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  addEventListener('kz:calibrated', e => show(e.detail || {}));
  window.kzRankReveal = d => { show(d); if (typeof sfx === 'function') sfx('calibration'); };
})();
