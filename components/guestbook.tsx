"use client"


import { useState } from "react"
import { Star, Quote } from "lucide-react"

// Definición de tipo para TypeScript (si lo estás usando)
interface Entry {
  name: string
  location: string
  rating: number
  message: string
}

const INITIAL: Entry[] = [
  {
    name: "Élise Moreau",
    location: "París, Francia",
    rating: 5,
    message:
      "Una estadía inolvidable. La suite con vista al mar era imponente y el personal se anticipó a cada una de nuestras necesidades. Ya estamos planeando nuestro regreso.",
  },
  {
    name: "James Whitfield",
    location: "Londres, Reino Unido",
    rating: 5,
    message:
      "El spa por sí solo ya vale el viaje. Si a eso le sumas una gastronomía increíble y la hospitalidad más cálida, tienes un lugar realmente especial.",
  },
  {
    name: "Sofia Marchetti",
    location: "Milán, Italia",
    rating: 4,
    message:
      "Un hotel sereno, hermoso y con encanto en cada rincón. Desayunar en la terraza con vista al agua fue lo mejor de cada mañana.",
  },
]

function Stars({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= value
        const star = (
          <Star className={`size-5 ${filled ? "fill-accent text-accent" : "text-muted-foreground/40"}`} />
        )
        return onChange ? (
          <button key={n} type="button" onClick={() => onChange(n)} aria-label={`Calificar con ${n} estrellas`}>
            {star}
          </button>
        ) : (
          <span key={n}>{star}</span>
        )
      })}
    </div>
  )
}

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(INITIAL)
  const [form, setForm] = useState({ name: "", location: "", message: "" })
  const [rating, setRating] = useState(5)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setEntries((prev) => [{ ...form, rating }, ...prev])
    setForm({ name: "", location: "", message: "" })
    setRating(5)
  }

  const inputClass =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"

  return (
    <section id="libro-de-visitas" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-foreground/80">Libro de visitas</p>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
            Opiniones de nuestros huéspedes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comparte un recuerdo de tu estadía o lee las experiencias de otras personas.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Dejar un comentario en el libro de visitas */}
          <form
            onSubmit={handleSubmit}
            className="h-fit rounded-sm border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28"
          >
            <h3 className="font-heading text-2xl text-foreground">Firma el libro de visitas</h3>
            <div className="mt-5 space-y-4">
              <input
                className={inputClass}
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-label="Tu nombre"
                required
              />
              <input
                className={inputClass}
                placeholder="De dónde nos visitas"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                aria-label="De dónde nos visitas"
              />
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Tu calificación</span>
                <Stars value={rating} onChange={setRating} />
              </div>
              <textarea
                className={`${inputClass} min-h-28 resize-y`}
                placeholder="Cuéntanos sobre tu estadía…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-label="Tu mensaje"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
              >
                Agregar al libro de visitas
              </button>
            </div>
          </form>

          {/* Comentarios */}
          <ul className="space-y-6">
            {entries.map((entry, i) => (
              <li key={`${entry.name}-${i}`} className="relative rounded-sm border border-border bg-card p-6 shadow-sm">
                <Quote className="absolute right-6 top-6 size-8 text-accent/30" aria-hidden="true" />
                <Stars value={entry.rating} />
                <p className="mt-4 text-pretty leading-relaxed text-foreground/90">{entry.message}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-heading text-lg text-foreground">{entry.name}</p>
                  {entry.location && <p className="text-sm text-muted-foreground">{entry.location}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}