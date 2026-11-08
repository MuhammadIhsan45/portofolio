# ⚡ Portofolio Muhammad Ihsan Syarifudin

Website portofolio rekayasa perangkat lunak modern dengan gaya **Architectural & Neo-Editorial Minimalism**: **100% Bebas Gradien (Zero Gradients)** dengan **Warna Solid Tegas** yang terkurasi, nyaman di mata (WCAG AAA compliant), dan sarat dengan karya rekayasa nyata.

---

## 🎨 Karakteristik Desain

1. **Nol Gradien (Zero-Gradient Rule)**:
   - Tidak menggunakan *linear-gradient*, *radial-gradient*, maupun *mesh-blur*.
   - Menggunakan warna murni solid yang berani: **Electric Cobalt (`#1D4ED8`)**, **Warm Amber (`#D97706`)**, **Forest Jade (`#059669`)**, **Crimson Red (`#DC2626`)**, dan **Ink Charcoal (`#11141A`)**.

2. **Tipografi & Garis Tegas (Crisp Geometric Borders)**:
   - Font Google modern: *Plus Jakarta Sans* (bodi teks yang ergonomis), *Space Grotesk* (judul editorial yang tegas), dan *JetBrains Mono* (presisi kode).
   - Solid drop shadow arsitektural (`shadow-[4px_4px_0px_#11141A]`) dengan micro-interactions saat kursor digerakkan.

3. **Dual Theme (Studio Light & Obsidian Dark)**:
   - Mode Terang: Warna kertas gipsum arsitektural (`#F6F6F2`) dengan permukaan kartu putih bersih (`#FFFFFF`).
   - Mode Gelap: Obsidian matte slate (`#0D0F12`) dengan kartu gelap struktural (`#16191F`).
   - Toggle instan tersimpan otomatis di `localStorage`.

4. **Showcase Proyek Nyata**:
   - **FinTrack AI**: Ledger perbankan & Gmail AI dengan Azure OpenAI GPT-4o.
   - **Hide Your Interview**: Desktop assistant dengan proteksi gaib native macOS Cocoa & Windows capture exclusion.
   - **Baydo AI & Agentic QA**: Otomasi analisis dokumen SRS & generator ribuan test cases.
   - **Auto Login & Form Filler**: Ekstensi browser Manifest V3 dengan 2FA TOTP generator.
   - **FigCraft**: Engine grafis kanvas performa tinggi berbasis Rust & Tauri.
   - **Homestay Platform**: Booking & property management system.

5. **Fitur Interaktif Tambahan**:
   - **Salin Email 1-Klik**: Disertai animasi selebrasi partikel konfeti warna solid.
   - **Modal Arsitektur Teknis**: Penjelasan mendalam logika sistem, metrik kinerja, dan stack dari setiap proyek.
   - **Palet Warna Interaktif**: Swatch warna dengan fitur 1-klik salin kode HEX.

---

## 🚀 Menjalankan Secara Lokal

Pastikan Anda telah menginstal **Node.js (>= 18)**.

```bash
# 1. Masuk ke direktori
cd "11. portofolio-ihsan"

# 2. Instal dependensi (jika belum)
npm install

# 3. Jalankan server pengembangan lokal
npm run dev
```

Buka browser Anda di `http://localhost:5173`.

---

## 📦 Build untuk Produksi

```bash
npm run build
```

Hasil build yang siap di-deploy (misalnya ke Vercel, Netlify, atau Cloudflare Pages) akan berada di dalam folder `dist/`.

---

## 🛠️ Stack Teknologi

- **Framework**: React 18 & Vite 5
- **Bahasa**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 3.4 (Custom Solid Palette & Shadow System)
- **Ikonografi**: Lucide React
- **Efek Interaktif**: Canvas Confetti
