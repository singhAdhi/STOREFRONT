import { configureStore } from "@reduxjs/toolkit";
import redemptionMenuReducer from "../redux/home/RedemptionMenuSlice";
import featuredOffersReducer from "../redux/shop/featuredoffers/FeaturedOffersSlice";
import topOffersReducer from "../redux/shop/topoffers/TopOffersSlice";
import storeDetailsReducer from "./common/storeDetails/storeDetailsSlice";
import commonReducer from "./common/index";
export const store = configureStore({
  reducer: {
    redemptionMenuReducer,
    featuredOffersReducer,
    topOffersReducer,
    storeDetailsReducer,
    commonReducer,
  },
});
