import { createSlice } from "@reduxjs/toolkit";

const topOffers = createSlice({
  name: "topOffers",
  initialState: {
    Products: null,
  },
  reducers: {
    addProducts: (state, action) => {
      state.Products = action.payload;
    },
  },
});

export default topOffers.reducer;
export const { addProducts } = topOffers.actions;
