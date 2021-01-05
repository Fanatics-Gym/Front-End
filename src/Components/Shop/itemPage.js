import React from "react";
import { useRecoilValue } from "recoil";
import SelectedItem from "../../Recoil/atom/selectedItem";
import "../../scss/singleItem.scss";

const ItemPage = () => {
  const Item = useRecoilValue(SelectedItem);
  return (
    <div className="singleItem">
      <div className="header">
        <img src={Item.img} />
        <h1>{Item.name}</h1>
      </div>
      <div className="info">
        <div className="describe">
          <h3>Description</h3>
          <p>
            This is the new hat the best hat, it's so clean and so awesome! Made
            with the best materials, silk, cotton
          </p>
        </div>
        <h2>${Item.price}</h2>
      </div>
    </div>
  );
};

export default ItemPage;
