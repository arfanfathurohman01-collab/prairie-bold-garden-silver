import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RotateCcw, Download } from "lucide-react";
import { AreaPie, StatusPie } from "@/components/charts";
import { Donut } from "@/components/donut";
import { MonthBlock } from "@/components/month-block";
import {
  ACHIEVEMENTS,
  AREAS,
  GSA_WEEKS,
  MONTHS,
  PATHS,
  ROADMAP,
  RULES,
  achievementsForMonth,
  type AreaId,
  type MonthId,
} from "@/lib/plan-data";
import { itemOf, useTracker } from "@/lib/store";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { items, wpm, gsa, setWpm, setGsa, resetAll } = useTracker();
  const [tab, setTab] = useState<"ringkas" | "bulan" | "wpm" | "gsa">("ringkas");

  const stats = useMemo(() => {
    const rows = ACHIEVEMENTS.map((a) => ({ a, p: itemOf(items, a.id) }));
    const done = rows.filter((r) => r.p.status === "done").length;
    const wip = rows.filter((r) => r.p.status === "in_progress").length;
    const todo = rows.filter((r) => r.p.status === "not_started").length;
    const avg =
      rows.reduce((s, r) => s + r.p.progress, 0) / Math.max(rows.length, 1);
    const byArea = (Object.keys(AREAS) as AreaId[]).map((id) => {
      const subset = rows.filter((r) => r.a.area === id);
      const value =
        subset.reduce((s, r) => s + r.p.progress, 0) / Math.max(subset.length, 1);
      return { name: AREAS[id].short, value: Math.round(value) };
    });
    const months = MONTHS.map((m) => {
      const subset = rows.filter((r) => r.a.monthId === m.id);
      const avgM =
        subset.reduce((s, r) => s + r.p.progress, 0) / Math.max(subset.length, 1);
      const doneM = subset.filter((r) => r.p.status === "done").length;
      return { ...m, avg: avgM, done: doneM, total: subset.length };
    });
    const gsaMade = Object.values(gsa).reduce((s, w) => s + (w?.actual ?? 0), 0);
    const gsaTarget = GSA_WEEKS.length * 2;
    return { done, wip, todo, avg, byArea, months, gsaMade, gsaTarget };
  }, [items, gsa]);

  const wpmData = MONTHS.map((m) => ({
    name: m.short,
    target: m.wpm,
    aktual: wpm[m.id]?.actual ?? 0,
  }));

  return (
    <main className="mx-auto min-h-svh max-w-6xl px-4 py-6 pb-16 sm:px-6 sm:py-10">
      <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-sage">
            Oktober 2026 – Januari 2027
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.4rem)] leading-[1.05] text-ink">
            Planning Semester 5
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Progres bertahap, bukan burnout. Empat bulan, lima jalur, satu ritme yang
            bisa dilihat dalam sekejap.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 self-start">
          <a
            href="/Planning_Semester_5_Achievement_Tracker_2026_2027.xlsx"
            download="Planning_Semester_5_Achievement_Tracker_2026_2027.xlsx"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm text-accent-fg"
          >
            <Download className="size-4" />
            Unduh Excel
          </a>
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset semua progres ke 0?")) resetAll();
            }}
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-elevated px-4 text-sm text-muted hover:text-ink"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        </div>
      </header>

      <nav className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {(
          [
            ["ringkas", "Ringkasan"],
            ["bulan", "4 bulan"],
            ["wpm", "WPM"],
            ["gsa", "GSA"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-11 shrink-0 rounded-full px-4 text-sm",
              tab === id ? "bg-accent text-accent-fg" : "bg-elevated text-muted border border-line",
            )}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === "ringkas" ? (
        <div className="grid gap-4">
          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Status keseluruhan</p>
              <StatusPie done={stats.done} wip={stats.wip} todo={stats.todo} />
              <ul className="mt-1 flex flex-wrap gap-3 text-xs text-muted">
                <li>
                  <span className="mr-1 inline-block size-2 rounded-full bg-done" />
                  Selesai {stats.done}
                </li>
                <li>
                  <span className="mr-1 inline-block size-2 rounded-full bg-wip" />
                  Jalan {stats.wip}
                </li>
                <li>
                  <span className="mr-1 inline-block size-2 rounded-full bg-todo" />
                  Belum {stats.todo}
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Rata-rata per jalur</p>
              <AreaPie slices={stats.byArea} />
              <p className="text-center font-mono text-sm tabular-nums text-ink">
                {Math.round(stats.avg)}% rata-rata
              </p>
            </article>
            <article className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">GSA vs target</p>
              <div className="flex justify-center py-2">
                <Donut
                  value={(stats.gsaMade / stats.gsaTarget) * 100}
                  size={140}
                  stroke={12}
                  label="konten"
                  sub={`${stats.gsaMade}/${stats.gsaTarget}`}
                />
              </div>
              <p className="text-center text-xs text-muted">Baseline 2 konten × 18 minggu</p>
            </article>
          </section>

          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.months.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setTab("bulan")}
                className="rounded-xl border border-line bg-surface p-4 text-left shadow-[var(--shadow-card)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-sage">{m.label}</p>
                <h2 className="mt-1 font-display text-xl leading-tight">{m.phase}</h2>
                <p className="mt-1 line-clamp-2 text-xs text-muted">{m.focus}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Donut value={m.avg} size={72} stroke={8} />
                  <p className="text-xs text-muted">
                    {m.done}/{m.total}
                    <br />
                    selesai
                  </p>
                </div>
              </button>
            ))}
          </section>

          <section className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl">Lima jalur utama</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {PATHS.map((p) => (
                <li key={p.id} className="rounded-md border border-line bg-elevated p-3">
                  <p className="text-sm font-medium">{p.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{p.steps}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl">Roadmap</h2>
            <ol className="mt-4 grid gap-3 md:grid-cols-4">
              {ROADMAP.map((r) => (
                <li key={r.id} className="rounded-md border border-line bg-elevated p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-sage">{r.label}</p>
                  <p className="mt-1 font-display text-lg">{r.phase}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{r.question}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{r.next}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl">Aturan main</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RULES.map((r) => (
                <li key={r.title} className="rounded-md border border-line bg-elevated p-4">
                  <p className="text-sm font-medium">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}

      {tab === "bulan" ? (
        <div className="grid gap-5">
          {MONTHS.map((m) => (
            <MonthBlock key={m.id} month={m} items={achievementsForMonth(m.id)} />
          ))}
        </div>
      ) : null}

      {tab === "wpm" ? (
        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl">WPM progression</h2>
            <p className="mt-1 text-sm text-muted">Target naik 10 WPM per bulan. Akurasi ≥95%.</p>
            <div className="mt-4 h-64">
              <ResponsiveContainer>
                <BarChart data={wpmData}>
                  <CartesianGrid stroke="var(--color-line)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} />
                  <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-elevated)",
                      border: "1px solid var(--color-line)",
                      borderRadius: 12,
                    }}
                  />
                  <Bar dataKey="target" fill="var(--color-line-strong)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="aktual" fill="var(--color-accent)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>
          <article className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl">Catat hasil tes</h2>
            <ul className="mt-4 grid gap-3">
              {MONTHS.map((m) => (
                <li key={m.id} className="rounded-md border border-line bg-elevated p-3">
                  <p className="text-sm font-medium">
                    {m.label} · target {m.wpm}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <label className="text-xs text-muted">
                      Aktual WPM
                      <input
                        type="number"
                        min={0}
                        max={200}
                        value={wpm[m.id]?.actual ?? ""}
                        onChange={(e) =>
                          setWpm(m.id as MonthId, {
                            actual: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
                      />
                    </label>
                    <label className="text-xs text-muted">
                      Akurasi %
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={wpm[m.id]?.accuracy ?? ""}
                        onChange={(e) =>
                          setWpm(m.id as MonthId, {
                            accuracy: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>
      ) : null}

      {tab === "gsa" ? (
        <section className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl">GSA — 2 konten / minggu</h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Program 1 Okt 2026 – 31 Jan 2027. Ranking adalah bonus. Jangan korbankan kuliah,
                tidur, atau kesehatan.
              </p>
            </div>
            <p className="font-mono text-sm tabular-nums text-ink">
              {stats.gsaMade}/{stats.gsaTarget} konten
            </p>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {GSA_WEEKS.map((w) => {
              const row = gsa[w.week] ?? { actual: 0, idea: "", note: "" };
              const ok = row.actual >= 2;
              return (
                <div key={w.week} className="rounded-md border border-line bg-elevated p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Minggu {w.week}</p>
                    <span className={cn("text-[10px] uppercase tracking-wide", ok ? "text-done" : "text-muted")}>
                      {ok ? "Tercapai" : "Target 2"}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{w.period}</p>
                  <label className="mt-2 block text-xs text-muted">
                    Aktual
                    <input
                      type="number"
                      min={0}
                      max={10}
                      value={row.actual}
                      onChange={(e) => setGsa(w.week, { actual: Number(e.target.value) })}
                      className="mt-1 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink"
                    />
                  </label>
                  <input
                    placeholder="Ide / topik"
                    value={row.idea}
                    onChange={(e) => setGsa(w.week, { idea: e.target.value })}
                    className="mt-2 h-10 w-full rounded-sm border border-line bg-surface px-2 text-sm text-ink placeholder:text-subtle"
                  />
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
  );
}
