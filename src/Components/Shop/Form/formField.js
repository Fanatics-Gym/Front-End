import React from "react";

const FormField = ({ placeholder, required }) => {
  return (
    <div className="formFieldContainer">
      <label></label>
      <input placeholder={placeholder} required />
    </div>
  );
};

export default FormField;
