import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { STORE_ID } from "../../config";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategoryFilter } from "../../redux/shop/filteredData/filteredDataSlice";
import { useRef } from "react";
import MobileMenuItems from "./MobileMenuItems";
import { shopApi } from "../../api/services";

const Navbar = () => {
  const depthLevel = 0;
  let ref = useRef();
  const [options, setOptions] = useState(null);
  const { CATALOG_ID, OUTLINE } = useSelector((state) => state.commonReducer);
  const [filteredList, setfilteredList] = useState(null);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    FetchSearchCategories();
  }, []);
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
    shopApi({ url })
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
  useEffect(() => {
    const allNames = filteredList ? filteredList.map((item) => item.Name) : [];
    setOptions(allNames);
    // console.log(allNames);
  }, [filteredList]);

  const handleClick = (val) => {
    dispatch(setCategoryFilter(val));
    navigate(`/ShopList/${val}`);
    console.log("clicked");
  };

  // console.log(filteredList);
  return (
    <nav className="mobile-nav">
      <ul className="" ref={ref}>
        {filteredList &&
          filteredList.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                onHandleClick={handleClick}
              />
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
