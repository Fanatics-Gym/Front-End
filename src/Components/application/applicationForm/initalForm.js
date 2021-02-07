import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import Buttons from "./buttonsForForm";
import PlayerInfo from "./playerInfo";
import VerificationInfo from "./verificationInfo";
import EmergencyInfo from "./emergencyInfo";
import TermsAndConditions from "./Terms";

const FormWrapper = ({ steps, activeStep, setActiveStep }) => {
  const { push } = useHistory();

  const applicationInfo = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    DOB: "",
    Altphone: "",
    Drivers_license: "",
    DLstate: "",
    DL_Expiration: "",
    address: "",
    city: "",
    address_state: "",
    zip: "",
  };

  return (
    <Formik initialValues={applicationInfo}>
      <div>
        {
          <Form>
            {activeStep === 0 ? (
              <PlayerInfo />
            ) : activeStep === 1 ? (
              <VerificationInfo />
            ) : activeStep === 2 ? (
              <EmergencyInfo />
            ) : (
              <TermsAndConditions />
            )}
            <Buttons
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Form>
        }
      </div>
    </Formik>
  );
};

export default FormWrapper;
