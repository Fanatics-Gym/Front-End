import React from "react";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";

const Checkout = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);
  return (
    <div className="checkout">
      <div className="checkoutHeader">
        <h2>Checkout</h2>
      </div>
      <div className="checkoutItems">
        {checkoutList.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="checkoutInfo"></div>
    </div>
  );
};

export default Checkout;
