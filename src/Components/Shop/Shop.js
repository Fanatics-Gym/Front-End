import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, addItem } from "../Redux/thunks/itemThunk";
import Item from "./item";
import { BaseUrl } from "../Auth/axios";
import AddItem from "./addItem";

const Shop = () => {
  const [shop, setShop] = useState([]);
  // useEffect(() => {
  //   BaseUrl()
  //     .get("items")
  //     .then((res) => {
  //       console.log(res.data);
  //       setShop(res.data);
  //     });
  // }, []);
  const token = localStorage.getItem("token");
  const userAdd = () => {
    if (token) {
      return <AddItem />;
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const itemsArray = useSelector((state) => state.item);
  return (
    <div>
      <h2>Items</h2>
      {userAdd()}
      {itemsArray.itemArr.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
