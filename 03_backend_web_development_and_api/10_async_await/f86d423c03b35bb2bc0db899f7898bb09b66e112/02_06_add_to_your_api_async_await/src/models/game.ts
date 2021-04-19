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

  postGame(bodyToPost: string): void {
    const gameToInsert = JSON.parse(bodyToPost);
    this.collection.insertOne(gameToInsert);
  }

  async getAll(): Promise<Game[]> {
    const promiseOfArrayOfGames = this.collection.find({}).toArray();

    const arrayOfGames = await promiseOfArrayOfGames;
    return arrayOfGames.map(this.fullGameToGame);
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({
      slug: slug,
    });
  }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const promiseOfArrayOfGamesByPlatform = this.collection.find({ "platform.slug": platform_slug }).toArray();

    const arrayOfGamesByPlatform = await promiseOfArrayOfGamesByPlatform;
    return arrayOfGamesByPlatform.map(this.fullGameToGame);
  }

  async getPlatforms(): Promise<Platform[]> {
    const promiseOfArrayOfGames = this.collection.find({}).toArray();
    const arrayOfGames = await promiseOfArrayOfGames;
    const platforms: Platform[] = [arrayOfGames[0].platform];
    function checkIfPlatformIsAlreadyThere(platformToCheck: Platform): boolean {
      let result: boolean = true;
      for (let i = 0; i < platforms.length; i++) {
        if (platformToCheck) {
          if (platforms[0].slug === platformToCheck.slug) result = result || true;
        }
      }
      return result;
    }
    arrayOfGames.forEach((game: Game) => {
      if (!checkIfPlatformIsAlreadyThere(game.platform)) {
        platforms.push(game.platform);
      }
    });
    return platforms.map((platform) => ({
      name: platform.name,
      slug: platform.slug,
    }));
  }
}
