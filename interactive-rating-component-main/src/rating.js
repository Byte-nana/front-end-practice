'use strict';

//Give clicked status to the scoring buttons

const ratingBtns = document.querySelector('.rating__list');

ratingBtns.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('list__btn')) return;

  onButtonClick(target);
});

function onButtonClick(target) {
  const clicked = document.querySelector('.btn--clicked');
  if (!clicked) {
    target.classList.add('btn--clicked');
  } else {
    clicked.classList.remove('btn--clicked');
    target.classList.add('btn--clicked');
  }
}
