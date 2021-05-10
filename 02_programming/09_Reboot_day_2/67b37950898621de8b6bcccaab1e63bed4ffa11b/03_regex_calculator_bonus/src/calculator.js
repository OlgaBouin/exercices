const calculator = (operationLineIn) => {
  try {
    const operationLine = operationLineIn.replace(/,/g, ".").trim();
    const arrayForPlusOperation = operationLine.split("+");
    const arrayForMinusOperation = operationLine.split("-");
    const arrayForDivisionOperation = operationLine.split("/");
    const arrayForMultiplicationOperation = operationLine.split("*");

    if (operationLine.match(/(\s)*[0-9]+(.[0-9]+|,[0-9]+)?(\s)*(\+|-|\*|\/)(\s)*[0-9]+(.[0-9]+|,[0-9]+)?(\s)*/)) {
      if (arrayForPlusOperation.length === 2) {
        if (!isNaN(arrayForPlusOperation[0].trim()) && !isNaN(arrayForPlusOperation[1].trim())) {
          return parseFloat(arrayForPlusOperation[0].trim()) + parseFloat(arrayForPlusOperation[1].trim());
        }
      } else if (arrayForMinusOperation.length === 2) {
        if (!isNaN(arrayForMinusOperation[0].trim()) && !isNaN(arrayForMinusOperation[1].trim())) {
          return parseFloat(arrayForMinusOperation[0].trim()) - parseFloat(arrayForMinusOperation[1].trim());
        }
      } else if (arrayForDivisionOperation.length === 2) {
        if (!isNaN(arrayForDivisionOperation[0].trim()) && !isNaN(arrayForDivisionOperation[1].trim())) {
          return parseFloat(arrayForDivisionOperation[0].trim()) / parseFloat(arrayForDivisionOperation[1].trim());
        }
      } else if (arrayForMultiplicationOperation.length === 2) {
        if (!isNaN(arrayForMultiplicationOperation[0].trim()) && !isNaN(arrayForMultiplicationOperation[1].trim())) {
          return (
            parseFloat(arrayForMultiplicationOperation[0].trim()) *
            parseFloat(arrayForMultiplicationOperation[1].trim())
          );
        }
      }
    }
    return (
      parseFloat(arrayForDivisionOperation[1].trim()) +
      parseFloat(arrayForMinusOperation[1].trim()) +
      parseFloat(arrayForPlusOperation[1].trim()) +
      parseFloat(arrayForMultiplicationOperation[1].trim())
    );
  } catch (e) {
    throw new Error("Can't process the operation");
  }
};

module.exports = calculator;
