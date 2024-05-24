# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

grid


```css

@media screen and (min-width: 768px) {
    .text-wrapper {
        width: 40%;
        margin: 0 auto;
    }

    .heading {
        font-weight: var(--font-weight-light);
        font-size: 38px;
    }

    .grid {
        width: 80%;
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 2rem;
    }

    .card {
        max-width: 380px;
    }

/* |1 (column1) 2 | 2 (column2) 3 | 3 (column3) 4| */

    .card1 {
        grid-column: 1 / 2; /* (1 to 2) */
        grid-row: 1 / span 2;
        justify-self: flex-end;
        align-self: center;
    }

    .card2 {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .card3 {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    .card4 {
        grid-column: 3 / 4;
        grid-row: 1 / span 2;
        justify-self: flex-start;
        align-self: center;
    }

    .card2,
    .card3 {
        justify-self: center;
    }
}
```