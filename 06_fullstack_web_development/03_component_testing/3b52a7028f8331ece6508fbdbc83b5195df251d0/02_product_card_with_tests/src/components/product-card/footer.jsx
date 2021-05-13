import React from "react";

const CardFooter = ({ slug }) => {
  return (
    <div className="product-card--footer bg-dark">
      <a href={`games/${slug}`}>See more</a>
      {/* <Link  data-testid="item" to={`games/${slug}`} { linkId: 'Link_test1' }>See more</Link> */}
    </div>
  );
};

export default CardFooter;
