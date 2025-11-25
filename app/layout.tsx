import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/servers", label: "Serveurs" },
  { href: "/streamers", label: "Streamers" },
  { href: "/history", label: "Histoire" },
  { href: "/links", label: "Liens" },
];

export const metadata: Metadata = {
  title: "FRT — Fraternity",
  description:
    "Communauté gaming FRT — Là où d'autres tombent, nous renaissons.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${body.variable} ${display.variable}`}>
        <div className="page-frame">
          <header className="site-header">
            <div className="shell header-inner">
              <Link
                href="/"
                className="brand"
                aria-label="Retour à l'accueil FRT"
              >
                <span className="brand-mark" aria-hidden>
                  <Image
                    src="/frt-logo.svg"
                    alt=""
                    width={46}
                    height={46}
                    priority
                  />
                </span>
                <span className="brand-meta">
                  <span className="brand-title">FRT — Fraternity</span>
                  <span className="brand-subtitle">
                    Là où d&apos;autres tombent, nous renaissons.
                  </span>
                </span>
              </Link>

              <nav className="nav" aria-label="Navigation principale">
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                className="pill-cta"
                href="https://discord.gg/mMgaaytKgJ"
                target="_blank"
                rel="noreferrer"
              >
                Rejoindre le Discord
              </a>
            </div>
          </header>

          <main className="page-main">{children}</main>

          <footer className="site-footer">
            © {new Date().getFullYear()} FRT — Fraternity. Tous droits réservés.
          </footer>
        </div>
      </body>
    </html>
  );
}
