import React, { useState } from "react";
import "./shop-nav.css";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ShopNavbar = ({ categoryList }) => {
  const [val, setVal] = useState(null);
  const [arrow, setArrow] = useState(true);
  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "homeAndKitchen", label: "Home & Kitchen" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
  ];

  const handleMouseEnter = (value) => {
    setVal(value);
    setArrow(!arrow);
  };

  const handleMouseLeave = () => {
    setVal(null);
    setArrow(!arrow);
  };

  const Submenu = ({ submenu }) => (
    <>
      <ul
        className="dropdown-menu py-0 dropdown-content"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {submenu &&
          submenu.map((item) => (
            <li className="nav-item dropdown" key={item.Id}>
              <a
                className={`nav-link ${
                  item.submenu.length > 0 ? "dropdown-toggle" : ""
                } d-flex align-items-center justify-content-between text-uppercase`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {item.Name}
              </a>
              {item.submenu.length > 0 ? (
                <Submenu submenu={item.submenu} />
              ) : null}
            </li>
          ))}
      </ul>
    </>
  );
  return (
    <div className="dvMenu">
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg navbar-light px-0 mx-n2">
          <div className="col-2 d-lg-none order-lg-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#dvMenu"
              aria-controls="dvMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-10 col-lg-3 d-flex align-items-center justify-content-end order-lg-2">
            <form className="mx-2">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button type="button" className="btn p-0">
              <div className="d-flex align-items-center">
                <span>
                  <i className="fa fa-shopping-cart"></i>
                </span>
                <span className="badge text-bg-light border p-2 ms-2">0</span>
              </div>
            </button>
          </div>
          <div className="col-12 col-lg-9 order-lg-1">
            <div className="collapse navbar-collapse" id="dvMenu">
              <ul className="navbar-nav mr-auto">
                {categoryList &&
                  categoryList.map((item) => (
                    <li className="nav-item dropdown" key={item.Id}>
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center justify-content-between text-uppercase"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.Name}
                      </a>
                      {item.submenu.length > 0 ? (
                        <Submenu submenu={item.submenu} />
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ShopNavbar;
