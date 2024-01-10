import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImgSlider.css";

const ImgSlider = ({ images }) => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images &&
          images.map((image) => {
            return (
              <SwiperSlide>
                <img className="slider-img" src={image.wideangleimageurl} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ImgSlider;
