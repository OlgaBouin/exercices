function filter(array, str) {
  // Your code here
  const newArray = [];
  if (array.length <1) return newArray;
  else if (str === "odd"){
    for(let i=0;i<array.length;i++){
      if(array[i]%2) newArray.push(array[i]);
    }
    return newArray;
  }
  else if (str === "even"){
    for(let i=0;i<array.length;i++){
      if(!(array[i]%2)) newArray.push(array[i]);
    }
    return newArray;
  }
  else {
    console.log("Use with odd or even");
    return array;
  }
}





// console.log([1,23,43,19,22,48]);
// console.log(filter([1,23,43,19,22,48],"odd"));
// console.log(filter([1,23,43,19,22,48],"even"));

// do not remove this line, it is for tests
module.exports = filter;
