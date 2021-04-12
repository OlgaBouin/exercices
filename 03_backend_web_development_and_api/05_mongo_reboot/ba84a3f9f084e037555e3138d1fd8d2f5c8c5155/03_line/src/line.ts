export function line(numberOfStars: number): string {
  let stringToReturn="";
  for(let i=1;i<numberOfStars+1;i++){
    stringToReturn=stringToReturn+"*";}
  console.log(stringToReturn);
  return stringToReturn;
}