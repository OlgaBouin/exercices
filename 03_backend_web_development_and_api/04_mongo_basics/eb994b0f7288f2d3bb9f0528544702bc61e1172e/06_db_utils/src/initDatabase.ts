import { rejects } from "assert";
import * as mongo from "mongodb";
import { resolve } from "path";
import { Url } from "url";
import { getDatabaseUrl } from "../utils/getDatabaseUrl";

// Write a function `initDatabase` that init and return a MongoDB client. It takes two arguments but **with default values**:
// - the URL of the running database **set by default** to `mongodb://mongo-basics-app:password@localhost:27017/mongo-basics`
// - an `object` that contains the options required for the connection **set by default** to:
// ```typescript
//   { useNewUrlParser: true, useUnifiedTopology: true }
// ```
// That function must return a `Promise<mongo.MongoClient>`
// If an error happens, it should `reject` it, if not, use `resolve` (resolve / reject in _promises_).

export function initDatabase(
  urlOfRunningDB = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics",
  objectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
): Promise<mongo.MongoClient> {
  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(urlOfRunningDB, objectOptions, function (error, client) {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}
