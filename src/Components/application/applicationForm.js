import React from "react";
import FormField from "../Shop/Form/formField";

const ApplicationForm = () => {
  return (
    <div className="applicationForm">
      <div className="applicationHeader">
        <h2>Application</h2>
      </div>
      <div className="nameCont">
        <h2>#1</h2>
        <FormField label="Name" type="text" placeholder="first" required />
        <FormField label type="text" placeholder="middle" required />
        <FormField label type="text" placeholder="last" required />
      </div>
    </div>
  );
};

export default ApplicationForm;
