import React from "react";
import "./currentCoffee.sass";

const CurrentCoffee = ({data}) => {
  const { name,country, url, price, description} = data;
  return (
    <div className="current-coffee-wrap">
      <img src={url} className="current-coffee-img" alt={name}></img>
      <div className="current-coffee-info">
        <div className="current-coffee-name">{name}</div>
        <div className="logo-wrap">
          <img className="beans-logo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
        </div>

        <div className="current-coffee-country">
          <span>Country: </span>
          {country}
        </div>
        <div className="current-coffee-descr">
          <span>Description: </span>
          {description}
        </div>
        <div className="current-coffee-price">
          <span>Price: </span>
          {price}
        </div>
      </div>
    </div>
  );
};

export default CurrentCoffee;