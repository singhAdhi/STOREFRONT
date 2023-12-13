import React from "react";

const WelcomeCard = ({ id, figure, icon, title, text }) => {
  return (
    <>
      <div key={id} className="col-md-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center m-auto">
          <div className="no">
            <img src={figure} alt="" />
          </div>
          <div className="icon text-center mt-3">
            <img src={icon} alt="" />
            <p className="mt-3">{title}</p>
          </div>
        </div>
        <p className="text-center">{text}</p>
      </div>
    </>
  );
};

export default WelcomeCard;
