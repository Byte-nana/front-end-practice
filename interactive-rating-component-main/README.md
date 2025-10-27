# 🌟 Interactive Rating Component – _Frontend Mentor Challenge Solution_

This is a solution to the [_Interactive Rating Component challenge on Frontend Mentor_](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).  
It showcases a clean, responsive rating card where users can select a score and receive a dynamic “Thank You” message upon submission.

This project is part of my **Front-End Practice Series**, designed to strengthen DOM manipulation, user interaction handling, and UI accessibility.

---

## 📚 Table of Contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Demo Video](#demo-video)
- [Tech Stack](#tech-stack)
- [My Process](#my-process)
  - [Main Features](#main-features)
  - [What I Learned](#what-i-learned)
  - [Challenges and Problem-Solving](#challenges-and-problem-solving)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

---

## Overview

A minimal yet interactive rating card built using **HTML**, **CSS**, and **JavaScript (ES6 modules)**.  
Users can select a rating from 1–5 and, upon clicking “Submit”, view a dynamically generated thank-you message — all within the same card.

### Screenshots

**Rating State**  
![Rating view mobile](/screenshot-mobile.png)
![Rating view desktop](/screenshot-desktop.png)

**Thank You State**  
![Thank you view](/screenshot-thankyou-state.png)

### Links

- **Live Site URL:** [https://byte-nana.github.io/front-end-practice/interactive-rating-component/](https://byte-nana.github.io/front-end-practice/interactive-rating-component-main/)

- **GitHub Repository:** [View on GitHub](https://github.com/Byte-nana/front-end-practice/tree/main/interactive-rating-component-main)

### Demo Video

- **Loom Demo Video:** [🎥 Watch Demo](https://www.loom.com/share/b8bbfa7cc792463cb1277ffe59fffb5a)

<div>
    <a href="https://www.loom.com/share/b8bbfa7cc792463cb1277ffe59fffb5a">
      <p>Frontend Mentor | Interactive rating component - 27 October 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/b8bbfa7cc792463cb1277ffe59fffb5a">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/b8bbfa7cc792463cb1277ffe59fffb5a-b0ac03a85f96a180-full-play.gif">
    </a>
  </div>

---

## Tech Stack

- **HTML5** – semantic, accessible structure
- **CSS3** – gradient background, rounded components, smooth transitions
- **JavaScript (ES6)** – event listeners, DOM updates via `innerHTML`

---

## My Process

### Main Features

- Interactive rating buttons (1–5) with active and hover states
- Dynamic card update showing a thank-you message after submission
- Fully responsive layout for mobile and desktop
- Accessible visual contrast and readable typography

### What I Learned

- How to **handle multiple event listeners** efficiently with **event delegation**.
- Improved logic for **active button state toggling** (`btn--clicked` class).
- Learned how to **replace card content dynamically** using JavaScript without reloading the page.

```js
card.innerHTML = `
  <img class="thank__img" src="./images/illustration-thank-you.svg" alt="Thank you image" />
  <div class="thank__wrapper">
      <p class="thank__score">You selected ${score} out of 5</p>
      <h1 class="title">Thank you!</h1>
      <p class="thank__content content">
          We appreciate your feedback and support.
      </p>
  </div>
`;
```

### Challenges and Problem-Solving

Initially, I debated **whether to build a separate thank-you card component** or modify the existing one dynamically.  
I decided to **change the innerHTML of the main card** instead of creating a separate section because:

- It keeps the structure lightweight and avoids unnecessary duplication in HTML.
- The user interaction feels **instant and seamless** without DOM element toggling or complex state management.
- It improves maintainability — all state changes occur in one place (`onSubmit()` function).

This approach also allowed better control of animations and transitions between states.

---

## Author

Developed by [Byte-nana](https://github.com/Byte-nana)  
Front-End Developer | HTML • CSS • JavaScript

- GitHub – [Byte-nana](https://github.com/Byte-nana)
- Frontend Mentor – [@Byte-nana](https://www.frontendmentor.io/profile/Byte-nana)

---

## Acknowledgements

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing the design challenge and community inspiration that help improve coding precision and design sense.
