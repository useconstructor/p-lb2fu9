"use client";

import { useState } from "react";
import Link from "next/link";

const treatments = [
  "Consulta de Valoración (Gratuita)",
  "Blanqueamiento Dental",
  "Ortodoncia Invisible",
  "Implantes Dentales",
  "Carillas Dentales",
  "Limpieza Profesional",
  "Endodoncia",
  "Diseño de Sonrisa",
  "Otro",
];

const specialists = [
  { name: "Sin preferencia", value: "" },
  { name: "Dra. María Alejandra Rodríguez - Estética", value: "dra-rodriguez" },
  { name: "Dr. Carlos Eduardo Martínez - Implantes", value: "dr-martinez" },
  { name: "Dra. Valentina Gómez - Ortodoncia", value: "dra-gomez" },
  { name: "Dr. Andrés Felipe Herrera - Endodoncia", value: "dr-herrera" },
  { name: "Dra. Laura Sofía Méndez - Periodoncia", value: "dra-mendez" },
  { name: "Dra. Camila Andrea Restrepo - General", value: "dra-restrepo" },
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export default function ReservarPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    specialist: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-pearl to-mint/10">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mint/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">
            ¡Cita Solicitada!
          </h1>
          <p className="text-navy/70 mb-8">
            Hemos recibido tu solicitud de cita. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para confirmar tu reserva.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Reserva Online
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-6">
              Agenda tu{" "}
              <span className="text-gold-gradient">Cita</span>
            </h1>
            <p className="text-navy/70 text-lg">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita. La consulta de valoración es gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-beige/50 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Info Sidebar */}
              <div className="lg:col-span-2 bg-navy p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Ubicación</h3>
                      <p className="text-white/70 text-sm">
                        Calle 93 #14-20, Consultorio 501<br />
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Teléfono</h3>
                      <p className="text-white/70 text-sm">+57 300 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Horario</h3>
                      <p className="text-white/70 text-sm">
                        Lunes a Viernes: 8:00 - 18:00<br />
                        Sábados: 9:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">¿Prefieres llamar?</h3>
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20bd5a] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="treatment" className="block text-sm font-medium text-navy mb-2">
                        Tratamiento de Interés *
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        required
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      >
                        <option value="">Selecciona un tratamiento</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="specialist" className="block text-sm font-medium text-navy mb-2">
                        Especialista Preferido
                      </label>
                      <select
                        id="specialist"
                        name="specialist"
                        value={formData.specialist}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      >
                        {specialists.map((s) => (
                          <option key={s.value} value={s.value}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-navy mb-2">
                        Fecha Preferida *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-navy mb-2">
                        Hora Preferida *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      >
                        <option value="">Selecciona una hora</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Comentarios Adicionales
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30 resize-none"
                      placeholder="Cuéntanos más sobre tu caso o cualquier pregunta que tengas..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-base font-semibold text-white gold-gradient rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Solicitar Cita"
                    )}
                  </button>

                  <p className="text-xs text-navy/50 text-center">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <Link href="/privacidad" className="text-gold hover:underline">
                      Política de Privacidad
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
