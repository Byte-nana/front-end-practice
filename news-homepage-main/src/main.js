'use strict';

const navToggle = document.querySelector('.news__header');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

navToggle.addEventListener('click', (e) => {
  toggleNav(e.target, '.header__menubar img', 'add');
});

navToggle.addEventListener('click', (e) => {
  toggleNav(e.target, '.nav__close-btn img', 'remove');
});

function toggleNav(target, className, state) {
  if (target.matches(className)) {
    headerNav.classList[state]('open');
    body.classList[state]('overlay');
  }
}
