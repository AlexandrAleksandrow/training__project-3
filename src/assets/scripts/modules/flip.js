const button = document.querySelector('.button');
const welcomeBlock = document.querySelector('.welcome__block');
const auth = document.querySelector('.auth');
const leftBtn = document.querySelector('.left-btn');

button.addEventListener('click', function(event) {
  welcomeBlock.classList.add('flip__welcome');
  auth.classList.add('flip__auth');
  welcomeBlock.classList.remove('flip__welcome--remove');
  auth.classList.remove('flip__auth--remove');  
})

leftBtn.addEventListener('click', function(event) {
  welcomeBlock.classList.remove('flip__welcome');
  auth.classList.remove('flip__auth');
  welcomeBlock.classList.add('flip__welcome--remove');
  auth.classList.add('flip__auth--remove');  
})