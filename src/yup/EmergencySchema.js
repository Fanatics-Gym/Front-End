import * as Yup from "yup";

export const EmergencySchema = Yup.object().shape({
  Em_First: Yup.string().required("First name required"),
  Em_Last: Yup.string().required("Last name required"),
  relation: Yup.string().required("Relation required"),
  em_phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

// export const TermsSchema = Yup.object().shape({
//   terms: Yup.boolean()
//     .required("Field is required")
//     .oneOf([true], "Field is required"),
// });
