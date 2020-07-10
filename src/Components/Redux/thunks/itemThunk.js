import {
  setItemArray,
  setItemError,
  setSelectedItem,
} from "../slices/itemSlice";
import { BaseUrl } from "../../Auth/axios";

export const getItems = () => (dispatch) => {
  try {
    const data = BaseUrl().get("items");
    dispatch(setItemArray(data));
  } catch (e) {
    e.response
      ? dispatch(setItemArray(e.response.data))
      : dispatch(setItemError(e));
  }
};
