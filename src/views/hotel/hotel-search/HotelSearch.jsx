import React from "react";
import "./hotelsearch.css";
import HeroSlider from "../../home/hero-slider/HeroSlider";
import "react-datepicker/dist/react-datepicker.css";
import HotelSearchForm from "../../../components/hotelSearchForm/HotelSearchForm";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotelSearch = () => {
  return (
    <div>
      <HeroSlider />
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
              <li className="breadcrumb-item active">Hotel Search</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">
        <HotelSearchForm handleSearch={() => {}} />
      </div>
    </div>
  );
};

export default HotelSearch;
