import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
    </div>
  );
};

export default Item;
