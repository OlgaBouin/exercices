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

const unHideOneCard = (cardArray, positionInArray) => {
  return cardArray.map((element, iterator) =>
    iterator === positionInArray ? { ...element, isHidden: false } : element,
  );
};

const hideOneCard = (cardArray, positionInArray) => {
  return cardArray.map((element, iterator) =>
    iterator === positionInArray ? { ...element, isHidden: true } : element,
  );
};

const hideAllCards = (cardArray) => {
  return cardArray.map((element) => {
    return { ...element, isHidden: true };
  });
};

const unHideAllCards = (cardArray) => {
  return cardArray.map((element) => {
    return { ...element, isHidden: false };
  });
};

const reducer = (accumulator, oneCard) => {
  return accumulator && !oneCard.isHidden;
};

const checkIfAllCardsFound = (cardsArray) => {
  return cardsArray.reduce(reducer, true);
};

const cardArrayToArray = (cardArrayToDisplay) => {
  return cardArrayToDisplay.map((element, iterator) => iterator + 1 + ":" + (element.isHidden ? "?" : element.symbol));
};

const getSymbolFromCardArray = (cardArray, position) => {
  return cardArray[position].symbol;
};

const shuffle = (arrayToShuffle) => {
  return arrayToShuffle.sort(() => Math.random() - 0.5);
};

const playTheMemoryGame = () => {
  console.log("Welcome to the Memory Game!");
  let memoryBoard = shuffle(createBoard(4));
  console.log(cardArrayToArray(unHideAllCards(memoryBoard)));
  reader.question("Press [Enter] to start\n", (inputShouldBeEnter) => {
    if (inputShouldBeEnter === "") {
      clear();
      callbackNextCardsPairToFind(hideAllCards(memoryBoard));
    } else {
      console.log(`You pressed the "${inputShouldBeEnter}" key`);
      return 0;
    }
  });
};

const callbackNextCardsPairToFind = (cardsArrayParam) => {
  reader.question(
    `🖥  clear the screen 🖥\n ${cardArrayToArray(cardsArrayParam)} 
  choose a card \n`,
    (inputFirstCardNumber) => {
      let cardsArray = unHideOneCard(cardsArrayParam, inputFirstCardNumber - 1);
      reader.question(
        `🖥  clear the screen 🖥\n ${cardArrayToArray(cardsArray)} 
      choose a card \n`,
        (inputSecondCardNumber) => {
          cardsArray = unHideOneCard(cardsArray, inputSecondCardNumber - 1);
          if (
            getSymbolFromCardArray(cardsArray, inputFirstCardNumber - 1) ===
            getSymbolFromCardArray(cardsArray, inputSecondCardNumber - 1)
          ) {
            if (checkIfAllCardsFound(cardsArray)) {
              console.log("You won!");
              return 0;
            } else callbackNextCardsPairToFind(cardsArray);
          } else {
            console.log("Wrong!");
            cardsArray = hideOneCard(cardsArray, inputFirstCardNumber - 1);
            cardsArray = hideOneCard(cardsArray, inputSecondCardNumber - 1);

            reader.question("Press [Enter] to start\n", (inputShouldBeEnter) => {
              if (inputShouldBeEnter === "") {
                clear();
                callbackNextCardsPairToFind(cardsArray);
              } else return 0;
            });
          }
        },
      );
    },
  );
};

// const testBoard = createBoard(4);
// console.log(testBoard);
// console.log(unHideOneCard(testBoard, 2));

// console.log(cardArrayToArray(testBoard));
// console.log(cardArrayToArray(unHideOneCard(testBoard, 2)));

playTheMemoryGame();
