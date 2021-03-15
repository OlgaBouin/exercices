// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

//05
let christmassTreeBlanks=[" "," "," "];
let christmassTreeStars=["*"];
for(let i=4;i>0;i--){
  console.log(christmassTreeBlanks.join("")+christmassTreeStars.join(""));
  christmassTreeBlanks.pop();
  christmassTreeStars.push("**");
}