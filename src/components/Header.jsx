import React from "react";
import AddToCart from "./AddToCart";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="NovaShop Logo" className="logo-img" />
          <span className="logo-text">NovaShop</span>
        </Link>

        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive("/") && location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/men" 
            className={`nav-link ${isActive("/men") ? "active" : ""}`}
          >
            Men
          </Link>
          <Link 
            to="/women" 
            className={`nav-link ${isActive("/women") ? "active" : ""}`}
          >
            Women
          </Link>
          <Link 
            to="/kids" 
            className={`nav-link ${isActive("/kids") ? "active" : ""}`}
          >
            Kids
          </Link>
        </nav>

        <AddToCart />
      </header>
    </>
  );
}

export default Header;
