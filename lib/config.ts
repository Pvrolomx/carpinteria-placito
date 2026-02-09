export const config = {
  whatsapp: {
    number: "523222943935",
    message: {
      es: "Hola, vi su página y me interesa cotizar un mueble",
      en: "Hi, I saw your website and I'm interested in a quote",
    },
    link(lang: "es" | "en") {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message[lang])}`;
    },
  },
  business: {
    name: "Carpintería Placito",
    founder: "Lucas Plácito",
    since: 1982,
    get years() {
      return new Date().getFullYear() - this.since;
    },
    address: "Andador Aries 109",
    city: "Puerto Vallarta",
    state: "Jalisco",
    zip: "48360",
    country: "México",
    get fullAddress() {
      return `${this.address}, ${this.city}, ${this.state} ${this.zip}`;
    },
    phone: "+52 322 294 3935",
    hours: {
      es: "Lunes a Sábado: 9:00 AM – 6:00 PM",
      en: "Monday to Saturday: 9:00 AM – 6:00 PM",
    },
  },
};
