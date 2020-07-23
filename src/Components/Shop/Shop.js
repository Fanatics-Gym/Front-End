import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../Redux/thunks/itemThunk";
import Item from "./item";
import "../../scss/shop.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const itemsArray = useSelector((state) => state.item);
  return (
    <div>
      <h2 className="shopHeader">Shop</h2>
      <h3 className="itemsHeader">Items</h3>
      <div className="itemList">
        {itemsArray.itemArr.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
