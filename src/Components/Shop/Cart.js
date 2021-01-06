import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/checkout">
            <button className="toCheckout">Proceed To Checkout</button>
          </Link>
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
