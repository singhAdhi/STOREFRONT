import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ heading, id, title, type, Name, img }) => {
  // console.log(item);

  if (heading === "products") {
    return (
      <>
        <div className="col-6 col-md-4 mb-4">
          <Link to={`/ProductDetails/${id}`}>
            <div className="img-container">
              <img
                src="public/assets/images/homepage/voucher-section/1.svg"
                alt=""
              />
            </div>
            <div className="bg-white d-flex flex-column p-2">
              <h2 className="heading-sm-regular text-truncate mb-2">{Name}</h2>
              <div className="d-flex justify-content-between">
                <p className="heading-xxs-regular">45, 125 Points</p>
                <p className="heading-xxs">{type}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }

  if (heading === "vouchers") {
    return (
      <>
        {/* <div className="swiper-slide shadow"> */}
        <Link to={`/ProductDetails/${id}`}>
          <div className="img-container">
            <img
              src="public/assets/images/homepage/voucher-section/1.svg"
              alt=""
            />
          </div>
          <div className="bg-white d-flex flex-column p-2">
            <h2 className="heading-sm-regular text-truncate mb-2">{title}</h2>
            <div className="d-flex justify-content-between">
              <p className="heading-xxs-regular">45, 125 Points</p>
              <p className="heading-xxs">{type}</p>
            </div>
          </div>
        </Link>
        {/* </div> */}
      </>
    );
  }

  if (heading === "shopDeals") {
    return (
      <>
        {/* <div className="swiper-slide shadow"> */}
        <Link to={`/ProductDetails/${id}`}>
          <div className="img-container">
            <img
              src="public/assets/images/homepage/voucher-section/1.svg"
              alt=""
            />
          </div>
          <div className="bg-white d-flex flex-column p-2">
            <h2 className="heading-sm-regular text-truncate mb-2">{title}</h2>
            <div className="d-flex justify-content-between">
              <p className="heading-xxs-regular">45, 125 Points</p>
              <p className="heading-xxs">{type}</p>
            </div>
          </div>
        </Link>
        {/* </div> */}
      </>
    );
  }

  if (heading === "featured") {
    return (
      <>
        {/* <div className="swiper-slide shadow"> */}
        <Link to={`/ProductDetails/${id}`}>
          <div className="img-container">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="bg-white d-flex flex-column p-2">
            <h2 className="heading-sm-regular text-truncate mb-2">{Name}</h2>
            <div className="d-flex justify-content-between">
              <p className="heading-xxs-regular">45, 125 Points</p>
              <p className="heading-xxs">{type}</p>
            </div>
          </div>
        </Link>
        {/* </div> */}
      </>
    );
  }

  if (heading === "top") {
    return (
      <>
        {/* <div className="swiper-slide shadow"> */}
        <Link to={`/ProductDetails/${id}`}>
          <div className="img-container">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="bg-white d-flex flex-column p-2">
            <h2 className="heading-sm-regular text-truncate mb-2">{Name}</h2>
            <div className="d-flex justify-content-between">
              <p className="heading-xxs-regular">45, 125 Points</p>
              <p className="heading-xxs">{type}</p>
            </div>
          </div>
        </Link>
        {/* </div> */}
      </>
    );
  }
};

export default Card;
