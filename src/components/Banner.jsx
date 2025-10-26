import React from "react";
import { useLocation } from "react-router-dom";
import "./Banner.css"

export default function Banner() {
    const location = useLocation();

    let title = "";
    switch(location.pathname) {
        case "/": title="Naslovnica";
        break;
        case "/about": title="O nama";
        break;
        case "/categories": title="Kategorije";
        break;
        case "/tours": title="Izleti";
        break;
        case "/contact": title="Kontakt";
        break;
        case "/faq": title="F.A.Q.";
        break;
        default: title = "Putujmo zajedno!";
    }

    return (
    <section className="banner">
      <div className="banner-text-container">
        <h2 className="banner-text">{title}</h2>
      </div>
    </section>
  );
}
