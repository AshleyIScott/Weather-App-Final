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
  }
  let apiKey = "384o5eb54t8f21820fdceb7ff6b5a26b";
  let query = searchCityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weather);
}
let cityInput = document.querySelector("#search-city");
cityInput.addEventListener("submit", city);
