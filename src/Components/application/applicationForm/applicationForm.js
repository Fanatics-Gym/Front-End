import React, { useState } from "react";
import FormField from "../../Shop/Form/formField";
import Buttons from "./buttonsForForm";
import PlayerInfo from "./playerInfo";
import StepperWrapper from "./stepperWrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import FormWrapper from "../initalForm";

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Player Info",
    "Verification Info",
    "Emergency Info",
    "Terms of Condition",
  ];

  // const handleNext = (activeStep, setActiveStep) => {
  //   if (activeStep === 0) {
  //     setActiveStep(activeStep + 1);
  //   } else if (activeStep === 1) {
  //     setActiveStep(activeStep + 1);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="applicationFormContainer">
        <div className="applicationHeader">
          <h2>Application</h2>
        </div>

        <div className="applicationForm">
          <h2>Fill out all the fields</h2>
          <StepperWrapper steps={steps} activeStep={activeStep} />
          <FormWrapper
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            // handleNext={handleNext}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ApplicationForm;
