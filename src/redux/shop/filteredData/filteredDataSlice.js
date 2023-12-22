import { createSlice } from "@reduxjs/toolkit";

const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState: {
    value: "",
    categoryFilter: "",
  },
  reducers: {
    latestValue: (state, action) => {
      state.value = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});
export const { latestValue, setCategoryFilter } = filteredDataSlice.actions;
export default filteredDataSlice.reducer;
