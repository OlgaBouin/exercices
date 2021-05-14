import React, { CSSProperties } from "react";
import { Word } from "../types/Word";
import MyForm from "./myForm";

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
  // ReactDOM.render(<NameForm />, document.getElementById("root"));

  const [hidden, setHidden] = React.useState(false);

  const [word, setWord] = React.useState<Word>(firstWord);

  //const [translation, setTranslation] = React.useState<string>("");

  // React.useEffect(() => {
  //   document.title = `Ckick on card for answer`;
  // });

  const chargeNewWord = (): void => {
    const numberOfWords = vocabulary.length;
    const i = Math.floor(Math.random() * numberOfWords);
    setWord(vocabulary[i]);
    console.log("WORD : ******************", word);
  };

  // const handleSubmit = () => {
  //   setTranslation();
  // };

  return (
    <div>
      <div className="card" style={myStyles}>
        <img className="card-img-top" src={hidden ? imgFr : imgRu} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{hidden ? word.french : word.russian}</h5>
          <MyForm translation={word.french} />
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">{/* <label htmlFor="formGroupExampleInput">Translation</label> */}</div>
            </div>
          </form>
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
};
