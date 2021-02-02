import { selector } from "recoil";
import CheckoutAtom from "../atom/checkout";

const CheckoutSelector = selector({
  key: "checkoutStats",
  get: ({ get }) => {
    const checkoutList = get(CheckoutAtom);
    const listLength = checkoutList.length;
    const listTotalPrice = checkoutList
      .map((item) => item.price)
      .reduce((a, b) => a + b, 0);

    return {
      listLength,
      listTotalPrice,
    };
  },
});

export default CheckoutSelector;
