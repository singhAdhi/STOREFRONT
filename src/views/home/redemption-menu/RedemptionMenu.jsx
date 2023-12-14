import React from "react";
import "./redemptionmenu.css";
import { Link } from "react-router-dom";

const RedemptionMenu = () => {
  return (
    <>
      <Link to="/FlightSearch">Flight</Link>
      <Link to="/HotelSearch">Hotel</Link>
      <Link to="/Shop">Shop</Link>
    </>
  );
};

export default RedemptionMenu;
