
export function findGameFromSlug(games: Game[], slug: string): Game {
  
  function checkSlug(gameFromArraay): boolean {
    return (gameFromArraay.slug === slug);
  }
  //sif (games.length === 0) return {name: "", slug: "", cover: "", platform: ""}
  return games.filter(checkSlug)[0];
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
}
