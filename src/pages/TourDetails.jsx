import React from "react";
import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";
import "./TourDetails.css";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.filter((t) => t.id === Number(id))[0];

  if (!tour)
    return (
      <div className="container">
        <p>Izlet nije pronađen</p>
        <Link to="/tours">Natrag</Link>
      </div>
    );
  return (
    <section className="tour-detail container">
      <Link to="/tours" className="back-btn">
        {"Natrag na izlete"}
      </Link>
      <h1 className="title">{tour.title}</h1>
      <img
        src={tour.image}
        alt={tour.title}
      />
      <p className="muted">
        <span className="pill">{tour.category}</span>
        <span className="pill">{tour.destination}</span>
        <span className="pill">{tour.duration}</span>
      </p>
      <p>
        <strong>Cijena: {tour.price} €</strong>
      </p>
      <p>{tour.longDescription}</p>

      <h2>Što dobivate</h2>
      <ul>
        <li>Odmor i relaksaciju</li>
        <li>Bivanje u prirodi</li>
        <li>Prekid svakodnevne rutine</li>
      </ul>
      <h2>Termini</h2>
      <table>
        <thead>
          <tr>
            <th>Datum početka</th>
            <th>Cijena</th>
          </tr>
        </thead>
        <tbody>
          {tour.dates.map((d) => (
            <tr key={d}>
              <td>{d}</td>
              <td>{tour.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>
        <button
          type="button"
          className="btn sticky-btn"
          onClick={() => alert("Hvala! Uskoro ćemo Vam se javiti.")}
        >
          Rezerviraj!
        </button>
    </section>
  );
}
