import { restaurantConfig } from "../config/restaurantConfig";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold block mb-3">Bizimle İletişime Geçin</span>
        <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-heading)]">Konum & İletişim</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass-panel p-8 rounded-3xl border border-[var(--border-color)] space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">Çalışma Saatleri</h3>
            <p className="text-[var(--text-muted)] font-light text-sm">{restaurantConfig.info.hours}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-semibold border border-[var(--accent)]/20">
              Pazartesi Günleri Kapalıyız
            </span>
          </div>

          <div className="border-t border-[var(--border-color)]/30 pt-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">Adres</h3>
            <p className="text-[var(--text-muted)] font-light text-sm">{restaurantConfig.info.address}</p>
          </div>

          <div className="border-t border-[var(--border-color)]/30 pt-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">Telefon</h3>
            <a href={`tel:${restaurantConfig.info.phone}`} className="text-[var(--accent)] font-semibold text-base hover:underline">
              {restaurantConfig.info.phone}
            </a>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-3xl border border-[var(--border-color)] h-full min-h-[300px] flex flex-col justify-center items-center text-center">
          <span className="text-4xl mb-4">🗺️</span>
          <h3 className="text-lg font-bold font-[var(--font-heading)] mb-2">Yol Tarifi Alın</h3>
          <p className="text-xs text-[var(--text-muted)] font-light mb-6 max-w-xs">Alsancak Kültür Mahallesi'ndeki restoranımıza haritalar üzerinden kolayca ulaşabilirsiniz.</p>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(restaurantConfig.info.address)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] text-xs uppercase font-bold tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            Google Maps'te Aç
          </a>
        </div>
      </div>
    </div>
  );
}