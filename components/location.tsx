import { HOTEL } from "@/components/site-data"
import { MapPin, Mail, Phone, Clock } from "lucide-react" // Asegúrate de importar o usar tu icono para WhatsApp si lo prefieres

const DETAILS = [
  { icon: MapPin, label: "Dirección", value: "14 de Julio 60 Tandil, Buenos Aires." },
  { icon: Mail, label: "Email", value: "hotelturistatandil@gmail.com", href: "mailto:hotelturistatandil@gmail.com" },
  { icon: Phone, label: "Recepción", value: "2494 110891", href: "tel:2494110891" },
  { 
    icon: Phone, // Puedes cambiarlo por un icono de WhatsApp si lo tienes disponible (ej. MessageSquare o un SVG)
    label: "WhatsApp", 
    value: "2494 331998", 
    href: "https://wa.me/5492494331998" // Formato internacional para Argentina para abrir chat directo
  },
  { icon: Clock, label: "Horarios de reserva", value: "De 8:00 a 22:00 hs" },
]

export function Location() {
  return (
    <section id="ubicacion" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-foreground/80">Ubicación</p>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
              Encuéntranos en Tandil
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Te esperamos en nuestra céntrica y cómoda ubicación para ofrecerte la mejor atención durante tu estadía.
            </p>

            <ul className="mt-10 space-y-6">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} className="mt-1 block text-foreground transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-sm border border-border shadow-sm">
            <iframe
              title="Mapa que muestra la ubicación del Hotel Turista Tandil"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3405992391013!2d-59.13694439999999!3d-37.3344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b19e0df87%3A0x47c27265e00172ae!2sHotel%20Turista!5e0!3m2!1ses-419!2sar!4v1782344729111!5m2!1ses-419!2sar"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}