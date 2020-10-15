import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import ShopAtom from "../../Recoil/atom/shop";
import { BaseUrl } from "../Auth/axios";

const AddItem = () => {
  const [item, setItem] = useState({
    name: "",
    price: null,
    size: "",
    stock: null,
  });

  const shopState = useSetRecoilState(ShopAtom);

  const handleChange = (e) => {
    if (e.target.name === "name" || e.target.name === "size") {
      setItem({ ...item, [e.target.name]: e.target.value });
    } else {
      setItem({ ...item, [e.target.name]: parseInt(e.target.value) });
    }
  };

  const addItemApi = (item) => {
    shopState((old) => [...old, item]);
    BaseUrl()
      .post("items/add", item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addItems">
      <h3>Add items</h3>
      <form
        className="itemInputs"
        onSubmit={(e) => {
          e.preventDefault();
          addItemApi(item);
        }}
      >
        <span>
          Name:{" "}
          <input
            name="name"
            value={item.name}
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span>
          Price:{" "}
          <input
            name="price"
            type="number"
            pattern="\d*"
            value={item.price}
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span>
          Size:{" "}
          <input
            name="size"
            value={item.size}
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span>
          Stock:{" "}
          <input
            name="stock"
            type="number"
            value={item.stock}
            onChange={(e) => handleChange(e)}
          />
        </span>
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
