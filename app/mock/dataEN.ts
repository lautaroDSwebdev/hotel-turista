// ============================================================================
//  VERANA HOTEL — SINGLE SOURCE OF TRUTH (ENGLISH)
//  All text, contact info, images & links unified into dataEN object.
// ============================================================================

export const dataEN = {
  // ---------------------------------------------------------------------------
  //  1. Core hotel info (contact, social links, brand)
  // ---------------------------------------------------------------------------
  HOTEL: {
    name: "Hotel Turista",
    fullName: "Turista Hotel & Spa",
    badge: "Hotel & Spa",
    tagline: "A coastal refuge where time stands still",
    location: "12 Rue du Littoral, Èze-sur-Mer, French Riviera, France",
    shortLocation: "Èze-sur-Mer, French Riviera",
    email: "stay@veranahotel.com",
    phone: "+33 4 93 00 12 12",
    whatsapp: "+33 6 12 34 56 78",
    whatsappLink: "https://wa.me/33612345678",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://www.facebook.com/HotelTuristaTandil/",
      linkedin: "https://linkedin.com",
    },
  },

  // ---------------------------------------------------------------------------
  //  2. Navigation links (label + anchor target)
  // ---------------------------------------------------------------------------
  NAV_LINKS: [
    { label: "about us", title: "About Us", href: "sobre-nosotros" },
    { label: "services & amenities", title: "Services and Amenities", href: "servicio-y-comodidades" },
    { label: "photos", title: "Photos", href: "fotos" },
    { label: "location", title: "Location", href: "ubicacion" },
    { label: "guestbook", title: "Guestbook", href: "libro-de-visitas" },
    { label: "inquiries", title: "Inquiries", href: "consultas" },
  ],

  // ---------------------------------------------------------------------------
  //  4. Language switcher options
  // ---------------------------------------------------------------------------
  LANGUAGES: [
    { code: "EN", label: "English", flag: "🇬🇧" },
    { code: "FR", label: "Français", flag: "🇫🇷" },
    { code: "IT", label: "Italiano", flag: "🇮🇹" },
    { code: "ES", label: "Español", flag: "🇪🇸" },
    { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  ],

  // ---------------------------------------------------------------------------
  //  5. Section content — all on-page copy lives here
  // ---------------------------------------------------------------------------
  CONTENT: {
    hero: {
      eyebrow: "Tandil, Buenos Aires",
      title: "Your ideal getaway in the hills",
      description:
        "Located in the heart of Tandil, Hotel Turista combines warm and traditional service with the perfect comfort to discover the charms of the city and its surrounding hills.",
      primaryCta: { label: "Make an Inquiry", href: "#consultas" },
      secondaryCta: { label: "Explore the Hotel", href: "#fotos" },
      scrollLabel: "Scroll",
    },

    about: {
      eyebrow: "About Us",
      title: "A classic refuge in an unforgettable city",
      image: "/images/about.png",
      imageAlt: "The warm lobby of Hotel Turista",
      badge: { value: "Tradition", caption: "in Tandil hospitality" },
      paragraphs: [
        "Hotel Turista has welcomed travelers, families, and adventurers seeking a comfortable and relaxed stay in Tandil. Our hotel stands out for providing the essence of local hospitality combined with an unbeatable location.",
        "Every corner is designed for your relaxation after a day exploring the hills. Enjoy regional gastronomy, the warmth of our team, and feel completely at home during your visit."
      ],
      stats: [
        { value: "Tandil", label: "Central Location" },
        { value: "Comfortable", label: "Rooms" },
        { value: "Excellent", label: "Service" },
      ],
    },

    amenities: {
      eyebrow: "Services and Amenities",
      title: "Everything you need for your stay, designed for you",
      featured: [
        {
          title: "Traditional Breakfast",
          description:
            "Start your day with artisanal baked goods, hot beverages, and local products before heading out to explore the hills.",
          image: "/images/amenity-dining.png",
        },
        {
          title: "Family Care and Guidance",
          description:
            "Our team will guide you with the best maps, tours, and gastronomic recommendations in the region.",
          image: "/images/amenity-spa.png",
        },
        {
          title: "Relaxation Spaces",
          description:
            "Warm and heated environments, ideal for unwinding after a hike through the El Centinela Hill or the Calvario.",
          image: "/images/amenity-pool.png",
        },
      ],
      services: [
        { icon: "concierge", label: "Front Desk & Service" },
        { icon: "wifi", label: "Free Wi-Fi throughout the Hotel" },
        { icon: "car", label: "Tourist Information" },
        { icon: "clock", label: "Booking Assistance from 8 AM to 10 PM" },
        { icon: "dining", label: "Breakfast Included" },
        { icon: "sparkles", label: "Daily Housekeeping Service" },
      ],
    },

    photos: {
      eyebrow: "Photos",
      title: "A glimpse into the experience at Hotel Turista",
      gallery: [
        { src: "/images/gallery-suite.png", alt: "Comfortable double room", span: "md:col-span-2 md:row-span-2" },
        { src: "/images/gallery-terrace.png", alt: "Dining area and hotel interior", span: "" },
        { src: "/images/gallery-bath.png", alt: "Impeccable and equipped bathroom", span: "" },
        { src: "/images/gallery-garden.png", alt: "Facade and hotel entrances", span: "md:col-span-2" },
        { src: "/images/gallery-breakfast.png", alt: "Breakfast served in the morning", span: "" },
        { src: "/images/amenity-pool.png", alt: "Details and warmth of our facilities", span: "" },
      ],
    },

    location: {
      eyebrow: "Location",
      title: "Find us in downtown Tandil",
      description:
        "Strategically located on 14 de Julio Street, our hotel allows you to easily access the commercial and gastronomic center as well as the main tourist landmarks in the city.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3405992391013!2d-59.13694439999999!3d-37.3344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b19e0df87%3A0x47c27265e00172ae!2sHotel%20Turista!5e0!3m2!1ses-419!2sar!4v1782344729111!5m2!1ses-419!2sar",
      mapTitle: "Map showing the location of Hotel Turista Tandil",
      details: [
        { icon: "pin", label: "Address", value: "14 de Julio 60 Tandil, Buenos Aires." },
        { icon: "mail", label: "Email address", value: "hotelturistatandil@gmail.com", href: "mailto:hotelturistatandil@gmail.com" },
        { icon: "phone", label: "Front Desk", value: "2494 110891", href: "tel:2494110891" },
        { icon: "clock", label: "Booking hours", value: "From 8:00 AM to 10:00 PM" },
      ],
    },

    guestbook: {
      eyebrow: "Guestbook",
      title: "Words from our guests",
      subtitle: "Share a memory of your stay or read about the experience of other visitors.",
      form: {
        heading: "Sign the guestbook",
        namePlaceholder: "Your name",
        locationPlaceholder: "Where are you visiting from",
        ratingLabel: "Your rating",
        messagePlaceholder: "Tell us about your stay…",
        submitLabel: "Add to Guestbook",
      },
      entries: [
        {
          name: "Élise Moreau",
          location: "Paris, France",
          rating: 5,
          message:
            "An unforgettable stay. The service was very attentive and warm, and the staff helped us organize all our excursions into the hills. We are already planning our return.",
        },
        {
          name: "James Whitfield",
          location: "London, United Kingdom",
          rating: 5,
          message:
            "The location is excellent for walking to the center. The hospitality is incredibly warm, and the breakfast croissants are amazing. A truly special place.",
        },
        {
          name: "Sofia Marchetti",
          location: "Milan, Italy",
          rating: 4,
          message:
            "A serene hotel, very clean and full of charm. The breakfast and the front desk service were the best part of each morning to kickstart the day in Tandil.",
        },
      ],
    },

    inquiries: {
      eyebrow: "Inquiries",
      title: "Start planning your stay",
      description:
        "Send us your dates and preferences; our team will respond shortly to confirm availability and offer a tailored proposal.",
      whatsappPrompt: "Prefer to chat directly?",
      whatsappCta: "Write to us on WhatsApp",
      emailPrefix: "Or via email",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "John Doe",
        emailLabel: "Email address",
        emailPlaceholder: "john@example.com",
        checkInLabel: "Check-in",
        checkOutLabel: "Check-out",
        guestsLabel: "Guests",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your trip or any special requests…",
        submitLabel: "Send Inquiry",
      },
      success: {
        heading: "Thank you very much",
        body: "We have received your inquiry. Our team will get in touch with you shortly to help you organize your stay at Hotel Turista Tandil.",
        again: "Send another inquiry",
      },
    },

    footer: {
      description:
        "A warm and comfortable accommodation in the heart of Tandil, offering the best service and hospitality to make you feel right at home.",
      exploreHeading: "Explore",
      contactHeading: "Contact",
      rights: "All rights reserved.",
    },
  },
};