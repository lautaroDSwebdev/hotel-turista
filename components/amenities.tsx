'use client'
import Image from "next/image";
import {
  BedSingle,
  Coffee,
  Car,
  ShowerHead,
  Layers,
  Sparkles,
  ThermometerSun,
  Tv,
  Wifi,
  HeartPulse,
  Users,
  X,
} from "lucide-react"; // O la librería de iconos que uses
import onKey from "@/public/hooks/onKey";

const FEATURED = [
  {
    title: "Habitaciones del Hotel",
    description:
      "Contamos con opciones singles, dobles, triples y cuádruples equipadas para garantizar un descanso óptimo y funcional.",
    src: "/habitacion-hotel.png", // Recuerda cambiar las rutas de imágenes si es necesario
  },
  {
    title: "Desayuno Buffet",
    description:
      "Comience su día con variedad de infusiones, panificados, frutas y opciones frescas en nuestro salón desayunador.",
    src: "/desayuno-buffet.png",
  },
  {
    title: "Estacionamiento",
    description:
      "Disponemos de espacio exclusivo para el vehículo de nuestros huéspedes durante toda su estadía.",
    src: "/estacionamiento.png",
  },
];

const SERVICES = [
  { icon: ShowerHead, label: "Baño Privado" },
  { icon: Layers, label: "Blanquería Completa" },
  { icon: Sparkles, label: "Servicio de Limpieza" },
  { icon: ThermometerSun, label: "Calefacción / Ventilación" },
  { icon: Tv, label: "TV por Cable" },
  { icon: Wifi, label: "Internet Wi-Fi" },
  { icon: HeartPulse, label: "Cobertura Médica 24 hs" },
  { icon: Users, label: "Tarifas Especiales para Contingentes" },
];

export function Amenities() {

  const { active, setActive } = onKey();
  return (
    <section id="servicio-y-comodidades" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-foreground/80">
            Servicios &amp; Comodidades
          </p>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
            Todo lo necesario para una estadía cómoda y accesible
          </h2>
        </div>

        {/* Tarjetas Destacadas */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FEATURED.map((item, e) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div
              onClick={() => setActive(e)}
              className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
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
                src={FEATURED[active].src}
                alt={FEATURED[active].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
        {/* Grilla de Servicios Generales */}
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center justify-center gap-3 rounded-sm border border-border bg-card px-4 py-6 text-center"
            >
              <Icon
                className="size-6 text-accent-foreground"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
