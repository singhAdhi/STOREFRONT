import React from "react";
// import SwiperCardSlider from "../../components/swiper-card-slider/SwiperCardSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Card from "../../../components/card/Card";
import "./shopdeals.css";

const ShopDeals = () => {
  const shopDealsData = [
    { id: 1, title: "Shop Deal Voucher 1", type: "Physical 1" },
    { id: 2, title: "Shop Deal Voucher 2", type: "physical 2" },
    { id: 3, title: "Shop Deal Voucher 3", type: "physical 3" },
    { id: 4, title: "Shop Deal Voucher 4", type: "physical 4" },
    { id: 5, title: "Shop Deal Voucher 5", type: "physical 5" },
    { id: 6, title: "Shop Deal Voucher 6", type: "physical 6" },
    { id: 7, title: "Shop Deal Voucher 7", type: "physical 7" },
  ];

  return (
    <>
      <div className="dvShopDeals py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
              <h2 className="heading-xl mb-2">Shop The Best Deals</h2>
              <p>
                Get more for your points with our fantastic selection of curated products, featuring the best deals on
                everything from electronics to fashion, home goods, and more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="dvShopDealsSlider px-3">
              {/* <div className="swiper-wrapper pb-3"> */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next-shopdeals",
                  prevEl: ".swiper-button-prev-shopdeals",
                  disabledClass: "swiper-button-disabled-shopdeals",
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
                {shopDealsData &&
                  shopDealsData.map((item) => {
                    const { id } = item;
                    return (
                      <SwiperSlide key={id}>
                        <Card heading={"shopDeals"} {...item} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              {/* </div> */}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <Link to="/shop" className="btn btn-primary">
                View All
              </Link>
              <div className="swiper-buttons">
                <div className="d-flex justify-content-center">
                  <div className="swiper-button-prev-shopdeals pe-3">
                    <img src="public/assets/images/icons/arrows/left-yellow-arrow-2.svg" alt="" />
                  </div>
                  <div className="swiper-button-next-shopdeals">
                    <img src="public/assets/images/icons/arrows/right-yellow-arrow-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDeals;
