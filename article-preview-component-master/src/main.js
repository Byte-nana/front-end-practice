'use strict';

//Show share-Links
const shareBtn = document.querySelector('.profile__btn');
const shareBox = document.querySelector('.share-box');
const closeBtn = document.querySelector('.share__btn');

shareBtn.addEventListener('click', () => {
  shareBox.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  shareBox.classList.remove('open');
});
