import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  InputCont,
  Input,
  PaymentCont,
  MultInputCont,
  Select,
} from "./payment-styles";
import { months, years } from "../../../utils/months";
import { countries, states } from "./../../../utils/states";

const PaymentHolderName = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="100%">
      <Input
        placeholder="Card Holder Name"
        name="paymentInfo.card_holder"
        value={values.paymentInfo.card_holder}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const PaymentNumber = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="55%">
      <Input
        placeholder="Card Number"
        name="paymentInfo.card_number"
        value={values.paymentInfo.card_number}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const PaymentCvv = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="40%">
      <Input
        placeholder="CVV"
        name="paymentInfo.card_cvv"
        value={values.paymentInfo.card_cvv}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const ExpMonth = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="55%">
      <Select
        placeholder="Month"
        type="month"
        name="paymentInfo.exp_month"
        value={values.paymentInfo.exp_month}
        onChange={handleChange}
      >
        <option value="" disabled>
          Month
        </option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </Select>
    </InputCont>
  );
};

const ExpYear = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="40%">
      <Select
        placeholder="Year"
        type="year"
        name="paymentInfo.exp_year"
        value={values.paymentInfo.exp_year}
        onChange={handleChange}
      >
        <option value="" disabled>
          Year
        </option>
        {years.map((year) => (
          <option key={year.value} value={year.value}>
            {year.label}
          </option>
        ))}
      </Select>
    </InputCont>
  );
};

const BillinAddress = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="55%">
      <Input
        placeholder="Address"
        name="paymentInfo.billing_address"
        value={values.paymentInfo.billing_address}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const AptAddress = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="40%">
      <Input
        placeholder="Apt#"
        name="paymentInfo.billing_apt"
        value={values.paymentInfo.billing_apt}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const BillingCity = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="45%">
      <Input
        placeholder="City"
        name="paymentInfo.billing_city"
        value={values.paymentInfo.billing_city}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const BillingState = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="45%">
      <Select
        placeholder="State"
        name="paymentInfo.billing_apt"
        value={values.paymentInfo.card_holder}
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
      </Select>
    </InputCont>
  );
};

const BillingZip = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="35%">
      <Input
        placeholder="Zip/Postal"
        name="paymentInfo.billing_zip"
        value={values.paymentInfo.billing_zip}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const items = [];

for (const [index, value] of countries.entries()) {
  items.push(<option key={index}>{value}</option>);
}

const BillingCountry = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="55%">
      <Select
        placeholder="Country"
        name="paymentInfo.billing_country"
        value={values.paymentInfo.billing_country}
        onChange={handleChange}
      >
        <option value="" disabled>
          Country
        </option>
        {countries.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </InputCont>
  );
};

const PaymentForm = ({ values, handleChange, errors, touched }) => {
  console.log(countries);
  return (
    <PaymentCont>
      <h3>Payment Method</h3>
      <div>
        <PaymentHolderName values={values} handleChange={handleChange} />
        <MultInputCont>
          <PaymentNumber values={values} handleChange={handleChange} />
          <PaymentCvv values={values} handleChange={handleChange} />
        </MultInputCont>
        <MultInputCont>
          <ExpMonth values={values} handleChange={handleChange} />
          <ExpYear values={values} handleChange={handleChange} />
        </MultInputCont>
      </div>
      <h3>Billing Address</h3>
      <div>
        <MultInputCont>
          <BillinAddress values={values} handleChange={handleChange} />
          <AptAddress values={values} handleChange={handleChange} />
        </MultInputCont>
        <MultInputCont>
          <BillingCity values={values} handleChange={handleChange} />
          <BillingState values={values} handleChange={handleChange} />
        </MultInputCont>
        <MultInputCont>
          <BillingZip values={values} handleChange={handleChange} />
          <BillingCountry values={values} handleChange={handleChange} />
        </MultInputCont>
      </div>
    </PaymentCont>
  );
};

export default PaymentForm;
