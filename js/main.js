/* ServerlessComp — shared JS */

/* ── Track filter (index page) ── */
function initTrackFilter() {
  const pills = document.querySelectorAll('.track-pill');
  const cards = document.querySelectorAll('.mod-card[data-track]');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const track = pill.dataset.track;
      cards.forEach(card => {
        card.classList.toggle('hidden', track !== 'all' && card.dataset.track !== track);
      });
    });
  });
}

/* ── Hierarchy accordion ── */
function initAccordion() {
  document.querySelectorAll('.hier-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = trigger.nextElementSibling;
      const chev = trigger.querySelector('.hier-chevron');
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.hier-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.hier-trigger').forEach(t => { t.classList.remove('open'); t.querySelector('.hier-chevron')?.classList.remove('open'); });
      if (!isOpen) {
        body.classList.add('open');
        trigger.classList.add('open');
        chev?.classList.add('open');
      }
    });
  });
}

/* ── Animate elements in on scroll ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Glossary search + anchor flash ── */
function initGlossary() {
  const input = document.getElementById('glossary-search');
  if (!input) return;
  const cards = Array.from(document.querySelectorAll('.gloss-card'));
  const cats  = Array.from(document.querySelectorAll('.glossary-category'));
  const count = document.getElementById('glossary-count');
  const empty = document.getElementById('glossary-empty');
  const total = cards.length;

  function applyFilter() {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const hay = (card.dataset.search || card.textContent).toLowerCase();
      const match = !q || hay.includes(q);
      card.classList.toggle('hidden', !match);
      if (match) shown++;
    });
    cats.forEach(cat => {
      const anyVisible = cat.querySelectorAll('.gloss-card:not(.hidden)').length > 0;
      cat.style.display = anyVisible ? '' : 'none';
    });
    if (count) count.textContent = q ? `${shown} of ${total}` : `${total} terms`;
    if (empty) empty.classList.toggle('show', shown === 0);
  }

  input.addEventListener('input', applyFilter);
  applyFilter();

  // Highlight target on anchor arrival
  function flashHash() {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el || !el.classList.contains('gloss-card')) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 2400);
  }
  window.addEventListener('hashchange', flashHash);
  setTimeout(flashHash, 50);
}

/* ── Run on load ── */
document.addEventListener('DOMContentLoaded', () => {
  initTrackFilter();
  initAccordion();
  initReveal();
  initGlossary();
  // Set active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace('../',''))) {
      a.style.color = 'var(--amber)';
    }
  });
});
