import React, { useEffect, useState } from "react";
import HeroSlider from "./hero-slider/HeroSlider";
import Welcome from "./welcome/Welcome";
import Vouchers from "./vouchers/Vouchers";
import ShopDeals from "./shop-deals/ShopDeals";
import Travel from "./travel/Travel";
import Earn from "./earn/Earn";
import RedemptionMenu from "./redemption-menu/RedemptionMenu";
import { useDispatch, useSelector } from "react-redux";
import { addCartId, addCatalogId } from "../../redux/common";
import { CustomerId, CustomerName, STORE_ID } from "../../config";
import { shopApi } from "../../api/services";
import Loading from "../../components/other/loading/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const [isloading, setisloading] = useState(false);
  const [redemptionMenus, setredemptionMenus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // GetAuthToken();
    GetStoreDetails();
    GetCartDetails();
  }, []);

  const GetAuthToken = () => {
    let body = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };
    let url = `/api/StoreFront/GetAuthToken`;
  };

  const GetCartDetails = () => {
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
    let url = "src/dummyApiData/shop/SearchCart_DATA.json";
    shopApi
      .get(url, body)
      .then(({ data }) => {
        dispatch(addCartId(data.SearchCart_DATA.Id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetStoreDetails = () => {
    setisloading(true);
    // let url = `/api/StoreFront/GetStoreDetails?StoreId=${STORE_ID}`;
    let url = "src/dummyApiData/shop/GetStoreDetails_DATA.json";
    shopApi
      .get(url)
      .then(({ data }) => {
        dispatch(addCatalogId(data.GetStoreDetails_DATA.Catalog));
        FetchSearchCategories(data.GetStoreDetails_DATA.Catalog);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    shopApi
      .post(url, body)
      .then(({ data }) => {
        setredemptionMenus(data.SearchCategories_DATA);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisloading(false);
      });
  };

  return (
    <>
      <HeroSlider />
      {redemptionMenus && <RedemptionMenu redemptionMenus={redemptionMenus} />}
      {isloading && <Loading />}
      <Welcome />
      {/* <Vouchers />
      <ShopDeals /> */}
      <Travel />
      <Earn />
    </>
  );
};

export default Index;
