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
import DataContext from "../config/DataContext";
import { makeGetRequest } from "../api/services";
import { addRoomRates } from "../redux/hotel";

const Root = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { CATALOG_ID, OUTLINE, CART_ID } = useSelector(
    (state) => state.commonReducer
  );
  const { cartCount } = useSelector((state) => state.cartDetailsSlice);
  const dispatch = useDispatch();
  console.log(hotelData);

  const { RoomRates } = useSelector((store) => store.hotelReducer);

  let hotelInfo = async () => {
    const url = `src/dummyApiData/hotel/GetHotelInformation_DATA.json`;
    makeGetRequest({ url })
      .then(({ data }) => {
        setHotelData(
          data.GetHotelInformation_DATA.results.HotelInformation.basicinfo
        );
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };
  useEffect(() => {
    hotelInfo();
  }, []);
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
    if (RoomRates == null) {
      dispatch(addRoomRates(JSON.parse(localStorage.getItem("RoomRates"))));
    }
  });

  return (
    <>
      <DataContext.Provider value={{ hotelData, loading }}>
        <div className="dvMain">
          <Header />
          {CATALOG_ID && <Outlet />}
        </div>
        <Footer />
      </DataContext.Provider>
    </>
  );
};

export default Root;
