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
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Naslovnica
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            O nama
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kategorije
          </NavLink>
          <NavLink
            to="/tours"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Izleti
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => {
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
