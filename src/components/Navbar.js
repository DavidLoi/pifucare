import React from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaInstagram,
  FaChevronDown,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <p className="logo">PifuCare</p>
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/brands">
              Brands
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.instagram.com/pifucare/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.instagram.com/pifucare/"
              target="_blank"
              rel="noreferrer"
            >
              <FaBell />
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.instagram.com/pifucare/"
              target="_blank"
              rel="noreferrer"
            >
              <FaChevronDown />
            </a>
          </li>
          <li>
            <button className="nav-link">
              <FaShoppingCart />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
