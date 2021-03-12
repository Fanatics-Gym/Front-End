import { Form, Formik } from "formik";
import React, { useState } from "react";
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
  const [termsState, setTermsState] = useState(false);
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
  };

  const confirmTerms = () => {
    setTermsState(!termsState);
  };

  console.log(termsState);

  const handleNext = (applicationInfo, activeStep, setActiveStep) => {
    if (activeStep === 4 && termsState === true) {
      SubmitApplication(applicationInfo, push)();
    } else if (activeStep < 4) {
      setActiveStep(activeStep + 1);
      console.log(activeStep);
    }
    console.log(activeStep);
  };

  return (
    <Formik
      initialValues={applicationInfo}
      // validationSchema={
      //   activeStep === 0
      //     ? PlayerInfoSchema
      //     : activeStep === 1
      //     ? VerificationSchema
      //     : EmergencySchema
      // }
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
            <TermsAndConditions confirmTerms={confirmTerms} />
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
