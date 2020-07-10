import React from "react";
import "../../scss/item.scss";

const Item = ({ item }) => {
  return (
    <div className="itemCard">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
    </div>
  );
};

export default Item;
