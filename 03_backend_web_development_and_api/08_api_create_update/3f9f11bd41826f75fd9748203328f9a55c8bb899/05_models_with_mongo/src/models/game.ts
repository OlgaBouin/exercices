import { Collection } from "mongodb";

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
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[] | void[]> {
    return this.collection
      .find()
      .toArray()
      .then((gamesArrayFromDb) => {
        const gamesWithCovers: Game[] = gamesArrayFromDb.filter((gameToFilter) => {
          return !!gameToFilter.cover_url;
        });
        return gamesWithCovers.map((gameWithAllInfo) => {
          const gameToReturn = {
            name: gameWithAllInfo.name,
            slug: gameWithAllInfo.slug,
            cover: gameWithAllInfo.cover_url,
          };
          return gameToReturn;
        });
      });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection
      .find()
      .toArray()
      .then((gamesFoundBySlug) => {
        if (gamesFoundBySlug.length === 0) return null;
        else {
          const gameToReturn = gamesFoundBySlug.find((game) => game.slug === slug);
          const result = gameToReturn === undefined ? null : gameToReturn;
          return result;
        }
      });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((gamesFoundByPlateform) => {
        let arrayOfFilteredByPlatformGames: Game[] | undefined = gamesFoundByPlateform.filter(
          (gameToCheck) => gameToCheck.platform.slug === platform_slug,
        );

        if (arrayOfFilteredByPlatformGames === undefined) arrayOfFilteredByPlatformGames = [];
        return arrayOfFilteredByPlatformGames;
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
    return this.collection
      .find()
      .toArray()
      .then((foundPlateform) => {
        const platformArrayWithDuplicates = foundPlateform.map((gameToExtractPlatform) => {
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
        return cumulatedPlatformsWithoutDuplicates;
      });
  }
}

// export class GameModel extends GameModel2 {
//   async constructor(collection: Collection) {
//     const arrayOfGamesFromDb = collection
//       .find()
//       .toArray()
//       .then((res: Game[]) => {
//         return res;
//       });

//     const arrayOfGamesFromDb2 = arrayOfGamesFromDb.then((res3) => {
//       return res3;
//     });

//     super(arrayOfGamesFromDb2);

// collection
// .then((res2: Db) => {
// res2.find()
// .toArray()
// .then((res: Game[]) => {
// return res;
//   })})

function getAllSyn() {
  throw new Error("Function not implemented.");
}
