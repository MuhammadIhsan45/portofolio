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
  tagline: 'Memastikan stabilitas Core Banking Temenos T24, sistem operasional cabang SIFO, aplikasi enterprise multifinance, dan memelopori Agentic AI untuk otomasi pengujian perangkat lunak tanpa celah.',
  bio: 'Middle Software Quality Assurance Engineer yang berfokus pada keandalan sistem perbankan & multifinance skala enterprise. Berpengalaman di PT BCA Finance (One ME & SIFO), PT Bank Syariah Indonesia Tbk. (Core Banking Temenos T24), serta pengujian crowdsourced global di Tester Work (London, UK Remote). Menguasai integrasi Core Banking, alur disbursement/reversal SQL, UAT multifinance, hingga inovasi otomasi Agentic QA berbasis Azure AI Foundry (Baydo).',
  location: 'Jakarta, Indonesia',
  email: 'muhsanz41@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Open for QA & Test Automation Opportunities',
  stats: [
    { label: 'Pengalaman Industri', value: '4+ Perusahaan', detail: 'BCAF, BSI, Tester Work, Wesclic' },
    { label: 'Critical Path Coverage', value: '99.8%', detail: 'Core Banking T24, SIFO & BCAF' },
    { label: 'Efisiensi Siklus QA', value: '85%', detail: 'Via Agentic QA & AI Generator' },
    { label: 'Critical Defect Escape', value: '0 Defect', detail: 'Zero Escapes to Production' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'core-banking-t24',
    title: 'Core Banking Temenos T24 — Financial Integration & Disbursement Engine',
    tagline: 'Pengujian integrasi Core Banking Temenos T24: alur pencairan (disbursement), reverse disbursement, GL posting, dan validasi data kontrak pinjaman.',
    description: 'Verifikasi ketat sistem perbankan inti berskala enterprise yang mengelola rekening pinjaman, kalkulasi amortisasi bunga, transaksi reversal, dan sinkronisasi data antar channel perbankan.',
    longDescription: 'Core Banking Temenos T24 merupakan fondasi transaksi finansial perbankan dan multifinance. Pengujian mencakup verifikasi logika alur pencairan dana (disbursement), prosedur pembatalan/pembalikan pencairan dana (reverse disbursement via SQL Stored Procedure), validasi pembentukan rekening pinjaman (corAccount & fntLoanApplication), integritas jurnal buku besar (General Ledger), serta penanganan timeout pada komunikasi socket perbankan berkecepatan tinggi.',
    category: 'Fintech & Enterprise UAT',
    tags: ['Core Banking T24', 'Reverse Disbursement', 'SQL Server / Oracle', 'Financial Reconciliation', 'GL Integrity', 'Stored Procedures'],
    metrics: [
      { label: 'Akurasi Reversal', value: '100% Zero Error' },
      { label: 'Integritas GL', value: 'Balanced & Valid' },
      { label: 'Status Eksekusi', value: 'Production Verified' },
    ],
    featured: true,
    solidAccentColor: '#1D4ED8', // Electric Cobalt
    accentBadgeBg: 'bg-blue-700',
    accentBadgeText: 'text-white',
    highlights: [
      'Pengujian skenario transaksi kritis Reverse Disbursement pada level database dan host T24',
      'Validasi integritas relasi tabel corAccount, genCustomer, dan fntLoanApplication dengan query SQL ketat',
      'Verifikasi jurnal debit/kredit otomatis tanpa adanya selisih saldo pembukuan (General Ledger)',
      'Pengujian penanganan race conditions dan koneksi terputus saat proses realisasi pencairan dana',
    ],
    qaArtifacts: {
      testType: 'Core Banking Integration & Financial Transaction Testing',
      coverage: '99.8% Financial Disbursement & Reversal Paths',
      toolsUsed: ['Temenos T24', 'SQL Server Management Studio', 'Stored Procedures', 'Postman', 'JIRA'],
      bugPreventionCount: 'Pencegahan Bug Kritis Reversal Rekening Ganda & Selisih Saldo GL',
    },
  },
  {
    id: 'sifo-branch-operations',
    title: 'SIFO (Sistem Informasi Front Office) — Branch Operations & Multi-Channel Origination',
    tagline: 'Pengujian menyeluruh sistem operasional front office cabang: registrasi debitur, verifikasi data jaminan aset, kalkulasi realisasi kredit, dan otorisasi multi-level.',
    description: 'Memimpin pengujian fungsional dan integrasi sistem SIFO yang menghubungkan operasional cabang dengan core banking. Menguji validasi identitas nasabah, verifikasi fisik aset jaminan kendaraan, sinkronisasi data antar cabang, serta matriks otorisasi teller dan supervisor.',
    longDescription: 'SIFO (Sistem Informasi Front Office) adalah sistem operasional garda depan yang digunakan oleh unit kerja kantor cabang untuk memproses seluruh siklus layanan nasabah. Pengujian mencakup validasi data customer onboarding, verifikasi data fisik agunan kendaraan (nomor rangka, nomor mesin, faktur, BPKB), alokasi pengajuan antar Branch ID, mekanisme otorisasi berjenjang (maker-checker-approver), serta integrasi data real-time ke sistem backend host.',
    category: 'Fintech & Enterprise UAT',
    tags: ['SIFO Front Office', 'Branch Operations', 'Agunan & BPKB Validation', 'Maker-Checker', 'KYC Verification', 'UAT Branch'],
    metrics: [
      { label: 'Cakupan Cabang', value: 'Multi-Branch Tested' },
      { label: 'Validasi Agunan', value: '100% No-Mismatch' },
      { label: 'Otorisasi Ganda', value: 'Zero Bypass' },
    ],
    featured: true,
    solidAccentColor: '#D97706', // Warm Amber
    accentBadgeBg: 'bg-amber-600',
    accentBadgeText: 'text-white',
    highlights: [
      'Verifikasi akurasi data agunan kendaraan bermotor (pengecekan fisik No. Rangka, No. Mesin, No. Polisi)',
      'Pengujian alur otorisasi berjenjang: teller / inputter -> branch supervisor -> branch manager',
      'Validasi fleksibilitas perpindahan data antar cabang (Branch ID reallocation) tanpa kehilangan riwayat',
      'Sinkronisasi dua arah secara stabil antara aplikasi SIFO di cabang dengan database sentral',
    ],
    qaArtifacts: {
      testType: 'Front Office Operational & Multi-Role UAT',
      coverage: 'Full Branch Operational Lifecycle',
      toolsUsed: ['SIFO Platform', 'SQL Query Validation', 'TestRail', 'JIRA', 'Confluence'],
      bugPreventionCount: '35+ Branch Data Sync & Authorization Bypass Flaws Blocked',
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
    solidAccentColor: '#059669', // Forest Jade
    accentBadgeBg: 'bg-emerald-600',
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
    featured: false,
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
    id: 'TC-T24-0019',
    title: 'Verifikasi Eksekusi Reverse Disbursement Rekening Pinjaman pada Host Core Banking T24',
    module: 'Core Banking Temenos T24 — Modul Loan & Disbursement',
    priority: 'CRITICAL',
    methodology: 'Concurrency & State Transition',
    colorAccent: '#1D4ED8',
    preconditions: [
      'Nomor rekening pinjaman aktif dan tercatat pada tabel corAccount (NoRek: 9490716004, NoPin: 001).',
      'Status realisasi pencairan dana telah selesai (RealisasiDate tercatat valid).',
      'Hak akses user QA memiliki otorisasi eksekusi ReverseDisburse stored procedure.',
    ],
    testSteps: [
      'Kueri status awal rekening pada corAccount dan genObjectcar untuk memastikan agunan terikat.',
      'Eksekusi prosedur [dbo].[ReverseDisburse] dengan parameter @Norek, @Nopin, dan @DataId.',
      'Periksa nilai kembalian @retVal dan @return_value dari database engine.',
      'Validasi pembalikan saldo jurnal buku besar (GL) dan pelepasan status agunan kendaraan.',
      'Pastikan transaksi terikat dalam BEGIN TRAN dan COMMIT secara atomik tanpa partial updates.',
    ],
    testData: [
      { param: 'No Kontrak', value: '9490716004-001', note: 'Account ID pada corAccount' },
      { param: 'Stored Procedure', value: '[dbo].[ReverseDisburse]', note: 'Parameter @retVal OUTPUT' },
      { param: 'Transaction Isolation', value: 'SERIALIZABLE / BEGIN TRAN', note: 'Mencegah deadlock & dirty reads' },
    ],
    expectedResult: 'Prosedur menghasilkan @retVal = 0 (Sukses); status pencairan berhasil dibatalkan; data agunan kembali ke status pra-realisasi.',
    actualResult: 'Prosedur tereksekusi sempurna dalam 38ms; saldo GL seimbang; status agunan ter-reset tanpa anomali data.',
    status: 'PASSED',
    executionTime: '38ms',
  },
  {
    id: 'TC-SIFO-0052',
    title: 'Validasi Integritas Data Agunan Kendaraan & Re-Alokasi Branch ID pada Sistem SIFO Cabang',
    module: 'SIFO — Front Office Branch Operations',
    priority: 'CRITICAL',
    methodology: 'Boundary Value Analysis',
    colorAccent: '#D97706',
    preconditions: [
      'Aplikasi SIFO terhubung ke database operasional cabang.',
      'Data debitur terverifikasi pada genCustomer dan agunan tercatat pada genObjectCar.',
    ],
    testSteps: [
      'Buka formulir data aplikasi pada aplikasi SIFO Front Office.',
      'Input data kendaraan dan periksa kesesuaian Nomor Rangka (17 Karakter) dan Nomor Mesin.',
      'Lakukan pengujian batas panjang karakter Nomor Polisi dan Nomor Rangka.',
      'Uji skenario re-alokasi Branch ID dari Cabang Asal ke Cabang Tujuan.',
      'Verifikasi bahwa mutasi data cabang tercatat lengkap dalam audit log SIFO.',
    ],
    testData: [
      { param: 'No Rangka', value: '17 Karakter Alfanumerik Valid', note: 'Strict Mask Format Validation' },
      { param: 'Branch Re-alokasi', value: 'BranchId A -> BranchId B', note: 'Verifikasi hak akses user cabang' },
      { param: 'Maker-Checker', value: 'Dual Control Authorized', note: 'Persetujuan supervisor wajib' },
    ],
    expectedResult: 'Sistem menolak format No Rangka tidak standar; transfer Branch ID berhasil dengan audit trail lengkap.',
    actualResult: 'Format invalid terblokir 100%; mutasi cabang tercatat rapi pada tabel log tanpa anomali relasi data.',
    status: 'PASSED',
    executionTime: '22ms',
  },
  {
    id: 'TC-BCAF-0142',
    title: 'Validasi Batas Bawah Persentase Uang Muka (TDP) Skema Pembiayaan SHF',
    module: 'BCA Finance One ME — Modul Aplikasi Baru SHF',
    priority: 'CRITICAL',
    methodology: 'Boundary Value Analysis',
    colorAccent: '#059669',
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
    name: 'Core Banking: Temenos T24 Integration',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'Server',
    description: 'Pengujian integrasi Core Banking T24, alur disbursement/pencairan dana, reverse disbursement SQL, loan accounts (corAccount), dan rekonsiliasi GL.',
  },
  {
    name: 'SIFO Front Office & Branch QA',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'ShieldCheck',
    description: 'Pengujian operasional kantor cabang SIFO, verifikasi agunan kendaraan (No. Rangka/Mesin/BPKB), alokasi Branch ID, dan alur maker-checker.',
  },
  {
    name: 'Fintech & Multifinance UAT (BCAF One ME)',
    category: 'Quality Management & CI/CD',
    level: 'Expert',
    iconName: 'ShieldCheck',
    description: 'BCA Finance One ME UAT, credit underwriting validation, approval matrix, SLIK/BI checking, interest rate calculation.',
  },
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
    name: 'SQL & Database Validation (T-SQL / Oracle)',
    category: 'API & Security Testing',
    level: 'Expert',
    iconName: 'Database',
    description: 'Complex queries for data integrity checks, transaction rollback verification, stored procedure execution, and audit trail validation.',
  },
  {
    name: 'Agentic QA & Azure AI Foundry',
    category: 'AI-Driven QA & Tooling',
    level: 'Expert',
    iconName: 'Bot',
    description: 'Otomasi dekonstruksi SRS menjadi test suites, Boundary Value Analysis otomatis via LLM, AI regression verification.',
  },
  {
    name: 'Performance & Load Testing (JMeter)',
    category: 'API & Security Testing',
    level: 'Advanced',
    iconName: 'Cpu',
    description: 'Stress testing, concurrency bottlenecks, response time threshold audit, database connection pool saturation tests.',
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
    role: 'Middle Software QA Engineer',
    company: 'PT BCA Finance',
    period: 'May 2026 — Present · 7 mos',
    location: 'South Jakarta, Jakarta, Indonesia',
    type: 'Full-time',
    description: 'Bertanggung jawab atas penjaminan mutu dan stabilitas ekosistem pembiayaan otomotif enterprise: memimpin pengujian UAT aplikasi One ME (Mobile Entry), sistem operasional cabang SIFO, dan merancang platform AI Test Automation Baydo.',
    achievements: [
      'Memimpin pengujian UAT aplikasi pembiayaan inti BCA Finance (One ME) mencakup 15 modul multi-role tanpa ada critical defect lolos ke production.',
      'Menguji sistem operasional cabang SIFO untuk verifikasi agunan kendaraan bermotor (No. Rangka, No. Mesin, BPKB/Faktur), re-alokasi Branch ID, dan alur maker-checker approval.',
      'Merancang sistem Baydo Agentic QA di atas Azure AI Foundry yang mengotomasi ekstraksi ribuan test cases dari dokumen SRS, menghemat 85% waktu perancangan QA tim.',
      'Mengembangkan DocDiff Pro untuk inspeksi regresi visual dokumen kontrak 27+ halaman secara native dengan zero formatting loss.',
    ],
    skills: ['UAT Testing', 'SIFO Front Office', 'BCA Finance One ME', 'Agentic QA', 'Azure AI Foundry', 'Python', 'SQL Queries', 'JIRA'],
    accentColor: '#1D4ED8', // BCAF Blue
  },
  {
    role: 'Software Quality Assurance',
    company: 'PT Bank Syariah Indonesia Tbk. (BSI)',
    period: 'Jun 2025 — May 2026 · 1 yr',
    location: 'Central Jakarta, Jakarta, Indonesia',
    type: 'Full-time',
    description: 'Memimpin pengujian integrasi sistem Core Banking Temenos T24 untuk transaksi perbankan syariah, manajemen rekening pinjaman/pembiayaan, alur pencairan dana, serta rekonsiliasi buku besar.',
    achievements: [
      'Menguji alur integrasi transaksi Core Banking Temenos T24 dan prosedur Reverse Disbursement berbasis SQL Stored Procedure dengan akurasi 100%.',
      'Memvalidasi integritas relasi tabel corAccount, genCustomer, dan fntLoanApplication untuk menjamin konsistensi data finansial antar host.',
      'Memverifikasi transaksi debit dan kredit otomatis pada General Ledger (GL) guna memastikan nihilnya selisih saldo pembukuan perbankan.',
      'Menjalankan regression testing dan stress testing berkala pada lingkungan UAT perbankan berkeamanan tinggi.',
    ],
    skills: ['Core Banking Temenos T24', 'SQL Stored Procedures', 'General Ledger Reconciliation', 'API Testing', 'Postman', 'JIRA', 'Banking UAT'],
    accentColor: '#059669', // BSI Emerald Teal
  },
  {
    role: 'IT Software Quality Assurance Engineer',
    company: 'PT Bank Syariah Indonesia Tbk. (BSI)',
    period: 'Sep 2024 — Jun 2025 · 10 mos',
    location: 'Daerah Istimewa Yogyakarta, Indonesia',
    type: 'Internship · On-site',
    description: 'Melaksanakan pengujian fungsional sistem perbankan syariah, menyusun skenario kasus uji terstruktur, dan memvalidasi kesesuaian alur sistem dengan spesifikasi bisnis.',
    achievements: [
      'Menyusun ratusan test case komprehensif untuk modul tabungan, giro, dan alur pengajuan pembiayaan nasabah.',
      'Melakukan pelaporan dan verifikasi siklus bug secara terperinci pada sistem manajemen defect JIRA & Confluence.',
      'Berkolaborasi erat bersama tim pengembang dan business analyst untuk mengeliminasi ketidaksesuaian fungsional sebelum rilis UAT.',
    ],
    skills: ['Functional Testing', 'Test Case Design', 'JIRA', 'Confluence', 'Banking Modules', 'Defect Tracking'],
    accentColor: '#0D9488', // Teal
  },
  {
    role: 'SQA Tester',
    company: 'Tester Work',
    period: 'Jan 2025 — Apr 2026 · 1 yr 4 mos',
    location: 'London Area, United Kingdom · Remote',
    type: 'Freelance · Global Remote',
    description: 'Melakukan pengujian crowdsourced global untuk berbagai produk perangkat lunak internasional berbasis web, iOS, dan Android di berbagai environment nyata.',
    achievements: [
      'Mengeksekusi exploratory testing, cross-browser, dan cross-device testing untuk mendeteksi edge cases dan masalah kompatibilitas perangkat.',
      'Menyusun bug report berstandar internasional dengan lampiran log konsol terperinci, video reproduksi, dan estimasi tingkat keparahan defect.',
      'Memverifikasi performa responsivitas antarmuka pengguna pada beragam variasi resolusi layar dan kondisi jaringan global.',
    ],
    skills: ['Crowdsourced QA', 'Exploratory Testing', 'Cross-browser Testing', 'Mobile QA (iOS & Android)', 'Bug Life Cycle', 'English Communication'],
    accentColor: '#D97706', // Tester Work Amber
  },
  {
    role: 'Software Quality Assurance Engineer',
    company: 'Wesclic Technology',
    period: 'Oct 2024 — Jan 2025 · 4 mos',
    location: 'Yogyakarta, Indonesia · Remote',
    type: 'Internship · Remote',
    description: 'Mengembangkan dan mengeksekusi rencana pengujian untuk produk teknologi berbasis web dan mobile, pengujian integrasi REST API, dan validasi data transaksi.',
    achievements: [
      'Menyusun test strategy dan matriks pengujian pengujian aplikasi web dan mobile dari tahap sprint planning.',
      'Melakukan pengujian otomatisasi dan pengujian API menggunakan Postman dengan skrip assertions respon JSON.',
      'Mengurangi regresi bug pra-rilis dengan penerapan checklist sanity dan smoke testing sebelum deploy.',
    ],
    skills: ['API Testing', 'Postman', 'Web & Mobile QA', 'Smoke Testing', 'Sanity Checklist', 'Regression Matrix'],
    accentColor: '#166534', // Wesclic Dark Green
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Zero Defect Escape pada Jalur Kritis',
    description: 'Pada sistem Core Banking T24, SIFO, dan multifinance, bug kalkulasi bunga atau kesalahan otorisasi bernilai fatal. Kami menerapkan Boundary Value Analysis dan verifikasi multi-layer sehingga nol celah kritis lolos ke tahap produksi.',
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
  { name: 'Electric Cobalt', hex: '#1D4ED8', role: 'Core Banking T24 & Enterprise Actions', lightMode: 'Tombol & Accent 1', darkMode: 'Highlight Utama' },
  { name: 'Warm Amber', hex: '#D97706', role: 'SIFO Front Office & Test Planning Metrics', lightMode: 'Badge & Status', darkMode: 'Accent 2' },
  { name: 'Forest Jade', hex: '#059669', role: 'Passed Assertions & Zero Defect Escape', lightMode: 'Pass Indicators', darkMode: 'Pass Indicators' },
  { name: 'Crisp Crimson', hex: '#DC2626', role: 'Bug Blockers, Security & Edge Cases', lightMode: 'Alerts & Highlights', darkMode: 'Alerts' },
];

export const LIVE_TEST_CONSOLE = [
  {
    suiteName: 'Core Banking T24 — Reverse Disbursement & GL Posting',
    status: 'PASSED',
    duration: '380ms',
    assertions: [
      { name: 'test_t24_stored_procedure_reverse_disbursement()', result: 'PASS' },
      { name: 'test_cor_account_loan_status_rollback_check()', result: 'PASS' },
      { name: 'test_general_ledger_debit_credit_balance()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'SIFO Front Office — Branch ID & Agunan Verification',
    status: 'PASSED',
    duration: '290ms',
    assertions: [
      { name: 'test_sifo_vehicle_no_rangka_mask_validation()', result: 'PASS' },
      { name: 'test_branch_id_reallocation_with_audit_trail()', result: 'PASS' },
      { name: 'test_maker_checker_authorization_dual_control()', result: 'PASS' },
    ],
  },
  {
    suiteName: 'BCA Finance One ME — Approval Matrix & BVA',
    status: 'PASSED',
    duration: '420ms',
    assertions: [
      { name: 'test_interest_rate_tenor_36_months_calculation()', result: 'PASS' },
      { name: 'test_branch_manager_approval_threshold_limit()', result: 'PASS' },
      { name: 'test_credit_analyst_slik_bi_checking_rejection()', result: 'PASS' },
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
];
