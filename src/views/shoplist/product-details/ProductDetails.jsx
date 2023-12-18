import React, { useState } from "react";
import "./product-details.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

// import "./styles.css";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Breadcrumbs />
      <div className="dvProductDetail pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="dvThumbSwiperSlider col-12 col-md-4">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="dvProductInfo col-12 col-md-8">
              <div className="dvInfo row mb-4">
                <div className="col-12">
                  <h2 className="heading-xl">Careefour</h2>
                  <h2 className="heading-md-semibold">358 points</h2>
                </div>
              </div>
              <div className="dvAdd row mb-4">
                <div className="col-12">
                  <h2 className="heading-sm-regular mb-2">Quantity</h2>
                  <div className="row">
                    <div className="d-flex align-items-center col-10 col-sm-6 col-md-9 col-xl-6">
                      <div className="plus col-auto">
                        <button type="button" className="btn-addtocart p-0">
                          <FaMinus />
                        </button>
                      </div>
                      <div className="value mx-2 col-4">
                        <input
                          type="text"
                          defaultValue="1"
                          className="form-control text-center"
                        />
                      </div>
                      <div className="minus col-auto">
                        <button type="button" className="btn-addtocart p-0">
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dvDenominations row mb-4">
                <div className="col-12">
                  <h2 className="heading-sm-regular mb-2">Denomations</h2>
                </div>
                <div className="col-12 d-flex flex-wrap">
                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination1"
                    defaultChecked
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination1"
                  >
                    10
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination2"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination2"
                  >
                    200
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination3"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination3"
                  >
                    300
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination4"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination4"
                  >
                    500
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination5"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination5"
                  >
                    1000
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination6"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination6"
                  >
                    1000
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination7"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination7"
                  >
                    1000
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination8"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination8"
                  >
                    1000
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination9"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination9"
                  >
                    1000
                  </label>

                  <input
                    type="radio"
                    name="radio"
                    className="denomination-checkbox"
                    id="denomination10"
                  />
                  <label
                    className="denomination-btn col-3 col-sm-2"
                    htmlFor="denomination10"
                  >
                    1000
                  </label>
                </div>
              </div>
              <div className="dvButtons row mb-4">
                <div className="col-12 col-sm-4 col-xl-3 mb-3">
                  <button type="button" className="btn btn-primary w-100">
                    Add to Cart
                  </button>
                </div>
                <div className="col-6 col-sm-4 col-xl-3">
                  <button type="button" className="btn btn-primary w-100">
                    Back
                  </button>
                </div>
                <div className="col-6 col-sm-4 col-xl-3">
                  <button type="button" className="btn btn-primary w-100">
                    Redeem
                  </button>
                </div>
              </div>
              <div className="dvDetails row mb-4">
                <div className="col-12">
                  <nav>
                    <div
                      className="nav nav-tabs flex-nowrap scroll-hoz border-bottom-0"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active text-capitalize"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                      >
                        description
                      </button>
                      <button
                        className="nav-link text-capitalize"
                        id="nav-termsconditions-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-termsconditions"
                        type="button"
                        role="tab"
                        aria-controls="nav-termsconditions"
                        aria-selected="false"
                      >
                        terms & conditions
                      </button>
                      <button
                        className="nav-link text-capitalize"
                        id="nav-specifications-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-specifications"
                        type="button"
                        role="tab"
                        aria-controls="nav-specifications"
                        aria-selected="false"
                      >
                        specifications
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane border p-3 fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Suscipit illo neque facere dolorum, itaque
                        dignissimos corporis. Velit impedit delectus veniam
                        excepturi beatae nostrum fuga sit quos, sequi aut,
                        blanditiis dignissimos consectetur. Et distinctio,
                        perferendis qui voluptate ratione aut ut temporibus
                        nihil laboriosam officia! Vel possimus veniam saepe
                        dicta optio ipsum excepturi nostrum, nesciunt aspernatur
                        nulla incidunt commodi aut nam accusantium asperiores!
                        Nostrum, alias nihil! Nostrum illum odio id placeat,
                        debitis voluptatum blanditiis dolore nesciunt ipsum
                        obcaecati sequi numquam commodi architecto atque natus!
                        Deserunt modi ea necessitatibus atque libero sed at
                        accusamus voluptate quo quasi, quas nulla aliquam ipsa
                        inventore recusandae.
                      </p>
                    </div>
                    <div
                      className="tab-pane border p-3 fade"
                      id="nav-termsconditions"
                      role="tabpanel"
                      aria-labelledby="nav-termsconditions-tab"
                    >
                      <ul className="list ps-3">
                        <li>Description point</li>
                        <p className="mb-3">
                          Description - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Description point</li>
                        <p className="mb-3">
                          Description - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Description point</li>
                        <p className="mb-3">
                          Description - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Description point</li>
                        <p className="mb-3">
                          Description - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="tab-pane border p-3 fade"
                      id="nav-specifications"
                      role="tabpanel"
                      aria-labelledby="nav-specifications-tab"
                    >
                      <ul className="list ps-3">
                        <li>Specification point</li>
                        <p className="mb-3">
                          Specification - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Specification point</li>
                        <p className="mb-3">
                          Specification - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Specification point</li>
                        <p className="mb-3">
                          Specification - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                        <li>Specification point</li>
                        <p className="mb-3">
                          Specification - Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloremque, perspiciatis.
                        </p>
                      </ul>
                    </div>
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

export default ProductDetails;
