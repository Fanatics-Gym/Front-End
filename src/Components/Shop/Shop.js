import React from "react";
import Item from "./item";
import "../../scss/shop.scss";
import { useRecoilValue } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";
const Shop = () => {
  const shopItems = useRecoilValue(ShopAtom);
  return (
    <div>
      <h2 className="shopHeader">Shop</h2>
      <h3 className="itemsHeader">Items</h3>
      <div className="itemList">
        {shopItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
