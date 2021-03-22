// There should be no import in this file. Only exports!

function longCoffee(container){
  return container.consumeLitersOfCoffee(0.15);
};

function expresso(container){
  return container.consumeLitersOfCoffee(0.08);
};



export {longCoffee, expresso};