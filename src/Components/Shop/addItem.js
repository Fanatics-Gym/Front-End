import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../Redux/thunks/itemThunk";
import "../../scss/addItem.scss";

const mapDispatch = { addItem };

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState({
    name: "",
    price: null,
    size: "",
    stock: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "name" || e.target.name === "size") {
      setItem({ ...item, [e.target.name]: e.target.value });
    } else {
      setItem({ ...item, [e.target.name]: parseInt(e.target.value) });
    }
  };
  //   const handleInt = (e) => {
  //     setItem({ ...item, [e.target.name]: parseInt(e.target.value) });
  //   };
  //   const handleSubmit = (e) => {
  //     console.log(e);
  //     setItem(dispatch(addItem(e)));
  //   };

  return (
    <div className="addItems">
      <h3>Add items</h3>
      <form
        className="itemInputs"
        onSubmit={(e) => {
          addItem(item);
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

export default connect(null, mapDispatch)(AddItem);
