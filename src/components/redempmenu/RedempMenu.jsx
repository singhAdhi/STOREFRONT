import React from "react";
import { Link } from "react-router-dom";

const RedempMenu = ({ Name, Images }) => {
  return (
    <>
      <div className="col-6 col-sm-4 col-lg-2 text-center mb-3">
        <Link
          className="d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 border rounded h-100"
          to={`${Name}`}
        >
          <img src={Images.map((item) => item.Url)} alt={Name} />
          <p className="text-white pt-2">{Name}</p>
        </Link>
      </div>
    </>
  );
};

export default RedempMenu;
