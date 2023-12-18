import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/baseUrl";

// const url = "GetStoreDetails_DATA";
const url = "SearchCategories_DATA";

const initialState = {
  redemptionMenuLinks: [],
  isLoading: null,
  isError: null,
  isLoadingText: "",
};

//fetching SearchCategories_DATA
export const fetchRedemptionMenu = createAsyncThunk(
  "home/fetchRedemption",
  async () => {
    try {
      const response = await fetch(`${baseUrl}/${url}`);
      if (!response.ok) {
        throw new Error("TOP OFFERS NOT FOUND");
      }
      const data = await response.json();
      // console.log(data);
      return data.filter((item) => item.ParentId === null);
    } catch (error) {
      throw new Error("An error occurred while fetching redemption menu.");
    }
  }
);

export const redemptionMenuSlice = createSlice({
  name: "redemptionmenu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedemptionMenu.pending, (state) => {
        (state.isLoading = true),
          (state.isError = null),
          (state.isLoadingText = "Redemption Menu");
      })
      .addCase(fetchRedemptionMenu.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = null),
          (state.redemptionMenuLinks = payload),
          (state.isLoadingText = "Redemption Menu");
      })
      .addCase(fetchRedemptionMenu.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLoadingText = "Redemption Menu");
      });
  },
});

export const {} = redemptionMenuSlice.actions;
export default redemptionMenuSlice.reducer;
