import React from "react";
import "./Bestseller.css";
import womenShoe from "../../images/womenShoe.png";

const Bestseller = () => {
  return (
    <div className="bestseller">
      <div className="best-text">
        <h1>Best Seller This Week</h1>
      </div>
      <div className="best-container">
        <div className="best-left">
          <div className="best-items">
            <img src={womenShoe} alt="" />
            <div></div>
          </div>
        </div>
        <div className="best-right">
          <h1>Adidas Falcon shoes for women - 2021 Edition</h1>
          <span>$120.50</span>
          <button className="btn">Bye Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
