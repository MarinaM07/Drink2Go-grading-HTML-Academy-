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
let currentLink = document.querySelector('.main-header__nav-link--current'); // Изначально текущая ссылка - первая
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // Убираем класс 'current' у текущей ссылки, если она не первая
    if (currentLink && currentLink !== link) {
      currentLink.classList.remove('main-header__nav-link--current');
    }
    // Добавляем класс 'current' к новой ссылке
    link.classList.add('main-header__nav-link--current');
    // Обновляем текущую ссылку
    currentLink = link;
  });
});


