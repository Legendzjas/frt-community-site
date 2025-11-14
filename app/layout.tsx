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
              {/* Logo FRT Phoenix animé */}
              <img 
                src="https://media.giphy.com/media/NzaAP8kgLwU894p4Hn/giphy.gif" 
                alt="Logo FRT Phoenix"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 0 12px rgba(255,91,46,0.65)"
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://i.imgur.com/NT4EFpQ.png";
                }}
              />
              <div>
                <strong style={{display:"block",fontSize:"1.05rem"}}>FRT — Fraternity</strong>
                <small style={{opacity:.8,fontSize:"0.85rem"}}>Là où d’autres tombent, nous renaissons</small>
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
