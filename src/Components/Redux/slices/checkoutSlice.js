import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [],
  reducers: {
    setCheckout(state, action) {
      const { item } = action.payload;
      state.push({ item });
    },
  },
});

export const { setCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
