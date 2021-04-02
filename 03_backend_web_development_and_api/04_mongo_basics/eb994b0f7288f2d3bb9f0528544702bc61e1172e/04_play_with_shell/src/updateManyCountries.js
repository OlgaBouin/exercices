/* global db */

// write your MongoDB shell command here

import * as mongo from "mongodb";
const dbUrl = process.env.MONGODB_DATABASE_URL;

mongo`${dbUrl}mongo-basics`;
db.worldAtlas.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
