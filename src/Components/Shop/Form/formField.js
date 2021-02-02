import React from "react";

const FormField = ({ label, type, placeholder, required }) => {
  return (
    <div className="formFieldContainer">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

export default FormField;
