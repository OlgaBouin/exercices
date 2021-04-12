import * as mongo from "mongodb";

export function updateManyCountries(db: mongo.Db): 
Promise<{name: string, capital: string, continent: string}[]>
{const updateToAchieve = 
  { $set: { continent: "EU" } }
  const filterForUpdate = { continent: "Europe" };
  db.collection("worldAtlas")
  .updateMany(filterForUpdate,
    updateToAchieve).then((res) => {
      return res;
    })

  return db.collection("worldAtlas")
  .find({ name: "Australia" })
  .toArray()
  .then((resp) => resp);
}