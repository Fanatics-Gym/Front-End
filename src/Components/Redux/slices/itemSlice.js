import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    itemArr: [],
    itemError: null,
    selectedItem: {},
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
  },
});

export const {
  setItemArray,
  setItemError,
  setSelectedItem,
  setAddItem,
  setDeleteItem,
} = itemSlice.actions;
export default itemSlice.reducer;
