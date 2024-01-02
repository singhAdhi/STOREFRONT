import React, { useEffect, useState } from "react";
import Sort from "../sort/Sort";
import Card from "../../../components/card/Card";
import "./products.css";

const Products = ({ products }) => {
  return (
    <>
      <div className="col-lg-8">
        <Sort />
        <div className="dvProducts row">
          {products.length > 0 ? (
            products.map((item) => {
              const { Id } = item;
              console.log(item.Id);
              return (
                <div key={item.Id} className="col-md-4 mb-3">
                  <Card id={item.Id} {...item} img={item.PrimaryImage.Url} />
                </div>
              );
            })
          ) : (
            <p className="text-capitalize text-center text-bg-danger">
              Product not found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
