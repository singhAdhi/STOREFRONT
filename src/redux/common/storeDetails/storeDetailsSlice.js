import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../api/baseUrl";

const url = "GetStoreDetails_DATA";

const initialState = {
  storeDetailsData: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching GetStoreDetails_DATA
export const storeDetails = createAsyncThunk(
  "common/storeDetailsSlice",
  async () => {
    try {
      const response = await fetch(`${baseUrl}/${url}`);
      if (!response.ok) {
        throw new Error("Store Details DATA NOT FOUND");
      }
      const data = await response.json();
      return data;
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
