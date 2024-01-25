import React, { useEffect, useState } from "react";
import "./top-offers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../../redux/shop/topoffers/TopOffersSlice";
import Loading from "../../../components/other/loading/Loading";
import Error from "../../../components/other/error/Error";
import { shopApi } from "../../../api/services";
import { setCategoryFilter } from "../../../redux/shop/filteredData/filteredDataSlice";

const TopOffers = ({ top }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { isError, isLoading, isLoadingText, topOffers } = useSelector(
  //   (state) => state.topOffersReducer
  // );

  const [isloading, setisloading] = useState(false);
  const [topOffers, settopOffers] = useState(null);

  useEffect(() => {
    getTopOffers();
  }, []);

  function getTopOffers() {
    setisloading(true);
    let url = "src/dummyApiData/shop/SearchProductsTop_DATA.json";
    shopApi
      .get(url)
      .then(({ data }) => {
        settopOffers(data.SearchProductsTop_DATA.Products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const parts = top.split("|");

  // Extract the second part (index 1) from the array
  const secondPart = parts[1].trim();
  const firstPart = parts[0].trim();
  const handleClick = () => {
    dispatch(setCategoryFilter(""));
    navigate(`/shoplist/${firstPart}`);
  };
  return (
    <>
      <div className="dvTopOffers py-5">
        <div className="container-lg">
          {isloading && <Loading />}
          {!isloading && (
            <>
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
                  <h2 className="heading-xl mb-2">{secondPart}</h2>
                  <p>
                    Get more for your points with our fantastic selection of
                    curated products, featuring the best deals on everything
                    from electronics to fashion, home goods, and more.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="dvTopOffersSlider px-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <button onClick={handleClick} className="btn btn-primary">
                      View All
                    </button>
                    <div className="swiper-buttons">
                      <div className="d-flex justify-content-center">
                        <div className="swiper-button-prev-topoffers pe-3">
                          <img
                            src="public/assets/images/icons/arrows/left-black-arrow.svg"
                            alt=""
                          />
                        </div>
                        <div className="swiper-button-next-topoffers">
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
                      nextEl: ".swiper-button-next-topoffers",
                      prevEl: ".swiper-button-prev-topoffers",
                      disabledClass: "swiper-button-disabled-topoffers",
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
                    {topOffers && topOffers.length > 0 ? (
                      <>
                        {topOffers.map((item) => {
                          const { Id } = item;
                          return (
                            <SwiperSlide key={Id}>
                              <Card
                                heading={"Top"}
                                id={Id}
                                Name={item.Name}
                                img={item.PrimaryImage.Url}
                                route={`/ProductDetails/${item.Id}`}
                                {...item}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </>
                    ) : (
                      <Error
                        isError={true}
                        isLoadingText={"Top offers not found"}
                      />
                    )}
                  </Swiper>
                  {/* </div> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TopOffers;
