import React, { useEffect, useState, useRef } from "react";
import "./hotelsearch.css";
import HeroSlider from "../../home/hero-slider/HeroSlider";
import "react-datepicker/dist/react-datepicker.css";
import HotelSearchForm from "../../../components/hotelSearchForm/HotelSearchForm";
import { useNavigate } from "react-router";

const HotelSearch = () => {
  const navigate = useNavigate();
  let handleSearch = (value) => {
    console.log(value);
    const checkIn = value.checkIn.toISOString().split("T")[0];
    const checkOut = value.checkOut.toISOString().split("T")[0];
    navigate(`/Hotellist/${value.city}/${checkIn}/${checkOut}/1/1`);
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
