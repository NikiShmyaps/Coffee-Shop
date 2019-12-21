import React from "react";
import "./coffeeItem.sass";
import { Link } from "react-router-dom";

const CoffeeItem = ({item, pageTitle}) => {
  const {name, url, price, country} = item;
  const content = country ? country : null;
  if (pageTitle === null) {
    return (
      <div className="item-wrap">
        <img className="item-img" src={url} alt={name}></img>
        <div className="item-data">
          <div className="item-title">{name}</div>
          <div className="item-country">{content}</div>
          <div className="item-price">{price}</div>
        </div>
      </div>
    );
  } else {
    return (
      <Link className="item-wrap" to={`/${pageTitle}${name}`}>
        <img className="item-img" src={url} alt={name}></img>
        <div className="item-data">
          <div className="item-title">{name}</div>
          <div className="item-country">{content}</div>
          <div className="item-price">{price}</div>
        </div>
      </Link>
    );
  }
  
};

export default CoffeeItem;