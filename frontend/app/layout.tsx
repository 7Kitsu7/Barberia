import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Importante para la navegación interna
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barber Hub | Encuentra tu estilo",
  description: "Plataforma premium para barberías y eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* NAVBAR GLOBAL */}
        <nav className="flex items-center justify-between px-8 py-4 bg-zinc-950 text-white sticky top-0 z-50 shadow-md">
          <div className="text-2xl font-black tracking-tighter italic">
            BARBER<span className="text-amber-500">PRO</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/barberias" className="hover:text-amber-500 transition">Barberías</Link>
            <Link href="/eventos" className="hover:text-amber-500 transition">Eventos</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/admin" 
              className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-md font-bold text-sm transition"
            >
              PANEL ADMIN
            </Link>
          </div>
        </nav>

        {/* CONTENIDO DE LAS PÁGINAS */}
        {children}
      </body>
    </html>
  );
}