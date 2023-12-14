import React from "react";
import "./featured-offers.css";
import Card from "../../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { SearchProductsFeatured_DATA } from "../../../dummy/SearchProductsFeatured_DATA";

const FeaturedOffers = () => {
  return (
    <>
      <div className="dvFeaturedOffers py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
              <h2 className="heading-xl mb-2">Featured Offers</h2>
              <p>
                Get more for your points with our fantastic selection of curated
                products, featuring the best deals on everything from
                electronics to fashion, home goods, and more.
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
                      <img
                        src="public/assets/images/icons/arrows/left-black-arrow.svg"
                        alt=""
                      />
                    </div>
                    <div className="swiper-button-next-featured">
                      <img
                        src="public/assets/images/icons/arrows/right-black-arrow.svg"
                        alt=""
                      />
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
                {SearchProductsFeatured_DATA.Products &&
                  SearchProductsFeatured_DATA.Products.map((item) => {
                    const { Id } = item;
                    console.log(item);
                    return (
                      <SwiperSlide key={Id}>
                        <Card
                          heading={"featured"}
                          id={Id}
                          Name={item.Name}
                          img={item.PrimaryImage.Url}
                        />
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
