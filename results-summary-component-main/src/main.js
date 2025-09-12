fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    const ul = document.querySelector('.summary__list');

    data.forEach((item) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'list__item');

      li.innerHTML = `
      <div class="title__box">
        <img class="list__img" src="${item.icon}" alt="${item.category}">
        <span class="list__title">${item.category}</span>
      </div>
      <div class="score__box">
        <span class="list__score">${item.score} </span>
        <span class="list__total-score">/ 100</span>
      </div>
      `;
      ul.appendChild(li);
    });
  })
  .catch((err) => console.error(err));
