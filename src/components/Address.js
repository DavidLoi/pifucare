import React from "react";
import { useGlobalContext } from "../context";

const Address = ({ background }) => {
  const { shippingInfo, setShippingInfo } = useGlobalContext();
  return (
    <div
      className={
        background === "white" ? "information-shipping" : "payment-shipping"
      }
    >
      <input
        type="text"
        id="firstName"
        placeholder="First name"
        value={shippingInfo.firstName}
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
        value={shippingInfo.lastName}
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
        value={shippingInfo.address}
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
        value={shippingInfo.apartment}
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
        value={shippingInfo.city}
        onChange={(e) => {
          setShippingInfo({
            ...shippingInfo,
            city: e.target.value,
          });
        }}
      />
      <div className="row">
        <select
          className="selector"
          name="country"
          onChange={(e) => {
            setShippingInfo({ ...shippingInfo, country: e.target.value });
          }}
        >
          <option value="canada" select="selected">
            Canada
          </option>
        </select>
        <select
          className="selector"
          name="province"
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfo,
              province: e.target.value,
            });
            console.log(e.target.value);
          }}
        >
          <option value="AB">Alberta</option>
          <option value="BC">British Columbia</option>
          <option value="MB">Manitoba</option>
          <option value="NB">New Brunswick</option>
          <option value="NL">Newfoundland and Labrador</option>
          <option value="NT">Northwest Teritories</option>
          <option value="NS">Nova Scotia</option>
          <option value="NU">Nunavut</option>
          <option value="ON" select="selected">
            Ontario
          </option>
          <option value="PE">Prince Edward Island</option>
          <option value="QC">Quebec</option>
          <option value="SK">Saskatchewan</option>
          <option value="YT">Yukon</option>
        </select>
        <input
          type="text"
          id="postalCode"
          placeholder="Postal code"
          value={shippingInfo.postalCode}
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfo,
              postalCode: e.target.value,
            });
          }}
        />
      </div>
      <input
        type="tel"
        id="phoneNumber"
        placeholder="Phone number"
        value={shippingInfo.phoneNumber}
        onChange={(e) => {
          setShippingInfo({
            ...shippingInfo,
            phoneNumber: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Address;
