// email validation
// 1. user input value
// 2. check === email reg
// 3. don't match
// 3-1. input border color, show ! image, show under text

const formEmail = document.querySelector('.form__email');
const inputEmail = document.querySelector('#input__email');
const main = document.querySelector('.main');
const errorImg = document.querySelector('.form__error-icon');

formEmail.addEventListener('submit', (e) => {
  let emailInput = inputEmail.value.trim();
  const emailRegex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
  let error = main.querySelector('.error__message');

  e.preventDefault();

  if (emailInput === '' || !emailRegex.test(emailInput)) {
    // error message
    // todo : don't duplicate.
    if (!error) {
      createMessage();
    }
    // border colour
    formEmail.classList.add('form__error');
    // error icon
    errorImg.style.display = 'block';
  }
  //input initalise
  inputEmail.value = '';
});

function createMessage() {
  const error = document.createElement('p');
  error.setAttribute('class', 'error__message');
  error.innerHTML = 'Please provide a valid email';
  main.appendChild(error);
}
