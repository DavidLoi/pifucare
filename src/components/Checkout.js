import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useGlobalContext } from "../context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  let subTotal = 0;
  for (let i = 0; i < cart.items.length; i++) {
    let item = cart.items[i];
    subTotal += item.amount * item.cost;
  }
  let taxes = Math.round((subTotal + cart.shipping) * 13) / 100;
  let total = Math.round((subTotal + cart.shipping) * 113) / 100;

  return (
    // <div className="checkout-container">
    <div className="checkout">
      <p className="checkout-title">My Cart</p>
      <ul>
        {cart.items.map((item, index) => {
          return <CheckoutItem key={index} checkoutItem={item} />;
        })}
      </ul>
      <div className="checkout-info">
        <div className="checkout-subtotal">
          <dl>
            <dt>Subtotal</dt>
            <dd>C${subTotal.toFixed(2)}</dd>
            <dt>Shipping</dt>
            <dd>
              {cart.shipping >= 0
                ? `C$${cart.shipping.toFixed(2)}`
                : "Calculated at next step"}
            </dd>
            <dt>Taxes</dt>
            <dd>C${taxes.toFixed(2)}</dd>
          </dl>
        </div>
        <div className="checkout-total">
          <dl>
            <dt>Total</dt>
            <dd>C${total.toFixed(2)}</dd>
          </dl>
        </div>
      </div>
      {/* <input
          className="checkout-discount"
          type="text"
          placeholder="Discount Code"
        />
        <button className="checkout-applyDiscount">Apply</button>
      </div>
      <div className="checkout-summary">
        <p className="checkout-title">Order Summary</p>
        <div className="checkout-info">
          <dl>
            <dt>Subtotal</dt>
            <dd>C${subTotal.toFixed(2)}</dd>
          </dl>
        </div>
        <dl>
          <dt>Total</dt>
          <dd>C${total.toFixed(2)}</dd>
        </dl>
        <button
          className="btn-rect checkout-btn"
          onClick={() => setShowEmail(true)}
        >
          E-Transfer
        </button>
        {showEmail && (
          <p className="checkout-email">
            A message has been copied to your keyboard, either email us or DM us
            on Instagram and we will reply with our E-transfer details after
            your order has been confirmed!
          </p>
        )} */}
    </div>
    // </div>
  );
};

export default Checkout;
