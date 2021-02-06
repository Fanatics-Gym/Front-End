import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import Buttons from "./applicationForm/buttonsForForm";
import PlayerInfo from "./applicationForm/playerInfo";
import VerificationInfo from "./applicationForm/verificationInfo";
import EmergencyInfo from "./applicationForm/emergencyInfo";

const FormWrapper = ({ steps, activeStep, setActiveStep }) => {
  const { push } = useHistory();

  const applicationInfo = {
    first_name: "",
    last_name: "",
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
            ) : (
              <EmergencyInfo />
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
