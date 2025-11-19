'use strict';

const form = document.querySelector('.calculator__form');
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const dateLabel = document.querySelectorAll('.date-label');
const dateInput = document.querySelectorAll('.date-input');
const emptyMessage = document.querySelectorAll('.date-error');

// empty validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  showEmptyAlert(day, 0);
  showEmptyAlert(month, 1);
  showEmptyAlert(year, 2);
});

form.addEventListener('change', (e) => {
  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  removeEmptyAlert(day, 0);
  removeEmptyAlert(month, 1);
  removeEmptyAlert(year, 2);
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

function showEmptyAlert(date, index) {
  if (date === '') {
    dateLabel[index].classList.add('label-error');
    dateInput[index].classList.add('input-error');
    emptyMessage[index].style.display = 'inline-block';
  }
}

function removeEmptyAlert(date, index) {
  if (date !== '') {
    dateLabel[index].classList.remove('label-error');
    dateInput[index].classList.remove('input-error');
    emptyMessage[index].style.display = 'none';
  }
}
