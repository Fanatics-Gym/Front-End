import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../slices/itemSlice";
import checkoutReducer from "../slices/checkoutSlice";

export default configureStore({
  reducer: {
    item: itemReducer,
    checkout: checkoutReducer,
  },
});
