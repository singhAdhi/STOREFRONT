import React from "react";
import "./main-slider.css";

const MainSlider = ({ img }) => {
  // console.log(props);
  return (
    <>
      <img src={img} alt="" className="w-100" />
    </>
  );
};

export default MainSlider;
