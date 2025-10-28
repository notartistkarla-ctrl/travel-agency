import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{new Date().getFullYear()} Travel Agency. Sva Prava Pridržana.</p>

        <nav className="footer-nav">
          <NavLink
            to="/"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Naslovnica
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            O nama
          </NavLink>
          <NavLink
            to="/faq"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            F.A.Q.
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}
