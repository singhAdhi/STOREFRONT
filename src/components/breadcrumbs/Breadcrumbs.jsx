import React from "react";
import "./breadcrumbs.css";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ text }) => {
  return (
    <>
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0">
              <li className="me-3">
                <a href="#">
                  <img
                    src="public/assets/images/icons/arrows/back-arrow.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Shop">Home</Link>
              </li>
              <li className="breadcrumb-item active">{text}</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
