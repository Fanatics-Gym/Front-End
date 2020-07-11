import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../slices/itemSlice";

export default configureStore({
  reducer: {
    item: itemReducer,
  },
});
