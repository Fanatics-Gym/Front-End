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
              <b>1</b>
            </p>
            <p>
              SubTotal: <b>14</b>
            </p>
            <p>
              Estimated Sales Tax:<b>0</b>
            </p>
            <p>
              Total:<b>14</b>
            </p>
          </div>
          <span>
            <button className="purchase">Purchase</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
