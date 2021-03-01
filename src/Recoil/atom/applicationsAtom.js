const {atom} = require("recoil");


const ApplicationAtom = atom({
    key: "applications",
    default: []
})


export default ApplicationAtom