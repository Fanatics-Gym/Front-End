import {
  setItemArray,
  setItemError,
  setSelectedItem,
  setAddItem,
} from "../slices/itemSlice";
import { BaseUrl } from "../../Auth/axios";

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await BaseUrl().get("items");
    dispatch(setItemArray(data));
    console.log(data);
  } catch (e) {
    e.response
      ? dispatch(setItemArray(e.response.data))
      : dispatch(setItemError(e));
  }
};

export const addItem = ({ name, price, size, stock }) => async (dispatch) => {
  try {
    const { data } = await BaseUrl().post("items/add", {
      name,
      price,
      size,
      stock,
    });
    dispatch(setAddItem(data));
  } catch (e) {}
};
