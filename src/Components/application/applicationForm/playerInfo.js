import React from "react";

const FirstName = ({ values, errors, touched, handleChange }) => {
  console.log(values);
  return (
    <div className="firstName">
      <input
        class="firstNLast"
        id="first_name"
        name="info.first_name"
        placeholder="First"
        autoComplete="First"
        value={values.info.first_name}
        onChange={handleChange}
      />
      <label htmlFor="first_name">
        First Name<b className="inputRequired">*</b>
      </label>
      {errors?.first_name && touched?.first_name && <p>{errors?.first_name}</p>}
    </div>
  );
};

const MI = ({ values, handleChange }) => {
  console.log(values);
  return (
    <div className="mi">
      <input
        className="middleInt"
        id="mi"
        name="info.mi"
        placeholder="M.I."
        autoComplete="Middle"
        value={values.info.mi}
        onChange={handleChange}
      />
      <label htmlFor="last_name">M.I</label>
    </div>
  );
};

const LastName = ({ values, errors, touched, handleChange }) => {
  return (
    <div className="firstName">
      <input
        class="firstNLast"
        id="last_name"
        name="info.last_name"
        placeholder="Last"
        autoComplete="lname"
        value={values.info.last_name}
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
        name="info.email"
        placeholder="Example@FanaticsGym.com"
        autoComplete="email"
        value={values.info.email}
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
        name="info.phone"
        placeholder="(xxx) xxx-xxxx"
        autoComplete="phone"
        type="number"
        value={values.info.phone}
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
        name="info.DOB"
        placeholder="Date of Birth"
        type="date"
        value={values.info.DOB}
        onChange={handleChange}
      />
      <label htmlFor="DOB">
        Date of Birth<b className="inputRequired">*</b>
      </label>
      {errors?.DOB && touched?.DOB && <p>{errors?.DOB}</p>}
    </div>
  );
};

const AltPhone = ({ values, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="Altphone"
        name="info.Altphone"
        placeholder="(xxx) xxx-xxxx"
        autoComplete="phone"
        type="number"
        value={values.info.Altphone}
        onChange={handleChange}
      />
      <label htmlFor="Alt phone">Alt Phone Number</label>
    </div>
  );
};

const PlayerInfo = ({ values, handleChange, errors, touched }) => (
  <div className="formContainer">
    <div className="formNameCont">
      <FirstName
        touched={touched}
        values={values}
        handleChange={handleChange}
        errors={errors}
      />
      <MI values={values} handleChange={handleChange} />
      <LastName
        touched={touched}
        values={values}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
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
