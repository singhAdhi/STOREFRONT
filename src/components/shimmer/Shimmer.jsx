import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  const numberOfCards = 6;

  const cardArray = Array.from({ length: numberOfCards });
  return (
    <div className="d-flex flex-wrap">
      {cardArray.map((index, i) => {
        return (
          <div className="card" key={i}>
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>
              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
