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

export type Comment = {
  name: string;
  comment: string;
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
        const platforms: Platform[] = [];

        games.forEach((game) => {
          const platform = platforms.find((platform) => platform.slug === game.platform.slug);
          if (!platform) {
            platforms.push(game.platform);
          }
        });

        return platforms.map((platform) => ({
          name: platform.name,
          slug: platform.slug,
        }));
      });
  }

  isKeyPhraseInThisGame(game: Game, keyPh: string): boolean {
    return game.name.toLowerCase().includes(keyPh.toLowerCase());
  }

  // getSearchWordsFromUrl(url: string): string {
  //   return url.split("=")[1];
  // }

  filterGamesByKeyWord(gamesToFilter: Game[], keyPhraseToFilterBy: string): Game[] {
    //const onlyKeyPhraseToFilterBy = this.getSearchWordsFromUrl(keyPhraseToFilterBy);
    return gamesToFilter.filter((elementGame) => this.isKeyPhraseInThisGame(elementGame, keyPhraseToFilterBy));
  }

  findByKeyWord(keyPhrase: string): Promise<Game[]> {
    return this.collection
      .find({})
      .toArray()
      .then((games) => this.filterGamesByKeyWord(games, keyPhrase));
  }
}
