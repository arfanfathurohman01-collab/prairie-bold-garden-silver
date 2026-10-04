import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as RotateCcw, r as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { a as CartesianGrid, c as Cell, i as XAxis, l as ResponsiveContainer, n as BarChart, o as Bar, r as YAxis, s as Pie, t as PieChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CH_vkEJh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_COLORS = {
	Selesai: "var(--color-done)",
	Jalan: "var(--color-wip)",
	Belum: "var(--color-todo)"
};
function StatusPie({ done, wip, todo }) {
	const data = [
		{
			name: "Selesai",
			value: done
		},
		{
			name: "Jalan",
			value: wip
		},
		{
			name: "Belum",
			value: todo
		}
	].filter((d) => d.value > 0);
	const fallback = [{
		name: "Belum",
		value: 1
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-44 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
			data: data.length ? data : fallback,
			dataKey: "value",
			nameKey: "name",
			innerRadius: 48,
			outerRadius: 72,
			paddingAngle: 2,
			stroke: "none",
			children: (data.length ? data : fallback).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: STATUS_COLORS[entry.name] }, entry.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
			background: "var(--color-elevated)",
			border: "1px solid var(--color-line)",
			borderRadius: 12,
			fontSize: 13
		} })] }) })
	});
}
function AreaPie({ slices }) {
	const palette = [
		"var(--color-accent)",
		"var(--color-sage)",
		"var(--color-wip)",
		"var(--color-done)",
		"var(--color-line-strong)",
		"var(--color-muted)",
		"var(--color-ink)"
	];
	const data = slices.filter((s) => s.value > 0);
	const fallback = [{
		name: "Belum ada progres",
		value: 1
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-44 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
			data: data.length ? data : fallback,
			dataKey: "value",
			nameKey: "name",
			innerRadius: 46,
			outerRadius: 70,
			paddingAngle: 1.5,
			stroke: "none",
			children: (data.length ? data : fallback).map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: palette[i % palette.length] }, entry.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
			background: "var(--color-elevated)",
			border: "1px solid var(--color-line)",
			borderRadius: 12,
			fontSize: 13
		} })] }) })
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Donut({ value, size = 96, stroke = 10, label, sub, className }) {
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const pct = Math.max(0, Math.min(100, value));
	const dash = pct / 100 * c;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative inline-grid place-items-center", className),
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: `0 0 ${size} ${size}`,
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "var(--color-line)",
				strokeWidth: stroke
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "var(--color-accent)",
				strokeWidth: stroke,
				strokeLinecap: "round",
				strokeDasharray: `${dash} ${c - dash}`
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-lg tabular-nums leading-none text-ink",
					children: [Math.round(pct), "%"]
				}),
				label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-muted",
					children: label
				}) : null,
				sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-subtle",
					children: sub
				}) : null
			] })
		})]
	});
}
var AREAS = {
	communication: {
		label: "Communication",
		short: "Komunikasi"
	},
	social: {
		label: "Social & Mindset",
		short: "Sosial"
	},
	gsa: {
		label: "GSA & Content",
		short: "GSA"
	},
	english: {
		label: "English",
		short: "English"
	},
	technical: {
		label: "Technical",
		short: "Teknis"
	},
	career: {
		label: "Career",
		short: "Karier"
	},
	academic: {
		label: "Academic",
		short: "Kuliah"
	}
};
var MONTHS = [
	{
		id: "2026-10",
		label: "Oktober 2026",
		short: "Okt",
		phase: "Berani memulai",
		focus: "Public speaking + social openness",
		intent: "Bangun fondasi tanpa menunggu percaya diri.",
		wpm: 60
	},
	{
		id: "2026-11",
		label: "November 2026",
		short: "Nov",
		phase: "Mulai terbiasa",
		focus: "Conversation + GSA consistency",
		intent: "Ubah kebiasaan yang baru dimulai menjadi ritme.",
		wpm: 70
	},
	{
		id: "2026-12",
		label: "Desember 2026",
		short: "Des",
		phase: "Menjadi terampil",
		focus: "Public speaking + technical output",
		intent: "Skill mulai menghasilkan karya yang terlihat.",
		wpm: 80
	},
	{
		id: "2027-01",
		label: "Januari 2027",
		short: "Jan",
		phase: "Menerapkan",
		focus: "GSA completion + real-world communication",
		intent: "Pakai skill di situasi nyata, finish strong.",
		wpm: 90
	}
];
var PATHS = [
	{
		id: "communication",
		label: "Communication",
		steps: "berani → terbiasa → terampil → natural"
	},
	{
		id: "social",
		label: "Social & Mindset",
		steps: "interaksi → percakapan → relasi"
	},
	{
		id: "gsa",
		label: "GSA & Content",
		steps: "adaptasi → konsistensi → portfolio"
	},
	{
		id: "career",
		label: "Career",
		steps: "eksplorasi → aplikasi → seleksi"
	},
	{
		id: "technical",
		label: "Technical",
		steps: "Excel → SQL → data analysis"
	}
];
var RULES = [
	{
		title: "GSA",
		body: "2 konten/minggu. Ranking dan reward adalah bonus."
	},
	{
		title: "Kuliah",
		body: "Prioritas utama. Jangan dikorbankan demi konten."
	},
	{
		title: "Mental",
		body: "Progres lebih penting dari kesempurnaan."
	},
	{
		title: "Public speaking",
		body: "Berani → terbiasa → terampil. Anxiety tidak harus 0."
	},
	{
		title: "WPM",
		body: "+10 WPM per bulan. Akurasi tetap penting (≥95%)."
	},
	{
		title: "Career",
		body: "Eksplorasi → aplikasi → seleksi. Bangun CV + portfolio."
	}
];
var ROADMAP = MONTHS.map((m, i) => ({
	...m,
	question: [
		"Apa yang perlu mulai dilakukan tanpa menunggu percaya diri?",
		"Bagaimana membuat perilaku Oktober menjadi lebih natural?",
		"Bagaimana mengubah kebiasaan menjadi kemampuan yang terlihat?",
		"Apakah skill yang dibangun benar-benar bisa dipakai?"
	][i],
	next: [
		"Keberanian bicara, tampil, dan membuat konten jadi dasar kenyamanan.",
		"Percakapan, public speaking, GSA, English, dan teknis dilakukan konsisten.",
		"Komunikasi dan teknis mulai menghasilkan output, portfolio, dan kesiapan interview.",
		"Semua kemampuan dipakai di situasi nyata, termasuk finish GSA dan kesiapan karier."
	][i]
}));
var ACHIEVEMENTS = [
	{
		id: "o1",
		monthId: "2026-10",
		area: "communication",
		title: "Public speaking — berani bicara",
		target: "Berani menyampaikan pendapat dan berbicara 1–3 menit meskipun masih gugup",
		indicator: "Tidak menghindari kesempatan bicara; minimal 1 sesi latihan/minggu",
		priority: "high"
	},
	{
		id: "o2",
		monthId: "2026-10",
		area: "social",
		title: "Banyakin senyum & ekspresi ramah",
		target: "Lebih sering menunjukkan ekspresi ramah saat bertemu/berbicara",
		indicator: "Lebih sering tersenyum dan membuka interaksi",
		priority: "medium"
	},
	{
		id: "o3",
		monthId: "2026-10",
		area: "social",
		title: "Lebih terbuka dengan orang lain",
		target: "Mulai sengaja membuka percakapan beberapa kali dalam seminggu",
		indicator: "Ada inisiatif menyapa/bertanya tanpa selalu menunggu",
		priority: "high"
	},
	{
		id: "o4",
		monthId: "2026-10",
		area: "social",
		title: "Kurangi self-judgment",
		target: "Menyadari saat mulai menghakimi diri dan menggantinya dengan evaluasi",
		indicator: "Menulis apa yang terjadi dan apa yang bisa diperbaiki, tanpa label negatif",
		priority: "high"
	},
	{
		id: "o5",
		monthId: "2026-10",
		area: "gsa",
		title: "Adaptasi GSA",
		target: "Memahami ritme GSA dan mengikuti kegiatan yang diperlukan",
		indicator: "Meeting/briefing penting diikuti; alur kerja dipahami",
		priority: "high"
	},
	{
		id: "o6",
		monthId: "2026-10",
		area: "gsa",
		title: "Konsisten membuat konten",
		target: "2 konten per minggu tanpa mengorbankan kuliah dan kesehatan",
		indicator: "Jumlah konten mingguan tercapai secara realistis",
		priority: "high"
	},
	{
		id: "o7",
		monthId: "2026-10",
		area: "english",
		title: "Fondasi bahasa Inggris",
		target: "Menyelesaikan bagian awal buku dan mulai speaking/listening",
		indicator: "Mampu melakukan percakapan sederhana",
		priority: "medium"
	},
	{
		id: "o8",
		monthId: "2026-10",
		area: "technical",
		title: "Excel & statistik dasar",
		target: "Memahami dasar Excel dan statistik untuk analisis data",
		indicator: "Bisa memakai formula dasar, filter/sort, dan statistik dasar",
		priority: "high"
	},
	{
		id: "o9",
		monthId: "2026-10",
		area: "technical",
		title: "Typing 60 WPM",
		target: "60 WPM dengan akurasi baik",
		indicator: "Mencapai 60 WPM secara konsisten",
		priority: "medium"
	},
	{
		id: "o10",
		monthId: "2026-10",
		area: "career",
		title: "Eksplorasi magang",
		target: "Menentukan bidang dan daftar target magang; siapkan CV/dokumen",
		indicator: "Daftar target + CV awal siap",
		priority: "high"
	},
	{
		id: "o11",
		monthId: "2026-10",
		area: "academic",
		title: "Sistem kuliah",
		target: "Catatan lebih rapi dan materi penting tersimpan di Google Drive",
		indicator: "Catatan mingguan dan file materi terdokumentasi",
		priority: "high"
	},
	{
		id: "n1",
		monthId: "2026-11",
		area: "communication",
		title: "Public speaking — nyaman",
		target: "Presentasi 3–5 menit dan mulai improvisasi tanpa teks penuh",
		indicator: "Bisa berbicara dengan struktur sederhana dan tidak cepat blank",
		priority: "high"
	},
	{
		id: "n2",
		monthId: "2026-11",
		area: "social",
		title: "Mempertahankan percakapan",
		target: "Mampu melanjutkan percakapan dan lebih aktif bertanya",
		indicator: "Tidak cepat mengakhiri interaksi karena overthinking",
		priority: "high"
	},
	{
		id: "n3",
		monthId: "2026-11",
		area: "social",
		title: "Self-judgment → evaluasi",
		target: "Membedakan 'aku melakukan kesalahan' dari 'aku gagal'",
		indicator: "Kesalahan sosial dinilai sebagai data untuk perbaikan",
		priority: "high"
	},
	{
		id: "n4",
		monthId: "2026-11",
		area: "gsa",
		title: "Konsistensi & gaya konten",
		target: "2 konten per minggu dan mulai menemukan gaya komunikasi",
		indicator: "Punya bank ide dan beberapa format yang konsisten",
		priority: "high"
	},
	{
		id: "n5",
		monthId: "2026-11",
		area: "english",
		title: "Percakapan sehari-hari",
		target: "Lebih lancar dalam speaking/listening",
		indicator: "Tidak terlalu sering menerjemahkan setiap kalimat di kepala",
		priority: "medium"
	},
	{
		id: "n6",
		monthId: "2026-11",
		area: "technical",
		title: "Excel menengah + SQL dasar",
		target: "PivotTable, formula penting, visualisasi; SQL SELECT/WHERE/GROUP BY/JOIN",
		indicator: "Bisa mengerjakan kasus data sederhana",
		priority: "high"
	},
	{
		id: "n7",
		monthId: "2026-11",
		area: "technical",
		title: "Typing 70 WPM",
		target: "70 WPM dengan akurasi baik",
		indicator: "Mencapai 70 WPM secara konsisten",
		priority: "medium"
	},
	{
		id: "n8",
		monthId: "2026-11",
		area: "career",
		title: "Mulai mendaftar magang",
		target: "CV final dan beberapa lamaran terkirim",
		indicator: "Ada bukti aplikasi yang dikirim",
		priority: "high"
	},
	{
		id: "n9",
		monthId: "2026-11",
		area: "technical",
		title: "Digital product",
		target: "Menyelesaikan 1 digital product sederhana",
		indicator: "Ada versi yang dapat ditunjukkan/didemokan",
		priority: "medium"
	},
	{
		id: "d1",
		monthId: "2026-12",
		area: "communication",
		title: "Public speaking — terampil",
		target: "Presentasi 5–10 menit, runtut, minim ketergantungan pada teks",
		indicator: "Bisa menjelaskan dan merespons pertanyaan lebih stabil",
		priority: "high"
	},
	{
		id: "d2",
		monthId: "2026-12",
		area: "social",
		title: "Lebih natural dalam kelompok",
		target: "Aktif berdiskusi dan lebih nyaman berbicara dengan orang baru",
		indicator: "Mulai berinisiatif ikut percakapan/kelompok",
		priority: "high"
	},
	{
		id: "d3",
		monthId: "2026-12",
		area: "social",
		title: "Mengurangi takut dinilai",
		target: "Tidak terlalu lama memikirkan interaksi yang tidak sempurna",
		indicator: "Lebih cepat kembali ke aktivitas setelah interaksi",
		priority: "high"
	},
	{
		id: "d4",
		monthId: "2026-12",
		area: "gsa",
		title: "Pengembangan personal branding",
		target: "2 konten per minggu dan gaya konten lebih jelas",
		indicator: "Storytelling/editing/penyampaian makin konsisten",
		priority: "high"
	},
	{
		id: "d5",
		monthId: "2026-12",
		area: "english",
		title: "Fluency bertahap",
		target: "Mampu berbicara lebih panjang dan menjelaskan opini sederhana",
		indicator: "Lebih nyaman tanpa terjemahan terus-menerus",
		priority: "medium"
	},
	{
		id: "d6",
		monthId: "2026-12",
		area: "technical",
		title: "Excel + data analysis",
		target: "Memakai Excel untuk analisis data sederhana dan statistik dasar",
		indicator: "Ada minimal 1 hasil analisis yang rapi",
		priority: "high"
	},
	{
		id: "d7",
		monthId: "2026-12",
		area: "technical",
		title: "Typing 80 WPM",
		target: "80 WPM dengan akurasi baik",
		indicator: "Mencapai 80 WPM secara konsisten",
		priority: "medium"
	},
	{
		id: "d8",
		monthId: "2026-12",
		area: "career",
		title: "Persiapan interview",
		target: "CV + portfolio siap; latihan pertanyaan interview",
		indicator: "Mampu menjawab pertanyaan umum lebih terstruktur",
		priority: "high"
	},
	{
		id: "d9",
		monthId: "2026-12",
		area: "academic",
		title: "Arah skripsi",
		target: "Memiliki 1–3 kandidat topik yang realistis",
		indicator: "Ada alasan dan arah awal untuk tiap kandidat",
		priority: "medium"
	},
	{
		id: "j1",
		monthId: "2027-01",
		area: "communication",
		title: "Public speaking — natural dalam praktik",
		target: "Berbicara/briefing lebih natural dan tetap berfungsi saat gugup",
		indicator: "Tidak menghindari kesempatan berbicara",
		priority: "high"
	},
	{
		id: "j2",
		monthId: "2027-01",
		area: "social",
		title: "Lebih terbuka & self-judgment terkendali",
		target: "Lebih nyaman memulai interaksi dan tidak berlebihan menyalahkan diri",
		indicator: "Fokus pada pembelajaran setelah interaksi",
		priority: "high"
	},
	{
		id: "j3",
		monthId: "2027-01",
		area: "gsa",
		title: "Finish strong, bukan burnout",
		target: "Selesaikan GSA sampai 31 Jan dan jaga ritme 2 konten/minggu bila realistis",
		indicator: "Karya terkumpul dan pengalaman siap diceritakan",
		priority: "high"
	},
	{
		id: "j4",
		monthId: "2027-01",
		area: "english",
		title: "Practical English",
		target: "Menggunakan English dalam situasi nyata",
		indicator: "Conversation lebih spontan dan nyaman",
		priority: "medium"
	},
	{
		id: "j5",
		monthId: "2027-01",
		area: "technical",
		title: "Typing 90 WPM + portfolio",
		target: "90 WPM dengan akurasi baik dan 1 hasil kerja untuk portfolio",
		indicator: "90 WPM + ada output yang bisa ditunjukkan",
		priority: "medium"
	},
	{
		id: "j6",
		monthId: "2027-01",
		area: "career",
		title: "Siap seleksi magang",
		target: "CV/portfolio/interview siap dan strategi aplikasi lebih matang",
		indicator: "Siap mengikuti proses seleksi",
		priority: "high"
	}
];
var GSA_WEEKS = [
	{
		week: 1,
		period: "1–7 Okt"
	},
	{
		week: 2,
		period: "8–14 Okt"
	},
	{
		week: 3,
		period: "15–21 Okt"
	},
	{
		week: 4,
		period: "22–28 Okt"
	},
	{
		week: 5,
		period: "29 Okt – 4 Nov"
	},
	{
		week: 6,
		period: "5–11 Nov"
	},
	{
		week: 7,
		period: "12–18 Nov"
	},
	{
		week: 8,
		period: "19–25 Nov"
	},
	{
		week: 9,
		period: "26 Nov – 2 Des"
	},
	{
		week: 10,
		period: "3–9 Des"
	},
	{
		week: 11,
		period: "10–16 Des"
	},
	{
		week: 12,
		period: "17–23 Des"
	},
	{
		week: 13,
		period: "24–30 Des"
	},
	{
		week: 14,
		period: "31 Des – 6 Jan"
	},
	{
		week: 15,
		period: "7–13 Jan"
	},
	{
		week: 16,
		period: "14–20 Jan"
	},
	{
		week: 17,
		period: "21–27 Jan"
	},
	{
		week: 18,
		period: "28–31 Jan"
	}
];
var STATUS_LABEL = {
	not_started: "Belum",
	in_progress: "Jalan",
	done: "Selesai"
};
function achievementsForMonth(monthId) {
	return ACHIEVEMENTS.filter((a) => a.monthId === monthId);
}
var defaultItems = () => Object.fromEntries(ACHIEVEMENTS.map((a) => [a.id, {
	status: "not_started",
	progress: 0,
	note: ""
}]));
var defaultWpm = () => Object.fromEntries(MONTHS.map((m) => [m.id, {
	actual: null,
	accuracy: null
}]));
var defaultGsa = () => Object.fromEntries(GSA_WEEKS.map((w) => [w.week, {
	actual: 0,
	idea: "",
	note: ""
}]));
var ORDER = [
	"not_started",
	"in_progress",
	"done"
];
var useTracker = create()(persist((set) => ({
	items: defaultItems(),
	wpm: defaultWpm(),
	gsa: defaultGsa(),
	setItem: (id, patch) => set((s) => ({ items: {
		...s.items,
		[id]: {
			...s.items[id],
			...patch
		}
	} })),
	cycleStatus: (id) => set((s) => {
		const cur = s.items[id] ?? {
			status: "not_started",
			progress: 0,
			note: ""
		};
		const next = ORDER[(ORDER.indexOf(cur.status) + 1) % ORDER.length];
		const progress = next === "done" ? 100 : next === "not_started" ? 0 : Math.max(cur.progress, 25);
		return { items: {
			...s.items,
			[id]: {
				...cur,
				status: next,
				progress
			}
		} };
	}),
	setWpm: (month, patch) => set((s) => ({ wpm: {
		...s.wpm,
		[month]: {
			...s.wpm[month],
			...patch
		}
	} })),
	setGsa: (week, patch) => set((s) => ({ gsa: {
		...s.gsa,
		[week]: {
			...s.gsa[week],
			...patch
		}
	} })),
	resetAll: () => set({
		items: defaultItems(),
		wpm: defaultWpm(),
		gsa: defaultGsa()
	})
}), { name: "s5-tracker-v1" }));
function itemOf(items, id) {
	return items[id] ?? {
		status: "not_started",
		progress: 0,
		note: ""
	};
}
function groupByArea(list) {
	const map = /* @__PURE__ */ new Map();
	for (const a of list) {
		const arr = map.get(a.area) ?? [];
		arr.push(a);
		map.set(a.area, arr);
	}
	return [...map.entries()];
}
function MonthBlock({ month, items }) {
	const store = useTracker();
	const avg = items.reduce((s, a) => s + itemOf(store.items, a.id).progress, 0) / Math.max(items.length, 1);
	const done = items.filter((a) => itemOf(store.items, a.id).status === "done").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-5 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-sage",
						children: month.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-ink sm:text-3xl",
						children: month.phase
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: month.focus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-ink/80",
						children: month.intent
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, {
					value: avg,
					size: 88,
					stroke: 9,
					sub: `${done}/${items.length}`
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-line",
			children: groupByArea(items).map(([area, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaGroup, {
				area,
				list
			}, area))
		})]
	});
}
function AreaGroup({ area, list }) {
	const [open, setOpen] = (0, import_react.useState)(true);
	const items = useTracker((s) => s.items);
	const avg = list.reduce((s, a) => s + itemOf(items, a.id).progress, 0) / list.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen((v) => !v),
		className: "flex w-full items-center justify-between gap-3 px-5 py-3 text-left sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-ink",
			children: AREAS[area].label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-muted",
			children: [
				list.length,
				" pencapaian · rata-rata ",
				Math.round(avg),
				"%"
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition-transform duration-200", open && "rotate-180") })]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-3 px-4 pb-5 sm:grid-cols-2 sm:px-6",
		children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementCard, { a }, a.id))
	}) : null] });
}
function AchievementCard({ a }) {
	const { items, setItem, cycleStatus } = useTracker();
	const row = itemOf(items, a.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-lg border border-line bg-elevated p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium leading-snug text-ink",
					children: a.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-relaxed text-muted",
					children: a.target
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide", a.priority === "high" ? "bg-accent/10 text-accent" : "bg-line text-muted"),
					children: a.priority === "high" ? "Utama" : "Sedang"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs italic text-subtle",
				children: a.indicator
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => cycleStatus(a.id),
					className: cn("h-9 min-w-20 rounded-sm px-3 text-xs font-medium", row.status === "done" && "bg-done text-accent-fg", row.status === "in_progress" && "bg-wip text-accent-fg", row.status === "not_started" && "bg-line text-ink"),
					children: STATUS_LABEL[row.status]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-w-0 flex-1 items-center gap-2 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono tabular-nums text-ink",
						children: [row.progress, "%"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						step: 5,
						value: row.progress,
						onChange: (e) => {
							const progress = Number(e.target.value);
							const status = progress >= 100 ? "done" : progress <= 0 ? "not_started" : "in_progress";
							setItem(a.id, {
								progress,
								status
							});
						},
						className: "h-2 w-full accent-accent"
					})]
				})]
			})
		]
	});
}
function Home() {
	const { items, wpm, gsa, setWpm, setGsa, resetAll } = useTracker();
	const [tab, setTab] = (0, import_react.useState)("ringkas");
	const stats = (0, import_react.useMemo)(() => {
		const rows = ACHIEVEMENTS.map((a) => ({
			a,
			p: itemOf(items, a.id)
		}));
		return {
			done: rows.filter((r) => r.p.status === "done").length,
			wip: rows.filter((r) => r.p.status === "in_progress").length,
			todo: rows.filter((r) => r.p.status === "not_started").length,
			avg: rows.reduce((s, r) => s + r.p.progress, 0) / Math.max(rows.length, 1),
			byArea: Object.keys(AREAS).map((id) => {
				const subset = rows.filter((r) => r.a.area === id);
				const value = subset.reduce((s, r) => s + r.p.progress, 0) / Math.max(subset.length, 1);
				return {
					name: AREAS[id].short,
					value: Math.round(value)
				};
			}),
			months: MONTHS.map((m) => {
				const subset = rows.filter((r) => r.a.monthId === m.id);
				const avgM = subset.reduce((s, r) => s + r.p.progress, 0) / Math.max(subset.length, 1);
				const doneM = subset.filter((r) => r.p.status === "done").length;
				return {
					...m,
					avg: avgM,
					done: doneM,
					total: subset.length
				};
			}),
			gsaMade: Object.values(gsa).reduce((s, w) => s + (w?.actual ?? 0), 0),
			gsaTarget: GSA_WEEKS.length * 2
		};
	}, [items, gsa]);
	const wpmData = MONTHS.map((m) => ({
		name: m.short,
		target: m.wpm,
		aktual: wpm[m.id]?.actual ?? 0
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-svh max-w-6xl px-4 py-6 pb-16 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.2em] text-sage",
						children: "Oktober 2026 – Januari 2027"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-[clamp(2rem,6vw,3.4rem)] leading-[1.05] text-ink",
						children: "Planning Semester 5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base",
						children: "Progres bertahap, bukan burnout. Empat bulan, lima jalur, satu ritme yang bisa dilihat dalam sekejap."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						if (confirm("Reset semua progres ke 0?")) resetAll();
					},
					className: "inline-flex h-11 items-center gap-2 self-start rounded-md border border-line bg-elevated px-4 text-sm text-muted hover:text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mb-6 flex gap-2 overflow-x-auto pb-1",
				children: [
					["ringkas", "Ringkasan"],
					["bulan", "4 bulan"],
					["wpm", "WPM"],
					["gsa", "GSA"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === id ? "bg-accent text-accent-fg" : "bg-elevated text-muted border border-line"),
					children: label
				}, id))
			}),
			tab === "ringkas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-muted",
										children: "Status keseluruhan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPie, {
										done: stats.done,
										wip: stats.wip,
										todo: stats.todo
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-1 flex flex-wrap gap-3 text-xs text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block size-2 rounded-full bg-done" }),
												"Selesai ",
												stats.done
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block size-2 rounded-full bg-wip" }),
												"Jalan ",
												stats.wip
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block size-2 rounded-full bg-todo" }),
												"Belum ",
												stats.todo
											] })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-muted",
										children: "Rata-rata per jalur"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaPie, { slices: stats.byArea }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-center font-mono text-sm tabular-nums text-ink",
										children: [Math.round(stats.avg), "% rata-rata"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-muted",
										children: "GSA vs target"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center py-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, {
											value: stats.gsaMade / stats.gsaTarget * 100,
											size: 140,
											stroke: 12,
											label: "konten",
											sub: `${stats.gsaMade}/${stats.gsaTarget}`
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-muted",
										children: "Baseline 2 konten × 18 minggu"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: stats.months.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab("bulan"),
							className: "rounded-xl border border-line bg-surface p-4 text-left shadow-[var(--shadow-card)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.16em] text-sage",
									children: m.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-xl leading-tight",
									children: m.phase
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-2 text-xs text-muted",
									children: m.focus
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, {
										value: m.avg,
										size: 72,
										stroke: 8
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											m.done,
											"/",
											m.total,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"selesai"
										]
									})]
								})
							]
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Lima jalur utama"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: PATHS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md border border-line bg-elevated p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: p.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted",
									children: p.steps
								})]
							}, p.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Roadmap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 grid gap-3 md:grid-cols-4",
							children: ROADMAP.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md border border-line bg-elevated p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.14em] text-sage",
										children: r.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-lg",
										children: r.phase
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink/80",
										children: r.question
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted",
										children: r.next
									})
								]
							}, r.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Aturan main"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md border border-line bg-elevated p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: r.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-muted",
									children: r.body
								})]
							}, r.title))
						})]
					})
				]
			}) : null,
			tab === "bulan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5",
				children: MONTHS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthBlock, {
					month: m,
					items: achievementsForMonth(m.id)
				}, m.id))
			}) : null,
			tab === "wpm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "WPM progression"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Target naik 10 WPM per bulan. Akurasi ≥95%."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: wpmData,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-line)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: {
											fill: "var(--color-muted)",
											fontSize: 12
										},
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fill: "var(--color-muted)",
											fontSize: 12
										},
										axisLine: false,
										domain: [0, 100]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--color-elevated)",
										border: "1px solid var(--color-line)",
										borderRadius: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "target",
										fill: "var(--color-line-strong)",
										radius: [
											6,
											6,
											0,
											0
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "aktual",
										fill: "var(--color-accent)",
										radius: [
											6,
											6,
											0,
											0
										]
									})
								]
							}) })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Catat hasil tes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: MONTHS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-line bg-elevated p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: [
									m.label,
									" · target ",
									m.wpm
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["Aktual WPM", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										max: 200,
										value: wpm[m.id]?.actual ?? "",
										onChange: (e) => setWpm(m.id, { actual: e.target.value === "" ? null : Number(e.target.value) }),
										className: "mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["Akurasi %", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										max: 100,
										value: wpm[m.id]?.accuracy ?? "",
										onChange: (e) => setWpm(m.id, { accuracy: e.target.value === "" ? null : Number(e.target.value) }),
										className: "mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
									})]
								})]
							})]
						}, m.id))
					})]
				})]
			}) : null,
			tab === "gsa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "GSA — 2 konten / minggu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-sm text-muted",
						children: "Program 1 Okt 2026 – 31 Jan 2027. Ranking adalah bonus. Jangan korbankan kuliah, tidur, atau kesehatan."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm tabular-nums text-ink",
						children: [
							stats.gsaMade,
							"/",
							stats.gsaTarget,
							" konten"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: GSA_WEEKS.map((w) => {
						const row = gsa[w.week] ?? {
							actual: 0,
							idea: "",
							note: ""
						};
						const ok = row.actual >= 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-line bg-elevated p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium",
										children: ["Minggu ", w.week]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-[10px] uppercase tracking-wide", ok ? "text-done" : "text-muted"),
										children: ok ? "Tercapai" : "Target 2"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: w.period
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-2 block text-xs text-muted",
									children: ["Aktual", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										max: 10,
										value: row.actual,
										onChange: (e) => setGsa(w.week, { actual: Number(e.target.value) }),
										className: "mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Ide / topik",
									value: row.idea,
									onChange: (e) => setGsa(w.week, { idea: e.target.value }),
									className: "mt-2 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink placeholder:text-subtle"
								})
							]
						}, w.week);
					})
				})]
			}) : null
		]
	});
}
//#endregion
export { Home as component };
