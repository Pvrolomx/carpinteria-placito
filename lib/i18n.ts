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
    title: { es: "Nuestra Historia", en: "Our Story" },
    quote: {
      es: (years: number) =>
        `"Empecé con un serrucho y un banco de trabajo. ${years} años después, sigo usando madera de verdad. Cada mueble que sale de este taller lleva el mismo cuidado que el primero que hice."`,
      en: (years: number) =>
        `"I started with a handsaw and a workbench. ${years} years later, I still use real wood. Every piece that leaves this workshop carries the same care as the first one I ever made."`,
    },
    founder: { es: "— Lucas Plácito, fundador", en: "— Lucas Plácito, founder" },
    dynasty: {
      es: "Una dinastía familiar de carpinteros. Hoy, todos los hijos de Don Lucas continúan el oficio en el mismo taller.",
      en: "A family dynasty of woodworkers. Today, all of Don Lucas' sons carry on the craft in the same workshop.",
    },
    timelineStart: { es: "Un serrucho y un sueño", en: "A saw and a dream" },
    timelineEnd: {
      es: (years: number) => `${years} años de oficio`,
      en: (years: number) => `${years} years of craft`,
    },
    today: { es: "Hoy", en: "Today" },
  },
  services: {
    title: { es: "Lo Que Hacemos", en: "What We Do" },
  },
  gallery: {
    title: { es: "Nuestro Trabajo", en: "Our Work" },
    subtitle: {
      es: "Cada pieza, hecha a mano en nuestro taller",
      en: "Every piece, handmade in our workshop",
    },
  },
  why: {
    title: { es: "Por Qué Elegirnos", en: "Why Choose Us" },
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
    title: { es: "Lo Que Dicen Nuestros Clientes", en: "What Our Clients Say" },
  },
  faq: {
    title: { es: "Preguntas Frecuentes", en: "Frequently Asked Questions" },
    items: [
      {
        q: { es: "¿Cobras por cotización o visita?", en: "Do you charge for quotes or site visits?" },
        a: {
          es: "No. La cotización y la visita para tomar medidas son sin costo y sin compromiso. Nos interesa que tengas toda la información para decidir tranquilo.",
          en: "No. Quotes and measurement visits are free with no obligation. We want you to have all the information you need to decide comfortably.",
        },
      },
      {
        q: { es: "¿Pides anticipo para iniciar un trabajo?", en: "Do you require a deposit to start?" },
        a: {
          es: "Sí, pedimos un anticipo para la compra de materiales. El porcentaje depende del proyecto, pero lo acordamos antes de arrancar. Todo queda claro desde el inicio.",
          en: "Yes, we ask for a deposit to purchase materials. The percentage depends on the project, but we agree on it before starting. Everything is clear from the beginning.",
        },
      },
      {
        q: { es: "¿Puedes trabajar sobre un diseño mío?", en: "Can you work from my own design?" },
        a: {
          es: "¡Claro! Si traes una foto, un plano o una idea en servilleta, la hacemos realidad. También te ayudamos a ajustar detalles técnicos para que quede perfecto.",
          en: "Absolutely! Whether you bring a photo, a blueprint, or a napkin sketch, we'll make it real. We also help you adjust technical details so it turns out perfect.",
        },
      },
      {
        q: { es: "¿Qué tipo de madera usas?", en: "What type of wood do you use?" },
        a: {
          es: "Trabajamos principalmente con nogal, parota, cedro, roble y pino. La elección depende del uso, la estética que buscas y tu presupuesto. Te asesoramos para elegir la mejor opción.",
          en: "We mainly work with walnut, parota, cedar, oak, and pine. The choice depends on the use, the look you want, and your budget. We'll help you pick the best option.",
        },
      },
      {
        q: { es: "¿Usas laminados?", en: "Do you use laminates?" },
        a: {
          es: "Sí, también trabajamos con laminados y melaminas de buena calidad. Son una opción más económica que funciona muy bien para closets, cocinas y muebles de uso diario.",
          en: "Yes, we also work with good quality laminates and melamine. They're a more affordable option that works great for closets, kitchens, and everyday furniture.",
        },
      },
      {
        q: { es: "¿La madera resiste la humedad de Puerto Vallarta?", en: "Does wood hold up in Puerto Vallarta's humidity?" },
        a: {
          es: "Con el tratamiento adecuado, sí. Usamos selladores y acabados diseñados para clima tropical. Llevamos más de 40 años haciendo muebles aquí — sabemos cómo proteger la madera del calor y la humedad de la bahía.",
          en: "With the right treatment, absolutely. We use sealants and finishes designed for tropical climates. We've been making furniture here for over 40 years — we know how to protect wood from the bay's heat and humidity.",
        },
      },
      {
        q: { es: "¿Garantizas tu trabajo?", en: "Do you guarantee your work?" },
        a: {
          es: "Sí. Respaldamos cada mueble que sale del taller. Si algo no queda como lo acordamos, lo arreglamos. Nuestro nombre está en cada pieza y eso nos lo tomamos en serio.",
          en: "Yes. We stand behind every piece that leaves our workshop. If something isn't as agreed, we fix it. Our name is on every piece and we take that seriously.",
        },
      },
      {
        q: { es: "¿Haces reparaciones o solo muebles nuevos?", en: "Do you do repairs or only new furniture?" },
        a: {
          es: "Hacemos las dos cosas. Restauramos muebles antiguos, reparamos puertas, ajustamos closets y le damos nueva vida a piezas que ya tienen historia.",
          en: "We do both. We restore antique furniture, repair doors, adjust closets, and bring new life to pieces that already have history.",
        },
      },
      {
        q: { es: "¿Haces trabajo para negocios o solo a particulares?", en: "Do you work for businesses or only private clients?" },
        a: {
          es: "Atendemos ambos. Hemos hecho cocinas para restaurantes, mobiliario para oficinas, exhibidores para tiendas y barras para bares. Si es de madera, lo hacemos.",
          en: "We serve both. We've built kitchens for restaurants, office furniture, store displays, and bars. If it's made of wood, we make it.",
        },
      },
      {
        q: { es: "¿Atiendes toda la Bahía de Banderas?", en: "Do you serve all of Bahía de Banderas?" },
        a: {
          es: "Sí. Trabajamos en todo Puerto Vallarta, Nuevo Vallarta, Bucerías, Sayulita, Punta de Mita y alrededores. Para zonas más alejadas, platícanos y nos ponemos de acuerdo.",
          en: "Yes. We work throughout Puerto Vallarta, Nuevo Vallarta, Bucerías, Sayulita, Punta de Mita, and surrounding areas. For more distant locations, let's talk and work something out.",
        },
      },
    ],
  },
  cta: {
    title: { es: "¿Listo para tu mueble?", en: "Ready for your furniture?" },
    subtitle: {
      es: "Cuéntanos qué necesitas. Sin compromiso, sin complicaciones.",
      en: "Tell us what you need. No commitment, no hassle.",
    },
  },
  footer: {
    tagline: { es: "Hecho con 🪵 y orgullo", en: "Made with 🪵 and pride" },
  },
};

export interface ServiceItem {
  image: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export const serviceItems: ServiceItem[] = [
  {
    image: "/fotos/cocina-integral.jpg",
    title: { es: "Cocinas integrales", en: "Custom kitchens" },
    description: { es: "Diseñadas a la medida de tu espacio", en: "Designed to fit your space" },
  },
  {
    image: "/fotos/closet-vestidor.jpg",
    title: { es: "Closets y vestidores", en: "Closets & wardrobes" },
    description: { es: "Aprovecha cada centímetro", en: "Make the most of every inch" },
  },
  {
    image: "/fotos/mueble-medida.jpg",
    title: { es: "Muebles a medida", en: "Custom furniture" },
    description: { es: "Exactamente como lo imaginas", en: "Exactly as you imagine it" },
  },
  {
    image: "/fotos/puerta-principal.jpg",
    title: { es: "Puertas y marcos", en: "Doors & frames" },
    description: { es: "Madera sólida que dura décadas", en: "Solid wood that lasts decades" },
  },
  {
    image: "/fotos/restauracion.jpg",
    title: { es: "Restauración", en: "Restoration" },
    description: { es: "Devolvemos la vida a muebles antiguos", en: "We bring old furniture back to life" },
  },
];

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
