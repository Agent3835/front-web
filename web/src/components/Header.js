import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-page">
        <div className="logo-container">
          <img
            src={require("../assets/arctic-logo.png")}
            alt="Arctic Breeze Logo"
            className="main-logo"
          />
        </div>
        <div className="header-island">
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/installations" className="nav-link">
                  Hire our service
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
