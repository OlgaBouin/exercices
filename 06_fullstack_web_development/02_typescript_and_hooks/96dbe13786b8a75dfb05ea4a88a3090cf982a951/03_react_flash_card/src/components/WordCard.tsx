import React from "react";
import { Word } from "../types/Word";
// import * as dotenv from "dotenv";
// import * as mongo from "mongodb";

// dotenv.config();

// const databaseUrl = process.env.MONGO_URL || "";

// const options = { useNewUrlParser: true, useUnifiedTopology: true };

// export function initDB(): Promise<mongo.MongoClient> {
//   return mongo.MongoClient.connect(databaseUrl, options);
// }

const firstWord: Word = {
  french: "hameçon",
  russian: "крючок",
  active: true,
  successes: 0,
  failures: 0,
};

export const HideOrNotHide = (): JSX.Element => {
  //flash-card ??
  //db.collection("vocabulary");

  const [hidden, setHidden] = React.useState(false);

  // const [vocabulary, setVoc] = React.useState<Word[]>([firstWord]);

  //setVoc([firstWord]);
  //const [word, setWord] = React.useState<string>("initial voila");
  //console.log(word);
  // const [db, setDB] = React.useState();

  // React.useEffect(() => {
  //   fetch(databaseUrl, {
  //     headers: { accept: "application/json" },
  //   })
  //     .then(async (resp) => setVoc(await resp.json()))
  //     .then((resp) => console.log(resp));
  // }, []);

  // React.useEffect(() => {
  //   fetch(databaseUrl, {
  //     headers: { accept: "application/json" },
  //   }).then((client) => setDB(client.db()));

  //   // .then(async (resp) => setVoc(await resp.json()))
  //   // .then((resp) => console.log(resp));
  // }, []);

  // console.log("*******************************", vocabulary);

  // initDB().then((client) => {
  //   const db = client.db();

  //   const chargeNewWord = (): string => {
  //     const wordObjet = db.collection("vocabulary").findOne({});
  //     console.log(wordObjet);
  //     setWord("voila");
  //     console.log("WORD***********************", word);
  //     return "voila";
  //   };

  //   console.log(chargeNewWord());
  // });

  return (
    // <div>
    <div>
      <button onClick={() => setHidden(!hidden)}>{hidden ? firstWord.french : firstWord.russian}</button>
    </div>
    //   {/* {!hidden && <p className="content">This is my text</p>} */}
    //   {/* <div>
    //     <button onClick={() => setWord("word changed")}>Get Word</button>
    //     {<p className="content">This is my word : vocabulary</p>}
    //   </div> */}
    // // </div>
  );
  //
};
