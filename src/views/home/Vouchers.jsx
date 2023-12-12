import React from "react";
import Card from "../../components/card/Card";
// import SwiperCardSlider from "../../components/swiper-card-slider/SwiperCardSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Vouchers = () => {
  const voucherData = [
    { id: 1, title: "Car Voucher 1", type: "Physical 1" },
    { id: 2, title: "Car Voucher 2", type: "physical 2" },
    { id: 3, title: "Car Voucher 3", type: "physical 3" },
    { id: 4, title: "Car Voucher 4", type: "physical 4" },
    { id: 5, title: "Car Voucher 5", type: "physical 5" },
    { id: 6, title: "Car Voucher 6", type: "physical 6" },
    { id: 7, title: "Car Voucher 7", type: "physical 7" },
  ];
  return (
    <>
      <div className="dvVouchers py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
              <h2 className="heading-xl mb-2">Vouchers</h2>
              <p>Siddhartha Rewards brings you a wide variety of gift vouchers with over 5000+ options to pick from.</p>
            </div>
          </div>
          <div className="row">
            <div className="dvVoucherSlider swiper px-3">
              <div className="swiper-wrapper pb-3">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    //disabledClass: "swiper-button-disabled",
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
                  {voucherData &&
                    voucherData.map((item) => {
                      const { id } = item;
                      return (
                        <SwiperSlide key={id}>
                          <Card {...item} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <Link to="/shoplist" className="btn btn-primary">
                View All
              </Link>
              <div className="swiper-buttons">
                <div className="d-flex justify-content-center">
                  <div className="swiper-button-prev pe-3">
                    <img src="public/assets/images/icons/arrows/left-yellow-arrow-2.svg" alt="" />
                  </div>
                  <div className="swiper-button-next">
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

export default Vouchers;
