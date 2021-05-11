import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = (props) => {
  const genresNames = props.product.genres.map((genre) => genre.name);
  return (
    <div className="container-fluid bg-dark text-white text-center">
      <div className="row">
        <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      </div>
      <div className="row">
        <CardBody
          cover={props.product.cover.url}
          firstReleaseDate={props.product.first_release_date}
          genres={genresNames}
          summary={props.product.summary}
          screenshots={props.product.screenshots}
        />
      </div>
      <div className="row">
        <CardFooter slug={props.product.slug} />
      </div>
    </div>
  );
};

export default ProductCard;
