// Here you can import functions from 'container' and 'drink'

import * as container from "./container.js";
import * as drinks from "./drinks.js";

function expresso() {
  return drinks.expresso(container);
}
function fillWithLitersOfCoffee(vol) {
  return container.putLitersOfCoffee(vol);
}
function longCoffee() {
  return drinks.longCoffee(container);
}



export { expresso, fillWithLitersOfCoffee, longCoffee };
