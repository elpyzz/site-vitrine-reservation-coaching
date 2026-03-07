// Reveal au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// FAQ accordéon
document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const wrap = item.querySelector('.faq-a-wrap');
  const content = item.querySelector('.faq-a');
  if (!btn || !wrap || !content) return;

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((other) => {
      other.classList.remove('open');
      const w = other.querySelector('.faq-a-wrap');
      const c = other.querySelector('.faq-a');
      if (w && c) w.style.height = '0';
      const b = other.querySelector('.faq-q');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      wrap.style.height = content.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
