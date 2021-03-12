import React from "react";
import { TermsData } from "../PageData";

const TermsAndConditions = ({ confirmTerms }) => {
  return (
    <div className="termsContainer">
      <h2>Read the Terms and Conditions</h2>
      <div className="termsAndConditions">
        <p>{TermsData[0]}</p>
        <p>{TermsData[1]}</p>
        <p>{TermsData[2]}</p>
        <p>{TermsData[3]}</p>
      </div>
      <div className="confirmRead">
        <input type="checkbox" onClick={confirmTerms} id="terms" name="terms" />
        <label>Check the box if you agree with the terms</label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
