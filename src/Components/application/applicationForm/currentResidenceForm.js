import React from "react";
import { states } from "./states";

const CurrentAddress = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="current_address"
        name="current_address"
        placeholder="Street"
        // onChange={handleChange}
        // value={values.address}
      />
      <label htmlFor="address">Address</label>
      {/* {errors.address && touched.address && <p>{errors.address}</p>} */}
    </div>
  );
};

const CurrentCity = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="current_city"
        name="current_city"
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

const CurrentZip = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        id="current_zip"
        name="current_zip"
        type="number"
        placeholder="Zip/Postal Code"
      />
      <label htmlFor="zip">Zip Code</label>
      {/* {errors.zip && touched.zip && <p>{errors.zip}</p>} */}
    </div>
  );
};

const CurrentState = ({ errors, touched }) => {
  return (
    <div className="formGroup">
      <select id="current_state" name="current_state">
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
