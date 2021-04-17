const { atom } = require("recoil");

const PlayerRoster = atom({
  key: "PlayerRoster",
  default: [],
});

export default PlayerRoster;
