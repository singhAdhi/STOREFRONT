import React, { useEffect, useState, useRef } from "react";
import "./hotelsearch.css";
import HeroSlider from "../../home/hero-slider/HeroSlider";
import "react-datepicker/dist/react-datepicker.css";
import HotelSearchForm from "../../../components/hotelSearchForm/HotelSearchForm";

const HotelSearch = () => {
  let handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div>
      <HeroSlider />
      <div className="container">
        <HotelSearchForm handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HotelSearch;
