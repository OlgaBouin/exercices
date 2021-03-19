const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// const historyOfIAMoves = [];
// const historyOfHumanMoves =[];
// const historyOfResultsForAI = [];


const generatePaperOrRockOrScissors = () => {
  return Math.round(Math.random() * 3 + 0.5);
};

const leftHandsArray = [
  [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
];


let rightHandsArray = [];

const revertString = (string) => {
  return string.replace("(", "*").replace(")", "(").replace("*", ")").split("").reverse().join("");
};

for (let i = 0; i < leftHandsArray.length; i++) rightHandsArray.push(leftHandsArray[i].map(revertString));

rightHandsArray[2][2] = " (________(__)";

const printHand = (number, arrayHands) => {
  if (number === 1 || number === 2 || number === 3) console.log(arrayHands[number - 1]);
  else return Error;
};


const replayShuiFuMi = (yesOrNoReponse) => {
  console.log("test");
  if (yesOrNoReponse.toUpperCase() === "YES" || yesOrNoReponse.toUpperCase() === "Y")
    reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);
  else if (yesOrNoReponse.toUpperCase() === "NO" || yesOrNoReponse.toUpperCase() === "N") {
    reader.close();
  } else reader.question("Don't get it. Type Yes or No ", replayShuiFuMi);
};


const playShuiFuMi = (numberOfHuman) => {
  const numberOfIA = generatePaperOrRockOrScissors();
  console.log("Here is the response of IA :" + numberOfIA);
  //historyOfIAMoves.push(numberOfIA);
  printHand(numberOfIA, leftHandsArray);
  if (numberOfIA === numberOfHuman) {
    //historyOfResultsForAI.push(-1);
    reader.question("Nobody lost ! Try again ? Type Yes or No ",replayShuiFuMi);  
  } else if (
    numberOfHuman.toString() + numberOfIA.toString() === "12" ||
    numberOfHuman.toString() + numberOfIA.toString() === "23" ||
    numberOfHuman.toString() + numberOfIA.toString() === "31"
  ) {
    console.log("Computer won :.( ");
    //historyOfResultsForAI.push(1);
    return;
  } else if (
    numberOfHuman.toString() + numberOfIA.toString() === "13" ||
    numberOfHuman.toString() + numberOfIA.toString() === "21" ||
    numberOfHuman.toString() + numberOfIA.toString() === "32"
  ) {
    console.log("You won !!!");
    //historyOfResultsForAI.push(0);
    return;
  }
};



const callbackOnUsersReply = (responseOfUser) => {
  if (!Number.isInteger(parseInt(responseOfUser))) reader.question("One more try : \n", callbackOnUsersReply);
  else if (responseOfUser === "1" || responseOfUser === "2" || responseOfUser === "3") {
    historyOfHumanMoves.push(responseOfUser);
    printHand(parseInt(responseOfUser), rightHandsArray);
    playShuiFuMi(parseInt(responseOfUser));
    reader.close();
  } else reader.question("One more try : \n", callbackOnUsersReply);
};
reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);

console.log(historyOfHumanMoves);
console.log(historyOfIAMoves);
console.log(historyOfResultsForAI);