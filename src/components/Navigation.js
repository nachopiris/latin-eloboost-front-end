import React from "react";
import { Link } from "react-router-dom";
import "./styles/navigation.css";

const Navigation = () => {
  return (
    <nav
      className="navbar fixed-top"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="container">
        <Link to="/" className="logo">
          <span className="first">latin</span>
          <span className="last">eloboost</span>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/comprar" className="nav-link text-white">
              Comprar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
