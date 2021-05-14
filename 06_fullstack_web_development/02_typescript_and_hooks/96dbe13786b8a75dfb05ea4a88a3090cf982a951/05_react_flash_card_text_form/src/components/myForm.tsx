import React from "react";

const MyForm = (props: any) => {
  console.log("TRANSLATION-------------------- : ", props.translation);

  const [enteredTranslation, setEnteredTranslation] = React.useState("");
  const [result, setResult] = React.useState("");
  const [value, setValue] = React.useState("");

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
  console.log("ENTERED TRANSLATION-------------------- : ", enteredTranslation);
  return (
    <div>
      <h1>{result}</h1>
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
            placeholder="Translation in french"
          ></input>
          <button onClick={checkResult} className="btn btn-primary">
            Go !
          </button>
        </form>
      </div>
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
