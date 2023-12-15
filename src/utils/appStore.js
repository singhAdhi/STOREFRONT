import { configureStore } from "@reduxjs/toolkit";
import ExSlice from "./exSlice";

const appStore = configureStore({
  reducer: {
    example: ExSlice,
  },
});

export default appStore;
