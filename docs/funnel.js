(() => {
  const endpoint = 'https://hongguomac-telemetry.hongguomac-xinya.workers.dev/site';
  const campaigns = new Set(['weekly', 'xhs', 'wechat', 'mac-community', 'dev-community']);
  const campaign = new URLSearchParams(location.search).get('utm_source');
  let source = campaigns.has(campaign) ? campaign : 'direct';
  if (!campaign && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname;
      if (host === 'github.com') source = 'github';
      else if (host === 'gitee.com') source = 'gitee';
      else if (host === 'bing.com' || host.endsWith('.bing.com') ||
               host === 'google.com' || host.endsWith('.google.com')) source = 'search';
      else source = 'other';
    } catch { source = 'other'; }
  }

  function send(event) {
    const body = new Blob([JSON.stringify({ event, source })], { type: 'text/plain' });
    try {
      if (navigator.sendBeacon?.(endpoint, body)) return;
    } catch { /* An unavailable analytics transport must not block the link. */ }
    try {
      fetch(endpoint, { method: 'POST', mode: 'no-cors', body, keepalive: true }).catch(() => {});
    } catch { /* Navigation remains available when analytics is blocked. */ }
  }

  const day = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const visitKey = `site-visit:${day}:${source}`;
  try {
    if (!sessionStorage.getItem(visitKey)) {
      sessionStorage.setItem(visitKey, '1');
      send('site_visit');
    }
  } catch { send('site_visit'); }

  document.querySelectorAll('[data-star-link]').forEach((link) => {
    link.addEventListener('click', () => send('star_click'));
  });

  document.querySelectorAll('a[href*="/releases/download/"][href$=".dmg"]').forEach((link) => {
    link.addEventListener('click', () => send('download_click'));
  });
})();
