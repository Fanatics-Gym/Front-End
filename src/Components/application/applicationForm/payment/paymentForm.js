import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { InputCont, Input, PaymentCont, MultInputCont } from "./payment-styles";

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
      <Input
        placeholder="Month"
        type="month"
        name="paymentInfo.exp_month"
        value={values.paymentInfo.exp_month}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const ExpYear = ({ values, handleChange, errors, touched }) => {
  return (
    <InputCont width="40%">
      <Input
        placeholder="Year"
        type="year"
        name="paymentInfo.exp_year"
        value={values.paymentInfo.exp_year}
        onChange={handleChange}
      />
    </InputCont>
  );
};

const PaymentForm = ({ values, handleChange, errors, touched }) => {
  return (
    <PaymentCont>
      <h3>Payment Method</h3>
      <div className="paymentContent">
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
    </PaymentCont>
  );
};

export default PaymentForm;
