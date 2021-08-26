import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/ProductInfo";

const SingleProduct = () => {
  const { name, id } = useParams();
  const product = data.filter((product) => product.id.toString() === id)[0];
  return (
    <div className="singleproduct-container">
      <div className="singleproduct-imgcontainer">
        <img className="singleproduct-img" src={product.image} />
      </div>
      <div className="singleproduct-info">
        <div className="singleproduct-desc">
          <p className="singleproduct-title">{`[${product.brand}] ${product.name}`}</p>
          <p>{product.desc}</p>
          <p>
            {product.skinType[0]}
            <br />
            {product.skinType[1]}
          </p>
          <ul>
            Key Ingredients: <br />
            {product.keyIngredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <p>Size: {product.weight}</p>
          <ul>
            How to use: <br />
            {product.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ul>
          <p>
            Full Ingredients: <br /> {product.fullIngredients}
          </p>
          <p>{product.made}</p>
        </div>
        <div className="singleproduct-price">
          <p className="singleproduct-title">{product.price}</p>
          <p>Quantity</p>
          <input type="number" min="1"></input>
          <button className="btn-rect singleproduct-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
