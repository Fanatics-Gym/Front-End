import React from "react";
import AddItem from "../Shop/addItem";
import Item from "../Shop/item";
import { useRecoilValue } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";
import Shop from "../Shop/Shop";

const UserAddItem = () => {
  const shopAtom = useRecoilValue(ShopAtom);
  return (
    <div className="userAddItem">
      <div className="addItem">
        <AddItem />
      </div>
      <div className="items">
        <Shop />
      </div>
    </div>
  );
};

export default UserAddItem;
