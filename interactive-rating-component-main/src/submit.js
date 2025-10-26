'use strict';

//Show thank you card when users clicked submit button.

const submitBtn = document.querySelector('.submit__btn');
const card = document.querySelector('.rating');

submitBtn.addEventListener('click', () => {
  const clickedScore = document.querySelector('.btn--clicked');
  const score = clickedScore.textContent;

  if (!clickedScore) return;

  onSubmit(score);
});

function onSubmit(score) {
  card.innerHTML = `
        <img
            class="thank__img"
            src="./images/illustration-thank-you.svg"
            alt="Thank you image"
        />
        <div class="thank__wrapper">
            <p class="thank__score">You selected ${score} out of 5</p>
            <h1 class="title">Thank you!</h1>
            <p class="thank__content content">
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    `;
}
