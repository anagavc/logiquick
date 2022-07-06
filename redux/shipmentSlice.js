import { createSlice } from "@reduxjs/toolkit";
const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    shipment: [],
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
    getShipmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getShipmentSuccess: (state, action) => {
      state.isFetching = false;
      state.shipment = action.payload;
    },
    getShipmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createShipmentStart,
  createShipmentSuccess,
  createShipmentFailure,
  getShipmentStart,
  getShipmentSuccess,
  getShipmentFailure,
} = shipmentSlice.actions;
export default shipmentSlice.reducer;
