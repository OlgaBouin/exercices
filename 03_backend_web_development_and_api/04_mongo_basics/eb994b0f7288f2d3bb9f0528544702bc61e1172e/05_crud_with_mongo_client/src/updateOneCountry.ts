import { ClientRequest } from "http";
import * as mongo from "mongodb";
import { resolve } from "path";

export async function updateOneCountry(db: mongo.Db): 
Promise<{name: string, capital: string, continent: string}>
{const updateToAchieve = 
  { $set: { capital: "Canberra" } }
  const filterForUpdate = { name: "Australia" };
  db.collection("worldAtlas")
  .updateOne(filterForUpdate,
    updateToAchieve).then((res) => {
      return res;
    })

  return db.collection("worldAtlas")
  .findOne({ name: "Australia" });
}