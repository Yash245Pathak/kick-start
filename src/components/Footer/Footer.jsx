import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p>Our Shop is the best choice for buying branded footwears.</p>
          <p> &copy; 2022 Shop.Made with love.</p>
        </div>
        <div className="footer-right">
          <div className="home">
            <h2>Home</h2>
            <ul>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>Copyright</li>
              <li>Popular Categories</li>
            </ul>
          </div>
          <div className="ourInfo">
            <h2>Our Information</h2>
            <ul>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Consitions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>
          <div className="myAccount">
            <h2>My Account</h2>
            <ul>
              <li>Press Inquiries</li>
              <li>Socila Media Directories</li>
              <li>Permission</li>
              <li>Requests</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
