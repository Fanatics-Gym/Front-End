import React from "react";
import "../../scss/item.scss";
import { connect } from "react-redux";
import { setCheckout } from "../Redux/slices/checkoutSlice";
import { addToCheckout } from "../Redux/thunks/checkoutThunk";
import { removeItem } from "../Redux/thunks/itemThunk";

const mapDispatch = { addToCheckout };

const Item = ({ item }) => {
  const userEdit = () => {
    if (window.location.pathname === "/add") {
      return (
        <div>
          <button>edit</button>
          <button onClick={removeItem(item.id)}>delete</button>
        </div>
      );
    } else {
      return <button onClick={() => addToCheckout({ item })}>Checkout</button>;
    }
  };
  console.log(item);
  return (
    <div className="itemCard">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
      {userEdit()}
    </div>
  );
};

export default connect(null, mapDispatch)(Item);
