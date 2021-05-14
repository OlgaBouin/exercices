import React, { CSSProperties } from "react";
import { Word } from "../types/Word";

const myStyles: CSSProperties = {
  position: "absolute",
  width: "18rem",
};

// const mystyle = {
//   width: "18rem;",
// };

const vocabulary: Word[] = [
  {
    french: "stylo",
    russian: "ручка",
    active: true,
    successes: 0,
    failures: 0,
  },
  {
    french: "travail",
    russian: "работа",
    active: true,
    successes: 0,
    failures: 0,
  },
  {
    french: "lunettes",
    russian: "очки",
    active: true,
    successes: 0,
    failures: 0,
  },
  {
    french: "pc",
    russian: "компьютер",
    active: true,
    successes: 0,
    failures: 0,
  },
  {
    french: "tasse",
    russian: "чашка",
    active: true,
    successes: 0,
    failures: 0,
  },
];

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
  const [hidden, setHidden] = React.useState(false);

  const [word, setWord] = React.useState<Word>(firstWord);

  // React.useEffect(() => {
  //   document.title = `Ckick on card for answer`;
  // });

  const chargeNewWord = (): void => {
    const numberOfWords = vocabulary.length;
    const i = Math.floor(Math.random() * numberOfWords);
    setWord(vocabulary[i]);
    console.log("WORD : ******************", word);
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
        </div>
      </div>
    </div>
  );
  //
};
