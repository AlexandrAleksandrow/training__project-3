// fullscreen menu

const heroMenu = document.querySelector('.hero__menu');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenClose = document.querySelector('.fullscreen__close');
const fullscreenList = document.querySelector('.fullscreen__list');
const fullscreenItem = document.querySelectorAll('.fullscreen__item');


  // открытие по клику на кнопку гамбургер
heroMenu.addEventListener('click', function(event) {
  event.preventDefault();
  fullscreen.style.display = 'flex';
  heroMenu.style.display = 'none';
  document.body.style.overflow = 'hidden';
})

  // закрытие по клику на Х
fullscreenClose.addEventListener('click', function(event) {
  event.preventDefault();
  fullscreen.style.display = '';
  heroMenu.style.display = '';
  document.body.style.overflow = '';
})
