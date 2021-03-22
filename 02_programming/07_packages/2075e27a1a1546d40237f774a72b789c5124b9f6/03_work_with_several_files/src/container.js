// There should be no import in this file. Only exports!
let currectWaterVolume = 0;

function putLitersOfCoffee(quantity) {
  currectWaterVolume += quantity;
}

function consumeLitersOfCoffee(quantity) {
  if (currectWaterVolume >= quantity) {
    currectWaterVolume -= quantity;
    return true;
  } else return false;
}

export { putLitersOfCoffee, consumeLitersOfCoffee };
