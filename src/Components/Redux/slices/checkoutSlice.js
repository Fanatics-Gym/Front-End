import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { checkoutArr: [], checkoutError: null, itemCheckout: {} },
  reducers: {
    setCheckout(state, action) {
      state = action.payload;
    },
    addCheckout(state, action) {
      state.checkoutArr.push(action.payload);
    },
  },
});

export const { setCheckout, addCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
