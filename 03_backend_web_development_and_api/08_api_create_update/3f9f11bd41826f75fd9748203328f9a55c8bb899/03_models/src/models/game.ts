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

// getAll
// ✓ Should get all the games (2 ms)
// ✕ All games should have name, slug and cover (5 ms)

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] | void[] {
    const gamesWithCovers: Game[] = this.collection.filter((gameToFilter) => {
      return !!gameToFilter.cover_url;
    });
    return gamesWithCovers.map((gameWithAllInfo) => {
      const gameToReturn = { name: gameWithAllInfo.name, slug: gameWithAllInfo.slug, cover: gameWithAllInfo.cover_url };
      return gameToReturn;
    });
  }

  // findBySlug
  // ✕ Should find a game by its slug (2 ms)
  // ✕ Should return null when the game does not exist (1 ms)

  findBySlug(slug: string): Game | null {
    if (this.collection.length === 0) return null;
    else {
      const gameToReturn = this.collection.find((game) => game.slug === slug);
      return gameToReturn === undefined ? null : gameToReturn;
    }
  }

  // findByPlatform
  // ✕ Should find games by its platform (1 ms)
  // ✕ Should return an empty array when the platform does not exist (25 ms)

  findByPlatform(platform_slug: string): Game[] {
    const arrayOfFilteredByPlatformGames: Game[] | undefined = this.collection.filter(
      (gameToCheck) => gameToCheck.platform.slug === platform_slug,
    );
    if (arrayOfFilteredByPlatformGames === undefined) return [];
    else return arrayOfFilteredByPlatformGames;
  }

  // getPlatforms
  // ✕ Should retun platforms (1 ms)
  // ✕ All platforms should have name and slug

  arrayOfPlatformIncludesPlatform(arrayOfPlatforms: Platform[], platform: Platform): boolean {
    return arrayOfPlatforms.reduce((cumulBoolean: boolean, currentPlatformFromArray: Platform) => {
      return (
        (currentPlatformFromArray.name === platform.name && currentPlatformFromArray.slug === platform.slug) ||
        cumulBoolean
      );
    }, false);
  }

  getPlatforms(): Platform[] {
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
    // console.log("*****************************");
    // console.log(cumulatedPlatformsWithoutDuplicates);
    return cumulatedPlatformsWithoutDuplicates;
  }
}
