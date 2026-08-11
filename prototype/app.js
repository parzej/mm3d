const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-prototype-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = form.querySelector('[data-form-result]');
    if (result) {
      result.classList.add('visible');
      result.focus();
    }
  });
});
