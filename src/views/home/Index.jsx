import React, { useEffect } from "react";
import HeroSlider from "./hero-slider/HeroSlider";
import Welcome from "./welcome/Welcome";
import Vouchers from "./vouchers/Vouchers";
import ShopDeals from "./shop-deals/ShopDeals";
import Travel from "./travel/Travel";
import Earn from "./earn/Earn";
import RedemptionMenu from "./redemption-menu/RedemptionMenu";

const Index = () => {
  //page load go to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSlider />
      <RedemptionMenu />
      <Welcome />
      <Vouchers />
      <ShopDeals />
      <Travel />
      <Earn />
    </>
  );
};

export default Index;
