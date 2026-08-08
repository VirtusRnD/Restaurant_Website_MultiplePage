import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { restaurantConfig } from "../config/restaurantConfig.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16 ${
        scrolled 
          ? "py-4 bg-[#070709]/75 backdrop-blur-2xl border-b border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-black tracking-widest text-[var(--accent)] font-[var(--font-heading)] hover:opacity-80 transition-opacity drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
        >
          {restaurantConfig.info.name}
        </Link>

        {/* Gezinti Bağlantıları */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold">
          {[
            { path: "/about", label: "Hikayemiz" },
            { path: "/tasting", label: "Tadım Masası" },
            { path: "/menu", label: "A'La Carte Menü" },
            { path: "/contact", label: "Konum & İletişim" },
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`transition-all duration-300 px-4 py-2 rounded-full ${
                isActive(item.path) 
                  ? "text-[var(--accent)] bg-[#070709] border border-[var(--accent)]/40 shadow-[inset_3px_3px_6px_#000,inset_-3px_-3px_6px_rgba(255,255,255,0.08)] font-bold" 
                  : "text-stone-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Rezarvasyon Butonu */}
        <Link 
          to="/reservation" 
          className="hidden sm:inline-block px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest neo-button cursor-pointer"
        >
          Masa Rezerve Et
        </Link>

      </div>
    </header>
  );
}