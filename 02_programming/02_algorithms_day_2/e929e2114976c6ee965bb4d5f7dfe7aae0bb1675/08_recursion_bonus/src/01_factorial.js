function fact(n) {
  // your code here
  if (n===0) return 1;
  else if (n<0) return null;
  else return createArrayFromNumber(n).reduce((total,element) => total*element);
}

function createArrayFromNumber(number){
  const arrayToReturn=[];
  for(let i=number;i>0;i--){
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}


//console.log(fact(3));

// do not remove this line, it is for tests
module.exports = fact;
