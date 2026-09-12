(function () {
  const config = window.DIETMED;
  const root = document.body.dataset.root || '';
  const currentPage = document.body.dataset.page || 'home';
  const nav = config.navigation.map(item => ({ ...item, href: root + item.href.replace(/^\.\//, '') }));

  function renderHeader() {
    const el = document.querySelector('[data-site-header]');
    if (!el) return;
    el.innerHTML = `
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="brand" href="${root}index.html" aria-label="${config.brand} home">
            <span class="brand-mark">DM</span>
            <span class="brand-copy"><strong>DietMed</strong><small>Clinical Academy</small></span>
          </a>
          <nav class="desktop-nav" aria-label="Primary navigation">
            ${nav.map(item => `<a class="nav-link ${item.page === currentPage ? 'active' : ''}" ${item.page === currentPage ? 'aria-current="page"' : ''} href="${item.href}">${item.label}</a>`).join('')}
          </nav>
          <a class="btn btn-primary nav-cta" href="${root}pages/apply.html">Apply Now</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
        <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
          <div class="container mobile-nav-inner">
            ${nav.map(item => `<a class="mobile-link ${item.page === currentPage ? 'active' : ''}" href="${item.href}">${item.label}</a>`).join('')}
            <a class="btn btn-primary" href="${root}pages/apply.html">Apply for Internship</a>
          </div>
        </nav>
      </header>`;

    const toggle = el.querySelector('.menu-toggle');
    const mobile = el.querySelector('#mobile-nav');
    toggle?.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobile.classList.toggle('open', !open);
    });
  }

  function renderFooter() {
    const el = document.querySelector('[data-site-footer]');
    if (!el) return;
    const phone = config.contact.phone || 'Add phone / WhatsApp number';
    const email = config.contact.email || 'Add admissions email';
    el.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <a class="brand footer-brand" href="${root}index.html"><span class="brand-mark">DM</span><span class="brand-copy"><strong>DietMed</strong><small>Clinical Academy</small></span></a>
            <p class="footer-text">Clinical nutrition and dietetics education focused on practical case work, therapeutic nutrition and career-ready skills.</p>
          </div>
          <div><h3>Explore</h3>${nav.slice(1).map(item => `<a href="${item.href}">${item.label}</a>`).join('')}</div>
          <div><h3>Lead Educator</h3><p>${config.owner.name}</p><p>${config.owner.professionalTitle}</p><p>${config.owner.credentials[0]}</p></div>
          <div><h3>Admissions</h3><p>${phone}</p><p>${email}</p><a href="${root}pages/apply.html">Apply for a course →</a></div>
        </div>
        <div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${config.brand}. All rights reserved.</span><span>Educational content • Clinical skills • Mentorship</span></div>
      </footer>`;
  }

  function renderOwner(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const o = config.owner;
    target.innerHTML = `
      <div class="owner-photo-wrap"><img src="${root}assets/resha-profile.jpg" alt="${o.name}" class="owner-photo"></div>
      <div class="owner-content">
        <span class="eyebrow">${o.role}</span>
        <h2>${o.name}</h2>
        <p class="owner-title">${o.professionalTitle}</p>
        <p>${o.intro}</p>
        <div class="tag-list">${o.credentials.map(x => `<span class="tag">${x}</span>`).join('')}</div>
        <a class="text-link" href="${root}pages/faculty.html">Meet the lead educator →</a>
      </div>`;
  }

  function setupForms() {
    document.querySelectorAll('[data-demo-form]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const success = form.querySelector('[data-success]');
        if (success) success.hidden = false;
        form.reset();
      });
    });
  }

  renderHeader();
  renderFooter();
  renderOwner('[data-owner-card]');
  setupForms();
})();
