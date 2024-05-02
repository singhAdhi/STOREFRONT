import React from "react";

const SwiperButtons = (props) => {
  return (
    <>
      <div className="swiper-buttons">
        <div className="d-flex justify-content-center">
          <div className="swiper-button-prev pe-3">
            <img
              src="assets/images/icons/arrows/left-yellow-arrow-2.svg"
              alt=""
            />
          </div>
          <div className="swiper-button-next">
            <img
              src="assets/images/icons/arrows/right-yellow-arrow-2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperButtons;
