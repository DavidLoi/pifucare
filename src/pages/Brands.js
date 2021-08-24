import React from "react";
import BrandButton from "../components/BrandButton";
import brands from "../data/BrandInfo";

const Brands = () => {
  return (
    <div>
      <div className="brands-title">
        <h1>Price List</h1>
        <p>Take Your Pick</p>
      </div>
      <div className="brands-container">
        {brands.map((brand, index) => {
          return (
            <BrandButton key={index} name={brand.name} image={brand.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
