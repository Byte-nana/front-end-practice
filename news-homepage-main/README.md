# 📰 News Homepage – _Frontend Mentor Challenge Solution_

This is a solution to the [_News Homepage challenge on Frontend Mentor_](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).  
It demonstrates a fully responsive news website layout featuring a modern navigation system, structured content grid, and accessible interactions.

This project is part of my **Front-End Practice Series**, focusing on grid-based layouts, responsive typography, and mobile navigation handling.

---

## 📚 Table of Contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [My Process](#my-process)
  - [Main Features](#main-features)
  - [What I Learned](#what-i-learned)
  - [Challenges and Problem-Solving](#challenges-and-problem-solving)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

---

## 🪄 Overview

A responsive news homepage built with **semantic HTML**, **CSS Grid/Flexbox**, and **vanilla JavaScript**.  
It includes a toggleable mobile navigation menu and adaptive layout that scales beautifully across screen sizes.

### Screenshots

**Desktop View**  
![Desktop screenshot](/screenshot-desktop.png)

**Mobile View**  
![Mobile screenshot](/screenshot-mobile.png)

### Links

- **Live Site URL:** [https://byte-nana.github.io/front-end-practice/news-homepage/](https://byte-nana.github.io/front-end-practice/news-homepage-main)
- **GitHub Repository:** [https://github.com/Byte-nana/front-end-practice/tree/main/news-homepage](https://github.com/Byte-nana/front-end-practice/tree/main/news-homepage-main)

### Live Demo

- **Loom Demo Video:** [🎥 Watch Demo](https://www.loom.com/share/db22bc536b8a41b5a9cc42bb10613cf0)

<div>
    <a href="https://www.loom.com/share/db22bc536b8a41b5a9cc42bb10613cf0">
      <p>Frontend Mentor | News homepage - 1 November 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/db22bc536b8a41b5a9cc42bb10613cf0">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/db22bc536b8a41b5a9cc42bb10613cf0-955a78b4200b3450-full-play.gif">
    </a>
  </div>

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 💡 My Process

### Main Features

- Responsive two-column layout with adaptive typography
- Mobile navigation menu with overlay background
- Semantic sectioning for improved readability and accessibility
- Hover and active states for all interactive elements

### What I Learned

- How to structure a **multi-section grid layout** with CSS Grid and Flexbox for adaptive design.
- Improved my understanding of **clamp()** for scalable font sizing and spacing.
- Used **event delegation** to toggle the mobile menu with efficient DOM control.

```js
function toggleNav(target, className, state) {
  if (target.matches(className)) {
    headerNav.classList[state]('open');
    body.classList[state]('overlay');
  }
}
```

### Challenges and Problem-Solving

The key challenge was managing **the navigation menu toggle** between mobile and desktop views.  
I wanted to avoid repetitive code, so instead of attaching multiple listeners to each icon, I used a single event listener on the header and **delegated actions** based on the clicked target.  
This approach keeps the logic **clean, maintainable, and scalable**, especially if more navigation states are added later.

---

## 👩‍💻 Author

Developed by [Byte-nana](https://github.com/Byte-nana)  
Front-End Developer | HTML • CSS • JavaScript

- GitHub – [Byte-nana](https://github.com/Byte-nana)
- Frontend Mentor – [@Byte-nana](https://www.frontendmentor.io/profile/Byte-nana)

---

## 🙏 Acknowledgements

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing the challenge design and community feedback that support skill development and growth.
