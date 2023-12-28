import { createSlice } from "@reduxjs/toolkit";

const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState: {
    value: "",
    categoryFilter: "",
    searchItem: "",
  },
  reducers: {
    latestValue: (state, action) => {
      state.value = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    searchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});
export const { latestValue, setCategoryFilter, searchItem } =
  filteredDataSlice.actions;
export default filteredDataSlice.reducer;
