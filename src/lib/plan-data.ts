export type AreaId =
  | "communication"
  | "social"
  | "gsa"
  | "english"
  | "technical"
  | "career"
  | "academic";

export type Priority = "high" | "medium";
export type Status = "not_started" | "in_progress" | "done";

export type MonthId = "2026-10" | "2026-11" | "2026-12" | "2027-01";

export const AREAS: Record<
  AreaId,
  { label: string; short: string }
> = {
  communication: { label: "Communication", short: "Komunikasi" },
  social: { label: "Social & Mindset", short: "Sosial" },
  gsa: { label: "GSA & Content", short: "GSA" },
  english: { label: "English", short: "English" },
  technical: { label: "Technical", short: "Teknis" },
  career: { label: "Career", short: "Karier" },
  academic: { label: "Academic", short: "Kuliah" },
};

export const MONTHS: {
  id: MonthId;
  label: string;
  short: string;
  phase: string;
  focus: string;
  intent: string;
  wpm: number;
}[] = [
  {
    id: "2026-10",
    label: "Oktober 2026",
    short: "Okt",
    phase: "Berani memulai",
    focus: "Public speaking + social openness",
    intent: "Bangun fondasi tanpa menunggu percaya diri.",
    wpm: 60,
  },
  {
    id: "2026-11",
    label: "November 2026",
    short: "Nov",
    phase: "Mulai terbiasa",
    focus: "Conversation + GSA consistency",
    intent: "Ubah kebiasaan yang baru dimulai menjadi ritme.",
    wpm: 70,
  },
  {
    id: "2026-12",
    label: "Desember 2026",
    short: "Des",
    phase: "Menjadi terampil",
    focus: "Public speaking + technical output",
    intent: "Skill mulai menghasilkan karya yang terlihat.",
    wpm: 80,
  },
  {
    id: "2027-01",
    label: "Januari 2027",
    short: "Jan",
    phase: "Menerapkan",
    focus: "GSA completion + real-world communication",
    intent: "Pakai skill di situasi nyata, finish strong.",
    wpm: 90,
  },
];

export const PATHS = [
  {
    id: "communication",
    label: "Communication",
    steps: "berani → terbiasa → terampil → natural",
  },
  {
    id: "social",
    label: "Social & Mindset",
    steps: "interaksi → percakapan → relasi",
  },
  {
    id: "gsa",
    label: "GSA & Content",
    steps: "adaptasi → konsistensi → portfolio",
  },
  {
    id: "career",
    label: "Career",
    steps: "eksplorasi → aplikasi → seleksi",
  },
  {
    id: "technical",
    label: "Technical",
    steps: "Excel → SQL → data analysis",
  },
] as const;

export const RULES = [
  { title: "GSA", body: "2 konten/minggu. Ranking dan reward adalah bonus." },
  { title: "Kuliah", body: "Prioritas utama. Jangan dikorbankan demi konten." },
  { title: "Mental", body: "Progres lebih penting dari kesempurnaan." },
  {
    title: "Public speaking",
    body: "Berani → terbiasa → terampil. Anxiety tidak harus 0.",
  },
  { title: "WPM", body: "+10 WPM per bulan. Akurasi tetap penting (≥95%)." },
  { title: "Career", body: "Eksplorasi → aplikasi → seleksi. Bangun CV + portfolio." },
];

export const ROADMAP = MONTHS.map((m, i) => ({
  ...m,
  question: [
    "Apa yang perlu mulai dilakukan tanpa menunggu percaya diri?",
    "Bagaimana membuat perilaku Oktober menjadi lebih natural?",
    "Bagaimana mengubah kebiasaan menjadi kemampuan yang terlihat?",
    "Apakah skill yang dibangun benar-benar bisa dipakai?",
  ][i],
  next: [
    "Keberanian bicara, tampil, dan membuat konten jadi dasar kenyamanan.",
    "Percakapan, public speaking, GSA, English, dan teknis dilakukan konsisten.",
    "Komunikasi dan teknis mulai menghasilkan output, portfolio, dan kesiapan interview.",
    "Semua kemampuan dipakai di situasi nyata, termasuk finish GSA dan kesiapan karier.",
  ][i],
}));

export type Achievement = {
  id: string;
  monthId: MonthId;
  area: AreaId;
  title: string;
  target: string;
  indicator: string;
  priority: Priority;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "o1",
    monthId: "2026-10",
    area: "communication",
    title: "Public speaking — berani bicara",
    target: "Berani menyampaikan pendapat dan berbicara 1–3 menit meskipun masih gugup",
    indicator: "Tidak menghindari kesempatan bicara; minimal 1 sesi latihan/minggu",
    priority: "high",
  },
  {
    id: "o2",
    monthId: "2026-10",
    area: "social",
    title: "Banyakin senyum & ekspresi ramah",
    target: "Lebih sering menunjukkan ekspresi ramah saat bertemu/berbicara",
    indicator: "Lebih sering tersenyum dan membuka interaksi",
    priority: "medium",
  },
  {
    id: "o3",
    monthId: "2026-10",
    area: "social",
    title: "Lebih terbuka dengan orang lain",
    target: "Mulai sengaja membuka percakapan beberapa kali dalam seminggu",
    indicator: "Ada inisiatif menyapa/bertanya tanpa selalu menunggu",
    priority: "high",
  },
  {
    id: "o4",
    monthId: "2026-10",
    area: "social",
    title: "Kurangi self-judgment",
    target: "Menyadari saat mulai menghakimi diri dan menggantinya dengan evaluasi",
    indicator: "Menulis apa yang terjadi dan apa yang bisa diperbaiki, tanpa label negatif",
    priority: "high",
  },
  {
    id: "o5",
    monthId: "2026-10",
    area: "gsa",
    title: "Adaptasi GSA",
    target: "Memahami ritme GSA dan mengikuti kegiatan yang diperlukan",
    indicator: "Meeting/briefing penting diikuti; alur kerja dipahami",
    priority: "high",
  },
  {
    id: "o6",
    monthId: "2026-10",
    area: "gsa",
    title: "Konsisten membuat konten",
    target: "2 konten per minggu tanpa mengorbankan kuliah dan kesehatan",
    indicator: "Jumlah konten mingguan tercapai secara realistis",
    priority: "high",
  },
  {
    id: "o7",
    monthId: "2026-10",
    area: "english",
    title: "Fondasi bahasa Inggris",
    target: "Menyelesaikan bagian awal buku dan mulai speaking/listening",
    indicator: "Mampu melakukan percakapan sederhana",
    priority: "medium",
  },
  {
    id: "o8",
    monthId: "2026-10",
    area: "technical",
    title: "Excel & statistik dasar",
    target: "Memahami dasar Excel dan statistik untuk analisis data",
    indicator: "Bisa memakai formula dasar, filter/sort, dan statistik dasar",
    priority: "high",
  },
  {
    id: "o9",
    monthId: "2026-10",
    area: "technical",
    title: "Typing 60 WPM",
    target: "60 WPM dengan akurasi baik",
    indicator: "Mencapai 60 WPM secara konsisten",
    priority: "medium",
  },
  {
    id: "o10",
    monthId: "2026-10",
    area: "career",
    title: "Eksplorasi magang",
    target: "Menentukan bidang dan daftar target magang; siapkan CV/dokumen",
    indicator: "Daftar target + CV awal siap",
    priority: "high",
  },
  {
    id: "o11",
    monthId: "2026-10",
    area: "academic",
    title: "Sistem kuliah",
    target: "Catatan lebih rapi dan materi penting tersimpan di Google Drive",
    indicator: "Catatan mingguan dan file materi terdokumentasi",
    priority: "high",
  },
  {
    id: "n1",
    monthId: "2026-11",
    area: "communication",
    title: "Public speaking — nyaman",
    target: "Presentasi 3–5 menit dan mulai improvisasi tanpa teks penuh",
    indicator: "Bisa berbicara dengan struktur sederhana dan tidak cepat blank",
    priority: "high",
  },
  {
    id: "n2",
    monthId: "2026-11",
    area: "social",
    title: "Mempertahankan percakapan",
    target: "Mampu melanjutkan percakapan dan lebih aktif bertanya",
    indicator: "Tidak cepat mengakhiri interaksi karena overthinking",
    priority: "high",
  },
  {
    id: "n3",
    monthId: "2026-11",
    area: "social",
    title: "Self-judgment → evaluasi",
    target: "Membedakan 'aku melakukan kesalahan' dari 'aku gagal'",
    indicator: "Kesalahan sosial dinilai sebagai data untuk perbaikan",
    priority: "high",
  },
  {
    id: "n4",
    monthId: "2026-11",
    area: "gsa",
    title: "Konsistensi & gaya konten",
    target: "2 konten per minggu dan mulai menemukan gaya komunikasi",
    indicator: "Punya bank ide dan beberapa format yang konsisten",
    priority: "high",
  },
  {
    id: "n5",
    monthId: "2026-11",
    area: "english",
    title: "Percakapan sehari-hari",
    target: "Lebih lancar dalam speaking/listening",
    indicator: "Tidak terlalu sering menerjemahkan setiap kalimat di kepala",
    priority: "medium",
  },
  {
    id: "n6",
    monthId: "2026-11",
    area: "technical",
    title: "Excel menengah + SQL dasar",
    target: "PivotTable, formula penting, visualisasi; SQL SELECT/WHERE/GROUP BY/JOIN",
    indicator: "Bisa mengerjakan kasus data sederhana",
    priority: "high",
  },
  {
    id: "n7",
    monthId: "2026-11",
    area: "technical",
    title: "Typing 70 WPM",
    target: "70 WPM dengan akurasi baik",
    indicator: "Mencapai 70 WPM secara konsisten",
    priority: "medium",
  },
  {
    id: "n8",
    monthId: "2026-11",
    area: "career",
    title: "Mulai mendaftar magang",
    target: "CV final dan beberapa lamaran terkirim",
    indicator: "Ada bukti aplikasi yang dikirim",
    priority: "high",
  },
  {
    id: "n9",
    monthId: "2026-11",
    area: "technical",
    title: "Digital product",
    target: "Menyelesaikan 1 digital product sederhana",
    indicator: "Ada versi yang dapat ditunjukkan/didemokan",
    priority: "medium",
  },
  {
    id: "d1",
    monthId: "2026-12",
    area: "communication",
    title: "Public speaking — terampil",
    target: "Presentasi 5–10 menit, runtut, minim ketergantungan pada teks",
    indicator: "Bisa menjelaskan dan merespons pertanyaan lebih stabil",
    priority: "high",
  },
  {
    id: "d2",
    monthId: "2026-12",
    area: "social",
    title: "Lebih natural dalam kelompok",
    target: "Aktif berdiskusi dan lebih nyaman berbicara dengan orang baru",
    indicator: "Mulai berinisiatif ikut percakapan/kelompok",
    priority: "high",
  },
  {
    id: "d3",
    monthId: "2026-12",
    area: "social",
    title: "Mengurangi takut dinilai",
    target: "Tidak terlalu lama memikirkan interaksi yang tidak sempurna",
    indicator: "Lebih cepat kembali ke aktivitas setelah interaksi",
    priority: "high",
  },
  {
    id: "d4",
    monthId: "2026-12",
    area: "gsa",
    title: "Pengembangan personal branding",
    target: "2 konten per minggu dan gaya konten lebih jelas",
    indicator: "Storytelling/editing/penyampaian makin konsisten",
    priority: "high",
  },
  {
    id: "d5",
    monthId: "2026-12",
    area: "english",
    title: "Fluency bertahap",
    target: "Mampu berbicara lebih panjang dan menjelaskan opini sederhana",
    indicator: "Lebih nyaman tanpa terjemahan terus-menerus",
    priority: "medium",
  },
  {
    id: "d6",
    monthId: "2026-12",
    area: "technical",
    title: "Excel + data analysis",
    target: "Memakai Excel untuk analisis data sederhana dan statistik dasar",
    indicator: "Ada minimal 1 hasil analisis yang rapi",
    priority: "high",
  },
  {
    id: "d7",
    monthId: "2026-12",
    area: "technical",
    title: "Typing 80 WPM",
    target: "80 WPM dengan akurasi baik",
    indicator: "Mencapai 80 WPM secara konsisten",
    priority: "medium",
  },
  {
    id: "d8",
    monthId: "2026-12",
    area: "career",
    title: "Persiapan interview",
    target: "CV + portfolio siap; latihan pertanyaan interview",
    indicator: "Mampu menjawab pertanyaan umum lebih terstruktur",
    priority: "high",
  },
  {
    id: "d9",
    monthId: "2026-12",
    area: "academic",
    title: "Arah skripsi",
    target: "Memiliki 1–3 kandidat topik yang realistis",
    indicator: "Ada alasan dan arah awal untuk tiap kandidat",
    priority: "medium",
  },
  {
    id: "j1",
    monthId: "2027-01",
    area: "communication",
    title: "Public speaking — natural dalam praktik",
    target: "Berbicara/briefing lebih natural dan tetap berfungsi saat gugup",
    indicator: "Tidak menghindari kesempatan berbicara",
    priority: "high",
  },
  {
    id: "j2",
    monthId: "2027-01",
    area: "social",
    title: "Lebih terbuka & self-judgment terkendali",
    target: "Lebih nyaman memulai interaksi dan tidak berlebihan menyalahkan diri",
    indicator: "Fokus pada pembelajaran setelah interaksi",
    priority: "high",
  },
  {
    id: "j3",
    monthId: "2027-01",
    area: "gsa",
    title: "Finish strong, bukan burnout",
    target: "Selesaikan GSA sampai 31 Jan dan jaga ritme 2 konten/minggu bila realistis",
    indicator: "Karya terkumpul dan pengalaman siap diceritakan",
    priority: "high",
  },
  {
    id: "j4",
    monthId: "2027-01",
    area: "english",
    title: "Practical English",
    target: "Menggunakan English dalam situasi nyata",
    indicator: "Conversation lebih spontan dan nyaman",
    priority: "medium",
  },
  {
    id: "j5",
    monthId: "2027-01",
    area: "technical",
    title: "Typing 90 WPM + portfolio",
    target: "90 WPM dengan akurasi baik dan 1 hasil kerja untuk portfolio",
    indicator: "90 WPM + ada output yang bisa ditunjukkan",
    priority: "medium",
  },
  {
    id: "j6",
    monthId: "2027-01",
    area: "career",
    title: "Siap seleksi magang",
    target: "CV/portfolio/interview siap dan strategi aplikasi lebih matang",
    indicator: "Siap mengikuti proses seleksi",
    priority: "high",
  },
];

export const GSA_WEEKS: { week: number; period: string }[] = [
  { week: 1, period: "1–7 Okt" },
  { week: 2, period: "8–14 Okt" },
  { week: 3, period: "15–21 Okt" },
  { week: 4, period: "22–28 Okt" },
  { week: 5, period: "29 Okt – 4 Nov" },
  { week: 6, period: "5–11 Nov" },
  { week: 7, period: "12–18 Nov" },
  { week: 8, period: "19–25 Nov" },
  { week: 9, period: "26 Nov – 2 Des" },
  { week: 10, period: "3–9 Des" },
  { week: 11, period: "10–16 Des" },
  { week: 12, period: "17–23 Des" },
  { week: 13, period: "24–30 Des" },
  { week: 14, period: "31 Des – 6 Jan" },
  { week: 15, period: "7–13 Jan" },
  { week: 16, period: "14–20 Jan" },
  { week: 17, period: "21–27 Jan" },
  { week: 18, period: "28–31 Jan" },
];

export const STATUS_LABEL: Record<Status, string> = {
  not_started: "Belum",
  in_progress: "Jalan",
  done: "Selesai",
};

export function achievementsForMonth(monthId: MonthId) {
  return ACHIEVEMENTS.filter((a) => a.monthId === monthId);
}
