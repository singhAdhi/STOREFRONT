import React, { useEffect, useState } from "react";
import "./redemptionmenu.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOutline } from "../../../utils/exSlice";

const RedemptionMenu = ({ RedemptionList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addOutline(item.Id));
    navigate(item.Name.toLowerCase());
  };
  return (
    <div className="dvRedemptions pt-5">
      {RedemptionList &&
        RedemptionList.map((item, idx) => (
          <div
            key={idx}
            className="redemption-card"
            onClick={() => handleClick(item)}
          >
            {item.PrimaryImage && item.PrimaryImage.Url && (
              <div className="imageBox">
                <img src={item.PrimaryImage.Url} alt={item.Name} />
              </div>
            )}
            <p style={{ paddingTop: 10 }}>{item.Name}</p>
          </div>
        ))}
    </div>
  );
};

export default RedemptionMenu;
