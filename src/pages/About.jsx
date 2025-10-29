import React from "react";
import founder from "../assets/team/founder.jpg";
import director from "../assets/team/director.jpg";
import manager from "../assets/team/manager.jpg";
import agent1 from "../assets/team/agent1.jpg";
import agent2 from "../assets/team/agent2.jpg";
import agent3 from "../assets/team/agent3.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about container">
      <h1>O nama</h1>
      <p>
        Travel Agency od 2005. organizira izlete i putovanja diljem svijeta.
        Naša misija je pružiti sigurna i nezaboravna putovanja prilagođena
        svakom putniku. Bilo da se radi o obiteljskom izletu, romantičnom
        putovanju ili solo avanturama, možete se osloniti na naše stručnjake.
      </p>
      <p>
        Od planinarenja do egzotičnih destinacija, s nama ste u rukama iskusnih
        vodića i provjerenih partnera.
      </p>
      <h2>Naše vrijednosti</h2>
      <ul>
        <li>Sigurnost i pouzdanost</li>
        <li>Pristupačne cijene</li>
        <li>Manje grupe i autentična iskustva</li>
      </ul>
      <h2>Naš tim</h2>
      <div className="grid">
        <div className="team">
          <img src={founder} />
          <h4>Ivan Ivić</h4>
          <p>Founder</p>
        </div>
        <div className="team">
          <img src={director} />
          <h4>Sara Sarić</h4>
          <p>Director</p>
        </div>
        <div className="team">
          <img src={manager} />
          <h4>Petar Petrić</h4>
          <p>Social media manager</p>
        </div>
        <div className="team">
          <img src={agent1} />
          <h4>Mihaela Mihalić</h4>
          <p>Travel agent</p>
        </div>
        <div className="team">
          <img src={agent2} />
          <h4>Igor Igorov</h4>
          <p>Travel agent</p>
        </div>
        <div className="team">
          <img src={agent3} />
          <h4>Ana Anić</h4>
          <p>Booking agent</p>
        </div>
      </div>
    </section>
  );
}
