const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const historyOfAIMoves = [];
const historyOfHumanMoves = [];
const historyOfResultsForAI = [];

const generatePaperOrRockOrScissors = () => {
  return Math.round(Math.random() * 3 + 0.5);
};

const helpAIGiveWinningNumber = (histOfResultsForAI,histOfHumanMoves,histOfAIMoves) => {
  const tempHistoryOfResultsForAI = [...histOfResultsForAI];
  const tempHistoryOfAIMoves = [...histOfAIMoves];
  
  if (histOfResultsForAI.length === 1 && histOfResultsForAI[0] === 0){
    return (histOfHumanMoves[0]%3 + 1);
  }
  if (histOfResultsForAI.length>2 && tempHistoryOfResultsForAI.pop() === 1 && tempHistoryOfResultsForAI.pop() === 1){
    return (tempHistoryOfAIMoves.pop()%3 + 1);
  }
  else return generatePaperOrRockOrScissors();
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
  if (yesOrNoReponse.toUpperCase() === "YES" || yesOrNoReponse.toUpperCase() === "Y")
    reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);
  else if (yesOrNoReponse.toUpperCase() === "NO" || yesOrNoReponse.toUpperCase() === "N") {
    reader.close();
  } else reader.question("Don't get it. Type Yes or No \n", replayShuiFuMi);
};

const playShuiFuMi = (numberOfHumain) => {
  const numberOfAI = helpAIGiveWinningNumber(historyOfResultsForAI,historyOfHumanMoves,historyOfAIMoves);
  console.log("Here is the response of AI :" + numberOfAI);
  historyOfAIMoves.push(numberOfAI);
  printHand(numberOfAI, leftHandsArray);
  if (numberOfAI === numberOfHumain) {
    historyOfResultsForAI.push(-1);
    reader.question("Nobody lost ! Try again ? Type Yes or No \n", replayShuiFuMi);
  } else if (
    numberOfHumain.toString() + numberOfAI.toString() === "12" ||
    numberOfHumain.toString() + numberOfAI.toString() === "23" ||
    numberOfHumain.toString() + numberOfAI.toString() === "31"
  ) {
    console.log("Computer won :.( ");
    historyOfResultsForAI.push(1);
    reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);
  } else if (
    numberOfHumain.toString() + numberOfAI.toString() === "13" ||
    numberOfHumain.toString() + numberOfAI.toString() === "21" ||
    numberOfHumain.toString() + numberOfAI.toString() === "32"
  ) {
    console.log("You won !!!");
    historyOfResultsForAI.push(0);
    reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);
  } else return Error;
};

const callbackOnUsersReply = (responseOfUser) => {
  console.log(historyOfHumanMoves);
  console.log(historyOfAIMoves);
  console.log(historyOfResultsForAI);

  if (!Number.isInteger(parseInt(responseOfUser))) reader.question("One more try : \n", callbackOnUsersReply);
  else if (responseOfUser === "1" || responseOfUser === "2" || responseOfUser === "3") {
    historyOfHumanMoves.push(parseInt(responseOfUser));
    printHand(parseInt(responseOfUser), rightHandsArray);
    playShuiFuMi(parseInt(responseOfUser));
    //reader.close();
  } else reader.question("One more try : \n", callbackOnUsersReply);
};
reader.question("Let's start ! Give your choise : 1=ROCK, 2=PAPER; 3=SCISSORS\n", callbackOnUsersReply);


