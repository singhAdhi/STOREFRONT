import React, { useEffect } from "react";
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

const Root = () => {
  const { CATALOG_ID, OUTLINE, CART_ID } = useSelector(
    (state) => state.commonReducer
  );
  const { cartCount } = useSelector((state) => state.cartDetailsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // getCartDetails();
  }, []);

  const getCartDetails = () => {
    // let url = `/api/StoreFront/SearchCart`;
    let url = `SearchCart_DATA`;
    let body = {
      StoreId: STORE_ID,
      Name: "default",
      CustomerId: CustomerId,
      CustomerName: CustomerName,
      Type: null,
      CurrencyCode: "AED",
      LanguageCode: "en-US",
    };
    dispatch(fetchcartDetails({ url, body }))
      .then(({ payload }) => {
        dispatch(addCartId(payload.Id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
