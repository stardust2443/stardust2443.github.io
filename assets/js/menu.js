// Header menu toggle (desktop + mobile)

const menuTrigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.header__left .menu');

if (menuTrigger && menu) {
  menu.classList.remove('hidden');

  const closeMenu = () => {
    menu.classList.remove('open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  };

  menuTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    menuTrigger.setAttribute('aria-expanded', String(willOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuTrigger.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

const language = document.getElementsByTagName('html')[0].lang;
const logo = document.querySelector('.logo__pathname');
if (logo) {
  window.onload = () => {
    let path = window.location.pathname.substring(1);
    path = path.replace(language + '/', '');
    logo.textContent += path.substring(0, path.indexOf('/'));
  };
}
