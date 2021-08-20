import React from "react";

const Product = ({ size, pos, id, image, name, price }) => {
  return (
    <article className={`${pos} ${size}`} key={id}>
      <div className="product-wrapper">
        <img src={image} alt={name} className="product-img" />
        <div className="quick-view">quick view</div>
      </div>
      <p className="product-text">{name}</p>
      <p className="product-text">{price}</p>
    </article>
  );
};

export default Product;
