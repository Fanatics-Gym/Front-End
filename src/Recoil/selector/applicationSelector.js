const { selector } = require("recoil");
const { default: ApplicationAtom } = require("../atom/applicationsAtom");

const ApplicationSelector = selector({
  key: "applSelector",
  get: ({ get }) => {
    const applications = get(ApplicationAtom);
    const totalAppl = applications.length;
    const pendingAppl = applications.filter((appl) => appl.status === "Pending")
      .length;
    const approvedAppl = applications.filter(
      (appl) => appl.status === "Approved"
    ).length;
    const rejectedAppl = applications.filter(
      (appl) => appl.status === "Rejected"
    ).length;

    return {
      totalAppl,
      pendingAppl,
      approvedAppl,
      rejectedAppl,
    };
  },
});

export default ApplicationSelector;
