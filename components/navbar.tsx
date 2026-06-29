"use client";

import { useContext, useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/social-icons";
import { langCotext } from "@/app/context/LangContext";
import { dataES } from "@/app/mock/dataEs";
import useNavigationHover from "@/app/hooks/useNavHover";

const SOCIALS = [
  { label: "Twitter", href: dataES.HOTEL.social.twitter, Icon: TwitterIcon },
  { label: "Facebook", href: dataES.HOTEL.social.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: dataES.HOTEL.social.linkedin, Icon: LinkedinIcon },
];

export function Navbar() {
  const info = useContext(langCotext);

  if (!info) return null;
  const hotel = info?.data.HOTEL;
  const data_nav = info?.data.NAV_LINKS;
  const { HandleLanguage } = info;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  const { activeSection } = useNavigationHover();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500  ",
        solid
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4">
        {/* Logo + name (left) */}
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={"logo-hotel1.png"}
            className={cn(
              "size-10 transition-colors duration-500",
              solid ? "text-primary" : "text-background",
            )}
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-xl tracking-wide transition-colors duration-500",
                solid ? "text-foreground" : "text-background",
              )}
            >
              {hotel.name}
            </span>
            <span
              className={cn(
                "mt-1 text-[0.625rem] uppercase tracking-[0.3em] transition-colors duration-500",
                solid ? "text-muted-foreground" : "text-background/75",
              )}
            >
              Hotel &amp; Spa
            </span>
          </span>
        </a>

        {/* Nav options (right) */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {data_nav.map((link) => (
              <li key={link.href} className="li_data-smooth">
                <a
                  href={"#" + link.href}
                  className={` underline-animation data-smooth  ${activeSection === link.href ? "active" : " "}
                    ${solid ? "text-[#8b8a8a]" : "text-[#ffffff]"}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "flex items-center gap-3 border-l pl-6 transition-colors duration-500",
              solid ? "border-border" : "border-background/30",
            )}
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${hotel.name} on ${label}`}
                className={cn(
                  "transition-colors",
                  solid
                    ? "text-muted-foreground hover:text-primary"
                    : "text-background/80 hover:text-background",
                )}
              >
                <Icon className="size-[1.15rem]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* SELECT DE IDIOMAS ADAPTADO AL ESTILO DEL HOTEL */}
            <div className="relative">
              <select
                defaultValue="es"
                onChange={HandleLanguage}
                /* Si solid es true, ponemos texto oscuro (text-slate-900) y borde sutil oscuro. Si no, queda blanco traslúcido. */
                className={`appearance-none pl-3 pr-7 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors focus:outline-none
      ${
        solid
          ? "bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900"
          : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
      }`}
              >
                <option value="es" className="text-slate-900">
                  ES
                </option>
                <option value="en" className="text-slate-900">
                  EN
                </option>
                <option value="pt" className="text-slate-900">
                  PT
                </option>
              </select>

              {/* Si solid es true, la flecha se oscurece a text-slate-600. Si no, mantiene text-white/70 */}
              <div
                className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none transition-colors
    ${solid ? "text-slate-600" : "text-white/70"}`}
              >
                <svg className="size-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={hotel.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md transition-colors lg:hidden",
            solid
              ? "text-foreground hover:bg-secondary"
              : "text-background hover:bg-background/10",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {data_nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium text-foreground/85 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between px-6 pb-5 pt-1">
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${hotel.name} on ${label}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>

            <a
              href={hotel.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
