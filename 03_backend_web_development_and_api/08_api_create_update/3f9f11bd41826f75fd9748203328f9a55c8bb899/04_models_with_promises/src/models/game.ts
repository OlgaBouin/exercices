import { resolve } from "node:path";

export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Promise<Game[] | void[]> {
    return new Promise((resolve) => {
      const gamesWithCovers: Game[] = this.collection.filter((gameToFilter) => {
        return !!gameToFilter.cover_url;
      });
      const result: Game[] | void[] = gamesWithCovers.map((gameWithAllInfo) => {
        const gameToReturn = {
          name: gameWithAllInfo.name,
          slug: gameWithAllInfo.slug,
          cover: gameWithAllInfo.cover_url,
        };
        return gameToReturn;
      });
      resolve(result);
    });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      if (this.collection.length === 0) resolve(null);
      else {
        const gameToReturn = this.collection.find((game) => game.slug === slug);
        const result = gameToReturn === undefined ? null : gameToReturn;
        resolve(result);
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      let arrayOfFilteredByPlatformGames: Game[] | undefined = this.collection.filter(
        (gameToCheck) => gameToCheck.platform.slug === platform_slug,
      );

      if (arrayOfFilteredByPlatformGames === undefined) arrayOfFilteredByPlatformGames = [];
      resolve(arrayOfFilteredByPlatformGames);
    });
  }

  arrayOfPlatformIncludesPlatform(arrayOfPlatforms: Platform[], platform: Platform): boolean {
    return arrayOfPlatforms.reduce((cumulBoolean: boolean, currentPlatformFromArray: Platform) => {
      return (
        (currentPlatformFromArray.name === platform.name && currentPlatformFromArray.slug === platform.slug) ||
        cumulBoolean
      );
    }, false);
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      const platformArrayWithDuplicates = this.collection.map((gameToExtractPlatform) => {
        const platformToReturn: Platform = {
          name: gameToExtractPlatform.platform.name,
          slug: gameToExtractPlatform.platform.slug,
        };
        return platformToReturn;
      });
      const cumulatedPlatformsWithoutDuplicates: Platform[] = [];
      platformArrayWithDuplicates.forEach((currentPlatform) => {
        if (!this.arrayOfPlatformIncludesPlatform(cumulatedPlatformsWithoutDuplicates, currentPlatform))
          cumulatedPlatformsWithoutDuplicates.push(currentPlatform);
      });
      resolve(cumulatedPlatformsWithoutDuplicates);
    });
  }
}
function getAllSyn() {
  throw new Error("Function not implemented.");
}
