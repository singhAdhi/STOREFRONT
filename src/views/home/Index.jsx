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
import { addCatalogId } from "../../redux/common";
import { fetchRedemptionMenu } from "../../redux/home/RedemptionMenuSlice";
import { STORE_ID } from "../../config";

const Index = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isLoadingText, redemptionMenuLinks } =
    useSelector((state) => state.redemptionMenuReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    GetStoreDetails();
  }, []);

  const GetAuthToken = () => {
    let body = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };
    let url = `/api/StoreFront/GetAuthToken`;
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
      <Vouchers />
      <ShopDeals />
      <Travel />
      <Earn />
    </>
  );
};

export default Index;
