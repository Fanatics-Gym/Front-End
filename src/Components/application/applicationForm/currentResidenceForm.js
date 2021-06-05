import React, { useState } from "react";
import { states } from "../../utils/states";

const CurrentAddress = ({ values, handleChange }) => {
  return (
    <div className="formGroup">
      <input
        id="current_address"
        name="current_address"
        placeholder="Street"
        onChange={handleChange}
        value={values.current_address}
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
        onChange={handleChange}
        value={values.current_city}
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
        value={values.current_zip}
        onChange={handleChange}
      />
      <label htmlFor="zip">Zip Code</label>
      {/* {errors.zip && touched.zip && <p>{errors.zip}</p>} */}
    </div>
  );
};

const CurrentState = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <select
        id="current_state"
        name="current_state"
        value={values.current_state}
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
      <label>State</label>
      {/* {errors.state && touched.state && <p>{errors.state}</p>} */}
    </div>
  );
};

const CurrentResidence = ({ value, handleChange, errors, touched }) => {
  const [current, setCurrent] = useState(false);
  const changeCurrent = () => {
    setCurrent(!current);
    value.info.current_address = value.info.address;
    value.info.current_city = value.info.city;
    value.info.current_zip = value.info.zip;
    value.info.current_state = value.info.address_state;
  };

  return (
    <div className="currentResidenceCont">
      <div className="residenceHeader">
        <h2>Current Residence</h2>
        <span>
          <label>Same As Driver's Licence Address</label>
          <input type="checkbox" onClick={changeCurrent} />
        </span>
      </div>

      {current ? (
        <div></div>
      ) : (
        <div className="formContainer2">
          <CurrentAddress
            values={value}
            touched={touched}
            handleChange={handleChange}
            errors={errors}
          />
          <CurrentCity
            values={value}
            touched={touched}
            handleChange={handleChange}
            errors={errors}
          />
          <CurrentState
            values={value}
            touched={touched}
            handleChange={handleChange}
            errors={errors}
          />
          <CurrentZip
            values={value}
            touched={touched}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
      )}
    </div>
  );
};

export default CurrentResidence;
