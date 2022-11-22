import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import contact from "../../images/contact.png";
import cart from "../../images/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-text">
        <ul>
          <li>Footwear</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Sale</li>
        </ul>
      </div>
      <div className="header-items">
        <img src={search} alt="" />
        <img src={contact} alt="" />
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Header;
