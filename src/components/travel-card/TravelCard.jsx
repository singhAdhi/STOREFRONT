import React from "react";
import { Link } from "react-router-dom";

const TravelCard = ({ id, image, title, text }) => {
  return (
    <>
      <div key={id} className="col-sm-6 col-md-4 mb-4 mb-md-0">
        <div className="shadow-sm border d-block h-100 bg-white">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
          <div className="bg-white p-4">
            <h2 className="heading-md-regular mb-2 d-flex align-items-center">
              <img
                className="ms-n4 me-3"
                src="public/assets/images/icons/arrows/triangle-icon.svg"
                alt=""
              />
              {title}
            </h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
