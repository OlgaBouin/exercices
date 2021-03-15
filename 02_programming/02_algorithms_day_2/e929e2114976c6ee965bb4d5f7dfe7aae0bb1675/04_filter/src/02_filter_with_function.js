function fnIsOdd(numberToCheck){
  return ((numberToCheck%2) === 1);
}


function filter(array, fn) {
  // Your code here
  const newArray=[];
  for(let i=0;i<array.length;i++){
    if (fn(array[i])) newArray.push(array[i]);
  }
  return newArray;
}



//console.log(filter([1,2,23,43,54,54,54],fnIsOdd));

// do not remove this line, it is for tests
module.exports = filter;