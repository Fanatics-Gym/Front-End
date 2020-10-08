import React from "react";
import { useRecoilState } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";

const Item = ({ item }) => {
  const [shopState, setShopState] = useRecoilState(ShopAtom);

  const deleteItem = () => {
    const itemIndex = shopState.indexOf(item);
    console.log(shopState.slice(itemIndex, 1));
  };

  const userEdit = () => {
    if (window.location.pathname === "/add") {
      return (
        <div>
          <button>edit</button>
          <button onClick={deleteItem}>delete</button>
        </div>
      );
    } else {
      return <button>Checkout</button>;
    }
  };
  return (
    <div className="itemCard">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.stock}</p>
      {userEdit()}
    </div>
  );
};

export default Item;
