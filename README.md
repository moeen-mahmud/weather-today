# A simple website to get today's weather conditions using OpenWeatherMap API

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to get the current weather condition by city name. The background image and condition icon will change according to the weather status.

### Screenshot

![Desktop View](./screenshot/ss-weather-today.gif)

- Solution URL: [Git Repo](https://github.com/moeen-mahmud/weather-today)
- Live Site URL: [Live Site](https://weather-today-one.vercel.app/)

## My Process

### Built With

- HTML5 markup
- [Bootstrap](https://getbootstrap.com/)
- JavaScript
- API
- [Open Weather Map](https://openweathermap.org/api)

### What I learned

By doing this project, I learn a bunch of techniques regarding the API. I also know about the usage of API keys. Today, I tried to change the background image when the weather status gets updated. Here is the simple approach of my experimenting (although I know it's not the best practice, I tried it out anyway):

```javascript
const changeBg = (condition) => {
  if (condition === "Clear") {
    document.body.style.backgroundImage = "url(images/sunny-bg-webp.webp)";
  } else if (condition === "Rain") {
    document.body.style.backgroundImage = "url(images/rainy-bg-webp.webp)";
  } else if (condition === "Snow") {
    document.body.style.backgroundImage = "url(images/snow-webp.webp)";
  } else if (condition === "Clouds") {
    document.body.style.backgroundImage =
      "url(images/scattered-cloud-webp.webp)";
  }
};
```

### Continued Development

Following the previous day, it is my second API project. Slowly, I become comfortable with it. Hope to create some exciting projects in the day ahead.

### Useful resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Open Weather Map](https://openweathermap.org/api)

## Author

- Twitter - [moeen_mahmud](https://twitter.com/moeen_mahmud)
