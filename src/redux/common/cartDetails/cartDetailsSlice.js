import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shopApi } from "../../../api/services";

const initialState = {
  cartDetails: null,
  isLoading: null,
  isError: null,
  isLoadingText: "",
  cartCount: 0,
};

export const fetchcartDetails = createAsyncThunk(
  "home/fetchcartDetails",
  async ({ url, body }) => {
    try {
      const response = await shopApi.get(url, body);
      return response.data;
    } catch (error) {
      throw new Error("An error occurred while fetching store detail.");
    }
  }
);

export const cartDetailsSlice = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    addCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcartDetails.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Cart Details");
      })
      .addCase(fetchcartDetails.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.cartDetails = payload),
          // (state.cartCount = payload.Items.length),
          (state.isLoadingText = "Cart Details");
      })
      .addCase(fetchcartDetails.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Cart Details");
      });
  },
});

export const { addCartCount } = cartDetailsSlice.actions;
export default cartDetailsSlice.reducer;
