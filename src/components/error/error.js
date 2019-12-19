import React from "react";
import "./erorr.sass";

const Error = () => {
  return (
    <div>
      <img className="error-img" src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img>
    </div>
  );
};

export default Error;