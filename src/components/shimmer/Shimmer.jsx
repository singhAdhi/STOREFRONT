import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  const numberOfCards = 6;

  const cardArray = Array.from({ length: numberOfCards });
  console.log(cardArray);
  return (
    <div className="d-flex flex-wrap">
      {cardArray.map((index) => {
        return (
          <div class="card" key={index}>
            <div class="shimmerBG media"></div>
            <div class="p-32">
              <div class="shimmerBG title-line"></div>
              <div class="shimmerBG title-line end"></div>
              <div class="shimmerBG content-line m-t-24"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
