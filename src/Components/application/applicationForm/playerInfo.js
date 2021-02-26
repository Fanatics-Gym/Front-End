import React from "react";

const FirstName = ({ values, errors, touched, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="first_name"
        name="first_name"
        placeholder="First"
        autoComplete="fname"
        value={values.first_name}
        onChange={handleChange}
      />
      <label htmlFor="first_name">
        First Name<b className="inputRequired">*</b>
      </label>
      {errors?.first_name && touched?.first_name && <p>{errors?.first_name}</p>}
    </div>
  );
};

const LastName = ({ values, errors, touched, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="last_name"
        name="last_name"
        placeholder="Last"
        autoComplete="lname"
        value={values.last_name}
        onChange={handleChange}
      />
      <label htmlFor="last_name">
        Last Name<b className="inputRequired">*</b>
      </label>
      {errors?.last_name && touched?.last_name && <p>{errors?.last_name}</p>}
    </div>
  );
};

const Email = ({ values, errors, touched, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="Email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="email">
        Email<b className="inputRequired">*</b>
      </label>
      {errors?.email && touched?.email && <p>{errors?.email}</p>}
    </div>
  );
};

const Phone = ({ errors, touched, values, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="phone"
        name="phone"
        placeholder="(xxx)-xxx-xxxx"
        autoComplete="phone"
        type="number"
        value={values.phone}
        onChange={handleChange}
      />
      <label htmlFor="phone">
        Phone Number<b className="inputRequired">*</b>
      </label>
      {errors?.phone && touched?.phone && <p>{errors?.phone}</p>}
    </div>
  );
};

const DateOfBirth = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="DOB"
        name="DOB"
        placeholder="Date of Birth"
        type="date"
        value={values.dob}
        onChange={handleChange}
      />
      <label htmlFor="DOB">
        Date of Birth<b className="inputRequired">*</b>
      </label>
      {errors?.phone && touched?.phone && <p>{errors?.phone}</p>}
    </div>
  );
};

const AltPhone = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Altphone"
        name="Altphone"
        placeholder="(xxx)-xxx-xxxx"
        autoComplete="phone"
        type="number"
        value={values.Altphone}
        onChange={handleChange}
      />
      <label htmlFor="Alt phone">Alt Phone Number</label>
      {errors?.phone && touched?.phone && <p>{errors?.phone}</p>}
    </div>
  );
};

const PlayerInfo = ({ values, handleChange, errors, touched }) => (
  <div className="formContainer">
    <FirstName
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <LastName
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <Email
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <Phone
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <AltPhone
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <DateOfBirth
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
  </div>
);

export default PlayerInfo;
