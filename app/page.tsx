export default function Home() {
  return (
    <>
      {/* HERO volcanique avec ton image /Hero.png (gérée dans globals.css) */}
      <section className="hero">
        <div className="container wrap">
          <div>
            <span className="badge">🔥 Communauté PHF / FRT</span>
            <h1 className="title">
              La fraternité <span className="phoenix-text">renaît des cendres</span>.
            </h1>
            <p className="lead">
              Bienvenue sur le hub <strong>PHF / FRT</strong> — suivi de nos serveurs,
              mise en avant des streamers et lancement rapide de vos jeux (Steam://…).
              Rassemblement, entraide, performance.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 14,
                flexWrap: "wrap",
              }}
            >
              <a className="btn" href="/servers">
                Voir les serveurs
              </a>
              <a className="btn ghost" href="/streamers">
                Découvrir les streamers
              </a>
            </div>
          </div>

          <div className="card" style={{ background: "rgba(0,0,0,.35)" }}>
            <h3>Infos rapides</h3>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>🎮 Accès “Serveurs” : statut, carte, joueurs</li>
              <li>📺 Streamers PHF / FRT : Twitch / YouTube</li>
              <li>⚡ Liens rapides : Steam, Discord, outils</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cartes d’accès (section du bas) */}
      <section style={{ paddingTop: 32 }}>
        <div className="grid">
          <article className="card">
            <h3>🎮 Serveurs</h3>
            <p>Consulte l’état des serveurs et le nombre de joueurs en ligne.</p>
            <a className="btn" href="/servers">
              Voir le suivi
            </a>
          </article>
          <article className="card">
            <h3>📺 Streamers</h3>
            <p>Découvre nos créateurs de contenu et soutiens le live.</p>
            <a className="btn" href="/streamers">
              Voir les chaînes
            </a>
          </article>
          <article className="card">
            <h3>⚡ Liens rapides</h3>
            <p>Lance tes jeux et utilitaires en un clic (Steam, Discord…).</p>
            <a className="btn" href="/links">
              Ouvrir
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
