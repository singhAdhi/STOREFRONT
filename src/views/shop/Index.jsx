import React, { useEffect, useState } from "react";
import ShopNavbar from "./shop-nav/ShopNavbar";
import FeaturedOffers from "./featured-offers/FeaturedOffers";
import TopOffers from "./top-offers/TopOffers";
import ShopSlider from "./shop-slider/ShopSlider";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { addStoreDetails } from "../../redux/common/storeDetails/storeDetailsSlice";

const Index = () => {
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
  //console.log(featureHead);
  return (
    <>
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
