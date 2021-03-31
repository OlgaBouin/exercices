import fetch from "node-fetch";
import myKey = require("./../../../../../.open-weather-api");
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}


function weatherByZipcode(zipcode: any, countryCode: any) {
  // code the function here
  fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&appid=${myKey.myApiKey}`)
  .then((res) => res.json())
  .then((resp) => {
    console.log(`Weather for ${resp.city.name}`);
    for(let i=0;i<resp.list.length;i++){
    
    console.log((new Date(resp.list[i].dt).getDate()))}
  })
  //.then((stringResponse) => console.log(stringResponse.split()))
  .catch((e) => console.error(e));}

function weatherByLatitudeAndLongitude(latitude: any, longitude: any) {
  // code the function here
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${myKey.myApiKey}`)
  .then((resp) => resp.json())
  .then((resp2) => console.log(resp2))
  .catch((e) => console.error(e));}


weatherByZipcode(59000,"fr");
//weatherByLatitudeAndLongitude(35,139);

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
