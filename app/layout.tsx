import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import WhatsAppButton from "./_components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Smile Dental | Odontología Estética de Lujo en Bogotá",
  description: "Clínica odontológica boutique de alta gama en Bogotá. Especialistas en blanqueamiento dental, ortodoncia invisible e implantes. Transformamos sonrisas con excelencia.",
  keywords: "dentista bogotá, odontología estética, blanqueamiento dental, ortodoncia invisible, implantes dentales, clínica dental de lujo",
  openGraph: {
    title: "Bright Smile Dental | Odontología Estética de Lujo",
    description: "Transformamos sonrisas con excelencia. Clínica boutique especializada en odontología estética y general.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-pearl text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
