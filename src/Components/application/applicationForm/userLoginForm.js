import React from "react";

const UserName = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="username"
        name="username"
        placeholder="User Name"
        value={values.username}
        onChange={handleChange}
      />
    </div>
  );
};

const Password = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

const ConfirmPassword = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="confirm_password"
        name="confirm_password"
        placeholder="Confirm Password"
        value={values.confirm_password}
        onChange={handleChange}
      />
    </div>
  );
};

const UserLoginForm = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formContainer">
      <UserName values={values} handleChange={handleChange} />
      <Password values={values} handleChange={handleChange} />
      <ConfirmPassword values={values} handleChange={handleChange} />
    </div>
  );
};

export default UserLoginForm;
