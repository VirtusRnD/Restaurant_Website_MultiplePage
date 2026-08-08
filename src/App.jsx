import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { restaurantConfig } from "./config/restaurantConfig";
import "./styles/theme.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import TastingPage from "./pages/TastingPage"; 
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", restaurantConfig.theme);
  }, []);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen font-[var(--font-heading)] transition-colors duration-700 selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] flex flex-col justify-between relative overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[180px]" />
      </div>

      <Navbar />
      <ScrollToTop />

      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tasting" element={<TastingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}