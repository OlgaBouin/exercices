function heightFromAge(ageInput: number): number{
  if (ageInput >= 20) return 335;
  else if (ageInput >9) return 225+ageInput%9*10;
  else if (ageInput >=1) return ageInput*25;
  else return 0;
}

console.log(heightFromAge(25));