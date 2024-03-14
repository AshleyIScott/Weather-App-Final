function city(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchCityInput.value;

  function weather(response) {
    let cityTemperature = document.querySelector(".temp-value");
    cityTemperature.innerHTML = Math.round(response.data.temperature.current);
    let currentConditions = document.querySelector("#current-conditions");
    currentConditions.innerHTML = response.data.condition.description;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `${response.data.wind.speed}km/h`;
    let icon = document.querySelector("#temp-icon");
    icon.innerHTML = `<img src="${response.data.condition.icon_url}" id="temp-icon" />`;
    let currentDay = document.querySelector("#current-day-time");
    let date = new Date(response.data.time * 1000);
    currentDay.innerHTML = formatDate(date);
  }

  let apiKey = "384o5eb54t8f21820fdceb7ff6b5a26b";
  let query = searchCityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weather);
}
let cityInput = document.querySelector("#search-city");
cityInput.addEventListener("submit", city);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes},`;
}
