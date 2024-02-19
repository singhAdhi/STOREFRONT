import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addCartId, addCatalogId, addOutline } from "../redux/common";
import { CustomerId, CustomerName, STORE_ID } from "../config";
import {
  addCartCount,
  fetchcartDetails,
} from "../redux/common/cartDetails/cartDetailsSlice";
import { addRoomRates, addUrlValues } from "../redux/hotel";
import { addFlightValues } from "../redux/flight";

const Root = () => {
  const { CATALOG_ID, OUTLINE, CART_ID } = useSelector(
    (state) => state.commonReducer
  );
  const { cartCount } = useSelector((state) => state.cartDetailsSlice);
  const dispatch = useDispatch();

  const { RoomRates, UrlValues } = useSelector((store) => store.hotelReducer);
  const { UrlValue } = useSelector((store) => store.flightReducer);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    dispatch(addCartCount(cart ? JSON.parse(cart).length : 0));
    if (CATALOG_ID == null) {
      dispatch(addCatalogId(localStorage.getItem("CATALOG_ID")));
    }
    if (OUTLINE == null) {
      dispatch(addOutline(localStorage.getItem("OUTLINE")));
    }
    if (CART_ID == null) {
      dispatch(addCartId(localStorage.getItem("CART_ID")));
    }
    if (RoomRates == null) {
      dispatch(addRoomRates(JSON.parse(localStorage.getItem("RoomRates"))));
    }
    if (UrlValues.length === 0) {
      dispatch(addUrlValues(JSON.parse(localStorage.getItem("UrlValues"))));
    }
    if (UrlValue === null) {
      dispatch(addFlightValues(JSON.parse(localStorage.getItem("UrlValue"))));
    }
  }, [RoomRates, UrlValues, UrlValue]);

  return (
    <>
      <div className="dvMain">
        <Header />
        {CATALOG_ID && <Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default Root;
