export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

// ═══════════════════════════════════════════════
// 📝 INSTRUCCIONES PARA AGREGAR TESTIMONIOS:
// ═══════════════════════════════════════════════
// Agrega una línea con este formato:
// { quote: "Lo que dijo el cliente", name: "Nombre", detail: "Detalle" },
// ═══════════════════════════════════════════════

export const testimonials: Testimonial[] = [
  {
    quote: "Mi cocina lleva 15 años y está como nueva. La madera de verdad se nota.",
    name: "Doña Martha",
    detail: "Cliente desde 2010",
  },
  {
    quote: "Le pedí un mueble para la sala y quedó exactamente como lo imaginé.",
    name: "Roberto",
    detail: "Cliente desde 2018",
  },
  {
    quote: "Restauraron el ropero de mi abuela. Quedó mejor que cuando era nuevo.",
    name: "Familia García",
    detail: "Cliente desde 2015",
  },
  {
    quote: "Nada que ver con los muebles de tienda. Esto es otro nivel.",
    name: "Carlos y Ana",
    detail: "Cliente desde 2022",
  },
];
