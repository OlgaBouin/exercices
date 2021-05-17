import React from "react";

const MyForm = (props: any) => {
  console.log("TRANSLATION-------------------- : ", props.translation);

  const [enteredTranslation, setEnteredTranslation] = React.useState("");
  const [result, setResult] = React.useState("");
  const [value, setValue] = React.useState("");
  const [correctQcmResponse, setEnteredRadioButton] = React.useState(false);

  const setInputFromUser = (input: any): void => {
    console.log("INPUT--------------------- : ", input);
    console.log("INPUT TARGET--------------------- : ", input.target);
    console.log("INPUT TARGET VALUE--------------------- : ", input.target.value);
    //if (input && input.target && input.target.value) {
    setValue(input.target.value);
    setEnteredTranslation(input.target.value);
    //}
  };

  const checkResult = () => {
    {
      enteredTranslation === props.translation ? setResult("OK") : setResult("Oups");
    }
  };

  const checkResultRadio = () => {
    {
      correctQcmResponse ? alert("Correct !") : alert("Try again !");

      console.log("ENTERED RADIO BUTTON-------------------- : ", correctQcmResponse);
      // if (document.getElementById("track") != null) {
      //   console.log("DOC-----------------", document.getElementById("track"));
      // document.getElementById("track").innerHTML = "YES";
      //=== true ? setResult("OK") : setResult("Oups");
    }
  };

  console.log("ENTERED TRANSLATION-------------------- : ", enteredTranslation);
  console.log("ENTERED RADIO BUTTON-------------------- : ", correctQcmResponse);
  return (
    <div>
      <h1>{result}</h1>
      <h1>{correctQcmResponse}</h1>
      <div>
        <form>
          <input type="text" value={value} onChange={setInputFromUser} />

          <input
            onChange={(event): void => {
              setEnteredTranslation(event.target.value);
            }}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          ></input>
          <button onClick={checkResult} className="btn btn-primary"></button>
        </form>
      </div>
      <fieldset>
        <legend>Please select one of the following</legend>
        <input
          type="radio"
          name="action"
          id="track"
          value="track"
          onChange={(): void => {
            setEnteredRadioButton(true);
          }}
        />
        <label htmlFor="track">{props.translation}</label>
        <br />
        <input
          type="radio"
          name="action"
          id="event"
          value="event"
          onChange={(): void => {
            setEnteredRadioButton(false);
          }}
        />
        <label htmlFor="event">livre</label>
        <br />
        <input
          type="radio"
          name="action"
          id="message"
          value="message"
          onChange={(): void => {
            setEnteredRadioButton(false);
          }}
        />
        <label htmlFor="message">message</label>
        <br />
      </fieldset>
      <button onClick={checkResultRadio} className="btn btn-primary">
        Go go go !
      </button>
    </div>
  );
};

export default MyForm;

// export class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "" };
//   }
//   myChangeHandler = (event) => {
//     this.setState({ username: event.target.value });
//   };

//   render() {
//     return (
//       <form>
//         <h1>Hello {this.state.username}</h1>
//         <p>Enter your name:</p>
//         <input type="text" onChange={this.myChangeHandler} />
//       </form>
//     );
//   }
// }
