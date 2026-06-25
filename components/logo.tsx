import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-full", className)}
      role="img"
      aria-label="Verana Hotel monogram"
      fill="none"
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <path
        d="M15 16.5 L24 32 L33 16.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 16.5 L28 16.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}
