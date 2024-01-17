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
import { addRoomRates } from "../redux/hotel";

const Root = () => {
  
  const { CATALOG_ID, OUTLINE, CART_ID } = useSelector(
    (state) => state.commonReducer
  );
  const { cartCount } = useSelector((state) => state.cartDetailsSlice);
  const dispatch = useDispatch();

  const { RoomRates } = useSelector((store) => store.hotelReducer);

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
  });

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
