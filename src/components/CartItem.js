import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import data from "../data/ProductInfo";

const CartItem = ({ cartItem }) => {
  const { increase, decrease, remove, closeCart } = useGlobalContext();
  const item = data.find((item) => item.id === cartItem.id);
  return (
    <div className="cartItem">
      <Link
        className="cartItem-btn"
        to={`/${item.brand}/${item.name}/${item.id}`}
        onClick={closeCart}
      >
        <img className="cartItem-img" src={item.image} alt={item.name} />
      </Link>
      <div className="cartItem-content">
        <p className="cartItem-name">
          [{item.brand}] {item.name}
        </p>
        <p className="cartItem-price">C${item.price}</p>
        <div className="cartItem-quantity">
          <button
            onClick={() => {
              decrease(cartItem.id);
            }}
          >
            -
          </button>
          <p>{cartItem.amount}</p>
          <button
            onClick={() => {
              increase(cartItem.id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <button className="cartItem-remove" onClick={() => remove(cartItem.id)}>
        x
      </button>
    </div>
  );
};

export default CartItem;
