const { atom } = require("recoil");

const SelectedItem = atom({
  key: "item",
  default: [],
});

export default SelectedItem;
