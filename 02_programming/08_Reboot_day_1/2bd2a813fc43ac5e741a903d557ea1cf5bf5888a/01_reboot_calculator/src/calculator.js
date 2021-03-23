import power from "./index.js";
function calculette(value1, value2, opp) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    if (opp === "+"){
        return value1 + value2;
    }
    else if (opp === "-"){
        return value1 - value2;
    }
    else if (opp === "/"){
        return value1 / value2;
    }
    else if (opp === "*"){
        return value1 * value2;
    }
};
function checkInput(n1, n2, oppp){
    if(oppp === "/" && n2 === "0" && n1 != "0"){
        console.log("Pas de divisions par 0 \n");
        return false;
    }
    else if((typeof parseInt(n1) === "number") && (typeof parseInt(n2) === "number") && ((oppp === "+") || (oppp === "-") || (oppp === "*") || (oppp === "/"))){
        return true;
    }
    else {
        return false;
    }
};
function calculator(reader) {
    console.log("Vous allez pouvoir choisir un premier nombre, votre operation à réaliser puis votre deuxieme nombre. \n");
    reader.question("Quel est le premier nombre ? \n", (number1) => {
        reader.question("Quelle est l'operation ? \n", (oper) => {
            reader.question("Quel est le deuxieme nombre ? \n", (number2) => {
                console.log(number1, oper, number2, " = ");
                if(checkInput(number1, number2, oper)){
                     console.log(calculette (number1, number2, oper));
                     power();
                }
                else {
                    console.log("Vous devez entrer un nombre et une operation valide.");
                    calculator(reader);
                }
            });
        });
    });
};
export default calculator;
