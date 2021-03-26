const calculator = (operationLineIn) => {
  const operationLine = operationLineIn.replace(/,/g, ".").trim();

  // const nbOfPluses = (operationLineIn.match(/\+/g) || []).length;
  // const nbOfMinuses = (operationLineIn.match(/-/g) || []).length;
  // const nbOfStars = (operationLineIn.match(/\*/g) || []).length;
  // const nbOfSlashes = (operationLineIn.match(/\//g) || []).length;

  // if (nbOfMinuses + nbOfMinuses + nbOfSlashes + nbOfStars != 1) throw new Error("Can't process the operation");
  //if (!operationLineIn.match(/(\+|-|\*|\/)/)) throw new Error("Can't process the operation");
  try {
    if (!operationLine.match(/^-?(0|[1-9])\d*(.\d)*\s*(\+|-|\*|\/)\s*(0|[1-9])\d*(.\d)*$/))
      throw new Error("Can't process the operation");
  } catch (e) {
    console.log(e.name);
    //return;
  }

  const arrayForPlusOperation = operationLine.split("+");
  const arrayForMinusOperation = operationLine.split("-");
  const arrayForDivisionOperation = operationLine.split("/");
  const arrayForMultiplicationOperation = operationLine.split("*");

  //console.assert(4 === 3, "voila");

  if (operationLine.match(/(\s)*[0-9]+(.[0-9]+|,[0-9]+)?(\s)*(\+|-|\*|\/)(\s)*[0-9]+(.[0-9]+|,[0-9]+)?(\s)*/)) {
    if (arrayForPlusOperation.length === 2) {
      if (!isNaN(arrayForPlusOperation[0].trim()) && !isNaN(arrayForPlusOperation[1].trim())) {
        return parseFloat(arrayForPlusOperation[0].trim()) + parseFloat(arrayForPlusOperation[1].trim());
      } //else throw new Error("Can't process the operation");
    } else if (arrayForMinusOperation.length === 2) {
      if (!isNaN(arrayForMinusOperation[0].trim()) && !isNaN(arrayForMinusOperation[1].trim())) {
        return parseFloat(arrayForMinusOperation[0].trim()) - parseFloat(arrayForMinusOperation[1].trim());
      } //else throw new Error("Can't process the operation");
    } else if (arrayForDivisionOperation.length === 2) {
      if (!isNaN(arrayForDivisionOperation[0].trim()) && !isNaN(arrayForDivisionOperation[1].trim())) {
        return parseFloat(arrayForDivisionOperation[0].trim()) / parseFloat(arrayForDivisionOperation[1].trim());
      } //else throw new Error("Can't process the operation");
    } else if (arrayForMultiplicationOperation.length === 2) {
      if (!isNaN(arrayForMultiplicationOperation[0].trim()) && !isNaN(arrayForMultiplicationOperation[1].trim())) {
        return (
          parseFloat(arrayForMultiplicationOperation[0].trim()) * parseFloat(arrayForMultiplicationOperation[1].trim())
        );
      } //else throw new Error("Can't process the operation");
    } //else throw new Error("Can't process the operation");
    //return "No result";
  } else console.log("Not a valid operation");
};

module.exports = calculator;
