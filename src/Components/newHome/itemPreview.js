import React from "react";

const ItemPreview = ({ item }) => {
  return (
    <div className="ItemPreviewCont">
      <h3>{item.name}</h3>
      <img src={item.img} />
      <p>${item.price}</p>
    </div>
  );
};

export default ItemPreview;
