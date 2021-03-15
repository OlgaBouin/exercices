function double(numberToDouble) {
  // Code your function here.
  return numberToDouble*2;
}

function map(array,fn) {
  // Code your function here.
  return array.map(fn);
}

// Do not remove last lines, it is for tests
module.exports = { double: double, map: map };
