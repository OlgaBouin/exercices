function numberGame(reader, min = 1, max = 100) {
  const numberGameInt = (minN, maxN) => Math.round(Math.random() * (maxN - minN) + minN);

  const number = numberGameInt(min, max);
  //console.log("Welcome! \n You have to find the right number, between 1 and 100! \n Good luck!!\n");

  const callbackFindNumber = (responseUser) => {
    if (!Number.isInteger(parseInt(responseUser))) {
      console.log("This was not a number");
      reader.question("Enter a number\n", callbackFindNumber);
    } else if (parseInt(responseUser) === number) {
      console.log("You won!");
      reader.close();
    }
    else {
      if (parseInt(responseUser) > max || parseInt(responseUser) < min) console.log("number is between");
      else if (parseInt(responseUser) > number) console.log("Too high");
      else console.log("Too low");
      reader.question("Enter a number\n", callbackFindNumber);
    }
  };

  reader.question("Enter a number\n", callbackFindNumber);
}

module.exports = numberGame;
