import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
