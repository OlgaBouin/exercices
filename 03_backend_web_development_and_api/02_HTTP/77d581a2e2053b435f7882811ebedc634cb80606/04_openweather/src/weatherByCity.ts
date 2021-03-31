import fetch from "node-fetch";
import myKey = require("./../../../../../.open-weather-api");

function weatherByCity(city: string) {
  // code the function here
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${myKey.myApiKey}`)
  .then((resp) => resp.json())
  .then((resp2) => console.log(resp2.list[0].main.temp+"°C"))
  .catch((e) => console.error(e));}

//weatherByCity("Paris");

// leave lines below for tests to work properly
export { weatherByCity }


