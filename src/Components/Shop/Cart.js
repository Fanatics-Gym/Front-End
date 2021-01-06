import React from "react";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";

const Cart = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);
  return (
    <div className="cart">
      <div className="cartHeader">
        <h2 className="cartTitle">Cart</h2>
        <span>
          <button className="toCheckout">Proceed To Checkout</button>
        </span>
      </div>
      <div className="itemList">
        {checkoutList.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
