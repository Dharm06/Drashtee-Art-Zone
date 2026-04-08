import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drastee Art Zone | Luxury Custom Sculptures & Art",
  description: "We turn vision into timeless sculptures. Custom spiritual & architectural art including statues, temples, gates, and fountains.",
  icons: {
    icon: "/images/Drastee-Art-Zone-Logo.png",
    shortcut: "/images/Drastee-Art-Zone-Logo.png",
    apple: "/images/Drastee-Art-Zone-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
