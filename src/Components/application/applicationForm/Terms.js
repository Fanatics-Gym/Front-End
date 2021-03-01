import React, { useState } from "react";
import { lora } from "../PageData";

const TermsAndConditions = (applicationInfo) => {
  const [termsState, setTermsState] = useState(applicationInfo.terms);
  const confirmTerms = () => {
    if (termsState) {
      setTermsState(!termsState);
    }
  };
  return (
    <div className="termsContainer">
      <h2>Read the Terms and Conditions</h2>
      <div className="termsAndConditions">
        <p>{lora[0]}</p>
        <p>{lora[1]}</p>
        <p>{lora[2]}</p>
        <p>{lora[3]}</p>
      </div>
      <div className="confirmRead">
        <input type="checkbox" onClick={confirmTerms} id="terms" name="terms" />
        <label>Check the box if you agree with the terms</label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
