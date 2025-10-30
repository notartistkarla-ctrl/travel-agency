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
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Banner from "./components/Banner";
import { Helmet } from "react-helmet";

export default function App(){
  return (
    <div className="app">
      <Helmet>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <Header />
      <Banner />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tours" element={<Tours />}/>
          <Route path="/tours/:id" element={<TourDetails />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
