const { atom } = require("recoil");

const ApplicationStatus = atom({
  key: "applicationStatus",
  default: "All",
});

export default ApplicationStatus;
