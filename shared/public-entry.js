(() => {
  const root = document.documentElement;
  root.classList.remove('superapp-route-pending');
  root.classList.add('superapp-route-ready');
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === '127.0.0.1' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}), { once: true });
  }
})();