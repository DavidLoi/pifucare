import React from "react";
import { useGlobalContext } from "../context";
import data from "../data/ProductInfo";

const CartItem = ({ cartItem }) => {
  const { increase, decrease, remove } = useGlobalContext();
  const item = data.find((item) => item.id === cartItem.id);
  return (
    <div className="cartItem">
      <button className="cartItem-btn">
        <img className="cartItem-img" src={item.image} alt={item.name} />
      </button>
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
        X
      </button>
    </div>
  );
};

export default CartItem;
