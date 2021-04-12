export function column(numberOfLines: number, lineContent: string): string {
  let stringToReturn="";
  for(let i=1;i<numberOfLines+1;i++){
    stringToReturn=stringToReturn+lineContent+"\n";}
  console.log(stringToReturn);
  return stringToReturn;
}