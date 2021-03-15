// function fibo(n) {
//   // your code here
//   let avantDerniere=0;
//   let derniere=1;
//   let courante=0;
//   if (n<0) return null; 
//   else if(n===0 || n===1) return 0;
//   else if(n===2) return 1;
//   else {
//     for (let i=0;i<n-1;i++)
//     {
//       courante = avantDerniere + derniere;
//       avantDerniere = derniere;
//       derniere = courante;
//     }
//     return courante;
//   }
// }

function fibo(n) {
  if (n<0) return null; 
  else if(n<2) return n;
  else return fibo(n-1)+fibo(n-2);
}


// console.log(fibo(-1));
// console.log(fibo(0));
// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
// console.log(fibo(4));
// console.log(fibo(5));
// console.log(fibo(6));
// console.log(fibo(7));
// console.log(fibo(8));
// console.log(fibo(9));
// console.log(fibo(10));


// do not remove this line, it is for tests
module.exports = fibo;