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
  tagline: 'Memastikan stabilitas sistem enterprise finansial, merancang framework test automation end-to-end, dan memelopori Agentic AI untuk otomasi pengujian perangkat lunak tanpa celah.',
  bio: 'Quality Assurance Engineer profesional yang berfokus pada keandalan sistem berskala besar. Berpengalaman memimpin pengujian UAT & integrasi pada aplikasi multifinance perbankan (BCA Finance One ME), merancang platform AI Test Case Generator berbasis Azure AI Foundry (Baydo), serta membangun perkakas otomasi internal untuk memangkas siklus rilis pengujian hingga 85% dengan tingkat defect escape nol pada fungsi kritikal.',
  location: 'Indonesia',
  email: 'muhsanz41@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Open for QA & Test Automation Opportunities',
  stats: [
    { label: 'Test Cases Dijalankan', value: '1,500+', detail: 'Manual & Automated Test Suites' },
    { label: 'Critical Path Coverage', value: '99.4%', detail: 'Fintech & Multi-role Approval' },
    { label: 'Efisiensi Siklus QA', value: '85%', detail: 'Via Agentic QA & AI Generator' },
    { label: 'Critical Defect Escape', value: '0 Defect', detail: 'Zero Escapes to Production' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'baydo-agentic-qa',
    title: 'Baydo & Agentic QA — Enterprise AI Test Case Generator',
    tagline: 'Platform otomasi QA berbasis Azure AI Foundry untuk dekonstruksi SRS dan pembuatan ribuan test case multi-skenario otomatis.',
    description: 'Sistem generator skenario pengujian perangkat lunak berbasis AI enterprise yang memangkas waktu perencanaan pengujian dari hitungan hari menjadi hitungan menit.',
    longDescription: 'Baydo adalah platform rekayasa pengujian inovatif yang memanfaatkan arsitektur Agentic LLM di atas Azure AI Foundry. Sistem ini secara otomatis mem-parsing dokumen spesifikasi teknis (SRS, PRD, User Story dalam format PDF/DOCX), mendeteksi aturan bisnis perbankan, dan men-generate ribuan test cases berstruktur formal (Positive, Negative, Boundary Value Analysis, Security checks) dengan output laporan DOCX/PDF berstandar korporat.',
    category: 'Agentic & AI QA',
    tags: ['Azure AI Foundry', 'Python FastAPI', 'Agentic QA Pipeline', 'Docx Generation', 'Docker', 'BVA / EP Testing'],
    metrics: [
      { label: 'Pemangkasan Waktu QA', value: '85% Lebih Cepat' },
      { label: 'Akurasi Ekstraksi BVA', value: '98.2%' },
      { label: 'Format Ekspor', value: 'DOCX & PDF Otomatis' },
    ],
    featured: true,
    solidAccentColor: '#D97706',
    accentBadgeBg: 'bg-amber-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Dekonstruksi otomatis modul bisnis kompleks menjadi test suites terstruktur hirarkis',
      'Penerapan Boundary Value Analysis (BVA) dan Equivalence Partitioning (EP) otomatis via LLM Agent',
      'Validasi integritas dokumen SRS hingga 200+ halaman dengan pelaporan gap requirements',
      'Export test case matrix ke format tabel DOCX berpenomoran native standar enterprise QA',
    ],
    qaArtifacts: {
      testType: 'Agentic QA & Test Case Generation',
      coverage: 'Full Functional & Boundary Coverage',
      toolsUsed: ['Azure AI Foundry', 'Python', 'FastAPI', 'Pandas', 'Docker'],
      bugPreventionCount: '120+ Requirement Ambiguities Caught Early',
    },
  },
  {
    id: 'bcaf-one-me',
    title: 'One ME (Mobile Entry) — Core Multifinance Enterprise UAT',
    tagline: 'Pengujian komprehensif sistem operasional pembiayaan otomotif PT BCA Finance dengan 15 modul multi-role terintegrasi.',
    description: 'Memimpin verifikasi UAT & Functional Testing untuk alur pengajuan kredit kendaraan: kalkulasi suku bunga, pre-screening SLIK/BI Checking, hingga approval matrix Branch Manager & Credit Analyst.',
    longDescription: 'One ME adalah aplikasi operasional inti BCA Finance yang menangani miliaran transaksi pembiayaan otomotif & multiguna. Pengujian mencakup verifikasi logika kalkulasi simulasi kredit (TDP, pokok hutang, tenor, suku bunga berjenjang), validasi matriks otorisasi persetujuan multi-role (Field Specialist, Branch Manager, Credit Analyst), penanganan bucket multichannel SHF, dan pengujian sinkronisasi API perbankan pada lingkungan UAT berkeamanan tinggi.',
    category: 'Fintech & Enterprise UAT',
    tags: ['Fintech Testing', 'UAT Multi-Role', 'Core Banking Verification', 'API Regression', 'Boundary Value Testing', 'SLIK Validation'],
    metrics: [
      { label: 'Modul Diuji', value: '15 Modul Operasional' },
      { label: 'Akurasi Kalkulasi Bunga', value: '100% Zero Tolerance' },
      { label: 'Critical Escapes', value: '0 Defect ke Prod' },
    ],
    featured: true,
    solidAccentColor: '#1D4ED8',
    accentBadgeBg: 'bg-blue-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Verifikasi matematis algoritma perhitungan kredit: Tenor 12-72 bulan, suku bunga flat/efektif, biaya asuransi',
      'Pengujian alur approval matrix bertingkat: CMO -> Branch Manager -> Credit Analyst -> Pencairan Dana',
      'Validasi penanganan edge-case: data konsumen ganda, blacklist checking, dan reject rationale tracking',
      'Pelaksanaan regression testing ketat pada setiap release cycle mingguan tanpa downtime transaksi',
    ],
    qaArtifacts: {
      testType: 'Enterprise UAT & Financial Functional Testing',
      coverage: '99.4% Critical Financial Paths',
      toolsUsed: ['Postman', 'JIRA', 'SQL Server / Oracle DB', 'TestRail', 'Confluence'],
      bugPreventionCount: '45+ Critical Financial Calculation Bugs Blocked',
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
    featured: true,
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
  {
    id: 'auto-login-filler',
    title: 'Auto Login & 2FA Form Filler — QA Productivity Extension',
    tagline: 'Ekstensi browser otomatisasi pengujian autentikasi dengan generator 2FA TOTP internal untuk pengujian multi-environment.',
    description: 'Memangkas waktu tester yang harus berulang kali login ke puluhan akun staging dan UAT dengan autofill otomatis dan injeksi kode OTP instan.',
    longDescription: 'Dalam siklus pengujian sistem multi-role perbankan, tester harus berganti akun antara CMO, BM, CA, dan Admin hingga ratusan kali sehari. Ekstensi ini (v1.16.0) mengotomasi pengisian form login dan men-generate token 2FA Time-based One-Time Password (TOTP) langsung di level browser tanpa ketergantungan pada aplikasi autentikator eksternal, menghemat 15+ menit waktu testing per jam.',
    category: 'Automation Tools',
    tags: ['Chrome Extension V3', 'TypeScript', 'Web Crypto API', 'TOTP Algorithm', 'DOM Scripting', 'Test Acceleration'],
    metrics: [
      { label: 'Versi Rilis', value: 'v1.16.0 (Production)' },
      { label: 'Waktu Login Tester', value: '< 1 Detik' },
      { label: 'Penghematan Waktu QA', value: '~2 Jam / Hari' },
    ],
    featured: false,
    solidAccentColor: '#DC2626',
    accentBadgeBg: 'bg-red-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Injeksi kode TOTP 2FA otomatis langsung ke input field tanpa copy-paste manual',
      'Penyimpanan profil kredensial akun uji terenkripsi lokal dengan kunci AES-GCM',
      'Mendukung URL pattern matching untuk testing multi-domain (Dev, Staging, UAT)',
    ],
    qaArtifacts: {
      testType: 'QA Workflow Automation',
      coverage: 'Authentication & Session Handling',
      toolsUsed: ['Chrome API', 'TypeScript', 'Crypto Engine'],
      bugPreventionCount: 'Zero OTP Timeout Session Failures',
    },
  },
  {
    id: 'fintrack-ai-verification',
    title: 'FinTrack AI — Automated Parsing & Financial Logic Test Suite',
    tagline: 'Suite pengujian menyeluruh untuk verifikasi model AI ekstraksi mutasi perbankan Indonesia dan integritas database likuiditas.',
    description: 'Pengujian ketat terhadap ekstraksi mutasi email bank (BCA, Mandiri, BRI, BNI) dan dompet digital (GoPay, OVO, ShopeePay) untuk mencegah salah catat nominal.',
    longDescription: 'Membangun skenario pengujian komprehensif untuk memvalidasi pipeline ekstraksi Azure OpenAI GPT-4o. Meliputi pengujian ketahanan terhadap email mutasi palsu, variasi format notifikasi transaksi bank, deteksi biaya admin transfer antar dompet tanpa menggelembungkan cashflow, serta validasi integritas transaksi database SQLite dengan konkurensi tinggi.',
    category: 'API & Performance',
    tags: ['AI Evaluation', 'Mutation Parsing Test', 'Edge-Case Testing', 'SQLite Validation', 'Next.js 14', 'Security Testing'],
    metrics: [
      { label: 'Akurasi Ekstraksi AI', value: '98.5% Verified' },
      { label: 'Dataset Uji Mutasi', value: '500+ Email Sampel' },
      { label: 'Uji Biaya Admin Bank', value: '100% Lolos Uji' },
    ],
    featured: false,
    solidAccentColor: '#059669',
    accentBadgeBg: 'bg-emerald-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Pengujian akurasi parsing regex + prompt evaluation untuk 8 provider bank dan e-wallet',
      'Stress testing konkurensi penulisan database transaksi lokal',
      'Verifikasi keamanan cookie HttpOnly dan token sesi HMAC-SHA256',
    ],
    qaArtifacts: {
      testType: 'AI Model Robustness & Financial Accuracy',
      coverage: '500+ Email Mutation Test Cases',
      toolsUsed: ['PyTest', 'Postman', 'Better-SQLite3', 'Jest'],
      bugPreventionCount: '30+ Currency Formatting Edge Cases Resolved',
    },
  },
  {
    id: 'homestay-e2e',
    title: 'Homestay Hub — End-to-End Reservation & Concurrency Suite',
    tagline: 'Pengujian E2E sistem reservasi real-time untuk pencegahan double-booking pada kalender penginapan.',
    description: 'Menjamin ketersediaan kamar dan integritas data pembayaran melalui skenario pengujian beban (*load testing*) dan simulasi booking serentak.',
    longDescription: 'Merancang test plan komprehensif untuk memverifikasi alur reservasi tamu dan administrasi pemilik homestay. Fokus utama adalah pengujian race condition saat beberapa pengguna memesan kamar yang sama pada detik yang bersamaan, verifikasi kalkulasi diskon musiman, serta pengujian responsivitas UI di berbagai perangkat mobile dan desktop.',
    category: 'API & Performance',
    tags: ['E2E Testing', 'Concurrency Test', 'PostgreSQL Locking', 'Responsive QA', 'Cross-browser'],
    metrics: [
      { label: 'Simulasi Concurrency', value: 'Zero Double-Booking' },
      { label: 'Cross-browser Pass', value: '100% Pass Rate' },
      { label: 'Lighthouse Score', value: '98/100 Tested' },
    ],
    featured: false,
    solidAccentColor: '#1D4ED8',
    accentBadgeBg: 'bg-blue-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Pengujian transaksi terisolasi database untuk memastikan tidak ada double-allocation kamar',
      'Pengujian kompatibilitas cross-browser: Chrome, Safari iOS, Firefox, Edge',
      'Uji performa waktu muat halaman di jaringan 3G/4G terbatas',
    ],
    qaArtifacts: {
      testType: 'E2E & Race Condition Testing',
      coverage: 'Full Reservation Lifecycle',
      toolsUsed: ['Playwright', 'Postman Newman', 'PostgreSQL'],
      bugPreventionCount: 'Pencegahan Bug Kritis Double Booking',
    },
  },
];

export const SAMPLE_TEST_CASES: SampleTestCase[] = [
  {
    id: 'TC-BCAF-0142',
    title: 'Validasi Batas Bawah Persentase Uang Muka (TDP) Skema Pembiayaan SHF',
    module: 'BCA Finance One ME — Modul Aplikasi Baru SHF',
    priority: 'CRITICAL',
    methodology: 'Boundary Value Analysis',
    colorAccent: '#1D4ED8',
    preconditions: [
      'Pengguna telah terautentikasi sebagai CMO aktif.',
      'Data kendaraan terdaftar dalam database harga pasar OTR resmi (Rp 300.000.000).',
      'Tenor dipilih 36 Bulan dengan skema bunga efektif.',
    ],
    testSteps: [
      'Buka formulir kalkulasi simulasi pembiayaan Second Hand Financing (SHF).',
      'Masukkan harga OTR kendaraan senilai Rp 300.000.000.',
      'Uji batas bawah TDP pada nilai 19.99% (Rp 59.970.000).',
      'Uji batas minimum legal regulasi pada nilai tepat 20.00% (Rp 60.000.000).',
      'Uji batas atas normal pada nilai 20.01% (Rp 60.030.000).',
      'Klik tombol kalkulasi dan periksa status validasi form.',
    ],
    testData: [
      { param: 'TDP 19.99%', value: 'Rp 59.970.000', note: 'Harus Ditolak (Error: Di bawah regulasi OJK 20%)' },
      { param: 'TDP 20.00%', value: 'Rp 60.000.000', note: 'Harus Diterima (Valid Boundary Pass)' },
      { param: 'TDP 20.01%', value: 'Rp 60.030.000', note: 'Harus Diterima (Normal Partition Pass)' },
    ],
    expectedResult: 'Sistem menampilkan pesan error validasi pada 19.99% dan berhasil melanjutkan ke perhitungan angsuran pada 20.00% dan 20.01%.',
    actualResult: '19.99% terblokir dengan teks error regulasi OJK; 20.00% dan 20.01% berhasil dihitung secara presisi tanpa pembulatan menyimpang.',
    status: 'PASSED',
    executionTime: '24ms',
  },
  {
    id: 'TC-BAYDO-0089',
    title: 'Ekstraksi Otomatis Aturan Bisnis Ambigu dari Dokumen SRS 200+ Halaman',
    module: 'Baydo Agentic QA — AI SRS Decomposition Pipeline',
    priority: 'HIGH',
    methodology: 'Equivalence Partitioning',
    colorAccent: '#D97706',
    preconditions: [
      'Azure AI Foundry instance online dengan model GPT-4o.',
      'Dokumen SRS berformat DOCX berisi tabel spesifikasi approval limit bertingkat.',
    ],
    testSteps: [
      'Upload dokumen spesifikasi kebutuhan sistem dengan 3 klausul ambigu pada penentuan otorisasi cabang.',
      'Jalankan pipeline dekonstruksi Agentic QA.',
      'Verifikasi output identifikasi celah ambiguitas dokumen.',
      'Periksa apakah test suite yang dihasilkan mencakup skenario unhandled exceptions.',
    ],
    testData: [
      { param: 'Input Dokumen', value: 'SRS_Financing_Core_v2.docx', note: '214 Halaman, 45 Tabel Matrix' },
      { param: 'Threshold Conf.', value: '0.90 temperature=0.1', note: 'Deterministik tanpa halusinasi' },
      { param: 'Output Ekspor', value: 'Test_Suite_Matrix.docx', note: 'Format hirarkis berpenomoran' },
    ],
    expectedResult: 'Pipeline mendeteksi 3 klausul tanpa penanggung jawab dan men-generate 18 test cases tambahan untuk boundary approval.',
    actualResult: '3 klausul ambigu berhasil di-flag dengan laporan deviasi; 18 test cases tersusun rapi dengan label WARNING.',
    status: 'PASSED',
    executionTime: '680ms',
  },
  {
    id: 'TC-DOCDIFF-0034',
    title: 'Verifikasi Stempel Basah & Tanda Tangan pada Dokumen Kontrak PDF 27 Halaman',
    module: 'DocDiff Pro — Native Visual Regression',
    priority: 'CRITICAL',
    methodology: 'Concurrency & State Transition',
    colorAccent: '#059669',
    preconditions: [
      'File PDF Dokumen A: Kontrak Pembiayaan Asli bertanda tangan (12MB).',
      'File PDF Dokumen B: Kontrak Hasil Regenerasi Sistem Baru (12MB).',
    ],
    testSteps: [
      'Buka DocDiff Pro pada desktop macOS Cocoa.',
      'Muat kedua dokumen secara bersamaan ke canvas berdampingan (Side-by-Side).',
      'Gunakan navigasi thumbnail untuk melompat langsung ke halaman 27 (lembar tanda tangan).',
      'Gunakan alat stabilo digital untuk memverifikasi keselarasan stempel materai dan blok tanda tangan debitur.',
    ],
    testData: [
      { param: 'Ukuran Dokumen', value: '12.4 MB (27 Halaman)', note: 'High resolution scan 300 DPI' },
      { param: 'Toleransi Offset', value: '0 Pixel Margin', note: 'Posisi materai & tanda tangan' },
      { param: 'Render Engine', value: 'macOS Native PDFKit', note: 'Zero lossy conversion' },
    ],
    expectedResult: 'Kedua dokumen terbuka dalam waktu < 1 detik; tidak ada teks atau stempel yang bergeser dari grid resmi.',
    actualResult: 'Render instan 410ms; keselarasan visual terkonfirmasi 100% tanpa deviasi layout.',
    status: 'PASSED',
    executionTime: '410ms',
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
    name: 'Automation: Playwright & Cypress',
    category: 'Test Automation & Frameworks',
    level: 'Expert',
    iconName: 'Code2',
    description: 'End-to-End automation, component testing, parallel execution, multi-tab and iframe handling, resilient locators.',
  },
  {
    name: 'Python, PyTest & PyTest-BDD',
    category: 'Test Automation & Frameworks',
    level: 'Expert',
    iconName: 'Terminal',
    description: 'Test runners, parameterized testing, fixtures, mock injection, automated data-driven test generation.',
  },
  {
    name: 'API Testing: Postman, Newman & REST',
    category: 'API & Security Testing',
    level: 'Expert',
    iconName: 'Server',
    description: 'Automated collection runs, pre-request scripts, OAuth2 authentication, response schema assertions, CI integration.',
  },
  {
    name: 'Agentic QA & Azure AI Foundry',
    category: 'AI-Driven QA & Tooling',
    level: 'Expert',
    iconName: 'Bot',
    description: 'Otomasi dekonstruksi SRS menjadi test suites, Boundary Value Analysis otomatis via LLM, AI regression verification.',
  },
  {
    name: 'Fintech & Multifinance UAT',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'ShieldCheck',
    description: 'BCA Finance One ME UAT, credit underwriting validation, approval matrix, SLIK/BI checking, interest rate calculation.',
  },
  {
    name: 'Performance & Load Testing (JMeter)',
    category: 'API & Security Testing',
    level: 'Advanced',
    iconName: 'Cpu',
    description: 'Stress testing, concurrency bottlenecks, response time threshold audit, database connection pool saturation tests.',
  },
  {
    name: 'SQL & Database Validation',
    category: 'API & Security Testing',
    level: 'Advanced',
    iconName: 'Database',
    description: 'Complex queries for data integrity checks, transaction rollback verification, audit log validation in SQL Server/Postgres.',
  },
  {
    name: 'JIRA, TestRail & CI/CD Pipelines',
    category: 'Quality Management & CI/CD',
    level: 'Advanced',
    iconName: 'GitBranch',
    description: 'Bug lifecycle management, traceability matrix, test execution dashboards, automated regression in GitLab & GitHub Actions.',
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    role: 'QA Engineer & AI Test Automation',
    company: 'Enterprise FinTech & R&D Solutions',
    period: '2023 — Sekarang',
    location: 'Indonesia',
    type: 'Full-time',
    description: 'Memimpin arsitektur pengujian sistem perbankan skala enterprise dan memelopori integrasi Agentic AI untuk otomasi siklus pengujian dari dokumen spesifikasi hingga eksekusi pengujian.',
    achievements: [
      'Merancang sistem Baydo Agentic QA yang mengotomasi ekstraksi ribuan test case dari dokumen SRS, menghemat 85% waktu perancangan QA tim.',
      'Memimpin pengujian UAT aplikasi pembiayaan inti BCA Finance (One ME) dengan 15 modul multi-role tanpa ada critical defect lolos ke production.',
      'Mengembangkan DocDiff Pro untuk inspeksi regresi visual dokumen kontrak 27+ halaman secara native dengan zero formatting loss.',
    ],
    skills: ['UAT Testing', 'Agentic QA', 'Azure AI Foundry', 'Python', 'Postman', 'BCA Finance One ME', 'JIRA'],
    accentColor: '#1D4ED8',
  },
  {
    role: 'Quality Assurance & Automation Specialist',
    company: 'Technology & Digital Platforms',
    period: '2021 — 2023',
    location: 'Indonesia',
    type: 'Engineering',
    description: 'Bertanggung jawab atas pengujian fungsional, pembuatan automation scripts, pengujian API, dan verifikasi keamanan aplikasi web & ekstensi browser.',
    achievements: [
      'Mengembangkan browser extension v1.16.0 dengan sistem TOTP 2FA otomatis yang memangkas waktu login tim QA hingga 2 jam per hari.',
      'Mengimplementasikan automated API test suite dengan Postman & Newman yang terintegrasi dalam pipeline CI/CD.',
      'Menyusun Test Strategy & Traceability Matrix komprehensif yang meningkatkan test coverage hingga 99.4% pada alur transaksi inti.',
    ],
    skills: ['API Testing', 'Postman / Newman', 'Playwright', 'Chrome Extensions V3', 'CI/CD Pipelines', 'SQL'],
    accentColor: '#059669',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Zero Defect Escape pada Jalur Kritis',
    description: 'Pada sistem finansial dan enterprise, bug kalkulasi bunga atau kesalahan otorisasi bernilai fatal. Kami menerapkan Boundary Value Analysis dan verifikasi multi-layer sehingga nol celah kritis lolos ke tahap produksi.',
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
    title: 'Agentic QA: AI Bukan Pengganti, Tapi Pengganda',
    description: 'Menggunakan Azure AI Foundry untuk membaca dokumen SRS secara mendalam bukan untuk memangkas kehati-hatian, melainkan untuk menggali edge cases tersembunyi yang sering terlewatkan dalam penulisan manual.',
    badge: 'Modern QA Philosophy',
    color: '#D97706',
  },
  {
    number: '04',
    title: 'Otomasi yang Andal, Bukan Sekadar Jalan',
    description: 'Test automation yang rapuh (*flaky test*) lebih berbahaya daripada pengujian manual. Setiap skrip otomatisasi dirancang modular, berkecepatan tinggi, dan terisolasi dengan data test yang terukur.',
    badge: 'Engineering Rigor',
    color: '#059669',
  },
];

export const COLOR_PALETTE_GUIDE = [
  { name: 'Ink Charcoal', hex: '#11141A', role: 'Primary Body Text & Crisp Solid Borders', lightMode: 'Teks Utama', darkMode: 'Border & Subtle Surfaces' },
  { name: 'Paper White', hex: '#F6F6F2', role: 'Warm Architectural Canvas (Light Mode)', lightMode: 'Background', darkMode: 'N/A' },
  { name: 'Obsidian Slate', hex: '#0D0F12', role: 'Deep Matte Canvas (Dark Mode)', lightMode: 'N/A', darkMode: 'Background' },
  { name: 'Electric Cobalt', hex: '#1D4ED8', role: 'Primary Action & Enterprise UAT Status', lightMode: 'Tombol & Accent 1', darkMode: 'Highlight Utama' },
  { name: 'Warm Amber', hex: '#D97706', role: 'Agentic AI & Test Planning Efficiency', lightMode: 'Badge & Status', darkMode: 'Accent 2' },
  { name: 'Forest Jade', hex: '#059669', role: 'Passed Assertions & Zero Defect Escape', lightMode: 'Pass Indicators', darkMode: 'Pass Indicators' },
  { name: 'Crisp Crimson', hex: '#DC2626', role: 'Bug Blockers, Security & Edge Cases', lightMode: 'Alerts & Highlights', darkMode: 'Alerts' },
];

export const LIVE_TEST_CONSOLE = [
  {
    suiteName: 'BCA Finance One ME — Approval Matrix & BVA',
    status: 'PASSED',
    duration: '420ms',
    assertions: [
      { name: 'test_interest_rate_tenor_36_months_calculation()', result: 'PASS' },
      { name: 'test_branch_manager_approval_threshold_limit()', result: 'PASS' },
      { name: 'test_credit_analyst_slik_bi_checking_rejection()', result: 'PASS' },
      { name: 'test_second_hand_financing_bucket_shf_assignment()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'Baydo Agentic QA — SRS Decomposition Engine',
    status: 'PASSED',
    duration: '680ms',
    assertions: [
      { name: 'test_srs_boundary_value_analysis_extraction()', result: 'PASS' },
      { name: 'test_equivalence_partitioning_negative_cases()', result: 'PASS' },
      { name: 'test_export_hierarchical_docx_table_format()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'FinTrack AI — Mutation Parser Verification',
    status: 'PASSED',
    duration: '310ms',
    assertions: [
      { name: 'test_bca_klikbca_mutation_regex_parsing()', result: 'PASS' },
      { name: 'test_transfer_admin_fee_exclusion_logic()', result: 'PASS' },
      { name: 'test_sqlite_high_concurrency_ledger_write()', result: 'PASS' },
    ],
  },
];
