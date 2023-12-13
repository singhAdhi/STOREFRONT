import React from "react";

const Card = ({ title, type }) => {
  // console.log(title);
  return (
    <>
      <div className="swiper-slide shadow-sm">
        <a href="">
          <div className="img-container">
            <img src="public/assets/images/homepage/voucher-section/1.svg" alt="" />
          </div>
          <div className="bg-white d-flex flex-column p-2">
            <h2 className="heading-sm-regular text-truncate mb-2">{title}</h2>
            <div className="d-flex justify-content-between">
              <p className="heading-xxs-regular">45, 125 Points</p>
              <p className="heading-xxs">{type}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
