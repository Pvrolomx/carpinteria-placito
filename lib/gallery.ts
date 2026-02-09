export interface GalleryItem {
  src: string;
  title: string;
  material: string;
}

// ═══════════════════════════════════════════════
// 📸 INSTRUCCIONES PARA AGREGAR FOTOS:
// ═══════════════════════════════════════════════
// 1. Pon la foto en la carpeta /public/fotos/
// 2. Agrega una línea aquí abajo con este formato:
//    { src: "/fotos/nombre-foto.jpg", title: "Qué es", material: "Tipo de madera" },
// 3. Haz deploy (ver README.md)
// ═══════════════════════════════════════════════

export const gallery: GalleryItem[] = [
  // Ejemplo (descomentar cuando tengan fotos reales):
  // { src: "/fotos/cocina-roble.jpg", title: "Cocina integral", material: "Roble" },
  // { src: "/fotos/closet-cedro.jpg", title: "Closet vestidor", material: "Cedro" },
  // { src: "/fotos/puerta-parota.jpg", title: "Puerta principal", material: "Parota" },
];
