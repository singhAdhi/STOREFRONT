import React from "react";
import "./featured-offers.css";
import Card from "../../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const FeaturedOffers = () => {
  const featuredOffersData = [
    { id: 1, title: "Featured 1", content: "Content for Featured 1" },
    { id: 2, title: "Featured 2", content: "Content for Featured 2" },
    { id: 3, title: "Featured 3", content: "Content for Featured 3" },
    { id: 4, title: "Featured 4", content: "Content for Featured 3" },
    { id: 5, title: "Featured 5", content: "Content for Featured 3" },
    { id: 6, title: "Featured 6", content: "Content for Featured 3" },
    { id: 7, title: "Featured 7", content: "Content for Featured 3" },
  ];
  return (
    <>
      <div className="dvFeaturedOffers py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
              <h2 className="heading-xl mb-2">Featured Offers</h2>
              <p>
                Get more for your points with our fantastic selection of curated products, featuring the best deals on
                everything from electronics to fashion, home goods, and more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="dvFeaturedOffersSlider px-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/shoplist" className="btn btn-primary">
                  View All
                </Link>
                <div className="swiper-buttons">
                  <div className="d-flex justify-content-center">
                    <div className="swiper-button-prev-featured pe-3">
                      <img src="public/assets/images/icons/arrows/left-black-arrow.svg" alt="" />
                    </div>
                    <div className="swiper-button-next-featured">
                      <img src="public/assets/images/icons/arrows/right-black-arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="swiper-wrapper pb-3"> */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next-featured",
                  prevEl: ".swiper-button-prev-featured",
                  disabledClass: "swiper-button-disabled-featured",
                }}
                spaceBetween={20}
                // freeMode={true}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {featuredOffersData &&
                  featuredOffersData.map((item) => {
                    const { id } = item;
                    return (
                      <SwiperSlide key={id}>
                        <Card heading={"featured"} {...item} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedOffers;
