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
    city: "Paris",
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

const cardComponent = (item) => {
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
    <div class="icon">
      ${iconComponentResult}
    </div>
  </div>
</div>`;
};

const render = (data) => {
  weatherBoxes.innerHTML = "";

  data.forEach((item) => {
    weatherBoxes.innerHTML += cardComponent(item);
  });
};

render(weathers);

const searchs = document.getElementById("search");

searchs.addEventListener("keyup", () => {
  const filtered = weathers.filter(({ city }) =>
    city.toLowerCase().includes(searchs.value.toLowerCase())
  );

  render(filtered);
});
