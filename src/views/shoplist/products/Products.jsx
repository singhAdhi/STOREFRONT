import React from "react";
import Sort from "../sort/Sort";
import Card from "../../../components/card/Card";
import "./products.css";

const Products = () => {
  const products = [
    { id: 1, Name: "product 1", type: "physical" },
    { id: 2, Name: "product 2", type: "physical" },
    { id: 3, Name: "product 3", type: "physical" },
    { id: 4, Name: "product 4", type: "physical" },
  ];
  return (
    <>
      <div className="col-lg-8">
        <Sort />
        <div className="dvProducts row">
          {products &&
            products.map((item) => {
              const { id } = item;
              return <Card heading="products" key={id} {...item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
