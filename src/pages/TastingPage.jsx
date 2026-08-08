import React from "react";
import { Link } from "react-router-dom";
import { restaurantConfig } from "../config/restaurantConfig";

export default function TastingPage() {
  const tastingItems = restaurantConfig.menuItems.filter(item => item.category === "tasting_menu");

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-6xl mx-auto relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="glass-panel rounded-3xl overflow-hidden grid lg:grid-cols-12 items-center mb-16 relative z-10">
        <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden shrink-0 min-h-[350px]">
          <img 
            src={restaurantConfig.images.tastingBg} 
            alt="Şefin Tadım Masası Atmosferi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)]" />
        </div>

        <div className="lg:col-span-7 p-8 md:p-12 text-center lg:text-left flex flex-col justify-center">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.35em] text-[var(--accent)] font-bold mb-4 glass-panel px-4 py-1.5 rounded-full">
              Özel Mutfak Deneyimi
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 leading-tight text-[var(--text-main)]">
            Şefin Tadım Masası 2026
          </h1>

          <p className="text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8">
            Şef Sarp Karadağ tarafından hazırlanan, Ege'nin mevsimsel mirasını Fransız moleküler teknikleriyle harmanlayan 7 aşamalı sürpriz gastronomi serüveni.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
            <div className="px-6 py-3.5 rounded-2xl glass-panel text-center lg:text-left w-full sm:w-auto">
              <span className="block text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">3.400 ₺</span>
              <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] block mt-0.5">Kişi Başı Tadım Menüsü</span>
            </div>

            <div className="px-6 py-3.5 rounded-2xl glass-panel text-center lg:text-left w-full sm:w-auto">
              <span className="block text-lg font-bold text-[var(--text-main)] font-[var(--font-heading)]">+ 1.800 ₺</span>
              <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] block mt-0.5">Sommelier Şarap Seçkisi</span>
            </div>
          </div>

          <div>
            <Link 
              to="/reservation?type=tasting" 
              className="inline-block w-full sm:w-auto px-8 py-4 rounded-full neo-button text-xs uppercase tracking-widest text-center cursor-pointer"
            >
              Tadım Masası Rezerve Et
            </Link>
          </div>
        </div>
      </div>

      {/* 7 Aşamalı Sunum Adımları */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] mb-8 text-center text-[var(--text-main)]">
          7 Aşamalı Gastronomi Akışı
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {tastingItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel p-6 rounded-2xl flex gap-5 items-center hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-md" />
              <div className="flex-1">
                <span className="inline-block bg-[var(--bg-primary)] text-[var(--accent)] text-[10px] px-3 py-1 rounded-full border border-[var(--accent)]/30 font-semibold mb-2">
                  {item.tag}
                </span>
                <h3 className="font-bold text-base font-[var(--font-heading)] mb-1 text-[var(--text-main)]">{item.name}</h3>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}