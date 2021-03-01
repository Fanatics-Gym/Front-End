import React, { useState } from "react";
import { lora } from "../PageData";

const TermsAndConditions = ({ values, errors, touched }) => {
  const [termsState, setTermsState] = useState(values.terms);
  console.log(termsState);
  const confirmTerms = () => {
    setTermsState(!termsState);
    console.log(termsState);
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
        <input
          type="checkbox"
          onClick={confirmTerms}
          id="terms"
          name="terms"
          value={values.terms}
        />
        <label>Check the box if you agree with the terms</label>
        {errors?.termsState && touched?.termsState && (
          <p>{errors?.termsState}</p>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;
