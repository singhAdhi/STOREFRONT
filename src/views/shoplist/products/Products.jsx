import React, { useEffect, useState } from "react";
import Sort from "../sort/Sort";
import Card from "../../../components/card/Card";
import "./products.css";
import { newProducts } from "../../../redux/shop/featuredoffers/FeaturedOffersSlice";
import { useParams } from "react-router";

const Products = () => {
  let [products, setProducts] = useState([]);
  const { id } = useParams();
  const parts = id.split("_");

  const secondPart = parts[0];
  const urlText =
    secondPart.toLowerCase().charAt(0).toUpperCase() +
    secondPart.slice(1).toLowerCase();
  console.log(urlText);
  useEffect(() => {
    fetchCategory();
  }, []);

  let fetchCategory = async () => {
    const response = await fetch(
      `http://localhost:8000/SearchProducts${urlText}_DATA`
    );
    const data = await response.json();
    setProducts(data.Products);
  };

  return (
    <>
      <div className="col-lg-8">
        <Sort />
        <div className="dvProducts row">
          {products &&
            products.map((item) => {
              const { id } = item;
              return (
                <div className="col-md-4 mb-3">
                  <Card
                    heading={`${urlText}`}
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
