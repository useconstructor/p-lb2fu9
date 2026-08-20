import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Salud Dental | Bright Smile Dental",
  description: "Consejos de salud dental, tendencias en odontología estética y todo lo que necesitas saber para mantener una sonrisa saludable.",
};

const blogPosts = [
  {
    id: 1,
    slug: "blanqueamiento-dental-todo-lo-que-debes-saber",
    title: "Blanqueamiento Dental: Todo lo que Debes Saber",
    excerpt: "Descubre los diferentes tipos de blanqueamiento dental, sus beneficios, cuidados post-tratamiento y cuál es la mejor opción para ti.",
    category: "Estética Dental",
    date: "15 de Agosto, 2024",
    readTime: "5 min de lectura",
    featured: true,
  },
  {
    id: 2,
    slug: "ortodoncia-invisible-vs-brackets",
    title: "Ortodoncia Invisible vs Brackets: ¿Cuál Elegir?",
    excerpt: "Comparamos las ventajas y desventajas de cada tratamiento para ayudarte a tomar la mejor decisión para tu sonrisa.",
    category: "Ortodoncia",
    date: "10 de Agosto, 2024",
    readTime: "7 min de lectura",
    featured: true,
  },
  {
    id: 3,
    slug: "cuidados-despues-de-un-implante-dental",
    title: "Cuidados Después de un Implante Dental",
    excerpt: "Guía completa sobre cómo cuidar tu implante dental para garantizar su éxito y durabilidad a largo plazo.",
    category: "Implantes",
    date: "5 de Agosto, 2024",
    readTime: "6 min de lectura",
    featured: false,
  },
  {
    id: 4,
    slug: "alimentos-que-manchan-los-dientes",
    title: "10 Alimentos que Manchan tus Dientes (y Cómo Evitarlo)",
    excerpt: "Conoce los alimentos y bebidas que pueden afectar el color de tus dientes y las estrategias para minimizar su impacto.",
    category: "Prevención",
    date: "1 de Agosto, 2024",
    readTime: "4 min de lectura",
    featured: false,
  },
  {
    id: 5,
    slug: "carillas-dentales-transformacion-sonrisa",
    title: "Carillas Dentales: La Transformación de tu Sonrisa",
    excerpt: "Todo sobre las carillas de porcelana: proceso, duración, mantenimiento y casos ideales para este tratamiento.",
    category: "Estética Dental",
    date: "25 de Julio, 2024",
    readTime: "6 min de lectura",
    featured: false,
  },
  {
    id: 6,
    slug: "sensibilidad-dental-causas-tratamiento",
    title: "Sensibilidad Dental: Causas y Tratamiento",
    excerpt: "¿Sientes dolor al consumir alimentos fríos o calientes? Descubre las causas de la sensibilidad dental y cómo tratarla.",
    category: "Prevención",
    date: "20 de Julio, 2024",
    readTime: "5 min de lectura",
    featured: false,
  },
];

const categories = [
  "Todos",
  "Estética Dental",
  "Ortodoncia",
  "Implantes",
  "Prevención",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-pearl to-mint/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              Consejos de Salud Dental
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Nuestro{" "}
              <span className="text-gold-gradient">Blog</span>
            </h1>
            <p className="text-navy/70 text-lg">
              Artículos, consejos y tendencias en odontología para mantener tu sonrisa saludable y radiante.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-pearl border-b border-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "Todos"
                    ? "bg-gold text-white shadow-lg"
                    : "bg-white text-navy/70 hover:bg-gold/10 hover:text-gold border border-beige"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8">Artículos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50 group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-gold/20 to-mint/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-navy/60 mb-3">
                    <span className="text-gold font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-navy/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all"
                  >
                    Leer más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8">Todos los Artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/50 group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-cream to-beige relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-navy/60 mb-2">
                    <span className="text-gold font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-navy/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-navy/40">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold text-sm font-medium hover:underline"
                    >
                      Leer →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-white/70 mb-8">
            Recibe consejos de salud dental, promociones exclusivas y las últimas novedades directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 gold-gradient text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mint/20 via-pearl to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
            ¿Tienes preguntas sobre tu salud dental?
          </h2>
          <p className="text-navy/70 mb-8">
            Nuestro equipo de especialistas está listo para ayudarte. Agenda una consulta gratuita.
          </p>
          <Link
            href="/reservar"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
