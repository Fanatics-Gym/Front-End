const { atom } = require("recoil");

const ApplicationFilter = atom({
  key: "applicationStatus",
  default: "All",
});

export default ApplicationFilter;
