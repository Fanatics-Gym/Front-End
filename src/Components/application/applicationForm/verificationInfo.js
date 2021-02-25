import React from "react";
import CurrentResidence from "./currentResidenceForm";
import { states } from "./states";

const DriversLicense = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="Drivers_license"
        name="Drivers_license"
        placeholder="Driver's License #"
        autoComplete="DL"
        type="text"
        value={values.Drivers_license}
        onChange={handleChange}
      />
      <label htmlFor="Drivers_licese">
        Driver's License<b className="inputRequired">*</b>
      </label>
      {/* {errors?.Drivers_license && touched?.Drivers_license && (
        <p>{errors?.Drivers_license}</p> */}
      {/* )} */}
    </div>
  );
};

const Expiration = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="DL_Expiration"
        name="DL_Expiration"
        placeholder="Driver's License Experation"
        autoComplete="email"
        type="date"
        value={values.Drivers_license}
        onChange={handleChange}
      />
      <label htmlFor="DL_Expiration">
        Experation Date<b className="inputRequired">*</b>
      </label>
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
        onChange={handleChange}
        value={values.address}
      />
      <label htmlFor="address">
        Address<b className="inputRequired">*</b>
      </label>
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
        onChange={handleChange}
        value={values.city}
        autoComplete="billing address-level2"
      />
      <label htmlFor="city">
        City<b className="inputRequired">*</b>
      </label>
      {/* {errors.city && touched.city && <p>{errors.city}</p>} */}
    </div>
  );
};

const AddressState = ({ errors, touched, values, handleChange }) => {
  return (
    <div className="formGroup">
      <select
        id="address_state"
        name="address_state"
        value={values}
        onChange={handleChange}
        value={values.address_state}
        onChange={handleChange}
      >
        <option value="" disabled>
          State
        </option>
        {states.map((state) => (
          <option key={state.value} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
      <label>
        State<b className="inputRequired">*</b>
      </label>
      {/* {errors.state && touched.state && <p>{errors.state}</p>} */}
    </div>
  );
};

const ZipInput = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="zip"
        name="zip"
        type="number"
        placeholder="Zip/Postal Code"
        value={values.zip}
        onChange={handleChange}
      />
      <label htmlFor="zip">
        Zip Code<b className="inputRequired">*</b>
      </label>
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
