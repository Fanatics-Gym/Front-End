import React from "react";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";

const Cart = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);
  return (
    <div>
      <h2 className="checkoutHeader">Cart</h2>
      <div className="itemList">
        {checkoutList.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
