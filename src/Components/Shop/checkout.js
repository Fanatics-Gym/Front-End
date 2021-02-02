import React from "react";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BaseUrl } from "../Auth/axios";
import CheckoutForm from "./Form/checkoutForm";

const Checkout = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);

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
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
