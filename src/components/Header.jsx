import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }
  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Travel Agency</div>

        <button
          type="button"
          className="menu-btn"
          onClick={toggleMenu}
        > 
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className={`nav ${open ? "open" : "closed"}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Naslovnica
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            O nama
          </NavLink>
          <NavLink
            to="/categories"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kategorije
          </NavLink>
          <NavLink
            to="/tours"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Izleti
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/faq"
            onClick={closeMenu}
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            F.A.Q.
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
