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
    eyebrow: "Tandil, Buenos Aires",
    title: "Tu descanso ideal en las sierras",
    description:
      "Ubicado en el corazón de Tandil, Hotel Turista combina una atención cálida y tradicional con la comodidad ideal para descubrir los encantos de la ciudad y sus sierras.",
    primaryCta: { label: "Hacer una Consulta", href: "#consultas" },
    secondaryCta: { label: "Explorar el Hotel", href: "#fotos" },
    scrollLabel: "Desplazar",
  },

  about: {
    eyebrow: "Sobre Nosotros",
    title: "Un refugio clásico en una ciudad inolvidable",
    image: IMAGES.about,
    imageAlt: "El cálido lobby de Hotel Turista",
    badge: { value: "Tradición", caption: "en hospitalidad tandilense" },
    paragraphs: [
      "Hotel Turista ha recibido a viajeros, familias y aventureros que buscan una estadía cómoda y relajada en Tandil. Nuestro hotel destaca por brindar el carácter de la hospitalidad local combinado con una ubicación inmejorable.",
      "Cada rincón está pensado para tu descanso tras un día recorriendo los cerros. Disfruta de la gastronomía regional, la calidez de nuestro equipo y siéntete completamente como en casa durante tu visita."
    ],
    stats: [
      { value: "Tandil", label: "Ubicación Céntrica" },
      { value: "Cómodas", label: "Habitaciones" },
      { value: "Excelente", label: "Atención" },
    ],
  },

  amenities: {
    eyebrow: "Servicios y Comodidades",
    title: "Todo lo que necesitas para tu estadía, pensado para vos",
    featured: [
      {
        title: "Desayuno Tradicional",
        description:
          "Comienza el día con panificados artesanales, infusiones calientes y productos locales antes de salir a recorrer las sierras.",
        image: IMAGES.amenityDining,
      },
      {
        title: "Atención Familiar y Asesoramiento",
        description:
          "Nuestro equipo te guiará con los mejores mapas, paseos y recomendaciones gastronómicas de la región.",
        image: IMAGES.amenitySpa,
      },
      {
        title: "Espacios de Descanso",
        description:
          "Ambientes cálidos y calefaccionados, ideales para relajarse luego de una caminata por el Cerro El Centinela o el Calvario.",
        image: IMAGES.amenityPool,
      },
    ],
    services: [
      { icon: "concierge", label: "Recepción y Atención" },
      { icon: "wifi", label: "Wi-Fi Libre en todo el Hotel" },
      { icon: "car", label: "Información Turística" },
      { icon: "clock", label: "Atención de Reservas de 8 a 22hs" },
      { icon: "dining", label: "Desayuno Incluido" },
      { icon: "sparkles", label: "Servicio de Limpieza Diario" },
    ],
  },

  photos: {
    eyebrow: "Fotos",
    title: "Un vistazo a la experiencia en Hotel Turista",
    gallery: [
      { src: IMAGES.gallerySuite, alt: "Habitación cómoda matrimonial", span: "md:col-span-2 md:row-span-2" },
      { src: IMAGES.galleryTerrace, alt: "Área de comedor e interior del hotel", span: "" },
      { src: IMAGES.galleryBath, alt: "Baño impecable y equipado", span: "" },
      { src: IMAGES.galleryGarden, alt: "Fachada e ingresos al hotel", span: "md:col-span-2" },
      { src: IMAGES.galleryBreakfast, alt: "Desayuno servido por la mañana", span: "" },
      { src: IMAGES.amenityPool, alt: "Detalles y calidez de nuestras instalaciones", span: "" },
    ],
  },

  location: {
    eyebrow: "Ubicación",
    title: "Encuéntranos en el centro de Tandil",
    description:
      "Ubicado estratégicamente sobre la calle 14 de Julio, nuestro hotel te permite acceder fácilmente tanto al centro comercial y gastronómico como a los principales puntos turísticos de la ciudad.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3405992391013!2d-59.13694439999999!3d-37.3344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b19e0df87%3A0x47c27265e00172ae!2sHotel%20Turista!5e0!3m2!1ses-419!2sar!4v1782344729111!5m2!1ses-419!2sar",
    mapTitle: "Mapa que muestra la ubicación de Hotel Turista Tandil",
    details: [
      { icon: "pin", label: "Dirección", value: "14 de Julio 60 Tandil, Buenos Aires." },
      { icon: "mail", label: "Correo electrónico", value: "hotelturistatandil@gmail.com", href: "mailto:hotelturistatandil@gmail.com" },
      { icon: "phone", label: "Recepción", value: "2494 110891", href: "tel:2494110891" },
      { icon: "clock", label: "Horarios de reserva", value: "De 8:00 a 22:00 hs" },
    ],
  },

  guestbook: {
    eyebrow: "Libro de Visitas",
    title: "Palabras de nuestros huéspedes",
    subtitle: "Comparte un recuerdo de tu estadía o lee la experiencia de otros visitantes.",
    form: {
      heading: "Firma el libro de visitas",
      namePlaceholder: "Tu nombre",
      locationPlaceholder: "De dónde nos visitas",
      ratingLabel: "Tu calificación",
      messagePlaceholder: "Cuéntanos sobre tu estadía…",
      submitLabel: "Añadir al Libro de Visitas",
    },
    entries: [
      {
        name: "Élise Moreau",
        location: "París, Francia",
        rating: 5,
        message:
          "Una estadía inolvidable. La atención fue muy atenta y cálida, y el personal nos ayudó a organizar todas las excursiones por las sierras. Ya estamos planeando nuestro regreso.",
      },
      {
        name: "James Whitfield",
        location: "Londres, Reino Unido",
        rating: 5,
        message:
          "La ubicación es excelente para caminar al centro. La hospitalidad es de lo más cálida y las medialunas del desayuno son increíbles. Un lugar realmente especial.",
      },
      {
        name: "Sofia Marchetti",
        location: "Milán, Italia",
        rating: 4,
        message:
          "Un hotel sereno, muy limpio y con encanto. El desayuno y la atención de la recepción fue lo mejor de cada mañana para arrancar el día en Tandil.",
      },
    ],
  },

  inquiries: {
    eyebrow: "Consultas",
    title: "Comienza a planificar tu estadía",
    description:
      "Envíanos tus fechas y preferencias; nuestro equipo te responderá a la brevedad para confirmarte la disponibilidad y ofrecerte una propuesta a tu medida.",
    whatsappPrompt: "¿Prefieres chatear directamente?",
    whatsappCta: "Escríbenos por WhatsApp",
    emailPrefix: "O por correo electrónico",
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "juan@ejemplo.com",
      checkInLabel: "Entrada (Check-in)",
      checkOutLabel: "Salida (Check-out)",
      guestsLabel: "Huéspedes",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu viaje o cualquier petición especial…",
      submitLabel: "Enviar Consulta",
    },
    success: {
      heading: "Muchas gracias",
      body: "Hemos recibido tu consulta. Nuestro equipo se pondrá en contacto contigo en breve para ayudarte a organizar tu estadía en Hotel Turista Tandil.",
      again: "Enviar otra consulta",
    },
  },

  footer: {
    description:
      "Un alojamiento cálido y confortable en el corazón de Tandil, ofreciendo la mejor atención y hospitalidad para que te sientas como en casa.",
    exploreHeading: "Explorar",
    contactHeading: "Contacto",
    rights: "Todos los derechos reservados.",
  },
}