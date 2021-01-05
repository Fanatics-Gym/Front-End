import React from "react";
import { useRecoilValue } from "recoil";
import SelectedItem from "../../Recoil/atom/selectedItem";
import "../../scss/singleItem.scss";

const ItemPage = () => {
  const Item = useRecoilValue(SelectedItem);
  console.log(Item);
  return (
    <div className="singleItem">
      <div className="header">
        <h1>{Item.name}</h1>
        <h2>${Item.price}</h2>
      </div>
    </div>
  );
};

export default ItemPage;
