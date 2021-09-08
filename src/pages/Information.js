import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Address from "../components/Address";
import Checkout from "../components/Checkout";
import { useGlobalContext } from "../context";

const Information = () => {
  const history = useHistory();
  const [shipping, setShipping] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const {
    cart,
    setCart,
    email,
    setEmail,
    shippingInfo,
    setShippingInfo,
    method,
    setMethod,
  } = useGlobalContext();
  var postalCodeEx = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  var phoneNumberEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  useEffect(() => {
    setCart({ ...cart, shipping: -1 });
  }, []);

  return (
    <div className="checkout-container">
      <form>
        <div className="information-section">
          <p className="information-title">Contact Information</p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <p className="information-title">Delivery Method</p>
          <div className="information-delivery">
            <div className="information-deliveryOption underline">
              <input
                type="radio"
                id="shipping"
                name="delivery-option"
                onChange={() => {
                  setShipping(true);
                  setShowOptions(true);
                }}
                required
              />
              <label for="shipping">Shipping</label>
            </div>
            <div className="information-deliveryOption">
              <input
                type="radio"
                id="pickup"
                name="delivery-option"
                onChange={() => {
                  setShipping(false);
                  setShowOptions(true);
                }}
                required
              />
              <label for="pickup">Pickup</label>
            </div>
          </div>
          {showOptions &&
            (shipping ? (
              <div className="information-shipping">
                <p className="information-title">Shipping Address</p>
                <Address background="white" />
                <button
                  className={
                    shippingInfo.firstName &&
                    shippingInfo.lastName &&
                    shippingInfo.address &&
                    shippingInfo.city &&
                    shippingInfo.country &&
                    shippingInfo.province &&
                    postalCodeEx.exec(shippingInfo.postalCode) &&
                    phoneNumberEx.exec(shippingInfo.phoneNumber) &&
                    email.includes("@")
                      ? "btn-rect information-next"
                      : "btn-rect information-next invalid"
                  }
                  onClick={() => history.push("/checkout/shipping")}
                >
                  Continue to Shipping
                </button>
              </div>
            ) : (
              <div>
                <p className="information-title">Pickup Locations</p>
                <div className="information-pickup">
                  <div className="information-pickupOption underline">
                    <input
                      type="radio"
                      id="bcc"
                      name="pickup-location"
                      onChange={() => {
                        setMethod([
                          "Pick up in store · ",
                          "Pickle Barrel @ Bramalea City Centre",
                          "25 Peel Centre Dr, Brampton ON",
                        ]);
                        setCart({ ...cart, shipping: 0 });
                      }}
                    />
                    <label for="bcc">
                      <div>
                        <p className="location">
                          Pickle Barrel @ Bramalea City Centre
                        </p>
                        <p className="price">Free</p>
                        <p className="address">
                          25 Peel Centre Dr, Brampton ON
                        </p>
                        <p className="time">Weekends</p>
                      </div>
                    </label>
                  </div>
                  <div className="information-pickupOption">
                    <input
                      type="radio"
                      id="eaton"
                      name="pickup-location"
                      onChange={() => {
                        setMethod([
                          "Pick up in store · ",
                          "Uniqlo @ CF Toronto Eaton Centre",
                          "220 Yonge St, Toronto ON",
                        ]);
                        setCart({ ...cart, shipping: 0 });
                      }}
                    />
                    <label for="eaton">
                      <div>
                        <p className="location">
                          Uniqlo @ CF Toronto Eaton Centre
                        </p>
                        <p className="price">Free</p>
                        <p className="address">220 Yonge St, Toronto ON</p>
                        <p className="time">Weekends</p>
                      </div>
                    </label>
                  </div>
                </div>
                <button
                  className={
                    method[1] && email.includes("@")
                      ? "btn-rect information-next"
                      : "btn-rect information-next invalid"
                  }
                  onClick={() => history.push("/checkout/pickup/payment")}
                >
                  Continue to Payment
                </button>
              </div>
            ))}
        </div>
      </form>
      <Checkout />
    </div>
  );
};

export default Information;
