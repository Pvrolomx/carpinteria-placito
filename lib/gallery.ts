export interface GalleryItem {
  src: string;
  title: { es: string; en: string };
  material: { es: string; en: string };
}

// ═══════════════════════════════════════════════
// 📸 INSTRUCCIONES PARA AGREGAR FOTOS:
// ═══════════════════════════════════════════════
// 1. Pon la foto en la carpeta /public/fotos/
// 2. Agrega una línea aquí abajo:
//    { src: "/fotos/nombre.jpg", title: { es: "...", en: "..." }, material: { es: "...", en: "..." } },
// 3. Haz deploy (ver README.md)
// ═══════════════════════════════════════════════

export const gallery: GalleryItem[] = [
  // Fotos pendientes — el humano va a juntar la galería
];
