import React, { useEffect, useState } from "react";
import "./shop-nav.css";
import { STORE_ID } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedemptionMenu } from "../../../redux/home/RedemptionMenuSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  searchItem,
  setCategoryFilter,
} from "../../../redux/shop/filteredData/filteredDataSlice";
import { CiShoppingCart } from "react-icons/ci";
import { makeGetRequest } from "../../../api/services";

const ShopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { CATALOG_ID, OUTLINE } = useSelector((state) => state.commonReducer);
  const { cartCount } = useSelector((state) => state.cartDetailsSlice);
  const cart = useSelector((store) => store.CartReducer.cartItems);
  const newArray = cart.filter((obj) => obj.Images && obj.Images.length > 0);
  let dispatch = useDispatch();

  const [filteredList, setfilteredList] = useState(null);

  useEffect(() => {
    FetchSearchCategories(CATALOG_ID);
    let timer = setTimeout(() => {
      dispatch(searchItem(searchQuery));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const FetchSearchCategories = (catalogId) => {
    let body = {
      StoreId: STORE_ID,
      CatalogId: catalogId,
      LanguageCode: "en-US",
      ResponseGroup: "Full",
      Terms: [],
    };
    // let url = `/api/StoreFront/SearchCategories`;
    let url = "src/dummyApiData/shop/SearchCategories_DATA.json";
    makeGetRequest({ url })
      .then(({ data }) => {
        let shopcatlog = data.SearchCategories_DATA.find(
          (x) => x.Id == OUTLINE
        );
        bindMenu(shopcatlog.Id, data.SearchCategories_DATA);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function bindMenu(categoryId, categories) {
    var mainList = [];
    if (categories && categories.length > 0) {
      var mainmenus = categories.filter((x) => x.ParentId === categoryId);

      mainmenus.forEach(function (mainMenu) {
        var categoryItem = {
          ...mainMenu,
          submenu: bindSubMenu(mainMenu.Id, categories),
        };

        mainList.push(categoryItem);
      });
      setfilteredList(mainList);
    }
  }

  function bindSubMenu(categoryId, categories) {
    var submenuList = [];
    var menus = categories.filter((x) => categoryId === x.ParentId);

    if (menus && menus.length > 0) {
      menus.forEach(function (menu) {
        var submenuItem = {
          ...menu,
          submenu: bindSubMenu(menu.Id, categories),
        };

        submenuList.push(submenuItem);
      });
    }

    return submenuList;
  }

  const handleClick = (val) => {
    dispatch(setCategoryFilter(val));
    navigate(`/ShopList/${val}`);
  };

  const SubmenuDesktop = ({ submenu }) => (
    <>
      <ul className="dropdown-menu py-0">
        {submenu &&
          submenu.map((item) => (
            <li className="dropdown-submenu" key={item.Id}>
              <a
                className={`dropdown-item ${
                  item.submenu.length > 0 ? "dropdown-toggle" : ""
                }`}
              >
                <span onClick={() => handleClick(item.Name)}>{item.Name}</span>
              </a>
              {item.submenu.length > 0 ? (
                <SubmenuDesktop submenu={item.submenu} />
              ) : null}
            </li>
          ))}
      </ul>
    </>
  );
  const SubmenuMobile = ({ submenu }) => (
    <>
      <ul className="dropdown-menu shadow py-0">
        {submenu &&
          submenu.map((item) => (
            <li
              className={`${item.submenu.length > 0 ? "dropend" : ""}`}
              key={item.Id}
            >
              <a
                className={`dropdown-item ${
                  item.submenu.length > 0 ? "dropdown-toggle" : ""
                }`}
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <span onClick={() => handleClick(item.Name)}>{item.Name}</span>
              </a>
              {item.submenu.length > 0 ? (
                <SubmenuMobile submenu={item.submenu} />
              ) : null}
            </li>
          ))}
      </ul>
    </>
  );

  return (
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
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Link to="/cart">
              <button type="button" className="btn p-0">
                <div className="d-flex align-items-center">
                  <CiShoppingCart />
                  <span className="badge text-bg-light border p-2 ms-2">
                    {cartCount}
                  </span>
                </div>
              </button>
            </Link>
          </div>
          <div className="col-12 col-lg-9 order-lg-1">
            <div className="collapse navbar-collapse" id="dvMenu">
              <ul className="navbar-nav mr-auto">
                {filteredList &&
                  filteredList.map((item) => (
                    <li className="nav-item dropdown" key={item.Id}>
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center justify-content-between text-uppercase"
                        // href="#"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        <span onClick={() => handleClick(item.Name)}>
                          {item.Name}
                        </span>
                      </a>
                      {item.submenu.length > 0 ? (
                        <>
                          <div className="mobile">
                            <SubmenuMobile submenu={item.submenu} />
                          </div>
                          <div className="desktop">
                            <SubmenuDesktop submenu={item.submenu} />
                          </div>
                        </>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ShopNavbar;
