import React, { useEffect, useState } from "react";
import ShopNavbar from "./shop-nav/ShopNavbar";
import FeaturedOffers from "./featured-offers/FeaturedOffers";
import TopOffers from "./top-offers/TopOffers";
import ShopSlider from "./shop-slider/ShopSlider";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { addStoreDetails } from "../../redux/common/storeDetails/storeDetailsSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { STORE_ID } from "../../config";
import { fetchRedemptionMenu } from "../../redux/home/RedemptionMenuSlice";

const Index = () => {
  const history = useNavigate();
  const [categoryList, setcategoryList] = useState(null);
  const { CATALOG_ID, OUTLINE } = useSelector((state) => state.commonReducer);
  let [featureHead, setFeatureHead] = useState([]);
  let dispatch = useDispatch();

  //page load go to top
  useEffect(() => {
    window.scrollTo(0, 0);
    getStoreDetail();
    FetchSearchCategories(CATALOG_ID);
  }, []);

  const getStoreDetail = async () => {
    const response = await fetch("http://localhost:8000/GetStoreDetails_DATA");
    const data = await response.json();
    setFeatureHead(data.DynamicProperties[1].Values);
    dispatch(addStoreDetails(data));
  };
  //console.log(featureHead);

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
      setcategoryList(mainList);
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

  return (
    <>
      <ShopSlider />

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
              <li className="breadcrumb-item active">Shop</li>
            </ul>
          </nav>
        </div>
      </div>

      {featureHead.length > 0 && (
        <>
          {categoryList && <ShopNavbar categoryList={categoryList} />}
          <FeaturedOffers feature={featureHead[0].Value} />
          <TopOffers top={featureHead[1].Value} />
        </>
      )}
    </>
  );
};

export default Index;
