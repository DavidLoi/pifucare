import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Checkout from "../components/Checkout";
import { useGlobalContext } from "../context";

const Shipping = () => {
  const history = useHistory();
  const { cart, setCart, email, shippingInfo, setMethod } = useGlobalContext();

  useEffect(() => {
    setCart({ ...cart, shipping: -1 });
  }, []);

  return (
    <div className="checkout-container">
      <div className="information-section">
        <div className="shipping-informationWrapper">
          <div className="shipping-information underline">
            <p className="shipping-label">Contact</p>
            <p>{email}</p>
          </div>
          <div className="shipping-information">
            <p className="shipping-label">Ship to</p>
            <p>
              {shippingInfo.address}, {shippingInfo.city}{" "}
              {shippingInfo.province} {shippingInfo.postalCode},{" "}
              {shippingInfo.country}
            </p>
          </div>
        </div>
        <p className="information-title">Shipping Method</p>
        <div className="information-pickup">
          <div className="information-pickupOption underline">
            <input
              type="radio"
              id="within300"
              name="shipping-option"
              onChange={() => {
                setCart({ ...cart, shipping: 10 });
                setMethod(["Ontario (within 300km of Toronto) · ", "$10.00"]);
              }}
            />
            <label for="within300">
              <div>
                <p className="location">Ontario (within 300km of Toronto)</p>
                <p className="price">$10.00</p>
              </div>
            </label>
          </div>
          <div className="information-pickupOption underline">
            <input
              type="radio"
              id="beyond300"
              name="shipping-option"
              onChange={() => {
                setCart({ ...cart, shipping: 15 });
                setMethod(["Ontario (beyond 300km of Toronto) ·", "$15.00"]);
              }}
            />
            <label for="beyond300">
              <div>
                <p className="location">Ontario (beyond 300km from Toronto)</p>
                <p className="price">$15.00</p>
              </div>
            </label>
          </div>
          <div className="information-pickupOption underline">
            <input
              type="radio"
              id="quebec"
              name="shipping-option"
              onChange={() => {
                setCart({ ...cart, shipping: 15 });
                setMethod(["Quebec · ", "$15.00"]);
              }}
            />
            <label for="quebec">
              <div>
                <p className="location">Quebec</p>
                <p className="price">$15.00</p>
              </div>
            </label>
          </div>
          <div className="information-pickupOption">
            <input
              type="radio"
              id="other"
              name="shipping-option"
              onChange={() => {
                setCart({ ...cart, shipping: 17 });
                setMethod(["BC/Alberta/Sask/Manitoba/Maritimes · ", "$17.00"]);
              }}
            />
            <label for="other">
              <div>
                <p className="location">BC/Alberta/Sask/Manitoba/Maritimes</p>
                <p className="price">$17.00</p>
              </div>
            </label>
          </div>
        </div>
        <button
          className={
            cart.shipping >= 0
              ? "btn-rect information-next"
              : "btn-rect information-next invalid"
          }
          onClick={() => history.push("/checkout/shipping/payment")}
        >
          Continue to Payment
        </button>
        <div className="return">
          <p onClick={() => history.push("/checkout/information")}>
            Return to Information
          </p>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default Shipping;
