(() => {
  const sectionIds = [
    'pain-points',
    'capabilities',
    'agent-ecosystem',
    'command-center',
    'specs',
    'pricing',
  ];

  function navLinks() {
    return sectionIds
      .map((id) => [id, document.querySelector(`nav a[href="/#${id}"]`)])
      .filter((entry) => entry[1]);
  }

  function setActive(activeId) {
    for (const [id, link] of navLinks()) {
      const isActive = id === activeId;
      link.classList.toggle('text-primary', isActive);
      link.classList.toggle('border-b-2', isActive);
      link.classList.toggle('border-primary', isActive);
      link.classList.toggle('pb-1', isActive);
      link.classList.toggle('text-secondary', !isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    }
  }

  function currentSectionId() {
    const anchorLine = window.scrollY + Math.max(120, window.innerHeight * 0.34);
    let current = sectionIds[0];

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (section.offsetTop <= anchorLine) current = id;
    }

    return current;
  }

  function updateActiveLink() {
    if (navLinks().length === 0) return;
    setActive(currentSectionId());
  }

  function bindClicks() {
    for (const [id, link] of navLinks()) {
      link.addEventListener('click', () => {
        setActive(id);
        window.setTimeout(updateActiveLink, 450);
      });
    }
  }

  function boot(attempt = 0) {
    const hasNav = navLinks().length > 0;
    const hasSections = sectionIds.some((id) => document.getElementById(id));

    if (!hasNav || !hasSections) {
      if (attempt < 80) window.setTimeout(() => boot(attempt + 1), 100);
      return;
    }

    bindClicks();
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => boot());
  } else {
    boot();
  }
})();
