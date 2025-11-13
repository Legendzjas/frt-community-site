import "./../styles/globals.css";

export const metadata = {
  title: "FRT — Fraternity | Communauté Gaming",
  description: "Suivi serveurs, streamers et liens rapides. Là où d’autres tombent, nous renaissons."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              {/* pastille 'phoenix' */}
              <div style={{width:34,height:34,borderRadius:"50%",
                background:"radial-gradient(circle at 30% 30%, var(--glow), var(--lava))",
                boxShadow:"0 0 0 2px rgba(255,255,255,.08)"}}
                aria-hidden="true"/>
              <div>
                <strong style={{display:"block"}}>FRT — Fraternity</strong>
                <small style={{opacity:.8}}>Là où d’autres tombent, nous renaissons</small>
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
