import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Address from "../components/Address";
import Checkout from "../components/Checkout";
import { useGlobalContext } from "../context";

const Payment = () => {
  const { type } = useParams();
  const {
    email,
    shippingInfo,
    method,
    payMethod,
    setPayMethod,
    billingAddress,
    setBillingAddress,
  } = useGlobalContext();
  useEffect(() => {
    setPayMethod("");
    setBillingAddress(false);
  }, []);
  var postalCodeEx = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  var phoneNumberEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return (
    <div className="checkout-container">
      <div className="payment-section">
        <div className="shipping-informationWrapper">
          <div className="payment-information underline">
            <p className="payment-label">Contact</p>
            <p className="payment-main">{email}</p>
          </div>
          {type === "shipping" && (
            <div className="payment-information underline">
              <p className="payment-label">Ship to</p>
              <p className="payment-main">
                {shippingInfo.address}, {shippingInfo.city}{" "}
                {shippingInfo.province} {shippingInfo.postalCode},{" "}
                {shippingInfo.country}
              </p>
            </div>
          )}
          <div className="payment-information">
            <p className="payment-label">Method</p>
            <div className="payment-method">
              <p className="payment-main">{method[0]}&nbsp;</p>
              <p className="payment-main bold">{method[1]}</p>
              {type === "pickup" && <p className="payment-sub">{method[2]}</p>}
            </div>
          </div>
        </div>
        <p className="information-title">Payment</p>
        <div className="information-delivery">
          <div className="information-deliveryOption underline">
            <input
              type="radio"
              id="emt"
              name="payment-option"
              required
              onChange={() => {
                setPayMethod("emt");
              }}
            />
            <label for="emt">Interac E-Transfer [FREE Samples provided]</label>
          </div>
          {payMethod === "emt" && (
            <div className="payment-emt">
              <p>
                Please send your e-transfer to pifu.care@gmail.com within 24
                hours of receiving the order confirmatin email.
              </p>
            </div>
          )}
          <div className="information-deliveryOption">
            <input
              type="radio"
              id="cash"
              name="payment-option"
              required
              onChange={() => {
                setPayMethod("cash");
              }}
            />
            <label for="cash">Cash [FREE Samples provided]</label>
          </div>
        </div>
        <p className="information-title">Billing Address</p>
        <div className="information-delivery">
          <div className="information-deliveryOption underline">
            <input
              type="radio"
              id="same"
              name="billing-address"
              required
              onChange={() => {
                setBillingAddress(false);
              }}
            />
            <label for="same">Same as shipping address</label>
          </div>
          <div className="information-deliveryOption">
            <input
              type="radio"
              id="different"
              name="billing-address"
              required
              onChange={() => {
                setBillingAddress(true);
              }}
            />
            <label for="different">Use a different billing address</label>
          </div>
          {billingAddress && <Address background="gray" />}
        </div>
        <button
          className={
            payMethod &&
            (!billingAddress ||
              (billingAddress &&
                shippingInfo.firstName &&
                shippingInfo.lastName &&
                shippingInfo.address &&
                shippingInfo.city &&
                shippingInfo.country &&
                shippingInfo.province &&
                postalCodeEx.exec(shippingInfo.postalCode) &&
                phoneNumberEx.exec(shippingInfo.phoneNumber)))
              ? "btn-rect information-next"
              : "btn-rect information-next invalid"
          }
          onClick={() => console.log("pay")}
        >
          Continue to Payment
        </button>
      </div>
      <Checkout />
    </div>
  );
};

export default Payment;
