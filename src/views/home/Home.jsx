import React from "react";
import HeroSlider from "./HeroSlider";
import Welcome from "./Welcome";
import Vouchers from "./Vouchers";
import ShopDeals from "./ShopDeals";
import Travel from "./Travel";
import Earn from "./Earn";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <Vouchers />
      <ShopDeals />
      <Travel />
      <Earn />
    </>
  );
};

export default Home;
