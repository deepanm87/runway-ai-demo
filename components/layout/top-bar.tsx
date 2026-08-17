"use client"

import { Bell, Command, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { useDashboard } from "@/components/layout/dashboard-provider"
import { Button } from "@/components/ui/button"

const pageNames: Record<string, string> = {
  "/": "Overview",
  "/revenue": "Revenue",
  "/tickets": "Tickets",
  "/settings": "Settings"
}

const mobileTargets: Record<string, string> = {
  "/": "overview",
  "/revenue": "revenue",
  "/tickets": "tickets",
  "/settings": "settings"
}

export function TopBar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const { openPanel } = useDashboard()
  const isDark = resolvedTheme === "dark"

  return (
    <header className="sticky top-0 z-30 border-b border-(--line) bg-(--paper)/88 backdrop-blur-xl">
      <div className="flex h-16.5 items-center justify-between px-4 sm:px-7 lg:px-8">
        <Link href="/" className="flex items-center gap-3 sm:hidden">
          <span className="grid size-8 place-items-center rounded-xl bg-(--ink) text-(--accent)">
            <Command className="size-4" />
          </span>
          <span className="font-semibold tracking-[-0.04em]">Northstar</span>
        </Link>
        <div className="hidden items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-(--muted) md:flex">
          <span>Workspace</span>
          <span>/</span>
          <span className="text-(--ink)">{pageNames[pathname] ?? "Overview"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            id="notifications"
            data-avatar-target="notifications"
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            onClick={() => 
              openPanel({
                title: "All caught up",
                body: "No urgent alerts. The refund anomaly is already marked on the Revenue page."
              })
            }
          >
            <Bell className="size-4" />
          </Button>
          <Button
            id="theme-toggle"
            data-avatar-target="theme-toggle"
            variant="outline"
            size="icon"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <div className="ml-1 grid size-9 place-items-center rounded-full bg-(--ink) text-xs font-semibold text-(--paper)">
            SS
          </div>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-2 md:hidden" aria-label="Mobile navigation">
        {Object.entries(pageNames).map(([href, label]) => (
          <Link
            key={href}
            href={href}
            id={`mobile-${mobileTargets[href]}`}
            data-avatar-target={`mobile-${mobileTargets[href]}`}
            className="rounded-full px-3 py-1.5 text-xs text-(--muted) hover:bg-(--surface-raised)"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}