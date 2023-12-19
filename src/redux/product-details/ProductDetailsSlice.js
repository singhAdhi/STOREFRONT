import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/baseUrl";

const url = "ProductDetailsById";

const initialState = {
  productDetails: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching SearchProductsFeatured_DATA
export const fetchProductDetails = createAsyncThunk(
  "product-details/fetchProductDetails",
  async () => {
    try {
      const response = await fetch(`${baseUrl}/${url}`);
      if (!response.ok) {
        throw new Error("FEATURED OFFERS NOT FOUND");
      }
      const data = await response.json();
      //   console.log(data);
      return data;
    } catch (error) {
      throw new Error("An error occurred while fetching top Offers.");
    }
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Product Details");
      })
      .addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.productDetails = payload),
          (state.isLoadingText = "Product Details");
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Product Details");
      });
  },
});

export const {} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
