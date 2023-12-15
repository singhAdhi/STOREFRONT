import { configureStore } from "@reduxjs/toolkit";
import ExSlice from "./ExSlice";
import topOffers from "./topOffers";
import featuredReducers from "./featuredOffers";

const appStore = configureStore({
  reducer: {
    example: ExSlice,
    topOffers: topOffers,
    featuredOffers: featuredReducers,
  },
});

export default appStore;
