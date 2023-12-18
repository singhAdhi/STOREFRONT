import React from "react";
import "./sort.css";

const Sort = () => {
  return (
    <>
      <div className="dvSort row mb-3">
        <div className="col-12">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Sort By</option>
            <option defaultValue="1">Best Selling</option>
            <option defaultValue="2">Ascending</option>
            <option defaultValue="2">Descending</option>
            <option defaultValue="2">Price Low to High</option>
            <option defaultValue="2">Price High to Low</option>
            <option defaultValue="2">Date New to Old</option>
            <option defaultValue="2">Date Old to New</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sort;
