const mainHeader = document.querySelector('.main-header');
const mainToggle = document.querySelector('.main-header__toggle');

let isOpened = false;

mainHeader.classList.remove('main-header--nojs');

mainToggle.addEventListener('click', () => {

  if (isOpened) {
    mainHeader.classList.remove('main-header--opened');
    mainHeader.classList.add('main-header--closed');
    isOpened = false;
  } else {
    mainHeader.classList.remove('main-header--closed');
    mainHeader.classList.add('main-header--opened');
    isOpened = true;
  }
});

const navLinks = document.querySelectorAll('.main-header__nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.classList.remove('main-header__nav-link--current');
    link.classList.add('main-header__nav-link--current');
  });
});


