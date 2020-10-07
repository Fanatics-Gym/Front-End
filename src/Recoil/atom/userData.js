const { atom } = require("recoil");

const UserInfo = atom({
  key: "userInfo",
  default: [],
});

export default UserInfo;
