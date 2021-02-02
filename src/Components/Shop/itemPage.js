import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import SelectedItem from "../../Recoil/atom/selectedItem";
import CheckoutAtom from "../../Recoil/atom/checkout";
import "../../scss/singleItem.scss";

const ItemPage = () => {
  const Item = useRecoilValue(SelectedItem);
  const [checkout, setCheckout] = useRecoilState(CheckoutAtom);

  const addToCheckout = () => {
    setCheckout((old) => [...old, Item]);
  };
  return (
    <div className="singleItem">
      <div className="header">
        <img src={Item.img} />
        <div>
          <h1>{Item.name}</h1>
          <h2>${Item.price}</h2>
        </div>
      </div>
      <div className="info">
        <div className="describe">
          <h3>Description</h3>
          <p>{Item.description}</p>
        </div>
        <button className="item_btn" onClick={addToCheckout}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
