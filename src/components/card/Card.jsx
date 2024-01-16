import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  type,
  name,
  img,
  Price,
  points,
  route,
  handleClick,
}) => {
  return (
    <>
      {/* <div className="swiper-slide shadow"> */}
      <Link to={route} onClick={handleClick}>
        <div className="img-container">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="bg-white d-flex flex-column p-2">
          <h2 className="heading-sm-regular text-truncate mb-2">{name}</h2>
          <div className="d-flex justify-content-between">
            <p className="heading-xxs-regular">
              {Price && Price?.ActualPrice?.Amount + " Points"}
              {points && `${points} Points`}
            </p>
            <p className="heading-xxs">{type}</p>
          </div>
        </div>
      </Link>
      {/* </div> */}
    </>
  );
};

export default Card;
