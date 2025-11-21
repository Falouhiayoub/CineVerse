import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">CineVerse</Link>
      </h1>

      <div className="nav-links">
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
};


export default NavBar;

