import React from "react";
import "./heroslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MainSlider from "../../../components/main-slider/MainSlider";

const HeroSlider = () => {
  const heroSliderData = [
    {
      id: 1,
      img: "public/assets/images/sliders/hero-slider/hero-slider1.jpg",
    },
    {
      id: 2,
      img: "public/assets/images/sliders/hero-slider/hero-slider2.jpg",
    },
    {
      id: 3,
      img: "public/assets/images/sliders/hero-slider/hero-slider3.jpg",
    },
  ];
  return (
    <>
      <div className="dvHeroSlider">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={0}
          // freeMode={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
          }}
        >
          {heroSliderData &&
            heroSliderData.map((item) => {
              const { id } = item;
              return (
                <SwiperSlide key={id}>
                  <MainSlider {...item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
