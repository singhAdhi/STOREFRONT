import React from "react";
import "./cart.css";
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
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

      <div class="dvCart pb-5">
        <div class="container-lg">
          <div class="row mb-3">
            <div class="col-12">
              <div class="bg-light border rounded p-3">
                <div class="row">
                  <div class="col-3 col-sm-2 col-md-1">
                    <img
                      src="https://static-01.daraz.com.np/p/78c2c48246d30bc104d316f24f3eec9a.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-9 col-sm-10 col-md-11">
                    <div class="row align-items-center justify-content-between h-100">
                      <div class="col-12 col-sm-4 col-lg-6 col-xl-8">
                        <h2 class="heading-md">Necklace</h2>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                        <div class="dvAdd row">
                          <div class="col-12">
                            <h2 class="heading-sm-regular mb-2 d-none">
                              Quantity
                            </h2>
                            <div class="row">
                              <div class="d-flex align-items-center justify-content-md-end col-12">
                                <div class="plus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaMinus />
                                  </button>
                                </div>
                                <div class="value mx-2 col-4">
                                  <input
                                    type="text"
                                    value="1"
                                    class="form-control text-center"
                                  />
                                </div>
                                <div class="minus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                        <div>
                          <span>514</span> <span>points</span>
                        </div>
                        <button type="button" class="btn btnRemove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="bg-light border rounded p-3">
                <div class="row">
                  <div class="col-3 col-sm-2 col-md-1">
                    <img
                      src="https://static-01.daraz.com.np/p/78c2c48246d30bc104d316f24f3eec9a.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-9 col-sm-10 col-md-11">
                    <div class="row align-items-center justify-content-between h-100">
                      <div class="col-12 col-sm-4 col-lg-6 col-xl-8">
                        <h2 class="heading-md">Necklace</h2>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                        <div class="dvAdd row">
                          <div class="col-12">
                            <h2 class="heading-sm-regular mb-2 d-none">
                              Quantity
                            </h2>
                            <div class="row">
                              <div class="d-flex align-items-center justify-content-md-end col-12">
                                <div class="plus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaMinus />
                                  </button>
                                </div>
                                <div class="value mx-2 col-4">
                                  <input
                                    type="text"
                                    value="1"
                                    class="form-control text-center"
                                  />
                                </div>
                                <div class="minus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                        <div>
                          <span>514</span> <span>points</span>
                        </div>
                        <button type="button" class="btn btnRemove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="bg-light border rounded p-3">
                <div class="row">
                  <div class="col-3 col-sm-2 col-md-1">
                    <img
                      src="https://static-01.daraz.com.np/p/78c2c48246d30bc104d316f24f3eec9a.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-9 col-sm-10 col-md-11">
                    <div class="row align-items-center justify-content-between h-100">
                      <div class="col-12 col-sm-4 col-lg-6 col-xl-8">
                        <h2 class="heading-md">Necklace</h2>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                        <div class="dvAdd row">
                          <div class="col-12">
                            <h2 class="heading-sm-regular mb-2 d-none">
                              Quantity
                            </h2>
                            <div class="row">
                              <div class="d-flex align-items-center justify-content-md-end col-12">
                                <div class="plus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaMinus />
                                  </button>
                                </div>
                                <div class="value mx-2 col-4">
                                  <input
                                    type="text"
                                    value="1"
                                    class="form-control text-center"
                                  />
                                </div>
                                <div class="minus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                        <div>
                          <span>514</span> <span>points</span>
                        </div>
                        <button type="button" class="btn btnRemove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="bg-light border rounded p-3">
                <div class="row">
                  <div class="col-3 col-sm-2 col-md-1">
                    <img
                      src="https://static-01.daraz.com.np/p/78c2c48246d30bc104d316f24f3eec9a.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-9 col-sm-10 col-md-11">
                    <div class="row align-items-center justify-content-between h-100">
                      <div class="col-12 col-sm-4 col-lg-6 col-xl-8">
                        <h2 class="heading-md">Necklace</h2>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                        <div class="dvAdd row">
                          <div class="col-12">
                            <h2 class="heading-sm-regular mb-2 d-none">
                              Quantity
                            </h2>
                            <div class="row">
                              <div class="d-flex align-items-center justify-content-md-end col-12">
                                <div class="plus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaMinus />
                                  </button>
                                </div>
                                <div class="value mx-2 col-4">
                                  <input
                                    type="text"
                                    value="1"
                                    class="form-control text-center"
                                  />
                                </div>
                                <div class="minus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                        <div>
                          <span>514</span> <span>points</span>
                        </div>
                        <button type="button" class="btn btnRemove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="bg-light border rounded p-3">
                <div class="row">
                  <div class="col-3 col-sm-2 col-md-1">
                    <img
                      src="https://static-01.daraz.com.np/p/78c2c48246d30bc104d316f24f3eec9a.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-9 col-sm-10 col-md-11">
                    <div class="row align-items-center justify-content-between h-100">
                      <div class="col-12 col-sm-4 col-lg-6 col-xl-8">
                        <h2 class="heading-md">Necklace</h2>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                        <div class="dvAdd row">
                          <div class="col-12">
                            <h2 class="heading-sm-regular mb-2 d-none">
                              Quantity
                            </h2>
                            <div class="row">
                              <div class="d-flex align-items-center justify-content-md-end col-12">
                                <div class="plus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaMinus />
                                  </button>
                                </div>
                                <div class="value mx-2 col-4">
                                  <input
                                    type="text"
                                    value="1"
                                    class="form-control text-center"
                                  />
                                </div>
                                <div class="minus col-auto">
                                  <button
                                    type="button"
                                    class="btn btn-addtocart p-0"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-sm-end">
                        <div>
                          <span>514</span> <span>points</span>
                        </div>
                        <button type="button" class="btn btnRemove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
