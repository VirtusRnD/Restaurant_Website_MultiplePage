import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

// Optional live theme switcher: set VITE_THEME_BACKEND_URL to turn it on (see .env.example).
const BACKEND_URL = import.meta.env.VITE_THEME_BACKEND_URL;
const CURRENT_SITE_ID = "restaurant-multipage";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(`${CURRENT_SITE_ID}-theme`);
    return savedTheme || "michelin-dark";
  });

  useEffect(() => {
    if (!BACKEND_URL) return;
    let socket;
    let unmounted = false;
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`, { signal: AbortSignal.timeout(5000) })
      .then((res) => res.json())
      .then((data) => {
        if (data.activeTheme) {
          setCurrentTheme(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && data.activeTheme) {
        setCurrentTheme(data.activeTheme);
      }
    };

    import("socket.io-client").then(({ io }) => {
      if (unmounted) return;
      socket = io(BACKEND_URL);
      socket.on("theme_changed", handleThemeChange);
    });

    return () => {
      unmounted = true;
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "THEME_CHANGE" && event.data.themeKey && event.data.siteId === CURRENT_SITE_ID) {
        setCurrentTheme(event.data.themeKey);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    localStorage.setItem(`${CURRENT_SITE_ID}-theme`, currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

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