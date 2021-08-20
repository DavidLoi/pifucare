import React from "react";
import Brand from "../components/Brand";
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
          <Brand key={index} name={brand.name} image={brand.image} />;
        })}
      </div>
    </div>
  );
};

export default Brands;
