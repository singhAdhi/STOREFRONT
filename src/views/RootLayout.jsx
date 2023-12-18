import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Root = () => {
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
