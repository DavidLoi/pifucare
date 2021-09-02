import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Checkout from "../components/Checkout";
import { useGlobalContext } from "../context";

const Information = () => {
  const history = useHistory();
  const [shipping, setShipping] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const {
    email,
    setEmail,
    shippingInfo,
    setShippingInfo,
    pickupLocation,
    setPickupLocation,
  } = useGlobalContext();

  return (
    <div className="checkout-container">
      <form>
        <div className="information-section">
          <p className="information-title">Contact Information</p>
          <input
            type="email"
            id="email"
            placeholder="Email"
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
                onClick={() => {
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
                onClick={() => {
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
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      firstName: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      lastName: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      apartment: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="country"
                  placeholder="Country/region"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      country: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="province"
                  placeholder="Province"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      province: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Postal code"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      postalCode: e.target.value,
                    });
                  }}
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone number"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      phoneNumber: e.target.value,
                    });
                  }}
                />
                <button
                  className={
                    shippingInfo.firstName &&
                    shippingInfo.lastName &&
                    shippingInfo.address &&
                    shippingInfo.city &&
                    shippingInfo.country &&
                    shippingInfo.province &&
                    shippingInfo.postalCode &&
                    shippingInfo.phoneNumber &&
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
                      onChange={() =>
                        setPickupLocation(
                          "Pickle Barrel @ Bramalea City Centre"
                        )
                      }
                    />
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
                    <input
                      type="radio"
                      id="eaton"
                      name="pickup-location"
                      onChange={() =>
                        setPickupLocation("Uniqlo @ CF Toronto Eaton Centre")
                      }
                    />
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
                <button
                  className={
                    pickupLocation && email.includes("@")
                      ? "btn-rect information-next"
                      : "btn-rect information-next invalid"
                  }
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
