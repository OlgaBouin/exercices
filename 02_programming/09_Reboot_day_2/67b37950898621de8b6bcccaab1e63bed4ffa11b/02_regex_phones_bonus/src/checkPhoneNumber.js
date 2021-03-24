// #CheckPhoneNumber
// ✕ Should return true for 0638132948 (4 ms)
// ✕ Should return true for 06 38 13 29 48
// ✕ Should return true for 06-38-13-29-48 (1 ms)
// ✕ Should return true for 03-38-13-29-48
// ✕ Should return true for 03.38.13.29.48 (1 ms)
// ✕ Should return false for 06 38 13 29
// ✕ Should return false for 06381329 (1 ms)
// ✕ Should return true for 00336 38 13 29 48
// ✕ Should return true for +336 38 13 29 48 (1 ms)

const checkPhoneNumber = (phoneNumber) => {
  //(/(0|\+33|0033) starts with
  //(6|3) next digit
  //separator one or no (.|-| )?
  //(([0-9]{2}) 2 digits
  //(.|-| )?) then separator or not
  //{4}/)) 4 times repeated
  if (phoneNumber.match(/(0|\+33|0033)(6|3)(.|-| )?(([0-9]{2})(.|-| )?){4}/)) return true;
  else return false;
};

//console.log(checkPhoneNumber("000638132948"));

module.exports = checkPhoneNumber;
