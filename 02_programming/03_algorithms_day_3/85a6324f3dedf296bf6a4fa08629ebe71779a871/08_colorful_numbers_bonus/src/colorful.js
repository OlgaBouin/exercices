// Colorful numbers
// ✕ 0 should return true (3 ms)
// ✕ 1 should return true
// ✕ 2 should return true (1 ms)
// ✕ 3 should return true
// ✕ 4 should return true
// ✕ 5 should return true
// ✕ 6 should return true (1 ms)
// ✕ 7 should return true
// ✕ 8 should return true
// ✕ 9 should return true (1 ms)
// ✕ A colorful two digit number should return true
// ✕ A non colorful two digit number should return false
// ✕ A colorful three digit number should return true (1 ms)
// ✕ A non colorful three digit number should return false
// ✕ A colorful four digit number should return true
// ✕ A non colorful four digit number should return false (1 ms)

function isColorful(numberToCheck) {
  const arrayOfDigits = numberToCheck.toString().split("");
  const arrayOfMultiplications = [...[], ...arrayOfDigits];
  if (arrayOfDigits.length === 2) {
    arrayOfMultiplications.push((arrayOfDigits[0] * arrayOfDigits[1]).toString());
  } else {
    for (let i = arrayOfDigits.length - 1; i > -1; i--) {
      for (let j = 0; j < i - 1; j++) {
        let mulpiplicationToAdd =
          parseInt(arrayOfMultiplications[arrayOfMultiplications.length - i + j - 1]) *
          parseInt(arrayOfMultiplications[arrayOfMultiplications.length - i + j]);
        arrayOfMultiplications.push(mulpiplicationToAdd.toString());
      }
    }
  }
  console.log(arrayOfMultiplications);
  return new Set(arrayOfMultiplications).size === arrayOfMultiplications.length;
}

// Do not remove last lines, it is for tests
module.exports = isColorful;
