export const restaurantConfig = {
  theme: "michelin-dark",

  info: {
    name: "L'Étoile Fine Dining",
    tagline: "Gastronomi Sanatının Zirvesi",
    subtitle: "Michelin rehberindeki imza lezzetler, tutkuyla işlenen yerel mahsuller ve unutulmaz bir atmosfer.",
    phone: "+90 (232) 444 0 700",
    address: "Kültür Mah. Atatürk Cad. No:182, Alsancak / İzmir",
    hours: "Salı - Pazar: 17:30 - 23:30",
    reservationNotice: "Masalarımız için en az 2 gün önceden rezervasyon yapılması rica olunur.",
  },

  images: {
    heroBg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop",
    chefStory: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop",
    tastingBg: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop",
  },

  story: {
    title: "Mutfaktaki Tutku & Zanaat",
    chefName: "Şef Sarp Karadağ",
    description: "Ege Körfezi'nin zengin deniz ürünlerini ve mikro yerel üreticilerden aldığımız taze sebzeleri, Fransız moleküler mutfak teknikleriyle yeniden yorumluyoruz. Mutfaktaki felsefemiz; tabağa gelen her bileşenin kendi lezzetini saf ve en rafine haliyle hissettirmesidir.",
  },

  menuCategories: [
    { id: "tasting_menu", name: "⭐ Şefin 7 Aşamalı Tadım Menüsü 2026" },
    { id: "starters", name: "Başlangıçlar & Soğuk Mezetler" },
    { id: "soups", name: "Çorbalar & Bisque" },
    { id: "pasta", name: "Ev Yapımı Makarna & Risotto" },
    { id: "mains_meat", name: "Kırmızı Etler" },
    { id: "mains_seafood", name: "Deniz Ürünleri" },
    { id: "desserts", name: "Tatlılar" },
    { id: "drinks", name: "İmza Kokteyller" },
  ],

  menuItems: [
    // 🌟 TADIM MENÜSÜ İÇERİĞİ
    { id: 101, category: "tasting_menu", name: "01. Amuse-Bouche", price: "Dahil", description: "Ege Otlu Tarator & Çıtır Enginar Cipsi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop", tag: "1. Aşama" },
    { id: 102, category: "tasting_menu", name: "02. Ahtapot Carpaccio", price: "Dahil", description: "İnce dilimlenmiş Ege ahtapotu ve soğuk sıkım sızma zeytinyağı esansı.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop", tag: "2. Aşama" },
    { id: 103, category: "tasting_menu", name: "03. Istakoz Bisque", price: "Dahil", description: "Konyak köpüğü ve çıtır karides mantısı eşliğinde.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop", tag: "3. Aşama" },
    { id: 104, category: "tasting_menu", name: "04. Siyah Trüflü Tagliolini", price: "Dahil", description: "Taze el yapımı yumurtalı pasta ve taranmış siyah trüf mantarı.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop", tag: "4. Aşama" },
    { id: 105, category: "tasting_menu", name: "05. Misket Limonu Granita", price: "Dahil", description: "Damak ferahlatıcı biberiyeli ve misket limonlu sorbe.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop", tag: "5. Aşama" },
    { id: 106, category: "tasting_menu", name: "06. Dry-Aged Ribeye VEYA Tava Levrek", price: "Dahil", description: "Şefin özel pişirme teknikleriyle hazırlanan ana yemek seçeneği.", image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop", tag: "6. Aşama (Ana Seçim)" },
    { id: 107, category: "tasting_menu", name: "07. Valrhona Altın Çikolata Küresi", price: "Dahil", description: "Sıcak karamel dökümü ve taze frambuaz ile kapanış.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", tag: "7. Aşama (Tatlı)" },

    // A'LA CARTE YEMEKLER
    { id: 1, category: "starters", name: "Trüf Mantarlı & Safranlı Arancini", price: "460 ₺", description: "Piyemonte trüfü, arborio pirinci, safran emülsiyonu ve fırınlanmış parmesan çıtırı.", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop", tag: "Şefin İmzasından" },
    { id: 2, category: "starters", name: "İzmir Körfez Burrata", price: "520 ₺", description: "Konfi edilmiş çeri domatesler, fesleğen yağı, çam fıstığı kıtırı ve ev yapımı ekşi maya ekmeği.", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop", tag: "Taze & Organik" },
    { id: 3, category: "soups", name: "Istakoz Bisque & Konyak Köpüğü", price: "490 ₺", description: "Ağır ateşte çektirilmiş ıstakoz suyu, taze rezene, konyak emülsiyonu ve karides kıtırı.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop", tag: "Sıcak Çorba" },
    { id: 4, category: "pasta", name: "Siyah Trüflü Ev Yapımı Tagliolini", price: "640 ₺", description: "Taze yumurtalı makarna hamuru, artisan parmesan tereyağı ve taze taranmış siyah trüf.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop", tag: "El Yapımı" },
    { id: 5, category: "mains_meat", name: "28 Gün Dinlendirilmiş Ribeye Steak", price: "1.280 ₺", description: "Isırgan otlu patates püresi, karamelize arpacık soğan ve ilikli kemik suyu demi-glace sosu.", image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop", tag: "Dry-Aged" },
    { id: 6, category: "mains_meat", name: "Geleneksel İzmir Köfte", price: "680 ₺", description: "Fırınlanmış patates, çeri domates, tatlı biber ve taze kekikli özel domates sosu ile.", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop", tag: "Geleneksel Lezzet" },
    { id: 7, category: "mains_seafood", name: "Tava Levrek À La Plancha", price: "980 ₺", description: "Rezene konfi, enginar püresi, safranlı beyaz şarap sosu ve taze deniz fasulyesi.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop", tag: "Günlük Taze Balık" },
    { id: 8, category: "desserts", name: "Altın Yapraklı Valrhona Çikolata Küresi", price: "420 ₺", description: "%70 Bitter çikolata küresi, sıcak karamel dökümü, taze frambuaz ve fıstıklı dondurma.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", tag: "Gösterişli Sunum" },
    { id: 9, category: "drinks", name: "Tütsülenmiş Biberiyeli Negroni", price: "390 ₺", description: "Meşe odununda tütsülenmiş biberiye, özel üretim cin, tatlı vermut ve Campari.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop", tag: "İmza Kokteyl" },
  ]
};