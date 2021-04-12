import * as mongo from "mongodb";

export function findManyCountries(db: mongo.Db): Promise<string[]> {
  return db.collection("worldAtlas")
  .find({continent: "Europe"}).toArray()
}