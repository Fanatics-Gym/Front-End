import React from "react";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div className="paymentCont">
      <h3 classname="paymentHeader">Payment</h3>
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
          By clicking here, you agree to the{" "}
          <Link to="/termsOfCost" target="_blank">
            Terms of Costs
          </Link>{" "}
          with your payment.
        </label>
      </div>
    </div>
  );
};

export default PaymentDetails;
