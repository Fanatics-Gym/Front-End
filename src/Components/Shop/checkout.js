import React, { useReducer } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const checkoutArray = useSelector((state) => state.item);
  console.log(checkoutArray);
  return <div></div>;
};

export default Checkout;
