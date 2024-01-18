import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  RoomRates: null,
  UrlValues: [],
};

const hotelDetails = createSlice({
  name: "hotelDetails",
  initialState: INITIAL_STATE,
  reducers: {
    addRoomRates: (state, action) => {
      state.RoomRates = action.payload;
      localStorage.setItem("RoomRates", JSON.stringify(action.payload));
    },
    addUrlValues: (state, action) => {
      state.UrlValues = [action.payload];
      localStorage.setItem("UrlValues", JSON.stringify(action.payload));
    },
  },
});

export default hotelDetails.reducer;
export const { addRoomRates, addUrlValues } = hotelDetails.actions;
