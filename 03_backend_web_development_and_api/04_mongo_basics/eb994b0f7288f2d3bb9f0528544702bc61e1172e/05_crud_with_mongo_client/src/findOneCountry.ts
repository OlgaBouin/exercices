import * as mongo from "mongodb";
const dbUrl = process.env.MONGODB_DATABASE_URL;

// // write your MongoDB shell command here


export function findOneCountry(): any {
  // code your function here
  mongo.MongoClient.connect(dbUrl, (error, client) => {
    if (error) throw error;
    const db = client.db("mongo-basics");
  
    db.collection("worldAtlas").findOne({name: "Iceland"}).toArray().then((res) => {
      //client.close();
      return res;
    });
  });
}
