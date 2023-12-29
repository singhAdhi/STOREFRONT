import React, { useEffect, useState } from "react";
import Sort from "../sort/Sort";
import Card from "../../../components/card/Card";
import "./products.css";
import { newProducts } from "../../../redux/shop/featuredoffers/FeaturedOffersSlice";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PageNotFound from "../../../components/other/pagenotfound/PageNotFound";

const Products = ({ products }) => {
  return (
    <>
      <div className="col-lg-8">
        <Sort />
        <div className="dvProducts row">
          {products &&
            products.map((item) => {
              const { Id } = item;
              console.log(item.Id);
              return (
                <div key={item.Id} className="col-md-4 mb-3">
                  <Card id={item.Id} {...item} img={item.PrimaryImage.Url} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
