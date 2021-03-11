const { get } = require("http");
const { selector } = require("recoil");
const { default: ApplicationStatus } = require("../atom/applicationFilterAtom");
const { default: ApplicationAtom } = require("../atom/applicationsAtom");

const applicationFilter = selector({
  key: "applicationFilter",
  get: ({ get }) => {
    const defaultStatus = get(ApplicationStatus);
    const applicationList = get(ApplicationAtom);

    switch (defaultStatus) {
      case "Aprroved":
        return applicationList.filter((appl) => appl.status === "Approved");
      case "Pending":
        return applicationList.filter((appl) => appl.status === "Pending");
      case "Rejected":
        return applicationList.filter((appl) => appl.status === "Rejected");
      default:
        return applicationList;
    }
  },
});

export default applicationFilter;
