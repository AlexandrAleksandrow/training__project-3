const formName = document.querySelector('.form__input-name');
const formEmail = document.querySelector('.form__input-email');
const buttonRight = document.querySelector('.button__right');

formName.addEventListener('keydown', e => {
  if (e.key == ' ') {
    formName.style.borderColor = 'red';
    alert('Пробел недопустим');
  } else {
    formName.style.borderColor = 'green';
  }
});

formEmail.addEventListener('keydown', e => {
  if (e.key == ' ') {
    formEmail.style.borderColor = 'red';
    alert('Пробел недопустим');
  } else {
    formEmail.style.borderColor = 'green';
  }
});

buttonRight.addEventListener('klick', e => {
  e.preventDefault();
  console.log('rrr');
});