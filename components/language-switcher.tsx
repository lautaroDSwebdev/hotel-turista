"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { LANGUAGES } from "@/components/site-data"

// NOTE: This switcher is purely visual/dynamic. Selecting a language only
// updates the highlighted option — there is no real translation behind it.
export function LanguageSwitcher({
  solid = true,
  className,
}: {
  solid?: boolean
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(LANGUAGES[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          solid
            ? "border-border text-foreground/80 hover:border-primary hover:text-primary"
            : "border-background/30 text-background/90 hover:border-background hover:text-background",
        )}
      >
        <Globe className="size-4" aria-hidden="true" />
        <span>{current.code}</span>
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-sm border border-border bg-popover py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === current.code
            return (
              <li key={lang.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrent(lang)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                    active
                      ? "bg-secondary font-semibold text-foreground"
                      : "text-popover-foreground/80 hover:bg-secondary/60",
                  )}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {lang.flag}
                  </span>
                  <span className="flex-1">{lang.label}</span>
                  <span className="text-xs tracking-wide text-muted-foreground">{lang.code}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
