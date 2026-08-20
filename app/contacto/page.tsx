"use client";

import { useState } from "react";
import Link from "next/link";

const contactReasons = [
  "Información sobre tratamientos",
  "Precios y financiamiento",
  "Agendar cita",
  "Cambiar o cancelar cita",
  "Comentarios o sugerencias",
  "Otro",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Estamos para Ayudarte
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-6">
              <span className="text-gold-gradient">Contáctanos</span>
            </h1>
            <p className="text-navy/70 text-lg">
              ¿Tienes preguntas? Estamos aquí para ayudarte. Escríbenos o visítanos en nuestra clínica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige/50">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Dirección</h3>
                      <p className="text-navy/70">
                        Calle 93 #14-20, Consultorio 501<br />
                        Zona T, Bogotá, Colombia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Teléfono</h3>
                      <p className="text-navy/70">+57 300 123 4567</p>
                      <p className="text-navy/70">+57 (1) 742 3456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Correo Electrónico</h3>
                      <p className="text-navy/70">info@brightsmile.co</p>
                      <p className="text-navy/70">citas@brightsmile.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Horario de Atención</h3>
                      <p className="text-navy/70">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-navy/70">Sábados: 9:00 AM - 2:00 PM</p>
                      <p className="text-navy/70">Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div id="ubicacion" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-beige/50">
                <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy mb-2">Nuestra Ubicación</h3>
                      <p className="text-navy/60 text-sm mb-4">Calle 93 #14-20, Consultorio 501</p>
                      <a
                        href="https://maps.google.com/?q=4.676,-74.048"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold/90 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige/50 h-fit">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mint/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-navy/70 mb-6">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
                    }}
                    className="text-gold font-medium hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid sm:grid-cols-2 gap-6">
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
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-navy mb-2">
                        Motivo de Consulta *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30"
                      >
                        <option value="">Selecciona un motivo</option>
                        {contactReasons.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/30 resize-none"
                        placeholder="¿En qué podemos ayudarte?"
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
                        "Enviar Mensaje"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuáles son sus métodos de pago?", a: "Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y ofrecemos planes de financiamiento hasta 24 meses." },
              { q: "¿La primera consulta tiene costo?", a: "La consulta de valoración es completamente gratuita. En ella evaluamos tu caso y te presentamos las opciones de tratamiento." },
              { q: "¿Necesito referencia para agendar?", a: "No, puedes agendar directamente a través de nuestra página web, WhatsApp o llamando a nuestra línea de atención." },
              { q: "¿Atienden emergencias dentales?", a: "Sí, contamos con horarios especiales para emergencias. Llámanos y te daremos atención prioritaria." },
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-gold mb-2">{faq.q}</h3>
                <p className="text-white/70 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
