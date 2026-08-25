/* ============================================================
   Sentinum Navbar – HIGH PERFORMANCE VERSION
   ============================================================ */
(function () {
  document.querySelectorAll('[data-sn-header]').forEach((header) => {

    const burger = header.querySelector('[data-sn-burger]');
    const drawer = header.querySelector('[data-sn-drawer]');
    if (!burger || !drawer) return;
    
  

    /* ---------------------------------------------
       ✅ SCROLL – optimiert (keine Reflow-Spam)
    --------------------------------------------- */
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('is-scrolled', window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });


    /* ---------------------------------------------
       ✅ BURGER – sofort reagieren (NO DELAY)
    --------------------------------------------- */
    burger.addEventListener('pointerdown', () => {
    const isOpen = drawer.classList.toggle('is-open');

      drawer.setAttribute('aria-hidden', !isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('sn-no-scroll', isOpen);
    });


    /* ---------------------------------------------
       ✅ DRAWER (1 Event statt viele)
    --------------------------------------------- */
    drawer.addEventListener('click', (e) => {

      const toggle = e.target.closest('.sn-drawer__toggle');
      const link = e.target.closest('a');

      // Submenu öffnen
      if (toggle) {
        e.preventDefault();
        const item = toggle.closest('.sn-drawer__item');
        if (item) item.classList.toggle('sn-drawer__item--open');
        return;
      }

      // Link klick → Drawer schließen
      if (link) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('sn-no-scroll');
      }
    });


    /* ---------------------------------------------
       ✅ ESC nur aktiv wenn offen
    --------------------------------------------- */
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('sn-no-scroll');

        document.removeEventListener('keydown', handleKey);
      }
    };

    burger.addEventListener('pointerdown', () => {
      if (drawer.classList.contains('is-open')) {
        document.addEventListener('keydown', handleKey);
      }
    });


    /* ---------------------------------------------
       ✅ Resize – debounced
    --------------------------------------------- */
    let resizeTimeout;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          drawer.classList.remove('is-open');
          drawer.setAttribute('aria-hidden', 'true');
          burger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('sn-no-scroll');
        }
      }, 150);
    });

  });
})();
