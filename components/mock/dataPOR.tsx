// ============================================================================
//  VERANA HOTEL — SINGLE SOURCE OF TRUTH (PORTUGUÊS)
//  All text, contact info, images & links unified into dataPT object.
// ============================================================================
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
} from "lucide-react"; // Ou a biblioteca de ícones que você usar

export const dataPT = {
  // ---------------------------------------------------------------------------
  //  1. Core hotel info (contact, social links, brand)
  // ---------------------------------------------------------------------------
  HOTEL: {
    name: "Hotel Turista",
    fullName: "Turista Hotel & Spa",
    badge: "Hotel & Spa",
    tagline: "Um refúgio costeiro onde o tempo para",
    location: "12 Rue du Littoral, Èze-sur-Mer, Costa Azul, França",
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
  },

  // ---------------------------------------------------------------------------
  //  2. Navigation links (label + anchor target)
  // ---------------------------------------------------------------------------
  NAV_LINKS: [
    {
      label: "sobre nós",
      title: "Sobre Nós",
      href: "sobre-nosotros",
    },
    {
      label: "serviços e comodidades",
      title: "Serviços e Comodidades",
      href: "servicio-y-comodidades",
    },
    { label: "fotos", title: "Fotos", href: "fotos" },
    { label: "localização", title: "Localização", href: "ubicacion" },
    {
      label: "livro de visitas",
      title: "Livro de Visitas",
      href: "libro-de-visitas",
    },
    { label: "consultas", title: "Consultas", href: "consultas" },
  ],

  // ---------------------------------------------------------------------------
  //  3. Images — every image path used on the site
  // ---------------------------------------------------------------------------

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
      title: "O seu descanso ideal nas serras",
      description:
        "Localizado no coração de Tandil, o Hotel Turista combina um atendimento caloroso e tradicional com o conforto ideal para descobrir os encantos da cidade e das suas serras.",
      primaryCta: { label: "Fazer uma Consulta", href: "#consultas" },
      secondaryCta: { label: "Explorar o Hotel", href: "#fotos" },
      scrollLabel: "Rolar",
    },

    about: {
      eyebrow: "Sobre Nós",
      title: "Um refúgio clássico em uma cidade inesquecível",
      image: "/images/about.png",
      imageAlt: "O caloroso lobby do Hotel Turista",
      badge: { value: "Tradição", caption: "na hospitalidade de Tandil" },
      paragraphs: [
        "O Hotel Turista tem recebido viajantes, famílias e aventureiros que buscam uma estadia confortável e relaxante em Tandil. O nosso hotel destaca-se por oferecer a essência da hospitalidade local combinada com uma localização imbatível.",
        "Cada detalhe foi pensado para o seu descanso após um dia percorrendo os morros. Desfrute da gastronomia regional, do carinho da nossa equipe e sinta-se completamente em casa durante a sua visita.",
      ],
      stats: [
        { value: "Tandil", label: "Localização Central" },
        { value: "Confortáveis", label: "Quartos" },
        { value: "Excelente", label: "Atendimento" },
      ],
    },

    photos_section: {
      title: "Fotos",
      subtitle: "Fotos do Hotel Turista",
      photos: [
        {
          src: "/images/gallery-suite.png",
          alt: "Suíte com vista para o mar e cama king",
          span: "md:col-span-2 md:row-span-2",
        },
        {
          src: "/images/gallery-terrace.png",
          alt: "Terraço iluminado ao anoitecer",
          span: "",
        },
        {
          src: "/images/gallery-bath.png",
          alt: "Banheiro de mármore com banheira vitoriana",
          span: "",
        },
        {
          src: "/images/gallery-garden.png",
          alt: "Pátio com jardim exuberante",
          span: "md:col-span-2",
        },
        {
          src: "/images/gallery-breakfast.png",
          alt: "Café da manhã em um terraço ensolarado",
          span: "",
        },
        {
          src: "/images/amenity-pool.png",
          alt: "Piscina de borda infinita com vista para o mar",
          span: "",
        },
      ],
    },

    amenities: {
      eyebrow: "Serviços e Comodidades",
      title: "Tudo o que você precisa para a sua estadia, pensado para você",
      featured: [
        {
          title: "Café da Manhã Tradicional",
          description:
            "Comece o dia com pães artesanais, bebidas quentes e produtos locais antes de sair para explorar as serras.",
          image: "/images/amenity-dining.png",
        },
        {
          title: "Atendimento Familiar e Assessoria",
          description:
            "A nossa equipe vai orientar você com os melhores mapas, passeios e recomendações gastronômicas da região.",
          image: "/images/amenity-spa.png",
        },
        {
          title: "Espaços de Descanso",
          description:
            "Ambientes aconchegantes e aquecidos, ideais para relaxar após uma caminhada pelo Cerro El Centinela ou pelo Calvário.",
          image: "/images/amenity-pool.png",
        },
      ],
      services: {
        services_cards_photos: [
          {
            title: "Quartos do Hotel",
            description:
              "Contamos com opções de quartos individuais, duplos, triplos e quádruplos equipados para garantir um descanso excelente e funcional.",
            src: "/habitacion-hotel.png",
          },
          {
            title: "Café da Manhã Buffet",
            description:
              "Comece o seu dia com uma variedade de bebidas quentes, pães, frutas e opções frescas no nosso salão de café da manhã.",
            src: "/desayuno-buffet.png",
          },
          {
            title: "Estacionamento",
            description:
              "Dispomos de um espaço exclusivo para o veículo dos nossos hóspedes durante toda a estadia.",
            src: "/estacionamiento.png",
          },
        ],
        services_cards: [
          { icon: ShowerHead, label: "Banheiro Privativo" },
          { icon: Layers, label: "Enxoval de Cama Completo" },
          { icon: Sparkles, label: "Serviço de Limpeza" },
          { icon: ThermometerSun, label: "Aquecimento / Ventilação" },
          { icon: Tv, label: "TV a Cabo" },
          { icon: Wifi, label: "Internet Wi-Fi" },
          { icon: HeartPulse, label: "Cobertura Médica 24h" },
          { icon: Users, label: "Tarifas Especiais para Grupos" },
        ],
      },
    },

    photos: {
      eyebrow: "Fotos",
      title: "Um vislumbre da experiência no Hotel Turista",
      gallery: [
        {
          src: "/images/gallery-suite.png",
          alt: "Quarto de casal confortável",
          span: "md:col-span-2 md:row-span-2",
        },
        {
          src: "/images/gallery-terrace.png",
          alt: "Área de refeições e interior do hotel",
          span: "",
        },
        {
          src: "/images/gallery-bath.png",
          alt: "Banheiro impecável e equipado",
          span: "",
        },
        {
          src: "/images/gallery-garden.png",
          alt: "Fachada e acessos do hotel",
          span: "md:col-span-2",
        },
        {
          src: "/images/gallery-breakfast.png",
          alt: "Café da manhã servido pela manhã",
          span: "",
        },
        {
          src: "/images/amenity-pool.png",
          alt: "Detalhes e aconchego das nossas instalações",
          span: "",
        },
      ],
    },

    location: {
      title: "Localização",
      title1: "Encontre-nos no centro de Tandil",
      description:
        "Localizado estrategicamente na rua 14 de Julio, o nosso hotel permite que você acesse facilmente tanto o centro comercial e gastronômico quanto as principais atrações turísticas da cidade.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3405992391013!2d-59.13694439999999!3d-37.3344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b19e0df87%3A0x47c27265e00172ae!2sHotel%20Turista!5e0!3m2!1ses-419!2sar!4v1782344729111!5m2!1ses-419!2sar",
      mapTitle: "Mapa que mostra a localização do Hotel Turista Tandil",
      details: [
        {
          icon: "pin",
          label: "Endereço",
          value: "14 de Julio 60 Tandil, Buenos Aires.",
        },
        {
          icon: "mail",
          label: "E-mail",
          value: "hotelturistatandil@gmail.com",
          href: "mailto:hotelturistatandil@gmail.com",
        },
        {
          icon: "phone",
          label: "Recepção",
          value: "2494 110891",
          href: "tel:2494110891",
        },
        {
          icon: "clock",
          label: "Horário de reservas",
          value: "Das 8:00 às 22:00h",
        },
      ],
    },

    guestbook: {
      eyebrow: "Livro de Visitas",
      title: "Depoimentos dos nossos hóspedes",
      subtitle:
        "Compartilhe uma lembrança da sua estadia ou leia a experiência de outros visitantes.",
      form: {
        heading: "Assine o livro de visitas",
        namePlaceholder: "Seu nome",
        locationPlaceholder: "De onde você nos visita",
        ratingLabel: "Sua avaliação",
        messagePlaceholder: "Conte-nos sobre a sua estadia…",
        submitLabel: "Adicionar ao Livro de Visitas",
      },
      entries: [
        {
          name: "Élise Moreau",
          location: "Paris, França",
          rating: 5,
          message:
            "Uma estadia inesquecível. O atendimento foi muito atencioso e caloroso, e a equipe nos ajudou a organizar todos os passeios pelas serras. Já estamos planejando o nosso retorno.",
        },
        {
          name: "James Whitfield",
          location: "Londres, Reino Unido",
          rating: 5,
          message:
            "A localização é excelente para ir caminhando ao centro. A hospitalidade é das mais calorosas e as 'medialunas' do café da manhã são incríveis. Um lugar realmente especial.",
        },
        {
          name: "Sofia Marchetti",
          location: "Milão, Itália",
          rating: 4,
          message:
            "Um hotel sereno, muito limpo e charmoso. O café da manhã e o atendimento da recepção eram a melhor parte de cada manhã para começar bem o dia em Tandil.",
        },
      ],
    },

    inquiries: {
      title: "Consultas",
      title1: "Comece a planejar a sua estadia",
      description:
        "Envie-nos as suas datas e preferências; a nossa equipe responderá o mais breve possível para confirmar a disponibilidade e oferecer uma proposta sob medida.",
      whatsappPrompt: "Prefere conversar diretamente?",
      whatsappCta: "Escreva-nos pelo WhatsApp",
      emailPrefix: "Ou por e-mail",
      form: {
        nameLabel: "Nome completo",
        namePlaceholder: "João Silva",
        emailLabel: "E-mail",
        emailPlaceholder: "joao@exemplo.com",
        checkInLabel: "Entrada (Check-in)",
        checkOutLabel: "Saída (Check-out)",
        guestsLabel: "Hóspedes",
        messageLabel: "Mensagem",
        messagePlaceholder:
          "Conte-nos sobre a sua viagem ou qualquer pedido especial…",
        submitLabel: "Enviar Consulta",
      },
      success: {
        heading: "Muito obrigado",
        body: "Recebemos a sua consulta. A nossa equipe entrará em contato com você em breve para ajudar a organizar a sua estadia no Hotel Turista Tandil.",
        again: "Enviar outra consulta",
      },
    },

    footer: {
      description:
        "Uma acomodação aconchegante e confortável no coração de Tandil, oferecendo o melhor atendimento e hospitalidade para que você se sinta em casa.",
      exploreHeading: "Explorar",
      contactHeading: "Contato",
      rights: "Todos os direitos reservados.",
    },
  },
};