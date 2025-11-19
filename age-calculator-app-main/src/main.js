'use strict';

const form = document.querySelector('.calculator__form');
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const dateLabel = document.querySelectorAll('.date-label');
const dateInput = document.querySelectorAll('.date-input');
const errorMessage = document.querySelectorAll('.date-error');

const yearText = document.querySelector('.years');
const monthText = document.querySelector('.months');
const dayText = document.querySelector('.days');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  let hasError = false;
  // empty validation
  if (day === '') {
    showErrorAlert(0, 'This field is required');
    hasError = true;
  }
  if (month === '') {
    showErrorAlert(1, 'This field is required');
    hasError = true;
  }
  if (year === '') {
    showErrorAlert(2, 'This field is required');
    hasError = true;
  }
  if (hasError) return;

  // inValid date
  if (!isValidDay(day)) {
    showErrorAlert(0, 'Must be a valid date');
    hasError = true;
  }
  if (!isValidMonth(month)) {
    showErrorAlert(1, 'Must be a valid date');
    hasError = true;
  }
  if (!isValidYear(year)) {
    showErrorAlert(2, 'Must be a valid date');
    hasError = true;
  }

  if (hasError) return;

  if (!isRealDate(day, month, year)) {
    showErrorAlert(0, 'Must be a valid date');
    showErrorAlert(1, '');
    showErrorAlert(2, '');
  }

  // show on UI
  const { years, months, days } = ageCalculator(day, month, year);
  yearText.innerText = years;
  monthText.innerText = months;
  dayText.innerText = days;
});

form.addEventListener('change', (e) => {
  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  if (day !== '' && isValidDay(day)) {
    removeErrorAlert(0);
  }
  if (month !== '' && isValidMonth(month)) {
    removeErrorAlert(1);
  }
  if (year !== '' && isValidYear(year)) {
    removeErrorAlert(2);
  }

  if (!isValidDay(day)) {
    showErrorAlert(0, 'Must be a valid date');
  }
  if (!isValidMonth(month)) {
    showErrorAlert(1, 'Must be a valid date');
  }
  if (!isValidYear(year)) {
    showErrorAlert(2, 'Must be a valid date');
  }
});

function showErrorAlert(index, message) {
  dateLabel[index].classList.add('label-error');
  dateInput[index].classList.add('input-error');
  errorMessage[index].innerText = message;
  errorMessage[index].style.display = 'inline-block';
}

function removeErrorAlert(index) {
  dateLabel[index].classList.remove('label-error');
  dateInput[index].classList.remove('input-error');
  errorMessage[index].style.display = 'none';
}

function isRealDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === Number(year) &&
    date.getMonth() === month - 1 &&
    date.getDate() === Number(day)
  );
}

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

function ageCalculator(day, month, year) {
  const today = new Date();
  const writtenDate = new Date(year, month - 1, day);

  let years = today.getFullYear() - writtenDate.getFullYear();
  let months = today.getMonth() - writtenDate.getMonth();
  let days = today.getDate() - writtenDate.getDate();

  if (days < 0) {
    const previousMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += previousMonthDays;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days };
}
