import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/tours";

export default function Home() {
    const featured = [...tours].slice(0,3);

    return (
        <section className="home">
            <div className="hero conteiner">
                <h1>Dobrodošli</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque placeat, ea quis aliquid esse dicta maxime ipsa voluptatem provident iure facere commodi quae. Porro praesentium molestiae, quod placeat exercitationem ut?</p>
            </div>
            <div style={{display:"flex", gap: 10}}>
                <Link to="/tours" className="btn">Svi izleti</Link>
                <Link to="/contact" className="btn" style={{background: "#087f5b"}}>Kontaktirajte nas</Link>
            </div>
            <div>
                <h2>Izdvojeni izleti</h2>
                <div className="grid">
                    {featured.map(t => (
                        <p>{t.title} {t.category}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}