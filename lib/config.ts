export const config = {
  whatsapp: {
    number: "5233XXXXXXXX",
    message: "Hola, vi su página y me interesa cotizar un mueble",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  business: {
    name: "Carpintería Placito",
    since: 1980,
    get years() {
      return new Date().getFullYear() - this.since;
    },
    address: "Calle X #123, Colonia Y, Puerto Vallarta, Jalisco",
    hours: "Lunes a Sábado: 9:00 AM – 6:00 PM",
    phone: "+52 33 XXXX XXXX",
  },
};
