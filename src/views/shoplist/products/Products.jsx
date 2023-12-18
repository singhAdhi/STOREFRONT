import React from "react";
import Sort from "../sort/Sort";
import Card from "../../../components/card/Card";
import "./products.css";
import { useSelector } from "react-redux";

const Products = () => {
  const data = useSelector(
    (store) => store.featuredOffersReducer.featuredOffers
  );
  console.log(data);
  return (
    <>
      <div className="col-lg-8">
        <Sort />
        <div className="dvProducts row">
          {data.map((item) => {
            const { id } = item;
            return (
              <div className="col-md-4 mb-3">
                <Card
                  heading="featured"
                  key={id}
                  {...item}
                  img={item.PrimaryImage.Url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
