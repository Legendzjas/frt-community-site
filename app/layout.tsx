import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import PageShell from "./page-shell";

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
                    src="/frt-logo.gif"
                    alt=""
                    width={46}
                    height={46}
                    priority
                    unoptimized
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
                <Link href="/">Accueil</Link>
                <div className="nav-group">
                  <Link href="/games" className="nav-trigger" aria-haspopup="true">
                    Jeux <span aria-hidden>▾</span>
                  </Link>
                  <div className="nav-menu" role="menu" aria-label="Jeux FRT">
                    <Link href="/games/ark-evolved">ARK (Evolved)</Link>
                    <Link href="/games/ark-ascended">ARK (Ascended)</Link>
                    <Link href="/games/the-ants-underground">
                      The Ant&apos;s Underground
                    </Link>
                  </div>
                </div>
                <Link href="/streamers">Streamers</Link>
                <Link href="/history">Histoire</Link>
                <Link href="/leaderboard">Classement</Link>
              </nav>

              <a
                className="pill-cta discord-cta"
                href="https://discord.gg/mMgaaytKgJ"
                target="_blank"
                rel="noreferrer"
                aria-label="Rejoindre le Discord"
              >
                <Image
                  src="/discord-icon.svg"
                  alt=""
                  width={46}
                  height={46}
                  priority
                  style={{ display: "block" }}
                />
                <span className="sr-only">Rejoindre le Discord</span>
              </a>
            </div>
          </header>

          <PageShell>{children}</PageShell>

          <footer className="site-footer">
            © {new Date().getFullYear()} FRT — Fraternity. Tous droits réservés.
          </footer>
        </div>
      </body>
    </html>
  );
}
