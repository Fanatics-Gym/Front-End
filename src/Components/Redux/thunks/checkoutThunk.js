import { setCheckout, addCheckout } from "../slices/checkoutSlice";
import { setCheckoutArr } from "../slices/itemSlice";

export const addToCheckout = (item) => async (dispatch) => {
  try {
    console.log("hit");
    console.log(item);
    // const { data } = await { name, price, size, stock };
    dispatch(setCheckoutArr(item));
  } catch (e) {}
};
