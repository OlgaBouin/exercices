import * as mongo from "mongodb";

// Write a function `initDatabase` that init and return a MongoDB client. It takes two arguments but **with default values**:
// - the URL of the running database **set by default** to `mongodb://mongo-basics-app:password@localhost:27017/mongo-basics`
// - an `object` that contains the options required for the connection **set by default** to:
// ```typescript
//   { useNewUrlParser: true, useUnifiedTopology: true }
// ```
// That function must return a `Promise<mongo.MongoClient>`
// If an error happens, it should `reject` it, if not, use `resolve` (resolve / reject in _promises_).


export function initDatabase(urlOfRunningDB = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics", 
optionsForTheConnexion = { useNewUrlParser: true, useUnifiedTopology: true }): Promise<mongo.MongoClient> {
  // code
  // const databaseUrl = process.env.MONGODB_DATABASE_URL;
  // const options = { useNewUrlParser: true, useUnifiedTopology: true };
  const promiseMongoClientToReturn = new Promise ((resolve, reject) => {
    resolve(urlOfRunningDB,optionsForTheConnexion);
    reject(new Error("An error happened"));
  
  });
//   promiseMongoClientToReturn.then((res) => return )
//   mongo.MongoClient.connect(urlOfRunningDB, optionsForTheConnexion).then((client) => {
//   return client.db("mongo-basics");
// }


