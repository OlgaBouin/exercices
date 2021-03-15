// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

//04

let starsArrayTriangleDown=["*","*","*","*","*"];
for(let i=4;i>-1;i--){console.log(starsArrayTriangleDown.join(""));starsArrayTriangleDown[4-i]=" ";}