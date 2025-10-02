// email validation

const formEmail = document.querySelector('.form__email');
const inputEmail = document.querySelector('#input__email');
const main = document.querySelector('.main');
const errorImg = document.querySelector('.form__error-icon');

formEmail.addEventListener('submit', (e) => {
  let email = inputEmail.value.trim();
  const emailRegex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;

  e.preventDefault();

  if (email === '') {
    isValid();
    inputEmail.value = '';
  } else if (!emailRegex.test(email)) {
    isValid();
  } else {
    alert('Login successful');
  }
});

function createMessage() {
  const error = document.createElement('p');
  error.setAttribute('class', 'error__message');
  error.innerHTML = 'Please provide a valid email';
  main.appendChild(error);
}

function isValid() {
  let errorMessage = main.querySelector('.error__message');
  if (!errorMessage) {
    createMessage();
  }
  formEmail.classList.add('form__error');
  errorImg.style.display = 'block';
}
