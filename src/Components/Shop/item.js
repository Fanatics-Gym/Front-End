import React from "react";
import "../../scss/item.scss";
import { connect } from "react-redux";
import { addToCheckout } from "../Redux/thunks/itemThunk";

const mapDispatch = { addToCheckout };

const Item = ({ item, setSelectedItem }) => {
  return (
    <div className="itemCard">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
      <button onClick={() => addToCheckout(item)}>Checkout</button>
    </div>
  );
};

export default connect(null, mapDispatch)(Item);
