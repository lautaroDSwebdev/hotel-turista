// ============================================================================
//  VERANA HOTEL — SINGLE SOURCE OF TRUTH
//  Edit everything about the site here: text, contact info, images & links.
//  Each section below maps directly to a section component on the page.
// ============================================================================

// ---------------------------------------------------------------------------
//  1. Core hotel info (contact, social links, brand)
// ---------------------------------------------------------------------------
export const HOTEL = {
  name: "Hotel Turista",
  fullName: "Turista Hotel & Spa",
  badge: "Hotel & Spa",
  tagline: "Un refugio costero donde el tiempo se detiene",
  location: "12 Rue du Littoral, Èze-sur-Mer, Costa Azul, Francia",
  shortLocation: "Èze-sur-Mer, Costa Azul",
  email: "stay@veranahotel.com",
  phone: "+33 4 93 00 12 12",
  whatsapp: "+33 6 12 34 56 78",
  whatsappLink: "https://wa.me/33612345678",
  social: {
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com/HotelTuristaTandil/",
    linkedin: "https://linkedin.com",
  },
}

// ---------------------------------------------------------------------------
//  2. Navigation links (label + anchor target)
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "sobre nosotros", title: "Sobre Nosotros", href: "sobre-nosotros" },
  { label: "servicios y comodidades", title: "Servicios y Comodidades", href: "servicio-y-comodidades" },
  { label: "fotos", title: "Fotos", href: "fotos" },
  { label: "ubicación", title: "Ubicación", href: "ubicacion" }, // Corregido 'ubicacin'
  { label: "libro de visitas", title: "Libro de Visitas", href: "libro-de-visitas" },
  { label: "consultas", title: "Consultas", href: "consultas" },
]

// ---------------------------------------------------------------------------
//  3. Images — every image path used on the site, mapped in one place
// ---------------------------------------------------------------------------
export const IMAGES = {
  hero: "/images/hero.png",
  about: "/images/about.png",
  amenitySpa: "/images/amenity-spa.png",
  amenityDining: "/images/amenity-dining.png",
  amenityPool: "/images/amenity-pool.png",
  gallerySuite: "/images/gallery-suite.png",
  galleryTerrace: "/images/gallery-terrace.png",
  galleryBath: "/images/gallery-bath.png",
  galleryGarden: "/images/gallery-garden.png",
  galleryBreakfast: "/images/gallery-breakfast.png",
}

// ---------------------------------------------------------------------------
//  4. Language switcher options (VISUAL ONLY — no translation behind it)
// ---------------------------------------------------------------------------
export const LANGUAGES = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
]

// ---------------------------------------------------------------------------
//  5. Section content — all on-page copy lives here
// ---------------------------------------------------------------------------
export const CONTENT = {
  hero: {
    eyebrow: HOTEL.shortLocation,
    title: HOTEL.tagline,
    description:
      "Ubicado entre los acantilados y el Mediterráneo, Verana combina una elegancia atemporal con una hospitalidad cálida y atenta.",
    primaryCta: { label: "Hacer una Consulta", href: "#consultas" },
    secondaryCta: { label: "Explorar el Hotel", href: "#fotos" },
    scrollLabel: "Desplazar",
  },

  about: {
    eyebrow: "Sobre Nosotros",
    title: "Un refugio íntimo moldeado por el mar y las estaciones",
    image: IMAGES.about,
    imageAlt: "El sereno lobby del Verana Hotel",
    badge: { value: "Un siglo", caption: "de hospitalidad junto al mar" },
    paragraphs: [
      "Durante casi cien años, Verana ha recibido a viajeros que buscan un lujo tranquilo a lo largo de la Costa Azul. Nuestro hotel de gestión familiar combina el carácter de una villa histórica con las comodidades de un santuario moderno.",
      "Cada habitación enmarca la luz del Mediterráneo, cada comida celebra los productos de la región y cada huésped es atendido como si fuera de la familia. Este es un lugar para bajar el ritmo, respirar hondo y sentirse completamente en casa.",
    ],
    stats: [
      { value: "1924", label: "Establecido" },
      { value: "48", label: "Habitaciones y Suites" },
      { value: "5★", label: "Calificación de Huéspedes" },
    ],
  },

  amenities: {
    eyebrow: "Servicios y Comodidades",
    title: "Todo lo que necesita para relajarse, cuidadosamente pensado",
    featured: [
      {
        title: "El Spa en Verana",
        description:
          "Un tranquilo santuario de bienestar que ofrece masajes, tratamientos faciales y termales con vistas a los jardines.",
        image: IMAGES.amenitySpa,
      },
      {
        title: "Alta Cocina Costera",
        description:
          "Cocina mediterránea de temporada elaborada con productos locales, maridada con una bodega galardonada.",
        image: IMAGES.amenityDining,
      },
      {
        title: "Piscina Infinita con Vista al Mar",
        description:
          "Una piscina infinita climatizada con tumbonas y vistas ininterrumpidas al mar Mediterráneo.",
        image: IMAGES.amenityPool,
      },
    ],
    // `icon` is a key resolved to a lucide icon inside the component
    services: [
      { icon: "concierge", label: "Conserjería 24h" },
      { icon: "wifi", label: "Wi-Fi de Alta Velocidad" },
      { icon: "car", label: "Estacionamiento con Aparcacoches y Traslados" },
      { icon: "waves", label: "Acceso a Playa Privada" },
      { icon: "dining", label: "Servicio a la Habitación" },
      { icon: "sparkles", label: "Limpieza Diaria" },
    ],
  },

  photos: {
    eyebrow: "Fotos",
    title: "Un vistazo a la vida en Verana",
    // `span` controls the bento-grid sizing for each tile
    gallery: [
      { src: IMAGES.gallerySuite, alt: "Suite con vista al mar y cama king-size", span: "md:col-span-2 md:row-span-2" },
      { src: IMAGES.galleryTerrace, alt: "Terraza con guirnaldas de luces al atardecer", span: "" },
      { src: IMAGES.galleryBath, alt: "Baño de mármol con bañera independiente", span: "" },
      { src: IMAGES.galleryGarden, alt: "Exuberante patio ajardinado", span: "md:col-span-2" },
      { src: IMAGES.galleryBreakfast, alt: "Desayuno en una terraza soleada", span: "" },
      { src: IMAGES.amenityPool, alt: "Piscina infinita con vistas al mar", span: "" },
    ],
  },

  location: {
    eyebrow: "Ubicación",
    title: "Encuéntrenos en la costa de la Riviera",
    description:
      "A solo veinte minutos de Niza por la carretera costera, Verana se encuentra escondido entre los acantilados de Èze y el resplandeciente Mediterráneo.",
    mapSrc: "https://maps.google.com/maps?q=Eze-sur-Mer%20France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapTitle: "Mapa que muestra la ubicación de Verana Hotel & Spa",
    // `icon` is a key resolved to a lucide icon inside the component
    details: [
      { icon: "pin", label: "Dirección", value: HOTEL.location },
      { icon: "mail", label: "Correo electrónico", value: HOTEL.email, href: `mailto:${HOTEL.email}` },
      {
        icon: "phone",
        label: "Recepción",
        value: HOTEL.phone,
        href: `tel:${HOTEL.phone.replace(/\s/g, "")}`,
      },
      { icon: "clock", label: "Entrada / Salida", value: "Desde las 3:00 PM / Hasta las 11:00 AM" },
    ],
  },

  guestbook: {
    eyebrow: "Libro de Visitas",
    title: "Palabras de nuestros huéspedes",
    subtitle: "Comparta un recuerdo de su estancia o lea la experiencia de otros huéspedes.",
    form: {
      heading: "Firmar el libro de visitas",
      namePlaceholder: "Su nombre",
      locationPlaceholder: "De dónde nos visita",
      ratingLabel: "Su calificación",
      messagePlaceholder: "Cuéntenos sobre su estancia…",
      submitLabel: "Añadir al Libro de Visitas",
    },
    entries: [
      {
        name: "Élise Moreau",
        location: "París, Francia",
        rating: 5,
        message:
          "Una estancia inolvidable. La suite con vista al mar era impresionante y el personal se anticipó a cada una de nuestras necesidades. Ya estamos planeando nuestro regreso.",
      },
      {
        name: "James Whitfield",
        location: "Londres, Reino Unido",
        rating: 5,
        message:
          "Solo el spa ya vale el viaje. Si a eso le añades una cocina increíble y la hospitalidad más cálida, tienes un lugar realmente especial.",
      },
      {
        name: "Sofia Marchetti",
        location: "Milán, Italia",
        rating: 4,
        message:
          "Un hotel sereno, hermoso y con encanto en cada rincón. El desayuno en la terraza con vistas al mar fue lo mejor de cada mañana.",
      },
    ],
  },

  inquiries: {
    eyebrow: "Consultas",
    title: "Comience a planificar su estancia",
    description:
      "Envíenos sus fechas y preferencias; nuestro equipo de reservas le responderá en un plazo de 24 horas con la disponibilidad y una oferta a su medida.",
    whatsappPrompt: "¿Prefiere chatear directamente?",
    whatsappCta: "Escríbanos por WhatsApp",
    emailPrefix: "O por correo electrónico",
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Juana de Arco",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "juana@ejemplo.com",
      checkInLabel: "Entrada",
      checkOutLabel: "Salida",
      guestsLabel: "Huéspedes",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntenos sobre su viaje o cualquier petición especial…",
      submitLabel: "Enviar Consulta",
    },
    success: {
      heading: "Muchas gracias",
      body: "Hemos recibido su consulta. Nuestro equipo se pondrá en contacto con usted en breve para ayudarle a organizar su estancia en Verana.",
      again: "Enviar otra consulta",
    },
  },

  footer: {
    description:
      "Un refugio costero boutique en la Costa Azul, que ofrece elegancia atemporal y una cálida hospitalidad desde 1924.",
    exploreHeading: "Explorar",
    contactHeading: "Contacto",
    rights: "Todos los derechos reservados.",
  },
}