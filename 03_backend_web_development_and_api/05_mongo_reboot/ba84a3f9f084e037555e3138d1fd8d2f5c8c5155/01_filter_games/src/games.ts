import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  const gameListToReturn = [];
  for(let i=0; i<games.length;i++){
    if (games[i].platform === platform)
    gameListToReturn.push(games[i]);
  }
  return gameListToReturn;
}
