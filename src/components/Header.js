import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

// Header Component
const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={require("../assets/logo.png")} alt="BlossomBay Logo" className="logo-image" />
    </div>
    <nav className="nav">
      <Link to="/homepage">Home</Link>
      <a href="/birthday">Birthday</a>
      <a href="/bestseller">Bestseller</a>
      <a href="/sale">Sale</a>
      <Link to="/contactform">Contact Us</Link>
      
      
    </nav>
    <div className="icons">
      <FaSearch className="icon" />
      <FaUser className="icon" />
      <FaShoppingBag className="icon" />
    </div>
  </header>
);

export default Header;
