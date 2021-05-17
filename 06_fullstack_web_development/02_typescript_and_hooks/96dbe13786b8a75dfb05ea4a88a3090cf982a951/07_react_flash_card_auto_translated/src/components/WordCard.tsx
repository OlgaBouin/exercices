import React, { CSSProperties } from "react";
import { Word } from "../types/Word";
import vocabulary from "../../data/vocabulary";
import { AddingWordForm } from "./AddingWordForm";
import { WordModel } from "../models/word";

const myStyles: CSSProperties = {
  position: "absolute",
  width: "18rem",
};

// const mystyle = {
//   width: "18rem;",
// };

//const voc: Word[] = vocabulary;

const firstWord: Word = {
  french: "hameçon",
  russian: "крючок",
  active: true,
  successes: 0,
  failures: 0,
};

const imgRu = "../../../assets/images/43801_1000.png";
const imgFr = "../../../assets/images/43801_1000fr.png";

export const HideOrNotHide = (): JSX.Element => {
  const words = new WordModel(vocabulary);

  const [hidden, setHidden] = React.useState(false);

  const [word, setWord] = React.useState<Word>(firstWord);

  const chargeNewWord = (): void => {
    //const numberOfWords = voc.length;
    const numberOfWords = words.vocabulary.length;
    const i = Math.floor(Math.random() * numberOfWords);
    //setWord(voc[i]);
    setWord(words.vocabulary[i]);
  };

  return (
    <div>
      <div className="card" style={myStyles}>
        <img className="card-img-top" src={hidden ? imgFr : imgRu} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{hidden ? word.french : word.russian}</h5>

          <button onClick={() => setHidden(!hidden)} className="btn btn-primary">
            Get Answer
          </button>
          <button onClick={chargeNewWord} className="btn btn-primary">
            Change card
          </button>
          <AddingWordForm existingWords={words} />
        </div>
      </div>
    </div>
  );
  //
};
