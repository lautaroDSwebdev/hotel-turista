import { MessageCircle, MapPin, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { HOTEL, NAV_LINKS } from "@/components/site-data"
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "@/components/social-icons"

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
              <span className="font-heading text-xl text-foreground">{HOTEL.name}</span>
              <span className="mt-1 text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
                Hotel &amp; Spa
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            A boutique coastal retreat on the French Riviera, offering timeless elegance and warm
            hospitality since 1924.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Explore</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
              <span>{HOTEL.location}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-accent-foreground" />
              <a href={`mailto:${HOTEL.email}`} className="transition-colors hover:text-primary">
                {HOTEL.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-accent-foreground" />
              <a href={`tel:${HOTEL.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                {HOTEL.phone}
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
                aria-label={`${HOTEL.name} on ${label}`}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <a
              href={HOTEL.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {HOTEL.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
