import React from "react";

const EmergencyFirst = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Em_First"
        name="Em_First"
        placeholder="First"
        value={values.Em_First}
        onChange={handleChange}
      />
      <label htmlFor="firstName">
        First Name<b className="inputRequired">*</b>
      </label>
      {errors?.Em_First && touched?.Em_First && <p>{errors?.Em_First}</p>}
    </div>
  );
};

const EmergencyLast = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Em_Last"
        name="Em_Last"
        placeholder="Last"
        value={values.Em_Last}
        onChange={handleChange}
      />
      <label htmlFor="lastName">
        Last Name<b className="inputRequired">*</b>
      </label>
      {errors?.Em_Last && touched?.Em_Last && <p>{errors?.Em_Last}</p>}
    </div>
  );
};

const EmergencyRelation = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="relation"
        name="relation"
        placeholder="Family/Friend/Etc."
        value={values.relation}
        onChange={handleChange}
      />
      <label htmlFor="relation">
        Relation<b className="inputRequired">*</b>
      </label>
      {errors?.relation && touched?.relation && <p>{errors?.relation}</p>}
    </div>
  );
};

const EmergencyPhone = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="em_phone"
        name="em_phone"
        placeholder="(xxx)-xxx-xxxx"
        type="number"
        value={values.em_phone}
        onChange={handleChange}
      />
      <label>
        Phone Number<b className="inputRequired">*</b>
      </label>
      {errors?.em_phone && touched?.em_phone && <p>{errors?.em_phone}</p>}
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
