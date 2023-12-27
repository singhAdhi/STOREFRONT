import React, { useEffect, useState } from "react";
import HeroSlider from "./hero-slider/HeroSlider";
import Welcome from "./welcome/Welcome";
import Vouchers from "./vouchers/Vouchers";
import ShopDeals from "./shop-deals/ShopDeals";
import Travel from "./travel/Travel";
import Earn from "./earn/Earn";
import RedemptionMenu from "./redemption-menu/RedemptionMenu";
import { storeDetails } from "../../redux/common/storeDetails/storeDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCartId, addCatalogId } from "../../redux/common";
import { fetchRedemptionMenu } from "../../redux/home/RedemptionMenuSlice";
import { CustomerId, CustomerName, STORE_ID } from "../../config";
import { makeGetRequest } from "../../api/services";
import { fetchcartDetails } from "../../redux/common/cartDetails/cartDetailsSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isLoadingText, redemptionMenuLinks } =
    useSelector((state) => state.redemptionMenuReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      .then(({ data }) => {
        dispatch(addCartId(data.Id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetStoreDetails = () => {
    let url = `/api/StoreFront/GetStoreDetails?StoreId=${STORE_ID}`;

    dispatch(storeDetails({ url }))
      .then(({ payload }) => {
        dispatch(addCatalogId(payload.Catalog));
        FetchSearchCategories(payload.Catalog);
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
    let url = `/api/StoreFront/SearchCategories`;

    dispatch(fetchRedemptionMenu({ url, body }));
  };

  return (
    <>
      <HeroSlider />
      {redemptionMenuLinks && (
        <RedemptionMenu
          {...{ isLoading, isError, isLoadingText, redemptionMenuLinks }}
        />
      )}
      <Welcome />
      {/* <Vouchers />
      <ShopDeals /> */}
      <Travel />
      <Earn />
    </>
  );
};

export default Index;
