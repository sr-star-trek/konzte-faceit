document.addEventListener('contextmenu', e => {
  const el = e.target;
  if (el.closest?.('input, textarea, [contenteditable="true"]')) return;
  if (String(window.getSelection?.() || '').trim()) return;
  e.preventDefault();
});
