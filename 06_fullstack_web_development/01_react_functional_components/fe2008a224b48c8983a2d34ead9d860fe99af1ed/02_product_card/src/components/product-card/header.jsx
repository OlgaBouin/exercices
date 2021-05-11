import React from "react";

const CardHeader = (props) => {
  const listOfImages = props.platformLogos.map((img, index) => {
    if (img.platform_logo) {
      return (
        <li key={index}>
          <img src={img.platform_logo.url} width="70px" className="img-fluid"></img>
        </li>
      );
    } else
      return (
        <li key={index}>
          <img src="assets/images/card.png"></img>
        </li>
      );
  });

  return (
    <>
      <div className="col-4">
        <p className="text-center text-warning">{props.name}</p>
      </div>
      <div className="col-4"></div>
      <div className="col-4">
        <ul>{listOfImages}</ul>
      </div>
    </>
  );
};

export default CardHeader;
