import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import data from "../data/ProductInfo";

const CheckoutItem = ({ checkoutItem }) => {
  const item = data.find((item) => item.id === checkoutItem.id);
  const { increase, decrease, remove } = useGlobalContext();

  return (
    <div className="checkoutItem-container">
      <Link
        className="checkoutItem-btn"
        to={`/${item.brand}/${item.name}/${item.id}`}
      >
        <img className="checkoutItem-img" src={item.image} alt={item.name} />
      </Link>
      <div className="checkoutItem-content">
        <p>
          [{item.brand}] {item.name}
        </p>
        <p className="checkoutItem-price">C${item.price}</p>
        <div className="checkoutItem-quantity">
          <button
            onClick={() => {
              decrease(checkoutItem.id);
            }}
          >
            -
          </button>
          <p>{checkoutItem.amount}</p>
          <button
            onClick={() => {
              increase(checkoutItem.id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <p className="checkoutItem-total">
        C${(checkoutItem.amount * checkoutItem.cost).toFixed(2)}
      </p>
      <button className="checkoutItem-remove" onClick={() => remove(item.id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CheckoutItem;
