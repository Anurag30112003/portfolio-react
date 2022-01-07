import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
export const Header = () => {
  return (
    <nav className="nav">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/about">
        About
      </Link>
      <Link className="nav-item" to="/contact">
        Contact
      </Link>
    </nav>
  );
};
