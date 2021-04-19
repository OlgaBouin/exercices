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

  async findBySlug(slug: string): Promise<Game> {
    const pipeForSlugOfGame = [
      {
        $match: {
          slug: slug,
        },
      },
    ];
    return (await this.collection.aggregate(pipeForSlugOfGame).toArray())[0];
  }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const pipeForSlugOfPlatform = [
      {
        $match: {
          "platform.slug": platform_slug,
        },
      },
    ];
    return (await this.collection.aggregate(pipeForSlugOfPlatform).toArray()).map(this.fullGameToGame);
  }

  async getPlatforms2(): Promise<Platform[]> {
    const pipePlatformsWithDoublonsThenElimination = [
      {
        $replaceRoot: { newRoot: { $ifNull: ["$platform", { _id: "$_id", missingName: true }] } },
      },
      {
        $group: {
          _id: {
            name: "$name",
            slug: "$slug",
          },
        },
      },
    ];

    const arrayWithId = await this.collection.aggregate(pipePlatformsWithDoublonsThenElimination).toArray();
    const arrayWithoutId = arrayWithId.map((elementPlatformWithId) => ({
      name: elementPlatformWithId._id.name,
      slug: elementPlatformWithId._id.slug,
    }));
    return arrayWithoutId;
  }
  async getPlatforms(): Promise<Platform[]> {
    const pipeWithoutReplaceRoot = [
      {
        $group: {
          _id: {
            name: "$platform.name",
            slug: "$platform.slug",
          },
        },
      },
    ];
    return (await this.collection.aggregate(pipeWithoutReplaceRoot).toArray()).map((elementPlatformWithId) => ({
      name: elementPlatformWithId._id.name,
      slug: elementPlatformWithId._id.slug,
    }));
  }
}
