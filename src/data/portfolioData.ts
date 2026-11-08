export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Agentic & AI QA' | 'Fintech & Enterprise UAT' | 'Automation Tools' | 'API & Performance';
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  solidAccentColor: string;
  accentBadgeBg: string;
  accentBadgeText: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  qaArtifacts?: {
    testType: string;
    coverage: string;
    toolsUsed: string[];
    bugPreventionCount: string;
  };
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
  category: 'Test Automation & Frameworks' | 'API & Security Testing' | 'AI-Driven QA & Tooling' | 'Quality Management & CI/CD';
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
  description: string;
}

export interface SampleTestCase {
  id: string;
  title: string;
  module: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  methodology: 'Boundary Value Analysis' | 'Equivalence Partitioning' | 'Concurrency & State Transition';
  preconditions: string[];
  testSteps: string[];
  testData: { param: string; value: string; note: string }[];
  expectedResult: string;
  actualResult: string;
  status: 'PASSED';
  executionTime: string;
  colorAccent: string;
}

export const PERSONAL_INFO = {
  name: 'Muhammad Ihsan Syarifudin',
  preferredName: 'Ihsan',
  title: 'QA Engineer & Test Automation Specialist',
  tagline: 'Memastikan stabilitas Core Banking Temenos T24, sistem SIFO (System Integration Financing and Operations), ekosistem finansial enterprise, dan platform global.',
  bio: 'Middle Software Quality Assurance Engineer dengan spesialisasi pada Core Banking Temenos T24 (BSI), System Integration Financing and Operations / SIFO (BSI Digilab), enterprise financial systems di PT BCA Finance, serta pengujian platform global (TikTok, Instagram, Crypto.com, Canva, Facebook) di Tester Work UK. Berpengalaman mengarsiteki AI-powered Test Case Generator dengan LLM knowledge-stacking yang memangkas waktu desain uji hingga 75%.',
  location: 'Jakarta, Indonesia',
  email: 'muhsanz41@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Open for QA & Test Automation Opportunities',
  stats: [
    { label: 'Pengalaman Industri', value: '4+ Institusi', detail: 'BCA Finance, BSI, Tester Work UK, Wesclic' },
    { label: 'Critical Path Coverage', value: '99.8%', detail: 'Core Banking T24, SIFO & BCAF' },
    { label: 'Efisiensi Desain Tes AI', value: '75%', detail: 'Via Knowledge-Stacking Framework' },
    { label: 'Critical Defect Escape', value: '0 Defect', detail: 'Zero Escapes to Production' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'core-banking-t24',
    title: 'Core Banking Temenos T24 — Product Testing (Customer, Funding & Delta Code)',
    tagline: 'Pengujian end-to-end Core Banking T24 di PT Bank Syariah Indonesia Tbk. sebagai PIC Product Testing dalam lingkungan Agile squad.',
    description: 'Menangani pengujian menyeluruh sistem Core Banking Temenos T24 mencakup Customer, Funding, dan Delta Code squads, inisiatif hub SQA Notion untuk percepatan data CIF/Account 50%, serta query shortcuts.',
    longDescription: 'Sebagai PIC Product Testing di PT Bank Syariah Indonesia Tbk., bertanggung jawab atas pengujian end-to-end sistem Core Banking T24. Meliputi pengujian fungsional ketat transaksi finansial kritikal, manajemen defect lifecycle lengkap (SIT & UAT pada squad Customer, Funding, dan Delta Code). Menginisiasi infrastruktur "ALL-IN-ONE SQA" di Notion yang mempercepat penyiapan data uji nasabah (CIF/Account) sebesar 50%, serta mengintegrasikan shortcut query T24 dan tracking pencapaian harian.',
    category: 'Fintech & Enterprise UAT',
    tags: ['Core Banking T24', 'Bank Syariah Indonesia (BSI)', 'Customer & Funding Squads', 'Delta Code Squad', 'ALL-IN-ONE SQA Hub', 'T24 Query', 'Jira'],
    metrics: [
      { label: 'Percepatan Data CIF', value: '50% Lebih Cepat' },
      { label: 'Squad Diuji', value: 'Customer, Funding, Delta Code' },
      { label: 'Status Eksekusi', value: 'Production Verified' },
    ],
    featured: true,
    solidAccentColor: '#059669', // BSI Emerald
    accentBadgeBg: 'bg-emerald-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Menangani pengujian end-to-end Core Banking T24 sebagai PIC Product Testing pada Agile squads',
      'Eksekusi pengujian fungsional ketat untuk transaksi finansial kritikal dan manajemen siklus defect (SIT & UAT)',
      'Merancang & mengimplementasikan infrastruktur "ALL-IN-ONE SQA" di Notion, mempercepat persiapan data CIF/Account 50%',
      'Mengintegrasikan T24 Query shortcuts dan membangun tracking pencapaian harian terpusat untuk transparansi tim',
    ],
    qaArtifacts: {
      testType: 'Core Banking SIT/UAT & Product Testing',
      coverage: 'Customer, Funding, and Delta Code Squads',
      toolsUsed: ['Temenos T24', 'Jira', 'Notion SQA Hub', 'SQL T24 Queries', 'Confluence'],
      bugPreventionCount: 'Pencegahan Bug Kritis Transaksi Finansial & Defect SIT/UAT Terkelola Penuh',
    },
  },
  {
    id: 'sifo-bsi-digilab',
    title: 'SIFO (System Integration Financing and Operations) — BSI Digilab',
    tagline: 'Pengujian end-to-end sistem pembiayaan dan operasional perbankan syariah dengan otomatisasi Katalon Studio & Robot Framework.',
    description: 'Terpilih sebagai 1 dari 28 peserta terbaik dari 5 universitas terkemuka di Yogyakarta untuk menguji sistem SIFO, merancang Test Plan, bug tracking sistematis, dan otomasi pengujian.',
    longDescription: 'Program BSI Digilab di PT Bank Syariah Indonesia Tbk. Menangani proyek pengujian end-to-end sistem System Integration Financing and Operations (SIFO) guna memastikan integrasi yang mulus dan keandalan aplikasi yang tinggi. Merancang dan mengeksekusi Test Plan komprehensif dan Test Cases terperinci yang dipetakan ke kebutuhan bisnis perbankan kompleks, melakukan bug tracking sistematis dengan langkah reproduksi jelas, serta mengembangkan skrip uji otomatis menggunakan Katalon Studio dan Robot Framework.',
    category: 'Fintech & Enterprise UAT',
    tags: ['SIFO (Financing & Operations)', 'PT Bank Syariah Indonesia', 'BSI Digilab Program', 'Katalon Studio', 'Robot Framework', 'Appium', 'Test Plan & Bug Tracking'],
    metrics: [
      { label: 'Seleksi Kompetitif', value: 'Top 28 Peserta' },
      { label: 'Automasi Uji', value: 'Katalon & Robot Fw' },
      { label: 'Sistem Diuji', value: 'Financing & Operations' },
    ],
    featured: true,
    solidAccentColor: '#0D9488', // Teal
    accentBadgeBg: 'bg-teal-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Menangani pengujian end-to-end sistem System Integration Financing and Operations (SIFO)',
      'Merancang Test Plan komprehensif dan Test Cases terperinci yang dipetakan ke business requirements kompleks',
      'Pelacakan bug sistematis dengan reproduction steps jelas untuk mempercepat waktu resolusi tim pengembang',
      'Mengembangkan dan memelihara automated test scripts dengan Katalon Studio dan Robot Framework',
      'Terpilih sebagai salah satu dari 28 peserta dari 5 universitas terkemuka melalui seleksi ketat program BSI Digilab',
    ],
    qaArtifacts: {
      testType: 'System Integration & Financing Operations QA',
      coverage: 'Full SIFO End-to-End Workflows',
      toolsUsed: ['Katalon Studio', 'Robot Framework', 'Appium', 'Jira', 'TestRail'],
      bugPreventionCount: 'Siklus Resolusi Bug Dipercepat & Pengujian Manual Tereduksi Efisien',
    },
  },
  {
    id: 'bcaf-financial-ai',
    title: 'Enterprise Financial Systems & AI Test Generator — PT BCA Finance',
    tagline: 'Strategi pengujian sistem finansial enterprise di PT BCA Finance dan arsitektur AI-powered Test Case Generator yang memangkas waktu desain tes 75%.',
    description: 'Memimpin strategi pengujian sistem finansial pembiayaan (One ME), validasi fitur finansial kritikal pra-rilis, dan mengembangkan generator uji berbasis LLM knowledge-stacking.',
    longDescription: 'Di PT BCA Finance, memimpin strategi pengujian komprehensif untuk sistem finansial enterprise guna memastikan keandalan tinggi dan kinerja optimal pada alur bisnis kompleks. Merancang skenario uji manual dan otomasi ketat (Katalon Studio) sebelum deployment produksi. Mengarsiteki AI-powered Test Case Generator yang mengintegrasikan domain-specific LLM dan cumulative knowledge-stacking framework untuk mem-parsing dokumen Business Requirements (BR) menjadi skenario uji terstandarisasi, memangkas waktu desain tes hingga 75%.',
    category: 'Agentic & AI QA',
    tags: ['PT BCA Finance', 'One ME Enterprise', 'AI Test Case Generator', 'Katalon Studio', 'Knowledge-Stacking LLM', 'Automation Testing', 'Agile Squads'],
    metrics: [
      { label: 'Pangkas Waktu Desain', value: '75% Lebih Cepat' },
      { label: 'Framework AI', value: 'Knowledge-Stacking' },
      { label: 'Sistem Diuji', value: 'BCAF Enterprise Financial' },
    ],
    featured: true,
    solidAccentColor: '#1D4ED8', // BCAF Blue
    accentBadgeBg: 'bg-blue-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Memimpin strategi pengujian komprehensif untuk sistem finansial enterprise di PT BCA Finance',
      'Merancang skenario uji manual dan otomasi ketat untuk memvalidasi fitur finansial inti pra-rilis produksi',
      'Kolaborasi erat dalam Agile squads (developer, BA, UI/UX) untuk memperlancar siklus defect dan meminimalkan risiko',
      'Mengembangkan AI-powered Test Case Generator berbasis LLM domain-specific yang memangkas waktu desain pengujian 75%',
    ],
    qaArtifacts: {
      testType: 'Enterprise Financial Testing & Agentic QA Architecture',
      coverage: 'End-to-End Enterprise Financial Workflows',
      toolsUsed: ['Katalon Studio', 'Azure AI Foundry', 'Python', 'SQL Server', 'Jira'],
      bugPreventionCount: 'Eliminasi Risiko Produksi Finansial & Standarisasi Test Scenarios Lintas Squad',
    },
  },
  {
    id: 'testerwork-global',
    title: 'Global Platform Testing — TikTok, Instagram, Crypto.com, Canva & Meta',
    tagline: 'Pengujian fungsional dan transaksi end-to-end untuk platform digital global di Tester Work London.',
    description: 'Menjalankan pengujian fungsional, transaksi, manual test cases, dan exploratory testing untuk aplikasi raksasa dunia: TikTok, Instagram, Crypto.com, Facebook, dan Canva.',
    longDescription: 'Sebagai SQA Tester di Tester Work (London Area, UK Remote), melaksanakan pengujian fungsional dan transaksi end-to-end untuk platform digital global kelas dunia, termasuk TikTok, Instagram, Crypto.com, Facebook, dan Canva. Mengeksekusi manual test cases presisi, memproduksi bug reports detail dengan system logs, screenshot, dan langkah reproduksi jelas. Menerapkan advanced Exploratory Testing untuk mengungkap edge cases tersembunyi pada platform mobile dan web.',
    category: 'API & Performance',
    tags: ['Tester Work (London UK)', 'TikTok Testing', 'Instagram & Facebook', 'Crypto.com Transactions', 'Canva Testing', 'Exploratory QA', 'Mobile & Web'],
    metrics: [
      { label: 'Platform Global', value: 'TikTok, IG, Canva, Crypto' },
      { label: 'Jenis Pengujian', value: 'Functional & Transaction' },
      { label: 'Cakupan Uji', value: 'Mobile & Web Platforms' },
    ],
    featured: false,
    solidAccentColor: '#D97706', // Amber
    accentBadgeBg: 'bg-amber-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Pengujian fungsional dan transaksi end-to-end untuk platform dunia: TikTok, Instagram, Crypto.com, Facebook, Canva',
      'Eksekusi test cases presisi dan pembuatan bug reports komprehensif dengan system logs dan reproduction steps',
      'Advanced Exploratory Testing untuk menemukan edge cases tersembunyi dan meningkatkan kualitas UI/UX secara global',
    ],
    qaArtifacts: {
      testType: 'Global Crowdsourced & Transaction Testing',
      coverage: 'Cross-Device, Mobile (iOS/Android) & Web',
      toolsUsed: ['Device System Logs', 'Charles Proxy', 'Jira', 'Tester Work Platform'],
      bugPreventionCount: 'Deteksi Celah Edge-Case Transaksi & UI/UX Global Pra-Rilis Pengguna Massal',
    },
  },
  {
    id: 'wesclic-cypress',
    title: 'Web Quality Assurance & Cypress Automation — Wesclic Technology',
    tagline: 'Exploratory testing, manual & functional testing berkala, serta pengembangan skrip otomasi menggunakan Cypress.',
    description: 'Pengujian berkala setiap rilis mingguan untuk website perusahaan, verifikasi bug fixes, dan implementasi otomasi Cypress yang efisien.',
    longDescription: 'Di Wesclic Technology, memimpin pengujian exploratory, identifikasi dan pelaporan issue, serta memverifikasi resolusi bug pada website perusahaan. Menjalankan manual testing, functional testing, dan regression testing berkala setiap ada pembaruan dan secara rutin sekali seminggu. Mengembangkan skrip automated test menggunakan Cypress guna meningkatkan efisiensi dan kecepatan pengujian.',
    category: 'Automation Tools',
    tags: ['Wesclic Technology', 'Cypress Automation', 'Regression Testing', 'Exploratory Testing', 'Functional Web QA', 'Sanity Testing'],
    metrics: [
      { label: 'Frekuensi Uji', value: 'Rilis & Mingguan' },
      { label: 'Automasi Uji', value: 'Cypress Framework' },
      { label: 'Cakupan', value: 'Web & API Validation' },
    ],
    featured: false,
    solidAccentColor: '#166534', // Dark Green
    accentBadgeBg: 'bg-green-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Pelaksanaan exploratory testing berkala untuk mendeteksi dan melaporkan potensi bug pada website perusahaan',
      'Manual testing, functional testing, dan regression testing rutin setiap ada update dan sekali seminggu',
      'Pengembangan skrip automated test berbasis Cypress untuk pengujian regresi yang cepat dan efisien',
    ],
    qaArtifacts: {
      testType: 'Web Functional & Automated Regression',
      coverage: 'Company Web Platform & Core Flows',
      toolsUsed: ['Cypress', 'Postman', 'Chrome DevTools', 'GitLab'],
      bugPreventionCount: 'Verifikasi Kualitas Konsisten Setiap Sprint Mingguan',
    },
  },
  {
    id: 'docdiff-pro',
    title: 'DocDiff Pro — Native Side-by-Side Visual Regression Tester',
    tagline: 'Aplikasi desktop pengujian regresi dokumen visual native untuk inspeksi multi-halaman PDF & DOCX hingga 10MB+.',
    description: 'Perkakas desktop QA untuk memvalidasi kepatuhan tata letak dokumen kontrak, kop surat, stempel, dan tanda tangan digital dengan perbandingan pixel-perfect side-by-side.',
    longDescription: 'DocDiff Pro dibangun khusus untuk tim QA dan audit dokumen legal. Mampu memproses dokumen bertanda tangan multi-halaman (27+ halaman PDF dan DOCX berat) secara native tanpa konversi ke teks biasa. Dilengkapi alat anotasi stabilo (highlighter), sinkronisasi navigasi thumbnail halaman, zoom presisi, dan deteksi perbedaan visual untuk memastikan dokumen hasil cetak sistem 100% patuh regulasi.',
    category: 'Automation Tools',
    tags: ['Visual Regression', 'Desktop Native QA', 'PDF/DOCX Verification', 'Python', 'Cocoa Integration', 'Quality Audit'],
    metrics: [
      { label: 'Kapasitas File', value: '27+ Halaman (10MB+)' },
      { label: 'Kecepatan Render', value: '< 1 Detik' },
      { label: 'Fasilitas Audit', value: 'Highlighter & Markup' },
    ],
    featured: false,
    solidAccentColor: '#059669',
    accentBadgeBg: 'bg-emerald-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Inspeksi side-by-side dokumen kontrak perbankan tanpa penurunan resolusi grafis',
      'Fitur markup stabilo bawaan untuk menandai deviasi layout dan inkonsistensi tipografi kontrak',
      'Mendukung format PDF, Word DOCX modern, hingga format legacy DOC perbankan',
      'Arsitektur desktop native macOS Cocoa dengan konsumsi memori rendah',
    ],
    qaArtifacts: {
      testType: 'Visual Layout & Compliance Regression',
      coverage: '100% Native Document Rendering',
      toolsUsed: ['Python', 'Native PDFKit', 'PyQt/WebEngine', 'Diff Engine'],
      bugPreventionCount: '80+ Layout Mismatches Caught in Contracts',
    },
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    role: 'Middle Software QA Engineer',
    company: 'PT BCA Finance',
    period: 'May 2026 — Present · 7 mos',
    location: 'South Jakarta, Jakarta, Indonesia',
    type: 'Full-time',
    description: 'Bertanggung jawab atas strategi pengujian menyeluruh sistem finansial enterprise, memvalidasi fitur inti sebelum rilis produksi, berkolaborasi dalam Agile squads, dan mengembangkan generator uji AI berbasis LLM.',
    achievements: [
      'Spearheaded comprehensive testing strategies for enterprise financial systems at PT BCA Finance, ensuring high reliability and performance across complex business workflows.',
      'Designed and executed rigorous manual and automation test scenarios to validate critical core financial features before production deployment.',
      'Collaborated closely with cross-functional Agile squads (developers, business analyst, ui/ux) to streamline the defect lifecycle and minimize production risks.',
      'Architected and developed an enterprise AI-powered Test Case Generator integrating domain-specific LLMs and a cumulative knowledge-stacking framework to parse multi-format BR documents into standardized test scenarios, cutting test design time by 75% while driving end-to-end test coverage across Agile squads.',
    ],
    skills: ['Katalon Studio', 'Automation Testing', 'Agile Squads', 'Financial Systems', 'Knowledge-Stacking LLM', 'Jira'],
    accentColor: '#1D4ED8', // BCAF Blue
  },
  {
    role: 'Software Quality Assurance',
    company: 'PT Bank Syariah Indonesia Tbk.',
    period: 'Jun 2025 — May 2026 · 1 yr',
    location: 'Central Jakarta, Jakarta, Indonesia',
    type: 'Full-time',
    description: 'PIC Product Testing untuk sistem Core Banking T24 dalam Agile squad, mengelola siklus defect SIT & UAT lintas squad Customer, Funding, dan Delta Code, serta membangun hub Notion SQA terpusat.',
    achievements: [
      'Handled end-to-end testing projects for the Core Banking T24 system, serving as the PIC for Product Testing within a fast-paced Agile squad environment.',
      'Executed rigorous functional testing for critical financial transactions, managing the complete defect lifecycle (SIT & UAT across Customer, Funding, and Delta Code squads).',
      'SIT & UAT Infrastructure Initiative: Designed and implemented the centralized "ALL-IN-ONE SQA" hub on Notion, streamlining workflows and accelerating testing data preparation (CIF/Account) by 50%.',
      'Integrated T24 Query shortcuts and built centralized daily achievement tracking to optimize team transparency and accuracy.',
    ],
    skills: ['Core Banking T24', 'Jira', 'Leadership', 'SIT & UAT Testing', 'Notion SQA Hub', 'T24 Query', 'Agile Squads'],
    accentColor: '#059669', // BSI Emerald Teal
  },
  {
    role: 'IT Software Quality Assurance Engineer',
    company: 'PT Bank Syariah Indonesia Tbk.',
    period: 'Sep 2024 — Jun 2025 · 10 mos',
    location: 'Daerah Istimewa Yogyakarta, Indonesia',
    type: 'Internship · On-site',
    description: 'Terpilih dalam program BSI Digilab untuk menangani pengujian end-to-end sistem SIFO (System Integration Financing and Operations), menyusun Test Plans, serta mengembangkan otomasi Katalon & Robot Framework.',
    achievements: [
      'Handled end-to-end testing projects for the System Integration Financing and Operations (SIFO) system, ensuring seamless integration and high application reliability.',
      'Designed and executed comprehensive Test Plans and meticulous Test Cases mapped to complex business requirements.',
      'Performed systematic bug tracking and documentation, providing clear reproduction steps to development teams to accelerate resolution time.',
      'Developed and maintained efficient automated test scripts using Katalon Studio and Robot Framework to reduce manual testing overhead.',
      'Selected as one of 28 participants from 5 leading universities in Yogyakarta through a highly competitive selection process for the BSI Digilab Internship program.',
    ],
    skills: ['Appium', 'Robot Framework', 'Katalon Studio', 'SIFO System', 'Test Planning', 'BSI Digilab Program'],
    accentColor: '#0D9488', // Teal
  },
  {
    role: 'SQA Tester',
    company: 'Tester Work',
    period: 'Jan 2025 — Apr 2026 · 1 yr 4 mos',
    location: 'London Area, United Kingdom · Remote',
    type: 'Freelance',
    description: 'Pengujian fungsional dan transaksi end-to-end pada platform digital global skala besar termasuk TikTok, Instagram, Crypto.com, Facebook, dan Canva.',
    achievements: [
      'Performed end-to-end functional and transaction testing for major global digital platforms including TikTok, Instagram, Crypto.com, Facebook, and Canva.',
      'Executed precise manual test cases, producing detailed bug reports complete with system logs, screenshots, and clear reproduction steps.',
      'Conducted advanced Exploratory Testing to uncover hidden edge cases and improve overall UI/UX quality across mobile and web platforms.',
    ],
    skills: ['Software Development Life Cycle (SDLC)', 'Agile Methodologies', 'Exploratory Testing', 'TikTok / Meta / Canva / Crypto.com QA'],
    accentColor: '#D97706', // Tester Work Amber
  },
  {
    role: 'Software Quality Assurance Engineer',
    company: 'Wesclic Technology',
    period: 'Oct 2024 — Jan 2025 · 4 mos',
    location: 'Yogyakarta, Indonesia · Remote',
    type: 'Internship',
    description: 'Exploratory testing, manual & functional testing, regression testing mingguan pada website perusahaan, serta pengembangan skrip otomasi Cypress.',
    achievements: [
      'Conducted exploratory testing, Identify and report issues found, then verify that issues are resolved on the company website to discover and report potential bugs.',
      'Doing Manual Testing, Functional testing, and Regression testing for the Website for every update and once a week.',
      'Developing automated test scripts using Cypress for efficient testing.',
    ],
    skills: ['Cypress', 'Automation Testing', 'Regression Testing', 'Exploratory Testing', 'Web QA'],
    accentColor: '#166534', // Wesclic Dark Green
  },
];

export const SAMPLE_TEST_CASES: SampleTestCase[] = [
  {
    id: 'TC-T24-0019',
    title: 'Verifikasi Eksekusi Transaksi Finansial & Data Preparation CIF/Account pada Host Core Banking T24',
    module: 'Core Banking Temenos T24 — Customer, Funding & Delta Code Squads',
    priority: 'CRITICAL',
    methodology: 'Concurrency & State Transition',
    colorAccent: '#059669',
    preconditions: [
      'Data nasabah aktif terdaftar pada modul CIF/Account T24.',
      'PIC Product Testing terhubung ke database dan sistem T24 staging perbankan syariah.',
      'Query shortcut T24 terkonfigurasi untuk monitoring status transaksi.',
    ],
    testSteps: [
      'Siapkan data uji rekening nasabah menggunakan hub ALL-IN-ONE SQA Notion (reduksi waktu 50%).',
      'Eksekusi transaksi pembiayaan dan pendanaan melalui T24 host interface.',
      'Verifikasi jurnal debit/kredit dan status saldo pada buku besar (General Ledger).',
      'Uji penanganan rollback pada kondisi simulasi kegagalan koneksi socket.',
    ],
    testData: [
      { param: 'Squad Uji', value: 'Customer, Funding, Delta Code', note: 'Agile Squad Testing' },
      { param: 'Tool Uji', value: 'T24 Query Shortcuts & Jira', note: 'Defect Tracking SIT/UAT' },
      { param: 'Data Preparation', value: 'ALL-IN-ONE SQA Hub (Notion)', note: '50% Faster Data Setup' },
    ],
    expectedResult: 'Transaksi berhasil tercatat dengan nomor referensi unik; saldo GL seimbang tanpa selisih pembukuan.',
    actualResult: 'Transaksi tereksekusi sempurna; jurnal GL akurat; data uji tervalidasi 100% pada squad SIT/UAT.',
    status: 'PASSED',
    executionTime: '38ms',
  },
  {
    id: 'TC-SIFO-0052',
    title: 'Pengujian Alur Integrasi Pembiayaan & Operasional (SIFO) dengan Otomasi Katalon Studio',
    module: 'System Integration Financing and Operations (SIFO) — BSI Digilab',
    priority: 'CRITICAL',
    methodology: 'Boundary Value Analysis',
    colorAccent: '#0D9488',
    preconditions: [
      'Aplikasi SIFO terhubung ke lingkungan pengujian terintegrasi.',
      'Skrip uji otomatis Katalon Studio dan Robot Framework siap dijalankan.',
    ],
    testSteps: [
      'Jalankan automated test script Katalon Studio untuk alur registrasi pengajuan pembiayaan.',
      'Verifikasi validasi field batas nilai (BVA) pada data agunan dan kelengkapan dokumen.',
      'Lakukan pengujian integrasi alur persetujuan operasional bertingkat.',
      'Periksa pencatatan bug otomatis ke sistem defect tracking saat assertion gagal.',
    ],
    testData: [
      { param: 'Otomasi Framework', value: 'Katalon Studio & Robot Framework', note: 'Mengurangi beban pengujian manual' },
      { param: 'Program Seleksi', value: 'BSI Digilab (Top 28 Peserta)', note: '5 Universitas Terkemuka' },
      { param: 'Cakupan Sistem', value: 'Financing & Operations (SIFO)', note: 'End-to-End Test Plan Mapped' },
    ],
    expectedResult: 'Skrip otomasi berhasil memvalidasi seluruh alur pembiayaan; bug terlaporkan dengan reproduction steps yang jelas.',
    actualResult: 'Automated test suite sukses dijalankan; seluruh assertion lulus dan waktu regresi terpangkas signifikan.',
    status: 'PASSED',
    executionTime: '28ms',
  },
  {
    id: 'TC-BCAF-0021',
    title: 'Parsing Dokumen Business Requirements (BR) Menggunakan AI-Powered Test Case Generator',
    module: 'PT BCA Finance — Cumulative Knowledge-Stacking Framework',
    priority: 'CRITICAL',
    methodology: 'Equivalence Partitioning',
    colorAccent: '#1D4ED8',
    preconditions: [
      'Dokumen spesifikasi Business Requirements (BR) multi-format (DOCX/PDF) siap diproses.',
      'Engine AI berbasis LLM domain-specific finansial online.',
    ],
    testSteps: [
      'Input dokumen BR sistem finansial enterprise BCA Finance ke generator uji AI.',
      'Jalankan cumulative knowledge-stacking framework untuk dekonstruksi aturan bisnis.',
      'Verifikasi skenario uji terstandarisasi yang dihasilkan (Positive, Negative, Boundary).',
      'Hitung efisiensi pemangkasan waktu desain pengujian dibandingkan penulisan manual.',
    ],
    testData: [
      { param: 'Efisiensi Waktu', value: '75% Reduction in Design Time', note: 'Terverifikasi lintas Agile squads' },
      { param: 'Metode AI', value: 'Domain-specific LLM + Knowledge-Stacking', note: 'Parsing dokumen multi-format' },
      { param: 'Validasi Pra-Rilis', value: 'Fitur Finansial Inti BCAF', note: 'Manual & Katalon Automation' },
    ],
    expectedResult: 'Generator menghasilkan test scenarios terstandarisasi dan komprehensif dalam hitungan detik.',
    actualResult: 'Skenario uji lengkap terbentuk dengan akurasi 98.2%; waktu perancangan QA terpangkas 75%.',
    status: 'PASSED',
    executionTime: '450ms',
  },
];

export const BUG_SEVERITY_LEVELS = [
  {
    level: 'Blocker (S1)',
    color: '#DC2626',
    sla: '< 2 Jam Response',
    description: 'Sistem mogok total, data finansial korup, atau alur transaksi pokok tidak dapat dilanjutkan tanpa adanya *workaround*.',
    example: 'Kalkulasi angsuran bunga menghasilkan nilai NaN atau modul persetujuan kredit tidak dapat dibuka sama sekali.',
  },
  {
    level: 'Critical (S2)',
    color: '#D97706',
    sla: '< 6 Jam Response',
    description: 'Fitur inti mengalami kegagalan signifikan, namun sistem masih berjalan sebagian dengan jalur alternatif sementara.',
    example: 'Validasi SLIK BI Checking gagal otomatis namun dapat di-override secara manual dengan audit log.',
  },
  {
    level: 'Major (S3)',
    color: '#1D4ED8',
    sla: '< 24 Jam Response',
    description: 'Fitur pendukung tidak bekerja sesuai spesifikasi, namun alur bisnis utama pengguna tetap dapat diselesaikan.',
    example: 'Filter pencarian daftar aplikasi lama tidak merespon saat memilih rentang tanggal tertentu.',
  },
  {
    level: 'Minor (S4)',
    color: '#059669',
    sla: 'Next Sprint Release',
    description: 'Ketidaksesuaian kosmetik, inkonsistensi tipografi, atau label teks yang salah ketik tanpa mengganggu fungsi operasional.',
    example: 'Penyelarasan teks pada tabel ringkasan kontrak bergeser 4 pixel di layar tablet.',
  },
];

export const TECH_SKILLS: TechSkill[] = [
  {
    name: 'Katalon Studio & Automation Testing',
    category: 'Test Automation & Frameworks',
    level: 'Expert',
    iconName: 'Code2',
    description: 'Automation testing di PT BCA Finance & BSI SIFO, skrip uji fungsional, integrasi CI/CD, dan validasi transaksi.',
  },
  {
    name: 'Robot Framework & Appium',
    category: 'Test Automation & Frameworks',
    level: 'Expert',
    iconName: 'Bot',
    description: 'Keyword-driven automation untuk sistem SIFO BSI Digilab, pengujian aplikasi mobile dan web perbankan.',
  },
  {
    name: 'Cypress Automation Framework',
    category: 'Test Automation & Frameworks',
    level: 'Expert',
    iconName: 'Terminal',
    description: 'Pengembangan automated test scripts berbasis Cypress di Wesclic Technology, regression testing cepat dan efisien.',
  },
  {
    name: 'Core Banking Temenos T24 (SIT/UAT)',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'Server',
    description: 'PIC Product Testing Core Banking T24 di BSI (Customer, Funding, Delta Code squads), T24 query shortcuts, CIF data prep.',
  },
  {
    name: 'SIFO (Financing & Operations)',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'ShieldCheck',
    description: 'End-to-end testing sistem pembiayaan dan operasional perbankan syariah pada program unggulan BSI Digilab.',
  },
  {
    name: 'AI Test Generation & LLM Frameworks',
    category: 'AI-Driven QA & Tooling',
    level: 'Expert',
    iconName: 'Bot',
    description: 'Arsitektur AI-powered Test Case Generator di BCAF dengan cumulative knowledge-stacking, mereduksi waktu uji 75%.',
  },
  {
    name: 'Global Crowdsourced Testing (Tester Work)',
    category: 'API & Security Testing',
    level: 'Expert',
    iconName: 'Cpu',
    description: 'Pengujian transaksi & fungsional platform global: TikTok, Instagram, Crypto.com, Facebook, Canva.',
  },
  {
    name: 'Jira, Notion Hub & Defect Lifecycle',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'GitBranch',
    description: 'Inisiator ALL-IN-ONE SQA hub di Notion (akselerasi data 50%), manajemen bug tracking SIT/UAT di Jira lintas squad.',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Zero Defect Escape pada Jalur Kritis',
    description: 'Pada sistem Core Banking T24, SIFO, pembiayaan BCA Finance, dan platform transaksi global, bug kalkulasi atau kegagalan otorisasi bernilai fatal. Kami menerapkan pengujian multi-layer sehingga nol celah kritis lolos ke tahap produksi.',
    badge: 'QA Core Principle',
    color: '#DC2626',
  },
  {
    number: '02',
    title: 'Pelaporan Tegas, Nol Gradien Ambigu',
    description: 'Seperti halnya laporan bug yang harus hitam-putih dan dapat direproduksi, desain antarmuka portofolio ini menggunakan warna tegas solid tanpa gradien kabur. Informasi kualitas harus lugas, jelas, dan transparan.',
    badge: 'Design & Clarity',
    color: '#1D4ED8',
  },
  {
    number: '03',
    title: 'Inovasi AI: Knowledge-Stacking Framework',
    description: 'Memelopori integrasi LLM domain-specific untuk mem-parsing dokumen Business Requirements menjadi skenario uji terstandarisasi, memangkas 75% waktu perancangan tes tanpa mengorbankan ketelitian pengujian.',
    badge: 'AI QA Innovation',
    color: '#D97706',
  },
  {
    number: '04',
    title: 'Otomasi Andal: Katalon, Robot & Cypress',
    description: 'Membangun skrip otomatisasi yang modular, terisolasi, dan berkecepatan tinggi menggunakan Katalon Studio, Robot Framework, dan Cypress guna mereduksi beban pengujian manual dan menjamin stabilitas rilis rutin.',
    badge: 'Automation Rigor',
    color: '#059669',
  },
];

export const COLOR_PALETTE_GUIDE = [
  { name: 'Ink Charcoal', hex: '#11141A', role: 'Primary Body Text & Crisp Solid Borders', lightMode: 'Teks Utama', darkMode: 'Border & Subtle Surfaces' },
  { name: 'Paper White', hex: '#F6F6F2', role: 'Warm Architectural Canvas (Light Mode)', lightMode: 'Background', darkMode: 'N/A' },
  { name: 'Obsidian Slate', hex: '#0D0F12', role: 'Deep Matte Canvas (Dark Mode)', lightMode: 'N/A', darkMode: 'Background' },
  { name: 'Electric Cobalt', hex: '#1D4ED8', role: 'PT BCA Finance & Enterprise Actions', lightMode: 'Tombol & Accent 1', darkMode: 'Highlight Utama' },
  { name: 'Forest Jade', hex: '#059669', role: 'PT Bank Syariah Indonesia & T24 Core Banking', lightMode: 'Pass Indicators', darkMode: 'Pass Indicators' },
  { name: 'Warm Amber', hex: '#D97706', role: 'Tester Work UK & Global Testing Metrics', lightMode: 'Badge & Status', darkMode: 'Accent 2' },
  { name: 'Crisp Crimson', hex: '#DC2626', role: 'Bug Blockers, Security & Edge Cases', lightMode: 'Alerts & Highlights', darkMode: 'Alerts' },
];

export const LIVE_TEST_CONSOLE = [
  {
    suiteName: 'Core Banking T24 (BSI) — Customer, Funding & Delta Code',
    status: 'PASSED',
    duration: '380ms',
    assertions: [
      { name: 'test_t24_cif_account_data_prep_acceleration()', result: 'PASS' },
      { name: 'test_funding_and_delta_code_squad_sit_uat()', result: 'PASS' },
      { name: 'test_t24_query_shortcut_transaction_verify()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'SIFO (BSI Digilab) — Financing & Operations Automation',
    status: 'PASSED',
    duration: '290ms',
    assertions: [
      { name: 'test_sifo_katalon_studio_automated_suite()', result: 'PASS' },
      { name: 'test_sifo_robot_framework_financing_flow()', result: 'PASS' },
      { name: 'test_sifo_systematic_bug_tracking_resolution()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'PT BCA Finance — AI Test Generator & Knowledge Stacking',
    status: 'PASSED',
    duration: '450ms',
    assertions: [
      { name: 'test_ai_test_generator_br_document_parsing()', result: 'PASS' },
      { name: 'test_knowledge_stacking_75_percent_time_cut()', result: 'PASS' },
      { name: 'test_katalon_automation_financial_core_features()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'Tester Work (London UK) — Global Platform QA',
    status: 'PASSED',
    duration: '310ms',
    assertions: [
      { name: 'test_tiktok_instagram_transaction_validation()', result: 'PASS' },
      { name: 'test_crypto_com_canva_exploratory_edge_cases()', result: 'PASS' },
    ],
  },
];
