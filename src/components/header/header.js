import React from "react";
import {Link} from "react-router-dom";
import "./header.sass";

const Header = () => {
  return(
    <div>
      <header>
        <ul className="header">
          <li className="header__item">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/logo/Logo.svg"} alt="logo"></img>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/our-coffee">
              Our coffee
            </Link>
          </li>
          <li className="header__item">
            <Link to="/pleasure">
              For you pleasure
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;