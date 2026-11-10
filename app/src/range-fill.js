(() => {
  const set = el => { const min = +el.min || 0, max = +el.max || 100, v = +el.value; el.style.setProperty('--rv', ((v - min) / (max - min || 1) * 100) + '%'); };
  const all = root => root.querySelectorAll?.('input[type=range]').forEach(set);
  document.addEventListener('input', e => { if (e.target?.type === 'range') set(e.target); }, true);
  new MutationObserver(ms => { for (const m of ms) for (const n of m.addedNodes) if (n.nodeType === 1) { if (n.matches?.('input[type=range]')) set(n); else all(n); } })
    .observe(document.documentElement, { childList: true, subtree: true });
  const d = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  Object.defineProperty(HTMLInputElement.prototype, 'value', { ...d, set(v) { d.set.call(this, v); if (this.type === 'range') set(this); } });
  all(document);
})();
