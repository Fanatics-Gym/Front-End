import { setCheckout } from "../slices/checkoutSlice";

export const addToCheckout = (item) => async (dispatch) => {
  try {
    console.log("hit");
    // const { data } = await { name, price, size, stock };
    dispatch(setCheckout(item));
  } catch (e) {}
};
