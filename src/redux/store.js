import { configureStore } from "@reduxjs/toolkit";
import redemptionMenuReducer from "../redux/home/RedemptionMenuSlice";
import featuredOffersReducer from "../redux/shop/featuredoffers/FeaturedOffersSlice";
import topOffersReducer from "../redux/shop/topoffers/TopOffersSlice";

export const store = configureStore({
  reducer: {
    redemptionMenuReducer,
    featuredOffersReducer,
    topOffersReducer,
  },
});
