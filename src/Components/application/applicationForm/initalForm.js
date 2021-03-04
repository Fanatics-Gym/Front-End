import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import Buttons from "./buttonsForForm";
import PlayerInfo from "./playerInfo";
import VerificationInfo from "./verificationInfo";
import EmergencyInfo from "./emergencyInfo";
import TermsAndConditions from "./Terms";
import { PlayerInfoSchema } from "../../../yup/playerInfoSchema";
import { VerificationSchema } from "../../../yup/verificationSchema";
import { EmergencySchema, TermsSchema } from "../../../yup/EmergencySchema";
import { BaseUrl } from "../../Auth/axios";
import { SubmitApplication } from "../../../Recoil/apiCalls/applicationApiCalls";

const FormWrapper = ({ steps, activeStep, setActiveStep, props }) => {
  const { push } = useHistory();

  const applicationInfo = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    DOB: "",
    Altphone: "",
    Drivers_license: "",
    DL_Expiration: "",
    address: "",
    city: "",
    address_state: "",
    zip: "",
    Em_First: "",
    Em_Last: "",
    relation: "",
    em_phone: "",
    terms: false,
  };

  const handleNext = (applicationInfo, activeStep, setActiveStep) => {
    if (activeStep === 0) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 3) {
      SubmitApplication(applicationInfo, push)();
    }
  };

  return (
    <Formik
      initialValues={applicationInfo}
      validationSchema={
        activeStep === 0
          ? PlayerInfoSchema
          : activeStep === 1
          ? VerificationSchema
          : activeStep === 2
          ? EmergencySchema
          : TermsSchema
      }
      onSubmit={(values) => handleNext(values, activeStep, setActiveStep)}
    >
      {(props) => (
        <Form>
          {activeStep === 0 ? (
            <PlayerInfo {...props} />
          ) : activeStep === 1 ? (
            <VerificationInfo {...props} />
          ) : activeStep === 2 ? (
            <EmergencyInfo {...props} />
          ) : (
            <TermsAndConditions {...props} />
          )}
          <Buttons
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
