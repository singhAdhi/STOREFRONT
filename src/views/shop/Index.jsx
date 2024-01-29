import React, { useEffect, useState } from "react";
import ShopNavbar from "./shop-nav/ShopNavbar";
import FeaturedOffers from "./featured-offers/FeaturedOffers";
import TopOffers from "./top-offers/TopOffers";
import ShopSlider from "./shop-slider/ShopSlider";
import { useDispatch } from "react-redux";
import { addStoreDetails } from "../../redux/common/storeDetails/storeDetailsSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { shopApi } from "../../api/services";

const Index = () => {
  const history = useNavigate();
  let [featureHead, setFeatureHead] = useState([]);
  let dispatch = useDispatch();

  //page load go to top
  useEffect(() => {
    window.scrollTo(0, 0);
    getStoreDetail();
  }, []);

  const getStoreDetail = async () => {
    let url = "src/dummyApiData/shop/GetStoreDetails_DATA.json";
    shopApi
      .get(url)
      .then(({ data }) => {
        setFeatureHead(data.GetStoreDetails_DATA.DynamicProperties[1].Values);
        dispatch(
          addStoreDetails(data.GetStoreDetails_DATA.DynamicProperties[1].Values)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ShopSlider />

      {/* <Breadcrumbs /> */}
      <ShopNavbar />

      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => history(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Shop</li>
            </ul>
          </nav>
        </div>
      </div>

      {featureHead.length > 0 && (
        <>
          <FeaturedOffers feature={featureHead[0].Value} />
          <TopOffers top={featureHead[1].Value} />
        </>
      )}
    </>
  );
};

export default Index;
