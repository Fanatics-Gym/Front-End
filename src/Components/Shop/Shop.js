import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../Redux/thunks/itemThunk";
import Item from "./item";
import { BaseUrl } from "../Auth/axios";

const Shop = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    BaseUrl()
      .get("items")
      .then((res) => {
        console.log(res);
        setShop(res.data);
      });
  }, []);
  console.log(shop);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);
  // const { itemsArray } = useSelector((state) => state.item);
  return (
    <div>
      <h2>Items</h2>
      {shop.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
