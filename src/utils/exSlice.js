import { createSlice } from "@reduxjs/toolkit";

const exSlice = createSlice({
  name: "example",
  initialState: {
    items: ["weaew"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export default exSlice.reducer;
export const { addItem } = exSlice.actions;
