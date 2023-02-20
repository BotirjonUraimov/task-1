import React from "react";
import logo from "../assets/icons/logo.png";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <img src={logo} alt="logo" />
        <ul className="navbar_items">
          <li className="navbar_item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar_item">
            <a href="#tour">Tours</a>
          </li>
          <li className="navbar_item">
            <a href="#hotel">Hotel</a>
          </li>
          <li className="navbar_item">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="navbar_item">
            <a href="#pages">Pages</a>
          </li>
          <li className="navbar_item">
            <a href="#blog">Blog</a>
          </li>
          <li className="navbar_item">
            <a href="#contact">Contact</a>
          </li>
          <li className="navbar_item">
            <a href="#login">Login</a>
          </li>
        </ul>
        <div className="btns">
          <button className="sign-up paragraph">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
