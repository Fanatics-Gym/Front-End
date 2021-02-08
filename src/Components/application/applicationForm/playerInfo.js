import React from "react";

const FirstName = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="first_name"
        name="first_name"
        placeholder="First Name"
        autoComplete="fname"
      />
      <label htmlFor="first_name">What's your first name?</label>
      {errors?.first_name && touched?.first_name && <p>{errors?.first_name}</p>}
    </div>
  );
};

const LastName = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="last_name"
        name="last_name"
        placeholder="Last Name"
        autoComplete="lname"
      />
      <label htmlFor="last_name">What's your last name?</label>
      {errors?.last_name && touched?.last_name && <p>{errors?.last_name}</p>}
    </div>
  );
};

const Email = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input id="Email" name="email" placeholder="Email" autoComplete="email" />
      <label htmlFor="email">Enter your email here</label>
      {errors?.email && touched?.email && <p>{errors?.email}</p>}
    </div>
  );
};

const Phone = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="phone"
        name="phone"
        placeholder="Phone Number"
        autoComplete="phone"
        type="number"
      />
      <label htmlFor="phone">Your 10-digit phone number</label>
      {errors?.phone && touched?.phone && <p>{errors?.phone}</p>}
    </div>
  );
};

const DateOfBirth = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="DOB"
        name="DOB"
        placeholder="Date of Birth"
        autoComplete="DOB"
        type="date"
      />
      <label htmlFor="DOB">Your Date of Birth</label>
      {errors?.phone && touched?.phone && <p>{errors?.phone}</p>}
    </div>
  );
};

const AltPhone = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Altphone"
        name="Altphone"
        placeholder="Alt Phone Number"
        autoComplete="phone"
        type="number"
      />
      <label htmlFor="Alt phone">Your 10-digit phone number</label>
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
