import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/baseUrl";

const url = "SearchProductsFeatured_DATA";

const initialState = {
  featuredOffers: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching SearchProductsFeatured_DATA
export const newProducts = createAsyncThunk(
  "home/fetchFeaturedOffers",
  async () => {
    try {
      const response = await fetch(`${baseUrl}/${url}`);
      if (!response.ok) {
        throw new Error("FEATURED OFFERS NOT FOUND");
      }
      const data = await response.json();
      return data.Products;
    } catch (error) {
      throw new Error("An error occurred while fetching top Offers.");
    }
  }
);

export const featuredOffersSlice = createSlice({
  name: "featuredOffers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newProducts.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Featured Offers");
      })
      .addCase(newProducts.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.featuredOffers = payload),
          (state.isLoadingText = "Featured Offers");
      })
      .addCase(newProducts.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Featured Offers");
      });
  },
});

export const {} = featuredOffersSlice.actions;
export default featuredOffersSlice.reducer;
