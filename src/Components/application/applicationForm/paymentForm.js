import React from "react";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  return (
    <div className="paymentCont">
      <h3>Payment</h3>
      <div className="paymentInfoCont">
        <div className="paymentInfo">
          <h4>Season {"&"} Gear</h4>
          <div />
          <b>$750.00</b>
        </div>
        <div className="paymentInfo">
          <h4>Security Deposit</h4>
          <div />
          <b>$750.00</b>
        </div>
        <div className="paymentInfo" id="total">
          <h4>Total:</h4>
          <div />
          <b>$1500.00</b>
        </div>
      </div>
      <div className="paymentTermsCont">
        <input type="checkbox" />
        <label>
          By clicking here, you agree to the <Link>Terms of Costs</Link> with
          your payment.
        </label>
      </div>
    </div>
  );
};

export default PaymentForm;
