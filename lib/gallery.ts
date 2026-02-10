export interface GalleryItem {
  src: string;
  title: { es: string; en: string };
  material: { es: string; en: string };
}

// ═══════════════════════════════════════════════
// 📸 INSTRUCCIONES PARA AGREGAR FOTOS:
// ═══════════════════════════════════════════════
// 1. Pon la foto en la carpeta /public/fotos/
// 2. Agrega una línea aquí abajo con este formato:
//    { src: "/fotos/nombre.webp", title: { es: "Qué es", en: "What it is" }, material: { es: "Madera", en: "Wood" } },
// 3. Haz deploy (ver README.md)
// ═══════════════════════════════════════════════

export const gallery: GalleryItem[] = [
  {
    src: "/fotos/cocina-integral.webp",
    title: { es: "Cocina integral", en: "Custom kitchen" },
    material: { es: "Roble macizo", en: "Solid oak" },
  },
  {
    src: "/fotos/closet-vestidor.webp",
    title: { es: "Closet vestidor", en: "Walk-in closet" },
    material: { es: "Roble con isla central", en: "Oak with center island" },
  },
  {
    src: "/fotos/mueble-medida.webp",
    title: { es: "Mueble a medida", en: "Custom entertainment center" },
    material: { es: "Roble — empotrado", en: "Oak — built-in" },
  },
  {
    src: "/fotos/puerta-madera.webp",
    title: { es: "Puerta principal", en: "Main entrance door" },
    material: { es: "Madera maciza tallada", en: "Carved solid wood" },
  },
  {
    src: "/fotos/restauracion.webp",
    title: { es: "Restauración", en: "Restoration" },
    material: { es: "Antes y después", en: "Before & after" },
  },
];
