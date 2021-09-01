import React from "react";
import { useGlobalContext } from "../context";
import { FaChevronRight } from "react-icons/fa";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { isCartOpen, closeCart, cart } = useGlobalContext();

  return (
    <div>
      {isCartOpen && (
        <div
          className={`${isCartOpen ? "background dark" : "background"}`}
          onClick={closeCart}
        ></div>
      )}
      <div className={`${isCartOpen ? "cart show-cart" : "cart"}`}>
        <div className="cart-container">
          <div className="cart-header">
            <button onClick={closeCart}>
              <FaChevronRight />
            </button>
            <p>Cart</p>
          </div>
          <div className="cart-content">
            <ul className="cart-items">
              {cart.items.map((item, index) => {
                return <CartItem key={index} cartItem={item} />;
              })}
            </ul>
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <p>C${cart.total}</p>
            </div>
          </div>
          <div className="cart-footer">
            <Link to="/checkout/information">
              <button className="btn-rect" onClick={closeCart}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
