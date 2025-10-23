import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { tours } from "../data/tours";
import TourCard from "../components/TourCard";
import "./Tours.css";

const sorts = [
  { value: "price-asc", label: "Cijela ⬆" },
  { value: "price-desc", label: "Cijela ⬇" },
  { value: "title-asc", label: "Cijela A-Z" },
];

export default function Tours() {
  const categories = [...new Set(tours.map((t) => t.category))];
  const destinations = [...new Set(tours.map((t) => t.destination))];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Svi");
  const [destination, setDestination] = useState("Svi");
  const [sort, setSort] = useState("price-asc");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlCat = searchParams.get("category");
    const urlQuery = searchParams.get("query");
    const urlDest = searchParams.get("destination");
    const urlSort = searchParams.get("sort");

    if (urlCat && urlCat !== "null") setCategory(decodeURIComponent(urlCat));
    if (urlQuery && urlQuery !== "null") setQuery(decodeURIComponent(urlQuery));
    if (urlDest && urlDest !== "null") setDestination(decodeURIComponent(urlDest));
    if (urlSort && urlSort !== "null") setSort(decodeURIComponent(urlSort));
  }, []);

  useEffect(() => {
    let params = {};
    if (category) params.category = category;
    if (query) params.query = query;
    if (destination) params.destination = destination;
    if (sort) params.sort = sort;

    setSearchParams(params, { replace: true });
  }, [query, category, destination, sort]);

  const filtered = useMemo(() => {
    let result = tours.filter(
      (t) =>
        (query ? t.title.toLowerCase().includes(query.toLowerCase()) : true) &&
        (category === "Svi" ? true : t.category === category) &&
        (destination === "Svi" ? true : t.destination === destination)
    );

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "title-asc")
      result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [query, category, destination, sort]);

  return (
    <section className="tours container">
      <h1>Izleti</h1>
      <div className="filters">
        <input
          type="text"
          className="search"
          placeholder="Pretraži po naslovu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="subfilters">
          {/* Filter kategorija izleta */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Svi">Svi</option>
            {categories.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {/* Filter distinacija izleta */}
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="Svi">Svi</option>
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {/* Sortiranje izleta */}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Prikaz rezultata pretraga */}
      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((t) => (
            <TourCard key={t.id} {...t} />
          ))}
        </div>
      ) : (
        <p className="muted">Nema rezultata za odabrane filtere</p>
      )}
    </section>
  );
}
