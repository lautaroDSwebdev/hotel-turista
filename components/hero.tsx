"use client"
import Image from "next/image";
// import { IMAGES } from "@/app/mock/site-data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useContext, useEffect } from "react";
import { langCotext } from "./context/LangContext";

export function Hero() {


  const info = useContext(langCotext);

  if (!info) return null;
  const hero = info?.data.CONTENT.hero;




  
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    gsap.from(".hero-info  ", {
      scrollTrigger: {
        trigger: ".hero-info  ",
        // start: 50
        toggleActions: "restart",
      },
      opacity: 0,
      y: -50,
      duration: 1,
    });
    gsap.to(".hero-info  ", {
      scrollTrigger: {
        trigger: ".hero-info  ",
        // start: 50
        toggleActions: "play",
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <section
      id="top"
      className="relative -mt-20 flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src={IMAGES.hero}
        alt="Hotel Turista"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center text-background hero-info">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-background/80">
          {hero.eyebrow}
        </p>
        <h1 className="text-balance font-heading text-5xl leading-tight sm:text-6xl md:text-7xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-background/85 md:text-lg">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-background/50 px-8 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/10"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-background/70">
        <span className="text-[0.625rem] uppercase tracking-[0.3em]">
          {hero.scrollLabel}
        </span>
      </div>
    </section>
  );
}
