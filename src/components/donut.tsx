import { cn } from "@/lib/cn";

export function Donut({
  value,
  size = 96,
  stroke = 10,
  label,
  sub,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
  className?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;

  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-mono text-lg tabular-nums leading-none text-ink">{Math.round(pct)}%</p>
          {label ? <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">{label}</p> : null}
          {sub ? <p className="text-[10px] text-subtle">{sub}</p> : null}
        </div>
      </div>
    </div>
  );
}
