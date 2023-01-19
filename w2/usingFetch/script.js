console.log("contacting the weather api");
const weather = document.querySelector(".weather");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=29.98&lon=75.72&appid=b047139743ca7e5fca31400eb619cfa0"
)
  .then((response) => response.json())
  .then((data) => {const dataFetched = data
    console.log(dataFetched.weather[0].description)
    weather.innerText = dataFetched.weather[0].description
});

console.log("wait one of clerks is getting the data from the office");
console.log(dataFetched)