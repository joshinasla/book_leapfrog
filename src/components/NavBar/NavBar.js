import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <span className="nav-bar-content">
        <Link to="/" className="nav-bar-content-link">
          HOME
        </Link>
      </span>
      <span className="nav-bar-content">
        <Link to="/mybook" className="nav-bar-content-link">
          MY BOOK
        </Link>
      </span>
      <span className="nav-bar-content">
        <Link to="/search" className="nav-bar-content-link">
          SEARCH
        </Link>
      </span>
    </div>
  );
}

export default NavBar;
