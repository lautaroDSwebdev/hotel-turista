import { Logo } from "@/components/logo"
import { HOTEL, NAV_LINKS } from "@/components/site-data"
import { TwitterIcon, FacebookIcon, LinkedinIcon,  } from "@/components/social-icons"

import { MapPin, Mail, Phone, MessageCircle } from "lucide-react"
// Asegúrate de importar tus iconos para redes sociales (ej: Twitter, Facebook, Linkedin) o eliminarlos si no los usas
// import { Twitter, Facebook, Linkedin } from "lucide-react" 

const SOCIALS = [
  { label: "Twitter", href: HOTEL.social.twitter, Icon: TwitterIcon },
  { label: "Facebook", href: HOTEL.social.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: HOTEL.social.linkedin, Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="size-10 text-primary" />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl text-foreground">Hotel Turista</span>
              <span className="mt-1 text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
                Tandil
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Un alojamiento cálido y confortable en el corazón de Tandil, ofreciendo la mejor atención 
            y hospitalidad para que te sientas como en casa.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Explorar</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
              <span>14 de Julio 60 Tandil, Buenos Aires.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-accent-foreground" />
              <a href="mailto:hotelturistatandil@gmail.com" className="transition-colors hover:text-primary">
                hotelturistatandil@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-accent-foreground" />
              <a href="tel:2494110891" className="transition-colors hover:text-primary">
                2494 110891
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Hotel Turista en ${label}`}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <a
              href="https://wa.me/5492494331998"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escríbenos por WhatsApp"
              className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hotel Turista Tandil. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
