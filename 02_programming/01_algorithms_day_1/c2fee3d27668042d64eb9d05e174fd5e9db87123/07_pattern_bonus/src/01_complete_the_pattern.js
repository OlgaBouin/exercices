// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let stringToPrint="";

for(let j=0;j<numberOfLine;j++){
  for (let i=numberOfLine;i>j;i--){
    stringToPrint=stringToPrint+i;
  }
  stringToPrint=stringToPrint+"\n";
}
console.log(stringToPrint.slice(0,-1));