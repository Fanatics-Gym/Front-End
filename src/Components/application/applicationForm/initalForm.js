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
    Em_First: "",
    Em_Last: "",
    relation: "",
    em_phone: "",
    terms: false,
  };

  const handleNext = (applicationInfo, activeStep, setActiveStep, push) => {
    if (activeStep === 0) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 4) {
      push("/confirmation");
    }
  };

  console.log(applicationInfo);
  return (
    <Formik
      initialValues={applicationInfo}
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
            <TermsAndConditions />
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
