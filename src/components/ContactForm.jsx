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
  const [touched, setTouched] = useState({}); // prati koja su polja dirana

  const validate = (formData = data) => {
    const e = {};

    if (!formData.name || formData.name.trim().length < 3) {
      e.name = "Unesite ime i prezime (minimalno 3 znaka)";
    }

    if (!formData.email) {
      e.email = "Unesite email";
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      e.email = "Email format nije ispravan";
    }

    if (!formData.topic) {
      e.topic = "Odaberite temu";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      e.message = "Poruka mora imati najmanje 10 znakova";
    }

    if (!formData.consent) {
      e.consent = "Potvrdite privolu";
    }

    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newData = {
      ...data,
      [name]: type === "checkbox" ? checked : value,
    };
    setData(newData);

    // Ako je polje već bilo "dirano", odmah provjeri njegovo stanje
    if (touched[name]) {
      const newErrors = validate(newData);
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const newErrors = validate(data);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(data);
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      topic: true,
      message: true,
      consent: true,
    });

    if (Object.keys(newErrors).length === 0) {
      alert("Poruka uspješno poslana!");
      setData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        consent: false,
      });
      setErrors({});
      setTouched({});
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
          onBlur={handleBlur}
          placeholder="npr. Ana Anić"
          id="name"
          className={errors.name && touched.name ? "field-error" : ""}
        />
        {errors.name && touched.name && (
          <small className="error">{errors.name}</small>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="npr. ana.anic@email.com"
          id="email"
          className={errors.email && touched.email ? "field-error" : ""}
        />
        {errors.email && touched.email && (
          <small className="error">{errors.email}</small>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">Mobitel (opcionalan)</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="npr. +385 99 123 4567"
          id="phone"
        />
      </div>

      <div className="field">
        <label htmlFor="topic">Tema</label>
        <select
          name="topic"
          value={data.topic}
          onChange={handleChange}
          onBlur={handleBlur}
          id="topic"
          className={errors.topic && touched.topic ? "field-error" : ""}
        >
          <option value="">--Odaberite opciju--</option>
          <option value="travel">Izlet</option>
          <option value="price">Cijene</option>
          <option value="schedule">Raspored</option>
          <option value="other">Ostalo</option>
        </select>
        {errors.topic && touched.topic && (
          <small className="error">{errors.topic}</small>
        )}
      </div>

      <div className="field">
        <label htmlFor="message">Poruka</label>
        <textarea
          name="message"
          id="message"
          value={data.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ovdje napišite poruku"
          className={errors.message && touched.message ? "field-error" : ""}
        ></textarea>
        {errors.message && touched.message && (
          <small className="error">{errors.message}</small>
        )}
      </div>

      <div className="field">
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            checked={data.consent}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.consent && touched.consent ? "field-error" : ""}
          />
          <span>Prihvaćam uvjete</span>
        </label>
        {errors.consent && touched.consent && (
          <small className="error">{errors.consent}</small>
        )}
      </div>

      <button type="submit" className="btn contact-btn">
        Pošalji
      </button>
    </form>
  );
}
