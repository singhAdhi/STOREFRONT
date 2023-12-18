import { configureStore } from "@reduxjs/toolkit";
import exSlice from "./exSlice";
import topOffers from "./topOffers";
import featuredReducers from "./featuredOffers";

const appStore = configureStore({
  reducer: {
    example: exSlice,
    topOffers: topOffers,
    featuredOffers: featuredReducers,
  },
});

export default appStore;
