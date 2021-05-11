import React from "react";

const CardFooter = (props) => {
  return (
    <div className="col">
      <a href={"games/" + props.slug}>See more</a>
    </div>
  );
};

export default CardFooter;
