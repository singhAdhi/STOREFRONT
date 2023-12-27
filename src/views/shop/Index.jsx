import React, { useEffect, useState } from "react";
import ShopNavbar from "./shop-nav/ShopNavbar";
import FeaturedOffers from "./featured-offers/FeaturedOffers";
import TopOffers from "./top-offers/TopOffers";
import ShopSlider from "./shop-slider/ShopSlider";
import { useDispatch } from "react-redux";
import { addStoreDetails } from "../../redux/common/storeDetails/storeDetailsSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

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
    const response = await fetch("http://localhost:8000/GetStoreDetails_DATA");
    const data = await response.json();
    setFeatureHead(data.DynamicProperties[1].Values);
    dispatch(addStoreDetails(data));
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
