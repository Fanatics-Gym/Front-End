import React from "react";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const stripePromise = loadStripe(`${process.env.STRIPE_KEY}`);
  console.log(process.env.STRIPE_KEY);
  const checkoutList = useRecoilValue(CheckoutAtom);
  const total = checkoutList
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
  };
  return (
    <div className="checkout">
      <div className="checkoutHeader">
        <h2>Checkout</h2>
      </div>
      <div className="checkoutCont">
        <div className="checkoutItems">
          {checkoutList.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <div className="checkoutInfoCont">
          <div className="checkoutInfo">
            <p>
              Number of Items:
              <b>{checkoutList.length}</b>
            </p>
            <p>
              SubTotal: <b>${total}</b>
            </p>
            <p>
              Estimated Sales Tax:<b>0</b>
            </p>
            <p>
              Total:<b>${total}</b>
            </p>
          </div>
          <span>
            <button className="purchase" onClick={handleClick}>
              Purchase
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
