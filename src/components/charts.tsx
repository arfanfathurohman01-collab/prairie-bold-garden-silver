import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const STATUS_COLORS = {
  Selesai: "var(--color-done)",
  Jalan: "var(--color-wip)",
  Belum: "var(--color-todo)",
};

export function StatusPie({
  done,
  wip,
  todo,
}: {
  done: number;
  wip: number;
  todo: number;
}) {
  const data = [
    { name: "Selesai", value: done },
    { name: "Jalan", value: wip },
    { name: "Belum", value: todo },
  ].filter((d) => d.value > 0);

  const fallback = [{ name: "Belum", value: 1 }];

  return (
    <div className="h-44 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data.length ? data : fallback}
            dataKey="value"
            nameKey="name"
            innerRadius={48}
            outerRadius={72}
            paddingAngle={2}
            stroke="none"
          >
            {(data.length ? data : fallback).map((entry) => (
              <Cell key={entry.name} fill={STATUS_COLORS[entry.name as keyof typeof STATUS_COLORS]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--color-elevated)",
              border: "1px solid var(--color-line)",
              borderRadius: 12,
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaPie({
  slices,
}: {
  slices: { name: string; value: number }[];
}) {
  const palette = [
    "var(--color-accent)",
    "var(--color-sage)",
    "var(--color-wip)",
    "var(--color-done)",
    "var(--color-line-strong)",
    "var(--color-muted)",
    "var(--color-ink)",
  ];
  const data = slices.filter((s) => s.value > 0);
  const fallback = [{ name: "Belum ada progres", value: 1 }];

  return (
    <div className="h-44 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data.length ? data : fallback}
            dataKey="value"
            nameKey="name"
            innerRadius={46}
            outerRadius={70}
            paddingAngle={1.5}
            stroke="none"
          >
            {(data.length ? data : fallback).map((entry, i) => (
              <Cell key={entry.name} fill={palette[i % palette.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--color-elevated)",
              border: "1px solid var(--color-line)",
              borderRadius: 12,
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
