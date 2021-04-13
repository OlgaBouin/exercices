import express from "express";
import games from "./games.json";

const app = express();
//const port = 3000;

app.get("/", (request, response) => {
  response.status(400).json({ error: "Wrong resource" });
});

export function gameMapper(games: GameWithALotOfData[]): Game[] {
  return games.map((gameWithData) => {
    const gameWithLessData: Game = { name: "", slug: "", cover: "" };
    gameWithLessData.name = gameWithData.name;
    gameWithLessData.slug = gameWithData.slug;
    gameWithLessData.cover = gameWithData.cover_url;
    return gameWithLessData;
  });
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  code: number;
  cover_url: string;
  first_release_date?: number;
  genres?: string[];
  name: string;
  platform: {
    name: string;
    platform_logo_url: string;
    url: string;
    slug: string;
  };
  slug: string;
  summary?: string;
  url: string;
};

export type Platform = {
  name: string;
  // platform_logo_url: string;
  // url: string;
  slug: string;
};

app.get("/games", (request, response) => {
  const gamesWithType: GameWithALotOfData[] = games;
  response.status(200);
  response.json(gameMapper(gamesWithType));
});

export function findGameFromSlug(games: GameWithALotOfData[], slug: string): GameWithALotOfData | boolean {
  function checkSlug(gameFromArray: GameWithALotOfData): boolean {
    return gameFromArray.slug === slug;
  }
  const gamesListToReturn = games.filter(checkSlug);
  if (gamesListToReturn.length === 0) return false;
  else return gamesListToReturn[0];
}

app.get("/games/:game_slug", (request, response) => {
  // This endpoint will return all the data that you have for one game.
  // It should return a 200 and an object representing a game.
  // In the case of a non existing slug though, it should return a 404 with no body.

  // ✕ Should respond with a 200 HTTP code when the game exist (10045 ms)
  // ✕ Should respond with a 404 HTTP code when the game exist (10013 ms)
  // ✕ Should return a game object (10013 ms)

  const gameFound: GameWithALotOfData | boolean = findGameFromSlug(games, request.params.game_slug);
  if (!gameFound) {
    response.status(404);
    response.send({});
  } else {
    response.status(200).json(gameFound);
  }
});

export function findGamesFromSlugOfPlatform(
  games: GameWithALotOfData[],
  slugOfPlatform: string,
): GameWithALotOfData[] | boolean {
  function checkSlug(gameFromArray: GameWithALotOfData): boolean {
    return gameFromArray.platform.slug === slugOfPlatform;
  }
  const gamesListToReturn = games.filter(checkSlug);
  if (gamesListToReturn.length === 0) return false;
  else return gamesListToReturn;
}

app.get("/platforms/:platform_slug", (request, response) => {
  // This endpoint will return all the games corresponding to the `platform_slug` in the URL.
  // It should work as the `/games` endpoint but with a smaller list and every game should have the same platform.
  // It should return a 200 and an array of game objects.
  const gameArrayFound: GameWithALotOfData[] | boolean = findGamesFromSlugOfPlatform(
    games,
    request.params.platform_slug,
  );
  if (!gameArrayFound) {
    response.status(404);
    response.send([]);
  } else {
    response.status(200).json(gameArrayFound);
  }
});

// ✕ Should respond with a 200 HTTP code (38 ms)
// ✕ Should return an array of platforms (10 ms)
// ✕ Should have no duplicates (3 ms)

app.get("/platforms", (request, response) => {
  const platformsArray: Platform[] = [];
  games.forEach((gameFromGamesArray) => {
    const platformToAdd: Platform = {
      name: gameFromGamesArray.platform.name,
      // platform_logo_url: gameFromGamesArray.platform.platform_logo_url,
      // url: gameFromGamesArray.platform.url,
      slug: gameFromGamesArray.platform.slug,
    };
    platformsArray.push(platformToAdd);
  });
  response.status(200);
  response.send(platformsArray);
});

export { app };
