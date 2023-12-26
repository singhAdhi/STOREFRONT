import React, { useEffect, useState } from "react";
import "./cart.css";
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeGetRequest } from "../../api/services";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/shop/cart/CartSlice";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((store) => store.CartReducer.cartItems);
  const newArray = cart.filter((obj) => obj.Images && obj.Images.length > 0);
  let dispatch = useDispatch();
  useEffect(() => {
    fetchProductData();
  }, []);
  let fetchProductData = async () => {
    const body = {
      StoreId: "{{store_id}}",
      Name: "default",
      CustomerId: "britestuser",
      CustomerName: "Tester",
      Type: null,
      CurrencyCode: "AED",
      LanguageCode: "en-US",
    };
    const url = `http://localhost:8000/SearchCart_DATA`;
    // let url = `SearchCart_DATA`;
    // makeGetRequest({ url, body })
    //   .then(({ data }) => {
    //     setCartData(data.Items);
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setCartData(data.Items);
        console.log(data.Items);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };
  console.log(cartData);
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
              <li className="breadcrumb-item active">ProductDetails</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="dvCart pb-5">
        <div className="container-lg">
          {newArray.length === 0 ? (
            <div>Cart is Empty</div>
          ) : (
            newArray.map((items) => {
              console.log(items);
              return (
                <div className="row mb-3" key={items.Id}>
                  <div className="col-12">
                    <div className="bg-light border rounded p-3">
                      <div className="row">
                        <div className="col-3 col-sm-2 col-md-1">
                          <img
                            src={items.PrimaryImage.Url}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-9 col-sm-10 col-md-11">
                          <div className="row align-items-center justify-content-between h-100">
                            <div className="col-12 col-sm-4 col-lg-6 col-xl-8">
                              <h2 className="heading-md">{items.Name}</h2>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-3 col-xl-2">
                              <div className="dvAdd row">
                                <div className="col-12">
                                  <h2 className="heading-sm-regular mb-2 d-none">
                                    {items.Quantity}
                                  </h2>
                                  <div className="row">
                                    <div className="d-flex align-items-center justify-content-md-end col-12">
                                      <div className="value mx-2 col-4">
                                        <input
                                          type="text"
                                          value={1}
                                          className="form-control text-center"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                              <div>
                                <span>514</span> <span>points</span>
                              </div>
                              <button type="button" className="btn btnRemove">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
