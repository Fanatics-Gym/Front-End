import * as Yup from "yup";

export const VerificationSchema = Yup.object().shape({
  Drivers_license: Yup.string().required("Drivers License is required"),
  DL_Expiration: Yup.string().required("Expiration required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  address_state: Yup.string().required("Addess state is required"),
  zip: Yup.string()
    .matches(/^\d{5}$/, "Invalid phone number")
    .required("Zip is required"),
});
