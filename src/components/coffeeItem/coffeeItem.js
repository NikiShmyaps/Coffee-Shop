import React from "react";
import "./coffeeItem.sass";

const CoffeeItem = ({item}) => {
  const {name, url, price, country} = item;
  const content = country ? country : null;
  const itemWrapClass = country ? "item-wrap shadow" : "item-wrap";
  return (
    <div className={itemWrapClass}>
      <img className="item-img" src={url} alt={name}></img>
      <div className="item-data">
        <div className="item-title">{name}</div>
        <div className="item-country">{content}</div>
        <div className="item-price">{price}</div>
      </div>
    </div>
  );
};

export default CoffeeItem;