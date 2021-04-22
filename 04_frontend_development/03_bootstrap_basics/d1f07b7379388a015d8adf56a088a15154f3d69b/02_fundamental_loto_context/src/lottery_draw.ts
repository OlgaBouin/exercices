// Copy your function `lottery_draw` from exercise one.
type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const arrayOfRandoms: Draw = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 6; i++) {
    arrayOfRandoms[i] = Math.floor(Math.random() * 101);
  }
  return arrayOfRandoms;
}
