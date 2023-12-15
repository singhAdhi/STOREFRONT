import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  items: ["weaew"],
  catalog_id: null,
  Outline: null,
};

const exSlice = createSlice({
  name: "example",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    addCatalogId: (state, action) => {
      state.catalog_id = action.payload;
    },
    addOutline: (state, action) => {
      state.Outline = action.payload;
    },
  },
});

export default exSlice.reducer;
export const { addItem, addCatalogId, addOutline } = exSlice.actions;
