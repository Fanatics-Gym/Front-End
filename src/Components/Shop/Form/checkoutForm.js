import React, { useState } from "react";
import FormField from "./formField";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ price }) => {
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  return (
    <div className="checkoutForm">
      <FormField label="Name" type="text" placeholder="Tim Duncan" required />
      <FormField
        label="Email"
        type="email"
        placeholder="tim.duncan@example.com"
        required
      />
      <FormField
        label="Address"
        type="text"
        placeholder="3952 American Drive"
        required
      />
      <FormField label="City" type="text" placeholder="Pensacola" required />
      <FormField label="State" type="text" placeholder="Florida" required />
      <FormField label="ZIP" type="text" placeholder="32501" required />
      <div className="cardElement">
        <CardElement />
      </div>
      <div className="buttonContainer">
        <button disabled={processing || !stripe} className="payButton">
          {processing ? "Processing..." : `Pay $${price}`}
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
