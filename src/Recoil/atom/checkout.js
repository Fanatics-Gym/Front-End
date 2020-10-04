const { atom } = require("recoil");

const CheckoutAtom = atom({
  key: "checkout",
  default: [],
});

export default CheckoutAtom;
