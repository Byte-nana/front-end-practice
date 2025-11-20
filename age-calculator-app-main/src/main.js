'use strict';

const form = document.querySelector('.calculator__form');

const dateLabel = document.querySelectorAll('.date-label');
const dateInput = document.querySelectorAll('.date-input');
const errorMessage = document.querySelectorAll('.date-error');

const yearText = document.querySelector('.years');
const monthText = document.querySelector('.months');
const dayText = document.querySelector('.days');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const [day, month, year] = getDatesValue();

  if (!checkEmptyField()) return;
  if (!checkValidField()) return;
  if (!checkRealDate(day, month, year)) return;
  if (!checkPastDate(day, month, year)) return;

  const { years, months, days } = ageCalculator(day, month, year);
  yearText.innerText = years;
  monthText.innerText = months;
  dayText.innerText = days;
});

form.addEventListener('change', (e) => {
  const fields = [
    { validate: isValidDay, message: 'Must be a valid day' },
    { validate: isValidMonth, message: 'Must be a valid month' },
    { validate: isValidYear, message: 'Must be in the past' },
  ];

  dateInput.forEach((date, index) => {
    const value = date.value.trim();
    if (value !== '' && !fields[index].validate(value)) {
      showErrorAlert(index, 'Must be a valid date');
    }
    if (value !== '' && fields[index].validate(value)) {
      removeErrorAlert(index);
    }
  });
});

function getDatesValue() {
  return [...dateInput].map((d) => d.value.trim());
}

function checkEmptyField() {
  let hasError = false;

  dateInput.forEach((date, index) => {
    if (date.value.trim() === '') {
      showErrorAlert(index, 'This field is required');
      hasError = true;
    }
  });

  return !hasError;
}

function checkValidField() {
  let hasError = false;

  const fields = [
    { validate: isValidDay, message: 'Must be a valid day' },
    { validate: isValidMonth, message: 'Must be a valid month' },
    { validate: isValidYear, message: 'Must be in the past' },
  ];

  fields.forEach((field, index) => {
    const value = dateInput[index].value.trim();
    if (!field.validate(value)) {
      showErrorAlert(index, field.message);
      hasError = true;
    }
  });

  return !hasError;
}

function checkRealDate(day, month, year) {
  let hasError = false;

  if (!isRealDate(day, month, year)) {
    showErrorAlert(0, 'Must be a valid date');
    showErrorAlert(1, '');
    showErrorAlert(2, '');
    hasError = true;
  }

  return !hasError;
}

function checkPastDate(day, month, year) {
  let hasError = false;

  const today = new Date();
  const givenDate = new Date(year, month - 1, day);

  if (givenDate > today) {
    for (let i = 0; i < dateInput.length; i++) {
      showErrorAlert(i, 'Must be in the past');
      hasError = true;
    }
  }
  return !hasError;
}

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

function isRealDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === Number(year) &&
    date.getMonth() === month - 1 &&
    date.getDate() === Number(day)
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
