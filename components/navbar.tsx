"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { HOTEL, NAV_LINKS } from "@/components/site-data";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/social-icons";
import useNavigationHover from "@/public/hooks/useNavHover";

const SOCIALS = [
  { label: "Twitter", href: HOTEL.social.twitter, Icon: TwitterIcon },
  { label: "Facebook", href: HOTEL.social.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: HOTEL.social.linkedin, Icon: LinkedinIcon },
];

export function Navbar() {
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
        "sticky top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        {/* Logo + name (left) */}
        <a href="#top" className="group flex items-center gap-3">
          <img src={"logo-hotel1.png"}
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
              {HOTEL.name}
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={"#" + link.href}
                  className={` underline-animation  ${activeSection === link.href ? "active" : " "}
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
                aria-label={`${HOTEL.name} on ${label}`}
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

          <a
            href={HOTEL.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
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
            {NAV_LINKS.map((link) => (
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
                  aria-label={`${HOTEL.name} on ${label}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
            <a
              href={HOTEL.whatsappLink}
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
