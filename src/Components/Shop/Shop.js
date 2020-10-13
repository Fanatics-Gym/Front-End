import React, { useEffect } from "react";
import Item from "./item";
import { useRecoilState } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";
import { BaseUrl } from "../Auth/axios";

const Shop = () => {
  const [shopItems, setShopItems] = useRecoilState(ShopAtom);
  useEffect(() => {
    BaseUrl()
      .get(`items`)
      .then((res) => {
        setShopItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
