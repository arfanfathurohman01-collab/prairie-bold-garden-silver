import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ACHIEVEMENTS,
  GSA_WEEKS,
  MONTHS,
  type MonthId,
  type Status,
} from "./plan-data";

export type ProgressEntry = {
  status: Status;
  progress: number;
  note: string;
};

type WpmMonth = {
  actual: number | null;
  accuracy: number | null;
};

type GsaWeek = {
  actual: number;
  idea: string;
  note: string;
};

type State = {
  items: Record<string, ProgressEntry>;
  wpm: Record<MonthId, WpmMonth>;
  gsa: Record<number, GsaWeek>;
  setItem: (id: string, patch: Partial<ProgressEntry>) => void;
  cycleStatus: (id: string) => void;
  setWpm: (month: MonthId, patch: Partial<WpmMonth>) => void;
  setGsa: (week: number, patch: Partial<GsaWeek>) => void;
  resetAll: () => void;
};

const defaultItems = () =>
  Object.fromEntries(
    ACHIEVEMENTS.map((a) => [
      a.id,
      { status: "not_started" as Status, progress: 0, note: "" },
    ]),
  );

const defaultWpm = () =>
  Object.fromEntries(
    MONTHS.map((m) => [m.id, { actual: null, accuracy: null }]),
  ) as Record<MonthId, WpmMonth>;

const defaultGsa = () =>
  Object.fromEntries(
    GSA_WEEKS.map((w) => [w.week, { actual: 0, idea: "", note: "" }]),
  ) as Record<number, GsaWeek>;

const ORDER: Status[] = ["not_started", "in_progress", "done"];

export const useTracker = create<State>()(
  persist(
    (set) => ({
      items: defaultItems(),
      wpm: defaultWpm(),
      gsa: defaultGsa(),
      setItem: (id, patch) =>
        set((s) => ({
          items: {
            ...s.items,
            [id]: { ...s.items[id], ...patch },
          },
        })),
      cycleStatus: (id) =>
        set((s) => {
          const cur = s.items[id] ?? {
            status: "not_started" as Status,
            progress: 0,
            note: "",
          };
          const next = ORDER[(ORDER.indexOf(cur.status) + 1) % ORDER.length];
          const progress =
            next === "done" ? 100 : next === "not_started" ? 0 : Math.max(cur.progress, 25);
          return { items: { ...s.items, [id]: { ...cur, status: next, progress } } };
        }),
      setWpm: (month, patch) =>
        set((s) => ({ wpm: { ...s.wpm, [month]: { ...s.wpm[month], ...patch } } })),
      setGsa: (week, patch) =>
        set((s) => ({ gsa: { ...s.gsa, [week]: { ...s.gsa[week], ...patch } } })),
      resetAll: () =>
        set({ items: defaultItems(), wpm: defaultWpm(), gsa: defaultGsa() }),
    }),
    { name: "s5-tracker-v1" },
  ),
);

export function itemOf(
  items: Record<string, ProgressEntry>,
  id: string,
): ProgressEntry {
  return items[id] ?? { status: "not_started", progress: 0, note: "" };
}
