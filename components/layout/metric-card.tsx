import { TicketCheck, TrendingDown, TrendingUp, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function MetricCard({
  id,
  eyebrow,
  value,
  detail,
  icon: Icon,
  trend,
  onClick,
  className
}: {
  id: string
  eyebrow: string
  value?: string
  detail: string
  icon: LucideIcon
  trend: "up" | "down" | "neutral"
  onClick: () => void
  className?: string
}) {
  return (
    <button
      id={id}
      data-avatar-target={id}
      onClick={onClick}
      className={cn(
        "metric-sheen min-h-42 rounded-[1.4rem] border border-(--line) bg-(--surface) p-5 text-left shadow-[0_18px_50px_rgba(21,26,25,0.05)] transition hover:-translate-y-0.5 hover:border-(--line-strong) sm:p-6",
        className
      )}
      type="button"
    >
      <span className="relative z-1 flex h-full flex-col">
        <span className="flex items-start justify-between">
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking=[0.17em] text-muted">
            {eyebrow}
          </span>
          <span className="grid size-9 place-items-center rounded-xl border border-(--line) bg-(--surface-raised) text-muted">
            <Icon className="size-4" />
          </span>
        </span>
        <span className="mt-auto">
          {value ? (
            <span className="block text-[2rem] font-semibold leading-none tracking-[0.055em]">
              {value}
            </span>
          ) : (
            <span className="block h-8 w-28 animate-pulse rounded-lg bg-(--surface-raised)" />
          )}
          <span className="mt-3 flex items-center gap-2 text-xs text-muted">
            {trend === "up" ? (
              <TrendingUp className="size-3.5 text-(--positive)" />
            ) : trend === "down" ? (
              <TrendingDown className="size-3.5 text-(--danger)" />
            ) : (
              <TicketCheck className="size-3.5 text-(--warning)" />
            )}
            {detail}
          </span>
        </span>
      </span>
    </button>
  )
}