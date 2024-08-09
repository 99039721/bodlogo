const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: "sun",
    day: "day",
    time: new Date().toLocaleTimeString("en-US"),
  },
  {
    city: "London",
    temperature: 18,
    weather: "Cloudy",
    icon: "cloudy",
    day: "night",
    time: new Date().toLocaleTimeString("en-GB"),
  },
  {
    city: "Tokyo",
    temperature: 30,
    weather: "Rainy",
    icon: "rainy",
    day: "day",
    time: new Date().toLocaleTimeString("ja-JP"),
  },
  {
    city: "Sydney",
    temperature: 22,
    weather: "Partly Cloudy",
    icon: "cloudy",
    city: "Paris",
    day: "day",
    time: new Date().toLocaleTimeString("en-AU"),
  },
  {
    city: "Ulaanbaatar",
    temperature: 25,
    weather: "Clear",
    day: "night",
    icon: "snow",
    time: new Date().toLocaleTimeString("fr-FR"),
  },
];

const weatherBoxes = document.getElementById("weatherBoxes");

const IconComponent = (icon) => {
  if (icon === "sun") {
    return `<div class="sun">
                  <i class="fa fa-sun"></i>
              </div>`;
  } else if (icon === "rainy") {
    return `<div class="rainy">
                  <i class="fa fa-cloud-moon-rain"></i>
              </div>`;
  } else if (icon === "cloudy") {
    return `<div class="cloud">
                  <i class="fa fa-cloud"></i>
              </div>`;
  } else if (icon === "snow") {
    return `<div class="snow">
                  <i class="fa-regular fa-snowflake"></i>
              </div>`;
  }
};

const isDay = (day) => {
  if (day === "night") {
    return `./night.jpeg`;
  } else {
    return `./day.jpeg`;
  }
};

const cardComponent = (item, iconAPI) => {
  const { city, temperature, weather, icon, day, time } = item;
  const iconComponentResult = IconComponent(icon);
  const imageUrl = isDay(day);
  return `<div class="weatherBox" style="background-image: url(${imageUrl})">
    <div class="deed">
      <div>
        <div class="city"> ${city} </div>
        <div class="time"> ${time} </div>
      </div>
      <div class="temprature"> ${temperature} </div>
    </div>
    <div class="dood">
      <div class="weather">${weather}</div>
      <img src="${iconAPI}" class="iconAPI"/>
    </div>
  </div>`;
};

const render = (data, iconAPI) => {
  weatherBoxes.innerHTML = "";
  weatherBoxes.innerHTML += cardComponent(data, iconAPI);
  //   data.forEach((item) => {
  //     weatherBoxes.innerHTML += cardComponent(item);
  //   });
};

// searchs.addEventListener("keyup", () => {
//   const filtered = weathers.filter(({ city }) =>
//     city.toLowerCase().includes(searchs.value.toLowerCase())
//   );

//   render(filtered);
// });

// const { city, temperature, weather, icon, day, time } = item;

// const input = document.getElementById("inputId");
// const searchBtn = document.getElementById("searchBtn");
// const container = document.getElementById("container");
// const loading = document.getElementById("loading");

// loading.style.display = "none";

// addEventListener("keyup", async () => {
//   loading.style.display = "flex";

//   const { data } = await getGiphyData(input.value);

//   loading.style.display = "none";
//   container.innerHTML = "";
//   data.forEach((element) => {
//     const imgTag = `<img src=${element.images.original.url} />`;

//     container.innerHTML += imgTag;
//   });
// });

const button = document.getElementById("button");
const searchs = document.getElementById("search");

// {
//     city: "New York",
//     temperature: 28,
// weather: "Sunny",
// icon: "sun",
// day: "day",
// time: new Date().toLocaleTimeString("en-US"),
//   },

button.addEventListener("click", async () => {
  const result = await getWeatherData(searchs.value);

  const iconAPI = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;

  const data = {
    city: searchs.value,
    temperature: result.main.temp,
    weather: result.weather[0].main,
    icon: "sun",
    day: "day",
    time: new Date().toLocaleTimeString("en-US"),
  };
  render(data, iconAPI);
});
const getWeatherData = async (searchInput) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=7c91776fb1267161889e298c3e7ceb4b`;
  const result = await fetch(url);
  return result.json();
};
