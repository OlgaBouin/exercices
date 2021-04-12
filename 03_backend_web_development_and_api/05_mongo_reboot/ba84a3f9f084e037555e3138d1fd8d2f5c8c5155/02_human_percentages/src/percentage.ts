export function humanPercentage(percentages: number[]): string[] {
  return percentages.map(element => Math.round(element*100).toString()+"%");
}
