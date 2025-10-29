import React from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact container">
      <h1>Kontakt</h1>
      <p className="muted">Imate pitanja? Pošaljite nam poruku putem forme!</p>
      <ContactForm />
      <div className="box">
        <h3>Podaci</h3>
        <p>info@travel.agency.hr</p>
        <p>091 123 4567</p>
        <p>Ulica Grada Vukovara 101</p>
        <p>Radno vrijeme: pon-pet od 09.00 do 17.00</p>
      </div>
    </section>
  );
}
