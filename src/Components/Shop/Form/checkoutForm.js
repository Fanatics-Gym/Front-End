import React from "react";
import FormField from "./formField";

const CheckoutForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default CheckoutForm;
