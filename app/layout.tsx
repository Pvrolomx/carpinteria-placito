import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carpintería Placito — Desde 1980 | Muebles que duran generaciones",
  description:
    "Carpintería artesanal en Puerto Vallarta. Cocinas integrales, closets, muebles a medida, puertas y restauración. Madera real, no aglomerado. 44 años de experiencia.",
  openGraph: {
    title: "Carpintería Placito — Desde 1980",
    description: "Muebles que duran generaciones. Madera real, artesanía local.",
    images: ["/og-image.png"],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C1810" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lora bg-[#FFFBF0] text-[#2C1810] antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js')}`,
          }}
        />
      </body>
    </html>
  );
}
