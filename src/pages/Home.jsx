import React from "react";
import { Link } from "react-router-dom";
import TourCard from "../components/TourCard";
import { tours } from "../data/tours";

export default function Home() {
  const featured = [...tours].slice(0, 3);

  return (
    <section className="home">
      <div className="hero conteiner">
        <h1>Dobrodošli u Travel Agency</h1>
        <p>Najbolja ponuda izleta i avantura!</p>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/tours" className="btn">
          Pogledajte ponudu
        </Link>
        <Link to="/contact" className="btn" style={{ background: "#087f5b" }}>
          Kontaktirajte nas
        </Link>
      </div>
      <div>
        <h2>Izdvojeni izleti</h2>
        <div className="grid">
          {featured.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
      <div className="travelling">
        <h2>Zašto putovati s nama?</h2>
        <div className="grid">
          <div className="icon-box">
            <i class="fa-solid fa-suitcase icon"></i>
            <h3>Bezbrižnost</h3>
            <p>
              Vi samo spakirate kofere i opustite se! Mi se brinemo oko svih
              aranžmana putovanja kako biste imali nezaboravno iskustvo: avion,
              bus, rent-a-car, hotel, apartman, restoran, ture, plaže, lokalne
              aktivnosti i sve što Vam zatreba. Ipak ste Vi na odmoru!
            </p>
          </div>
          <div className="icon-box icon-border">
            <i class="fa-solid fa-bicycle icon"></i>
            <h3>Rekreacija</h3>
            <p>
              Imamo mnoštvo aktivnosti za Vas jer brinemo o Vašem zdravlju! Uz
              planinarenje i obilazak gradova, na svakom našem putovanju
              nastojimo odranizirati šetnje, radionice, čak i sportske
              aktivnosti nakon čega Vam omogućuje spa tretman u lokalnim
              Wellness centrima.
            </p>
          </div>
          <div className="icon-box">
            <i class="fa-solid fa-champagne-glasses icon"></i>
            <h3>Božanstveni okusi</h3>
            <p>
              Vodimo Vas u najbolje lokalne restorane gdje ćete uživati u
              odličnim jelima, vrhunskim vinima, domaćim proizvodima, i pogledu
              na grad! Omogućujemo Vam iskustvo uživanja u hrani uz zalazak
              sunca i većeri za pamćenje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
