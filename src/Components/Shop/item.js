import React, { useState } from "react";
import { useRecoilState } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import ShopAtom from "../../Recoil/atom/shop";
import { BaseUrl } from "../Auth/axios";

const Item = ({ item }) => {
  const [shopState, setShopState] = useRecoilState(ShopAtom);
  const [editItem, setEditItem] = useState(false);
  const [checkout, setCheckout] = useRecoilState(CheckoutAtom);

  const deleteItem = () => {
    const itemIndex = shopState.indexOf(item);
    const shopArray = [...shopState];
    shopArray.splice(itemIndex, 1);
    setShopState(shopArray);
    BaseUrl().delete(`items/${item.id}`);
  };

  const EditItem = () => {
    console.log(item);
    return (
      <form className="itemCard">
        <input />
        <input />
      </form>
    );
  };

  const addToCheckout = () => {
    setCheckout((old) => [...old, item]);
  };

  const userEdit = () => {
    if (window.location.pathname === "/add") {
      return (
        <div>
          <button>edit</button>
          <button onClick={deleteItem}>delete</button>
        </div>
      );
    } else {
      return <button onClick={addToCheckout}>Checkout</button>;
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
