import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const CardSlider = () => {
  const cardData = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 3" },
    { id: 5, title: "Card 5", content: "Content for Card 3" },
    { id: 6, title: "Card 6", content: "Content for Card 3" },
    { id: 7, title: "Card 7", content: "Content for Card 3" },
  ];
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {cardData.map((cur, index) => {
          return (
            <SwiperSlide key={index}>
              <Card title={cur.title} text={cur.content} id={cur.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
