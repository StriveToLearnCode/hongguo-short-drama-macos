(() => {
  const form = document.querySelector('.site-search');
  const input = document.querySelector('#drama-search');
  const catalog = document.querySelector('#catalog');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const sections = [...document.querySelectorAll('.drama-section')];
  const cards = [...document.querySelectorAll('.drama-card')];
  const status = document.querySelector('#catalog-status');
  const summary = document.querySelector('#search-summary');
  const queryLabel = document.querySelector('#search-query');
  const empty = document.querySelector('#empty-state');
  let category = 'all';
  let query = '';

  function filterCatalog() {
    const needle = query.trim().normalize('NFKC').toLocaleLowerCase('zh-CN');
    let visible = 0;
    cards.forEach((card) => {
      const haystack = `${card.dataset.title} ${card.dataset.tags}`.normalize('NFKC').toLocaleLowerCase('zh-CN');
      const matches = (category === 'all' || card.dataset.category === category) && (!needle || haystack.includes(needle));
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    sections.forEach((section) => {
      section.hidden = ![...section.querySelectorAll('.drama-card')].some((card) => !card.hidden);
    });
    filters.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    status.textContent = `显示 ${visible} 部剧目 · 页面样例，非实时榜单`;
    summary.hidden = !needle;
    queryLabel.textContent = `“${query.trim()}”的搜索结果`;
    empty.hidden = visible !== 0;
  }

  function scrollToCatalog() {
    catalog.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  }

  // Submission keeps the header search from jumping the page while someone types.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    query = input.value;
    category = 'all';
    filterCatalog();
    closeMenu();
    scrollToCatalog();
  });
  input.addEventListener('input', () => {
    if (!input.value && query) {
      query = '';
      filterCatalog();
    }
  });
  filters.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filterCatalog();
  }));
  document.querySelectorAll('[data-clear-search]').forEach((button) => button.addEventListener('click', () => {
    query = '';
    category = 'all';
    input.value = '';
    filterCatalog();
  }));

  const screenshotTabs = [...document.querySelectorAll('[data-preview]')];
  const previews = [...document.querySelectorAll('[data-preview-panel]')];
  screenshotTabs.forEach((button) => button.addEventListener('click', () => {
    screenshotTabs.forEach((tab) => tab.setAttribute('aria-pressed', String(tab === button)));
    previews.forEach((panel) => { panel.hidden = panel.dataset.previewPanel !== button.dataset.preview; });
  }));

  const menu = document.querySelector('#site-nav');
  const toggle = document.querySelector('.menu-toggle');
  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '展开导航');
  }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
  matchMedia('(max-width: 600px)').addEventListener('change', closeMenu);
  filterCatalog();
})();
