import React from "react";
import { BackBtn, BtnContainer, NextBtn } from "./styles/buttons";

const Buttons = ({ steps, activeStep, setActiveStep }) => {
  return (
    <BtnContainer>
      {activeStep !== 0 && (
        <BackBtn type="button" onClick={() => setActiveStep(activeStep - 1)}>
          Back
        </BackBtn>
      )}
      <NextBtn type="submit" onClick={() => setActiveStep(activeStep + 1)}>
        {activeStep === steps.length - 1 ? "Confirm" : "Next"}
      </NextBtn>
    </BtnContainer>
  );
};

export default Buttons;
