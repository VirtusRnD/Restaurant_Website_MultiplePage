import { Link } from "react-router-dom";
import { restaurantConfig } from "../config/restaurantConfig";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--border-color)] bg-[var(--bg-primary)] text-sm relative mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[var(--accent)] font-[var(--font-heading)]">
            {restaurantConfig.info.name}
          </h3>
          <p className="text-[var(--text-muted)] font-light text-xs leading-relaxed max-w-sm">
            {restaurantConfig.info.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-xs text-[var(--text-muted)]">
            <li><Link to="/about" className="hover:text-[var(--accent)]">Hikayemiz</Link></li>
            <li><Link to="/menu" className="hover:text-[var(--accent)]">Menü</Link></li>
            <li><Link to="/reservation" className="hover:text-[var(--accent)]">Rezervasyon</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--accent)]">İletişim</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-main)] mb-2">İletişim</h4>
          <p className="text-[var(--text-muted)] font-light text-xs">📍 {restaurantConfig.info.address}</p>
          <p className="text-xs">📞 <a href={`tel:${restaurantConfig.info.phone}`} className="text-[var(--accent)] font-semibold">{restaurantConfig.info.phone}</a></p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--border-color)]/30 text-center text-[11px] text-[var(--text-muted)] opacity-60">
        © 2026 {restaurantConfig.info.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}