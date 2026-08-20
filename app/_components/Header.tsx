"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Tratamientos", href: "/tratamientos" },
  { name: "Antes y Después", href: "/antes-despues" },
  { name: "Nuestro Equipo", href: "/equipo" },
  { name: "Sobre Nosotros", href: "/nosotros" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pearl/95 backdrop-blur-md border-b border-beige/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-navy tracking-tight">Bright Smile</span>
              <span className="block text-xs text-gold font-medium tracking-widest uppercase">Dental</span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-navy/80 hover:text-gold transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
            <Link
              href="/reservar"
              className="ml-4 px-6 py-2.5 text-sm font-semibold text-white gold-gradient rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Reservar Cita
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-beige/50">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-navy/80 hover:text-gold hover:bg-cream/50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/reservar"
                className="mx-4 mt-4 px-6 py-3 text-sm font-semibold text-white text-center gold-gradient rounded-full shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
