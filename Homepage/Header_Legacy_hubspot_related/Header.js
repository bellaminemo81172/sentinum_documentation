/* ============================================================
   Sentinum Navbar – module.js
   ============================================================ */
(function () {
  const header  = document.querySelector('[data-sn-header]');
  const burger  = document.querySelector('[data-sn-burger]');
  const drawer  = document.querySelector('[data-sn-drawer]');
  if (!header) return;

  /* ---------- Scroll state ---------- */
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile drawer ---------- */
  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('sn-no-scroll');
  };
  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    burger?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('sn-no-scroll');
  };
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
  }

  /* ---------- Drawer submenu toggles ---------- */
  document.querySelectorAll('.sn-drawer__toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item = btn.closest('.sn-drawer__item');
      item?.classList.toggle('sn-drawer__item--open');
    });
  });

  /* ---------- Close drawer on link click ---------- */
  document.querySelectorAll('.sn-drawer a').forEach((a) => {
    a.addEventListener('click', closeDrawer);
  });

  /* ---------- Esc closes drawer + dropdowns ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      document.activeElement?.blur();
    }
  });

  /* ---------- Active highlight ---------- */
  const highlight = () => {
    const here = window.location.href.split(/[?#]/)[0].replace(/\/$/, '');
    document.querySelectorAll('a.sn-navbar__link, a.sn-drawer__link').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href === '#' || href.startsWith('?')) return;
      try {
        const url = new URL(href, window.location.origin).href.split(/[?#]/)[0].replace(/\/$/, '');
        a.classList.toggle('sn-navbar__link--active', url === here);
      } catch (_) { /* noop */ }
    });
  };
  highlight();
  window.addEventListener('hashchange', highlight);
  window.addEventListener('popstate', highlight);

  /* ---------- Resize: close drawer on desktop ---------- */
  let lastW = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && lastW < 1024) closeDrawer();
    lastW = window.innerWidth;
  });
})();
