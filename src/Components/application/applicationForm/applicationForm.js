import React, { useState } from "react";
import FormField from "../../Shop/Form/formField";
import PlayerInfo from "./playerInfo";
import StepperWrapper from "./stepperWrapper";

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Player Info", "Verification Info", "Review"];
  return (
    <div className="applicationForm">
      <div className="applicationHeader">
        <h2>Application</h2>
      </div>
      <h2>Fill out all the fields</h2>
      <div>
        <StepperWrapper steps={steps} activeStep={activeStep} />
        <PlayerInfo />
      </div>
    </div>
  );
};

export default ApplicationForm;
