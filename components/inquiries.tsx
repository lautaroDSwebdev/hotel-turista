"use client"

import { useState } from "react"
import { Check, MessageCircle } from "lucide-react"
import { HOTEL } from "@/components/site-data"

export function Inquiries() {

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
  const labelClass = "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground"

  return (
    <section id="consultas" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">Consultas</p>
            <h2 className="text-balance font-heading text-4xl leading-tight md:text-5xl">
              Comienza a planificar tu estadía
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              Envíanos tus fechas y preferencias; nuestro equipo de reservas te responderá dentro de las 24
              horas para confirmarte la disponibilidad y ofrecerte una propuesta a tu medida.
            </p>

            <div className="mt-10 space-y-4 text-primary-foreground/90">
              <p className="text-sm">¿Prefieres chatear directamente con nosotros?</p>
              <a
                href="https://wa.me/5492494331998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95"
              >
                <MessageCircle className="size-4" />
                Escríbenos por WhatsApp
              </a>
              <p className="pt-2 text-sm text-primary-foreground/70">
                O envíanos un correo a{" "}
                <a href="mailto:hotelturistatandil@gmail.com" className="text-accent underline-offset-4 hover:underline">
                  hotelturistatandil@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-sm border border-primary-foreground/15 bg-background p-6 text-foreground shadow-xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-8" />
                </span>
                <h3 className="mt-6 font-heading text-2xl text-foreground">¡Muchas gracias, {form.name || "huésped"}!</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Hemos recibido tu consulta. Nuestro equipo se pondrá en contacto contigo muy pronto para ayudarte a organizar tu estadía en el Hotel Turista.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    className={inputClass}
                    placeholder="Juan Pérez"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    placeholder="juan@ejemplo.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className={labelClass}>
                      Check-in
                    </label>
                    <input
                      id="checkIn"
                      type="date"
                      className={inputClass}
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className={labelClass}>
                      Check-out
                    </label>
                    <input
                      id="checkOut"
                      type="date"
                      className={inputClass}
                      value={form.checkOut}
                      onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    Huéspedes
                  </label>
                  <select
                    id="guests"
                    className={inputClass}
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  >
                    {["1", "2", "3", "4", "5+"].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === "1" ? "huésped" : "huéspedes"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className={`${inputClass} min-h-28 resize-y`}
                    placeholder="Cuéntanos sobre tu viaje o si tienes alguna petición especial…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}