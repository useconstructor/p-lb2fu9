import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Bright Smile Dental",
  description: "Conoce a nuestro equipo de especialistas en odontología estética y general. Profesionales certificados con años de experiencia.",
};

const team = [
  {
    name: "Dra. María Alejandra Rodríguez",
    role: "Directora Médica",
    specialty: "Odontología Estética y Rehabilitación Oral",
    education: "Universidad Javeriana - Especialización en Rehabilitación Oral, NYU College of Dentistry",
    experience: "18 años de experiencia",
    bio: "Líder visionaria de Bright Smile Dental, la Dra. Rodríguez ha transformado más de 3,000 sonrisas. Su pasión por la excelencia y el detalle la han convertido en referente de la odontología estética en Colombia.",
    certifications: ["American Academy of Cosmetic Dentistry", "Invisalign Diamond Provider", "ITI Member"],
  },
  {
    name: "Dr. Carlos Eduardo Martínez",
    role: "Especialista en Implantes",
    specialty: "Implantología Oral y Cirugía Maxilofacial",
    education: "Universidad Nacional - Especialización en Periodoncia e Implantología",
    experience: "15 años de experiencia",
    bio: "Reconocido por su precisión quirúrgica, el Dr. Martínez ha colocado más de 5,000 implantes con una tasa de éxito del 99%. Pionero en técnicas de carga inmediata en Colombia.",
    certifications: ["ITI Fellow", "Nobel Biocare Certified", "Straumann Master"],
  },
  {
    name: "Dra. Valentina Gómez",
    role: "Especialista en Ortodoncia",
    specialty: "Ortodoncia Invisible y Ortopedia Maxilar",
    education: "Universidad CES - Especialización en Ortodoncia, Invisalign University",
    experience: "12 años de experiencia",
    bio: "Experta en transformaciones ortodónticas estéticas, la Dra. Gómez ha completado más de 800 casos de ortodoncia invisible con resultados excepcionales.",
    certifications: ["Invisalign Platinum Elite", "American Association of Orthodontists", "World Federation of Orthodontists"],
  },
  {
    name: "Dr. Andrés Felipe Herrera",
    role: "Especialista en Endodoncia",
    specialty: "Endodoncia y Microcirugía Apical",
    education: "Universidad de Antioquia - Especialización en Endodoncia",
    experience: "10 años de experiencia",
    bio: "Maestro en el arte de salvar dientes, el Dr. Herrera utiliza tecnología de microscopía avanzada para tratamientos de conducto precisos e indoloros.",
    certifications: ["Sociedad Colombiana de Endodoncia", "American Association of Endodontists"],
  },
  {
    name: "Dra. Laura Sofía Méndez",
    role: "Especialista en Periodoncia",
    specialty: "Periodoncia y Estética Gingival",
    education: "Universidad del Bosque - Especialización en Periodoncia",
    experience: "9 años de experiencia",
    bio: "Especialista en salud de las encías y estética gingival, la Dra. Méndez combina tratamiento periodontal avanzado con técnicas de cirugía plástica periodontal.",
    certifications: ["European Federation of Periodontology", "Sociedad Colombiana de Periodoncia"],
  },
  {
    name: "Dra. Camila Andrea Restrepo",
    role: "Odontóloga General",
    specialty: "Odontología Preventiva y Restauradora",
    education: "Universidad Javeriana",
    experience: "7 años de experiencia",
    bio: "Con un enfoque en prevención y atención integral, la Dra. Restrepo brinda cuidado dental de primera clase con un trato cálido y personalizado.",
    certifications: ["Certified Zoom Whitening Specialist", "3M Certified"],
  },
];

export default function EquipoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Profesionales de Excelencia
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Nuestro{" "}
              <span className="text-gold-gradient">Equipo</span>
            </h1>
            <p className="text-navy/70 text-lg">
              Conoce a los especialistas que transforman sonrisas cada día. Un equipo comprometido con la excelencia y tu bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50 group"
              >
                {/* Profile Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gold">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-navy/60 text-sm mb-4">
                    {member.specialty}
                  </p>
                  <p className="text-navy/70 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-navy/50">
                      <span className="font-medium">Formación:</span> {member.education}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {member.certifications.slice(0, 2).map((cert, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-mint/10 rounded-full text-xs text-navy/70"
                      >
                        {cert}
                      </span>
                    ))}
                    {member.certifications.length > 2 && (
                      <span className="px-2 py-1 bg-beige/50 rounded-full text-xs text-navy/50">
                        +{member.certifications.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Excelencia", desc: "Buscamos la perfección en cada procedimiento", icon: "⭐" },
              { title: "Innovación", desc: "Tecnología de vanguardia al servicio de tu sonrisa", icon: "💡" },
              { title: "Empatía", desc: "Entendemos tus necesidades y preocupaciones", icon: "❤️" },
              { title: "Integridad", desc: "Honestidad y transparencia en todo momento", icon: "🤝" },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mint/20 via-pearl to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
            Conoce a nuestro equipo en persona
          </h2>
          <p className="text-navy/70 mb-8">
            Agenda tu consulta y déjate asesorar por los mejores especialistas en odontología estética.
          </p>
          <Link
            href="/reservar"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
