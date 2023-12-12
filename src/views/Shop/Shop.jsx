import React from "react";
import Slider from "./Slider";
import CardSlider from "./CardSlider";
import { Link } from "react-router-dom";
import ShopList from "../ShopList/ShopList";
import ShopNavbar from "./shopNavbar";

const Shop = () => {
  return (
    <div>
      <Slider />
      <ShopNavbar />
      <div className="container my-4">
        <h3 className="text-center py-4 align-items-center d-flex justify-content-between">
          <span>Top Offers</span>
          <Link to="/ShopList" className="d-flex justify-content-end">
            <button className="btn btn-primary">View All</button>
          </Link>
        </h3>

        <CardSlider />
      </div>
      <div className="container">
        <div>
          <h3 className="text-center py-4 align-items-center d-flex justify-content-between">
            <span>Featured Offers</span>
            <Link to="/ShopList" className="d-flex justify-content-end ">
              <button className="btn btn-primary">View All</button>
            </Link>
          </h3>
        </div>
        <CardSlider />
      </div>
    </div>
  );
};

export default Shop;
