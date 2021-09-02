import React from "react";
import Checkout from "../components/Checkout";
import { useGlobalContext } from "../context";

const Shipping = () => {
  const { email } = useGlobalContext();
  return (
    <div className="checkout-container">
      <div className="information-section">
        <p className="information-title">Contact Information</p>
      </div>
      <Checkout />
    </div>
  );
};

export default Shipping;
