import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="dvHeader shadow-sm sticky-top bg-white">
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg flex-lg-wrap p-0">
          <div className="navbar-brand logo m-0 col-auto col-lg-6 px-0 px-lg-3 mt-n2">
            <Link to="/">
              <img src="public/assets/images/logos/siddhartha-logo.svg" alt="" />
            </Link>
          </div>
          <div className="navbar-brand logo m-0 col-lg-6 d-none d-lg-block text-lg-end mt-n3">
            <a href="#">
              <img src="public/assets/images/logos/siddhartha-rewards-logo.svg" alt="" />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <hr className="m-0 w-100 d-none d-lg-block" />
          <div className="collapse navbar-collapse col-lg-6 px-0 mb-1 mb-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto align-items-lg-center">
              <li className="nav-item active">
                <a className="nav-link border-bottom text-uppercase" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-bottom text-uppercase" href="#">
                  Earn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-bottom text-uppercase" href="#">
                  Redeem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-bottom text-uppercase" href="#">
                  My Account
                </a>
              </li>
            </ul>
          </div>
          <div className="dvUserInfo col-12 col-lg-6 mb-2 mb-lg-0">
            <div className="row align-items-center justify-content-end">
              <p className="dvName col-auto px-0 me-3">
                <span>Hi,</span>
                <span>Mr. John Right</span>
              </p>
              <p className="dvPoints col-auto px-0 me-3">
                <span>Bal Points:</span>
                <span>65,780/-</span>
              </p>
              <div className="col-auto px-0 me-3">
                <button type="button" className="btn btn-primary me-2">
                  Login
                </button>
                <button type="button" className="btn btn-secondary">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
