import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    validate();
  };

  const validate = () => {
    const e = {};
    if (!data.name || data.name.trim().length < 3) {
      e.name = "Unesite ime i prezime (minimalno 3 znaka)";
    } else {
      delete e.name;
    }
    if (!data.email) {e.email = "Unesite email"} else {
      delete e.name;
    }
    if (data.email && !data.email.includes("@") && !data.email.includes("."))
      {e.email = "Email format nije ispravan"} else {
      delete e.name;
    }
    if (!data.topic) {e.topic = "Unesite temu"} else {
      delete e.name;
    }
    if (!data.message && data.message.trim().length < 10)
      {e.message = "Poruka mora imati najmanje 10 znakova"} else {
      delete e.name;
    }
    if (!data.consent) {e.consent = "Potvrdite privolu"} else {
      delete e.name;
    }
    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (validate()) {
      alert("Poruka je poslana. Uskoro ćemo Vam odgovoriti.");
      setData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        consent: false,
      });

      setErrors({});
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Ime i prezime</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. Ana Anić"
          id="name"
          className={errors.name ? "field-error" : ""}
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </div>
      <div className="field">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. ana.anic@email.com"
          id="email"
          className={errors.email ? "field-error" : ""}
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>
      <div className="field">
        <label htmlFor="name">Mobitel (opcionalan)</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. -385 99 123 4567"
          id="phone"
          className={errors.phone ? "field-error" : ""}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>
      <div className="field">
        <label htmlFor="topic">Tema</label>
        <select
          name="topic"
          value={data.topic}
          onChange={handleChange}
          onBlur={handleChange}
          id="topic"
          className={errors.topic ? "field-error" : ""}
        >
          <option value="">--Odaberite opciju--</option>
          <option value="travel">Izlet</option>
          <option value="price">Cijene</option>
          <option value="schedule">Raspored</option>
          <option value="other">Ostalo</option>
        </select>
        {errors.topic && <small className="error">{errors.topic}</small>}
      </div>
      <div className="field">
        <label htmlFor="message">Poruka</label>
        <textarea
          name="message"
          id="message"
          value={data.message}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Ovdje napišite poruku"
          className={errors.message ? "field-error" : ""}
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}
      </div>
      <div className="field">
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            checked={data.checked}
            onChange={handleChange}
            className={errors.consent ? "field-error" : ""}
          />
          <span>Prihvaćam uvjete</span>
        </label>
        {errors.consent && <small className="error">{errors.consent}</small>}
      </div>
      <button type="submit" className="btn" style={{marginTop: "22px"}}>
        Pošalji
      </button>
    </form>
  );
}
