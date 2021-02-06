import React, { useState } from "react";
import FormField from "../../Shop/Form/formField";
import PlayerInfo from "./playerInfo";
import StepperWrapper from "./stepperWrapper";

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Player Info",
    "Verification Info",
    "Review",
    "Terms of Condition",
  ];
  return (
    <div className="applicationFormContainer">
      <div className="applicationHeader">
        <h2>Application</h2>
      </div>

      <div className="applicationForm">
        <h2>Fill out all the fields</h2>
        <StepperWrapper steps={steps} activeStep={activeStep} />
        <PlayerInfo />
      </div>
    </div>
  );
};

export default ApplicationForm;
