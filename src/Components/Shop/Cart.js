import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import Item from "./item";

const Cart = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);
  const total = checkoutList
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="cart">
      <div className="cartHeader">
        <h2 className="cartTitle">Cart</h2>
        <span>
          <Link to="/checkout"></Link>
        </span>
      </div>
      <div className="checkout">
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
            </div>
            <span>
              <Link to="/checkout">
                <button className="toCheckout">Checkout</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
