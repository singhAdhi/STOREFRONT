import { createSlice } from "@reduxjs/toolkit";

const featuredSlice = createSlice({
  name: "featuredOffers",
  initialState: {
    Products: null,
  },
  reducers: {
    newProducts: (state, action) => {
      state.Products = action.payload;
    },
  },
});

export default featuredSlice.reducer;

export const { newProducts } = featuredSlice.actions;
