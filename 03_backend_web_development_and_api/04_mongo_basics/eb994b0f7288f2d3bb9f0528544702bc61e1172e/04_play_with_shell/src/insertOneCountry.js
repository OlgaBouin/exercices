/* global db */

// write your MongoDB shell command here
import * as mongo from "mongodb";
const dbUrl = process.env.MONGODB_DATABASE_URL;

const strana = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

mongo`${dbUrl}mongo-basics`;
db.worldAtlas.insertOne(strana);
