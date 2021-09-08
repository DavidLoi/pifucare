import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SingleBrand from "./pages/SingleBrand";
import SingleProduct from "./pages/SingleProduct";
import Information from "./pages/Information";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/brands">
            <Brands />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/checkout/information">
            <Information />
          </Route>
          <Route exact path="/checkout/shipping">
            <Shipping />
          </Route>
          <Route path="/checkout/:type/payment">
            <Payment />
          </Route>
          <Route exact path="/:brand">
            <SingleBrand />
          </Route>
          <Route path="/:brand/:name/:id">
            <SingleProduct />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default App;
