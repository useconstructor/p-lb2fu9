"use client";

import { useState } from "react";
import Link from "next/link";

const cases = [
  {
    id: 1,
    title: "Blanqueamiento Completo",
    treatment: "Blanqueamiento LED Premium",
    description: "Transformación de sonrisa con blanqueamiento profesional de 6 tonos.",
    duration: "1 sesión",
    category: "blanqueamiento",
  },
  {
    id: 2,
    title: "Ortodoncia Invisible",
    treatment: "Alineadores Transparentes",
    description: "Corrección de apiñamiento dental en 14 meses con alineadores invisibles.",
    duration: "14 meses",
    category: "ortodoncia",
  },
  {
    id: 3,
    title: "Carillas de Porcelana",
    treatment: "6 Carillas E.max",
    description: "Transformación completa del sector anterior con carillas de porcelana.",
    duration: "3 semanas",
    category: "carillas",
  },
  {
    id: 4,
    title: "Implante + Corona",
    treatment: "Implante Titanio Premium",
    description: "Reemplazo de molar perdido con implante y corona de porcelana.",
    duration: "4 meses",
    category: "implantes",
  },
  {
    id: 5,
    title: "Diseño de Sonrisa",
    treatment: "Tratamiento Integral",
    description: "Combinación de blanqueamiento, carillas y contorneo gingival.",
    duration: "6 semanas",
    category: "diseño",
  },
  {
    id: 6,
    title: "Rehabilitación Oral",
    treatment: "Coronas y Puentes",
    description: "Reconstrucción completa de arcada superior con coronas de zirconio.",
    duration: "8 semanas",
    category: "rehabilitacion",
  },
];

const categories = [
  { id: "todos", name: "Todos" },
  { id: "blanqueamiento", name: "Blanqueamiento" },
  { id: "ortodoncia", name: "Ortodoncia" },
  { id: "carillas", name: "Carillas" },
  { id: "implantes", name: "Implantes" },
  { id: "diseño", name: "Diseño de Sonrisa" },
];

function BeforeAfterSlider({ caseItem }: { caseItem: typeof cases[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-gradient-to-br from-cream to-beige"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-beige to-cream">
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
            <svg className="w-12 h-12 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-navy/60 font-medium">Antes</span>
        </div>
      </div>

      {/* After Image (Overlay) */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mint/30 to-gold/20"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-navy font-medium">Después</span>
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-gold">
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 px-3 py-1 bg-navy/80 text-white text-xs font-medium rounded-full">
        Antes
      </div>
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
        Después
      </div>
    </div>
  );
}

export default function AntesDepuesPage() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredCases = activeCategory === "todos"
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Galería de Resultados
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Antes y{" "}
              <span className="text-gold-gradient">Después</span>
            </h1>
            <p className="text-navy/70 text-lg">
              Descubre las transformaciones reales de nuestros pacientes. Desliza para comparar los resultados de nuestros tratamientos.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-pearl border-b border-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-white shadow-lg"
                    : "bg-white text-navy/70 hover:bg-gold/10 hover:text-gold border border-beige"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50"
              >
                <BeforeAfterSlider caseItem={caseItem} />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-2">
                    {caseItem.treatment}
                  </p>
                  <p className="text-navy/60 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-navy/50">
                      Duración: {caseItem.duration}
                    </span>
                    <Link
                      href="/reservar"
                      className="text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                    >
                      Consultar →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mint/20 via-pearl to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-navy/70 mb-8">
            Agenda tu consulta de valoración y descubre cómo podemos transformar tu sonrisa.
          </p>
          <Link
            href="/reservar"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Agenda tu Transformación
          </Link>
        </div>
      </section>
    </div>
  );
}
