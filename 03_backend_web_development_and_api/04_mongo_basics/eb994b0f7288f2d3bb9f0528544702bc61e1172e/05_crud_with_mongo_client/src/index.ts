import * as mongo from "mongodb";
import { findOneCountry } from "./findOneCountry";
import { showCollections } from "./showCollections";
import { insertOneCountry } from "./insertOneCountry";
import { updateOneCountry } from "./updateOneCountry";
import { deleteOneCountry } from "./deleteOneCountry";

const databaseUrl = process.env.MONGODB_DATABASE_URL;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.MongoClient.connect(databaseUrl, options).then((client) => {
  const db = client.db("mongo-basics");

  // You can test your query function by placing it here instead of `showCollections`
  //showCollections(db).then((result) => console.log(result));
  //findOneCountry(db).then((result) => console.log(result));
  //insertOneCountry(db);
  //updateOneCountry(db).then((result) => console.log(result));
  deleteOneCountry(db).then((result) => console.log(result));
  //console.log(deleteOneCountry(db));
  client.close();
});
