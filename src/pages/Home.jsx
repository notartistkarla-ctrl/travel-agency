import React from "react";
import { Link } from "react-router-dom";
import TourCard from "../components/TourCard";
import { tours } from "../data/tours";

export default function Home() {
    const featured = [...tours].slice(0,3);
    
    return (
        <section className="home">
            <div className="hero conteiner">
                <h1>Dobrodošli u Travel Agency!</h1>
                <p>Najbolja ponuda izleta i avantura</p>
            </div>
            <div style={{display:"flex", gap: 10}}>
                <Link to="/tours" className="btn">Pogledajte ponudu</Link>
                <Link to="/contact" className="btn" style={{background: "#087f5b"}}>Kontaktirajte nas</Link>
            </div>
            <div>
                <h2>Izdvojeni izleti</h2>
                <div className="grid">
                    {featured.map(t => 
                        <TourCard key={t.id} tour={t}/>
                    )}
                </div>
            </div>
        </section>
    )
}