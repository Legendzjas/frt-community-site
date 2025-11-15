import "./../styles/globals.css";

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
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {/* Pastille « logo » FRT */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 30%, var(--glow), var(--lava))",
                  boxShadow: "0 0 10px rgba(255,91,46,0.6)",
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
