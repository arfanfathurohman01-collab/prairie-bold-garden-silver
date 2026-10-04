import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Donut } from "@/components/donut";
import { AREAS, STATUS_LABEL, type Achievement, type AreaId } from "@/lib/plan-data";
import { itemOf, useTracker } from "@/lib/store";
import { cn } from "@/lib/cn";

function groupByArea(list: Achievement[]) {
  const map = new Map<AreaId, Achievement[]>();
  for (const a of list) {
    const arr = map.get(a.area) ?? [];
    arr.push(a);
    map.set(a.area, arr);
  }
  return [...map.entries()];
}

export function MonthBlock({
  month,
  items,
}: {
  month: {
    id: Achievement["monthId"];
    label: string;
    phase: string;
    focus: string;
    intent: string;
  };
  items: Achievement[];
}) {
  const store = useTracker();
  const avg =
    items.reduce((s, a) => s + itemOf(store.items, a.id).progress, 0) / Math.max(items.length, 1);
  const done = items.filter((a) => itemOf(store.items, a.id).status === "done").length;

  return (
    <section className="overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-card)]">
      <header className="flex flex-col gap-5 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-sage">{month.label}</p>
          <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">{month.phase}</h2>
          <p className="mt-1 text-sm text-muted">{month.focus}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/80">{month.intent}</p>
        </div>
        <div className="flex items-center gap-4">
          <Donut value={avg} size={88} stroke={9} sub={`${done}/${items.length}`} />
        </div>
      </header>

      <div className="divide-y divide-line">
        {groupByArea(items).map(([area, list]) => (
          <AreaGroup key={area} area={area} list={list} />
        ))}
      </div>
    </section>
  );
}

function AreaGroup({ area, list }: { area: AreaId; list: Achievement[] }) {
  const [open, setOpen] = useState(true);
  const items = useTracker((s) => s.items);
  const avg = list.reduce((s, a) => s + itemOf(items, a.id).progress, 0) / list.length;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left sm:px-6"
      >
        <div>
          <p className="text-sm font-medium text-ink">{AREAS[area].label}</p>
          <p className="text-xs text-muted">
            {list.length} pencapaian · rata-rata {Math.round(avg)}%
          </p>
        </div>
        <ChevronDown className={cn("size-4 text-muted transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open ? (
        <ul className="grid gap-3 px-4 pb-5 sm:grid-cols-2 sm:px-6">
          {list.map((a) => (
            <AchievementCard key={a.id} a={a} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function AchievementCard({ a }: { a: Achievement }) {
  const { items, setItem, cycleStatus } = useTracker();
  const row = itemOf(items, a.id);

  return (
    <li className="rounded-lg border border-line bg-elevated p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium leading-snug text-ink">{a.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{a.target}</p>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
            a.priority === "high" ? "bg-accent/10 text-accent" : "bg-line text-muted",
          )}
        >
          {a.priority === "high" ? "Utama" : "Sedang"}
        </span>
      </div>
      <p className="mt-2 text-xs italic text-subtle">{a.indicator}</p>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => cycleStatus(a.id)}
          className={cn(
            "h-9 min-w-20 rounded-sm px-3 text-xs font-medium",
            row.status === "done" && "bg-done text-accent-fg",
            row.status === "in_progress" && "bg-wip text-accent-fg",
            row.status === "not_started" && "bg-line text-ink",
          )}
        >
          {STATUS_LABEL[row.status]}
        </button>
        <label className="flex min-w-0 flex-1 items-center gap-2 text-xs text-muted">
          <span className="font-mono tabular-nums text-ink">{row.progress}%</span>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={row.progress}
            onChange={(e) => {
              const progress = Number(e.target.value);
              const status: typeof row.status =
                progress >= 100 ? "done" : progress <= 0 ? "not_started" : "in_progress";
              setItem(a.id, { progress, status });
            }}
            className="h-2 w-full accent-accent"
          />
        </label>
      </div>
    </li>
  );
}
