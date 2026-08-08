import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { restaurantConfig } from "../config/restaurantConfig.js";

export default function MenuPage() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (catId) => {
    setOpenCategory(openCategory === catId ? null : catId);
  };

  const alaCarteCategories = restaurantConfig.menuCategories.filter(
    (cat) => cat.id !== "tasting_menu"
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-5xl mx-auto relative">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <span className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold block mb-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 inline-block">
          Gastronomi Seçkisi
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-heading)] text-white">
          A'La Carte Menümüz
        </h1>
        <p className="text-xs text-[var(--text-muted)] font-light mt-3">
          Kategorilerin üzerine tıklayarak özel tariflerimizi ve fiyatlarını inceleyebilirsiniz.
        </p>
      </div>

      <div className="space-y-5 relative z-10">
        {alaCarteCategories.map((cat) => {
          const isOpen = openCategory === cat.id;
          const items = restaurantConfig.menuItems.filter((item) => item.category === cat.id);

          if (items.length === 0) return null;

          return (
            <div 
              key={cat.id} 
              className="bg-[#0a0a0d]/70 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/15 shadow-[12px_12px_30px_rgba(0,0,0,0.6),-6px_-6px_20px_rgba(255,255,255,0.02)] transition-all"
            >
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-white/5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg md:text-xl font-bold font-[var(--font-heading)] text-white">
                    {cat.name}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full font-sans font-semibold bg-white/5 border border-white/10 text-[var(--accent)] shadow-inner">
                    {items.length} Çeşit
                  </span>
                </div>
                <span className={`text-xl text-[var(--accent)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 border-t border-white/10 grid md:grid-cols-2 gap-6 bg-black/30">
                      {items.map((item) => (
                        <div 
                          key={item.id} 
                          className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl flex gap-4 items-center border border-white/10 shadow-[6px_6px_16px_rgba(0,0,0,0.4)] hover:border-[var(--accent)]/50 transition-all"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-md"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline mb-1">
                              <h4 className="font-bold text-sm font-[var(--font-heading)] text-white">{item.name}</h4>
                              <span className="text-xs font-bold text-[var(--accent)] shrink-0 ml-2">{item.price}</span>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] font-light leading-snug mb-2">
                              {item.description}
                            </p>
                            <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] text-[9px] px-2.5 py-0.5 rounded-md border border-[var(--accent)]/30">
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}