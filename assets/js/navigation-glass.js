/* Visual enhancement only: links, history, scrolling and document loads stay native. */
(() => {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  // Match the existing priority-navigation spacing before its deferred module runs.
  const masthead = nav.closest('.masthead');
  if (masthead) {
    const style = getComputedStyle(masthead);
    const pixels = value => parseFloat(value) || 0;
    const height = masthead.getBoundingClientRect().height - pixels(style.paddingTop) - pixels(style.paddingBottom) - pixels(style.borderTopWidth) - pixels(style.borderBottomWidth);
    document.body.style.paddingTop = `${height}px`;
    const profileButton = document.querySelector('.author__urls-wrapper button');
    const compactProfile = profileButton && profileButton.getClientRects().length;
    document.querySelectorAll('.sidebar').forEach(sidebar => { sidebar.style.paddingTop = compactProfile ? '' : `${height}px`; });
  }
  const marker = nav.querySelector('.nav-selection');
  if (!marker) return;
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('click', () => {
    document.documentElement.classList.add('theme-changing');
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.remove('theme-changing')));
  }, true);
  let previewLink = null;
  let frame = 0;
  const active = () => nav.querySelector('.visible-links [data-nav-link][aria-current="page"]');
  const visible = link => link && link.closest('.visible-links') && link.getClientRects().length;
  function position() {
    frame = 0;
    const link = visible(previewLink) ? previewLink : active();
    if (!visible(link)) {
      nav.classList.remove('nav-has-selection');
      return;
    }
    const parent = nav.getBoundingClientRect();
    const rect = link.getBoundingClientRect();
    marker.style.width = `${rect.width + 12}px`;
    marker.style.height = `${rect.height}px`;
    marker.style.transform = `translate(${rect.left - parent.left - 6}px, ${rect.top - parent.top}px)`;
    nav.classList.add('nav-has-selection');
    requestAnimationFrame(() => nav.classList.add('nav-selection-ready'));
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(position);
  }
  function candidate(target) {
    const link = target.closest && target.closest('[data-nav-link]');
    return visible(link) ? link : null;
  }
  nav.addEventListener('pointerover', e => {
    if (e.pointerType === 'touch') return;
    previewLink = candidate(e.target);
    schedule();
  });
  nav.addEventListener('pointerleave', () => { previewLink = null; schedule(); });
  nav.addEventListener('focusin', e => { previewLink = candidate(e.target); schedule(); });
  nav.addEventListener('focusout', e => { previewLink = candidate(e.relatedTarget || nav); schedule(); });
  // No preventDefault, fetch, pushState, click interception, or artificial delay.
  window.addEventListener('pageshow', () => { previewLink = null; schedule(); });
  window.addEventListener('resize', schedule);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    observer.observe(nav);
    nav.querySelectorAll('[data-nav-link]').forEach(link => observer.observe(link));
  }
  // The template moves links into its mobile dropdown after its module initializes.
  new MutationObserver(records => {
    if (records.some(record => record.type === 'childList' || record.target !== nav)) schedule();
  }).observe(nav, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  if (document.fonts) document.fonts.ready.then(schedule);
  position();
})();
