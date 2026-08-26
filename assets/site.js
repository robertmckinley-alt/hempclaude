/* ============================================================
   Shared config + countdown
   EDIT THE CONFIG BLOCK BELOW — it drives all three pages.
   ============================================================ */

window.SITE = {
  // Statutory effective date: Public Law 119-37 sec. 781.
  // If the Dec 11 delay is ever ENACTED, change this to '2026-12-11T00:00:00-05:00'
  // and flip DELAY_ENACTED to true.
  DEADLINE: '2026-11-12T00:00:00-05:00',
  DELAY_ENACTED: false,

  // Your affiliate / product links. Replace with your tracked URLs.
  BUY: 'https://purekana.com/products/thc-sleep-gummies?variant=48855575068912',
  BUY_THC_FREE: 'https://purekana.com/products/thc-sleep-gummies',
  SHOP: 'https://purekana.com/collections/thc-gummies'
};

/* ---------- countdown ---------- */
(function () {
  var target = new Date(window.SITE.DEADLINE).getTime();

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var nodes = document.querySelectorAll('[data-countdown]');
    if (!nodes.length) return;

    var diff = target - Date.now();
    var expired = diff <= 0;
    if (expired) diff = 0;

    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000);
    var m = Math.floor(diff % 3600000 / 60000);
    var s = Math.floor(diff % 60000 / 1000);
    var val = { days: d, hours: pad(h), minutes: pad(m), seconds: pad(s) };

    nodes.forEach(function (root) {
      Object.keys(val).forEach(function (k) {
        var el = root.querySelector('[data-cd="' + k + '"]');
        if (el) el.textContent = val[k];
      });
      root.setAttribute('aria-label',
        expired ? 'The federal deadline has passed.'
                : d + ' days, ' + h + ' hours, ' + m + ' minutes until the federal deadline.');
      if (expired) root.classList.add('is-expired');
    });

    document.querySelectorAll('[data-days-left]').forEach(function (el) { el.textContent = d; });
  }

  tick();
  setInterval(tick, 1000);
})();

/* ---------- apply configured links ---------- */
(function () {
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var key = a.getAttribute('data-link');
    if (window.SITE[key]) a.setAttribute('href', window.SITE[key]);
  });
})();

/* ---------- floating CTA bar ----------
   The bar is always visible (no scroll reveal). This only guards against
   it covering the last of the page content on short viewports. */
(function () {
  var bar = document.querySelector('.floatbar');
  if (!bar) return;
  function fit() {
    document.body.style.paddingBottom = (bar.offsetHeight + 12) + 'px';
  }
  fit();
  window.addEventListener('resize', fit, { passive: true });
})();

/* ---------- FAQ accordions ---------- */
(function () {
  document.querySelectorAll('[data-faq] > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
