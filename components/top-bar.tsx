import { MapPin, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { HOTEL } from "@/components/site-data"

export function TopBar() {
  return (
    <div className="hidden bg-primary text-primary-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5 text-sm">
        <ul className="flex items-center gap-7">
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            <span className="text-primary-foreground/85">{HOTEL.shortLocation}</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="size-4 text-accent" aria-hidden="true" />
            <a href={`mailto:${HOTEL.email}`} className="text-primary-foreground/85 transition-colors hover:text-accent">
              {HOTEL.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="size-4 text-accent" aria-hidden="true" />
            <a href={HOTEL.whatsappLink} className="text-primary-foreground/85 transition-colors hover:text-accent">
              WhatsApp {HOTEL.whatsapp}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2.5">
          <span className="font-heading text-sm tracking-[0.25em] text-primary-foreground/90 uppercase">
            {HOTEL.name}
          </span>
          <Logo className="size-7 text-accent" />
        </div>
      </div>
    </div>
  )
}
