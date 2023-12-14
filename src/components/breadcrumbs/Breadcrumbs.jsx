import React from "react";
import "./breadcrumbs.css";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ text }) => {
  return (
    <>
      <div class="dvBreadcrumbs">
        <div class="container-lg">
          <nav>
            <ul class="breadcrumb py-3 px-0">
              <li class="me-3">
                <a href="#">
                  <img src="public/assets/images/icons/arrows/back-arrow.svg" alt="" />
                </a>
              </li>
              <li class="breadcrumb-item">
                <Link to="/Shop">Home</Link>
              </li>
              <li class="breadcrumb-item active">{text}</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
