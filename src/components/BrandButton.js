import React from "react";
import { Link } from "react-router-dom";

const BrandButton = ({ name, image }) => {
  return (
    <div className="brand-wrapper">
      <Link to={`/${name}`} className="brand-btn btn-circ">
        Buy Now
      </Link>
      <img className="brand-img" src={image} alt={name} />
      <h3 className="brand-name">{name}</h3>
    </div>
  );
};

export default BrandButton;
