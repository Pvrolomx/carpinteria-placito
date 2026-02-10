"use client";

import { useEffect, useRef, useState } from "react";
import { config } from "@/lib/config";
import { gallery } from "@/lib/gallery";
import {
  Lang,
  t,
  serviceTranslations,
  testimonialTranslations,
} from "@/lib/i18n";

/* ─── Fade-in observer ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Saw divider ─── */
function SawDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6 sm:h-8">
        <path
          d="M0,20 L30,0 L60,20 L90,0 L120,20 L150,0 L180,20 L210,0 L240,20 L270,0 L300,20 L330,0 L360,20 L390,0 L420,20 L450,0 L480,20 L510,0 L540,20 L570,0 L600,20 L630,0 L660,20 L690,0 L720,20 L750,0 L780,20 L810,0 L840,20 L870,0 L900,20 L930,0 L960,20 L990,0 L1020,20 L1050,0 L1080,20 L1110,0 L1140,20 L1170,0 L1200,20 L1200,40 L0,40 Z"
          fill="#2C1810"
          fillOpacity="0.06"
        />
      </svg>
    </div>
  );
}

/* ─── WhatsApp SVG ─── */
function WaIcon({ className = "w-5 h-5 fill-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── WhatsApp float ─── */
function WhatsAppFloat({ lang }: { lang: Lang }) {
  return (
    <a
      href={config.whatsapp.link(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg pulse-wa hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <WaIcon className="w-7 h-7 fill-white" />
    </a>
  );
}

/* ─── WhatsApp CTA ─── */
function WhatsAppBtn({ lang, large = false }: { lang: Lang; large?: boolean }) {
  return (
    <a
      href={config.whatsapp.link(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-md ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"}`}
    >
      <WaIcon />
      {t.hero.cta[lang]}
    </a>
  );
}

/* ─── Lang toggle ─── */
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex bg-white/90 backdrop-blur rounded-full shadow-md border border-[#e8dcc8] overflow-hidden">
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1.5 text-sm font-bold transition-colors ${lang === "es" ? "bg-[#2C1810] text-[#F5F0E8]" : "text-[#8B6914] hover:bg-[#F5F0E8]"}`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-sm font-bold transition-colors ${lang === "en" ? "bg-[#2C1810] text-[#F5F0E8]" : "text-[#8B6914] hover:bg-[#F5F0E8]"}`}
      >
        EN
      </button>
    </div>
  );
}

/* ─── FAQ Accordion ─── */
function FAQ({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-12 text-[#2C1810] fade-in">
          {t.faq.title[lang]}
        </h2>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="fade-in bg-white/70 rounded-xl border border-[#e8dcc8] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F5F0E8]/50 transition-colors"
              >
                <span className="font-playfair font-bold text-[#2C1810]">{item.q[lang]}</span>
                <span className={`text-[#8B6914] text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-[#5a4a3a] leading-relaxed">
                  {item.a[lang]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tool icons for gallery placeholders ─── */
const toolIcons = [
  { icon: "🪚", label: { es: "Cocina integral", en: "Custom kitchen" } },
  { icon: "🪵", label: { es: "Closet de cedro", en: "Cedar closet" } },
  { icon: "🔨", label: { es: "Mesa de comedor", en: "Dining table" } },
  { icon: "📐", label: { es: "Puerta de parota", en: "Parota door" } },
  { icon: "🪑", label: { es: "Mueble de baño", en: "Bathroom vanity" } },
  { icon: "🛠️", label: { es: "Librero a medida", en: "Custom bookshelf" } },
];

/* ═══════════════════════════════════════════ */
/*                 MAIN PAGE                   */
/* ═══════════════════════════════════════════ */
export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const pageRef = useFadeIn();
  const years = config.business.years;
  const services = serviceTranslations[lang];
  const testimonials = testimonialTranslations[lang];

  // Re-trigger fade-in on lang change
  useEffect(() => {
    if (!pageRef.current) return;
    const els = pageRef.current.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  return (
    <main ref={pageRef} className="grain wood-grain min-h-screen">
      <LangToggle lang={lang} setLang={setLang} />
      <WhatsAppFloat lang={lang} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8] to-[#FFFBF0]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(92deg,transparent 0px,transparent 3px,rgba(139,105,20,0.3) 3px,rgba(139,105,20,0.3) 4px)`
        }} />
        <div className="relative z-10 max-w-2xl fade-in">
          <h1 className="sr-only">Carpintería Placito — Desde 1982</h1>
          <img src="/logo.png" alt="Carpintería Placito" className="w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-6 drop-shadow-lg" />
          <p className="text-lg sm:text-xl text-[#5a4a3a] max-w-lg mx-auto whitespace-pre-line">
            {t.hero.tagline[lang]}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A0784C] animate-bounce text-2xl">↓</div>
      </section>

      <SawDivider />

      {/* ═══ NUESTRA HISTORIA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-10 text-[#2C1810]">
            {t.history.title[lang]}
          </h2>
          <div className="bg-white/60 rounded-2xl p-8 sm:p-12 shadow-sm border border-[#e8dcc8]">
            <p className="text-lg leading-relaxed text-[#3d2e1e] mb-4">
              {t.history.quote[lang](years)}
            </p>
            <p className="text-[#8B6914] font-playfair italic text-lg mb-6">
              {t.history.founder[lang]}
            </p>
            <p className="text-[#5a4a3a] text-base leading-relaxed border-t border-[#e8dcc8] pt-6">
              {t.history.dynasty[lang]}
            </p>

            {/* Timeline */}
            <div className="mt-10 flex items-center justify-between text-center">
              <div className="flex-1">
                <div className="text-3xl font-playfair font-bold text-[#2D4A22]">1982</div>
                <p className="text-sm text-[#8B6914] mt-1">{t.history.timelineStart[lang]}</p>
              </div>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#2D4A22] to-[#8B6914] mx-4 rounded" />
              <div className="flex-1">
                <div className="text-3xl font-playfair font-bold text-[#8B6914]">{t.history.today[lang]}</div>
                <p className="text-sm text-[#8B6914] mt-1">{t.history.timelineEnd[lang](years)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SawDivider flip />

      {/* ═══ SERVICIOS ═══ */}
      <section className="py-20 px-6 bg-[#F5F0E8]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-12 text-[#2C1810] fade-in">
            {t.services.title[lang]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="fade-in bg-white/70 rounded-xl p-6 text-center shadow-sm border border-[#e8dcc8] hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-[#2C1810] mb-1">{s.title}</h3>
                <p className="text-[#5a4a3a] text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SawDivider />

      {/* ═══ GALERÍA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-4 text-[#2C1810] fade-in">
            {t.gallery.title[lang]}
          </h2>
          <p className="text-center text-[#8B6914] mb-12 fade-in">{t.gallery.subtitle[lang]}</p>
          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item, i) => (
                <div key={i} className="fade-in group relative aspect-[3/2] rounded-xl overflow-hidden shadow-sm border border-[#e8dcc8]">
                  <img src={item.src} alt={item.title[lang]} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-playfair font-bold">{item.title[lang]}</p>
                      <p className="text-sm opacity-80">{item.material[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {toolIcons.map((ti, i) => (
                <div key={i} className="fade-in aspect-[4/3] rounded-xl border-2 border-dashed border-[#d4c4a8] flex flex-col items-center justify-center bg-gradient-to-br from-[#F5F0E8] to-[#efe5d4] hover:border-[#8B6914] transition-colors">
                  <span className="text-5xl mb-3 opacity-60">{ti.icon}</span>
                  <span className="text-[#8B6914] font-playfair text-sm">{ti.label[lang]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SawDivider flip />

      {/* ═══ POR QUÉ ELEGIRNOS ═══ */}
      <section className="py-20 px-6 bg-[#2C1810] text-[#F5F0E8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-12 fade-in">
            {t.why.title[lang]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.why.items.map((item, i) => (
              <div key={i} className="fade-in flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-playfair text-xl font-bold mb-1">
                    {typeof item.title[lang] === "function"
                      ? (item.title[lang] as (n: number) => string)(years)
                      : item.title[lang]}
                  </h3>
                  <p className="text-[#c4b69a] text-sm">{item.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center mb-12 text-[#2C1810] fade-in">
            {t.testimonials.title[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="fade-in bg-white/70 rounded-xl p-6 shadow-sm border border-[#e8dcc8]">
                <p className="text-lg text-[#3d2e1e] mb-4 italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <div className="border-t border-[#e8dcc8] pt-3">
                  <p className="font-playfair font-bold text-[#2C1810]">{item.name}</p>
                  <p className="text-sm text-[#8B6914]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SawDivider />

      {/* ═══ FAQ ═══ */}
      <FAQ lang={lang} />

      <SawDivider flip />

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F0E8] to-[#efe5d4]">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C1810] mb-4">
            {t.cta.title[lang]}
          </h2>
          <p className="text-lg text-[#5a4a3a] mb-8">{t.cta.subtitle[lang]}</p>
          <WhatsAppBtn lang={lang} large />
          <div className="mt-12 text-sm text-[#8B6914] space-y-1">
            <p>📍 {config.business.fullAddress}</p>
            <p>🕐 {config.business.hours[lang]}</p>
            <p>📱 {config.business.phone}</p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-8 px-6 bg-[#2C1810] text-center">
        <p className="text-[#c4b69a] font-playfair">
          Carpintería Placito © 1982–{new Date().getFullYear()}
        </p>
        <p className="text-[#8B6914] text-sm mt-1">{t.footer.tagline[lang]}</p>
        <p className="text-[#5a4a3a] text-xs mt-4">
          Hecho por <a href="https://duendes.app" className="underline hover:text-[#c4b69a]">duendes.app</a> 2026
        </p>
      </footer>
    </main>
  );
}
