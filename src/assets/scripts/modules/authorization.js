
const authLog = document.querySelector('.auth__input-login');
const authPass = document.querySelector('.auth__input-password');


// Обработка ввода текста в форму
authLog.addEventListener('keydown', e => {
  if (e.key == ' ') {
    authLog.style.borderColor = 'red';
    alert('Пробел недопустим');
  } else {
    authLog.style.borderColor = 'green';
  }
});


authPass.addEventListener('keydown', e => {
  if (e.key == ' ') {
    authPass.style.borderColor = 'red';
    alert('Пробел недопустим');
  } else {
    authPass.style.borderColor = 'green';
  }
  
  //Обработка ввода для телефонной строки
  /*let isDigit = false;
  let isDash = false;
  let isControl = false;

  if (e.key >=0 || e.key <=9) {
    isDigit = true;
  }

  if (e.key == "-") {
    isDash = true;
  }

  if (e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Backspace') {
    isControl = true;
  }

  if (!isDigit && !isDash && !isControl) {
    e.preventDefault();
  }*/
  
});