import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { fetchcartDetails } from "../../../redux/common/cartDetails/cartDetailsSlice";
import { CustomerId, CustomerName, STORE_ID } from "../../../config";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setcartItems] = useState(null);
  const [cartData, setCartData] = useState(null);
  let dispatch = useDispatch();

  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = () => {
    // // Below is API impl
    // return;
    // let url = `/api/StoreFront/SearchCart`;
    let url = `SearchCart_DATA`;
    let body = {
      StoreId: STORE_ID,
      Name: "default",
      CustomerId: CustomerId,
      CustomerName: CustomerName,
      Type: null,
      CurrencyCode: "AED",
      LanguageCode: "en-US",
    };
    dispatch(fetchcartDetails({ url, body }))
      .then(({ payload }) => {
        // dispatch(addCartId(payload.Id));
        // setItems(payload.Items);
        setCartData(payload);
      })
      .catch((err) => {
        console.log(err);
      });

    //this is temp impl
    GettempCart();
  };

  function GettempCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      let items = JSON.parse(cart);
      import("../../../../storefront.json")
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
          <div className="col-md-8 bg-body-secondary py-3">
            <h4 class="mb-4">Billing address</h4>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary w-100">
                  checkout
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="bg-body-secondary p-2">
              <div className="d-flex justify-content-between">
                <h5>Your Cart</h5>
                <p class="bg-dark-subtle rounded-circle px-2">
                  {cartItems && cartItems.length}
                </p>
              </div>
              <div className="bg-body-secondary p-2">
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      className="d-flex justify-content-between border-bottom border-secondary-subtle my-3"
                      key={item.Id}
                    >
                      <p>{item.Name}</p>
                      <p
                        class="rounded-circle px-2"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {"Qty: "}
                        {item.Price && item.Price.ActualPrice.Amount}{" "}
                        {" Giift-Points"}
                      </p>
                    </div>
                  ))}
                <div className="d-flex justify-content-between">
                  <h5>Total</h5>
                  <p class="rounded-circle px-2">
                    {cartData && cartData.Price.Total.Amount} {" Giift-Points"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
