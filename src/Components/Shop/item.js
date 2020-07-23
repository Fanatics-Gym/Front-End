import React from "react";
import "../../scss/item.scss";
import { connect } from "react-redux";
import { setCheckout } from "../Redux/slices/checkoutSlice";
import { addToCheckout } from "../Redux/thunks/checkoutThunk";

const mapDispatch = { addToCheckout };

const Item = ({ item }) => {
  return (
    <div className="itemCard">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
      <button onClick={() => addToCheckout({ item })}>Checkout</button>
    </div>
  );
};

export default connect(null, mapDispatch)(Item);
