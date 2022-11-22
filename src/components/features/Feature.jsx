import React from "react";
import "./Feature.css";
import { featureCard } from '../../data/featureCard.js'

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-text">
        <h1>Feature Products</h1>
        <span>View All</span>
      </div>
      <div className="feature-card">
        {featureCard.map((i)=>{
          return (
            <div key={i.id}>
              <img src={i.image} alt="" />
              <p>{i.desc}</p>
              <span>{i.price}</span>
            </div>
          )
        })}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Feature;
