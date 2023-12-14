import React from "react";
import "./shop-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MainSlider from "../../../components/main-slider/MainSlider";

const ShopSlider = () => {
  const shopSliderData = [
    {
      id: 1,
      img: "https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg",
    },
    {
      id: 2,
      img: "https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg",
    },
    {
      id: 3,
      img: "https://shopgatewayuat.giift.com/assets/stores/BankingDEMO/shopbanner/shop-banner.jpg",
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
          {shopSliderData &&
            shopSliderData.map((item) => {
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

export default ShopSlider;
