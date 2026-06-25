import Image from "next/image"
import { CONTENT } from "@/components/site-data"

export function About() {
  const { about } = CONTENT

  return (
    <section id="sobre-nosotros" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-sm border border-accent/40 bg-accent px-8 py-6 text-accent-foreground shadow-lg sm:block">
            <p className="font-heading text-3xl">{about.badge.value}</p>
            <p className="text-sm tracking-wide">{about.badge.caption}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-foreground/80">{about.eyebrow}</p>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl text-primary">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
