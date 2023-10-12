const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBtn = document.querySelector(".btn-search");
const input = document.querySelector(".input-value");

const apiKey = "66f98dee8ae8437935a3711f01f79498";

let city = "Khemisset";

async function getWeather() {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  ).then(async (res) => {
    if (res.status === 200) {
      const data = await res.json();
      cityName.innerHTML = data?.name;
      temp.innerHTML = Math.round(data.main?.temp) + "°";
      humidity.innerHTML = data.main?.humidity;
      wind.innerHTML = data.wind?.speed;
    } else {
      input.value = "mss7 hadchi w 3awdha db yal7mar 😂";
      alert("city not found");
    }
  });
}

getWeather();

searchBtn.addEventListener("click", () => {
  city = input.value;
  getWeather();
});
