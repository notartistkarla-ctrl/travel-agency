import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Travel Agency</div>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
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
            to="/categories"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kategorije
          </NavLink>
          <NavLink
            to="/tours"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Izleti
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kontakt
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
    </header>
  );
}
