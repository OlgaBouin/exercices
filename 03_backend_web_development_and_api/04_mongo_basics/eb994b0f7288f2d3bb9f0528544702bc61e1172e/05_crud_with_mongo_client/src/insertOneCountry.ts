import * as mongo from "mongodb";



export function insertOneCountry(db: mongo.Db): 
Promise<{name: string, capital: string, continent: string}> 
{ return db.collection("worldAtlas")
  .insertOne({
      name: "France",
      capital: "Paris",
      continent: "Europe",
    }).then((res)=> res.ops[0])
    ;
}