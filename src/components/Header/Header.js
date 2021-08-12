import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Link to="/">
      <header id="header" className="header d-flex justify-between  py-2 w-100">
        <div className="container">
          <h2>
            Fake <span>Store</span>
          </h2>
        </div>
      </header>
    </Link>
  );
}

export default Header;
