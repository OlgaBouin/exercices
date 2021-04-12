import * as mongo from "mongodb";
const dbUrl = process.env.MONGODB_DATABASE_URL;

// // write your MongoDB shell command here


export function findOneCountry(db: mongo.Db): Promise<string[]> {
  // code your function here
 return db.collection("worldAtlas")
 .findOne({name: "Iceland"})
  }
