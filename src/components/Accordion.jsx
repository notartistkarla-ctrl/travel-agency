import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button type="button" className="accordion-title" onClick={() => handleToggle(index)}>
            {item.question}
            <span>{open ? "-" : "+"}</span>
          </button>
          {openIndex === index && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const accordionItems = [
    {question: "Kako rezervirati izlet?", answer: "Izlet možete rezervirati preko kontakt forme ili putem poziva."},
    {question: "Koje su opcije plaćanja?", answer: "Platiti se može jednokratno ili do maksimalno 6 rata na Visa, Maestro ili MasteCard karticu."},
    {question: "Jesu li izleti sigurni?", answer: "Da, sva putovanja koja organiziramo su provjerena, podnosimo sve sigurnosne mjere za provedbu putovanja, a također je tu i stručno vodstvo manjih grupa putnika koje se brine za sigurnost."},
    {question: "Mogu li dobiti račun?", answer: "Da, račune Vam dostavljamo putem maila ukoliko je to način rezervacije putovanja ili uživo u našoj poslovnici. Ukoliko Vam je potreban R1 račun, molimo Vas da to naglasite unaprijed."},
    {question: "Što ako se izlet otkaže?", answer: "Ovisno o razlogu otkazivanja izleta, nudimo Vam opciju korištenja drugih izleta koje imamo u ponudi ili povrat uplaćenih sredstava."},
  ];

  return <Accordion items={accordionItems} />;
}