import React from "react";
import { Link } from "react-router-dom";
import "./footer.sass";

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <ul className="footer">
            <li className="footer__item">
              <Link to="/">
                <img src={process.env.PUBLIC_URL + "/logo/Logo_black.svg"} alt="logo"></img>
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/our-coffee">Our coffee</Link>
            </li>
            <li className="footer__item">
              <Link to="/pleasure">For your pleasure</Link>
            </li>
          </ul>
          <img className="beanslogo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;