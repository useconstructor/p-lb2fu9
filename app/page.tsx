import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    title: "Blanqueamiento Dental",
    description: "Ilumina tu sonrisa con nuestro tratamiento de blanqueamiento premium con tecnología LED de última generación.",
    price: "Desde $450.000",
    icon: "✨",
    href: "/tratamientos#blanqueamiento",
  },
  {
    title: "Ortodoncia Invisible",
    description: "Alineadores transparentes personalizados para corregir tu sonrisa de forma discreta y cómoda.",
    price: "Desde $4.500.000",
    icon: "💎",
    href: "/tratamientos#ortodoncia",
  },
  {
    title: "Implantes Dentales",
    description: "Recupera tu sonrisa completa con implantes de titanio de grado médico y coronas de porcelana.",
    price: "Desde $3.200.000",
    icon: "🦷",
    href: "/tratamientos#implantes",
  },
  {
    title: "Carillas Dentales",
    description: "Transforma tu sonrisa con carillas de porcelana ultrafinas para resultados naturales.",
    price: "Desde $850.000",
    icon: "🌟",
    href: "/tratamientos#carillas",
  },
];

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Empresaria",
    content: "El equipo de Bright Smile transformó mi sonrisa por completo. La atención personalizada y los resultados superaron todas mis expectativas. Ahora sonrío con total confianza.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Carlos Andrés Mejía",
    role: "Arquitecto",
    content: "Después de años evitando sonreír en fotos, finalmente encontré en Bright Smile el equipo que necesitaba. El tratamiento de ortodoncia invisible cambió mi vida.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Ana Sofía Ramírez",
    role: "Médica",
    content: "Como profesional de la salud, valoro la excelencia y el profesionalismo. Bright Smile cumple con los más altos estándares. El blanqueamiento quedó perfecto.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
];

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "5,000+", label: "Sonrisas Transformadas" },
  { value: "98%", label: "Satisfacción" },
  { value: "12", label: "Especialistas" },
];

const financingOptions = [
  {
    title: "Plan Básico",
    description: "Ideal para tratamientos menores",
    features: ["Hasta 6 meses sin interés", "Sin cuota inicial", "Aprobación inmediata"],
  },
  {
    title: "Plan Premium",
    description: "Para tratamientos completos",
    features: ["Hasta 12 meses sin interés", "Descuento del 10%", "Seguro dental incluido"],
  },
  {
    title: "Plan Élite",
    description: "Transformación total",
    features: ["Hasta 24 meses", "15% de descuento", "Controles gratuitos por 1 año"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-pearl to-mint/10" />
        <div className="absolute top-20 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gold">Clínica Boutique de Alta Gama</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Tu sonrisa perfecta{" "}
                <span className="text-gold-gradient">comienza aquí</span>
              </h1>

              <p className="text-lg text-navy/70 leading-relaxed max-w-xl">
                En Bright Smile Dental combinamos la más avanzada tecnología con un trato personalizado para ofrecerte resultados excepcionales. Descubre el arte de la odontología estética.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservar"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Agenda tu Consulta
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/antes-despues"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Ver Resultados
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-gold border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-navy/60">+500 reseñas de pacientes satisfechos</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 gold-gradient rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-cream to-white shadow-2xl border border-beige/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-navy mb-2">Sonrisa Perfecta</h3>
                      <p className="text-navy/60">Resultados que transforman vidas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Nuestros Servicios
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Tratamientos de Excelencia
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales de alta calidad, utilizando tecnología de vanguardia y materiales premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50 hover:border-gold/30"
              >
                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-navy/60 text-sm mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">{treatment.price}</span>
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tratamientos"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
            >
              Ver todos los tratamientos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-mint/20 rounded-full text-sm font-medium text-navy mb-4">
                ¿Por qué elegirnos?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Excelencia en cada detalle
              </h2>
              <p className="text-navy/70 mb-8">
                En Bright Smile Dental nos distinguimos por ofrecer una experiencia dental excepcional, donde la tecnología de punta se combina con un trato humano y personalizado.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Tecnología de Vanguardia", desc: "Equipos de última generación para diagnósticos precisos y tratamientos efectivos." },
                  { title: "Equipo Especializado", desc: "Profesionales certificados con años de experiencia en odontología estética." },
                  { title: "Ambiente Exclusivo", desc: "Instalaciones diseñadas para tu comodidad y relajación total." },
                  { title: "Atención Personalizada", desc: "Cada paciente recibe un plan de tratamiento único y a su medida." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-navy/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-mint/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-mint/30 to-mint/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center">
                    <svg className="w-16 h-16 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-cream to-beige flex items-center justify-center">
                    <svg className="w-16 h-16 text-navy/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 lg:py-32 bg-gradient-to-b from-cream to-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Testimonios
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto">
              La satisfacción de nuestros pacientes es nuestra mayor recompensa. Conoce las historias de transformación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-navy/70 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-mint" />
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-navy/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section id="financiamiento" className="py-20 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-sm font-medium text-gold mb-4">
              Financiamiento
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Planes de pago flexibles
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tu sonrisa perfecta no tiene que esperar. Ofrecemos opciones de financiamiento adaptadas a tus necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  index === 1
                    ? "bg-gold text-navy scale-105 shadow-2xl"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                <h3 className="font-heading text-2xl font-bold mb-2">{option.title}</h3>
                <p className={`text-sm mb-6 ${index === 1 ? "text-navy/70" : "text-white/70"}`}>
                  {option.description}
                </p>
                <ul className="space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 ${index === 1 ? "text-navy" : "text-gold"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Consulta tu plan personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-mint/20 via-pearl to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            ¿Listo para transformar tu sonrisa?
          </h2>
          <p className="text-navy/70 text-lg mb-8 max-w-2xl mx-auto">
            Agenda tu consulta de valoración gratuita y descubre cómo podemos ayudarte a lograr la sonrisa que siempre has deseado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservar"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Reservar Consulta Gratuita
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
