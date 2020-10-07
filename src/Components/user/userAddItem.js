import React from "react";
import AddItem from "../Shop/addItem";
import Item from "../Shop/item";
import { useRecoilValue } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";
const UserAddItem = () => {
  const shopAtom = useRecoilValue(ShopAtom);
  return (
    <div className="userAddItem">
      <div className="addItem">
        <AddItem />
      </div>
      <div className="items">
        {shopAtom.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default UserAddItem;
