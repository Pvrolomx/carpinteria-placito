export type Lang = "es" | "en";

export const t = {
  hero: {
    subtitle: {
      es: "Desde 1982",
      en: "Since 1982",
    },
    tagline: {
      es: "Muebles que duran generaciones.\nMadera real, manos expertas, a la medida de tu espacio.",
      en: "Furniture that lasts generations.\nReal wood, expert hands, custom-made for your space.",
    },
    cta: {
      es: "📲 Cotiza por WhatsApp",
      en: "📲 Get a Quote on WhatsApp",
    },
  },
  history: {
    title: {
      es: "Nuestra Historia",
      en: "Our Story",
    },
    quote: {
      es: (years: number) =>
        `"Empecé con un serrucho y un banco de trabajo. ${years} años después, sigo usando madera de verdad. Cada mueble que sale de este taller lleva el mismo cuidado que el primero que hice."`,
      en: (years: number) =>
        `"I started with a handsaw and a workbench. ${years} years later, I still use real wood. Every piece that leaves this workshop carries the same care as the first one I ever made."`,
    },
    founder: {
      es: "— Lucas Plácito, fundador",
      en: "— Lucas Plácito, founder",
    },
    dynasty: {
      es: "Una dinastía familiar de carpinteros. Hoy, todos los hijos de Don Lucas continúan el oficio en el mismo taller.",
      en: "A family dynasty of woodworkers. Today, all of Don Lucas' sons carry on the craft in the same workshop.",
    },
    timelineStart: {
      es: "Un serrucho y un sueño",
      en: "A saw and a dream",
    },
    timelineEnd: {
      es: (years: number) => `${years} años de oficio`,
      en: (years: number) => `${years} years of craft`,
    },
    today: {
      es: "Hoy",
      en: "Today",
    },
  },
  services: {
    title: {
      es: "Lo Que Hacemos",
      en: "What We Do",
    },
  },
  gallery: {
    title: {
      es: "Nuestro Trabajo",
      en: "Our Work",
    },
    subtitle: {
      es: "Cada pieza, hecha a mano en nuestro taller",
      en: "Every piece, handmade in our workshop",
    },
  },
  why: {
    title: {
      es: "Por Qué Elegirnos",
      en: "Why Choose Us",
    },
    items: [
      {
        icon: "🪵",
        title: { es: "Madera real", en: "Real wood" },
        desc: {
          es: "Trabajamos con cedro, roble, parota y pino de primera. Aglomerado disponible como opción económica.",
          en: "We work with cedar, oak, parota, and premium pine. Particleboard available as a budget option.",
        },
      },
      {
        icon: "👨‍👦‍👦",
        title: {
          es: (years: number) => `${years} años — dinastía familiar`,
          en: (years: number) => `${years} years — family dynasty`,
        },
        desc: {
          es: "Fundada por Lucas Plácito en 1982. Hoy sus hijos continúan la tradición.",
          en: "Founded by Lucas Plácito in 1982. Today his sons carry on the tradition.",
        },
      },
      {
        icon: "📐",
        title: { es: "Todo a la medida", en: "Custom-made" },
        desc: {
          es: "Cada pieza diseñada para tu espacio exacto",
          en: "Every piece designed for your exact space",
        },
      },
      {
        icon: "✅",
        title: { es: "Garantía en cada pieza", en: "Warranty on every piece" },
        desc: {
          es: "Respondemos por nuestro trabajo, siempre",
          en: "We stand behind our work, always",
        },
      },
    ],
  },
  testimonials: {
    title: {
      es: "Lo Que Dicen Nuestros Clientes",
      en: "What Our Clients Say",
    },
  },
  faq: {
    title: {
      es: "Preguntas Frecuentes",
      en: "Frequently Asked Questions",
    },
    items: [
      {
        q: {
          es: "¿Cuánto tiempo tarda un mueble a medida?",
          en: "How long does a custom piece take?",
        },
        a: {
          es: "Depende del tamaño y complejidad. Una cocina integral puede tomar 2-4 semanas. Un mueble pequeño, 1-2 semanas. Te damos fecha exacta al cotizar.",
          en: "It depends on size and complexity. A full kitchen can take 2-4 weeks. A smaller piece, 1-2 weeks. We give you an exact date with your quote.",
        },
      },
      {
        q: {
          es: "¿Trabajan solo con madera real?",
          en: "Do you only work with real wood?",
        },
        a: {
          es: "Nuestra especialidad es madera maciza (cedro, roble, parota, pino). También ofrecemos aglomerado como opción económica para quien lo necesite.",
          en: "Our specialty is solid wood (cedar, oak, parota, pine). We also offer particleboard as a budget-friendly option for those who need it.",
        },
      },
      {
        q: {
          es: "¿Hacen envíos fuera de Puerto Vallarta?",
          en: "Do you ship outside Puerto Vallarta?",
        },
        a: {
          es: "Trabajamos principalmente en Puerto Vallarta y Bahía de Banderas. Para proyectos especiales fuera de la zona, platícanos por WhatsApp.",
          en: "We primarily serve Puerto Vallarta and Bahía de Banderas. For special projects outside the area, reach out via WhatsApp.",
        },
      },
      {
        q: {
          es: "¿Puedo ver ejemplos de su trabajo?",
          en: "Can I see examples of your work?",
        },
        a: {
          es: "¡Claro! Mándanos un WhatsApp y con gusto te compartimos fotos de trabajos recientes. También puedes visitar el taller.",
          en: "Of course! Send us a WhatsApp and we'll gladly share photos of recent work. You can also visit the workshop.",
        },
      },
      {
        q: {
          es: "¿Cómo funciona el proceso de cotización?",
          en: "How does the quoting process work?",
        },
        a: {
          es: "1) Nos mandas un WhatsApp con lo que necesitas. 2) Te hacemos preguntas sobre medidas y material. 3) Te damos precio y tiempo de entrega. Sin compromiso.",
          en: "1) Send us a WhatsApp with what you need. 2) We ask about measurements and materials. 3) We give you a price and delivery time. No obligation.",
        },
      },
      {
        q: {
          es: "¿Ofrecen garantía?",
          en: "Do you offer a warranty?",
        },
        a: {
          es: "Sí. Todos nuestros muebles tienen garantía. Si algo no queda como acordamos, lo arreglamos sin costo.",
          en: "Yes. All our furniture comes with a warranty. If something isn't as agreed, we fix it at no cost.",
        },
      },
    ],
  },
  cta: {
    title: {
      es: "¿Listo para tu mueble?",
      en: "Ready for your furniture?",
    },
    subtitle: {
      es: "Cuéntanos qué necesitas. Sin compromiso, sin complicaciones.",
      en: "Tell us what you need. No commitment, no hassle.",
    },
  },
  footer: {
    tagline: {
      es: "Hecho con 🪵 y orgullo",
      en: "Made with 🪵 and pride",
    },
  },
};

export const serviceTranslations = {
  es: [
    { icon: "🍳", title: "Cocinas integrales", description: "Diseñadas a la medida de tu espacio" },
    { icon: "👔", title: "Closets y vestidores", description: "Aprovecha cada centímetro" },
    { icon: "🪑", title: "Muebles a medida", description: "Exactamente como lo imaginas" },
    { icon: "🚪", title: "Puertas y marcos", description: "Madera sólida que dura décadas" },
    { icon: "🔧", title: "Restauración", description: "Devolvemos la vida a muebles antiguos" },
  ],
  en: [
    { icon: "🍳", title: "Custom kitchens", description: "Designed to fit your space" },
    { icon: "👔", title: "Closets & wardrobes", description: "Make the most of every inch" },
    { icon: "🪑", title: "Custom furniture", description: "Exactly as you imagine it" },
    { icon: "🚪", title: "Doors & frames", description: "Solid wood that lasts decades" },
    { icon: "🔧", title: "Restoration", description: "We bring old furniture back to life" },
  ],
};

export const testimonialTranslations = {
  es: [
    { quote: "Mi cocina lleva 15 años y está como nueva. La madera de verdad se nota.", name: "Doña Martha", detail: "Cliente desde 2010" },
    { quote: "Le pedí un mueble para la sala y quedó exactamente como lo imaginé.", name: "Roberto", detail: "Cliente desde 2018" },
    { quote: "Restauraron el ropero de mi abuela. Quedó mejor que cuando era nuevo.", name: "Familia García", detail: "Cliente desde 2015" },
    { quote: "Nada que ver con los muebles de tienda. Esto es otro nivel.", name: "Carlos y Ana", detail: "Cliente desde 2022" },
  ],
  en: [
    { quote: "My kitchen is 15 years old and still looks brand new. You can tell it's real wood.", name: "Doña Martha", detail: "Client since 2010" },
    { quote: "I asked for a living room piece and it came out exactly as I imagined.", name: "Roberto", detail: "Client since 2018" },
    { quote: "They restored my grandmother's wardrobe. It looks better than when it was new.", name: "García Family", detail: "Client since 2015" },
    { quote: "Nothing like store-bought furniture. This is another level.", name: "Carlos & Ana", detail: "Client since 2022" },
  ],
};
