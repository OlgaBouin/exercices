export function range(arrayFromNumber,arrayToNumber) {
  // Code the function here.
  let arrayToReturn=[];
  if (arrayFromNumber<arrayToNumber){
    for(let i=arrayFromNumber;i<arrayToNumber+1;i++){
      arrayToReturn.push(i);
      
    }return arrayToReturn;}
  else if(arrayFromNumber===arrayToNumber){arrayToReturn.push(arrayFromNumber); return arrayToReturn;}
  else {
    for(let i=arrayFromNumber;i>arrayToNumber-1;i--){
      arrayToReturn.push(i);
    }
    return arrayToReturn;
  }
}

console.log(range(2,7));

// Do not remove last lines, it is for tests
module.exports = range;
