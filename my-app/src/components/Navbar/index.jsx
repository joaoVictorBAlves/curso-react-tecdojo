// Navbar.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        {/* Sua logo aqui */}
        <Link to="/">
          Sell Everything
        </Link>
      </div>
      <ul className="Navbar-pagination">
        <li className={isPageActive("/") ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={isPageActive("/contact") ? "active" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className={isPageActive("/about") ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
