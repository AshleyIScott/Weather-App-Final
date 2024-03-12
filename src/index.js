function city(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchCityInput.value;
}
let cityInput = document.querySelector("#search-city");
cityInput.addEventListener("submit", city);
