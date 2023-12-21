import React, { useEffect, useState } from "react";
import "./shop-nav.css";
import { STORE_ID } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedemptionMenu } from "../../../redux/home/RedemptionMenuSlice";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
  const { CATALOG_ID, OUTLINE } = useSelector((state) => state.commonReducer);
  let dispatch = useDispatch();

  const [filteredList, setfilteredList] = useState(null);

  useEffect(() => {
    FetchSearchCategories(CATALOG_ID);
  }, []);

  const FetchSearchCategories = (catalogId) => {
    let body = {
      StoreId: STORE_ID,
      CatalogId: catalogId,
      LanguageCode: "en-US",
      ResponseGroup: "Full",
      Terms: [],
    };
    let url = `/api/StoreFront/SearchCategories`;

    dispatch(fetchRedemptionMenu({ url, body }))
      .then(({ payload }) => {
        let shopcatlog = payload.find(
          (x) => x.Id == localStorage.getItem("OUTLINE")
        );
        bindMenu(shopcatlog.Id, payload);
      })
      .catch(() => {});
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

  const Submenu = ({ submenu }) => (
    <>
      <ul
        className="dropdown-menu py-0"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {submenu &&
          submenu.map((item) => (
            <li className="dropdown-submenu" key={item.Id}>
              <a
                className={`dropdown-item ${
                  item.submenu.length > 0 ? "dropdown-toggle" : ""
                }`}
                href="#"
              >
                {item.Name}
              </a>
              {item.submenu.length > 0 ? (
                <Submenu submenu={item.submenu} />
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
              />
            </form>
            <Link to="/cart">
              <button type="button" className="btn p-0">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  <span className="badge text-bg-light border p-2 ms-2">0</span>
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
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.Name}
                      </a>
                      {item.submenu.length > 0 ? (
                        <Submenu submenu={item.submenu} />
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
