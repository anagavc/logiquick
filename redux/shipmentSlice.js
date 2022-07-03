import { createSlice } from "@reduxjs/toolkit";
const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    shipment: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    createShipmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createShipmentSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.shipment = action.payload;
    },
    createShipmentFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const {
  createShipmentStart,
  createShipmentSuccess,
  createShipmentFailure,
} = shipmentSlice.actions;
export default shipmentSlice.reducer;
