/* global db */
import * as mongo from "mongodb";

const dbUrl = process.env.MONGODB_DATABASE_URL;
mongo`${dbUrl}mongo-basics`;
db.createCollection("worldAtlas");
