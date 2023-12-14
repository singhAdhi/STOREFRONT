import { configureStore } from "@reduxjs/toolkit";
import ExSlice from "./ExSlice";

const appStore = configureStore({
  reducer: {
    example: ExSlice,
  },
});

export default appStore;
