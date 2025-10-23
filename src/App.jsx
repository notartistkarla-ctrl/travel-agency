import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Categories from "./pages/Categories";
import TourDetails from "./pages/TourDetails";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tours" element={<Tours />}/>
          <Route path="/tours/:id" element={<TourDetails />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
