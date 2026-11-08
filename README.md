# 🧪 Portofolio Muhammad Ihsan Syarifudin — QA Engineer & Test Automation Specialist

Website portofolio resmi **Muhammad Ihsan Syarifudin** sebagai **Quality Assurance (QA) Engineer & Test Automation Specialist**, dirancang dengan gaya **Neo-Editorial & Architectural Minimalism**: **100% Bebas Gradien (Zero Gradients)** dengan **Warna Solid Tegas** yang terkurasi, nyaman di mata (WCAG AAA compliant), dan sarat dengan proyek pengujian enterprise nyata.

---

## 🎯 Spesialisasi & Domain Pengujian Utama

1. **Core Banking Temenos T24 — Financial Integration & Disbursement Engine**:
   - Pengujian integrasi Core Banking Temenos T24 pada level database dan host perbankan.
   - Verifikasi alur pencairan dana (*disbursement*), prosedur pembalikan transaksi (*reverse disbursement* via Stored Procedure), validasi rekening pinjaman (`corAccount` & `fntLoanApplication`), serta keseimbangan buku besar (*General Ledger*).
2. **SIFO (Sistem Informasi Front Office) — Branch Operations & Multi-Channel**:
   - Pengujian sistem operasional cabang untuk registrasi debitur, verifikasi fisik agunan kendaraan (No. Rangka, No. Mesin, BPKB), alokasi pengajuan antar `BranchId`, dan otorisasi *maker-checker-approver*.
3. **Enterprise UAT & Fintech Testing (BCA Finance One ME)**:
   - Pengujian alur pembiayaan kendaraan & multiguna dengan 15 modul operasional terintegrasi.
   - Verifikasi matematis algoritma bunga kredit, matriks persetujuan multi-role (*CMO, Branch Manager, Credit Analyst*), dan validasi BI Checking/SLIK.
4. **Agentic QA & AI Test Automation (Baydo AI)**:
   - Platform dekonstruksi otomatis dokumen spesifikasi (SRS, PRD, User Stories) berbasis Azure AI Foundry.
   - Ekstraksi skenario Boundary Value Analysis (BVA), Equivalence Partitioning (EP), dan generator dokumen DOCX/PDF siap uji.
5. **Visual Regression & Compliance Testing (DocDiff Pro)**:
   - Pengujian regresi dokumen visual native side-by-side untuk inspeksi dokumen kontrak multi-halaman (27+ halaman PDF dan DOCX berat) dengan alat stabilo & markup digital.
6. **Productivity & 2FA Test Automation (Chrome Extension v1.16.0)**:
   - Otomasi pengisian formulir dan generator token TOTP 2FA internal untuk mengeliminasi inefisiensi pengujian multi-akun pada environment Dev, Staging, dan UAT.

---

## 🎨 Karakteristik Desain: Nol Gradien & Warna Tegas

- **Zero-Gradient Rule**: Tidak menggunakan *linear-gradient*, *radial-gradient*, maupun efek *mesh-blur*.
- **Warna Solid Ergonomis**:
  - **Electric Cobalt (`#1D4ED8`)**: Aksen Core Banking T24, integrasi API, dan aksi navigasi.
  - **Warm Amber (`#D97706`)**: Penanda SIFO Front Office, efisiensi Agentic QA, dan metrik pengujian cabang.
  - **Forest Jade (`#059669`)**: Simbol status assertion *PASS*, verifikasi mutu, dan ketersediaan rekrutmen QA.
  - **Crimson Red (`#DC2626`)**: Penanda bug blocker, pengujian batas nilai (BVA), dan analisis celah keamanan.
  - **Ink Charcoal (`#11141A`)**: Garis batas geometris tegas (`border-2 border-ink-900`) dan *solid drop shadow* (`shadow-[4px_4px_0px_#11141A]`).
- **Dual Theme Support**: Mode terang *Paper Canvas* (`#F6F6F2`) & mode gelap *Obsidian Slate* (`#0D0F12`).

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# 1. Masuk ke direktori
cd "11. portofolio-ihsan"

# 2. Instal dependensi (jika belum)
npm install

# 3. Jalankan server lokal
npm run dev
```

Buka `http://localhost:5173` di browser Anda.

---

## 📦 Build untuk Produksi

```bash
npm run build
```

Hasil build yang siap di-deploy (misalnya ke Vercel, Netlify, atau Cloudflare Pages) akan berada di dalam folder `dist/`.
