import React from "react";
import { TermsData } from "../PageData";

const TermsAndConditions = ({ confirmTerms, value }) => {
  console.log(value);
  return (
    <div className="termsContainer">
      <h2>Terms and Conditions</h2>
      <div className="termsAndConditions">
        <p>{TermsData[0]}</p>
        <p>{TermsData[1]}</p>
        <p>{TermsData[2]}</p>
        {/* <p>{TermsData[3]}</p> */}
      </div>
      <div className="confirmRead">
        {value === true ? (
          <input
            type="checkbox"
            onClick={confirmTerms}
            id="terms"
            name="terms"
            checked
          />
        ) : (
          <input
            type="checkbox"
            onClick={confirmTerms}
            id="terms"
            name="terms"
          />
        )}
        <label>
          By clicking here I acknowledge that I have read, understand, and agree
          to the Terms and Conditions
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
