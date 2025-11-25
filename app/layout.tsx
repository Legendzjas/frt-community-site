import "./../styles/globals.css";
import Image from "next/image";

export const metadata = {
  title: "FRT — Fraternity | Communauté Gaming",
  description:
    "Site communautaire FRT : informations, streamers et accès aux serveurs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Zone logo + texte FRT */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {/* LOGO FRT à la place du rond orange */}
              <Image
                src="/frt-logo.png"    // <- mets ici le nom exact de ton fichier dans /public
                alt="Logo FRT"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 0 12px rgba(255,91,46,0.7)",
                }}
              />

              <div>
                <strong style={{ display: "block", fontSize: "1.05rem" }}>
                  FRT — Fraternity
                </strong>
                <small style={{ opacity: 0.8, fontSize: "0.85rem" }}>
                  Là où d’autres tombent, nous renaissons
                </small>
              </div>
            </div>

            {/* Navigation */}
            <nav>
              <a href="/">Accueil</a>
              <a href="/servers">Serveurs</a>
              <a href="/streamers">Streamers</a>
              <a href="/links">Liens</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="container">
          © {new Date().getFullYear()} FRT — Communauté gaming. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
