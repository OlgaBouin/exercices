function fizzBuzz(list) {
  // Code the function here.
  //console.log(list);
  return list.map(transformFizzBuzz);
}

function transformFizzBuzz(numberToCheck){
  const moduloThree = numberToCheck % 3;
  //console.log(moduloThree);
  const moduloFive = numberToCheck % 5;
  //console.log(moduloFive);
  if (moduloThree===0 && moduloFive===0){
    return "FizzBuzz";
  }
  else if (moduloThree===0){
    return "Fizz";
  }
  else if (moduloFive===0){
    return "Buzz";
  }
  else return numberToCheck;
}


// Leave the line below for tests to work properly.
module.exports = fizzBuzz;
