import React from "react";
import "./shop-list.css";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Filter from "../filter/Filter";
import Products from "../products/Products";

const ShopList = () => {
  return (
    <>
      <Breadcrumbs />
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
