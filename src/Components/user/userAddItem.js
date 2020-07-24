import React, { useEffect } from "react";
import AddItem from "../Shop/addItem";
import Item from "../Shop/item";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../Redux/thunks/itemThunk";
import "../../scss/userAddItem.scss";
const UserAddItem = () => {
  const itemsArray = useSelector((state) => state.item);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="userAddItem">
      <div className="addItem">
        <AddItem />
      </div>
      <div className="items">
        {itemsArray.itemArr.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default UserAddItem;
