import React, { useEffect } from "react";
import ShopNavbar from "./shop-nav/ShopNavbar";
import FeaturedOffers from "./featured-offers/FeaturedOffers";
import TopOffers from "./top-offers/TopOffers";
import ShopSlider from "./shop-slider/ShopSlider";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const Index = () => {
  //page load go to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <ShopSlider /> */}
      {/* <ShopNavbar /> */}
      {/* <Breadcrumbs text={"Shop"} /> */}
      <FeaturedOffers />
      <TopOffers />
    </>
  );
};

export default Index;
