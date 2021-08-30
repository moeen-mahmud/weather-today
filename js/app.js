// OpenWeatherMap API Key
const API = `0d184e9991a442f8f68380be464bba02`;

/**
 *  Functionality for search button
 */
const searchCity = async () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  if (inputText === "") {
    inputField.setAttribute("placeholder", "Search field cannot be empty...");
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=${API}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      displayWeather(data);
    } catch (err) {
      console.log(err);
    }
  }
};

/**
 * Functionality for displaying weather condition
 */
const displayWeather = (ordinate) => {
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const condition = document.getElementById("condition");
  const icon = document.getElementById("condition-icon");
  const tempBlock = document.getElementById("temp-block");
  if (ordinate.name && ordinate.main.temp) {
    location.innerText = `${ordinate.name}`;
    temp.innerText = `${ordinate.main.temp}`;
    const mainDes = `${ordinate.weather.map((con) => `${con.main}`)}`;
    condition.innerText = `${ordinate.weather.map((con) => `${con.main}`)}`;
    icon.setAttribute(
      `src`,
      `https://openweathermap.org/img/wn/${ordinate.weather.map(
        (ico) => `${ico.icon}`
      )}@2x.png`
    );
    changeBg(mainDes);
  } else {
    location.innerText = `No city found`;
    temp.innerText = ``;
    condition.innerText = ``;
    tempBlock.innerText = ``;
    icon.setAttribute(`src`, `images/dissapointment-face.png`);
  }
};

// Functionality for changing the background image
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
