import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let n = 7.5;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState({
    items: [
      { id: 1, amount: 2, cost: 2.5 },
      { id: 2, amount: 1, cost: 2.5 },
    ],
    shipping: -1,
    total: n.toFixed(2),
  });
  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "Canada",
    province: "Ontario",
    postalCode: "",
    phoneNumber: "",
  });
  const [pickupLocation, setPickupLocation] = useState("");
  const [method, setMethod] = useState(["", "", ""]);
  const [payMethod, setPayMethod] = useState("");
  const [billingAddress, setBillingAddress] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const add = (id, amount, price) => {
    console.log(id, amount, price);
    console.log(cart.items.find((item) => item.id === id));
    if (cart.items.find((item) => item.id === id) === undefined) {
      setCart({
        items: [
          ...cart.items,
          { id: parseInt(id), amount: amount, cost: parseFloat(price) },
        ],
        total: (parseFloat(cart.total) + amount * price).toFixed(2),
      });
    }
  };
  const remove = (id) => {
    const item = cart.items.find((item) => item.id === id);
    const price = item.amount * item.cost;
    setCart({
      items: cart.items.filter((item) => item.id !== id),
      total: (cart.total - price).toFixed(2),
    });
  };
  const increase = (id) => {
    let newPrice = 0;
    let tempCart = cart.items.map((item) => {
      if (item.id === id) {
        const { id, amount, cost } = item;
        newPrice = cost;
        return { id: id, amount: amount + 1, cost: cost };
      }
      return item;
    });
    let tempTotal = parseFloat(cart.total) + newPrice;
    setCart({
      items: tempCart,
      total: tempTotal.toFixed(2),
    });
  };
  const decrease = (id) => {
    let newPrice = 0;
    let quantity = 0;
    let tempCart = cart.items.map((item) => {
      if (item.id === id) {
        const { id, amount, cost } = item;
        newPrice = cost;
        quantity = amount;
        return { id: id, amount: amount - 1, cost: cost };
      }
      return item;
    });
    let tempTotal = parseFloat(cart.total) - newPrice;
    if (quantity > 1) {
      setCart({
        items: tempCart,
        total: tempTotal.toFixed(2),
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        cart,
        setCart,
        add,
        remove,
        increase,
        decrease,
        email,
        setEmail,
        shippingInfo,
        setShippingInfo,
        pickupLocation,
        setPickupLocation,
        method,
        setMethod,
        payMethod,
        setPayMethod,
        billingAddress,
        setBillingAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
