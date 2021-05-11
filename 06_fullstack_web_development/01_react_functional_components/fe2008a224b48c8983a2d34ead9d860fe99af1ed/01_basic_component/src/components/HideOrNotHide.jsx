import React from "react";

// FAIL  tests/integration/hide-or-not-hide.test.js
// Basic component creation
//   #HideOrNotHide
//     ✕ The component should exist (98 ms)
//   #Button
//     ✕ Should be present (8 ms)
//     ✕ Should have an 'onClick' function property (6 ms)
//     ✕ Button text should change on click (7 ms)
//   #Text
//     ✕ Should be present on load (6 ms)
//     ✕ Should be hidden when clicking on the button (11 ms)

//hideOrNot[0] znachenie
//hideOrNot[1] funkzia

//let isHidden = false;
//let buttonName = "Hide";

// export const HideOrNotHide = () => {
//   // Code here
//   if (isHidden === true) {
//     return (
//       <div>
//         <button onClick={() => (isHidden = true)}>Hide</button>
//         <div>Voila le contenu</div>
//       </div>
//     );
//   } else {
//     return <button onClick={() => (isHidden = false)}>Unhide</button>;
//   }
// };

export const HideOrNotHide = () => {
  // Code here
  //O not hidden
  const hideOrNot = React.useState(0);
  return (
    <div>
      <button
        onClick={() => {
          // if (hideOrNot[0] === false) buttonName = "Hide";
          // else buttonName = "Unhide";
          hideOrNot[1]((hideOrNot[0] + 1) % 2);
        }}
      >
        {hideOrNot[0] ? "Unhide" : "Hide"}
      </button>
      <div>
        <ChildComponent toHide={hideOrNot[0]} />
      </div>
    </div>
  );
};

function ChildComponent(props) {
  return props.toHide ? <h6>rien</h6> : <p>Voila le contenu</p>;
}
