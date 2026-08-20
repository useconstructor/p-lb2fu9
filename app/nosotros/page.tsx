import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Bright Smile Dental",
  description: "Conoce la historia de Bright Smile Dental, la clínica boutique de odontología estética de alta gama en Bogotá.",
};

const milestones = [
  { year: "2008", title: "Fundación", desc: "La Dra. Rodríguez funda Bright Smile Dental con la visión de transformar la odontología estética en Colombia." },
  { year: "2012", title: "Primera Expansión", desc: "Ampliamos nuestras instalaciones e incorporamos tecnología de última generación." },
  { year: "2015", title: "Certificación Internacional", desc: "Obtenemos certificaciones de la American Academy of Cosmetic Dentistry." },
  { year: "2018", title: "10 Años de Excelencia", desc: "Celebramos una década transformando más de 3,000 sonrisas." },
  { year: "2022", title: "Innovación Digital", desc: "Implementamos diseño de sonrisa digital y tecnología 3D." },
  { year: "2024", title: "Líderes del Mercado", desc: "Reconocidos como la clínica boutique de referencia en Bogotá." },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
                Nuestra Historia
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Sobre{" "}
                <span className="text-gold-gradient">Nosotros</span>
              </h1>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                Bright Smile Dental nació de la pasión por transformar sonrisas y vidas. Desde 2008, hemos sido pioneros en odontología estética de alta gama en Bogotá, combinando la más avanzada tecnología con un enfoque humano y personalizado.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Nuestra clínica boutique se distingue por ofrecer una experiencia única, donde cada paciente recibe atención exclusiva de nuestro equipo de especialistas certificados internacionalmente.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-mint/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-cream to-beige rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy">Clínica Boutique</h3>
                    <p className="text-navy/60 text-sm">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-beige/50">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Nuestra Visión</h2>
              <p className="text-navy/70 leading-relaxed">
                Ser la clínica dental de referencia en Latinoamérica por nuestra excelencia en odontología estética, innovación tecnológica y compromiso con la transformación positiva de la vida de nuestros pacientes a través de sonrisas perfectas.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-beige/50">
              <div className="w-16 h-16 rounded-2xl bg-mint/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Nuestra Misión</h2>
              <p className="text-navy/70 leading-relaxed">
                Transformar sonrisas y vidas brindando servicios odontológicos de la más alta calidad, con un enfoque personalizado, tecnología de vanguardia y un equipo humano comprometido con la excelencia y el bienestar de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-white/70">Más de 15 años transformando sonrisas</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <span className="text-gold font-heading text-2xl font-bold">{milestone.year}</span>
                      <h3 className="text-white font-semibold mt-2">{milestone.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-navy" />
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-32 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              ¿Qué nos hace diferentes?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              La Experiencia Bright Smile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Tecnología de Punta",
                desc: "Equipos de última generación: escáner intraoral 3D, radiografía digital, diseño de sonrisa computarizado y láser dental.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Equipo Especializado",
                desc: "Profesionales certificados internacionalmente con años de experiencia en sus respectivas especialidades.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "Ambiente Exclusivo",
                desc: "Instalaciones de lujo diseñadas para tu comodidad, con ambientes relajantes y atención personalizada.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Máxima Bioseguridad",
                desc: "Protocolos de esterilización certificados y espacios diseñados bajo los más altos estándares internacionales.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Financiamiento Flexible",
                desc: "Planes de pago adaptados a tus necesidades, con opciones hasta 24 meses y sin cuota inicial.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Atención Personalizada",
                desc: "Cada paciente recibe un plan de tratamiento único, diseñado según sus necesidades y objetivos específicos.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-beige/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 text-gold">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-navy/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mint/20 via-pearl to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
            ¿Listo para conocernos?
          </h2>
          <p className="text-navy/70 mb-8">
            Visita nuestra clínica y descubre por qué somos la opción preferida para transformar sonrisas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservar"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar Visita
            </Link>
            <Link
              href="/equipo"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Conoce al Equipo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
