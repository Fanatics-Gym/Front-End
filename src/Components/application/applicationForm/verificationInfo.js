import React from "react";
import CurrentResidence from "./currentResidenceForm";
import { states } from "./states";

const DriversLicense = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Drivers_license"
        name="Drivers_license"
        placeholder="Driver's License #"
        autoComplete="DL"
        type="text"
      />
      <label htmlFor="Drivers_licese">Driver's License</label>
      {/* {errors?.Drivers_license && touched?.Drivers_license && (
        <p>{errors?.Drivers_license}</p> */}
      {/* )} */}
    </div>
  );
};

const Expiration = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="DL_Expiration"
        name="DL_Expiration"
        placeholder="Driver's License Experation"
        autoComplete="email"
        type="date"
      />
      <label htmlFor="DL_Expiration">Experation Date</label>
      {/* {errors?.DL_Expiration && touched?.DL_Expiration && (
        <p>{errors?.DL_Expiration}</p> */}
      {/* )} */}
    </div>
  );
};

const AddressInput = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="address"
        name="address"
        placeholder="Street"
        // onChange={handleChange}
        // value={values.address}
      />
      <label htmlFor="address">Address</label>
      {/* {errors.address && touched.address && <p>{errors.address}</p>} */}
    </div>
  );
};

const CityInput = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="city"
        name="city"
        placeholder="City"
        // onChange={handleChange}
        // value={values.city}
        autoComplete="billing address-level2"
      />
      <label htmlFor="city">City</label>
      {/* {errors.city && touched.city && <p>{errors.city}</p>} */}
    </div>
  );
};

const AddressState = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <select id="address_state" name="address_state">
        <option value="" disabled>
          State
        </option>
        {states.map((state) => (
          <option key={state} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
      <label>State</label>
      {/* {errors.state && touched.state && <p>{errors.state}</p>} */}
    </div>
  );
};

const ZipInput = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input id="zip" name="zip" type="number" placeholder="Zip/Postal Code" />
      <label htmlFor="zip">Zip Code</label>
      {/* {errors.zip && touched.zip && <p>{errors.zip}</p>} */}
    </div>
  );
};

const VerificationInfo = ({ values, handleChange, errors, touched }) => (
  <div className="formContainer">
    <DriversLicense
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <Expiration
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <AddressInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <CityInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <AddressState
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <ZipInput
      touched={touched}
      values={values}
      handleChange={handleChange}
      errors={errors}
    />
    <CurrentResidence
      value={values}
      touched={touched}
      handleChange={handleChange}
      errors={errors}
    />
  </div>
);

export default VerificationInfo;
