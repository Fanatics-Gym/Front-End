import {
  setItemArray,
  setItemError,
  setSelectedItem,
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
