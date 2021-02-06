import React from "react";
import { useHistory } from "react-router-dom";
import Buttons from "./applicationForm/buttonsForForm";
import PlayerInfo from "./applicationForm/playerInfo";
import VerificationInfo from "./applicationForm/verificationInfo";
import EmergencyInfo from "./emergencyInfo";

const FormWrapper = ({ steps, activeStep, setActiveStep }) => {
  const { push } = useHistory();

  return (
    <div>
      {
        <div>
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
        </div>
      }
    </div>
  );
};

export default FormWrapper;
