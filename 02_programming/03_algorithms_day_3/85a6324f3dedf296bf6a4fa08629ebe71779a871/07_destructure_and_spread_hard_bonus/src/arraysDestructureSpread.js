function arrayCrusher(firstArray, secondArray) {
  let [first,...tail]=secondArray;
  firstArray.push(first);
  if (tail.length>0) return arrayCrusher(firstArray,tail);
  else return firstArray;
}

function recursiveBouncer(list) {
  let [first,...tail]=list;
  console.log(first+";");
  if (tail.length>0) recursiveBouncer(tail);
}



module.exports = {
  arrayCrusher,
  recursiveBouncer,
};


//console.log(arrayCrusher([1, 2], [3, 4]));
//recursiveBouncer([1, 2, 3]);
