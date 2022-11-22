import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <div className="why">
      <h1>Why Choose Us ?</h1>
      <p>
        For Explosive events (sprints up to 400 meters, long jump, triple jump)
        the reduction in atmospheric pressure means there is less resistance
        from the atmosphere.
      </p>
      <div className="why-list">
        <ul>
            <li>Fast Delivery</li>
            <li>Cool Prices</li>
        </ul>
        <ul>
          <li>Great Support</li>
          <li>High Quality</li>
        </ul>
      </div>
      <div className="line" id="line1"></div>
    </div>
  );
};

export default Why;
