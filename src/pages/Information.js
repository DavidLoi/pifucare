import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";

const Information = () => {
  const [shipping, setShipping] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="checkout-container">
      <div className="information-section">
        <p className="information-title">Contact Information</p>
        <input type="email" id="email" placeholder="Email" />
        <p className="information-title">Delivery Method</p>
        <div className="information-delivery">
          <div className="information-deliveryOption underline">
            <input
              type="radio"
              id="shipping"
              name="delivery-option"
              onClick={() => {
                setShipping(true);
                setShowOptions(true);
              }}
            />
            <label for="shipping">Shipping</label>
          </div>
          <div className="information-deliveryOption">
            <input
              type="radio"
              id="pickup"
              name="delivery-option"
              onClick={() => {
                setShipping(false);
                setShowOptions(true);
              }}
            />
            <label for="pickup">Pickup</label>
          </div>
        </div>
        {showOptions &&
          (shipping ? (
            <div className="information-shipping">
              <p className="information-title">Shipping Address</p>
              <input type="text" id="firstName" placeholder="First name" />
              <input type="text" id="lastName" placeholder="Last name" />
              <input type="text" id="address" placeholder="Address" />
              <input
                type="text"
                id="apartment"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <input type="text" id="city" placeholder="City" />
              <input type="text" id="country" placeholder="Country/region" />
              <input type="text" id="province" placeholder="Province" />
              <input type="text" id="postalCode" placeholder="Postal code" />
              <input type="tel" id="phoneNumber" placeholder="Phone number" />
              <Link to="/checkout/shipping">
                <button className="btn-rect information-next">
                  Continue to shipping
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <p className="information-title">Pickup Locations</p>
              <div className="information-pickup">
                <div className="information-pickupOption underline">
                  <input type="radio" id="bcc" name="pickup-location" />
                  <label for="bcc">
                    <div>
                      <p className="location">
                        Pickle Barrel @ Bramalea City Centre
                      </p>
                      <p className="price">Free</p>
                      <p className="address">25 Peel Centre Dr, Brampton</p>
                      <p className="time">Weekends</p>
                    </div>
                  </label>
                </div>
                <div className="information-pickupOption">
                  <input type="radio" id="eaton" name="pickup-location" />
                  <label for="eaton">
                    <div>
                      <p className="location">
                        Uniqlo @ CF Toronto Eaton Centre
                      </p>
                      <p className="price">Free</p>
                      <p className="address">220 Yonge St, Toronto</p>
                      <p className="time">Weekends</p>
                    </div>
                  </label>
                </div>
              </div>
              <Link to="/checkout/payment">
                <button className="btn-rect information-next">
                  Continue to payment
                </button>
              </Link>
            </div>
          ))}
      </div>
      <Checkout />
    </div>
  );
};

export default Information;
