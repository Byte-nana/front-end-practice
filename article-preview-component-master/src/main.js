'use strict';

//Show share-Links
const shareBtn = document.querySelector('.profile__btn');
const shareBox = document.querySelector('.share-box');

shareBtn.addEventListener('click', () => {
  shareBox.classList.toggle('open');
  shareBtn.classList.toggle('active');
});
