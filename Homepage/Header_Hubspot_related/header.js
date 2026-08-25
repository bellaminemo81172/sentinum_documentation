/* ============================================================
   Sentinum Navbar – module.js (FIX: scoped + multi-instance safe)
   ============================================================ */
(function () {
  document.querySelectorAll('[data-sn-header]').forEach((header) => {
    const burger = header.querySelector('[data-sn-burger]');
    const drawer = header.querySelector('[data-sn-drawer]');
    if (!burger || !drawer) return;

    /* Scroll state */
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('sn-no-scroll');
    };

    const openDrawer = () => {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('sn-no-scroll');
    };

    burger.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });

    /* Submenu toggles */
    drawer.querySelectorAll('.sn-drawer__toggle').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const item = btn.closest('.sn-drawer__item');
        item?.classList.toggle('sn-drawer__item--open');
      });
    });

    /* Close on link click */
    drawer.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => closeDrawer());
    });

    /* ESC closes */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    /* Resize: close drawer on desktop */
    let lastW = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && lastW < 1024) closeDrawer();
      lastW = window.innerWidth;
    });
  });
})();