"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import onKey from "@/public/hooks/onKey"

const PHOTOS = [
  { src: "/images/gallery-suite.png", alt: "Sea-view suite with king bed", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-terrace.png", alt: "Terrace with string lights at dusk", span: "" },
  { src: "/images/gallery-bath.png", alt: "Marble bathroom with freestanding tub", span: "" },
  { src: "/images/gallery-garden.png", alt: "Lush garden courtyard", span: "md:col-span-2" },
  { src: "/images/gallery-breakfast.png", alt: "Breakfast on a sunny terrace", span: "" },
  { src: "/images/amenity-pool.png", alt: "Infinity pool overlooking the sea", span: "" },
]

export function Photos() {
const {active, setActive } =onKey()
  return (
    <section id="fotos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-foreground/80">Fotos</p>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
            A glimpse of life at Verana
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${photo.span}`}
              aria-label={`View larger image: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <span className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/15" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60]  flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
          >
            <X className="size-6" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={PHOTOS[active].src}
              alt={PHOTOS[active].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
