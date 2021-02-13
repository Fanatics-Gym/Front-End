import React from "react";

const EmergencyFirst = ({}) => {
  return (
    <div className="formGroup">
      <input id="Em_First" name="Em_First" placeholder="First" />
      <label htmlFor="firstName">
        First Name<b className="inputRequired">*</b>
      </label>
    </div>
  );
};

const EmergencyLast = ({}) => {
  return (
    <div className="formGroup">
      <input id="Em_Last" name="Em_Last" placeholder="Last" />
      <label htmlFor="lastName">
        Last Name<b className="inputRequired">*</b>
      </label>
    </div>
  );
};

const EmergencyRelation = ({}) => {
  return (
    <div className="formGroup">
      <input id="relation" name="relation" placeholder="Family/Friend/Etc." />
      <label htmlFor="relation">
        Relation<b className="inputRequired">*</b>
      </label>
    </div>
  );
};

const EmergencyPhone = ({}) => {
  return (
    <div className="formGroup">
      <input
        id="em_phone"
        name="em_phone"
        placeholder="(xxx)-xxx-xxxx"
        type="number"
      />
      <label>
        Phone Number<b className="inputRequired">*</b>
      </label>
    </div>
  );
};

const EmergencyInfo = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formContainer">
      <EmergencyFirst
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <EmergencyLast
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <EmergencyRelation
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <EmergencyPhone
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />
    </div>
  );
};

export default EmergencyInfo;
