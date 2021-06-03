import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentHolderName = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        placeholder="Card Holder Name"
        value={values}
        onChange={handleChange}
      />
    </div>
  );
};

const PaymentForm = () => {
  return (
    <div className="paymentCont">
      <h3>Payment Method</h3>
      <PaymentHolderName />
    </div>
  );
};

export default PaymentForm;
