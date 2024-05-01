import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { fetchcartDetails } from "../../../redux/common/cartDetails/cartDetailsSlice";
import { CustomerId, CustomerName, STORE_ID } from "../../../config";
import { Link, useNavigate } from "react-router-dom";
import OrderStatus from "../../../components/orderStatus/OrderStatus";
import { shopApi } from "../../../api/services";
import Loading from "../../../components/other/loading/Loading";

const Checkout = () => {
  const [cartItems, setcartItems] = useState(null);
  const [cartData, setCartData] = useState(null);
  let dispatch = useDispatch();
  const history = useNavigate();
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = () => {
    setisloading(true);
    // // Below is API impl
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
    let url = `public/dummyApiData/shop/SearchCart_DATA.json`;
    shopApi
      .get(url, body)
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
      let url = "public/dummyApiData/shop/SearchProductsFeatured_DATA.json";
      shopApi
        .get(url)
        .then(
          ({
            data: {
              SearchProductsFeatured_DATA: { Products },
            },
          }) => {
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
          }
        )
        .catch((err) => {
          console.log(err);
        });
    } else {
      setcartItems(null);
      setCartData(null);
    }
  }
  return (
    <div>
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
              <li className="breadcrumb-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="breadcrumb-item active">Checkout</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="bg-body-secondary col-md-8 order-1 order-md-0 p-4 rounded">
            <h4 className="mb-4 fw-semibold">Billing address</h4>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label for="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <hr />
              <div className="col-12 mb-3">
                <Link to="/OrderStatus">
                  <button className="btn btn-primary w-100">
                    CONTINUE TO CHECKOUT
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-4 mb-3 mb-md-0 px-0 px-md-3">
            <div className="bg-body-secondary p-4 rounded">
              <div className="d-flex justify-content-between">
                <h5 className="fw-semibold">Your Cart</h5>
                <p
                  className="rounded-circle px-2"
                  style={{ backgroundColor: "#E5A812" }}
                >
                  {cartItems && cartItems.length}
                </p>
              </div>
              {isloading && <Loading />}
              {!isloading && (
                <div className="bg-body-secondary p-2">
                  {cartItems &&
                    cartItems.map((item) => (
                      <div
                        className="d-flex justify-content-between border-bottom border-secondary-subtle my-3"
                        key={item.Id}
                      >
                        <p>{item.Name}</p>
                        <p
                          className="rounded-circle px-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {"Qty: "}
                          {item.Price && item.Price.ActualPrice.Amount}{" "}
                          {" Giift-Points"}
                        </p>
                      </div>
                    ))}
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-semibold">Total</h5>
                    <p className="rounded-circle px-2">
                      {cartData && cartData.Price.Total.Amount}
                      {" Giift-Points"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
