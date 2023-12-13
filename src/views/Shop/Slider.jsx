import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
const Slider = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} slidesPerView={1}>
        <SwiperSlide>
          <img
            src="https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg"
            alt=""
            className="slider-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg"
            alt=""
            className="slider-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg"
            alt=""
            className="slider-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg"
            alt=""
            className="slider-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
