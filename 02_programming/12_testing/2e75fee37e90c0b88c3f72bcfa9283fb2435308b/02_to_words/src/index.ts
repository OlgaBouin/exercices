export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :?-_]+/);

  return allWords.filter(word => word !== "");
}
