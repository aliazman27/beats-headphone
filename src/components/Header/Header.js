import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <nav className="header">
      <div className="header-position">
        <Link className="header-text" to="/home">Home</Link>
        <Link className="header-text" to="/review">Review</Link>
        <Link className="header-text" to="/dashboard">DashBoard</Link>
        <Link className="header-text" to="/blogs">Blogs</Link>
        <Link className="header-text" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
