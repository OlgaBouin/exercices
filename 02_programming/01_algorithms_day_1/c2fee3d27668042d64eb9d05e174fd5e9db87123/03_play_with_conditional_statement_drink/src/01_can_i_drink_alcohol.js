// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.
//
// Create two objects, `frieda`, `francis` with the fields :
//   `age` (an integer) and `name`, (obviously a string)
const frieda ={age:22,name:"Frieda"};
const francis ={age:17,name:"Francis"};
// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer,
// respectively, to the question "Can he / she drink alcohol?".
// Think about the Primitive Data Type that is best suited for the answer.
// Hint: Think about the number of options
let canFriedaDrinkAlcohol = true;
let canFrancisDrinkAlcohol= false;
// These variables should stay correct if we modify the ages of the objects
// `francis` and `frieda` in the declaration.
// Warning: If you run `npm test` again after changing the age values,
// it is expected to see failures for these tests:
// "Frieda|Francis should be inside an object frieda|francis".
// All the other tests should work.

if (frieda["age"]>17) {canFriedaDrinkAlcohol=true;}
else if (frieda["age"]<18) {canFriedaDrinkAlcohol=false;}
else console.log("Frieda should be inside an object frieda");

if (francis["age"]>17) {canFrancisDrinkAlcohol=true;}
else if (francis["age"]<18) {canFrancisDrinkAlcohol=false;}
else console.log("Francis should be inside an object francis");
