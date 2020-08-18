import { setCheckout, addCheckout } from "../slices/checkoutSlice";

export const addToCheckout = (item) => async (dispatch) => {
  try {
    console.log("hit");
    console.log(item);
    // const { data } = await { name, price, size, stock };
    dispatch(setCheckout(item));
    dispatch(addCheckout(item));
  } catch (e) {}
};
