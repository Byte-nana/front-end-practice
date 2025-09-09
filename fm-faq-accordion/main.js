const ul = document.querySelector('.faq__list');
const answers = document.querySelectorAll('.item__content');
const minusBtn = document.querySelectorAll('.btnImg');
const h3 = document.querySelectorAll('.item__title');

function changeImg(i) {
  let result = answers[i].classList.contains('show__answer');

  result
    ? (minusBtn[i].src = './assets/images/icon-minus.svg')
    : (minusBtn[i].src = './assets/images/icon-plus.svg');
}

ul.addEventListener('click', (e) => {
  let id = e.target.dataset.id;

  if (id) {
    answers[+id].classList.toggle('show__answer');
    changeImg(+id);
  }
});

// mobile active state event
ul.addEventListener('touchstart', (e) => {
  let id = e.target.dataset.id;
  let result = answers[+id].classList.contains('show__answer');

  result ? h3[+id].classList.remove('active') : h3[+id].classList.add('active');
});
