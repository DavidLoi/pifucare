import React from "react";
import { useGlobalContext } from "../context";
import { FaChevronRight } from "react-icons/fa";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartOpen, closeCart, cart } = useGlobalContext();
  console.log(cart);

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
            <button className="btn-rect">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
