import React from "react";

const CardBody = (props) => {
  const listGenres = props.genres.map((genre, index) => {
    return <li key={"genre-" + index}>{genre}</li>;
  });
  const hideOrNot = React.useState(1);
  return (
    <>
      <div className="col-4">
        <img src={props.cover} width="300px" className="img-fluid"></img>
      </div>
      <div className="col-8">
        <p>{props.firstReleaseDate}</p>
        <ul>{listGenres}</ul>
        <p>{props.summary}</p>
        <button
          onClick={() => {
            hideOrNot[1]((hideOrNot[0] + 1) % 2);
          }}
        >
          {hideOrNot[0] ? "Show screens" : "Hide screens"}
        </button>
        <ul>
          <ChildComponent toHide={hideOrNot[0]} screens={props.screenshots} />
        </ul>
      </div>
    </>
  );
};

function ChildComponent(props) {
  const listOfScreens = props.screens.map((screen, index) => (
    <li key={index}>
      <img src={screen.url} width="50px" className="img-fluid"></img>
    </li>
  ));

  return props.toHide ? <h6>rien</h6> : <ul>{listOfScreens}</ul>;
}

export default CardBody;
