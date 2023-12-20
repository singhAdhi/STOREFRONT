import { createSlice } from "@reduxjs/toolkit";

const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState: {
    value: "",
  },
  reducers: {
    latestValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { latestValue } = filteredDataSlice.actions;
export default filteredDataSlice.reducer;
