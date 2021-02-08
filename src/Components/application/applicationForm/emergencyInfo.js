import React from "react";

const EmergencyFirst = ({}) => {
  return (
    <div className="formGroup">
      <input id="Em_First" name="Em_First" placeholder="First Name" />
      <label htmlFor="firstName"> What's their first name?</label>
    </div>
  );
};

const EmergencyLast = ({}) => {
  return (
    <div className="formGroup">
      <input id="Em_Last" name="Em_Last" placeholder="Last Name" />
      <label htmlFor="lastName"> What's their last name?</label>
    </div>
  );
};

const EmergencyRelation = ({}) => {
  return (
    <div className="formGroup">
      <input id="relation" name="relation" placeholder="spouse/family/friend" />
      <label htmlFor="relation">Relation</label>
    </div>
  );
};

const EmergencyPhone = ({}) => {
  return (
    <div className="formGroup">
      <input
        id="em_phone"
        name="em_phone"
        placeholder="Phone Number"
        type="number"
      />
      <label>What's their phone number?</label>
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
