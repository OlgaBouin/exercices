const { strict } = require("assert");
const { ReadStream } = require("fs");
const { stringify } = require("querystring");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const clear = require("./clear");

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

const memoryGameCard = {
  name: "tree",
  symbol: "🌳",
  isHidden: true,
};

const createBoardWithUser = () => {
  let arrayOfCards = [];
  const callbackOnQuestionNbOfCards = reader.question(
    "Select the number of pairs (between 1 and 19) for the memory game : \n",
    (numberOfPairs) => {
      const numberOfPairsNum = parseInt(numberOfPairs);
      if (Number.isNaN(numberOfPairsNum) || numberOfPairsNum > 19 || numberOfPairsNum < 1) {
        console.log("You should enter the correct number of cards. ");
        callbackOnQuestionNbOfCards();
      } else {
        console.log(`You've selected ${numberOfPairsNum} pairs of memory cards`);
        arrayOfCards = createBoard(numberOfPairsNum);
        console.log("Here is the creaated board : ");
        console.log(arrayOfCards);
        shuffle();
        console.log("Here is the shuffled board : ");
        console.log(arrayOfCards);
        reader.close();
      }
    },
  );
  return arrayOfCards;
};

const createBoard = (sizeNbOfPairs) => {
  let arrayOfCardsToReturn = [];
  for (let i = 1; i < sizeNbOfPairs + 1; i++) {
    arrayOfCardsToReturn[2 * i - 2] = {
      name: Object.keys(symbols)[i - 1],
      symbol: Object.values(symbols)[i - 1],
      isHidden: true,
    };
    arrayOfCardsToReturn[2 * i - 1] = {
      name: Object.keys(symbols)[i - 1],
      symbol: Object.values(symbols)[i - 1],
      isHidden: true,
    };
  }
  return arrayOfCardsToReturn;
};

function shuffle(arrayToShuffle) {
  return arrayToShuffle.sort(() => Math.random() - 0.5);
}

// const askToInputNumber = async (readerStream, arrayOfHiddenCards, arrayOfOpenedCards) => {
//   console.log("log3");
//   clear();
//   readerStream.question(`🖥  clear the screen 🖥\n ${arrayOfHiddenCards} choose a card \n`, (inputCardNumber) => {
//     arrayOfHiddenCards[inputCardNumber - 1] = arrayOfOpenedCards[inputCardNumber - 1];
//     console.log(arrayOfHiddenCards);
//     return inputCardNumber;
//   });
// };

const numberOfCardsCouples = 2;
const shuffledArray = shuffle(createBoard(numberOfCardsCouples));
const shuffledArrayToDisplay = shuffledArray.map((element, iterator) => iterator + 1 + ":" + element.symbol);
const hiddenArray = shuffledArrayToDisplay.map((element, iterator) => iterator + 1 + ":" + "?");

const cardArrayToArray = (cardArrayToDisplay) => {
  return cardArrayToDisplay.map((element, iterator) => iterator + 1 + ":" + (element.isHidden ? "?" : element.symbol));
};

const unHideOneCard = (cardArray, positionInArray) => {
  return cardArray.map((element, iterator) =>
    iterator === positionInArray ? { ...element, isHidden: false } : element,
  );
};

const playTheMemoryGame = () => {
  console.log("Welcome to the Memory Game!");
  console.log(shuffledArrayToDisplay);
  enterCallback();
};

const enterCallback = () => {
  reader.question("Press [Enter] to start\n", (inputShouldBeEnter) => {
    if (inputShouldBeEnter === "") {
      console.log("log1");
      clear();
      callbackNextCardsPairToFind();
    } else {
      console.log(`You pressed the "${inputShouldBeEnter}" key`);
      enterCallback();
    }
  });
};

const callbackNextCardsPairToFind = () => {
  reader.question(
    `🖥  clear the screen 🖥\n ${hiddenArray} 
  choose a card \n`,
    (inputFirstCardNumber) => {
      console.log(inputFirstCardNumber);
      console.log(hiddenArray[inputFirstCardNumber - 1]);
      console.log(shuffledArrayToDisplay[inputFirstCardNumber - 1]);
      console.log(hiddenArray[inputFirstCardNumber - 1].symbol);
      console.log(shuffledArray[inputFirstCardNumber - 1].symbol);
      hiddenArray[inputFirstCardNumber - 1].symbol = shuffledArrayToDisplay[inputFirstCardNumber - 1].symbol;
      console.log(hiddenArray);
      console.log("log2");
      reader.question(`🖥  clear the screen 🖥\n ${hiddenArray} choose a card \n`, (inputSecondCardNumber) => {
        hiddenArray[inputSecondCardNumber - 1].symbol = shuffledArrayToDisplay[inputSecondCardNumber - 1].symbol;
        console.log(hiddenArray);
        if (hiddenArray[inputFirstCardNumber - 1].symbol === hiddenArray[inputSecondCardNumber - 1].symbol) {
          callbackNextCardsPairToFind();
        } else {
          console.log("Wrong!");
          hiddenArray[inputFirstCardNumber - 1].symbol = "?";
          hiddenArray[inputSecondCardNumber - 1].symbol = "?";
          enterCallback();
        }
      });
    },
  );
};

playTheMemoryGame();

// const playTheMemoryGame = () => {
//   const numberOfCardsCouples = 2;
//   console.log("Welcome to the Memory Game!");
//   const shuffledArray = shuffle(createBoard(numberOfCardsCouples));
//   const shuffledArrayToDisplay = shuffledArray.map((element, iterator) => iterator + 1 + ":" + element.symbol);

//   console.log(shuffledArrayToDisplay);
//   const hiddenArray = shuffledArrayToDisplay.map((element, iterator) => iterator + 1 + ":" + "?");
//   const enterCallback = reader.question("Press [Enter] to start\n", (inputShouldBeEnter) => {
//     if (inputShouldBeEnter === "") {
//       console.log("log1");
//       clear();
//       const callbackNextCardsPairToFind = reader.question(
//         `🖥  clear the screen 🖥\n ${hiddenArray}
//       choose a card \n`,
//         (inputFirstCardNumber) => {
//           hiddenArray[inputFirstCardNumber - 1].symbol = shuffledArrayToDisplay[inputFirstCardNumber - 1].symbol;
//           console.log(hiddenArray);
//           console.log("log2");
//           //const firstInputNumber = askToInputNumber(reader, hiddenArray, shuffledArrayToDisplay);
//           //const secondInputNumber = await askToInputNumber(reader, hiddenArray, shuffledArrayToDisplay);
//           // const firstInputNumber = 1;
//           // const secondInputNumber = 3;
//           reader.question(`🖥  clear the screen 🖥\n ${hiddenArray} choose a card \n`, (inputSecondCardNumber) => {
//             hiddenArray[inputSecondCardNumber - 1].symbol = shuffledArrayToDisplay[inputSecondCardNumber - 1].symbol;
//             console.log(hiddenArray);
//             if (hiddenArray[inputFirstCardNumber - 1].symbol === hiddenArray[inputSecondCardNumber - 1].symbol) {
//               callbackNextCardsPairToFind();
//             } else {
//               console.log("Wrong!");
//               hiddenArray[inputFirstCardNumber - 1].symbol = "?";
//               hiddenArray[inputSecondCardNumber - 1].symbol = "?";
//               enterCallback();
//             }
//           });
//         },
//       );
//     }

//     // clear();
//     // reader.question(`🖥  clear the screen 🖥\n ${hiddenArray} choose a card \n`, (inputCardNumber) => {
//     //   hiddenArray[inputCardNumber - 1] = shuffledArrayToDisplay[inputCardNumber - 1];
//     //   console.log(hiddenArray);
//     else {
//       console.log(`You pressed the "${inputShouldBeEnter}" key`);
//       enterCallback();
//     }
//   });
// };
