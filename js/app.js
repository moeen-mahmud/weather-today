const API = `0d184e9991a442f8f68380be464bba02`;

const searchCity = async () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=${API}`;
  const res = await fetch(url);
  const data = await res.json();
  displayWeather(data);
};

const displayWeather = (ordinate) => {
  // console.log(ordinate.main.temp);
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const condition = document.getElementById("condition");
  const icon = document.getElementById("condition-icon");
  location.innerText = `${ordinate.name}`;
  temp.innerText = `${ordinate.main.temp}`;
  condition.innerText = `${ordinate.weather.map((con) => `${con.main}`)}`;
  icon.setAttribute(
    `src`,
    `https://openweathermap.org/img/wn/${ordinate.weather.map(
      (ico) => `${ico.icon}`
    )}@2x.png`
  );
};
