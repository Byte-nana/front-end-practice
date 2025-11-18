'use strict';

const form = document.querySelector('.calculator__form');
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const dateLabel = document.querySelectorAll('.date-label');
const dateInput = document.querySelectorAll('.date-input');
const emptyMessage = document.querySelectorAll('.date-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  if (day === '') {
    dateLabel[0].classList.add('label-error');
    dateInput[0].classList.add('input-error');
    emptyMessage[0].style.display = 'inline-block';
  }
  if (month === '') {
    dateLabel[1].classList.add('label-error');
    dateInput[1].classList.add('input-error');
    emptyMessage[1].style.display = 'inline-block';
  }
  if (year === '') {
    dateLabel[2].classList.add('label-error');
    dateInput[2].classList.add('input-error');
    emptyMessage[2].style.display = 'inline-block';
  }
});

function isValidDay(value) {
  return /^\d{1,2}$/.test(value) && Number(value) >= 1 && Number(value) <= 31;
}

function isValidMonth(value) {
  return /^\d{1,2}$/.test(value) && Number(value) >= 1 && Number(value) <= 12;
}

function isValidYear(value) {
  const currentYear = new Date().getFullYear();
  return (
    /^\d{4}$/.test(value) &&
    Number(value) >= 1000 &&
    Number(value) <= currentYear
  );
}
