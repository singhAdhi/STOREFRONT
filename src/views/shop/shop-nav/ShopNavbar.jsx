import React from "react";
import "./shop-nav.css";

const ShopNavbar = () => {
  return (
    <>
      <div className="dvMenu">
        <div className="container-lg">
          <nav className="navbar navbar-expand-lg navbar-light px-0 mx-n2">
            <div className="col-2 d-lg-none order-lg-0">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dvMenu"
                aria-controls="dvMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-10 col-lg-3 d-flex align-items-center justify-content-end order-lg-2">
              <form className="mx-2">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <!-- <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> --> */}
              </form>
              <button type="button" className="btn p-0">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  <span className="badge text-bg-light border p-2 ms-2">0</span>
                </div>
              </button>
            </div>
            <div className="col-12 col-lg-9 order-lg-1">
              <div className="collapse navbar-collapse" id="dvMenu">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center justify-content-between text-uppercase"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Artificial Jwellery & Accessories
                    </a>
                    <div className="dropdown-menu w-100 py-0">
                      <a className="dropdown-item" href="#">
                        Bracelet
                      </a>
                      <a className="dropdown-item" href="#">
                        Earnings
                      </a>
                      <a className="dropdown-item" href="#">
                        Hair Accessories
                      </a>
                      <a className="dropdown-item" href="#">
                        Jwellery Accessories
                      </a>
                      <a className="dropdown-item" href="#">
                        Keyring
                      </a>
                      <a className="dropdown-item" href="#">
                        Necklace
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center justify-content-between text-uppercase"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Clothings
                    </a>
                    {/* <!-- <div className="dropdown-menu w-100 py-0">
                      <a className="dropdown-item" href="#">Jacket</a>
                    </div> --> */}
                    <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdownMenuLink">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Baby & Kids
                        </a>
                        <ul className="dropdown-menu py-0">
                          <li>
                            <a className="dropdown-item" href="#">
                              Shirts
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pants
                            </a>
                          </li>

                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Shoes
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Slipper
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Leather Shoes
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Diapers
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Pampers
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Huggies
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Mens
                        </a>
                        <ul className="dropdown-menu py-0">
                          <li>
                            <a className="dropdown-item" href="#">
                              Shirts
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Trousers
                            </a>
                          </li>

                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Watches
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Titan
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Casio
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Footwear
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Chappal
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Sneakers
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Womens
                        </a>
                        <ul className="dropdown-menu py-0">
                          <li>
                            <a className="dropdown-item" href="#">
                              Sarees
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dress
                            </a>
                          </li>

                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Bags
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Plastic Bags
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Leather Bags
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#">
                              Perfumes
                            </a>
                            <ul className="dropdown-menu py-0">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Rose
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Jasmine
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center justify-content-between text-uppercase"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Handmade Dhup
                    </a>
                    <div className="dropdown-menu w-100 py-0">
                      <a className="dropdown-item" href="#">
                        Religious Item
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ShopNavbar;
