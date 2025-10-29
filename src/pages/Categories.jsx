import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/tours";
import "../components/TourCard.css";

export default function Categories()  {
    const categories = [... new Set(tours.map((t) => t.category))];

    return (
        <section className="categories container">
            <h1>Kategorije</h1>
            <div className="grid">
                {categories.map((t) => (
                    <div key={t} className="card">
                        <img src={`https://placehold.co/600x300?text=${encodeURIComponent(t)}`} />
                        <div className="card-body">
                            <h3>{t}</h3>
                            <p className="muted">Pregledaj izlete iz kategorije: {t}</p>
                            <Link to={`/tours?category=${encodeURIComponent(t)}`} className="btn">{t}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}