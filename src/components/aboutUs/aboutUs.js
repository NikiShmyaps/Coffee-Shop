import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./aboutUs.sass";

const Item = ({img, alt}) => {
  return (
    <div className="col-lg-4 offset-2">
      <img className="shop__girl" src={img} alt={alt}></img>
    </div>
  );
};

const AboutUs = ({title, img, pOne, pTwo}) => {
  const alt = img ?  title : null;
  const content = img ? <Item img={img} alt={alt}/> : null;
  const clazz = img ? "col-lg-4" : "col-lg-6 position";
  const classLine = img ? "line" : "empty";
  return(
    <section className="about">
      <div className="container">
        <div className="row">
          {content}
          <div className={clazz}>
            <div className="title">{title}</div>
            <img className="beanslogo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
            <div className="shop-text">
              <p>{pOne}</p>
              <p>{pTwo}</p>
            </div>
          </div>
        </div>
        <div className={classLine}></div>
      </div>
    </section>
  );
};

export default AboutUs;