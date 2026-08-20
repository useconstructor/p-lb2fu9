import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos | Bright Smile Dental",
  description: "Descubre nuestra amplia gama de tratamientos dentales de alta calidad: blanqueamiento, ortodoncia invisible, implantes, carillas y más.",
};

const treatments = [
  {
    id: "blanqueamiento",
    title: "Blanqueamiento Dental",
    description: "Ilumina tu sonrisa con nuestro tratamiento de blanqueamiento premium. Utilizamos tecnología LED de última generación combinada con geles blanqueadores de grado profesional para resultados hasta 8 tonos más blancos en una sola sesión.",
    longDescription: "Nuestro sistema de blanqueamiento dental profesional está diseñado para ofrecerte resultados espectaculares de manera segura y efectiva. El procedimiento comienza con una evaluación completa de tu salud dental, seguido de una limpieza profesional para preparar tus dientes.",
    benefits: ["Resultados inmediatos visibles", "Hasta 8 tonos más blanco", "Procedimiento indoloro", "Duración de 1-2 años", "Sin sensibilidad post-tratamiento"],
    price: "Desde $450.000",
    duration: "60-90 minutos",
    sessions: "1-2 sesiones",
    icon: "✨",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia Invisible",
    description: "Alineadores transparentes personalizados fabricados con tecnología 3D para corregir tu sonrisa de forma discreta, cómoda y removible. Ideal para adultos que buscan resultados estéticos durante el tratamiento.",
    longDescription: "Los alineadores invisibles son la revolución en ortodoncia. Fabricados a medida con material termoplástico transparente, son prácticamente invisibles y pueden removerse para comer y cepillarte los dientes.",
    benefits: ["Prácticamente invisibles", "Removibles para comer", "Sin alambres ni brackets", "Menos visitas al consultorio", "Resultados predecibles con simulación 3D"],
    price: "Desde $4.500.000",
    duration: "12-24 meses",
    sessions: "Revisiones cada 6-8 semanas",
    icon: "💎",
  },
  {
    id: "implantes",
    title: "Implantes Dentales",
    description: "Recupera tu sonrisa completa con implantes de titanio de grado médico y coronas de porcelana que lucen y funcionan como dientes naturales. La solución definitiva para dientes perdidos.",
    longDescription: "Los implantes dentales son la opción más avanzada y duradera para reemplazar dientes perdidos. Un implante consiste en un tornillo de titanio que se integra con el hueso maxilar, proporcionando una base sólida para la corona dental.",
    benefits: ["Solución permanente", "Aspecto 100% natural", "Preserva el hueso maxilar", "No afecta dientes adyacentes", "Garantía de por vida en el implante"],
    price: "Desde $3.200.000",
    duration: "3-6 meses proceso completo",
    sessions: "2-3 sesiones principales",
    icon: "🦷",
  },
  {
    id: "carillas",
    title: "Carillas Dentales",
    description: "Transforma tu sonrisa con carillas de porcelana ultrafinas que corrigen color, forma y tamaño de tus dientes. Resultados naturales y duraderos para una sonrisa de Hollywood.",
    longDescription: "Las carillas dentales son láminas ultrafinas de porcelana o composite que se adhieren a la superficie frontal de los dientes. Son ideales para corregir imperfecciones como manchas, dientes desalineados, espacios o dientes fracturados.",
    benefits: ["Aspecto completamente natural", "Resistentes a las manchas", "Durabilidad de 10-15 años", "Mínima preparación dental", "Resultados inmediatos"],
    price: "Desde $850.000 por unidad",
    duration: "2-3 semanas",
    sessions: "2-3 citas",
    icon: "🌟",
  },
  {
    id: "limpieza",
    title: "Limpieza Profesional",
    description: "Limpieza dental profunda con ultrasonido y pulido profesional para eliminar placa, sarro y manchas. Incluye evaluación completa y recomendaciones personalizadas de higiene oral.",
    longDescription: "La limpieza dental profesional es fundamental para mantener una salud bucal óptima. Nuestro procedimiento incluye la eliminación de placa bacteriana y sarro mediante ultrasonido, pulido con pasta profiláctica y aplicación de flúor.",
    benefits: ["Previene enfermedades periodontales", "Elimina manchas superficiales", "Aliento más fresco", "Evaluación dental incluida", "Recomendaciones personalizadas"],
    price: "Desde $120.000",
    duration: "45-60 minutos",
    sessions: "Recomendado cada 6 meses",
    icon: "🪥",
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description: "Tratamiento de conducto para salvar dientes dañados o infectados. Procedimiento indoloro con anestesia local y tecnología de última generación para preservar tu pieza dental natural.",
    longDescription: "La endodoncia, comúnmente conocida como tratamiento de conducto, es un procedimiento que permite salvar dientes que de otro modo tendrían que ser extraídos. Eliminamos el tejido pulpar infectado y sellamos el conducto para prevenir futuras infecciones.",
    benefits: ["Salva el diente natural", "Procedimiento indoloro", "Elimina la infección", "Restaura la función masticatoria", "Alta tasa de éxito"],
    price: "Desde $350.000",
    duration: "60-90 minutos",
    sessions: "1-2 sesiones",
    icon: "🏥",
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description: "Tratamiento especializado de encías para prevenir y tratar enfermedades periodontales como gingivitis y periodontitis. Recupera la salud de tus encías con nuestros especialistas.",
    longDescription: "La periodoncia se enfoca en el cuidado de las estructuras que soportan los dientes: encías, hueso alveolar y ligamento periodontal. Tratamos desde gingivitis leve hasta casos avanzados de periodontitis.",
    benefits: ["Detiene la pérdida ósea", "Reduce la inflamación", "Previene pérdida dental", "Mejora la estética gingival", "Tratamiento personalizado"],
    price: "Desde $280.000",
    duration: "Variable según caso",
    sessions: "Plan personalizado",
    icon: "🩺",
  },
  {
    id: "diseno-sonrisa",
    title: "Diseño de Sonrisa",
    description: "Transformación completa de tu sonrisa combinando múltiples tratamientos personalizados. Análisis facial, dental y digital para crear tu sonrisa ideal de forma integral.",
    longDescription: "El diseño de sonrisa es un tratamiento integral que combina diferentes procedimientos estéticos para lograr una sonrisa armoniosa y natural. Utilizamos software de diseño digital para mostrarte el resultado antes de comenzar.",
    benefits: ["Vista previa digital del resultado", "Tratamiento integral", "Resultados personalizados", "Armonía facial completa", "Múltiples opciones disponibles"],
    price: "Consultar según plan",
    duration: "Variable según tratamientos",
    sessions: "Plan personalizado",
    icon: "✨",
  },
];

export default function TratamientosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Nuestros Tratamientos
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Tratamientos de{" "}
              <span className="text-gold-gradient">Excelencia</span>
            </h1>
            <p className="text-navy/70 text-lg">
              Descubre nuestra amplia gama de tratamientos dentales de alta calidad, diseñados para transformar tu sonrisa con los más altos estándares de excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 lg:py-32 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-5xl mb-6">{treatment.icon}</div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                    {treatment.title}
                  </h2>
                  <p className="text-navy/70 mb-6 leading-relaxed">
                    {treatment.longDescription}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <div className="text-sm text-navy/60 mb-1">Precio</div>
                      <div className="font-semibold text-gold">{treatment.price}</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <div className="text-sm text-navy/60 mb-1">Duración</div>
                      <div className="font-semibold text-navy">{treatment.duration}</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <div className="text-sm text-navy/60 mb-1">Sesiones</div>
                      <div className="font-semibold text-navy">{treatment.sessions}</div>
                    </div>
                  </div>

                  <Link
                    href="/reservar"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Agendar Consulta
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-beige/50">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-6">
                      Beneficios del Tratamiento
                    </h3>
                    <ul className="space-y-4">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-navy/70">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿No estás seguro qué tratamiento necesitas?
          </h2>
          <p className="text-white/70 mb-8">
            Agenda una consulta de valoración gratuita y nuestros especialistas te ayudarán a encontrar el tratamiento perfecto para ti.
          </p>
          <Link
            href="/reservar"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Agendar Valoración Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
