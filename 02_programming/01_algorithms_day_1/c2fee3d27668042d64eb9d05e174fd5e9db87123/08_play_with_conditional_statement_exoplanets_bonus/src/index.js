// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");

// Your code here:
let canHabitateLife = true;

canHabitateLife=canHabitateLife 
  && (planet.habitalZone
  && planet.rotationStability
  && ((planet.mass >= 0.5) || ((planet.mass > 0.32 && planet.mass < 0.5) && (planet.radius > 1)))
  || (planet.mass === 1 && planet.radius === 1 && planet.habitalZone && planet.rotationStability))
  //&& (star.temperature > 3500)
  //&& (star.temperature < 7000)
  && ((star.spectralClass === 'K') || (star.spectralClass === 'M'));


console.log(canHabitateLife);



// let canHabitateLife = true;
// if(star.spectralClass != 'K' || star.spectralClass != 'M' )
// {
//   canHabitateLife = false;
// }
// else if(star.temperature < 3500 || star.temperature > 7000)
// {
//   canHabitateLife = false;
// }
// else if(planet.habitalZone = false)
// {
//   canHabitateLife = false;
// }
// else if(planet.mass < 0.32 || (planet.mass < 0.5 && planet.radius <= 1))
// {
//   canHabitateLife = false;
// }
// else if(planet.radius < 0.5 || planet.radius > 2.5)
// {
//   canHabitateLife = false;
// }
// else if(planet.rotationStability = false)
// {
//   canHabitateLife = false;
// }





// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
