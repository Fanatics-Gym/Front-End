import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import CheckoutSelector from "../../Recoil/selector/checkoutSelector";
import Item from "./item";

const Cart = () => {
  const checkoutList = useRecoilValue(CheckoutAtom);
  const { listLength, listTotalPrice } = useRecoilValue(CheckoutSelector);
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
                <b>{listLength}</b>
              </p>
              <p>
                SubTotal: <b>${listTotalPrice}</b>
              </p>
            </div>
            <Link to="/checkout" className="link">
              <button className="toCheckout">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
