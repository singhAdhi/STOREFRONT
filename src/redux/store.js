import { configureStore } from "@reduxjs/toolkit";
import redemptionMenuReducer from "../redux/home/RedemptionMenuSlice";
import featuredOffersReducer from "../redux/shop/featuredoffers/FeaturedOffersSlice";
import topOffersReducer from "../redux/shop/topoffers/TopOffersSlice";
import storeDetailsReducer from "./common/storeDetails/storeDetailsSlice";
import commonReducer from "./common/index";
import productDetailReducer from "./product-details/ProductDetailsSlice";

import filteredDataReducer from "./shop/filteredData/filteredDataSlice";
export const store = configureStore({
  reducer: {
    redemptionMenuReducer,
    featuredOffersReducer,
    topOffersReducer,
    storeDetailsReducer,
    commonReducer,
    productDetailReducer,
    filteredDataReducer,
  },
});
