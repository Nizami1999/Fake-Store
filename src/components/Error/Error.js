import React from "react";
import "./Error.css";
import errorImg from "../../images/error.jpeg";

function Error() {
  return (
    <div className="error">
      <h1>Something went wrong... Try again later, please</h1>
      <br />
      <div className="error-img">
        <img src={errorImg} alt="error-img" />
      </div>
    </div>
  );
}

export default Error;
