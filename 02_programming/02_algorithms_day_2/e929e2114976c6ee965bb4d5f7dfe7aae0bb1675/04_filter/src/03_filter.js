function fnIsOdd(numberToCheck){
  return ((numberToCheck%2) === 1);
}


function filter(array, fn) {
  // Your code here
  if (array.length<1) 
    return array;
  else
    return array.filter(fn);
}

// do not remove this line, it is for tests
module.exports = filter;
