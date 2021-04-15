import { Collection, ResumeToken } from "mongodb";

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
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  private fullGameToGame(game: Game) {
    return {
      name: game.name,
      slug: game.slug,
      cover: game.cover_url,
    };
  }

  postGame(
    bodyToPost: string,
  ): void { //Promise<Game | null>
    const gameToInsert = JSON.parse(bodyToPost);
    //const writeResult =
    this.collection.insertOne(gameToInsert);

    /*

    return this.findBySlug(gameToInsert.slug).then((res) => {
      return res;
    });
*/

    //.sort({_id:-1}).limit(1);
    //if (writeResult.nInserted === 1) return gameToInsert
    //else return
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find({})
      .toArray()
      .then((games) => games.map(this.fullGameToGame));
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({
      slug: slug,
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find({ "platform.slug": platform_slug })
      .toArray()
      .then((games) => games.map(this.fullGameToGame));
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find({})
      .toArray()
      .then((games) => {
        const platforms: Platform[] = [games[0].platform];

        function checkIfPlatformIsAlreadyThere(platformToCheck: Platform): boolean {
          let result: boolean = true;
          for (let i = 0; i < platforms.length; i++) {
            if (platformToCheck) {
              if (platforms[0].slug === platformToCheck.slug) result = result || true;
            }
          }
          return result;
        }
        games.forEach((game) => {
          if (!checkIfPlatformIsAlreadyThere(game.platform)) {
            platforms.push(game.platform);
          }
        });

        return platforms.map((platform) => ({
          name: platform.name,
          slug: platform.slug,
        }));
      });
  }
}
