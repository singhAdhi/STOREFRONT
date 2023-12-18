import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/baseUrl";

const url = "SearchProductsTop_DATA";

const initialState = {
  topOffers: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching SearchProductsTop_DATA
export const addProducts = createAsyncThunk("home/fetchTopOffers", async () => {
  try {
    const response = await fetch(`${baseUrl}/${url}`);
    if (!response.ok) {
      throw new Error("TOP OFFERS NOT FOUND");
    }
    const data = await response.json();
    return data.Products;
  } catch (error) {
    throw new Error("An error occurred while fetching top Offers.");
  }
});

export const topOffersSlice = createSlice({
  name: "topOffers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProducts.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Top Offers");
      })
      .addCase(addProducts.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.topOffers = payload),
          (state.isLoadingText = "Top Offers");
      })
      .addCase(addProducts.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Top Offers");
      });
  },
});

export const {} = topOffersSlice.actions;
export default topOffersSlice.reducer;
