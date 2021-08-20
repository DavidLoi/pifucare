import React from "react";

const Brand = ({ name, image, id }) => {
  return (
    <div className="brand-wrapper">
      <img className="brand-image" src={image} />
      <h2 className="brand-name">{name}</h2>
    </div>
  );
};

export default Brand;
