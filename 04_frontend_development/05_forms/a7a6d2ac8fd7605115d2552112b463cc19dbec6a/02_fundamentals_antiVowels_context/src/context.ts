import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

// ✕ Should return a string (6 ms)
// ✕ Should filter all words that start with vowels (1 ms)
// ✕ Should use the functions sentenceSplitter and sentenceJoiner correctly (2 ms)

const onlyConsonants = (wordStartingWithAll: string): string => {
  const vowelsArray = ["A", "E", "I", "O", "U"];
  return vowelsArray.includes(wordStartingWithAll.charAt(0).toUpperCase()) ? "" : wordStartingWithAll;
};

export const context = (sentenceToFilter: string): string => {
  // Code your function for context here
  return sentenceJoiner(sentenceSplitter(sentenceToFilter).filter(onlyConsonants));
};
