function pow(number, power) {
  // Your code here
  if (power < 0) return;
  else if (power===0) return 1;
  else if (power === 1) return number;
  return pow(number,power-1)*number;
}

// do not remove this line, it is for tests
module.exports = pow;
