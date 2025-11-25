import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRT — Fraternity",
  description: "Communauté gaming FRT — Là où d’autres tombent, nous renaissons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#08070b] text-white">
        {/* HEADER */}
        <header className="border-b border-white/5 bg-[#08070b]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* 🔥 LOGO FRT + TEXTE */}
            <div className="flex items-center gap-3">
              <Image
                src="/frt-logo.png"   // IMPORTANT : le fichier dans /public
                alt="Logo FRT"
                width={42}
                height={42}
                className="rounded-full object-cover"
                style={{
                  boxShadow: "0 0 14px rgba(255,120,60,0.7)",
                }}
              />

              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">
                  FRT — Fraternity
                </div>
                <div className="text-xs text-white/60">
                  Là où d’autres tombent, nous renaissons
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="flex items-center gap-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <Link href="/servers" className="hover:text-white transition">Serveurs</Link>
              <Link href="/streamers" className="hover:text-white transition">Streamers</Link>
              <Link href="/links" className="hover:text-white transition">Liens</Link>
            </nav>
          </div>
        </header>

        {/* CONTENU DES PAGES */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} FRT — Fraternity. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
