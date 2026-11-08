export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'AI & Systems' | 'Fullstack Web' | 'Desktop & Tools' | 'Automation';
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  solidAccentColor: string; // Solid hex color
  accentBadgeBg: string;
  accentBadgeText: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  accentColor: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend & UI' | 'Backend & Cloud' | 'AI & LLM Systems' | 'Systems & Tooling';
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Muhammad Ihsan Syarifudin',
  preferredName: 'Ihsan',
  title: 'Software Engineer & AI Systems Builder',
  tagline: 'Membangun aplikasi cerdas dengan performa tinggi, sistem AI terintegrasi, dan arsitektur perangkat lunak yang tangguh.',
  bio: 'Seorang Software Engineer yang berpengalaman dalam merancang dan mengeksekusi solusi end-to-end: mulai dari Fullstack Web (Next.js, React, TypeScript), AI & Agentic Systems (Azure OpenAI, LLM pipelines, autonomous QA), hingga Desktop Low-level APIs (Cocoa & Windows native hooks). Memiliki prinsip desain yang lugas, fungsional, dan presisi tinggi.',
  location: 'Indonesia',
  email: 'muhsanz41@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Open for Opportunities & High-impact Projects',
  stats: [
    { label: 'Proyek Selesai', value: '15+', detail: 'Web, AI, & Desktop apps' },
    { label: 'Fokus Utama', value: 'AI & Systems', detail: 'Agentic workflows & Fullstack' },
    { label: 'Clean Code Standard', value: '100%', detail: 'Tegas, modular, zero slop' },
    { label: 'Uptime & Reliability', value: '99.9%', detail: 'Production-ready architecture' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'fintrack-ai',
    title: 'FinTrack AI — Smart Financial & Gmail AI Ledger',
    tagline: 'Pelacak keuangan otomatis berbasis Azure OpenAI GPT-4o dengan sinkronisasi email transaksi perbankan & e-wallet Indonesia.',
    description: 'Mengubah email transaksi perbankan dan e-wallet mentah menjadi transaksi finansial terstruktur tanpa input manual, dilengkapi manajemen multi-rekening dan AI financial planner.',
    longDescription: 'FinTrack AI adalah platform keuangan pribadi cerdas yang mengintegrasikan Azure OpenAI GPT-4o untuk mem-parsing notifikasi mutasi perbankan Indonesia (BCA, Mandiri, BRI, BNI, Jago) serta e-wallet (GoPay, OVO, ShopeePay, DANA) langsung dari Gmail melalui protokol IMAP terenkripsi. Dilengkapi sistem proteksi sesi HMAC-SHA256, deteksi biaya admin transfer antar rekening, dan visualisasi arus kas instan tanpa perlu rekap manual.',
    category: 'AI & Systems',
    tags: ['Next.js 14', 'TypeScript', 'Azure OpenAI', 'GPT-4o', 'Tailwind CSS', 'Better-SQLite3', 'IMAP Engine'],
    metrics: [
      { label: 'Akurasi Parsing AI', value: '98.5%' },
      { label: 'Waktu Input Hemat', value: '10x Lebih Cepat' },
      { label: 'Dukungan Bank/Wallet', value: '8+ Provider' },
    ],
    featured: true,
    solidAccentColor: '#059669', // Emerald
    accentBadgeBg: 'bg-emerald-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Ekstraksi cerdas email perbankan menjadi data debit/kredit, nominal IDR, rekening asal/tujuan',
      'Proteksi penuh Google OAuth 2.0 & Next.js Edge Middleware dengan cookie HttpOnly',
      'Manajemen multi-dompet yang melacak transfer antar rekening tanpa menggelembungkan pengeluaran kotor',
      'AI Financial Goal Planner untuk menghitung estimasi alokasi tabungan masa depan',
    ],
  },
  {
    id: 'hide-your-interview',
    title: 'Hide Your Interview — Stealth Desktop Assistant',
    tagline: 'Aplikasi asisten layar yang 100% tidak tertangkap kamera share screen Zoom, Google Meet, Teams, dan Discord.',
    description: 'Aplikasi desktop cerdas berkecepatan tinggi yang memanfaatkan native OS display affinity API untuk menyembunyikan jendela dari screen share tanpa terdeteksi peserta lain.',
    longDescription: 'Hide Your Interview dikembangkan untuk para profesional yang membutuhkan referensi teknis saat live coding, presentasi penting, atau meeting intensif. Dibangun dengan memanfaatkan low-level API macOS Cocoa [NSWindow setSharingType:0] dan Windows SetWindowDisplayAffinity(WDA_EXCLUDEFROMCAPTURE), antarmuka aplikasi ini sepenuhnya di-exclude dari video stream platform meeting dan rekaman layar.',
    category: 'Desktop & Tools',
    tags: ['Desktop Engineering', 'macOS Cocoa API', 'Windows Native API', 'TypeScript', 'React', 'Low-level Hooks'],
    metrics: [
      { label: 'Stealth Invisibility', value: '100% Gaib' },
      { label: 'Screen Share Support', value: 'Zoom / Meet / Teams' },
      { label: 'Latency Overhead', value: '< 2ms' },
    ],
    featured: true,
    solidAccentColor: '#DC2626', // Crimson Red
    accentBadgeBg: 'bg-red-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Menggunakan native Apple Cocoa NSWindowSharingNone untuk proteksi perekaman macOS',
      'Menggunakan WDA_EXCLUDEFROMCAPTURE pada kernel Windows desktop capture',
      'Mode background tanpa jejak di Dock / Alt-Tab switcher untuk kenyamanan privasi total',
      'Antarmuka ringkas berkecepatan tinggi dengan navigasi keyboard shortcut terdedikasi',
    ],
  },
  {
    id: 'baydo-agentic-qa',
    title: 'Baydo & Agentic QA — AI Test Case Generator',
    tagline: 'Platform otomasi QA berbasis Azure AI Foundry untuk analisis SRS dan pembuatan ribuan test case otomatis.',
    description: 'Sistem generator skenario pengujian perangkat lunak berbasis AI enterprise yang memangkas waktu perencanaan QA dari hitungan hari menjadi menit.',
    longDescription: 'Baydo dirancang untuk menjembatani kesenjangan antara dokumen spesifikasi bisnis (SRS, User Story, PRD) dan tim Quality Assurance. Menggunakan pipeline Agentic LLM di atas Azure AI Foundry, platform ini membaca dokumen PDF/DOCX secara mendalam, mengekstrak edge cases, boundary values, dan menyusun ribuan test cases siap eksekusi dengan struktur standar industri.',
    category: 'AI & Systems',
    tags: ['Python', 'FastAPI', 'Azure AI Foundry', 'Agentic Workflow', 'Docker', 'Docx Parsing'],
    metrics: [
      { label: 'Efisiensi Waktu QA', value: '85% Pangkas Waktu' },
      { label: 'Coverage Edge Case', value: 'High Accuracy' },
      { label: 'Ekspor Dokumen', value: 'DOCX / PDF' },
    ],
    featured: true,
    solidAccentColor: '#D97706', // Bold Ochre / Amber
    accentBadgeBg: 'bg-amber-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Arsitektur Agentic QA untuk dekonstruksi fungsional dokumen spesifikasi yang kompleks',
      'Otomatisasi pengkategorian test case: Positive, Negative, Boundary, dan Security checks',
      'Engine generator dokumen DOCX otomatis dengan penomoran hirarkis dan format korporat',
      'Pipeline backend berkinerja tinggi menggunakan asynchronous Python & FastAPI',
    ],
  },
  {
    id: 'auto-login-filler',
    title: 'Auto Login & Form Filler — Smart Chrome Extension',
    tagline: 'Otomatisasi autofill dan autentikasi cerdas dengan generator 2FA TOTP terintegrasi.',
    description: 'Ekstensi browser berbasis Manifest V3 untuk efisiensi workflow login multi-akun dan pengisian form cepat yang aman dengan enkripsi lokal.',
    longDescription: 'Auto Login & Form Filler memecahkan hambatan repetisi pekerjaan developer dan QA tester yang harus login ke puluhan staging/production environment setiap hari. Dilengkapi engine 2FA TOTP internal, tool ini mampu mengisi username, password, dan memasukkan kode OTP secara otomatis dalam hitungan milidetik.',
    category: 'Automation',
    tags: ['Chrome Extension V3', 'TypeScript', 'Web Crypto API', 'TOTP Algorithm', 'DOM Scripting'],
    metrics: [
      { label: 'Versi Rilis', value: 'v1.16.0' },
      { label: 'Waktu Login', value: '< 1 Detik' },
      { label: 'Enkripsi Data', value: 'AES-GCM Local' },
    ],
    featured: false,
    solidAccentColor: '#6366F1', // Bold Indigo
    accentBadgeBg: 'bg-indigo-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Sistem generate kode OTP 2FA otomatis langsung disuntikkan ke kolom formulir',
      'Penyimpanan rahasia terenkripsi lokal tanpa transmisi data ke server luar',
      'Mendukung URL pattern matching untuk testing multi-domain dan dynamic forms',
    ],
  },
  {
    id: 'figcraft',
    title: 'FigCraft — Rust & Tauri Design Tooling',
    tagline: 'Eksplorasi canvas renderer performa tinggi berbasis Rust dan desktop windowing Tauri.',
    description: 'Arsitektur alat desain vektor modern yang memprioritaskan konsumsi memori rendah, kecepatan manipulasi grafis, dan stabilitas desktop native.',
    longDescription: 'FigCraft merupakan riset dan implementasi sistem kanvas interaktif yang dibangun menggunakan Rust di level core engine dan modern Web technology di layer UI. Menawarkan kapabilitas render elemen geometris berkinerja tinggi tanpa kompromi performa yang biasa dialami arsitektur berbasis browser biasa.',
    category: 'Desktop & Tools',
    tags: ['Rust', 'Tauri', 'Cargo', 'Canvas 2D', 'React', 'Desktop Architecture'],
    metrics: [
      { label: 'Memory Footprint', value: '< 60 MB' },
      { label: 'FPS Rendering', value: 'Smooth 60 FPS' },
      { label: 'Binary Size', value: 'Ultra Compact' },
    ],
    featured: false,
    solidAccentColor: '#1D4ED8', // Cobalt Blue
    accentBadgeBg: 'bg-blue-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Core logika komputasi grafis dan state ditangani secara aman oleh Rust',
      'IPC super cepat antara Rust backend dan web interface menggunakan Tauri',
      'Dukungan cross-platform native binary untuk macOS dan Windows',
    ],
  },
  {
    id: 'homestay-booking',
    title: 'Homestay Hub — Reservation & Property Engine',
    tagline: 'Sistem manajemen homestay dan reservasi real-time dengan multi-role dashboard.',
    description: 'Aplikasi pemesanan penginapan lengkap dengan sinkronisasi kalender ketersediaan kamar, verifikasi booking, dan panel administrasi pemilik properti.',
    longDescription: 'Dibangun untuk memberikan pengalaman reservasi yang mulus bagi tamu serta otomasi kontrol inventori kamar bagi pengelola properti. Menyediakan filter dinamis berbasis tanggal dan kapasitas, serta sistem konfirmasi pembayaran yang transparan.',
    category: 'Fullstack Web',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Server Actions', 'Responsive UI'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Mobile Responsive', value: '100%' },
      { label: 'Booking Flow', value: '3-Step Checkout' },
    ],
    featured: false,
    solidAccentColor: '#059669', // Emerald
    accentBadgeBg: 'bg-emerald-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Kalender kustom dinamis untuk pengecekan slot ketersediaan waktu nyata',
      'Dashboard manajemen pemilik homestay untuk pantau booking dan pendapatan',
      'Arsitektur SSR dan caching cerdas untuk loading page kilat',
    ],
  },
];

export const TECH_SKILLS: TechSkill[] = [
  {
    name: 'TypeScript & JavaScript',
    category: 'Frontend & UI',
    level: 'Expert',
    iconName: 'Code2',
    description: 'Strict type safety, modern ESNext features, asynchronous programming, modular architecture.',
  },
  {
    name: 'React & Next.js',
    category: 'Frontend & UI',
    level: 'Expert',
    iconName: 'Layout',
    description: 'App Router, Server Components, SSR/SSG, state management, optimal hydration, micro-interactions.',
  },
  {
    name: 'Tailwind CSS & Design Systems',
    category: 'Frontend & UI',
    level: 'Expert',
    iconName: 'Palette',
    description: 'Desain presisi tinggi, struktur warna tegas terkurasi, zero gradient, typography-driven layout.',
  },
  {
    name: 'Python & FastAPI',
    category: 'Backend & Cloud',
    level: 'Expert',
    iconName: 'Server',
    description: 'High-throughput async APIs, document parsing pipelines, background task processing, testing suites.',
  },
  {
    name: 'Azure AI Foundry & OpenAI GPT-4o',
    category: 'AI & LLM Systems',
    level: 'Advanced',
    iconName: 'Bot',
    description: 'Prompt engineering terstruktur, RAG, tool-calling agents, automated QA scenario extraction.',
  },
  {
    name: 'Node.js & Backend Architecture',
    category: 'Backend & Cloud',
    level: 'Advanced',
    iconName: 'Cpu',
    description: 'RESTful API design, authentication (OAuth2 / HMAC), IMAP email protocols, SQLite / Postgres.',
  },
  {
    name: 'Desktop & OS Native APIs',
    category: 'Systems & Tooling',
    level: 'Advanced',
    iconName: 'Terminal',
    description: 'macOS Cocoa APIs (NSWindow sharing modes), Windows API display affinity, Electron & Tauri.',
  },
  {
    name: 'Git, Docker & CI/CD',
    category: 'Systems & Tooling',
    level: 'Advanced',
    iconName: 'GitBranch',
    description: 'Containerization, reproducible environments, automated test pipelines, clean commit workflows.',
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer & AI Solutions Builder',
    company: 'Independent & Client Projects',
    period: '2023 — Sekarang',
    location: 'Remote / Indonesia',
    type: 'Full-time / Contract',
    description: 'Memimpin riset, pengembangan, dan penerapan aplikasi skala produksi yang memadukan kapabilitas AI generasi terbaru dengan arsitektur web modern dan sistem desktop native.',
    achievements: [
      'Merancang FinTrack AI yang mampu membaca notifikasi perbankan Indonesia dengan tingkat akurasi 98.5%.',
      'Mengembangkan Hide Your Interview menggunakan native OS calls untuk privasi share screen tanpa latency.',
      'Membangun sistem otomasi pengujian AI yang memangkas waktu penulisan test case tim hingga 85%.',
    ],
    skills: ['Next.js', 'Azure OpenAI', 'TypeScript', 'Python', 'FastAPI', 'Native OS APIs'],
    accentColor: '#1D4ED8',
  },
  {
    role: 'Fullstack & Automation Specialist',
    company: 'Technology & Enterprise Solutions',
    period: '2022 — 2023',
    location: 'Indonesia',
    type: 'Engineering',
    description: 'Membangun aplikasi internal korporat, dashboard analitik, dan perkakas otomatisasi browser untuk mengoptimalkan efisiensi operasional tim.',
    achievements: [
      'Mengembangkan browser extension v1.16.0 dengan sistem TOTP 2FA otomatis.',
      'Mengimplementasikan pipeline CI/CD dan pengujian otomatis untuk meminimalkan regression bugs.',
      'Meningkatkan performa load time aplikasi web hingga 60% melalui optimasi caching dan database indexing.',
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Browser Extensions', 'CI/CD'],
    accentColor: '#059669',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Warna Tegas, Nol Gradien',
    description: 'Keindahan visual datang dari proporsi layout yang seimbang, kontras yang berani, dan pilihan warna solid yang matang — bukan sekadar menabrakkan gradien blur yang mengaburkan fokus pembaca.',
    badge: 'Design Principle',
    color: '#1D4ED8',
  },
  {
    number: '02',
    title: 'Fungsi Sebelum Kosmetik',
    description: 'Kode yang baik adalah kode yang menyelesaikan masalah nyata dengan efisien. Performa kilat, navigasi yang intuitif, dan keandalan sistem selalu menjadi prioritas di atas efek yang tidak esensial.',
    badge: 'Engineering Core',
    color: '#D97706',
  },
  {
    number: '03',
    title: 'AI yang Bekerja Nyata',
    description: 'Mengintegrasikan model AI (LLM & Agentic Workflows) bukan sekadar gimmick chatbot, melainkan sebagai mesin automasi cerdas yang mengekstrak data kompleks dan menghemat ratusan jam kerja manusia.',
    badge: 'AI Philosophy',
    color: '#059669',
  },
  {
    number: '04',
    title: 'Presisi & Clean Architecture',
    description: 'Menerapkan type safety ketat, pemisahan dependensi yang bersih, dan standar pengujian komprehensif agar setiap sistem siap di-scale ke level enterprise tanpa technical debt.',
    badge: 'Code Integrity',
    color: '#DC2626',
  },
];

export const COLOR_PALETTE_GUIDE = [
  { name: 'Ink Charcoal', hex: '#11141A', role: 'Primary Body Text & Crisp Solid Borders', lightMode: 'Teks Utama', darkMode: 'Border & Subtle Surfaces' },
  { name: 'Paper White', hex: '#F6F6F2', role: 'Warm Architectural Canvas (Light Mode)', lightMode: 'Background', darkMode: 'N/A' },
  { name: 'Obsidian Slate', hex: '#0D0F12', role: 'Deep Matte Canvas (Dark Mode)', lightMode: 'N/A', darkMode: 'Background' },
  { name: 'Electric Cobalt', hex: '#1D4ED8', role: 'Primary Action & Technical Focus', lightMode: 'Tombol & Accent 1', darkMode: 'Highlight Utama' },
  { name: 'Warm Amber', hex: '#D97706', role: 'Metrics, Milestones, & Highlights', lightMode: 'Badge & Status', darkMode: 'Accent 2' },
  { name: 'Forest Jade', hex: '#059669', role: 'Success States & AI Production Badges', lightMode: 'Live Indicators', darkMode: 'Live Indicators' },
  { name: 'Crisp Crimson', hex: '#DC2626', role: 'Low-Level Security & Priority Badges', lightMode: 'Alerts & Highlights', darkMode: 'Alerts' },
];
