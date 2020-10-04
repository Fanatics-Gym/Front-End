const { atom } = require("recoil");

const ShopAtom = atom({
  key: "shop",
  default: [],
});

export default ShopAtom;
