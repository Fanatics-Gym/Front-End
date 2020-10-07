import React from "react";

const Item = ({ item }) => {
  const userEdit = () => {
    if (window.location.pathname === "/add") {
      return (
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      );
    } else {
      return <button>Checkout</button>;
    }
  };
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

export default Item;
