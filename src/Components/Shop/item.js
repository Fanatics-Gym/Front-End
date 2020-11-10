import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import CheckoutAtom from "../../Recoil/atom/checkout";
import ShopAtom from "../../Recoil/atom/shop";
import { BaseUrl } from "../Auth/axios";

const Item = ({ item }) => {
  const [shopState, setShopState] = useRecoilState(ShopAtom);
  const [editItem, setEditItem] = useState(false);
  const [checkout, setCheckout] = useRecoilState(CheckoutAtom);

  const deleteItem = () => {
    if (window.location.pathname === "/checkout") {
      const checkoutIndex = checkout.indexOf(item);
      const checkoutArray = [...checkout];
      checkoutArray.splice(checkoutIndex, 1);
      setCheckout(checkoutArray);
    } else if (window.location.pathname === "/add") {
      const itemIndex = shopState.indexOf(item);
      const shopArray = [...shopState];
      shopArray.splice(itemIndex, 1);
      setShopState(shopArray);
      BaseUrl().delete(`items/${item.id}`);
    }
  };

  //new, he saleem
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
        <div className="addButtons">
          <button>edit</button>
          <button onClick={deleteItem}>delete</button>
        </div>
      );
    } else if (window.location.pathname === "/checkout") {
      return (
        <div>
          <button onClick={deleteItem}>Remove</button>
        </div>
      );
    } else {
      return (
        <button className="item_btn" onClick={addToCheckout}>
          Checkout
        </button>
      );
    }
  };
  return (
    <div className="itemCard">
      <div className="item_content">
        <img src={item.img} classname="item_img"></img>
        <div className="item_name_price">
          <h3 className="item_header">
            <Link to="/item">{item.name}</Link>
          </h3>
          <p className="item_price">${item.price}</p>
        </div>
        <p>{item.description}</p>
        <p>{item.size}</p>
        <p>{item.stock}</p>
        {userEdit()}
      </div>
    </div>
  );
};

export default Item;
