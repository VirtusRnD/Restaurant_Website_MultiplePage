import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { restaurantConfig } from "../config/restaurantConfig";

export default function ReservationPage() {
  const [tableType, setTableType] = useState("standard");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("type") === "tasting") {
      setTableType("tasting");
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rezervasyon talebiniz alındı! Tarafınıza SMS ile onay iletilecektir.");
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen flex items-center justify-center">
      
      <div className="w-full glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden">
        
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-bold block mb-2 px-4 py-1.5 rounded-full glass-panel inline-block">
            Unutulmaz Bir Deneyim
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 text-[var(--text-main)]">Masa Rezervasyonu</h1>
          <p className="text-xs text-[var(--text-muted)]">{restaurantConfig.info.reservationNotice}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Adınız Soyadınız</label>
            <input 
              required 
              type="text" 
              placeholder="Adınız Soyadınız" 
              className="w-full neo-input px-5 py-3.5 rounded-xl text-sm transition-all" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Telefon Numarası</label>
            <input 
              required 
              type="tel" 
              placeholder="+90 (5XX) XXX XX XX" 
              className="w-full neo-input px-5 py-3.5 rounded-xl text-sm transition-all" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Tarih</label>
            <input 
              required 
              type="date" 
              className="w-full neo-input px-5 py-3.5 rounded-xl text-sm transition-all" 
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Masa Deneyimi Seçimi</label>
            <select 
              value={tableType}
              onChange={(e) => setTableType(e.target.value)}
              className="w-full neo-input px-5 py-3.5 rounded-xl text-sm transition-all cursor-pointer"
            >
              <option value="standard">Standart A'La Carte Masa (2-4 Kişi)</option>
              <option value="tasting">⭐ Şefin Tadım Masası (7 Aşamalı Özel Deneyim)</option>
              <option value="group">Grup & Özel Davet Masası (6+ Kişi)</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl neo-button text-xs uppercase tracking-widest cursor-pointer"
            >
              Rezervasyonu Onayla
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}