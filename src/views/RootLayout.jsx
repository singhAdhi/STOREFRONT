import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addCatalogId, addOutline } from "../redux/common";

const Root = () => {
  const { CATALOG_ID, OUTLINE } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CATALOG_ID == null) {
      dispatch(addCatalogId(localStorage.getItem("CATALOG_ID")));
    }
    if (OUTLINE == null) {
      dispatch(addOutline(localStorage.getItem("OUTLINE")));
    }
  });

  return (
    <>
      <div className="dvMain">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
