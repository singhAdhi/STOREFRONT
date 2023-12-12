import React from "react";

const EarnCard = ({ id, image, title, subTitle, text }) => {
  return (
    <>
      <div key={id} className="col-sm-6 col-md-4">
        <div className="bg-white d-flex flex-column text-center shadow-sm h-100">
          <div className="bg-icon p-5">
            <img src={image} alt={title} />
          </div>
          <h2 className="heading-md-bold px-3 pt-3">{title}</h2>
          <h2 className="heading-sm-regular py-3 px-3">{subTitle}</h2>
          <p className="px-3 pb-3 mt-auto">{text}</p>
        </div>
      </div>
    </>
  );
};

export default EarnCard;
