import React from "react";
import dotenv from "dotenv";

dotenv.config();

export const AddingWordForm = (props: any): JSX.Element => {
  const [enteredFrenchWord, setFrWord] = React.useState("");
  const [translatedRussianhWord, setRuWord] = React.useState("");
  function createWordInVoc(): void {
    props.existingWords.addOneWord(enteredFrenchWord, translatedRussianhWord);
    setRuWord(translatedRussianhWord);
    props.existingWords.vocabulary.forEach((elem: any) => console.log(elem));
  }

  React.useEffect(() => {
    //!!!!!!!!!!!!!!!!!!! ADD KEY HERE TO MAKE URL WORK !!!!!!!!!!!!!!!!!!!!!!
    const urlTranslate = `https://api-free.deepl.com/v2/translate?auth_key=&text=${enteredFrenchWord}&target_lang=RU`;

    const options = {
      method: "POST",
      headers: { accept: "application/json" },
    };
    fetch(urlTranslate, options)
      .then((resp) => resp.json())
      .then((transArray) => {
        setRuWord(transArray.translations[0].text);
      });
  }, [enteredFrenchWord]);

  return (
    <div>
      <form>
        <input type="text" />
        <input
          onChange={(event): void => {
            setFrWord(event.target.value);
          }}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="French word to add"
        ></input>
        <button onClick={createWordInVoc} className="btn btn-primary">
          Add card
        </button>
      </form>
    </div>
  );
};
