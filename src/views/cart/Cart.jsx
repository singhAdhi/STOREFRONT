import React, { useEffect, useState } from "react";
import "./cart.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartCount,
  fetchcartDetails,
} from "../../redux/common/cartDetails/cartDetailsSlice";
import { CustomerId, CustomerName, STORE_ID } from "../../config";
import { MdDelete } from "react-icons/md";
import Loading from "../../components/other/loading/Loading";
import { makeGetRequest } from "../../api/services";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setcartItems] = useState(null);
  const [cartData, setCartData] = useState(null);
  const [isloading, setisloading] = useState(false);

  let dispatch = useDispatch();
  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = () => {
    setisloading(true);
    // // Below is API impl
    // return;
    // let url = `/api/StoreFront/SearchCart`;
    let body = {
      StoreId: STORE_ID,
      Name: "default",
      CustomerId: CustomerId,
      CustomerName: CustomerName,
      Type: null,
      CurrencyCode: "AED",
      LanguageCode: "en-US",
    };

    let url = `src/dummyApiData/shop/SearchCart_DATA.json`;
    makeGetRequest({ url, body })
      .then(({ data }) => {
        setCartData(data.SearchCart_DATA);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisloading(false);
      });

    //this is temp impl
    GettempCart();
  };

  function GettempCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      let items = JSON.parse(cart);
      import("../../../storefront.json")
        .then(({ SearchProductsFeatured_DATA: { Products } }) => {
          setcartItems(
            items
              .map(({ ProductId, Quantity }) => {
                let prod = Products.find((x) => x.Id === ProductId);
                if (prod) {
                  prod.Quantity = Quantity;
                  return prod;
                }
              })
              .filter((prod) => prod != undefined)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setcartItems(null);
      setCartData(null);
    }
  }

  function handleDelete(id) {
    let cart = localStorage.getItem("cart");
    if (cart) {
      let items = JSON.parse(cart);
      let newitems = items.filter((item) => item.ProductId !== id);
      if (newitems.length > 0) {
        localStorage.setItem("cart", JSON.stringify(newitems));
      } else {
        localStorage.removeItem("cart");
      }
      dispatch(addCartCount(newitems.length));
      GettempCart();
    }
  }

  return (
    <>
      {/* <Breadcrumbs /> */}
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => navigate(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="breadcrumb-item active">Cart</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="dvCart pb-5">
        {isloading && <Loading />}
        {!isloading && (
          <div className="container-lg">
            {cartItems === null ? (
              <div className="fs-1 text-center">Cart is Empty</div>
            ) : (
              cartItems &&
              cartItems.map((items) => {
                return (
                  <div className="row mb-3" key={items.Id}>
                    <div className="col-12">
                      <div className="bg-light border rounded p-3">
                        <div className="row">
                          <div className="col-3 col-sm-2 col-md-1">
                            <img
                              src={items.PrimaryImage && items.PrimaryImage.Url}
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
                                    <div className="row">
                                      <div className="d-flex align-items-center justify-content-md-end col-12">
                                        <div className="value mx-2 col-4">
                                          <p className="border text-center">
                                            {items.Quantity}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                                <div>
                                  <span>
                                    {items.Price &&
                                      items.Price.ActualPrice.Amount}
                                  </span>{" "}
                                  <span>points</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btnRemove"
                                  onClick={() => handleDelete(items.Id)}
                                >
                                  <MdDelete />
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

            {cartItems && cartData && (
              <>
                <div className=" d-flex justify-content-end">
                  <ul className="list-unstyled w-100">
                    <li className="heading-md p-2 bg-body-secondary text-end">
                      Sub-Total: {cartData.Price.SubTotal.Amount} Giift-Points
                    </li>
                    <li className="heading-md p-2 my-2 bg-body-tertiary text-end">
                      Shipping: {cartData.Price.ShippingPrice.Amount}{" "}
                      Giift-Points
                    </li>
                    <li className="heading-md p-2 bg-body-secondary text-end">
                      Total: {cartData.Price.Total.Amount} Giift-Points
                    </li>
                  </ul>
                </div>
                <div className=" d-flex justify-content-center gap-3 mt-5">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/shop")}
                  >
                    Continue Shopping
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
