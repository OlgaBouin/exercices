import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  return sentence.split(" ").map(capitalize).join(" ");
}
