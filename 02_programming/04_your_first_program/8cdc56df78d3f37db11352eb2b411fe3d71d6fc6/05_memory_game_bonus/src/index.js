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

const playTheMemoryGame = () => {
  console.log("Welcome to the Memory Game!");
  const shuffledArray = shuffle(createBoard(2));
  console.log(shuffledArray.map((element, iterator) => iterator + 1 + ":" + element.symbol));
  console.log("");
  reader.question("Press [Enter] to start\n", (inputShouldBeEnter) => {
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'Enter') {
        process.exit();
      } else {
        console.log(`You pressed the "${str}" key`);
        console.log();
        console.log(key);
        console.log();
      }
    });
      clear();
    }
  });
  //if (key && key.name == 'enter')
};

playTheMemoryGame();
