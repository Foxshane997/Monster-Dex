import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/search" className="navbar-link">
            Search
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/user" className="navbar-link">
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
