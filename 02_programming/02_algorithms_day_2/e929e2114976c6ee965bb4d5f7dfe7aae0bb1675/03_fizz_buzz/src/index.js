function fizzBuzz(list) {
  // Code the function here.
  console.log(list);
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

//<script type="text/javascript" src="../../02_range_function/src/index.js"></script>
//call range
//getscript("../../02_range_function/src/index.js",function(){
//range();
// });
//import {range} from "../../02_range_function/src/index.js";

//const rangeToTransform = range(1,20);
//console.log(rangeToTransform);
//console.log(transformFizzBuzz(15));
//console.log(fizzBuzz([3,4,5,15,30,29]));  

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
