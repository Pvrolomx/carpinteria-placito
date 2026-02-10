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
//    { src: "/fotos/nombre.jpg", title: { es: "...", en: "..." }, material: { es: "...", en: "..." } },
// 3. Haz deploy (ver README.md)
// ═══════════════════════════════════════════════

export const gallery: GalleryItem[] = [
  {
    src: "/fotos/cocina-integral.jpg",
    title: { es: "Cocina integral", en: "Custom kitchen" },
    material: { es: "Roble", en: "Oak" },
  },
  {
    src: "/fotos/closet-vestidor.jpg",
    title: { es: "Closet vestidor", en: "Walk-in closet" },
    material: { es: "Roble", en: "Oak" },
  },
  {
    src: "/fotos/mueble-medida.jpg",
    title: { es: "Mueble a medida", en: "Custom entertainment center" },
    material: { es: "Roble", en: "Oak" },
  },
  {
    src: "/fotos/puerta-principal.jpg",
    title: { es: "Puerta principal", en: "Main door" },
    material: { es: "Roble", en: "Oak" },
  },
  {
    src: "/fotos/restauracion.jpg",
    title: { es: "Restauración", en: "Restoration" },
    material: { es: "Madera maciza", en: "Solid wood" },
  },
];
