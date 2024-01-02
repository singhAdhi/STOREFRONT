import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/baseUrl";
import { makeGetRequest } from "../../../api/services";

const initialState = {
  storeDetailsData: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching GetStoreDetails_DATA
export const storeDetails = createAsyncThunk(
  "common/storeDetailsSlice",
  async ({ url, body }) => {
    try {
      const response = await makeGetRequest({ url, body });
      return response.data;
    } catch (error) {
      throw new Error("An error occurred while fetching store detail.");
    }
  }
);

export const storeDetailsSlice = createSlice({
  name: "storeDetailsSlice",
  initialState,
  reducers: {
    addStoreDetails: (state, action) => {
      state.storeDetailsData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(storeDetails.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Store Details");
      })
      .addCase(storeDetails.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.storeDetailsData = payload),
          (state.isLoadingText = "Store Details");
      })
      .addCase(storeDetails.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Store Details");
      });
  },
});

export const { addStoreDetails } = storeDetailsSlice.actions;
export default storeDetailsSlice.reducer;
