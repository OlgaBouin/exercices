export function rectangle(width: number, height: number): string {
let stringRectangle = "";
  for (let i = 0; i< height; i++) {
  const arrayLineToPrint: string[] = [];
  for (let j=0;j<width;j++) {
    arrayLineToPrint.push("*");
  }
  stringRectangle+=(arrayLineToPrint.join("")+"\n");
  }
  return stringRectangle;
}


//console.log(rectangle(3,5));