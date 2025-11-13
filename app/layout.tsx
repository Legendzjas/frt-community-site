import "./../styles/globals.css";
export const metadata = {
  title: "PHF / FRT — Communauté Gaming",
  description: "Suivi serveurs, streamers et liens rapides."
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr">
      <body>
        <header>
          <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:"radial-gradient(circle at 30% 30%, var(--brand2), var(--brand))"}}/>
              <strong>PHF / FRT</strong>
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
        <footer className="container" style={{borderTop:"1px solid rgba(255,255,255,.06)",color:"var(--muted)"}}>
          © {new Date().getFullYear()} PHF / FRT — Communauté gaming.
        </footer>
      </body>
    </html>
  );
}
