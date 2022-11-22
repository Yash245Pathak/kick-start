import React from "react";
import "./New.css";
import { newCard } from "../../data/newCard";
import ratings from "../../images/ratings.png";

const New = () => {
  return (
    <div className="new">
      <div className="new-headings">
        <h1>New Arrivals</h1>
        <span>View All</span>
      </div>
      <div className="new-text">
        Enjoy the new products from our store. Select what you like, enjoy &
        return.
      </div>
      <div className="new-box">
        {newCard.map((n) => {
          return (
            <>
              <div className="new-card" key={n.id}>
                <div className="new-img">
                  <p>{n.no}</p>
                  <img src={n.image} alt="" />
                </div>
                <div className="new-card-text">
                  <img src={ratings} alt="" />
                  <p>{n.desc}</p>
                  <p>{n.price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default New;
