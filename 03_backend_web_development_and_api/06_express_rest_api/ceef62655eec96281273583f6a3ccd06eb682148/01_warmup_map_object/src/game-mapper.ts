
  // ✕ Should transform an array of game data to an array of a simpler object (3 ms)
  // ✓ Should work with emty arrays (1 ms)

export function gameMapper(games: GameWithALotOfData[]): Game[] {
  return games.map(gameWithData => {
    const gameWithLessData: Game = {name : "", slug: "", cover: ""};
    gameWithLessData.name = gameWithData.name;
    gameWithLessData.slug = gameWithData.slug;
    gameWithLessData.cover = gameWithData.cover.url;
    return gameWithLessData;
  })
    // {name : gameWithData.name;
    // slug: gameWithData.slug;
    // cover: gameWithData.cover.thumbnail}: Game);
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
}

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  }
}
