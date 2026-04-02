document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
      });
    });
  }

  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) el.classList.add('active');
    });
  };
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  // Форма
  const form = document.querySelector('.premium-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alert(`Спасибо, ${name}! Ваша заявка принята. Мы свяжемся в течение 15 минут.`);
      form.reset();
    });
  }
});