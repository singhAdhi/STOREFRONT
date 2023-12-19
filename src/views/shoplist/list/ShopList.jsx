import React from "react";
import "./shop-list.css";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Filter from "../filter/Filter";
import Products from "../products/Products";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ShopList = () => {
  const history = useNavigate();
  return (
    <>
      {/* <Breadcrumbs /> */}
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => history(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Shoplist</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="dvShopList pb-5">
        <div className="container-lg">
          <div className="row d-flex flex-md-row align-items-baseline">
            <div className="col-12 mb-3 d-lg-none">
              <button
                data-bs-toggle="modal"
                data-bs-target="#dvFilterModal"
                type="button"
                className="btn btn-primary w-100"
              >
                Filter
              </button>
            </div>
            <Filter />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
