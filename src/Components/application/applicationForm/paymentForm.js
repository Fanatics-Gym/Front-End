import React from "react";

const PaymentForm = () => {
  return (
    <div className="paymentCont">
      <h3>Payment</h3>
      <div className="paymentInfoCont">
        <div className="paymentInfo">
          <h4>Season {"&"} Gear</h4>
          <b>$750.00</b>
        </div>
        <div className="paymentInfo">
          <h4>Security Deposit</h4>
          <b>$750.00</b>
        </div>
        <div className="paymentInfo" id="total">
          <h4>Total:</h4>
          <b>$1500.00</b>
        </div>
      </div>
      <div>
        <input type="checkbox" />
        <label></label>
      </div>
    </div>
  );
};

export default PaymentForm;
