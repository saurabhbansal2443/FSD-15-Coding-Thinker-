let input = document.getElementById("city");
let checkBtn = document.getElementById("checkBtn");

let locationElement = document.getElementById("location");
let tempElement = document.getElementById("temp");
let maxTempElement = document.getElementById("max");
let minTempElement = document.getElementById("min");
let conditionElement = document.getElementById("condition");

let apiKey = "ed8c37818a944c29adf40311232510";
async function getWeatherData(city) {
  let data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`,
  );
  let jsonData = await data.json();
  console.log(jsonData); //
  updateUI(jsonData);
}
function updateUI(data) {
  let location = `${data.location.name} , ${data.location.country}`;
  let temprature = data.current.temp_c;
  let minTemp = data.current.wind_mph;
  let maxTemp = data.current.wind_kph;
  let condition = data.current.condition.text;

  locationElement.innerText = location;
  tempElement.innerText = temprature;
  minTempElement.innerText = minTemp;
  maxTempElement.innerText = maxTemp;
  conditionElement.innerText = condition;
}
checkBtn.addEventListener("click", function () {
  let city = input.value;
  input.value = "";
  getWeatherData(city);
});
