import React from "react";
import { Link } from "react-router-dom";

const Product = ({ size, pos, id, image, name, price, brand }) => {
  return (
    <Link to={`/${brand}/${name}/${id}`} className="product-link">
      <article className={`${pos} ${size}`} key={id}>
        <div className="product-wrapper">
          <img src={image} alt={name} className="product-img" />
          <div className="quick-view">quick view</div>
        </div>
        <p className="product-text">
          [{brand}] {name}
        </p>
        <p className="product-text">C${price}</p>
      </article>
    </Link>
  );
};

export default Product;
