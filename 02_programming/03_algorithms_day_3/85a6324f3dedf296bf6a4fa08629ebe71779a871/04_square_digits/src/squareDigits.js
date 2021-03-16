function squareDigits(number) {
  if (!Number.isInteger(number)) throw "Error";
  else return parseInt(squareDigitsBis(number));
}

function squareDigitsBis(number) {
  if (Math.floor(number / 10) === 0) return number * number;
  else if (Math.floor(number / 10) > 0)
    return `${number}`.slice(0, 1) * `${number}`.slice(0, 1) + "" + squareDigitsBis(`${number}`.slice(1));
}

// Leave the line below for tests to work
module.exports = squareDigits;
