import { cn } from "@/lib/utils"

export function StatusPill({
  children,
  tone = "neutral",
  className
} : {
  children: React.ReactNode
  tone?: "neutral" | "positive" | "warning" | "danger"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em]",
        tone === "neutral" && "bg-(--surface-raised) text-muted",
        tone === "positive" && "bg-(--positive-soft) text-positive",
        tone === "warning" && "bg-(--warning-soft) text-warning",
        className
      )}
    >
      {children}
    </span>
  )
}