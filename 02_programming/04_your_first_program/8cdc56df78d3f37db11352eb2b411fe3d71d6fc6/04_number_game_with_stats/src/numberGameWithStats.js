function numberGameWithStats(reader, min = 1, max = 100) {
  const numberGameInt = (minN, maxN) => Math.round(Math.random() * (maxN - minN) + minN);
  
  const number = numberGameInt(min, max);
  let nb;
  nb=0;
  const callbackFindNumber = (responseUser) => {
    nb+=1;
    if (!Number.isInteger(parseInt(responseUser))) {
      console.log("This was not a number");
      reader.question("Enter a number\n", callbackFindNumber);
    } else if (parseInt(responseUser) === number) {
      console.log("You won!");
      (nb===1) ? console.log("Wow first try!") : console.log(`You made ${nb} tries`);
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


module.exports = numberGameWithStats;
