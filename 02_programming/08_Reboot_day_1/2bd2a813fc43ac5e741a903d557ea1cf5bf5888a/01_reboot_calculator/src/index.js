import readline from "readline";
import calculator from "./calculator.js";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//calculator(reader);
function power(input){
  if(input === "y"){
    console.log("Votre calculatrice est allumée \n");
    calculator(reader);
    //reader.question("Entrez un premier nombre", calculator);
  } 
  else if(input === "n"){
  //reader.question("Votre calculatrice n'est pas allumée \n", power);
  reader.close();
  }
  else {
  reader.question("Voulez vous entrer dans la calculette ? (y/n) \n", power);
  }
}
reader.question("Voulez vous entrer dans la calculette ? (y/n) \n", power);
export default power;
