// ✕ Should duplicate letters (4 ms)
// ✕ Should only have lowercase letters (1 ms)
// ✕ Should separate the letters with dashes (1 ms)

export function mumble(stringToTransform: string): string {
  return stringToTransform
    .toLowerCase()
    .split("") //a,b,c
    .map((letter, index) => {
      let letterIerated = letter;
      for (let i = 0; i < index; i++) {
        letterIerated += letter;
      }
      return letterIerated;
    })
    .join("-");
}
