const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.dataset.open === 'true';
  nav.dataset.open = String(!isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.dataset.open = 'false';
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});


