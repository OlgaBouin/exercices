function joinArray(array,string) {
  // Code your function here.
  return array.reduce((stringToReturn,element) => {return stringToReturn + string + element;});
}

//console.log(joinArray(["U","UIH","ATR","OP"],"lalala"));

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
