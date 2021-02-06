import React from "react";
import { states } from "./states";

const DriversLicense = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Drivers_license"
        name="Drivers_license"
        placeholder="Drivers licese #"
        autoComplete="DL"
      />
      <label htmlFor="Drivers_licese">What's Drivers license number?</label>
      {/* {errors?.Drivers_license && touched?.Drivers_license && (
        <p>{errors?.Drivers_license}</p> */}
      {/* )} */}
    </div>
  );
};

const DLState = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <select id="DL_state" name="DL_state">
        <option value="" disabled>
          State
        </option>
        {states.map((state) => (
          <option key={state}>{state.label}</option>
        ))}
      </select>
      <label>Drivers License State</label>
      {/* {errors.state && touched.state && <p>{errors.state}</p>} */}
    </div>
  );
};

const Expiration = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="DL_Expiration"
        name="DL_Expiration"
        placeholder="Drivers License Experation"
        autoComplete="email"
      />
      <label htmlFor="DL_Expiration">Drivers License Experation</label>
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
        placeholder="Street Address"
        // onChange={handleChange}
        // value={values.address}
      />
      <label htmlFor="address">Street name, and house/apt number</label>
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
      <label htmlFor="city">Which city do you live in?</label>
      {/* {errors.city && touched.city && <p>{errors.city}</p>} */}
    </div>
  );
};

const AddressState = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <select id="state" name="state">
        <option value="" disabled>
          State
        </option>
        {states.map((state) => (
          <option key={state} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
      <label>State of address</label>
      {/* {errors.state && touched.state && <p>{errors.state}</p>} */}
    </div>
  );
};

const ZipInput = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input id="zip" name="zip" placeholder="Zip/Postal Code" />
      <label htmlFor="zip">Enter your 5-digit postal code</label>
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
    <DLState
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
  </div>
);

export default VerificationInfo;
