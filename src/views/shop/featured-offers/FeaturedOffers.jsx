import React, { useEffect, useState } from "react";
import "./featured-offers.css";
import Card from "../../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import { useDispatch, useSelector } from "react-redux";
import { newProducts } from "../../../redux/shop/featuredoffers/FeaturedOffersSlice";
import Loading from "../../../components/other/loading/Loading";
import Error from "../../../components/other/error/Error";

const FeaturedOffers = () => {
  const dispatch = useDispatch();
  const { featuredOffers, isLoading, isError, isLoadingText } = useSelector(
    (state) => state.featuredOffersReducer
  );
  // console.log(featuredOffers, isLoading, isError, isLoadingText);

  useEffect(() => {
    dispatch(newProducts());
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading isLoadingText={isLoadingText} />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Error isError={isError} isLoadingText={isLoadingText} />
      </>
    );
  }

=======
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { STORE_ID } from "../../../config";
import { newProducts } from "../../../utils/featuredOffers";

const FeaturedOffers = () => {
  const dispatch = useDispatch();
  const id = useSelector((store) => store.example.catalog_id);
  const [featuredOfferProd, setfeaturedOfferProd] = useState([]);
  console.log(id);
  useEffect(() => {
    featuredOffer();
  }, []);

  const featuredOffer = () => {
    let body = {
      StoreId: STORE_ID,
      CatalogId: id,
      ResponseGroup: "ItemLarge",
      Outline: "",
      Currency: "AED",
      LanguageCode: "en-US",
      Skip: 0,
      Take: 10,
      Terms: [
        //"Tags:FEATURED,TOP"
        //"Tags:TOP"
      ],
      SearchPhrase: "",
      Sort: "",
    };
    let url = `/api/StoreFront/SearchProducts`;
    import("../../../dummy/SearchProductsFeatured_DATA")
      .then((item) => {
        dispatch(newProducts(item.SearchProductsFeatured_DATA.Products));
        setfeaturedOfferProd(item.SearchProductsFeatured_DATA.Products);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  };
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                {featuredOffers &&
                  featuredOffers.map((item) => {
=======
                {featuredOfferProd &&
                  featuredOfferProd.map((item) => {
>>>>>>> Stashed changes
                    const { Id } = item;
                    // console.log(item);
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
