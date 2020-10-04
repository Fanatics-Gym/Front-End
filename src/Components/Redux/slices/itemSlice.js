import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    itemArr: [],
    itemError: null,
    selectedItem: {},
    checkoutArr: [],
  },
  reducers: {
    setItemArray(state, action) {
      state.itemArr = action.payload;
    },
    setItemError(state, action) {
      state.itemError = action.payload;
    },
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
    setAddItem(state, action) {
      state.itemArr.push(action.payload);
    },
    setDeleteItem(state, action) {
      state.itemArr.remove(action.payload);
    },
    setCheckoutArr(state, action) {
      const item = action.payload;
      state.checkoutArr.push(item);
    },
  },
});

export const {
  setItemArray,
  setItemError,
  setSelectedItem,
  setAddItem,
  setDeleteItem,
  setCheckoutArr,
} = itemSlice.actions;
export default itemSlice.reducer;
