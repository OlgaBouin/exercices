import * as mongo from "mongodb";

export function insertManyCountries(db: mongo.Db): 
Promise<{name: string, capital: string, continent: string}[]>  {
  return db.collection("worldAtlas")
  .insertMany(
   [{name: "Russia",
    capital: "Moscow",
    continent: "Europe"
  },{name: "Iceland",
    capital: "Reikiavik",
    continent: "Europe"
  },{name: "Australia",
    capital: "Sydney",
    continent: "Oceania"}]).then((res)=> res.ops);
  
}
