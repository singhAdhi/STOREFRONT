import React, { useEffect, useState } from "react";
import HeroSlider from "./hero-slider/HeroSlider";
import Welcome from "./welcome/Welcome";
import Vouchers from "./vouchers/Vouchers";
import ShopDeals from "./shop-deals/ShopDeals";
import Travel from "./travel/Travel";
import Earn from "./earn/Earn";
import RedemptionMenu from "./redemption-menu/RedemptionMenu";
import { GRANT_TYPE, CLIENT_ID, CLIENT_SECRET, STORE_ID } from "../../config";
import { useDispatch } from "react-redux";
import { addCatalogId } from "../../utils/exSlice";

const Index = () => {
  const [redemptions, setredemptions] = useState(null);
  const dispatch = useDispatch();

  //page load go to top
  useEffect(() => {
    window.scrollTo(0, 0);
    GetAuthToken();
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

    import("../../dummy/GetStoreDetails_DATA")
      .then((module) => {
        dispatch(addCatalogId(module.GetStoreDetails_DATA.Catalog));
        FetchSearchCategories(module.GetStoreDetails_DATA.Catalog);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
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

    import("../../dummy/SearchCategories_DATA")
      .then((module) => {
        setredemptions(
          module.SearchCategories_DATA.filter((x) => x.ParentId == null).sort((a, b) => b.Priorty - a.Priorty)
        );
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  };

  return (
    <>
      <HeroSlider />
      {redemptions && <RedemptionMenu RedemptionList={redemptions} />}
      <Welcome />
      <Vouchers />
      <ShopDeals />
      <Travel />
      <Earn />
    </>
  );
};

export default Index;
