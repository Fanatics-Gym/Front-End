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
        name="paymentInfo.card_holder"
        value={values}
        onChange={handleChange}
      />
    </div>
  );
};

const PaymentNumber = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="formGroup">
      <input
        placeholder="Credit Card Number"
        name="paymentInfo.card_number"
        value={values}
        onChange={handleChange}
      />
    </div>
  );
};

const PaymentForm = () => {
  return (
    <div className="paymentMethodCont">
      <h3>Payment Method</h3>
      <div className="paymentContent">
        <PaymentHolderName />
        <PaymentNumber />
      </div>
    </div>
  );
};

export default PaymentForm;
