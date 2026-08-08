import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { restaurantConfig } from "../config/restaurantConfig";

export default function HomePage() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start px-6 md:px-20 pt-20 overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${restaurantConfig.images.heroBg})` }}
      />
      <div 
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 20% 50%, rgba(7,7,9,0.92) 0%, rgba(7,7,9,0.7) 60%, rgba(7,7,9,0.85) 100%)" }}
      />

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl text-left">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-[6px_6px_16px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)] font-bold">
            {restaurantConfig.info.tagline}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight font-[var(--font-heading)] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-main)] via-[var(--text-main)] to-[var(--accent)] drop-shadow-2xl"
        >
          {restaurantConfig.info.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-[var(--text-muted)] font-light mb-10 leading-relaxed max-w-xl p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-inner"
        >
          {restaurantConfig.info.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-5 items-center"
        >
          <Link 
            to="/tasting" 
            className="px-8 py-4 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(255,255,255,0.2),0_0_30px_var(--accent-glow)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            ⭐ Tadım Masasını Keşfet
          </Link>
          <Link 
            to="/menu" 
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 text-[var(--text-main)] hover:bg-white/15 font-bold text-xs uppercase tracking-widest transition-all shadow-[6px_6px_16px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            A'La Carte Menü
          </Link>
        </motion.div>
      </div>
    </section>
  );
}